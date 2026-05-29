// @ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgSubmitEpochReport, MsgSubmitEpochReportResponse, MsgSubmitEvidence, MsgSubmitEvidenceResponse, MsgSubmitStorageRecheckEvidence, MsgSubmitStorageRecheckEvidenceResponse, MsgClaimHealComplete, MsgClaimHealCompleteResponse, MsgSubmitHealVerification, MsgSubmitHealVerificationResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  submitEpochReport(request: MsgSubmitEpochReport): Promise<MsgSubmitEpochReportResponse>;
  /** SubmitEvidence defines the SubmitEvidence RPC. */
  submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;
  /** SubmitStorageRecheckEvidence defines the storage-truth recheck submission path. */
  submitStorageRecheckEvidence(request: MsgSubmitStorageRecheckEvidence): Promise<MsgSubmitStorageRecheckEvidenceResponse>;
  /** ClaimHealComplete defines the healer claim path for a chain-tracked heal op. */
  claimHealComplete(request: MsgClaimHealComplete): Promise<MsgClaimHealCompleteResponse>;
  /** SubmitHealVerification defines the verifier submission path for a chain-tracked heal op. */
  submitHealVerification(request: MsgSubmitHealVerification): Promise<MsgSubmitHealVerificationResponse>;
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
    const promise = this.rpc.request("lumera.audit.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  };
  /* SubmitEpochReport */
  submitEpochReport = async (request: MsgSubmitEpochReport): Promise<MsgSubmitEpochReportResponse> => {
    const data = MsgSubmitEpochReport.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Msg", "SubmitEpochReport", data);
    return promise.then(data => MsgSubmitEpochReportResponse.decode(new BinaryReader(data)));
  };
  /* SubmitEvidence defines the SubmitEvidence RPC. */
  submitEvidence = async (request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse> => {
    const data = MsgSubmitEvidence.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Msg", "SubmitEvidence", data);
    return promise.then(data => MsgSubmitEvidenceResponse.decode(new BinaryReader(data)));
  };
  /* SubmitStorageRecheckEvidence defines the storage-truth recheck submission path. */
  submitStorageRecheckEvidence = async (request: MsgSubmitStorageRecheckEvidence): Promise<MsgSubmitStorageRecheckEvidenceResponse> => {
    const data = MsgSubmitStorageRecheckEvidence.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Msg", "SubmitStorageRecheckEvidence", data);
    return promise.then(data => MsgSubmitStorageRecheckEvidenceResponse.decode(new BinaryReader(data)));
  };
  /* ClaimHealComplete defines the healer claim path for a chain-tracked heal op. */
  claimHealComplete = async (request: MsgClaimHealComplete): Promise<MsgClaimHealCompleteResponse> => {
    const data = MsgClaimHealComplete.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Msg", "ClaimHealComplete", data);
    return promise.then(data => MsgClaimHealCompleteResponse.decode(new BinaryReader(data)));
  };
  /* SubmitHealVerification defines the verifier submission path for a chain-tracked heal op. */
  submitHealVerification = async (request: MsgSubmitHealVerification): Promise<MsgSubmitHealVerificationResponse> => {
    const data = MsgSubmitHealVerification.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Msg", "SubmitHealVerification", data);
    return promise.then(data => MsgSubmitHealVerificationResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};