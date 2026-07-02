// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** SigFormat enumerates accepted signing envelopes for migration proofs. */
export enum SigFormat {
  SIG_FORMAT_UNSPECIFIED = 0,
  /** SIG_FORMAT_CLI - Sign(SHA256(payload)) via Cosmos keyring; Sign(payload → Keccak256) for eth keyring */
  SIG_FORMAT_CLI = 1,
  /** SIG_FORMAT_ADR036 - ADR-036 signArbitrary canonical JSON */
  SIG_FORMAT_ADR036 = 2,
  /** SIG_FORMAT_EIP191 - Eth "\x19Ethereum Signed Message:\n…" envelope — new-side single-key proofs only */
  SIG_FORMAT_EIP191 = 3,
  UNRECOGNIZED = -1,
}
export const SigFormatAmino = SigFormat;
export function sigFormatFromJSON(object: any): SigFormat {
  switch (object) {
    case 0:
    case "SIG_FORMAT_UNSPECIFIED":
      return SigFormat.SIG_FORMAT_UNSPECIFIED;
    case 1:
    case "SIG_FORMAT_CLI":
      return SigFormat.SIG_FORMAT_CLI;
    case 2:
    case "SIG_FORMAT_ADR036":
      return SigFormat.SIG_FORMAT_ADR036;
    case 3:
    case "SIG_FORMAT_EIP191":
      return SigFormat.SIG_FORMAT_EIP191;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SigFormat.UNRECOGNIZED;
  }
}
export function sigFormatToJSON(object: SigFormat): string {
  switch (object) {
    case SigFormat.SIG_FORMAT_UNSPECIFIED:
      return "SIG_FORMAT_UNSPECIFIED";
    case SigFormat.SIG_FORMAT_CLI:
      return "SIG_FORMAT_CLI";
    case SigFormat.SIG_FORMAT_ADR036:
      return "SIG_FORMAT_ADR036";
    case SigFormat.SIG_FORMAT_EIP191:
      return "SIG_FORMAT_EIP191";
    case SigFormat.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * @name MigrationProof
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MigrationProof
 */
export interface MigrationProof {
  single?: SingleKeyProof;
  multisig?: MultisigProof;
}
export interface MigrationProofProtoMsg {
  typeUrl: "/lumera.evmigration.MigrationProof";
  value: Uint8Array;
}
/**
 * @name MigrationProofAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MigrationProof
 */
export interface MigrationProofAmino {
  single?: SingleKeyProofAmino;
  multisig?: MultisigProofAmino;
}
export interface MigrationProofAminoMsg {
  type: "/lumera.evmigration.MigrationProof";
  value: MigrationProofAmino;
}
/**
 * @name SingleKeyProof
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.SingleKeyProof
 */
export interface SingleKeyProof {
  pubKey: Uint8Array;
  signature: Uint8Array;
  sigFormat: SigFormat;
}
export interface SingleKeyProofProtoMsg {
  typeUrl: "/lumera.evmigration.SingleKeyProof";
  value: Uint8Array;
}
/**
 * @name SingleKeyProofAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.SingleKeyProof
 */
export interface SingleKeyProofAmino {
  pub_key: string;
  signature: string;
  sig_format: SigFormat;
}
export interface SingleKeyProofAminoMsg {
  type: "/lumera.evmigration.SingleKeyProof";
  value: SingleKeyProofAmino;
}
/**
 * @name MultisigProof
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MultisigProof
 */
export interface MultisigProof {
  threshold: number;
  subPubKeys: Uint8Array[];
  signerIndices: number[];
  subSignatures: Uint8Array[];
  sigFormat: SigFormat;
}
export interface MultisigProofProtoMsg {
  typeUrl: "/lumera.evmigration.MultisigProof";
  value: Uint8Array;
}
/**
 * @name MultisigProofAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MultisigProof
 */
export interface MultisigProofAmino {
  threshold: number;
  sub_pub_keys: string[];
  signer_indices: number[];
  sub_signatures: string[];
  sig_format: SigFormat;
}
export interface MultisigProofAminoMsg {
  type: "/lumera.evmigration.MultisigProof";
  value: MultisigProofAmino;
}
function createBaseMigrationProof(): MigrationProof {
  return {
    single: undefined,
    multisig: undefined
  };
}
/**
 * @name MigrationProof
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MigrationProof
 */
export const MigrationProof = {
  typeUrl: "/lumera.evmigration.MigrationProof",
  is(o: any): o is MigrationProof {
    return o && o.$typeUrl === MigrationProof.typeUrl;
  },
  isAmino(o: any): o is MigrationProofAmino {
    return o && o.$typeUrl === MigrationProof.typeUrl;
  },
  encode(message: MigrationProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.single !== undefined) {
      SingleKeyProof.encode(message.single, writer.uint32(10).fork()).ldelim();
    }
    if (message.multisig !== undefined) {
      MultisigProof.encode(message.multisig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MigrationProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.single = SingleKeyProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.multisig = MultisigProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MigrationProof>): MigrationProof {
    const message = createBaseMigrationProof();
    message.single = object.single !== undefined && object.single !== null ? SingleKeyProof.fromPartial(object.single) : undefined;
    message.multisig = object.multisig !== undefined && object.multisig !== null ? MultisigProof.fromPartial(object.multisig) : undefined;
    return message;
  },
  fromAmino(object: MigrationProofAmino): MigrationProof {
    const message = createBaseMigrationProof();
    if (object.single !== undefined && object.single !== null) {
      message.single = SingleKeyProof.fromAmino(object.single);
    }
    if (object.multisig !== undefined && object.multisig !== null) {
      message.multisig = MultisigProof.fromAmino(object.multisig);
    }
    return message;
  },
  toAmino(message: MigrationProof): MigrationProofAmino {
    const obj: any = {};
    obj.single = message.single ? SingleKeyProof.toAmino(message.single) : undefined;
    obj.multisig = message.multisig ? MultisigProof.toAmino(message.multisig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MigrationProofAminoMsg): MigrationProof {
    return MigrationProof.fromAmino(object.value);
  },
  fromProtoMsg(message: MigrationProofProtoMsg): MigrationProof {
    return MigrationProof.decode(message.value);
  },
  toProto(message: MigrationProof): Uint8Array {
    return MigrationProof.encode(message).finish();
  },
  toProtoMsg(message: MigrationProof): MigrationProofProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MigrationProof",
      value: MigrationProof.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MigrationProof.typeUrl)) {
      return;
    }
    SingleKeyProof.registerTypeUrl();
    MultisigProof.registerTypeUrl();
  }
};
function createBaseSingleKeyProof(): SingleKeyProof {
  return {
    pubKey: new Uint8Array(),
    signature: new Uint8Array(),
    sigFormat: 0
  };
}
/**
 * @name SingleKeyProof
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.SingleKeyProof
 */
export const SingleKeyProof = {
  typeUrl: "/lumera.evmigration.SingleKeyProof",
  is(o: any): o is SingleKeyProof {
    return o && (o.$typeUrl === SingleKeyProof.typeUrl || (o.pubKey instanceof Uint8Array || typeof o.pubKey === "string") && (o.signature instanceof Uint8Array || typeof o.signature === "string") && isSet(o.sigFormat));
  },
  isAmino(o: any): o is SingleKeyProofAmino {
    return o && (o.$typeUrl === SingleKeyProof.typeUrl || (o.pub_key instanceof Uint8Array || typeof o.pub_key === "string") && (o.signature instanceof Uint8Array || typeof o.signature === "string") && isSet(o.sig_format));
  },
  encode(message: SingleKeyProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.sigFormat !== 0) {
      writer.uint32(24).int32(message.sigFormat);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SingleKeyProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleKeyProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.sigFormat = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SingleKeyProof>): SingleKeyProof {
    const message = createBaseSingleKeyProof();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.sigFormat = object.sigFormat ?? 0;
    return message;
  },
  fromAmino(object: SingleKeyProofAmino): SingleKeyProof {
    const message = createBaseSingleKeyProof();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.sig_format !== undefined && object.sig_format !== null) {
      message.sigFormat = object.sig_format;
    }
    return message;
  },
  toAmino(message: SingleKeyProof): SingleKeyProofAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.sig_format = message.sigFormat === 0 ? undefined : message.sigFormat;
    return obj;
  },
  fromAminoMsg(object: SingleKeyProofAminoMsg): SingleKeyProof {
    return SingleKeyProof.fromAmino(object.value);
  },
  fromProtoMsg(message: SingleKeyProofProtoMsg): SingleKeyProof {
    return SingleKeyProof.decode(message.value);
  },
  toProto(message: SingleKeyProof): Uint8Array {
    return SingleKeyProof.encode(message).finish();
  },
  toProtoMsg(message: SingleKeyProof): SingleKeyProofProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.SingleKeyProof",
      value: SingleKeyProof.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMultisigProof(): MultisigProof {
  return {
    threshold: 0,
    subPubKeys: [],
    signerIndices: [],
    subSignatures: [],
    sigFormat: 0
  };
}
/**
 * @name MultisigProof
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MultisigProof
 */
export const MultisigProof = {
  typeUrl: "/lumera.evmigration.MultisigProof",
  is(o: any): o is MultisigProof {
    return o && (o.$typeUrl === MultisigProof.typeUrl || typeof o.threshold === "number" && Array.isArray(o.subPubKeys) && (!o.subPubKeys.length || o.subPubKeys[0] instanceof Uint8Array || typeof o.subPubKeys[0] === "string") && Array.isArray(o.signerIndices) && (!o.signerIndices.length || typeof o.signerIndices[0] === "number") && Array.isArray(o.subSignatures) && (!o.subSignatures.length || o.subSignatures[0] instanceof Uint8Array || typeof o.subSignatures[0] === "string") && isSet(o.sigFormat));
  },
  isAmino(o: any): o is MultisigProofAmino {
    return o && (o.$typeUrl === MultisigProof.typeUrl || typeof o.threshold === "number" && Array.isArray(o.sub_pub_keys) && (!o.sub_pub_keys.length || o.sub_pub_keys[0] instanceof Uint8Array || typeof o.sub_pub_keys[0] === "string") && Array.isArray(o.signer_indices) && (!o.signer_indices.length || typeof o.signer_indices[0] === "number") && Array.isArray(o.sub_signatures) && (!o.sub_signatures.length || o.sub_signatures[0] instanceof Uint8Array || typeof o.sub_signatures[0] === "string") && isSet(o.sig_format));
  },
  encode(message: MultisigProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.subPubKeys) {
      writer.uint32(18).bytes(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.signerIndices) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.subSignatures) {
      writer.uint32(34).bytes(v!);
    }
    if (message.sigFormat !== 0) {
      writer.uint32(40).int32(message.sigFormat);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MultisigProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultisigProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.uint32();
          break;
        case 2:
          message.subPubKeys.push(reader.bytes());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.signerIndices.push(reader.uint32());
            }
          } else {
            message.signerIndices.push(reader.uint32());
          }
          break;
        case 4:
          message.subSignatures.push(reader.bytes());
          break;
        case 5:
          message.sigFormat = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MultisigProof>): MultisigProof {
    const message = createBaseMultisigProof();
    message.threshold = object.threshold ?? 0;
    message.subPubKeys = object.subPubKeys?.map(e => e) || [];
    message.signerIndices = object.signerIndices?.map(e => e) || [];
    message.subSignatures = object.subSignatures?.map(e => e) || [];
    message.sigFormat = object.sigFormat ?? 0;
    return message;
  },
  fromAmino(object: MultisigProofAmino): MultisigProof {
    const message = createBaseMultisigProof();
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    message.subPubKeys = object.sub_pub_keys?.map(e => bytesFromBase64(e)) || [];
    message.signerIndices = object.signer_indices?.map(e => e) || [];
    message.subSignatures = object.sub_signatures?.map(e => bytesFromBase64(e)) || [];
    if (object.sig_format !== undefined && object.sig_format !== null) {
      message.sigFormat = object.sig_format;
    }
    return message;
  },
  toAmino(message: MultisigProof): MultisigProofAmino {
    const obj: any = {};
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    if (message.subPubKeys) {
      obj.sub_pub_keys = message.subPubKeys.map(e => base64FromBytes(e));
    } else {
      obj.sub_pub_keys = message.subPubKeys;
    }
    if (message.signerIndices) {
      obj.signer_indices = message.signerIndices.map(e => e);
    } else {
      obj.signer_indices = message.signerIndices;
    }
    if (message.subSignatures) {
      obj.sub_signatures = message.subSignatures.map(e => base64FromBytes(e));
    } else {
      obj.sub_signatures = message.subSignatures;
    }
    obj.sig_format = message.sigFormat === 0 ? undefined : message.sigFormat;
    return obj;
  },
  fromAminoMsg(object: MultisigProofAminoMsg): MultisigProof {
    return MultisigProof.fromAmino(object.value);
  },
  fromProtoMsg(message: MultisigProofProtoMsg): MultisigProof {
    return MultisigProof.decode(message.value);
  },
  toProto(message: MultisigProof): Uint8Array {
    return MultisigProof.encode(message).finish();
  },
  toProtoMsg(message: MultisigProof): MultisigProofProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MultisigProof",
      value: MultisigProof.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};