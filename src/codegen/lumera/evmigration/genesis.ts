// @ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { MigrationRecord, MigrationRecordAmino } from "./migration_record";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { DeepPartial } from "../../helpers";
/**
 * GenesisState defines the evmigration module's genesis state.
 * @name GenesisState
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * migration_records contains all completed migration records.
   */
  migrationRecords: MigrationRecord[];
  /**
   * total_migrated is the running counter of completed migrations (O(1) lookup).
   */
  totalMigrated: bigint;
  /**
   * total_validators_migrated is the running counter of validator migrations.
   */
  totalValidatorsMigrated: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lumera.evmigration.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the evmigration module's genesis state.
 * @name GenesisStateAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * migration_records contains all completed migration records.
   */
  migration_records: MigrationRecordAmino[];
  /**
   * total_migrated is the running counter of completed migrations (O(1) lookup).
   */
  total_migrated: string;
  /**
   * total_validators_migrated is the running counter of validator migrations.
   */
  total_validators_migrated: string;
}
export interface GenesisStateAminoMsg {
  type: "/lumera.evmigration.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    migrationRecords: [],
    totalMigrated: BigInt(0),
    totalValidatorsMigrated: BigInt(0)
  };
}
/**
 * GenesisState defines the evmigration module's genesis state.
 * @name GenesisState
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.GenesisState
 */
export const GenesisState = {
  typeUrl: "/lumera.evmigration.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.migrationRecords) && (!o.migrationRecords.length || MigrationRecord.is(o.migrationRecords[0])) && typeof o.totalMigrated === "bigint" && typeof o.totalValidatorsMigrated === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.migration_records) && (!o.migration_records.length || MigrationRecord.isAmino(o.migration_records[0])) && typeof o.total_migrated === "bigint" && typeof o.total_validators_migrated === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.migrationRecords) {
      MigrationRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalMigrated !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalMigrated);
    }
    if (message.totalValidatorsMigrated !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalValidatorsMigrated);
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
          message.migrationRecords.push(MigrationRecord.decode(reader, reader.uint32()));
          break;
        case 3:
          message.totalMigrated = reader.uint64();
          break;
        case 4:
          message.totalValidatorsMigrated = reader.uint64();
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
    message.migrationRecords = object.migrationRecords?.map(e => MigrationRecord.fromPartial(e)) || [];
    message.totalMigrated = object.totalMigrated !== undefined && object.totalMigrated !== null ? BigInt(object.totalMigrated.toString()) : BigInt(0);
    message.totalValidatorsMigrated = object.totalValidatorsMigrated !== undefined && object.totalValidatorsMigrated !== null ? BigInt(object.totalValidatorsMigrated.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.migrationRecords = object.migration_records?.map(e => MigrationRecord.fromAmino(e)) || [];
    if (object.total_migrated !== undefined && object.total_migrated !== null) {
      message.totalMigrated = BigInt(object.total_migrated);
    }
    if (object.total_validators_migrated !== undefined && object.total_validators_migrated !== null) {
      message.totalValidatorsMigrated = BigInt(object.total_validators_migrated);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.migrationRecords) {
      obj.migration_records = message.migrationRecords.map(e => e ? MigrationRecord.toAmino(e) : undefined);
    } else {
      obj.migration_records = message.migrationRecords;
    }
    obj.total_migrated = message.totalMigrated !== BigInt(0) ? message.totalMigrated?.toString() : undefined;
    obj.total_validators_migrated = message.totalValidatorsMigrated !== BigInt(0) ? message.totalValidatorsMigrated?.toString() : undefined;
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
      typeUrl: "/lumera.evmigration.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    MigrationRecord.registerTypeUrl();
  }
};