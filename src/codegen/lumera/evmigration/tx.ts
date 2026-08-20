// @ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { MigrationProof, MigrationProofAmino } from "./proof";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { DeepPartial } from "../../helpers";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/lumera.evmigration.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the module parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "lumera/x/evmigration/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/lumera.evmigration.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/lumera.evmigration.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgClaimLegacyAccount migrates on-chain state from legacy_address to new_address.
 * @name MsgClaimLegacyAccount
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgClaimLegacyAccount
 */
export interface MsgClaimLegacyAccount {
  newAddress: string;
  legacyAddress: string;
  legacyProof: MigrationProof;
  newProof: MigrationProof;
}
export interface MsgClaimLegacyAccountProtoMsg {
  typeUrl: "/lumera.evmigration.MsgClaimLegacyAccount";
  value: Uint8Array;
}
/**
 * MsgClaimLegacyAccount migrates on-chain state from legacy_address to new_address.
 * @name MsgClaimLegacyAccountAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgClaimLegacyAccount
 */
export interface MsgClaimLegacyAccountAmino {
  new_address: string;
  legacy_address: string;
  legacy_proof: MigrationProofAmino;
  new_proof: MigrationProofAmino;
}
export interface MsgClaimLegacyAccountAminoMsg {
  type: "/lumera.evmigration.MsgClaimLegacyAccount";
  value: MsgClaimLegacyAccountAmino;
}
/**
 * MsgClaimLegacyAccountResponse is the response type for MsgClaimLegacyAccount.
 * @name MsgClaimLegacyAccountResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgClaimLegacyAccountResponse
 */
export interface MsgClaimLegacyAccountResponse {}
export interface MsgClaimLegacyAccountResponseProtoMsg {
  typeUrl: "/lumera.evmigration.MsgClaimLegacyAccountResponse";
  value: Uint8Array;
}
/**
 * MsgClaimLegacyAccountResponse is the response type for MsgClaimLegacyAccount.
 * @name MsgClaimLegacyAccountResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgClaimLegacyAccountResponse
 */
export interface MsgClaimLegacyAccountResponseAmino {}
export interface MsgClaimLegacyAccountResponseAminoMsg {
  type: "/lumera.evmigration.MsgClaimLegacyAccountResponse";
  value: MsgClaimLegacyAccountResponseAmino;
}
/**
 * MsgMigrateValidator migrates a validator operator from legacy to new address.
 * @name MsgMigrateValidator
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgMigrateValidator
 */
export interface MsgMigrateValidator {
  newAddress: string;
  legacyAddress: string;
  legacyProof: MigrationProof;
  newProof: MigrationProof;
}
export interface MsgMigrateValidatorProtoMsg {
  typeUrl: "/lumera.evmigration.MsgMigrateValidator";
  value: Uint8Array;
}
/**
 * MsgMigrateValidator migrates a validator operator from legacy to new address.
 * @name MsgMigrateValidatorAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgMigrateValidator
 */
export interface MsgMigrateValidatorAmino {
  new_address: string;
  legacy_address: string;
  legacy_proof: MigrationProofAmino;
  new_proof: MigrationProofAmino;
}
export interface MsgMigrateValidatorAminoMsg {
  type: "/lumera.evmigration.MsgMigrateValidator";
  value: MsgMigrateValidatorAmino;
}
/**
 * MsgMigrateValidatorResponse is the response type for MsgMigrateValidator.
 * @name MsgMigrateValidatorResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgMigrateValidatorResponse
 */
export interface MsgMigrateValidatorResponse {}
export interface MsgMigrateValidatorResponseProtoMsg {
  typeUrl: "/lumera.evmigration.MsgMigrateValidatorResponse";
  value: Uint8Array;
}
/**
 * MsgMigrateValidatorResponse is the response type for MsgMigrateValidator.
 * @name MsgMigrateValidatorResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgMigrateValidatorResponse
 */
export interface MsgMigrateValidatorResponseAmino {}
export interface MsgMigrateValidatorResponseAminoMsg {
  type: "/lumera.evmigration.MsgMigrateValidatorResponse";
  value: MsgMigrateValidatorResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/lumera.evmigration.MsgUpdateParams",
  aminoType: "lumera/x/evmigration/MsgUpdateParams",
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
      type: "lumera/x/evmigration/MsgUpdateParams",
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
      typeUrl: "/lumera.evmigration.MsgUpdateParams",
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
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/lumera.evmigration.MsgUpdateParamsResponse",
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
      typeUrl: "/lumera.evmigration.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimLegacyAccount(): MsgClaimLegacyAccount {
  return {
    newAddress: "",
    legacyAddress: "",
    legacyProof: MigrationProof.fromPartial({}),
    newProof: MigrationProof.fromPartial({})
  };
}
/**
 * MsgClaimLegacyAccount migrates on-chain state from legacy_address to new_address.
 * @name MsgClaimLegacyAccount
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgClaimLegacyAccount
 */
export const MsgClaimLegacyAccount = {
  typeUrl: "/lumera.evmigration.MsgClaimLegacyAccount",
  is(o: any): o is MsgClaimLegacyAccount {
    return o && (o.$typeUrl === MsgClaimLegacyAccount.typeUrl || typeof o.newAddress === "string" && typeof o.legacyAddress === "string" && MigrationProof.is(o.legacyProof) && MigrationProof.is(o.newProof));
  },
  isAmino(o: any): o is MsgClaimLegacyAccountAmino {
    return o && (o.$typeUrl === MsgClaimLegacyAccount.typeUrl || typeof o.new_address === "string" && typeof o.legacy_address === "string" && MigrationProof.isAmino(o.legacy_proof) && MigrationProof.isAmino(o.new_proof));
  },
  encode(message: MsgClaimLegacyAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newAddress !== "") {
      writer.uint32(10).string(message.newAddress);
    }
    if (message.legacyAddress !== "") {
      writer.uint32(18).string(message.legacyAddress);
    }
    if (message.legacyProof !== undefined) {
      MigrationProof.encode(message.legacyProof, writer.uint32(26).fork()).ldelim();
    }
    if (message.newProof !== undefined) {
      MigrationProof.encode(message.newProof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimLegacyAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimLegacyAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newAddress = reader.string();
          break;
        case 2:
          message.legacyAddress = reader.string();
          break;
        case 3:
          message.legacyProof = MigrationProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.newProof = MigrationProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaimLegacyAccount>): MsgClaimLegacyAccount {
    const message = createBaseMsgClaimLegacyAccount();
    message.newAddress = object.newAddress ?? "";
    message.legacyAddress = object.legacyAddress ?? "";
    message.legacyProof = object.legacyProof !== undefined && object.legacyProof !== null ? MigrationProof.fromPartial(object.legacyProof) : undefined;
    message.newProof = object.newProof !== undefined && object.newProof !== null ? MigrationProof.fromPartial(object.newProof) : undefined;
    return message;
  },
  fromAmino(object: MsgClaimLegacyAccountAmino): MsgClaimLegacyAccount {
    const message = createBaseMsgClaimLegacyAccount();
    if (object.new_address !== undefined && object.new_address !== null) {
      message.newAddress = object.new_address;
    }
    if (object.legacy_address !== undefined && object.legacy_address !== null) {
      message.legacyAddress = object.legacy_address;
    }
    if (object.legacy_proof !== undefined && object.legacy_proof !== null) {
      message.legacyProof = MigrationProof.fromAmino(object.legacy_proof);
    }
    if (object.new_proof !== undefined && object.new_proof !== null) {
      message.newProof = MigrationProof.fromAmino(object.new_proof);
    }
    return message;
  },
  toAmino(message: MsgClaimLegacyAccount): MsgClaimLegacyAccountAmino {
    const obj: any = {};
    obj.new_address = message.newAddress === "" ? undefined : message.newAddress;
    obj.legacy_address = message.legacyAddress === "" ? undefined : message.legacyAddress;
    obj.legacy_proof = message.legacyProof ? MigrationProof.toAmino(message.legacyProof) : undefined;
    obj.new_proof = message.newProof ? MigrationProof.toAmino(message.newProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgClaimLegacyAccountAminoMsg): MsgClaimLegacyAccount {
    return MsgClaimLegacyAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimLegacyAccountProtoMsg): MsgClaimLegacyAccount {
    return MsgClaimLegacyAccount.decode(message.value);
  },
  toProto(message: MsgClaimLegacyAccount): Uint8Array {
    return MsgClaimLegacyAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimLegacyAccount): MsgClaimLegacyAccountProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MsgClaimLegacyAccount",
      value: MsgClaimLegacyAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgClaimLegacyAccount.typeUrl)) {
      return;
    }
    MigrationProof.registerTypeUrl();
  }
};
function createBaseMsgClaimLegacyAccountResponse(): MsgClaimLegacyAccountResponse {
  return {};
}
/**
 * MsgClaimLegacyAccountResponse is the response type for MsgClaimLegacyAccount.
 * @name MsgClaimLegacyAccountResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgClaimLegacyAccountResponse
 */
export const MsgClaimLegacyAccountResponse = {
  typeUrl: "/lumera.evmigration.MsgClaimLegacyAccountResponse",
  is(o: any): o is MsgClaimLegacyAccountResponse {
    return o && o.$typeUrl === MsgClaimLegacyAccountResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimLegacyAccountResponseAmino {
    return o && o.$typeUrl === MsgClaimLegacyAccountResponse.typeUrl;
  },
  encode(_: MsgClaimLegacyAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimLegacyAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimLegacyAccountResponse();
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
  fromPartial(_: DeepPartial<MsgClaimLegacyAccountResponse>): MsgClaimLegacyAccountResponse {
    const message = createBaseMsgClaimLegacyAccountResponse();
    return message;
  },
  fromAmino(_: MsgClaimLegacyAccountResponseAmino): MsgClaimLegacyAccountResponse {
    const message = createBaseMsgClaimLegacyAccountResponse();
    return message;
  },
  toAmino(_: MsgClaimLegacyAccountResponse): MsgClaimLegacyAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimLegacyAccountResponseAminoMsg): MsgClaimLegacyAccountResponse {
    return MsgClaimLegacyAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimLegacyAccountResponseProtoMsg): MsgClaimLegacyAccountResponse {
    return MsgClaimLegacyAccountResponse.decode(message.value);
  },
  toProto(message: MsgClaimLegacyAccountResponse): Uint8Array {
    return MsgClaimLegacyAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimLegacyAccountResponse): MsgClaimLegacyAccountResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MsgClaimLegacyAccountResponse",
      value: MsgClaimLegacyAccountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMigrateValidator(): MsgMigrateValidator {
  return {
    newAddress: "",
    legacyAddress: "",
    legacyProof: MigrationProof.fromPartial({}),
    newProof: MigrationProof.fromPartial({})
  };
}
/**
 * MsgMigrateValidator migrates a validator operator from legacy to new address.
 * @name MsgMigrateValidator
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgMigrateValidator
 */
export const MsgMigrateValidator = {
  typeUrl: "/lumera.evmigration.MsgMigrateValidator",
  is(o: any): o is MsgMigrateValidator {
    return o && (o.$typeUrl === MsgMigrateValidator.typeUrl || typeof o.newAddress === "string" && typeof o.legacyAddress === "string" && MigrationProof.is(o.legacyProof) && MigrationProof.is(o.newProof));
  },
  isAmino(o: any): o is MsgMigrateValidatorAmino {
    return o && (o.$typeUrl === MsgMigrateValidator.typeUrl || typeof o.new_address === "string" && typeof o.legacy_address === "string" && MigrationProof.isAmino(o.legacy_proof) && MigrationProof.isAmino(o.new_proof));
  },
  encode(message: MsgMigrateValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newAddress !== "") {
      writer.uint32(10).string(message.newAddress);
    }
    if (message.legacyAddress !== "") {
      writer.uint32(18).string(message.legacyAddress);
    }
    if (message.legacyProof !== undefined) {
      MigrationProof.encode(message.legacyProof, writer.uint32(26).fork()).ldelim();
    }
    if (message.newProof !== undefined) {
      MigrationProof.encode(message.newProof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newAddress = reader.string();
          break;
        case 2:
          message.legacyAddress = reader.string();
          break;
        case 3:
          message.legacyProof = MigrationProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.newProof = MigrationProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMigrateValidator>): MsgMigrateValidator {
    const message = createBaseMsgMigrateValidator();
    message.newAddress = object.newAddress ?? "";
    message.legacyAddress = object.legacyAddress ?? "";
    message.legacyProof = object.legacyProof !== undefined && object.legacyProof !== null ? MigrationProof.fromPartial(object.legacyProof) : undefined;
    message.newProof = object.newProof !== undefined && object.newProof !== null ? MigrationProof.fromPartial(object.newProof) : undefined;
    return message;
  },
  fromAmino(object: MsgMigrateValidatorAmino): MsgMigrateValidator {
    const message = createBaseMsgMigrateValidator();
    if (object.new_address !== undefined && object.new_address !== null) {
      message.newAddress = object.new_address;
    }
    if (object.legacy_address !== undefined && object.legacy_address !== null) {
      message.legacyAddress = object.legacy_address;
    }
    if (object.legacy_proof !== undefined && object.legacy_proof !== null) {
      message.legacyProof = MigrationProof.fromAmino(object.legacy_proof);
    }
    if (object.new_proof !== undefined && object.new_proof !== null) {
      message.newProof = MigrationProof.fromAmino(object.new_proof);
    }
    return message;
  },
  toAmino(message: MsgMigrateValidator): MsgMigrateValidatorAmino {
    const obj: any = {};
    obj.new_address = message.newAddress === "" ? undefined : message.newAddress;
    obj.legacy_address = message.legacyAddress === "" ? undefined : message.legacyAddress;
    obj.legacy_proof = message.legacyProof ? MigrationProof.toAmino(message.legacyProof) : undefined;
    obj.new_proof = message.newProof ? MigrationProof.toAmino(message.newProof) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateValidatorAminoMsg): MsgMigrateValidator {
    return MsgMigrateValidator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateValidatorProtoMsg): MsgMigrateValidator {
    return MsgMigrateValidator.decode(message.value);
  },
  toProto(message: MsgMigrateValidator): Uint8Array {
    return MsgMigrateValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateValidator): MsgMigrateValidatorProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MsgMigrateValidator",
      value: MsgMigrateValidator.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMigrateValidator.typeUrl)) {
      return;
    }
    MigrationProof.registerTypeUrl();
  }
};
function createBaseMsgMigrateValidatorResponse(): MsgMigrateValidatorResponse {
  return {};
}
/**
 * MsgMigrateValidatorResponse is the response type for MsgMigrateValidator.
 * @name MsgMigrateValidatorResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MsgMigrateValidatorResponse
 */
export const MsgMigrateValidatorResponse = {
  typeUrl: "/lumera.evmigration.MsgMigrateValidatorResponse",
  is(o: any): o is MsgMigrateValidatorResponse {
    return o && o.$typeUrl === MsgMigrateValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMigrateValidatorResponseAmino {
    return o && o.$typeUrl === MsgMigrateValidatorResponse.typeUrl;
  },
  encode(_: MsgMigrateValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateValidatorResponse();
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
  fromPartial(_: DeepPartial<MsgMigrateValidatorResponse>): MsgMigrateValidatorResponse {
    const message = createBaseMsgMigrateValidatorResponse();
    return message;
  },
  fromAmino(_: MsgMigrateValidatorResponseAmino): MsgMigrateValidatorResponse {
    const message = createBaseMsgMigrateValidatorResponse();
    return message;
  },
  toAmino(_: MsgMigrateValidatorResponse): MsgMigrateValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMigrateValidatorResponseAminoMsg): MsgMigrateValidatorResponse {
    return MsgMigrateValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMigrateValidatorResponseProtoMsg): MsgMigrateValidatorResponse {
    return MsgMigrateValidatorResponse.decode(message.value);
  },
  toProto(message: MsgMigrateValidatorResponse): Uint8Array {
    return MsgMigrateValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMigrateValidatorResponse): MsgMigrateValidatorResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MsgMigrateValidatorResponse",
      value: MsgMigrateValidatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};