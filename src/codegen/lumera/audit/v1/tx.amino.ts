// @ts-nocheck
/* eslint-disable */
import { MsgUpdateParams, MsgSubmitEpochReport, MsgSubmitEvidence, MsgSubmitStorageRecheckEvidence, MsgClaimHealComplete, MsgSubmitHealVerification } from "./tx";
export const AminoConverter = {
  "/lumera.audit.v1.MsgUpdateParams": {
    aminoType: "lumera/x/audit/v1/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/lumera.audit.v1.MsgSubmitEpochReport": {
    aminoType: "/lumera.audit.v1.MsgSubmitEpochReport",
    toAmino: MsgSubmitEpochReport.toAmino,
    fromAmino: MsgSubmitEpochReport.fromAmino
  },
  "/lumera.audit.v1.MsgSubmitEvidence": {
    aminoType: "/lumera.audit.v1.MsgSubmitEvidence",
    toAmino: MsgSubmitEvidence.toAmino,
    fromAmino: MsgSubmitEvidence.fromAmino
  },
  "/lumera.audit.v1.MsgSubmitStorageRecheckEvidence": {
    aminoType: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidence",
    toAmino: MsgSubmitStorageRecheckEvidence.toAmino,
    fromAmino: MsgSubmitStorageRecheckEvidence.fromAmino
  },
  "/lumera.audit.v1.MsgClaimHealComplete": {
    aminoType: "/lumera.audit.v1.MsgClaimHealComplete",
    toAmino: MsgClaimHealComplete.toAmino,
    fromAmino: MsgClaimHealComplete.fromAmino
  },
  "/lumera.audit.v1.MsgSubmitHealVerification": {
    aminoType: "/lumera.audit.v1.MsgSubmitHealVerification",
    toAmino: MsgSubmitHealVerification.toAmino,
    fromAmino: MsgSubmitHealVerification.fromAmino
  }
};