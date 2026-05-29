// @ts-nocheck
/* eslint-disable */
import { isSet, DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * SuperNodeState is the lifecycle state of a SuperNode. Transitions are
 * governed by the supernode and audit modules; see x/supernode/v1/keeper
 * and x/audit/v1/keeper for the authoritative state machine.
 */
export enum SuperNodeState {
  /** SUPERNODE_STATE_UNSPECIFIED - SUPERNODE_STATE_UNSPECIFIED is the proto3 zero value; never persisted. */
  SUPERNODE_STATE_UNSPECIFIED = 0,
  /** SUPERNODE_STATE_ACTIVE - SUPERNODE_STATE_ACTIVE: SuperNode is healthy and eligible for all duties. */
  SUPERNODE_STATE_ACTIVE = 1,
  /** SUPERNODE_STATE_DISABLED - SUPERNODE_STATE_DISABLED: operator-disabled (deregistered) SuperNode. */
  SUPERNODE_STATE_DISABLED = 2,
  /** SUPERNODE_STATE_STOPPED - SUPERNODE_STATE_STOPPED: operator-stopped SuperNode (recoverable). */
  SUPERNODE_STATE_STOPPED = 3,
  /** SUPERNODE_STATE_PENALIZED - SUPERNODE_STATE_PENALIZED: penalized by chain enforcement (e.g. slashing). */
  SUPERNODE_STATE_PENALIZED = 4,
  /**
   * SUPERNODE_STATE_POSTPONED - SUPERNODE_STATE_POSTPONED: temporarily ineligible due to missing/overdue
   * metrics or compliance violations; recovers on the next healthy report.
   */
  SUPERNODE_STATE_POSTPONED = 5,
  /**
   * SUPERNODE_STATE_STORAGE_FULL - SUPERNODE_STATE_STORAGE_FULL: storage usage above max threshold;
   * excluded from Cascade duties but still eligible for Sense/Agents.
   */
  SUPERNODE_STATE_STORAGE_FULL = 6,
  UNRECOGNIZED = -1,
}
export const SuperNodeStateAmino = SuperNodeState;
export function superNodeStateFromJSON(object: any): SuperNodeState {
  switch (object) {
    case 0:
    case "SUPERNODE_STATE_UNSPECIFIED":
      return SuperNodeState.SUPERNODE_STATE_UNSPECIFIED;
    case 1:
    case "SUPERNODE_STATE_ACTIVE":
      return SuperNodeState.SUPERNODE_STATE_ACTIVE;
    case 2:
    case "SUPERNODE_STATE_DISABLED":
      return SuperNodeState.SUPERNODE_STATE_DISABLED;
    case 3:
    case "SUPERNODE_STATE_STOPPED":
      return SuperNodeState.SUPERNODE_STATE_STOPPED;
    case 4:
    case "SUPERNODE_STATE_PENALIZED":
      return SuperNodeState.SUPERNODE_STATE_PENALIZED;
    case 5:
    case "SUPERNODE_STATE_POSTPONED":
      return SuperNodeState.SUPERNODE_STATE_POSTPONED;
    case 6:
    case "SUPERNODE_STATE_STORAGE_FULL":
      return SuperNodeState.SUPERNODE_STATE_STORAGE_FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperNodeState.UNRECOGNIZED;
  }
}
export function superNodeStateToJSON(object: SuperNodeState): string {
  switch (object) {
    case SuperNodeState.SUPERNODE_STATE_UNSPECIFIED:
      return "SUPERNODE_STATE_UNSPECIFIED";
    case SuperNodeState.SUPERNODE_STATE_ACTIVE:
      return "SUPERNODE_STATE_ACTIVE";
    case SuperNodeState.SUPERNODE_STATE_DISABLED:
      return "SUPERNODE_STATE_DISABLED";
    case SuperNodeState.SUPERNODE_STATE_STOPPED:
      return "SUPERNODE_STATE_STOPPED";
    case SuperNodeState.SUPERNODE_STATE_PENALIZED:
      return "SUPERNODE_STATE_PENALIZED";
    case SuperNodeState.SUPERNODE_STATE_POSTPONED:
      return "SUPERNODE_STATE_POSTPONED";
    case SuperNodeState.SUPERNODE_STATE_STORAGE_FULL:
      return "SUPERNODE_STATE_STORAGE_FULL";
    case SuperNodeState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * SuperNodeStateRecord is one entry in the append-only state history of a
 * SuperNode. The latest entry is the current state.
 * @name SuperNodeStateRecord
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.SuperNodeStateRecord
 */
export interface SuperNodeStateRecord {
  state: SuperNodeState;
  height: bigint;
  /**
   * reason is an optional string describing why the state transition occurred.
   * It is currently set only for transitions into POSTPONED.
   */
  reason: string;
}
export interface SuperNodeStateRecordProtoMsg {
  typeUrl: "/lumera.supernode.v1.SuperNodeStateRecord";
  value: Uint8Array;
}
/**
 * SuperNodeStateRecord is one entry in the append-only state history of a
 * SuperNode. The latest entry is the current state.
 * @name SuperNodeStateRecordAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.SuperNodeStateRecord
 */
export interface SuperNodeStateRecordAmino {
  state: SuperNodeState;
  height: string;
  /**
   * reason is an optional string describing why the state transition occurred.
   * It is currently set only for transitions into POSTPONED.
   */
  reason: string;
}
export interface SuperNodeStateRecordAminoMsg {
  type: "/lumera.supernode.v1.SuperNodeStateRecord";
  value: SuperNodeStateRecordAmino;
}
function createBaseSuperNodeStateRecord(): SuperNodeStateRecord {
  return {
    state: 0,
    height: BigInt(0),
    reason: ""
  };
}
/**
 * SuperNodeStateRecord is one entry in the append-only state history of a
 * SuperNode. The latest entry is the current state.
 * @name SuperNodeStateRecord
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.SuperNodeStateRecord
 */
export const SuperNodeStateRecord = {
  typeUrl: "/lumera.supernode.v1.SuperNodeStateRecord",
  is(o: any): o is SuperNodeStateRecord {
    return o && (o.$typeUrl === SuperNodeStateRecord.typeUrl || isSet(o.state) && typeof o.height === "bigint" && typeof o.reason === "string");
  },
  isAmino(o: any): o is SuperNodeStateRecordAmino {
    return o && (o.$typeUrl === SuperNodeStateRecord.typeUrl || isSet(o.state) && typeof o.height === "bigint" && typeof o.reason === "string");
  },
  encode(message: SuperNodeStateRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperNodeStateRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperNodeStateRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SuperNodeStateRecord>): SuperNodeStateRecord {
    const message = createBaseSuperNodeStateRecord();
    message.state = object.state ?? 0;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.reason = object.reason ?? "";
    return message;
  },
  fromAmino(object: SuperNodeStateRecordAmino): SuperNodeStateRecord {
    const message = createBaseSuperNodeStateRecord();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    return message;
  },
  toAmino(message: SuperNodeStateRecord): SuperNodeStateRecordAmino {
    const obj: any = {};
    obj.state = message.state === 0 ? undefined : message.state;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.reason = message.reason === "" ? undefined : message.reason;
    return obj;
  },
  fromAminoMsg(object: SuperNodeStateRecordAminoMsg): SuperNodeStateRecord {
    return SuperNodeStateRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: SuperNodeStateRecordProtoMsg): SuperNodeStateRecord {
    return SuperNodeStateRecord.decode(message.value);
  },
  toProto(message: SuperNodeStateRecord): Uint8Array {
    return SuperNodeStateRecord.encode(message).finish();
  },
  toProtoMsg(message: SuperNodeStateRecord): SuperNodeStateRecordProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.SuperNodeStateRecord",
      value: SuperNodeStateRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};