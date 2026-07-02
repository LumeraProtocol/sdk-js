// @ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgClaimLegacyAccount, MsgClaimLegacyAccountResponse, MsgMigrateValidator, MsgMigrateValidatorResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * ClaimLegacyAccount migrates all on-chain state from a legacy (coin-type-118)
   * address to a new (coin-type-60) address. Requires dual-signature proof.
   */
  claimLegacyAccount(request: MsgClaimLegacyAccount): Promise<MsgClaimLegacyAccountResponse>;
  /**
   * MigrateValidator migrates a validator operator from legacy to new address,
   * including all delegations, distribution state, supernode records, and
   * account-level state.
   */
  migrateValidator(request: MsgMigrateValidator): Promise<MsgMigrateValidatorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* UpdateParams defines a (governance) operation for updating the module
   parameters. The authority defaults to the x/gov module account. */
  updateParams = async (request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> => {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* ClaimLegacyAccount migrates all on-chain state from a legacy (coin-type-118)
   address to a new (coin-type-60) address. Requires dual-signature proof. */
  claimLegacyAccount = async (request: MsgClaimLegacyAccount): Promise<MsgClaimLegacyAccountResponse> => {
    const data = MsgClaimLegacyAccount.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Msg", "ClaimLegacyAccount", data);
    return promise.then(data => MsgClaimLegacyAccountResponse.decode(new BinaryReader(data)));
  };
  /* MigrateValidator migrates a validator operator from legacy to new address,
   including all delegations, distribution state, supernode records, and
   account-level state. */
  migrateValidator = async (request: MsgMigrateValidator): Promise<MsgMigrateValidatorResponse> => {
    const data = MsgMigrateValidator.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Msg", "MigrateValidator", data);
    return promise.then(data => MsgMigrateValidatorResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};