// @ts-nocheck
/* eslint-disable */
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
export enum EvidenceType {
  EVIDENCE_TYPE_UNSPECIFIED = 0,
  /** EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE - action finalization rejected due to an invalid signature / signature-derived data. */
  EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE = 1,
  /** EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10 - action finalization rejected because the attempted finalizer is not in the top-10 supernodes. */
  EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10 = 2,
  EVIDENCE_TYPE_ACTION_EXPIRED = 3,
  /** EVIDENCE_TYPE_STORAGE_CHALLENGE_FAILURE - storage challenge failure evidence submitted by the deterministic challenger. */
  EVIDENCE_TYPE_STORAGE_CHALLENGE_FAILURE = 4,
  /** EVIDENCE_TYPE_CASCADE_CLIENT_FAILURE - client-observed cascade flow failure (upload/download). */
  EVIDENCE_TYPE_CASCADE_CLIENT_FAILURE = 5,
  UNRECOGNIZED = -1,
}
export const EvidenceTypeAmino = EvidenceType;
export function evidenceTypeFromJSON(object: any): EvidenceType {
  switch (object) {
    case 0:
    case "EVIDENCE_TYPE_UNSPECIFIED":
      return EvidenceType.EVIDENCE_TYPE_UNSPECIFIED;
    case 1:
    case "EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE":
      return EvidenceType.EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE;
    case 2:
    case "EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10":
      return EvidenceType.EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10;
    case 3:
    case "EVIDENCE_TYPE_ACTION_EXPIRED":
      return EvidenceType.EVIDENCE_TYPE_ACTION_EXPIRED;
    case 4:
    case "EVIDENCE_TYPE_STORAGE_CHALLENGE_FAILURE":
      return EvidenceType.EVIDENCE_TYPE_STORAGE_CHALLENGE_FAILURE;
    case 5:
    case "EVIDENCE_TYPE_CASCADE_CLIENT_FAILURE":
      return EvidenceType.EVIDENCE_TYPE_CASCADE_CLIENT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}
export function evidenceTypeToJSON(object: EvidenceType): string {
  switch (object) {
    case EvidenceType.EVIDENCE_TYPE_UNSPECIFIED:
      return "EVIDENCE_TYPE_UNSPECIFIED";
    case EvidenceType.EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE:
      return "EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE";
    case EvidenceType.EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10:
      return "EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10";
    case EvidenceType.EVIDENCE_TYPE_ACTION_EXPIRED:
      return "EVIDENCE_TYPE_ACTION_EXPIRED";
    case EvidenceType.EVIDENCE_TYPE_STORAGE_CHALLENGE_FAILURE:
      return "EVIDENCE_TYPE_STORAGE_CHALLENGE_FAILURE";
    case EvidenceType.EVIDENCE_TYPE_CASCADE_CLIENT_FAILURE:
      return "EVIDENCE_TYPE_CASCADE_CLIENT_FAILURE";
    case EvidenceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Evidence is a stable outer record that stores evidence about an audited subject.
 * Type-specific fields are encoded into the `metadata` bytes field.
 * @name Evidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.Evidence
 */
export interface Evidence {
  /**
   * evidence_id is a chain-assigned unique identifier.
   */
  evidenceId: bigint;
  /**
   * subject_address is the audited subject (e.g. supernode-related actor).
   */
  subjectAddress: string;
  /**
   * reporter_address is the submitter of the evidence.
   */
  reporterAddress: string;
  /**
   * action_id optionally links this evidence to a specific action.
   */
  actionId: string;
  /**
   * evidence_type is a stable discriminator used to interpret metadata.
   */
  evidenceType: EvidenceType;
  /**
   * metadata is protobuf-binary bytes of a type-specific Evidence metadata message.
   */
  metadata: Uint8Array;
  /**
   * reported_height is the block height when the evidence was submitted.
   */
  reportedHeight: bigint;
}
export interface EvidenceProtoMsg {
  typeUrl: "/lumera.audit.v1.Evidence";
  value: Uint8Array;
}
/**
 * Evidence is a stable outer record that stores evidence about an audited subject.
 * Type-specific fields are encoded into the `metadata` bytes field.
 * @name EvidenceAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.Evidence
 */
export interface EvidenceAmino {
  /**
   * evidence_id is a chain-assigned unique identifier.
   */
  evidence_id: string;
  /**
   * subject_address is the audited subject (e.g. supernode-related actor).
   */
  subject_address: string;
  /**
   * reporter_address is the submitter of the evidence.
   */
  reporter_address: string;
  /**
   * action_id optionally links this evidence to a specific action.
   */
  action_id: string;
  /**
   * evidence_type is a stable discriminator used to interpret metadata.
   */
  evidence_type: EvidenceType;
  /**
   * metadata is protobuf-binary bytes of a type-specific Evidence metadata message.
   */
  metadata: string;
  /**
   * reported_height is the block height when the evidence was submitted.
   */
  reported_height: string;
}
export interface EvidenceAminoMsg {
  type: "/lumera.audit.v1.Evidence";
  value: EvidenceAmino;
}
function createBaseEvidence(): Evidence {
  return {
    evidenceId: BigInt(0),
    subjectAddress: "",
    reporterAddress: "",
    actionId: "",
    evidenceType: 0,
    metadata: new Uint8Array(),
    reportedHeight: BigInt(0)
  };
}
/**
 * Evidence is a stable outer record that stores evidence about an audited subject.
 * Type-specific fields are encoded into the `metadata` bytes field.
 * @name Evidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.Evidence
 */
export const Evidence = {
  typeUrl: "/lumera.audit.v1.Evidence",
  is(o: any): o is Evidence {
    return o && (o.$typeUrl === Evidence.typeUrl || typeof o.evidenceId === "bigint" && typeof o.subjectAddress === "string" && typeof o.reporterAddress === "string" && typeof o.actionId === "string" && isSet(o.evidenceType) && (o.metadata instanceof Uint8Array || typeof o.metadata === "string") && typeof o.reportedHeight === "bigint");
  },
  isAmino(o: any): o is EvidenceAmino {
    return o && (o.$typeUrl === Evidence.typeUrl || typeof o.evidence_id === "bigint" && typeof o.subject_address === "string" && typeof o.reporter_address === "string" && typeof o.action_id === "string" && isSet(o.evidence_type) && (o.metadata instanceof Uint8Array || typeof o.metadata === "string") && typeof o.reported_height === "bigint");
  },
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.evidenceId);
    }
    if (message.subjectAddress !== "") {
      writer.uint32(18).string(message.subjectAddress);
    }
    if (message.reporterAddress !== "") {
      writer.uint32(26).string(message.reporterAddress);
    }
    if (message.actionId !== "") {
      writer.uint32(34).string(message.actionId);
    }
    if (message.evidenceType !== 0) {
      writer.uint32(40).int32(message.evidenceType);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }
    if (message.reportedHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.reportedHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceId = reader.uint64();
          break;
        case 2:
          message.subjectAddress = reader.string();
          break;
        case 3:
          message.reporterAddress = reader.string();
          break;
        case 4:
          message.actionId = reader.string();
          break;
        case 5:
          message.evidenceType = reader.int32() as any;
          break;
        case 6:
          message.metadata = reader.bytes();
          break;
        case 7:
          message.reportedHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.evidenceId = object.evidenceId !== undefined && object.evidenceId !== null ? BigInt(object.evidenceId.toString()) : BigInt(0);
    message.subjectAddress = object.subjectAddress ?? "";
    message.reporterAddress = object.reporterAddress ?? "";
    message.actionId = object.actionId ?? "";
    message.evidenceType = object.evidenceType ?? 0;
    message.metadata = object.metadata ?? new Uint8Array();
    message.reportedHeight = object.reportedHeight !== undefined && object.reportedHeight !== null ? BigInt(object.reportedHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EvidenceAmino): Evidence {
    const message = createBaseEvidence();
    if (object.evidence_id !== undefined && object.evidence_id !== null) {
      message.evidenceId = BigInt(object.evidence_id);
    }
    if (object.subject_address !== undefined && object.subject_address !== null) {
      message.subjectAddress = object.subject_address;
    }
    if (object.reporter_address !== undefined && object.reporter_address !== null) {
      message.reporterAddress = object.reporter_address;
    }
    if (object.action_id !== undefined && object.action_id !== null) {
      message.actionId = object.action_id;
    }
    if (object.evidence_type !== undefined && object.evidence_type !== null) {
      message.evidenceType = object.evidence_type;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    if (object.reported_height !== undefined && object.reported_height !== null) {
      message.reportedHeight = BigInt(object.reported_height);
    }
    return message;
  },
  toAmino(message: Evidence): EvidenceAmino {
    const obj: any = {};
    obj.evidence_id = message.evidenceId !== BigInt(0) ? message.evidenceId?.toString() : undefined;
    obj.subject_address = message.subjectAddress === "" ? undefined : message.subjectAddress;
    obj.reporter_address = message.reporterAddress === "" ? undefined : message.reporterAddress;
    obj.action_id = message.actionId === "" ? undefined : message.actionId;
    obj.evidence_type = message.evidenceType === 0 ? undefined : message.evidenceType;
    obj.metadata = message.metadata ? base64FromBytes(message.metadata) : undefined;
    obj.reported_height = message.reportedHeight !== BigInt(0) ? message.reportedHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceAminoMsg): Evidence {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceProtoMsg): Evidence {
    return Evidence.decode(message.value);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.Evidence",
      value: Evidence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};