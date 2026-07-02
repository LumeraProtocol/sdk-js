// @ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgSetRegistrationPolicy, MsgSetRegistrationPolicyResponse } from "./tx";
/** Msg defines the governance-controlled ERC20 registration policy service. */
export interface Msg {
  /**
   * SetRegistrationPolicy sets the IBC voucher ERC20 auto-registration policy.
   * Only the governance module account (x/gov authority) may call this.
   */
  setRegistrationPolicy(request: MsgSetRegistrationPolicy): Promise<MsgSetRegistrationPolicyResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* SetRegistrationPolicy sets the IBC voucher ERC20 auto-registration policy.
   Only the governance module account (x/gov authority) may call this. */
  setRegistrationPolicy = async (request: MsgSetRegistrationPolicy): Promise<MsgSetRegistrationPolicyResponse> => {
    const data = MsgSetRegistrationPolicy.encode(request).finish();
    const promise = this.rpc.request("lumera.erc20policy.Msg", "SetRegistrationPolicy", data);
    return promise.then(data => MsgSetRegistrationPolicyResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};