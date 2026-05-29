// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum CascadeClientFailureReporterComponent {
  CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_UNSPECIFIED = 0,
  CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SN_API_SERVER = 1,
  CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_GO = 2,
  CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_JS = 3,
  UNRECOGNIZED = -1,
}
export const CascadeClientFailureReporterComponentAmino = CascadeClientFailureReporterComponent;
export function cascadeClientFailureReporterComponentFromJSON(object: any): CascadeClientFailureReporterComponent {
  switch (object) {
    case 0:
    case "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_UNSPECIFIED":
      return CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_UNSPECIFIED;
    case 1:
    case "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SN_API_SERVER":
      return CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SN_API_SERVER;
    case 2:
    case "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_GO":
      return CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_GO;
    case 3:
    case "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_JS":
      return CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_JS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CascadeClientFailureReporterComponent.UNRECOGNIZED;
  }
}
export function cascadeClientFailureReporterComponentToJSON(object: CascadeClientFailureReporterComponent): string {
  switch (object) {
    case CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_UNSPECIFIED:
      return "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_UNSPECIFIED";
    case CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SN_API_SERVER:
      return "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SN_API_SERVER";
    case CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_GO:
      return "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_GO";
    case CascadeClientFailureReporterComponent.CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_JS:
      return "CASCADE_CLIENT_FAILURE_REPORTER_COMPONENT_SDK_JS";
    case CascadeClientFailureReporterComponent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ActionExpiredEvidenceMetadata is metadata for evidence about an action expiring.
 * @name ActionExpiredEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionExpiredEvidenceMetadata
 */
export interface ActionExpiredEvidenceMetadata {
  /**
   * top_10_validator_addresses is the expected validator set for the action's block height.
   */
  top10ValidatorAddresses: string[];
}
export interface ActionExpiredEvidenceMetadataProtoMsg {
  typeUrl: "/lumera.audit.v1.ActionExpiredEvidenceMetadata";
  value: Uint8Array;
}
/**
 * ActionExpiredEvidenceMetadata is metadata for evidence about an action expiring.
 * @name ActionExpiredEvidenceMetadataAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionExpiredEvidenceMetadata
 */
export interface ActionExpiredEvidenceMetadataAmino {
  /**
   * top_10_validator_addresses is the expected validator set for the action's block height.
   */
  top_10_validator_addresses: string[];
}
export interface ActionExpiredEvidenceMetadataAminoMsg {
  type: "/lumera.audit.v1.ActionExpiredEvidenceMetadata";
  value: ActionExpiredEvidenceMetadataAmino;
}
/**
 * ActionFinalizationSignatureFailureEvidenceMetadata is metadata for evidence about an action finalization
 * rejected due to invalid signature / signature-derived data.
 * @name ActionFinalizationSignatureFailureEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata
 */
export interface ActionFinalizationSignatureFailureEvidenceMetadata {
  top10ValidatorAddresses: string[];
}
export interface ActionFinalizationSignatureFailureEvidenceMetadataProtoMsg {
  typeUrl: "/lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata";
  value: Uint8Array;
}
/**
 * ActionFinalizationSignatureFailureEvidenceMetadata is metadata for evidence about an action finalization
 * rejected due to invalid signature / signature-derived data.
 * @name ActionFinalizationSignatureFailureEvidenceMetadataAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata
 */
export interface ActionFinalizationSignatureFailureEvidenceMetadataAmino {
  top_10_validator_addresses: string[];
}
export interface ActionFinalizationSignatureFailureEvidenceMetadataAminoMsg {
  type: "/lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata";
  value: ActionFinalizationSignatureFailureEvidenceMetadataAmino;
}
/**
 * ActionFinalizationNotInTop10EvidenceMetadata is metadata for evidence about an action finalization
 * rejected because the attempted finalizer is not in the top-10 supernodes.
 * @name ActionFinalizationNotInTop10EvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata
 */
export interface ActionFinalizationNotInTop10EvidenceMetadata {
  /**
   * top_10_validator_addresses is the expected validator set for the action's block height.
   */
  top10ValidatorAddresses: string[];
}
export interface ActionFinalizationNotInTop10EvidenceMetadataProtoMsg {
  typeUrl: "/lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata";
  value: Uint8Array;
}
/**
 * ActionFinalizationNotInTop10EvidenceMetadata is metadata for evidence about an action finalization
 * rejected because the attempted finalizer is not in the top-10 supernodes.
 * @name ActionFinalizationNotInTop10EvidenceMetadataAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata
 */
export interface ActionFinalizationNotInTop10EvidenceMetadataAmino {
  /**
   * top_10_validator_addresses is the expected validator set for the action's block height.
   */
  top_10_validator_addresses: string[];
}
export interface ActionFinalizationNotInTop10EvidenceMetadataAminoMsg {
  type: "/lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata";
  value: ActionFinalizationNotInTop10EvidenceMetadataAmino;
}
/**
 * StorageChallengeFailureEvidenceMetadata is metadata for a storage challenge failure submitted by a challenger.
 * @name StorageChallengeFailureEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeFailureEvidenceMetadata
 */
export interface StorageChallengeFailureEvidenceMetadata {
  epochId: bigint;
  /**
   * challenger_supernode_account must match the tx signer (MsgSubmitEvidence.creator).
   * The keeper validates challenger authorization deterministically from the epoch anchor.
   */
  challengerSupernodeAccount: string;
  /**
   * challenged_supernode_account should match Evidence.subject_address.
   */
  challengedSupernodeAccount: string;
  /**
   * challenge_id is the deterministic per-(epoch,challenger) identifier (hex-encoded blake3-256).
   */
  challengeId: string;
  /**
   * file_key is the challenged file key (typically base58).
   */
  fileKey: string;
  /**
   * failure_type is a short discriminator (e.g. TIMEOUT, INVALID_PROOF, MISSING_FILE).
   */
  failureType: string;
  /**
   * transcript_hash is a hash commitment to the off-chain transcript (hex-encoded blake3-256).
   */
  transcriptHash: string;
}
export interface StorageChallengeFailureEvidenceMetadataProtoMsg {
  typeUrl: "/lumera.audit.v1.StorageChallengeFailureEvidenceMetadata";
  value: Uint8Array;
}
/**
 * StorageChallengeFailureEvidenceMetadata is metadata for a storage challenge failure submitted by a challenger.
 * @name StorageChallengeFailureEvidenceMetadataAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeFailureEvidenceMetadata
 */
export interface StorageChallengeFailureEvidenceMetadataAmino {
  epoch_id: string;
  /**
   * challenger_supernode_account must match the tx signer (MsgSubmitEvidence.creator).
   * The keeper validates challenger authorization deterministically from the epoch anchor.
   */
  challenger_supernode_account: string;
  /**
   * challenged_supernode_account should match Evidence.subject_address.
   */
  challenged_supernode_account: string;
  /**
   * challenge_id is the deterministic per-(epoch,challenger) identifier (hex-encoded blake3-256).
   */
  challenge_id: string;
  /**
   * file_key is the challenged file key (typically base58).
   */
  file_key: string;
  /**
   * failure_type is a short discriminator (e.g. TIMEOUT, INVALID_PROOF, MISSING_FILE).
   */
  failure_type: string;
  /**
   * transcript_hash is a hash commitment to the off-chain transcript (hex-encoded blake3-256).
   */
  transcript_hash: string;
}
export interface StorageChallengeFailureEvidenceMetadataAminoMsg {
  type: "/lumera.audit.v1.StorageChallengeFailureEvidenceMetadata";
  value: StorageChallengeFailureEvidenceMetadataAmino;
}
/**
 * @name CascadeClientFailureDetails
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.CascadeClientFailureDetails
 */
export interface CascadeClientFailureDetails {
  /**
   * operation is the SDK operation that failed (e.g. register, download).
   */
  operation: string;
  /**
   * iteration is the retry attempt index represented by the client.
   */
  iteration: string;
  /**
   * supernode_endpoint is the implicated supernode endpoint.
   */
  supernodeEndpoint: string;
  /**
   * supernode_account is the implicated supernode account.
   */
  supernodeAccount: string;
  /**
   * task_id is the client task identifier.
   */
  taskId: string;
  /**
   * error is the failure message observed by the client.
   */
  error: string;
  /**
   * action_id is the action id tracked by the client.
   */
  actionId: string;
}
export interface CascadeClientFailureDetailsProtoMsg {
  typeUrl: "/lumera.audit.v1.CascadeClientFailureDetails";
  value: Uint8Array;
}
/**
 * @name CascadeClientFailureDetailsAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.CascadeClientFailureDetails
 */
export interface CascadeClientFailureDetailsAmino {
  /**
   * operation is the SDK operation that failed (e.g. register, download).
   */
  operation: string;
  /**
   * iteration is the retry attempt index represented by the client.
   */
  iteration: string;
  /**
   * supernode_endpoint is the implicated supernode endpoint.
   */
  supernode_endpoint: string;
  /**
   * supernode_account is the implicated supernode account.
   */
  supernode_account: string;
  /**
   * task_id is the client task identifier.
   */
  task_id: string;
  /**
   * error is the failure message observed by the client.
   */
  error: string;
  /**
   * action_id is the action id tracked by the client.
   */
  action_id: string;
}
export interface CascadeClientFailureDetailsAminoMsg {
  type: "/lumera.audit.v1.CascadeClientFailureDetails";
  value: CascadeClientFailureDetailsAmino;
}
/**
 * CascadeClientFailureEvidenceMetadata is metadata for client-observed failures.
 * @name CascadeClientFailureEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.CascadeClientFailureEvidenceMetadata
 */
export interface CascadeClientFailureEvidenceMetadata {
  /**
   * reporter_component identifies the emitting component.
   */
  reporterComponent: CascadeClientFailureReporterComponent;
  /**
   * target_supernode_accounts are implicated supernode accounts.
   */
  targetSupernodeAccounts: string[];
  /**
   * details is the structured failure payload reported by clients.
   */
  details?: CascadeClientFailureDetails;
}
export interface CascadeClientFailureEvidenceMetadataProtoMsg {
  typeUrl: "/lumera.audit.v1.CascadeClientFailureEvidenceMetadata";
  value: Uint8Array;
}
/**
 * CascadeClientFailureEvidenceMetadata is metadata for client-observed failures.
 * @name CascadeClientFailureEvidenceMetadataAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.CascadeClientFailureEvidenceMetadata
 */
export interface CascadeClientFailureEvidenceMetadataAmino {
  /**
   * reporter_component identifies the emitting component.
   */
  reporter_component: CascadeClientFailureReporterComponent;
  /**
   * target_supernode_accounts are implicated supernode accounts.
   */
  target_supernode_accounts: string[];
  /**
   * details is the structured failure payload reported by clients.
   */
  details?: CascadeClientFailureDetailsAmino;
}
export interface CascadeClientFailureEvidenceMetadataAminoMsg {
  type: "/lumera.audit.v1.CascadeClientFailureEvidenceMetadata";
  value: CascadeClientFailureEvidenceMetadataAmino;
}
function createBaseActionExpiredEvidenceMetadata(): ActionExpiredEvidenceMetadata {
  return {
    top10ValidatorAddresses: []
  };
}
/**
 * ActionExpiredEvidenceMetadata is metadata for evidence about an action expiring.
 * @name ActionExpiredEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionExpiredEvidenceMetadata
 */
export const ActionExpiredEvidenceMetadata = {
  typeUrl: "/lumera.audit.v1.ActionExpiredEvidenceMetadata",
  is(o: any): o is ActionExpiredEvidenceMetadata {
    return o && (o.$typeUrl === ActionExpiredEvidenceMetadata.typeUrl || Array.isArray(o.top10ValidatorAddresses) && (!o.top10ValidatorAddresses.length || typeof o.top10ValidatorAddresses[0] === "string"));
  },
  isAmino(o: any): o is ActionExpiredEvidenceMetadataAmino {
    return o && (o.$typeUrl === ActionExpiredEvidenceMetadata.typeUrl || Array.isArray(o.top_10_validator_addresses) && (!o.top_10_validator_addresses.length || typeof o.top_10_validator_addresses[0] === "string"));
  },
  encode(message: ActionExpiredEvidenceMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.top10ValidatorAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionExpiredEvidenceMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionExpiredEvidenceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.top10ValidatorAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActionExpiredEvidenceMetadata>): ActionExpiredEvidenceMetadata {
    const message = createBaseActionExpiredEvidenceMetadata();
    message.top10ValidatorAddresses = object.top10ValidatorAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ActionExpiredEvidenceMetadataAmino): ActionExpiredEvidenceMetadata {
    const message = createBaseActionExpiredEvidenceMetadata();
    message.top10ValidatorAddresses = object.top_10_validator_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: ActionExpiredEvidenceMetadata): ActionExpiredEvidenceMetadataAmino {
    const obj: any = {};
    if (message.top10ValidatorAddresses) {
      obj.top_10_validator_addresses = message.top10ValidatorAddresses.map(e => e);
    } else {
      obj.top_10_validator_addresses = message.top10ValidatorAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ActionExpiredEvidenceMetadataAminoMsg): ActionExpiredEvidenceMetadata {
    return ActionExpiredEvidenceMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionExpiredEvidenceMetadataProtoMsg): ActionExpiredEvidenceMetadata {
    return ActionExpiredEvidenceMetadata.decode(message.value);
  },
  toProto(message: ActionExpiredEvidenceMetadata): Uint8Array {
    return ActionExpiredEvidenceMetadata.encode(message).finish();
  },
  toProtoMsg(message: ActionExpiredEvidenceMetadata): ActionExpiredEvidenceMetadataProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.ActionExpiredEvidenceMetadata",
      value: ActionExpiredEvidenceMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseActionFinalizationSignatureFailureEvidenceMetadata(): ActionFinalizationSignatureFailureEvidenceMetadata {
  return {
    top10ValidatorAddresses: []
  };
}
/**
 * ActionFinalizationSignatureFailureEvidenceMetadata is metadata for evidence about an action finalization
 * rejected due to invalid signature / signature-derived data.
 * @name ActionFinalizationSignatureFailureEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata
 */
export const ActionFinalizationSignatureFailureEvidenceMetadata = {
  typeUrl: "/lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata",
  is(o: any): o is ActionFinalizationSignatureFailureEvidenceMetadata {
    return o && (o.$typeUrl === ActionFinalizationSignatureFailureEvidenceMetadata.typeUrl || Array.isArray(o.top10ValidatorAddresses) && (!o.top10ValidatorAddresses.length || typeof o.top10ValidatorAddresses[0] === "string"));
  },
  isAmino(o: any): o is ActionFinalizationSignatureFailureEvidenceMetadataAmino {
    return o && (o.$typeUrl === ActionFinalizationSignatureFailureEvidenceMetadata.typeUrl || Array.isArray(o.top_10_validator_addresses) && (!o.top_10_validator_addresses.length || typeof o.top_10_validator_addresses[0] === "string"));
  },
  encode(message: ActionFinalizationSignatureFailureEvidenceMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.top10ValidatorAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionFinalizationSignatureFailureEvidenceMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionFinalizationSignatureFailureEvidenceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.top10ValidatorAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActionFinalizationSignatureFailureEvidenceMetadata>): ActionFinalizationSignatureFailureEvidenceMetadata {
    const message = createBaseActionFinalizationSignatureFailureEvidenceMetadata();
    message.top10ValidatorAddresses = object.top10ValidatorAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ActionFinalizationSignatureFailureEvidenceMetadataAmino): ActionFinalizationSignatureFailureEvidenceMetadata {
    const message = createBaseActionFinalizationSignatureFailureEvidenceMetadata();
    message.top10ValidatorAddresses = object.top_10_validator_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: ActionFinalizationSignatureFailureEvidenceMetadata): ActionFinalizationSignatureFailureEvidenceMetadataAmino {
    const obj: any = {};
    if (message.top10ValidatorAddresses) {
      obj.top_10_validator_addresses = message.top10ValidatorAddresses.map(e => e);
    } else {
      obj.top_10_validator_addresses = message.top10ValidatorAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ActionFinalizationSignatureFailureEvidenceMetadataAminoMsg): ActionFinalizationSignatureFailureEvidenceMetadata {
    return ActionFinalizationSignatureFailureEvidenceMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionFinalizationSignatureFailureEvidenceMetadataProtoMsg): ActionFinalizationSignatureFailureEvidenceMetadata {
    return ActionFinalizationSignatureFailureEvidenceMetadata.decode(message.value);
  },
  toProto(message: ActionFinalizationSignatureFailureEvidenceMetadata): Uint8Array {
    return ActionFinalizationSignatureFailureEvidenceMetadata.encode(message).finish();
  },
  toProtoMsg(message: ActionFinalizationSignatureFailureEvidenceMetadata): ActionFinalizationSignatureFailureEvidenceMetadataProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.ActionFinalizationSignatureFailureEvidenceMetadata",
      value: ActionFinalizationSignatureFailureEvidenceMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseActionFinalizationNotInTop10EvidenceMetadata(): ActionFinalizationNotInTop10EvidenceMetadata {
  return {
    top10ValidatorAddresses: []
  };
}
/**
 * ActionFinalizationNotInTop10EvidenceMetadata is metadata for evidence about an action finalization
 * rejected because the attempted finalizer is not in the top-10 supernodes.
 * @name ActionFinalizationNotInTop10EvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata
 */
export const ActionFinalizationNotInTop10EvidenceMetadata = {
  typeUrl: "/lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata",
  is(o: any): o is ActionFinalizationNotInTop10EvidenceMetadata {
    return o && (o.$typeUrl === ActionFinalizationNotInTop10EvidenceMetadata.typeUrl || Array.isArray(o.top10ValidatorAddresses) && (!o.top10ValidatorAddresses.length || typeof o.top10ValidatorAddresses[0] === "string"));
  },
  isAmino(o: any): o is ActionFinalizationNotInTop10EvidenceMetadataAmino {
    return o && (o.$typeUrl === ActionFinalizationNotInTop10EvidenceMetadata.typeUrl || Array.isArray(o.top_10_validator_addresses) && (!o.top_10_validator_addresses.length || typeof o.top_10_validator_addresses[0] === "string"));
  },
  encode(message: ActionFinalizationNotInTop10EvidenceMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.top10ValidatorAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActionFinalizationNotInTop10EvidenceMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionFinalizationNotInTop10EvidenceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.top10ValidatorAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActionFinalizationNotInTop10EvidenceMetadata>): ActionFinalizationNotInTop10EvidenceMetadata {
    const message = createBaseActionFinalizationNotInTop10EvidenceMetadata();
    message.top10ValidatorAddresses = object.top10ValidatorAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ActionFinalizationNotInTop10EvidenceMetadataAmino): ActionFinalizationNotInTop10EvidenceMetadata {
    const message = createBaseActionFinalizationNotInTop10EvidenceMetadata();
    message.top10ValidatorAddresses = object.top_10_validator_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: ActionFinalizationNotInTop10EvidenceMetadata): ActionFinalizationNotInTop10EvidenceMetadataAmino {
    const obj: any = {};
    if (message.top10ValidatorAddresses) {
      obj.top_10_validator_addresses = message.top10ValidatorAddresses.map(e => e);
    } else {
      obj.top_10_validator_addresses = message.top10ValidatorAddresses;
    }
    return obj;
  },
  fromAminoMsg(object: ActionFinalizationNotInTop10EvidenceMetadataAminoMsg): ActionFinalizationNotInTop10EvidenceMetadata {
    return ActionFinalizationNotInTop10EvidenceMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ActionFinalizationNotInTop10EvidenceMetadataProtoMsg): ActionFinalizationNotInTop10EvidenceMetadata {
    return ActionFinalizationNotInTop10EvidenceMetadata.decode(message.value);
  },
  toProto(message: ActionFinalizationNotInTop10EvidenceMetadata): Uint8Array {
    return ActionFinalizationNotInTop10EvidenceMetadata.encode(message).finish();
  },
  toProtoMsg(message: ActionFinalizationNotInTop10EvidenceMetadata): ActionFinalizationNotInTop10EvidenceMetadataProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.ActionFinalizationNotInTop10EvidenceMetadata",
      value: ActionFinalizationNotInTop10EvidenceMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStorageChallengeFailureEvidenceMetadata(): StorageChallengeFailureEvidenceMetadata {
  return {
    epochId: BigInt(0),
    challengerSupernodeAccount: "",
    challengedSupernodeAccount: "",
    challengeId: "",
    fileKey: "",
    failureType: "",
    transcriptHash: ""
  };
}
/**
 * StorageChallengeFailureEvidenceMetadata is metadata for a storage challenge failure submitted by a challenger.
 * @name StorageChallengeFailureEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeFailureEvidenceMetadata
 */
export const StorageChallengeFailureEvidenceMetadata = {
  typeUrl: "/lumera.audit.v1.StorageChallengeFailureEvidenceMetadata",
  is(o: any): o is StorageChallengeFailureEvidenceMetadata {
    return o && (o.$typeUrl === StorageChallengeFailureEvidenceMetadata.typeUrl || typeof o.epochId === "bigint" && typeof o.challengerSupernodeAccount === "string" && typeof o.challengedSupernodeAccount === "string" && typeof o.challengeId === "string" && typeof o.fileKey === "string" && typeof o.failureType === "string" && typeof o.transcriptHash === "string");
  },
  isAmino(o: any): o is StorageChallengeFailureEvidenceMetadataAmino {
    return o && (o.$typeUrl === StorageChallengeFailureEvidenceMetadata.typeUrl || typeof o.epoch_id === "bigint" && typeof o.challenger_supernode_account === "string" && typeof o.challenged_supernode_account === "string" && typeof o.challenge_id === "string" && typeof o.file_key === "string" && typeof o.failure_type === "string" && typeof o.transcript_hash === "string");
  },
  encode(message: StorageChallengeFailureEvidenceMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.challengerSupernodeAccount !== "") {
      writer.uint32(18).string(message.challengerSupernodeAccount);
    }
    if (message.challengedSupernodeAccount !== "") {
      writer.uint32(26).string(message.challengedSupernodeAccount);
    }
    if (message.challengeId !== "") {
      writer.uint32(34).string(message.challengeId);
    }
    if (message.fileKey !== "") {
      writer.uint32(42).string(message.fileKey);
    }
    if (message.failureType !== "") {
      writer.uint32(50).string(message.failureType);
    }
    if (message.transcriptHash !== "") {
      writer.uint32(58).string(message.transcriptHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageChallengeFailureEvidenceMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageChallengeFailureEvidenceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.challengerSupernodeAccount = reader.string();
          break;
        case 3:
          message.challengedSupernodeAccount = reader.string();
          break;
        case 4:
          message.challengeId = reader.string();
          break;
        case 5:
          message.fileKey = reader.string();
          break;
        case 6:
          message.failureType = reader.string();
          break;
        case 7:
          message.transcriptHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StorageChallengeFailureEvidenceMetadata>): StorageChallengeFailureEvidenceMetadata {
    const message = createBaseStorageChallengeFailureEvidenceMetadata();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.challengerSupernodeAccount = object.challengerSupernodeAccount ?? "";
    message.challengedSupernodeAccount = object.challengedSupernodeAccount ?? "";
    message.challengeId = object.challengeId ?? "";
    message.fileKey = object.fileKey ?? "";
    message.failureType = object.failureType ?? "";
    message.transcriptHash = object.transcriptHash ?? "";
    return message;
  },
  fromAmino(object: StorageChallengeFailureEvidenceMetadataAmino): StorageChallengeFailureEvidenceMetadata {
    const message = createBaseStorageChallengeFailureEvidenceMetadata();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.challenger_supernode_account !== undefined && object.challenger_supernode_account !== null) {
      message.challengerSupernodeAccount = object.challenger_supernode_account;
    }
    if (object.challenged_supernode_account !== undefined && object.challenged_supernode_account !== null) {
      message.challengedSupernodeAccount = object.challenged_supernode_account;
    }
    if (object.challenge_id !== undefined && object.challenge_id !== null) {
      message.challengeId = object.challenge_id;
    }
    if (object.file_key !== undefined && object.file_key !== null) {
      message.fileKey = object.file_key;
    }
    if (object.failure_type !== undefined && object.failure_type !== null) {
      message.failureType = object.failure_type;
    }
    if (object.transcript_hash !== undefined && object.transcript_hash !== null) {
      message.transcriptHash = object.transcript_hash;
    }
    return message;
  },
  toAmino(message: StorageChallengeFailureEvidenceMetadata): StorageChallengeFailureEvidenceMetadataAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.challenger_supernode_account = message.challengerSupernodeAccount === "" ? undefined : message.challengerSupernodeAccount;
    obj.challenged_supernode_account = message.challengedSupernodeAccount === "" ? undefined : message.challengedSupernodeAccount;
    obj.challenge_id = message.challengeId === "" ? undefined : message.challengeId;
    obj.file_key = message.fileKey === "" ? undefined : message.fileKey;
    obj.failure_type = message.failureType === "" ? undefined : message.failureType;
    obj.transcript_hash = message.transcriptHash === "" ? undefined : message.transcriptHash;
    return obj;
  },
  fromAminoMsg(object: StorageChallengeFailureEvidenceMetadataAminoMsg): StorageChallengeFailureEvidenceMetadata {
    return StorageChallengeFailureEvidenceMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageChallengeFailureEvidenceMetadataProtoMsg): StorageChallengeFailureEvidenceMetadata {
    return StorageChallengeFailureEvidenceMetadata.decode(message.value);
  },
  toProto(message: StorageChallengeFailureEvidenceMetadata): Uint8Array {
    return StorageChallengeFailureEvidenceMetadata.encode(message).finish();
  },
  toProtoMsg(message: StorageChallengeFailureEvidenceMetadata): StorageChallengeFailureEvidenceMetadataProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.StorageChallengeFailureEvidenceMetadata",
      value: StorageChallengeFailureEvidenceMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCascadeClientFailureDetails(): CascadeClientFailureDetails {
  return {
    operation: "",
    iteration: "",
    supernodeEndpoint: "",
    supernodeAccount: "",
    taskId: "",
    error: "",
    actionId: ""
  };
}
/**
 * @name CascadeClientFailureDetails
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.CascadeClientFailureDetails
 */
export const CascadeClientFailureDetails = {
  typeUrl: "/lumera.audit.v1.CascadeClientFailureDetails",
  is(o: any): o is CascadeClientFailureDetails {
    return o && (o.$typeUrl === CascadeClientFailureDetails.typeUrl || typeof o.operation === "string" && typeof o.iteration === "string" && typeof o.supernodeEndpoint === "string" && typeof o.supernodeAccount === "string" && typeof o.taskId === "string" && typeof o.error === "string" && typeof o.actionId === "string");
  },
  isAmino(o: any): o is CascadeClientFailureDetailsAmino {
    return o && (o.$typeUrl === CascadeClientFailureDetails.typeUrl || typeof o.operation === "string" && typeof o.iteration === "string" && typeof o.supernode_endpoint === "string" && typeof o.supernode_account === "string" && typeof o.task_id === "string" && typeof o.error === "string" && typeof o.action_id === "string");
  },
  encode(message: CascadeClientFailureDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operation !== "") {
      writer.uint32(10).string(message.operation);
    }
    if (message.iteration !== "") {
      writer.uint32(18).string(message.iteration);
    }
    if (message.supernodeEndpoint !== "") {
      writer.uint32(26).string(message.supernodeEndpoint);
    }
    if (message.supernodeAccount !== "") {
      writer.uint32(34).string(message.supernodeAccount);
    }
    if (message.taskId !== "") {
      writer.uint32(42).string(message.taskId);
    }
    if (message.error !== "") {
      writer.uint32(50).string(message.error);
    }
    if (message.actionId !== "") {
      writer.uint32(58).string(message.actionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CascadeClientFailureDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCascadeClientFailureDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.string();
          break;
        case 2:
          message.iteration = reader.string();
          break;
        case 3:
          message.supernodeEndpoint = reader.string();
          break;
        case 4:
          message.supernodeAccount = reader.string();
          break;
        case 5:
          message.taskId = reader.string();
          break;
        case 6:
          message.error = reader.string();
          break;
        case 7:
          message.actionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CascadeClientFailureDetails>): CascadeClientFailureDetails {
    const message = createBaseCascadeClientFailureDetails();
    message.operation = object.operation ?? "";
    message.iteration = object.iteration ?? "";
    message.supernodeEndpoint = object.supernodeEndpoint ?? "";
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.taskId = object.taskId ?? "";
    message.error = object.error ?? "";
    message.actionId = object.actionId ?? "";
    return message;
  },
  fromAmino(object: CascadeClientFailureDetailsAmino): CascadeClientFailureDetails {
    const message = createBaseCascadeClientFailureDetails();
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    }
    if (object.iteration !== undefined && object.iteration !== null) {
      message.iteration = object.iteration;
    }
    if (object.supernode_endpoint !== undefined && object.supernode_endpoint !== null) {
      message.supernodeEndpoint = object.supernode_endpoint;
    }
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.task_id !== undefined && object.task_id !== null) {
      message.taskId = object.task_id;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    if (object.action_id !== undefined && object.action_id !== null) {
      message.actionId = object.action_id;
    }
    return message;
  },
  toAmino(message: CascadeClientFailureDetails): CascadeClientFailureDetailsAmino {
    const obj: any = {};
    obj.operation = message.operation === "" ? undefined : message.operation;
    obj.iteration = message.iteration === "" ? undefined : message.iteration;
    obj.supernode_endpoint = message.supernodeEndpoint === "" ? undefined : message.supernodeEndpoint;
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.task_id = message.taskId === "" ? undefined : message.taskId;
    obj.error = message.error === "" ? undefined : message.error;
    obj.action_id = message.actionId === "" ? undefined : message.actionId;
    return obj;
  },
  fromAminoMsg(object: CascadeClientFailureDetailsAminoMsg): CascadeClientFailureDetails {
    return CascadeClientFailureDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: CascadeClientFailureDetailsProtoMsg): CascadeClientFailureDetails {
    return CascadeClientFailureDetails.decode(message.value);
  },
  toProto(message: CascadeClientFailureDetails): Uint8Array {
    return CascadeClientFailureDetails.encode(message).finish();
  },
  toProtoMsg(message: CascadeClientFailureDetails): CascadeClientFailureDetailsProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.CascadeClientFailureDetails",
      value: CascadeClientFailureDetails.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCascadeClientFailureEvidenceMetadata(): CascadeClientFailureEvidenceMetadata {
  return {
    reporterComponent: 0,
    targetSupernodeAccounts: [],
    details: undefined
  };
}
/**
 * CascadeClientFailureEvidenceMetadata is metadata for client-observed failures.
 * @name CascadeClientFailureEvidenceMetadata
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.CascadeClientFailureEvidenceMetadata
 */
export const CascadeClientFailureEvidenceMetadata = {
  typeUrl: "/lumera.audit.v1.CascadeClientFailureEvidenceMetadata",
  is(o: any): o is CascadeClientFailureEvidenceMetadata {
    return o && (o.$typeUrl === CascadeClientFailureEvidenceMetadata.typeUrl || isSet(o.reporterComponent) && Array.isArray(o.targetSupernodeAccounts) && (!o.targetSupernodeAccounts.length || typeof o.targetSupernodeAccounts[0] === "string"));
  },
  isAmino(o: any): o is CascadeClientFailureEvidenceMetadataAmino {
    return o && (o.$typeUrl === CascadeClientFailureEvidenceMetadata.typeUrl || isSet(o.reporter_component) && Array.isArray(o.target_supernode_accounts) && (!o.target_supernode_accounts.length || typeof o.target_supernode_accounts[0] === "string"));
  },
  encode(message: CascadeClientFailureEvidenceMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterComponent !== 0) {
      writer.uint32(8).int32(message.reporterComponent);
    }
    for (const v of message.targetSupernodeAccounts) {
      writer.uint32(18).string(v!);
    }
    if (message.details !== undefined) {
      CascadeClientFailureDetails.encode(message.details, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CascadeClientFailureEvidenceMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCascadeClientFailureEvidenceMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterComponent = reader.int32() as any;
          break;
        case 2:
          message.targetSupernodeAccounts.push(reader.string());
          break;
        case 3:
          message.details = CascadeClientFailureDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CascadeClientFailureEvidenceMetadata>): CascadeClientFailureEvidenceMetadata {
    const message = createBaseCascadeClientFailureEvidenceMetadata();
    message.reporterComponent = object.reporterComponent ?? 0;
    message.targetSupernodeAccounts = object.targetSupernodeAccounts?.map(e => e) || [];
    message.details = object.details !== undefined && object.details !== null ? CascadeClientFailureDetails.fromPartial(object.details) : undefined;
    return message;
  },
  fromAmino(object: CascadeClientFailureEvidenceMetadataAmino): CascadeClientFailureEvidenceMetadata {
    const message = createBaseCascadeClientFailureEvidenceMetadata();
    if (object.reporter_component !== undefined && object.reporter_component !== null) {
      message.reporterComponent = object.reporter_component;
    }
    message.targetSupernodeAccounts = object.target_supernode_accounts?.map(e => e) || [];
    if (object.details !== undefined && object.details !== null) {
      message.details = CascadeClientFailureDetails.fromAmino(object.details);
    }
    return message;
  },
  toAmino(message: CascadeClientFailureEvidenceMetadata): CascadeClientFailureEvidenceMetadataAmino {
    const obj: any = {};
    obj.reporter_component = message.reporterComponent === 0 ? undefined : message.reporterComponent;
    if (message.targetSupernodeAccounts) {
      obj.target_supernode_accounts = message.targetSupernodeAccounts.map(e => e);
    } else {
      obj.target_supernode_accounts = message.targetSupernodeAccounts;
    }
    obj.details = message.details ? CascadeClientFailureDetails.toAmino(message.details) : undefined;
    return obj;
  },
  fromAminoMsg(object: CascadeClientFailureEvidenceMetadataAminoMsg): CascadeClientFailureEvidenceMetadata {
    return CascadeClientFailureEvidenceMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: CascadeClientFailureEvidenceMetadataProtoMsg): CascadeClientFailureEvidenceMetadata {
    return CascadeClientFailureEvidenceMetadata.decode(message.value);
  },
  toProto(message: CascadeClientFailureEvidenceMetadata): Uint8Array {
    return CascadeClientFailureEvidenceMetadata.encode(message).finish();
  },
  toProtoMsg(message: CascadeClientFailureEvidenceMetadata): CascadeClientFailureEvidenceMetadataProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.CascadeClientFailureEvidenceMetadata",
      value: CascadeClientFailureEvidenceMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(CascadeClientFailureEvidenceMetadata.typeUrl)) {
      return;
    }
    CascadeClientFailureDetails.registerTypeUrl();
  }
};