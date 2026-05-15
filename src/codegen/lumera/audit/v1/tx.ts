// @ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { HostReport, HostReportAmino, StorageChallengeObservation, StorageChallengeObservationAmino, StorageProofResult, StorageProofResultAmino, StorageProofResultClass } from "./audit";
import { EvidenceType } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, isSet } from "../../../helpers";
/**
 * @name MsgUpdateParams
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  authority: string;
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  authority: string;
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "lumera/x/audit/v1/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lumera.audit.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * @name MsgSubmitEpochReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEpochReport
 */
export interface MsgSubmitEpochReport {
  /**
   * creator is the transaction signer.
   */
  creator: string;
  epochId: bigint;
  hostReport: HostReport;
  storageChallengeObservations: StorageChallengeObservation[];
  storageProofResults: StorageProofResult[];
}
export interface MsgSubmitEpochReportProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitEpochReport";
  value: Uint8Array;
}
/**
 * @name MsgSubmitEpochReportAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEpochReport
 */
export interface MsgSubmitEpochReportAmino {
  /**
   * creator is the transaction signer.
   */
  creator: string;
  epoch_id: string;
  host_report: HostReportAmino;
  storage_challenge_observations: StorageChallengeObservationAmino[];
  storage_proof_results: StorageProofResultAmino[];
}
export interface MsgSubmitEpochReportAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitEpochReport";
  value: MsgSubmitEpochReportAmino;
}
/**
 * @name MsgSubmitEpochReportResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEpochReportResponse
 */
export interface MsgSubmitEpochReportResponse {}
export interface MsgSubmitEpochReportResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitEpochReportResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitEpochReportResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEpochReportResponse
 */
export interface MsgSubmitEpochReportResponseAmino {}
export interface MsgSubmitEpochReportResponseAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitEpochReportResponse";
  value: MsgSubmitEpochReportResponseAmino;
}
/**
 * @name MsgSubmitEvidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidence {
  creator: string;
  subjectAddress: string;
  evidenceType: EvidenceType;
  actionId: string;
  /**
   * metadata is JSON for the type-specific Evidence metadata message.
   * The chain stores protobuf-binary bytes derived from this JSON.
   */
  metadata: string;
}
export interface MsgSubmitEvidenceProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitEvidence";
  value: Uint8Array;
}
/**
 * @name MsgSubmitEvidenceAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidenceAmino {
  creator: string;
  subject_address: string;
  evidence_type: EvidenceType;
  action_id: string;
  /**
   * metadata is JSON for the type-specific Evidence metadata message.
   * The chain stores protobuf-binary bytes derived from this JSON.
   */
  metadata: string;
}
export interface MsgSubmitEvidenceAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitEvidence";
  value: MsgSubmitEvidenceAmino;
}
/**
 * @name MsgSubmitEvidenceResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponse {
  evidenceId: bigint;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitEvidenceResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitEvidenceResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponseAmino {
  evidence_id: string;
}
export interface MsgSubmitEvidenceResponseAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitEvidenceResponse";
  value: MsgSubmitEvidenceResponseAmino;
}
/**
 * @name MsgSubmitStorageRecheckEvidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitStorageRecheckEvidence
 */
export interface MsgSubmitStorageRecheckEvidence {
  creator: string;
  epochId: bigint;
  challengedSupernodeAccount: string;
  ticketId: string;
  challengedResultTranscriptHash: string;
  recheckTranscriptHash: string;
  recheckResultClass: StorageProofResultClass;
  details: string;
}
export interface MsgSubmitStorageRecheckEvidenceProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidence";
  value: Uint8Array;
}
/**
 * @name MsgSubmitStorageRecheckEvidenceAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitStorageRecheckEvidence
 */
export interface MsgSubmitStorageRecheckEvidenceAmino {
  creator: string;
  epoch_id: string;
  challenged_supernode_account: string;
  ticket_id: string;
  challenged_result_transcript_hash: string;
  recheck_transcript_hash: string;
  recheck_result_class: StorageProofResultClass;
  details: string;
}
export interface MsgSubmitStorageRecheckEvidenceAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidence";
  value: MsgSubmitStorageRecheckEvidenceAmino;
}
/**
 * @name MsgSubmitStorageRecheckEvidenceResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse
 */
export interface MsgSubmitStorageRecheckEvidenceResponse {}
export interface MsgSubmitStorageRecheckEvidenceResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitStorageRecheckEvidenceResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse
 */
export interface MsgSubmitStorageRecheckEvidenceResponseAmino {}
export interface MsgSubmitStorageRecheckEvidenceResponseAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse";
  value: MsgSubmitStorageRecheckEvidenceResponseAmino;
}
/**
 * @name MsgClaimHealComplete
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgClaimHealComplete
 */
export interface MsgClaimHealComplete {
  creator: string;
  healOpId: bigint;
  ticketId: string;
  healManifestHash: string;
  details: string;
}
export interface MsgClaimHealCompleteProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgClaimHealComplete";
  value: Uint8Array;
}
/**
 * @name MsgClaimHealCompleteAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgClaimHealComplete
 */
export interface MsgClaimHealCompleteAmino {
  creator: string;
  heal_op_id: string;
  ticket_id: string;
  heal_manifest_hash: string;
  details: string;
}
export interface MsgClaimHealCompleteAminoMsg {
  type: "/lumera.audit.v1.MsgClaimHealComplete";
  value: MsgClaimHealCompleteAmino;
}
/**
 * @name MsgClaimHealCompleteResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgClaimHealCompleteResponse
 */
export interface MsgClaimHealCompleteResponse {}
export interface MsgClaimHealCompleteResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgClaimHealCompleteResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimHealCompleteResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgClaimHealCompleteResponse
 */
export interface MsgClaimHealCompleteResponseAmino {}
export interface MsgClaimHealCompleteResponseAminoMsg {
  type: "/lumera.audit.v1.MsgClaimHealCompleteResponse";
  value: MsgClaimHealCompleteResponseAmino;
}
/**
 * @name MsgSubmitHealVerification
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitHealVerification
 */
export interface MsgSubmitHealVerification {
  creator: string;
  healOpId: bigint;
  verified: boolean;
  verificationHash: string;
  details: string;
}
export interface MsgSubmitHealVerificationProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitHealVerification";
  value: Uint8Array;
}
/**
 * @name MsgSubmitHealVerificationAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitHealVerification
 */
export interface MsgSubmitHealVerificationAmino {
  creator: string;
  heal_op_id: string;
  verified: boolean;
  verification_hash: string;
  details: string;
}
export interface MsgSubmitHealVerificationAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitHealVerification";
  value: MsgSubmitHealVerificationAmino;
}
/**
 * @name MsgSubmitHealVerificationResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitHealVerificationResponse
 */
export interface MsgSubmitHealVerificationResponse {}
export interface MsgSubmitHealVerificationResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.MsgSubmitHealVerificationResponse";
  value: Uint8Array;
}
/**
 * @name MsgSubmitHealVerificationResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitHealVerificationResponse
 */
export interface MsgSubmitHealVerificationResponseAmino {}
export interface MsgSubmitHealVerificationResponseAminoMsg {
  type: "/lumera.audit.v1.MsgSubmitHealVerificationResponse";
  value: MsgSubmitHealVerificationResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * @name MsgUpdateParams
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/lumera.audit.v1.MsgUpdateParams",
  aminoType: "lumera/x/audit/v1/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "lumera/x/audit/v1/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/lumera.audit.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitEpochReport(): MsgSubmitEpochReport {
  return {
    creator: "",
    epochId: BigInt(0),
    hostReport: HostReport.fromPartial({}),
    storageChallengeObservations: [],
    storageProofResults: []
  };
}
/**
 * @name MsgSubmitEpochReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEpochReport
 */
export const MsgSubmitEpochReport = {
  typeUrl: "/lumera.audit.v1.MsgSubmitEpochReport",
  is(o: any): o is MsgSubmitEpochReport {
    return o && (o.$typeUrl === MsgSubmitEpochReport.typeUrl || typeof o.creator === "string" && typeof o.epochId === "bigint" && HostReport.is(o.hostReport) && Array.isArray(o.storageChallengeObservations) && (!o.storageChallengeObservations.length || StorageChallengeObservation.is(o.storageChallengeObservations[0])) && Array.isArray(o.storageProofResults) && (!o.storageProofResults.length || StorageProofResult.is(o.storageProofResults[0])));
  },
  isAmino(o: any): o is MsgSubmitEpochReportAmino {
    return o && (o.$typeUrl === MsgSubmitEpochReport.typeUrl || typeof o.creator === "string" && typeof o.epoch_id === "bigint" && HostReport.isAmino(o.host_report) && Array.isArray(o.storage_challenge_observations) && (!o.storage_challenge_observations.length || StorageChallengeObservation.isAmino(o.storage_challenge_observations[0])) && Array.isArray(o.storage_proof_results) && (!o.storage_proof_results.length || StorageProofResult.isAmino(o.storage_proof_results[0])));
  },
  encode(message: MsgSubmitEpochReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.hostReport !== undefined) {
      HostReport.encode(message.hostReport, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.storageChallengeObservations) {
      StorageChallengeObservation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.storageProofResults) {
      StorageProofResult.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEpochReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEpochReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        case 3:
          message.hostReport = HostReport.decode(reader, reader.uint32());
          break;
        case 4:
          message.storageChallengeObservations.push(StorageChallengeObservation.decode(reader, reader.uint32()));
          break;
        case 5:
          message.storageProofResults.push(StorageProofResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitEpochReport>): MsgSubmitEpochReport {
    const message = createBaseMsgSubmitEpochReport();
    message.creator = object.creator ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.hostReport = object.hostReport !== undefined && object.hostReport !== null ? HostReport.fromPartial(object.hostReport) : undefined;
    message.storageChallengeObservations = object.storageChallengeObservations?.map(e => StorageChallengeObservation.fromPartial(e)) || [];
    message.storageProofResults = object.storageProofResults?.map(e => StorageProofResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSubmitEpochReportAmino): MsgSubmitEpochReport {
    const message = createBaseMsgSubmitEpochReport();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.host_report !== undefined && object.host_report !== null) {
      message.hostReport = HostReport.fromAmino(object.host_report);
    }
    message.storageChallengeObservations = object.storage_challenge_observations?.map(e => StorageChallengeObservation.fromAmino(e)) || [];
    message.storageProofResults = object.storage_proof_results?.map(e => StorageProofResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSubmitEpochReport): MsgSubmitEpochReportAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.host_report = message.hostReport ? HostReport.toAmino(message.hostReport) : undefined;
    if (message.storageChallengeObservations) {
      obj.storage_challenge_observations = message.storageChallengeObservations.map(e => e ? StorageChallengeObservation.toAmino(e) : undefined);
    } else {
      obj.storage_challenge_observations = message.storageChallengeObservations;
    }
    if (message.storageProofResults) {
      obj.storage_proof_results = message.storageProofResults.map(e => e ? StorageProofResult.toAmino(e) : undefined);
    } else {
      obj.storage_proof_results = message.storageProofResults;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEpochReportAminoMsg): MsgSubmitEpochReport {
    return MsgSubmitEpochReport.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitEpochReportProtoMsg): MsgSubmitEpochReport {
    return MsgSubmitEpochReport.decode(message.value);
  },
  toProto(message: MsgSubmitEpochReport): Uint8Array {
    return MsgSubmitEpochReport.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEpochReport): MsgSubmitEpochReportProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitEpochReport",
      value: MsgSubmitEpochReport.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSubmitEpochReport.typeUrl)) {
      return;
    }
    HostReport.registerTypeUrl();
    StorageChallengeObservation.registerTypeUrl();
    StorageProofResult.registerTypeUrl();
  }
};
function createBaseMsgSubmitEpochReportResponse(): MsgSubmitEpochReportResponse {
  return {};
}
/**
 * @name MsgSubmitEpochReportResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEpochReportResponse
 */
export const MsgSubmitEpochReportResponse = {
  typeUrl: "/lumera.audit.v1.MsgSubmitEpochReportResponse",
  is(o: any): o is MsgSubmitEpochReportResponse {
    return o && o.$typeUrl === MsgSubmitEpochReportResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitEpochReportResponseAmino {
    return o && o.$typeUrl === MsgSubmitEpochReportResponse.typeUrl;
  },
  encode(_: MsgSubmitEpochReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEpochReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEpochReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitEpochReportResponse>): MsgSubmitEpochReportResponse {
    const message = createBaseMsgSubmitEpochReportResponse();
    return message;
  },
  fromAmino(_: MsgSubmitEpochReportResponseAmino): MsgSubmitEpochReportResponse {
    const message = createBaseMsgSubmitEpochReportResponse();
    return message;
  },
  toAmino(_: MsgSubmitEpochReportResponse): MsgSubmitEpochReportResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEpochReportResponseAminoMsg): MsgSubmitEpochReportResponse {
    return MsgSubmitEpochReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitEpochReportResponseProtoMsg): MsgSubmitEpochReportResponse {
    return MsgSubmitEpochReportResponse.decode(message.value);
  },
  toProto(message: MsgSubmitEpochReportResponse): Uint8Array {
    return MsgSubmitEpochReportResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEpochReportResponse): MsgSubmitEpochReportResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitEpochReportResponse",
      value: MsgSubmitEpochReportResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
  return {
    creator: "",
    subjectAddress: "",
    evidenceType: 0,
    actionId: "",
    metadata: ""
  };
}
/**
 * @name MsgSubmitEvidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEvidence
 */
export const MsgSubmitEvidence = {
  typeUrl: "/lumera.audit.v1.MsgSubmitEvidence",
  is(o: any): o is MsgSubmitEvidence {
    return o && (o.$typeUrl === MsgSubmitEvidence.typeUrl || typeof o.creator === "string" && typeof o.subjectAddress === "string" && isSet(o.evidenceType) && typeof o.actionId === "string" && typeof o.metadata === "string");
  },
  isAmino(o: any): o is MsgSubmitEvidenceAmino {
    return o && (o.$typeUrl === MsgSubmitEvidence.typeUrl || typeof o.creator === "string" && typeof o.subject_address === "string" && isSet(o.evidence_type) && typeof o.action_id === "string" && typeof o.metadata === "string");
  },
  encode(message: MsgSubmitEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subjectAddress !== "") {
      writer.uint32(18).string(message.subjectAddress);
    }
    if (message.evidenceType !== 0) {
      writer.uint32(24).int32(message.evidenceType);
    }
    if (message.actionId !== "") {
      writer.uint32(34).string(message.actionId);
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subjectAddress = reader.string();
          break;
        case 3:
          message.evidenceType = reader.int32() as any;
          break;
        case 4:
          message.actionId = reader.string();
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    message.creator = object.creator ?? "";
    message.subjectAddress = object.subjectAddress ?? "";
    message.evidenceType = object.evidenceType ?? 0;
    message.actionId = object.actionId ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.subject_address !== undefined && object.subject_address !== null) {
      message.subjectAddress = object.subject_address;
    }
    if (object.evidence_type !== undefined && object.evidence_type !== null) {
      message.evidenceType = object.evidence_type;
    }
    if (object.action_id !== undefined && object.action_id !== null) {
      message.actionId = object.action_id;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgSubmitEvidence): MsgSubmitEvidenceAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.subject_address = message.subjectAddress === "" ? undefined : message.subjectAddress;
    obj.evidence_type = message.evidenceType === 0 ? undefined : message.evidenceType;
    obj.action_id = message.actionId === "" ? undefined : message.actionId;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEvidenceAminoMsg): MsgSubmitEvidence {
    return MsgSubmitEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitEvidenceProtoMsg): MsgSubmitEvidence {
    return MsgSubmitEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitEvidence): Uint8Array {
    return MsgSubmitEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitEvidence",
      value: MsgSubmitEvidence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
  return {
    evidenceId: BigInt(0)
  };
}
/**
 * @name MsgSubmitEvidenceResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitEvidenceResponse
 */
export const MsgSubmitEvidenceResponse = {
  typeUrl: "/lumera.audit.v1.MsgSubmitEvidenceResponse",
  is(o: any): o is MsgSubmitEvidenceResponse {
    return o && (o.$typeUrl === MsgSubmitEvidenceResponse.typeUrl || typeof o.evidenceId === "bigint");
  },
  isAmino(o: any): o is MsgSubmitEvidenceResponseAmino {
    return o && (o.$typeUrl === MsgSubmitEvidenceResponse.typeUrl || typeof o.evidence_id === "bigint");
  },
  encode(message: MsgSubmitEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.evidenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.evidenceId = object.evidenceId !== undefined && object.evidenceId !== null ? BigInt(object.evidenceId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    if (object.evidence_id !== undefined && object.evidence_id !== null) {
      message.evidenceId = BigInt(object.evidence_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAmino {
    const obj: any = {};
    obj.evidence_id = message.evidenceId !== BigInt(0) ? message.evidenceId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitEvidenceResponseAminoMsg): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg): MsgSubmitEvidenceResponse {
    return MsgSubmitEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitEvidenceResponse): Uint8Array {
    return MsgSubmitEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitEvidenceResponse",
      value: MsgSubmitEvidenceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitStorageRecheckEvidence(): MsgSubmitStorageRecheckEvidence {
  return {
    creator: "",
    epochId: BigInt(0),
    challengedSupernodeAccount: "",
    ticketId: "",
    challengedResultTranscriptHash: "",
    recheckTranscriptHash: "",
    recheckResultClass: 0,
    details: ""
  };
}
/**
 * @name MsgSubmitStorageRecheckEvidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitStorageRecheckEvidence
 */
export const MsgSubmitStorageRecheckEvidence = {
  typeUrl: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidence",
  is(o: any): o is MsgSubmitStorageRecheckEvidence {
    return o && (o.$typeUrl === MsgSubmitStorageRecheckEvidence.typeUrl || typeof o.creator === "string" && typeof o.epochId === "bigint" && typeof o.challengedSupernodeAccount === "string" && typeof o.ticketId === "string" && typeof o.challengedResultTranscriptHash === "string" && typeof o.recheckTranscriptHash === "string" && isSet(o.recheckResultClass) && typeof o.details === "string");
  },
  isAmino(o: any): o is MsgSubmitStorageRecheckEvidenceAmino {
    return o && (o.$typeUrl === MsgSubmitStorageRecheckEvidence.typeUrl || typeof o.creator === "string" && typeof o.epoch_id === "bigint" && typeof o.challenged_supernode_account === "string" && typeof o.ticket_id === "string" && typeof o.challenged_result_transcript_hash === "string" && typeof o.recheck_transcript_hash === "string" && isSet(o.recheck_result_class) && typeof o.details === "string");
  },
  encode(message: MsgSubmitStorageRecheckEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.challengedSupernodeAccount !== "") {
      writer.uint32(26).string(message.challengedSupernodeAccount);
    }
    if (message.ticketId !== "") {
      writer.uint32(34).string(message.ticketId);
    }
    if (message.challengedResultTranscriptHash !== "") {
      writer.uint32(42).string(message.challengedResultTranscriptHash);
    }
    if (message.recheckTranscriptHash !== "") {
      writer.uint32(50).string(message.recheckTranscriptHash);
    }
    if (message.recheckResultClass !== 0) {
      writer.uint32(56).int32(message.recheckResultClass);
    }
    if (message.details !== "") {
      writer.uint32(66).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitStorageRecheckEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitStorageRecheckEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        case 3:
          message.challengedSupernodeAccount = reader.string();
          break;
        case 4:
          message.ticketId = reader.string();
          break;
        case 5:
          message.challengedResultTranscriptHash = reader.string();
          break;
        case 6:
          message.recheckTranscriptHash = reader.string();
          break;
        case 7:
          message.recheckResultClass = reader.int32() as any;
          break;
        case 8:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitStorageRecheckEvidence>): MsgSubmitStorageRecheckEvidence {
    const message = createBaseMsgSubmitStorageRecheckEvidence();
    message.creator = object.creator ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.challengedSupernodeAccount = object.challengedSupernodeAccount ?? "";
    message.ticketId = object.ticketId ?? "";
    message.challengedResultTranscriptHash = object.challengedResultTranscriptHash ?? "";
    message.recheckTranscriptHash = object.recheckTranscriptHash ?? "";
    message.recheckResultClass = object.recheckResultClass ?? 0;
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitStorageRecheckEvidenceAmino): MsgSubmitStorageRecheckEvidence {
    const message = createBaseMsgSubmitStorageRecheckEvidence();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.challenged_supernode_account !== undefined && object.challenged_supernode_account !== null) {
      message.challengedSupernodeAccount = object.challenged_supernode_account;
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.challenged_result_transcript_hash !== undefined && object.challenged_result_transcript_hash !== null) {
      message.challengedResultTranscriptHash = object.challenged_result_transcript_hash;
    }
    if (object.recheck_transcript_hash !== undefined && object.recheck_transcript_hash !== null) {
      message.recheckTranscriptHash = object.recheck_transcript_hash;
    }
    if (object.recheck_result_class !== undefined && object.recheck_result_class !== null) {
      message.recheckResultClass = object.recheck_result_class;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: MsgSubmitStorageRecheckEvidence): MsgSubmitStorageRecheckEvidenceAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.challenged_supernode_account = message.challengedSupernodeAccount === "" ? undefined : message.challengedSupernodeAccount;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.challenged_result_transcript_hash = message.challengedResultTranscriptHash === "" ? undefined : message.challengedResultTranscriptHash;
    obj.recheck_transcript_hash = message.recheckTranscriptHash === "" ? undefined : message.recheckTranscriptHash;
    obj.recheck_result_class = message.recheckResultClass === 0 ? undefined : message.recheckResultClass;
    obj.details = message.details === "" ? undefined : message.details;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitStorageRecheckEvidenceAminoMsg): MsgSubmitStorageRecheckEvidence {
    return MsgSubmitStorageRecheckEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitStorageRecheckEvidenceProtoMsg): MsgSubmitStorageRecheckEvidence {
    return MsgSubmitStorageRecheckEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitStorageRecheckEvidence): Uint8Array {
    return MsgSubmitStorageRecheckEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitStorageRecheckEvidence): MsgSubmitStorageRecheckEvidenceProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidence",
      value: MsgSubmitStorageRecheckEvidence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitStorageRecheckEvidenceResponse(): MsgSubmitStorageRecheckEvidenceResponse {
  return {};
}
/**
 * @name MsgSubmitStorageRecheckEvidenceResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse
 */
export const MsgSubmitStorageRecheckEvidenceResponse = {
  typeUrl: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse",
  is(o: any): o is MsgSubmitStorageRecheckEvidenceResponse {
    return o && o.$typeUrl === MsgSubmitStorageRecheckEvidenceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitStorageRecheckEvidenceResponseAmino {
    return o && o.$typeUrl === MsgSubmitStorageRecheckEvidenceResponse.typeUrl;
  },
  encode(_: MsgSubmitStorageRecheckEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitStorageRecheckEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitStorageRecheckEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitStorageRecheckEvidenceResponse>): MsgSubmitStorageRecheckEvidenceResponse {
    const message = createBaseMsgSubmitStorageRecheckEvidenceResponse();
    return message;
  },
  fromAmino(_: MsgSubmitStorageRecheckEvidenceResponseAmino): MsgSubmitStorageRecheckEvidenceResponse {
    const message = createBaseMsgSubmitStorageRecheckEvidenceResponse();
    return message;
  },
  toAmino(_: MsgSubmitStorageRecheckEvidenceResponse): MsgSubmitStorageRecheckEvidenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitStorageRecheckEvidenceResponseAminoMsg): MsgSubmitStorageRecheckEvidenceResponse {
    return MsgSubmitStorageRecheckEvidenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitStorageRecheckEvidenceResponseProtoMsg): MsgSubmitStorageRecheckEvidenceResponse {
    return MsgSubmitStorageRecheckEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitStorageRecheckEvidenceResponse): Uint8Array {
    return MsgSubmitStorageRecheckEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitStorageRecheckEvidenceResponse): MsgSubmitStorageRecheckEvidenceResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitStorageRecheckEvidenceResponse",
      value: MsgSubmitStorageRecheckEvidenceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimHealComplete(): MsgClaimHealComplete {
  return {
    creator: "",
    healOpId: BigInt(0),
    ticketId: "",
    healManifestHash: "",
    details: ""
  };
}
/**
 * @name MsgClaimHealComplete
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgClaimHealComplete
 */
export const MsgClaimHealComplete = {
  typeUrl: "/lumera.audit.v1.MsgClaimHealComplete",
  is(o: any): o is MsgClaimHealComplete {
    return o && (o.$typeUrl === MsgClaimHealComplete.typeUrl || typeof o.creator === "string" && typeof o.healOpId === "bigint" && typeof o.ticketId === "string" && typeof o.healManifestHash === "string" && typeof o.details === "string");
  },
  isAmino(o: any): o is MsgClaimHealCompleteAmino {
    return o && (o.$typeUrl === MsgClaimHealComplete.typeUrl || typeof o.creator === "string" && typeof o.heal_op_id === "bigint" && typeof o.ticket_id === "string" && typeof o.heal_manifest_hash === "string" && typeof o.details === "string");
  },
  encode(message: MsgClaimHealComplete, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.healOpId !== BigInt(0)) {
      writer.uint32(16).uint64(message.healOpId);
    }
    if (message.ticketId !== "") {
      writer.uint32(26).string(message.ticketId);
    }
    if (message.healManifestHash !== "") {
      writer.uint32(34).string(message.healManifestHash);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimHealComplete {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimHealComplete();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.healOpId = reader.uint64();
          break;
        case 3:
          message.ticketId = reader.string();
          break;
        case 4:
          message.healManifestHash = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimHealComplete>): MsgClaimHealComplete {
    const message = createBaseMsgClaimHealComplete();
    message.creator = object.creator ?? "";
    message.healOpId = object.healOpId !== undefined && object.healOpId !== null ? BigInt(object.healOpId.toString()) : BigInt(0);
    message.ticketId = object.ticketId ?? "";
    message.healManifestHash = object.healManifestHash ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: MsgClaimHealCompleteAmino): MsgClaimHealComplete {
    const message = createBaseMsgClaimHealComplete();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.heal_op_id !== undefined && object.heal_op_id !== null) {
      message.healOpId = BigInt(object.heal_op_id);
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.heal_manifest_hash !== undefined && object.heal_manifest_hash !== null) {
      message.healManifestHash = object.heal_manifest_hash;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: MsgClaimHealComplete): MsgClaimHealCompleteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.heal_op_id = message.healOpId !== BigInt(0) ? message.healOpId?.toString() : undefined;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.heal_manifest_hash = message.healManifestHash === "" ? undefined : message.healManifestHash;
    obj.details = message.details === "" ? undefined : message.details;
    return obj;
  },
  fromAminoMsg(object: MsgClaimHealCompleteAminoMsg): MsgClaimHealComplete {
    return MsgClaimHealComplete.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimHealCompleteProtoMsg): MsgClaimHealComplete {
    return MsgClaimHealComplete.decode(message.value);
  },
  toProto(message: MsgClaimHealComplete): Uint8Array {
    return MsgClaimHealComplete.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimHealComplete): MsgClaimHealCompleteProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgClaimHealComplete",
      value: MsgClaimHealComplete.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimHealCompleteResponse(): MsgClaimHealCompleteResponse {
  return {};
}
/**
 * @name MsgClaimHealCompleteResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgClaimHealCompleteResponse
 */
export const MsgClaimHealCompleteResponse = {
  typeUrl: "/lumera.audit.v1.MsgClaimHealCompleteResponse",
  is(o: any): o is MsgClaimHealCompleteResponse {
    return o && o.$typeUrl === MsgClaimHealCompleteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimHealCompleteResponseAmino {
    return o && o.$typeUrl === MsgClaimHealCompleteResponse.typeUrl;
  },
  encode(_: MsgClaimHealCompleteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimHealCompleteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimHealCompleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgClaimHealCompleteResponse>): MsgClaimHealCompleteResponse {
    const message = createBaseMsgClaimHealCompleteResponse();
    return message;
  },
  fromAmino(_: MsgClaimHealCompleteResponseAmino): MsgClaimHealCompleteResponse {
    const message = createBaseMsgClaimHealCompleteResponse();
    return message;
  },
  toAmino(_: MsgClaimHealCompleteResponse): MsgClaimHealCompleteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimHealCompleteResponseAminoMsg): MsgClaimHealCompleteResponse {
    return MsgClaimHealCompleteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimHealCompleteResponseProtoMsg): MsgClaimHealCompleteResponse {
    return MsgClaimHealCompleteResponse.decode(message.value);
  },
  toProto(message: MsgClaimHealCompleteResponse): Uint8Array {
    return MsgClaimHealCompleteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimHealCompleteResponse): MsgClaimHealCompleteResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgClaimHealCompleteResponse",
      value: MsgClaimHealCompleteResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitHealVerification(): MsgSubmitHealVerification {
  return {
    creator: "",
    healOpId: BigInt(0),
    verified: false,
    verificationHash: "",
    details: ""
  };
}
/**
 * @name MsgSubmitHealVerification
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitHealVerification
 */
export const MsgSubmitHealVerification = {
  typeUrl: "/lumera.audit.v1.MsgSubmitHealVerification",
  is(o: any): o is MsgSubmitHealVerification {
    return o && (o.$typeUrl === MsgSubmitHealVerification.typeUrl || typeof o.creator === "string" && typeof o.healOpId === "bigint" && typeof o.verified === "boolean" && typeof o.verificationHash === "string" && typeof o.details === "string");
  },
  isAmino(o: any): o is MsgSubmitHealVerificationAmino {
    return o && (o.$typeUrl === MsgSubmitHealVerification.typeUrl || typeof o.creator === "string" && typeof o.heal_op_id === "bigint" && typeof o.verified === "boolean" && typeof o.verification_hash === "string" && typeof o.details === "string");
  },
  encode(message: MsgSubmitHealVerification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.healOpId !== BigInt(0)) {
      writer.uint32(16).uint64(message.healOpId);
    }
    if (message.verified === true) {
      writer.uint32(24).bool(message.verified);
    }
    if (message.verificationHash !== "") {
      writer.uint32(34).string(message.verificationHash);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitHealVerification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitHealVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.healOpId = reader.uint64();
          break;
        case 3:
          message.verified = reader.bool();
          break;
        case 4:
          message.verificationHash = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitHealVerification>): MsgSubmitHealVerification {
    const message = createBaseMsgSubmitHealVerification();
    message.creator = object.creator ?? "";
    message.healOpId = object.healOpId !== undefined && object.healOpId !== null ? BigInt(object.healOpId.toString()) : BigInt(0);
    message.verified = object.verified ?? false;
    message.verificationHash = object.verificationHash ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitHealVerificationAmino): MsgSubmitHealVerification {
    const message = createBaseMsgSubmitHealVerification();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.heal_op_id !== undefined && object.heal_op_id !== null) {
      message.healOpId = BigInt(object.heal_op_id);
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    if (object.verification_hash !== undefined && object.verification_hash !== null) {
      message.verificationHash = object.verification_hash;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: MsgSubmitHealVerification): MsgSubmitHealVerificationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.heal_op_id = message.healOpId !== BigInt(0) ? message.healOpId?.toString() : undefined;
    obj.verified = message.verified === false ? undefined : message.verified;
    obj.verification_hash = message.verificationHash === "" ? undefined : message.verificationHash;
    obj.details = message.details === "" ? undefined : message.details;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitHealVerificationAminoMsg): MsgSubmitHealVerification {
    return MsgSubmitHealVerification.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitHealVerificationProtoMsg): MsgSubmitHealVerification {
    return MsgSubmitHealVerification.decode(message.value);
  },
  toProto(message: MsgSubmitHealVerification): Uint8Array {
    return MsgSubmitHealVerification.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitHealVerification): MsgSubmitHealVerificationProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitHealVerification",
      value: MsgSubmitHealVerification.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitHealVerificationResponse(): MsgSubmitHealVerificationResponse {
  return {};
}
/**
 * @name MsgSubmitHealVerificationResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.MsgSubmitHealVerificationResponse
 */
export const MsgSubmitHealVerificationResponse = {
  typeUrl: "/lumera.audit.v1.MsgSubmitHealVerificationResponse",
  is(o: any): o is MsgSubmitHealVerificationResponse {
    return o && o.$typeUrl === MsgSubmitHealVerificationResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitHealVerificationResponseAmino {
    return o && o.$typeUrl === MsgSubmitHealVerificationResponse.typeUrl;
  },
  encode(_: MsgSubmitHealVerificationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitHealVerificationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitHealVerificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitHealVerificationResponse>): MsgSubmitHealVerificationResponse {
    const message = createBaseMsgSubmitHealVerificationResponse();
    return message;
  },
  fromAmino(_: MsgSubmitHealVerificationResponseAmino): MsgSubmitHealVerificationResponse {
    const message = createBaseMsgSubmitHealVerificationResponse();
    return message;
  },
  toAmino(_: MsgSubmitHealVerificationResponse): MsgSubmitHealVerificationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitHealVerificationResponseAminoMsg): MsgSubmitHealVerificationResponse {
    return MsgSubmitHealVerificationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitHealVerificationResponseProtoMsg): MsgSubmitHealVerificationResponse {
    return MsgSubmitHealVerificationResponse.decode(message.value);
  },
  toProto(message: MsgSubmitHealVerificationResponse): Uint8Array {
    return MsgSubmitHealVerificationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitHealVerificationResponse): MsgSubmitHealVerificationResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.MsgSubmitHealVerificationResponse",
      value: MsgSubmitHealVerificationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};