// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * SourceHop represents a single port/channel pair in an IBC denom trace.
 * @name SourceHop
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.SourceHop
 */
export interface SourceHop {
  portId: string;
  channelId: string;
}
export interface SourceHopProtoMsg {
  typeUrl: "/lumera.erc20policy.SourceHop";
  value: Uint8Array;
}
/**
 * SourceHop represents a single port/channel pair in an IBC denom trace.
 * @name SourceHopAmino
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.SourceHop
 */
export interface SourceHopAmino {
  port_id: string;
  channel_id: string;
}
export interface SourceHopAminoMsg {
  type: "/lumera.erc20policy.SourceHop";
  value: SourceHopAmino;
}
/**
 * AllowedBaseDenomTrace binds a base denomination to a specific IBC provenance
 * path. The trace is the full expected sequence of hops for the received denom:
 * [{destPort, destChannel}, ...priorHops]. An empty trace is a valid placeholder
 * that never matches a real IBC packet (all packets have at least one hop).
 * @name AllowedBaseDenomTrace
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.AllowedBaseDenomTrace
 */
export interface AllowedBaseDenomTrace {
  baseDenom: string;
  trace: SourceHop[];
}
export interface AllowedBaseDenomTraceProtoMsg {
  typeUrl: "/lumera.erc20policy.AllowedBaseDenomTrace";
  value: Uint8Array;
}
/**
 * AllowedBaseDenomTrace binds a base denomination to a specific IBC provenance
 * path. The trace is the full expected sequence of hops for the received denom:
 * [{destPort, destChannel}, ...priorHops]. An empty trace is a valid placeholder
 * that never matches a real IBC packet (all packets have at least one hop).
 * @name AllowedBaseDenomTraceAmino
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.AllowedBaseDenomTrace
 */
export interface AllowedBaseDenomTraceAmino {
  base_denom: string;
  trace: SourceHopAmino[];
}
export interface AllowedBaseDenomTraceAminoMsg {
  type: "/lumera.erc20policy.AllowedBaseDenomTrace";
  value: AllowedBaseDenomTraceAmino;
}
/**
 * MsgSetRegistrationPolicy configures the IBC voucher ERC20 auto-registration
 * policy. It allows governance to control which IBC denoms are automatically
 * registered as ERC20 token pairs on first IBC receive.
 * @name MsgSetRegistrationPolicy
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.MsgSetRegistrationPolicy
 */
export interface MsgSetRegistrationPolicy {
  /**
   * authority is the address that controls the policy (defaults to x/gov).
   */
  authority: string;
  /**
   * mode is the registration policy mode: "all", "allowlist", or "none".
   * If empty, the mode is not changed.
   */
  mode: string;
  /**
   * add_denoms is a list of exact IBC denoms (e.g. "ibc/HASH...") to add to
   * the allowlist. Only meaningful when mode is "allowlist".
   */
  addDenoms: string[];
  /**
   * remove_denoms is a list of exact IBC denoms to remove from the allowlist.
   */
  removeDenoms: string[];
  /**
   * add_base_denom_traces adds provenance-bound base denom entries to the
   * allowlist. Each entry binds a base denom (e.g. "uatom") to a specific
   * IBC trace (the full expected hop sequence). Governance must provide the
   * trace to activate a base denom entry.
   */
  addBaseDenomTraces: AllowedBaseDenomTrace[];
  /**
   * remove_base_denom_traces removes provenance-bound base denom entries.
   */
  removeBaseDenomTraces: AllowedBaseDenomTrace[];
}
export interface MsgSetRegistrationPolicyProtoMsg {
  typeUrl: "/lumera.erc20policy.MsgSetRegistrationPolicy";
  value: Uint8Array;
}
/**
 * MsgSetRegistrationPolicy configures the IBC voucher ERC20 auto-registration
 * policy. It allows governance to control which IBC denoms are automatically
 * registered as ERC20 token pairs on first IBC receive.
 * @name MsgSetRegistrationPolicyAmino
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.MsgSetRegistrationPolicy
 */
export interface MsgSetRegistrationPolicyAmino {
  /**
   * authority is the address that controls the policy (defaults to x/gov).
   */
  authority: string;
  /**
   * mode is the registration policy mode: "all", "allowlist", or "none".
   * If empty, the mode is not changed.
   */
  mode: string;
  /**
   * add_denoms is a list of exact IBC denoms (e.g. "ibc/HASH...") to add to
   * the allowlist. Only meaningful when mode is "allowlist".
   */
  add_denoms: string[];
  /**
   * remove_denoms is a list of exact IBC denoms to remove from the allowlist.
   */
  remove_denoms: string[];
  /**
   * add_base_denom_traces adds provenance-bound base denom entries to the
   * allowlist. Each entry binds a base denom (e.g. "uatom") to a specific
   * IBC trace (the full expected hop sequence). Governance must provide the
   * trace to activate a base denom entry.
   */
  add_base_denom_traces: AllowedBaseDenomTraceAmino[];
  /**
   * remove_base_denom_traces removes provenance-bound base denom entries.
   */
  remove_base_denom_traces: AllowedBaseDenomTraceAmino[];
}
export interface MsgSetRegistrationPolicyAminoMsg {
  type: "lumera/erc20policy/MsgSetRegistrationPolicy";
  value: MsgSetRegistrationPolicyAmino;
}
/**
 * MsgSetRegistrationPolicyResponse is the response type for
 * MsgSetRegistrationPolicy.
 * @name MsgSetRegistrationPolicyResponse
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.MsgSetRegistrationPolicyResponse
 */
export interface MsgSetRegistrationPolicyResponse {}
export interface MsgSetRegistrationPolicyResponseProtoMsg {
  typeUrl: "/lumera.erc20policy.MsgSetRegistrationPolicyResponse";
  value: Uint8Array;
}
/**
 * MsgSetRegistrationPolicyResponse is the response type for
 * MsgSetRegistrationPolicy.
 * @name MsgSetRegistrationPolicyResponseAmino
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.MsgSetRegistrationPolicyResponse
 */
export interface MsgSetRegistrationPolicyResponseAmino {}
export interface MsgSetRegistrationPolicyResponseAminoMsg {
  type: "/lumera.erc20policy.MsgSetRegistrationPolicyResponse";
  value: MsgSetRegistrationPolicyResponseAmino;
}
function createBaseSourceHop(): SourceHop {
  return {
    portId: "",
    channelId: ""
  };
}
/**
 * SourceHop represents a single port/channel pair in an IBC denom trace.
 * @name SourceHop
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.SourceHop
 */
export const SourceHop = {
  typeUrl: "/lumera.erc20policy.SourceHop",
  is(o: any): o is SourceHop {
    return o && (o.$typeUrl === SourceHop.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
  },
  isAmino(o: any): o is SourceHopAmino {
    return o && (o.$typeUrl === SourceHop.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: SourceHop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceHop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceHop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SourceHop>): SourceHop {
    const message = createBaseSourceHop();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: SourceHopAmino): SourceHop {
    const message = createBaseSourceHop();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: SourceHop): SourceHopAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: SourceHopAminoMsg): SourceHop {
    return SourceHop.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceHopProtoMsg): SourceHop {
    return SourceHop.decode(message.value);
  },
  toProto(message: SourceHop): Uint8Array {
    return SourceHop.encode(message).finish();
  },
  toProtoMsg(message: SourceHop): SourceHopProtoMsg {
    return {
      typeUrl: "/lumera.erc20policy.SourceHop",
      value: SourceHop.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAllowedBaseDenomTrace(): AllowedBaseDenomTrace {
  return {
    baseDenom: "",
    trace: []
  };
}
/**
 * AllowedBaseDenomTrace binds a base denomination to a specific IBC provenance
 * path. The trace is the full expected sequence of hops for the received denom:
 * [{destPort, destChannel}, ...priorHops]. An empty trace is a valid placeholder
 * that never matches a real IBC packet (all packets have at least one hop).
 * @name AllowedBaseDenomTrace
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.AllowedBaseDenomTrace
 */
export const AllowedBaseDenomTrace = {
  typeUrl: "/lumera.erc20policy.AllowedBaseDenomTrace",
  is(o: any): o is AllowedBaseDenomTrace {
    return o && (o.$typeUrl === AllowedBaseDenomTrace.typeUrl || typeof o.baseDenom === "string" && Array.isArray(o.trace) && (!o.trace.length || SourceHop.is(o.trace[0])));
  },
  isAmino(o: any): o is AllowedBaseDenomTraceAmino {
    return o && (o.$typeUrl === AllowedBaseDenomTrace.typeUrl || typeof o.base_denom === "string" && Array.isArray(o.trace) && (!o.trace.length || SourceHop.isAmino(o.trace[0])));
  },
  encode(message: AllowedBaseDenomTrace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    for (const v of message.trace) {
      SourceHop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowedBaseDenomTrace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        case 2:
          message.trace.push(SourceHop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedBaseDenomTrace>): AllowedBaseDenomTrace {
    const message = createBaseAllowedBaseDenomTrace();
    message.baseDenom = object.baseDenom ?? "";
    message.trace = object.trace?.map(e => SourceHop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllowedBaseDenomTraceAmino): AllowedBaseDenomTrace {
    const message = createBaseAllowedBaseDenomTrace();
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.baseDenom = object.base_denom;
    }
    message.trace = object.trace?.map(e => SourceHop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllowedBaseDenomTrace): AllowedBaseDenomTraceAmino {
    const obj: any = {};
    obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
    if (message.trace) {
      obj.trace = message.trace.map(e => e ? SourceHop.toAmino(e) : undefined);
    } else {
      obj.trace = message.trace;
    }
    return obj;
  },
  fromAminoMsg(object: AllowedBaseDenomTraceAminoMsg): AllowedBaseDenomTrace {
    return AllowedBaseDenomTrace.fromAmino(object.value);
  },
  fromProtoMsg(message: AllowedBaseDenomTraceProtoMsg): AllowedBaseDenomTrace {
    return AllowedBaseDenomTrace.decode(message.value);
  },
  toProto(message: AllowedBaseDenomTrace): Uint8Array {
    return AllowedBaseDenomTrace.encode(message).finish();
  },
  toProtoMsg(message: AllowedBaseDenomTrace): AllowedBaseDenomTraceProtoMsg {
    return {
      typeUrl: "/lumera.erc20policy.AllowedBaseDenomTrace",
      value: AllowedBaseDenomTrace.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AllowedBaseDenomTrace.typeUrl)) {
      return;
    }
    SourceHop.registerTypeUrl();
  }
};
function createBaseMsgSetRegistrationPolicy(): MsgSetRegistrationPolicy {
  return {
    authority: "",
    mode: "",
    addDenoms: [],
    removeDenoms: [],
    addBaseDenomTraces: [],
    removeBaseDenomTraces: []
  };
}
/**
 * MsgSetRegistrationPolicy configures the IBC voucher ERC20 auto-registration
 * policy. It allows governance to control which IBC denoms are automatically
 * registered as ERC20 token pairs on first IBC receive.
 * @name MsgSetRegistrationPolicy
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.MsgSetRegistrationPolicy
 */
export const MsgSetRegistrationPolicy = {
  typeUrl: "/lumera.erc20policy.MsgSetRegistrationPolicy",
  aminoType: "lumera/erc20policy/MsgSetRegistrationPolicy",
  is(o: any): o is MsgSetRegistrationPolicy {
    return o && (o.$typeUrl === MsgSetRegistrationPolicy.typeUrl || typeof o.authority === "string" && typeof o.mode === "string" && Array.isArray(o.addDenoms) && (!o.addDenoms.length || typeof o.addDenoms[0] === "string") && Array.isArray(o.removeDenoms) && (!o.removeDenoms.length || typeof o.removeDenoms[0] === "string") && Array.isArray(o.addBaseDenomTraces) && (!o.addBaseDenomTraces.length || AllowedBaseDenomTrace.is(o.addBaseDenomTraces[0])) && Array.isArray(o.removeBaseDenomTraces) && (!o.removeBaseDenomTraces.length || AllowedBaseDenomTrace.is(o.removeBaseDenomTraces[0])));
  },
  isAmino(o: any): o is MsgSetRegistrationPolicyAmino {
    return o && (o.$typeUrl === MsgSetRegistrationPolicy.typeUrl || typeof o.authority === "string" && typeof o.mode === "string" && Array.isArray(o.add_denoms) && (!o.add_denoms.length || typeof o.add_denoms[0] === "string") && Array.isArray(o.remove_denoms) && (!o.remove_denoms.length || typeof o.remove_denoms[0] === "string") && Array.isArray(o.add_base_denom_traces) && (!o.add_base_denom_traces.length || AllowedBaseDenomTrace.isAmino(o.add_base_denom_traces[0])) && Array.isArray(o.remove_base_denom_traces) && (!o.remove_base_denom_traces.length || AllowedBaseDenomTrace.isAmino(o.remove_base_denom_traces[0])));
  },
  encode(message: MsgSetRegistrationPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.mode !== "") {
      writer.uint32(18).string(message.mode);
    }
    for (const v of message.addDenoms) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.removeDenoms) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.addBaseDenomTraces) {
      AllowedBaseDenomTrace.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.removeBaseDenomTraces) {
      AllowedBaseDenomTrace.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRegistrationPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRegistrationPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.mode = reader.string();
          break;
        case 3:
          message.addDenoms.push(reader.string());
          break;
        case 4:
          message.removeDenoms.push(reader.string());
          break;
        case 5:
          message.addBaseDenomTraces.push(AllowedBaseDenomTrace.decode(reader, reader.uint32()));
          break;
        case 6:
          message.removeBaseDenomTraces.push(AllowedBaseDenomTrace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetRegistrationPolicy>): MsgSetRegistrationPolicy {
    const message = createBaseMsgSetRegistrationPolicy();
    message.authority = object.authority ?? "";
    message.mode = object.mode ?? "";
    message.addDenoms = object.addDenoms?.map(e => e) || [];
    message.removeDenoms = object.removeDenoms?.map(e => e) || [];
    message.addBaseDenomTraces = object.addBaseDenomTraces?.map(e => AllowedBaseDenomTrace.fromPartial(e)) || [];
    message.removeBaseDenomTraces = object.removeBaseDenomTraces?.map(e => AllowedBaseDenomTrace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSetRegistrationPolicyAmino): MsgSetRegistrationPolicy {
    const message = createBaseMsgSetRegistrationPolicy();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    message.addDenoms = object.add_denoms?.map(e => e) || [];
    message.removeDenoms = object.remove_denoms?.map(e => e) || [];
    message.addBaseDenomTraces = object.add_base_denom_traces?.map(e => AllowedBaseDenomTrace.fromAmino(e)) || [];
    message.removeBaseDenomTraces = object.remove_base_denom_traces?.map(e => AllowedBaseDenomTrace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetRegistrationPolicy): MsgSetRegistrationPolicyAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.mode = message.mode === "" ? undefined : message.mode;
    if (message.addDenoms) {
      obj.add_denoms = message.addDenoms.map(e => e);
    } else {
      obj.add_denoms = message.addDenoms;
    }
    if (message.removeDenoms) {
      obj.remove_denoms = message.removeDenoms.map(e => e);
    } else {
      obj.remove_denoms = message.removeDenoms;
    }
    if (message.addBaseDenomTraces) {
      obj.add_base_denom_traces = message.addBaseDenomTraces.map(e => e ? AllowedBaseDenomTrace.toAmino(e) : undefined);
    } else {
      obj.add_base_denom_traces = message.addBaseDenomTraces;
    }
    if (message.removeBaseDenomTraces) {
      obj.remove_base_denom_traces = message.removeBaseDenomTraces.map(e => e ? AllowedBaseDenomTrace.toAmino(e) : undefined);
    } else {
      obj.remove_base_denom_traces = message.removeBaseDenomTraces;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetRegistrationPolicyAminoMsg): MsgSetRegistrationPolicy {
    return MsgSetRegistrationPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRegistrationPolicy): MsgSetRegistrationPolicyAminoMsg {
    return {
      type: "lumera/erc20policy/MsgSetRegistrationPolicy",
      value: MsgSetRegistrationPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetRegistrationPolicyProtoMsg): MsgSetRegistrationPolicy {
    return MsgSetRegistrationPolicy.decode(message.value);
  },
  toProto(message: MsgSetRegistrationPolicy): Uint8Array {
    return MsgSetRegistrationPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRegistrationPolicy): MsgSetRegistrationPolicyProtoMsg {
    return {
      typeUrl: "/lumera.erc20policy.MsgSetRegistrationPolicy",
      value: MsgSetRegistrationPolicy.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetRegistrationPolicy.typeUrl)) {
      return;
    }
    AllowedBaseDenomTrace.registerTypeUrl();
  }
};
function createBaseMsgSetRegistrationPolicyResponse(): MsgSetRegistrationPolicyResponse {
  return {};
}
/**
 * MsgSetRegistrationPolicyResponse is the response type for
 * MsgSetRegistrationPolicy.
 * @name MsgSetRegistrationPolicyResponse
 * @package lumera.erc20policy
 * @see proto type: lumera.erc20policy.MsgSetRegistrationPolicyResponse
 */
export const MsgSetRegistrationPolicyResponse = {
  typeUrl: "/lumera.erc20policy.MsgSetRegistrationPolicyResponse",
  is(o: any): o is MsgSetRegistrationPolicyResponse {
    return o && o.$typeUrl === MsgSetRegistrationPolicyResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetRegistrationPolicyResponseAmino {
    return o && o.$typeUrl === MsgSetRegistrationPolicyResponse.typeUrl;
  },
  encode(_: MsgSetRegistrationPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRegistrationPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRegistrationPolicyResponse();
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
  fromPartial(_: DeepPartial<MsgSetRegistrationPolicyResponse>): MsgSetRegistrationPolicyResponse {
    const message = createBaseMsgSetRegistrationPolicyResponse();
    return message;
  },
  fromAmino(_: MsgSetRegistrationPolicyResponseAmino): MsgSetRegistrationPolicyResponse {
    const message = createBaseMsgSetRegistrationPolicyResponse();
    return message;
  },
  toAmino(_: MsgSetRegistrationPolicyResponse): MsgSetRegistrationPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRegistrationPolicyResponseAminoMsg): MsgSetRegistrationPolicyResponse {
    return MsgSetRegistrationPolicyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRegistrationPolicyResponseProtoMsg): MsgSetRegistrationPolicyResponse {
    return MsgSetRegistrationPolicyResponse.decode(message.value);
  },
  toProto(message: MsgSetRegistrationPolicyResponse): Uint8Array {
    return MsgSetRegistrationPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRegistrationPolicyResponse): MsgSetRegistrationPolicyResponseProtoMsg {
    return {
      typeUrl: "/lumera.erc20policy.MsgSetRegistrationPolicyResponse",
      value: MsgSetRegistrationPolicyResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};