// @ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types";
import { MsgSetRegistrationPolicy } from "./tx";
/**
 * SetRegistrationPolicy sets the IBC voucher ERC20 auto-registration policy.
 * Only the governance module account (x/gov authority) may call this.
 * @name setRegistrationPolicy
 * @package lumera.erc20policy
 * @see proto service: lumera.erc20policy.SetRegistrationPolicy
 */
export const setRegistrationPolicy = buildTx<MsgSetRegistrationPolicy>({
  msg: MsgSetRegistrationPolicy
});