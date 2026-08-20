import { beforeEach, describe, expect, it, vi } from "vitest";
import type { OfflineSigner } from "@cosmjs/proto-signing";

const {
  connectWithSignerMock,
  gasPriceFromStringMock,
  CosmjsTxClientMock,
  createProtobufRpcClientMock,
  QueryClientMock,
  ActionQueryClientMock,
  SupernodeQueryClientMock,
  connectCometMock,
} = vi.hoisted(() => ({
  connectWithSignerMock: vi.fn(),
  gasPriceFromStringMock: vi.fn(),
  CosmjsTxClientMock: vi.fn(),
  createProtobufRpcClientMock: vi.fn(),
  QueryClientMock: vi.fn(),
  ActionQueryClientMock: vi.fn(),
  SupernodeQueryClientMock: vi.fn(),
  connectCometMock: vi.fn(),
}));

vi.mock("@cosmjs/stargate", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@cosmjs/stargate")>();
  return {
    ...actual,
    SigningStargateClient: { connectWithSigner: connectWithSignerMock },
    GasPrice: { fromString: gasPriceFromStringMock },
    QueryClient: QueryClientMock,
    createProtobufRpcClient: createProtobufRpcClientMock,
  };
});

vi.mock("@cosmjs/tendermint-rpc", () => ({ connectComet: connectCometMock }));
vi.mock("src/blockchain/cosmjs", () => ({ CosmjsTxClient: CosmjsTxClientMock }));
vi.mock("src/codegen/lumera/action/v1/query.rpc.Query", () => ({ QueryClientImpl: ActionQueryClientMock }));
vi.mock("src/codegen/lumera/supernode/v1/query.rpc.Query", () => ({ QueryClientImpl: SupernodeQueryClientMock }));

import { makeBlockchainClient, CosmjsRpcBlockchainClient } from "src/blockchain/client";
import { CascadeMetadata } from "src/codegen/lumera/action/v1/metadata";
import { ActionType } from "src/codegen/lumera/action/v1/action_type";
import { ActionState } from "src/codegen/lumera/action/v1/action_state";

describe("makeBlockchainClient", () => {
  const signer: OfflineSigner = {} as OfflineSigner;

  beforeEach(() => {
    connectWithSignerMock.mockReset();
    gasPriceFromStringMock.mockReset();
    CosmjsTxClientMock.mockReset();
    createProtobufRpcClientMock.mockReset();
    QueryClientMock.mockReset();
    ActionQueryClientMock.mockReset();
    SupernodeQueryClientMock.mockReset();
    connectCometMock.mockReset();
    connectCometMock.mockResolvedValue({});
  });

  it("composes CosmJS and RPC query clients into facade", async () => {
    const tmClient = { status: vi.fn() };
    const signingClientStub = { disconnect: vi.fn(), tmClient, getChainId: vi.fn().mockResolvedValue("chain-test") };
    connectWithSignerMock.mockResolvedValue(signingClientStub);
    gasPriceFromStringMock.mockReturnValue({ denom: "ulume", amount: "0.025" });

    const txClientStub = { simulate: vi.fn(), signAndBroadcast: vi.fn() };
    CosmjsTxClientMock.mockImplementation(() => txClientStub);

    const queryClientStub = {};
    QueryClientMock.mockImplementation(() => queryClientStub);
    const rpcStub = {};
    createProtobufRpcClientMock.mockReturnValue(rpcStub);
    ActionQueryClientMock.mockImplementation(() => ({ params: vi.fn(), getAction: vi.fn(), getActionFee: vi.fn() }));
    SupernodeQueryClientMock.mockImplementation(() => ({ params: vi.fn(), getSuperNode: vi.fn() }));

    const client = await makeBlockchainClient({
      rpcUrl: "https://rpc.test",
      lcdUrl: "https://lcd.test",
      chainId: "chain-test",
      signer,
      address: "lumera1address",
      gasPrice: "0.025ulume",
    });

    expect(client).toBeInstanceOf(CosmjsRpcBlockchainClient);
    expect(client.Tx).toBe(txClientStub);
    expect(await client.getChainId()).toBe("chain-test");
  });

  it("decodes protobuf-encoded cascade metadata from live action queries", async () => {
    const tmClient = { status: vi.fn() };
    const signingClientStub = {
      disconnect: vi.fn(),
      tmClient,
      getChainId: vi.fn().mockResolvedValue("chain-test"),
    };
    connectWithSignerMock.mockResolvedValue(signingClientStub);
    gasPriceFromStringMock.mockReturnValue({ denom: "ulume", amount: "0.025" });
    CosmjsTxClientMock.mockImplementation(() => ({}));
    QueryClientMock.mockImplementation(() => ({}));
    createProtobufRpcClientMock.mockReturnValue({});

    const metadata = CascadeMetadata.encode({
      dataHash: "hash-b64",
      fileName: "file.bin",
      rqIdsIc: 4n,
      rqIdsMax: 50n,
      rqIdsIds: ["id-1"],
      signatures: "index.signature",
      public: false,
      availabilityCommitment: undefined,
      chunkProofs: [],
      indexArtifactCount: 0,
      symbolArtifactCount: 0,
    }).finish();
    const getAction = vi.fn().mockResolvedValue({
      action: {
        creator: "lumera1creator",
        actionID: "42",
        actionType: ActionType.ACTION_TYPE_CASCADE,
        metadata,
        price: "10640ulume",
        expirationTime: 100n,
        state: ActionState.ACTION_STATE_DONE,
        blockHeight: 10n,
        superNodes: ["lumera1sn"],
        fileSizeKbs: 64n,
        appPubkey: new Uint8Array(),
      },
    });
    ActionQueryClientMock.mockImplementation(() => ({
      params: vi.fn(),
      getAction,
      getActionFee: vi.fn(),
    }));
    SupernodeQueryClientMock.mockImplementation(() => ({ params: vi.fn() }));

    const client = await makeBlockchainClient({
      rpcUrl: "https://rpc.test",
      lcdUrl: "https://lcd.test",
      chainId: "chain-test",
      signer,
      address: "lumera1address",
      gasPrice: "0.025ulume",
    });
    const action = await client.Action.getAction("42");

    expect(action.state).toBe(ActionState.ACTION_STATE_DONE);
    expect(action.metadata).toMatchObject({
      data_hash: "hash-b64",
      file_name: "file.bin",
      rq_ids_ids: ["id-1"],
      signatures: "index.signature",
    });
  });

  it("omits gas price override when config lacks gasPrice", async () => {
    const tmClient = { status: vi.fn() };
    const signingClientStub = { disconnect: vi.fn(), tmClient, getChainId: vi.fn().mockResolvedValue("chain-alt") };
    connectWithSignerMock.mockResolvedValue(signingClientStub);

    CosmjsTxClientMock.mockImplementation(() => ({}));
    QueryClientMock.mockImplementation(() => ({}));
    createProtobufRpcClientMock.mockReturnValue({});
    ActionQueryClientMock.mockImplementation(() => ({ params: vi.fn() }));
    SupernodeQueryClientMock.mockImplementation(() => ({ params: vi.fn() }));

    await makeBlockchainClient({
      rpcUrl: "https://rpc.alt",
      lcdUrl: "https://lcd.alt",
      chainId: "chain-alt",
      signer,
      address: "lumera1alt",
    });

    expect(gasPriceFromStringMock).not.toHaveBeenCalled();
  });
});
