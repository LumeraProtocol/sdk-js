// @ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the supernode module's genesis state.
 * @name GenesisState
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * last_distribution_height is the block height of the last distribution.
   */
  lastDistributionHeight: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lumera.supernode.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the supernode module's genesis state.
 * @name GenesisStateAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * last_distribution_height is the block height of the last distribution.
   */
  last_distribution_height: string;
}
export interface GenesisStateAminoMsg {
  type: "/lumera.supernode.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastDistributionHeight: BigInt(0)
  };
}
/**
 * GenesisState defines the supernode module's genesis state.
 * @name GenesisState
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/lumera.supernode.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.lastDistributionHeight === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.last_distribution_height === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastDistributionHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.lastDistributionHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastDistributionHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastDistributionHeight = object.lastDistributionHeight !== undefined && object.lastDistributionHeight !== null ? BigInt(object.lastDistributionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_distribution_height !== undefined && object.last_distribution_height !== null) {
      message.lastDistributionHeight = BigInt(object.last_distribution_height);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.last_distribution_height = message.lastDistributionHeight !== BigInt(0) ? message.lastDistributionHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};