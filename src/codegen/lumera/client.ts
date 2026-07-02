// @ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as lumeraActionV1TxRegistry from "./action/v1/tx.registry";
import * as lumeraAuditV1TxRegistry from "./audit/v1/tx.registry";
import * as lumeraClaimTxRegistry from "./claim/tx.registry";
import * as lumeraErc20policyTxRegistry from "./erc20policy/tx.registry";
import * as lumeraEvmigrationTxRegistry from "./evmigration/tx.registry";
import * as lumeraLumeraidTxRegistry from "./lumeraid/tx.registry";
import * as lumeraSupernodeV1TxRegistry from "./supernode/v1/tx.registry";
import * as lumeraActionV1TxAmino from "./action/v1/tx.amino";
import * as lumeraAuditV1TxAmino from "./audit/v1/tx.amino";
import * as lumeraClaimTxAmino from "./claim/tx.amino";
import * as lumeraErc20policyTxAmino from "./erc20policy/tx.amino";
import * as lumeraEvmigrationTxAmino from "./evmigration/tx.amino";
import * as lumeraLumeraidTxAmino from "./lumeraid/tx.amino";
import * as lumeraSupernodeV1TxAmino from "./supernode/v1/tx.amino";
export const lumeraAminoConverters = {
  ...lumeraActionV1TxAmino.AminoConverter,
  ...lumeraAuditV1TxAmino.AminoConverter,
  ...lumeraClaimTxAmino.AminoConverter,
  ...lumeraErc20policyTxAmino.AminoConverter,
  ...lumeraEvmigrationTxAmino.AminoConverter,
  ...lumeraLumeraidTxAmino.AminoConverter,
  ...lumeraSupernodeV1TxAmino.AminoConverter
};
export const lumeraProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...lumeraActionV1TxRegistry.registry, ...lumeraAuditV1TxRegistry.registry, ...lumeraClaimTxRegistry.registry, ...lumeraErc20policyTxRegistry.registry, ...lumeraEvmigrationTxRegistry.registry, ...lumeraLumeraidTxRegistry.registry, ...lumeraSupernodeV1TxRegistry.registry];
export const getSigningLumeraClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...lumeraProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...lumeraAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningLumeraClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningLumeraClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};