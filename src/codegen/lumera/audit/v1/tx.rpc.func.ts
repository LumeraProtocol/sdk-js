// @ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgSubmitEpochReport, MsgSubmitEvidence, MsgSubmitStorageRecheckEvidence, MsgClaimHealComplete, MsgSubmitHealVerification } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * @name submitEpochReport
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.SubmitEpochReport
 */
export const submitEpochReport = buildTx<MsgSubmitEpochReport>({
  msg: MsgSubmitEpochReport
});
/**
 * SubmitEvidence defines the SubmitEvidence RPC.
 * @name submitEvidence
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.SubmitEvidence
 */
export const submitEvidence = buildTx<MsgSubmitEvidence>({
  msg: MsgSubmitEvidence
});
/**
 * SubmitStorageRecheckEvidence defines the storage-truth recheck submission path.
 * @name submitStorageRecheckEvidence
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.SubmitStorageRecheckEvidence
 */
export const submitStorageRecheckEvidence = buildTx<MsgSubmitStorageRecheckEvidence>({
  msg: MsgSubmitStorageRecheckEvidence
});
/**
 * ClaimHealComplete defines the healer claim path for a chain-tracked heal op.
 * @name claimHealComplete
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.ClaimHealComplete
 */
export const claimHealComplete = buildTx<MsgClaimHealComplete>({
  msg: MsgClaimHealComplete
});
/**
 * SubmitHealVerification defines the verifier submission path for a chain-tracked heal op.
 * @name submitHealVerification
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.SubmitHealVerification
 */
export const submitHealVerification = buildTx<MsgSubmitHealVerification>({
  msg: MsgSubmitHealVerification
});