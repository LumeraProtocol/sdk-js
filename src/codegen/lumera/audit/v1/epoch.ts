// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * EpochAnchor is a minimal per-epoch on-chain anchor that freezes the deterministic seed
 * and the eligible supernode sets used for deterministic selection off-chain.
 * @name EpochAnchor
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.EpochAnchor
 */
export interface EpochAnchor {
  epochId: bigint;
  epochStartHeight: bigint;
  epochEndHeight: bigint;
  epochLengthBlocks: bigint;
  /**
   * seed is a fixed 32-byte value derived at epoch start (domain-separated).
   */
  seed: Uint8Array;
  /**
   * active_supernode_accounts is the sorted list of ACTIVE supernodes at epoch start.
   */
  activeSupernodeAccounts: string[];
  /**
   * target_supernode_accounts is the sorted list of eligible targets at epoch start:
   * ACTIVE + POSTPONED supernodes.
   */
  targetSupernodeAccounts: string[];
  /**
   * params_commitment is a hash commitment to Params (with defaults) at epoch start.
   */
  paramsCommitment: Uint8Array;
  activeSetCommitment: Uint8Array;
  targetsSetCommitment: Uint8Array;
}
export interface EpochAnchorProtoMsg {
  typeUrl: "/lumera.audit.v1.EpochAnchor";
  value: Uint8Array;
}
/**
 * EpochAnchor is a minimal per-epoch on-chain anchor that freezes the deterministic seed
 * and the eligible supernode sets used for deterministic selection off-chain.
 * @name EpochAnchorAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.EpochAnchor
 */
export interface EpochAnchorAmino {
  epoch_id: string;
  epoch_start_height: string;
  epoch_end_height: string;
  epoch_length_blocks: string;
  /**
   * seed is a fixed 32-byte value derived at epoch start (domain-separated).
   */
  seed: string;
  /**
   * active_supernode_accounts is the sorted list of ACTIVE supernodes at epoch start.
   */
  active_supernode_accounts: string[];
  /**
   * target_supernode_accounts is the sorted list of eligible targets at epoch start:
   * ACTIVE + POSTPONED supernodes.
   */
  target_supernode_accounts: string[];
  /**
   * params_commitment is a hash commitment to Params (with defaults) at epoch start.
   */
  params_commitment: string;
  active_set_commitment: string;
  targets_set_commitment: string;
}
export interface EpochAnchorAminoMsg {
  type: "/lumera.audit.v1.EpochAnchor";
  value: EpochAnchorAmino;
}
function createBaseEpochAnchor(): EpochAnchor {
  return {
    epochId: BigInt(0),
    epochStartHeight: BigInt(0),
    epochEndHeight: BigInt(0),
    epochLengthBlocks: BigInt(0),
    seed: new Uint8Array(),
    activeSupernodeAccounts: [],
    targetSupernodeAccounts: [],
    paramsCommitment: new Uint8Array(),
    activeSetCommitment: new Uint8Array(),
    targetsSetCommitment: new Uint8Array()
  };
}
/**
 * EpochAnchor is a minimal per-epoch on-chain anchor that freezes the deterministic seed
 * and the eligible supernode sets used for deterministic selection off-chain.
 * @name EpochAnchor
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.EpochAnchor
 */
export const EpochAnchor = {
  typeUrl: "/lumera.audit.v1.EpochAnchor",
  is(o: any): o is EpochAnchor {
    return o && (o.$typeUrl === EpochAnchor.typeUrl || typeof o.epochId === "bigint" && typeof o.epochStartHeight === "bigint" && typeof o.epochEndHeight === "bigint" && typeof o.epochLengthBlocks === "bigint" && (o.seed instanceof Uint8Array || typeof o.seed === "string") && Array.isArray(o.activeSupernodeAccounts) && (!o.activeSupernodeAccounts.length || typeof o.activeSupernodeAccounts[0] === "string") && Array.isArray(o.targetSupernodeAccounts) && (!o.targetSupernodeAccounts.length || typeof o.targetSupernodeAccounts[0] === "string") && (o.paramsCommitment instanceof Uint8Array || typeof o.paramsCommitment === "string") && (o.activeSetCommitment instanceof Uint8Array || typeof o.activeSetCommitment === "string") && (o.targetsSetCommitment instanceof Uint8Array || typeof o.targetsSetCommitment === "string"));
  },
  isAmino(o: any): o is EpochAnchorAmino {
    return o && (o.$typeUrl === EpochAnchor.typeUrl || typeof o.epoch_id === "bigint" && typeof o.epoch_start_height === "bigint" && typeof o.epoch_end_height === "bigint" && typeof o.epoch_length_blocks === "bigint" && (o.seed instanceof Uint8Array || typeof o.seed === "string") && Array.isArray(o.active_supernode_accounts) && (!o.active_supernode_accounts.length || typeof o.active_supernode_accounts[0] === "string") && Array.isArray(o.target_supernode_accounts) && (!o.target_supernode_accounts.length || typeof o.target_supernode_accounts[0] === "string") && (o.params_commitment instanceof Uint8Array || typeof o.params_commitment === "string") && (o.active_set_commitment instanceof Uint8Array || typeof o.active_set_commitment === "string") && (o.targets_set_commitment instanceof Uint8Array || typeof o.targets_set_commitment === "string"));
  },
  encode(message: EpochAnchor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.epochStartHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartHeight);
    }
    if (message.epochEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.epochEndHeight);
    }
    if (message.epochLengthBlocks !== BigInt(0)) {
      writer.uint32(32).uint64(message.epochLengthBlocks);
    }
    if (message.seed.length !== 0) {
      writer.uint32(42).bytes(message.seed);
    }
    for (const v of message.activeSupernodeAccounts) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.targetSupernodeAccounts) {
      writer.uint32(58).string(v!);
    }
    if (message.paramsCommitment.length !== 0) {
      writer.uint32(66).bytes(message.paramsCommitment);
    }
    if (message.activeSetCommitment.length !== 0) {
      writer.uint32(74).bytes(message.activeSetCommitment);
    }
    if (message.targetsSetCommitment.length !== 0) {
      writer.uint32(82).bytes(message.targetsSetCommitment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochAnchor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochAnchor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.epochStartHeight = reader.int64();
          break;
        case 3:
          message.epochEndHeight = reader.int64();
          break;
        case 4:
          message.epochLengthBlocks = reader.uint64();
          break;
        case 5:
          message.seed = reader.bytes();
          break;
        case 6:
          message.activeSupernodeAccounts.push(reader.string());
          break;
        case 7:
          message.targetSupernodeAccounts.push(reader.string());
          break;
        case 8:
          message.paramsCommitment = reader.bytes();
          break;
        case 9:
          message.activeSetCommitment = reader.bytes();
          break;
        case 10:
          message.targetsSetCommitment = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochAnchor>): EpochAnchor {
    const message = createBaseEpochAnchor();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.epochStartHeight = object.epochStartHeight !== undefined && object.epochStartHeight !== null ? BigInt(object.epochStartHeight.toString()) : BigInt(0);
    message.epochEndHeight = object.epochEndHeight !== undefined && object.epochEndHeight !== null ? BigInt(object.epochEndHeight.toString()) : BigInt(0);
    message.epochLengthBlocks = object.epochLengthBlocks !== undefined && object.epochLengthBlocks !== null ? BigInt(object.epochLengthBlocks.toString()) : BigInt(0);
    message.seed = object.seed ?? new Uint8Array();
    message.activeSupernodeAccounts = object.activeSupernodeAccounts?.map(e => e) || [];
    message.targetSupernodeAccounts = object.targetSupernodeAccounts?.map(e => e) || [];
    message.paramsCommitment = object.paramsCommitment ?? new Uint8Array();
    message.activeSetCommitment = object.activeSetCommitment ?? new Uint8Array();
    message.targetsSetCommitment = object.targetsSetCommitment ?? new Uint8Array();
    return message;
  },
  fromAmino(object: EpochAnchorAmino): EpochAnchor {
    const message = createBaseEpochAnchor();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.epoch_start_height !== undefined && object.epoch_start_height !== null) {
      message.epochStartHeight = BigInt(object.epoch_start_height);
    }
    if (object.epoch_end_height !== undefined && object.epoch_end_height !== null) {
      message.epochEndHeight = BigInt(object.epoch_end_height);
    }
    if (object.epoch_length_blocks !== undefined && object.epoch_length_blocks !== null) {
      message.epochLengthBlocks = BigInt(object.epoch_length_blocks);
    }
    if (object.seed !== undefined && object.seed !== null) {
      message.seed = bytesFromBase64(object.seed);
    }
    message.activeSupernodeAccounts = object.active_supernode_accounts?.map(e => e) || [];
    message.targetSupernodeAccounts = object.target_supernode_accounts?.map(e => e) || [];
    if (object.params_commitment !== undefined && object.params_commitment !== null) {
      message.paramsCommitment = bytesFromBase64(object.params_commitment);
    }
    if (object.active_set_commitment !== undefined && object.active_set_commitment !== null) {
      message.activeSetCommitment = bytesFromBase64(object.active_set_commitment);
    }
    if (object.targets_set_commitment !== undefined && object.targets_set_commitment !== null) {
      message.targetsSetCommitment = bytesFromBase64(object.targets_set_commitment);
    }
    return message;
  },
  toAmino(message: EpochAnchor): EpochAnchorAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.epoch_start_height = message.epochStartHeight !== BigInt(0) ? message.epochStartHeight?.toString() : undefined;
    obj.epoch_end_height = message.epochEndHeight !== BigInt(0) ? message.epochEndHeight?.toString() : undefined;
    obj.epoch_length_blocks = message.epochLengthBlocks !== BigInt(0) ? message.epochLengthBlocks?.toString() : undefined;
    obj.seed = message.seed ? base64FromBytes(message.seed) : undefined;
    if (message.activeSupernodeAccounts) {
      obj.active_supernode_accounts = message.activeSupernodeAccounts.map(e => e);
    } else {
      obj.active_supernode_accounts = message.activeSupernodeAccounts;
    }
    if (message.targetSupernodeAccounts) {
      obj.target_supernode_accounts = message.targetSupernodeAccounts.map(e => e);
    } else {
      obj.target_supernode_accounts = message.targetSupernodeAccounts;
    }
    obj.params_commitment = message.paramsCommitment ? base64FromBytes(message.paramsCommitment) : undefined;
    obj.active_set_commitment = message.activeSetCommitment ? base64FromBytes(message.activeSetCommitment) : undefined;
    obj.targets_set_commitment = message.targetsSetCommitment ? base64FromBytes(message.targetsSetCommitment) : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochAnchorAminoMsg): EpochAnchor {
    return EpochAnchor.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochAnchorProtoMsg): EpochAnchor {
    return EpochAnchor.decode(message.value);
  },
  toProto(message: EpochAnchor): Uint8Array {
    return EpochAnchor.encode(message).finish();
  },
  toProtoMsg(message: EpochAnchor): EpochAnchorProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.EpochAnchor",
      value: EpochAnchor.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};