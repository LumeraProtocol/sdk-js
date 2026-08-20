// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * MigrationRecord stores the result of a completed legacy account migration,
 * recording the source and destination addresses plus the time and height.
 * @name MigrationRecord
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MigrationRecord
 */
export interface MigrationRecord {
  /**
   * legacy_address is the coin-type-118 source address that was migrated.
   */
  legacyAddress: string;
  /**
   * new_address is the coin-type-60 destination address.
   */
  newAddress: string;
  /**
   * migration_time is the block time (unix seconds) when migration completed.
   */
  migrationTime: bigint;
  /**
   * migration_height is the block height when migration completed.
   */
  migrationHeight: bigint;
}
export interface MigrationRecordProtoMsg {
  typeUrl: "/lumera.evmigration.MigrationRecord";
  value: Uint8Array;
}
/**
 * MigrationRecord stores the result of a completed legacy account migration,
 * recording the source and destination addresses plus the time and height.
 * @name MigrationRecordAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MigrationRecord
 */
export interface MigrationRecordAmino {
  /**
   * legacy_address is the coin-type-118 source address that was migrated.
   */
  legacy_address: string;
  /**
   * new_address is the coin-type-60 destination address.
   */
  new_address: string;
  /**
   * migration_time is the block time (unix seconds) when migration completed.
   */
  migration_time: string;
  /**
   * migration_height is the block height when migration completed.
   */
  migration_height: string;
}
export interface MigrationRecordAminoMsg {
  type: "/lumera.evmigration.MigrationRecord";
  value: MigrationRecordAmino;
}
function createBaseMigrationRecord(): MigrationRecord {
  return {
    legacyAddress: "",
    newAddress: "",
    migrationTime: BigInt(0),
    migrationHeight: BigInt(0)
  };
}
/**
 * MigrationRecord stores the result of a completed legacy account migration,
 * recording the source and destination addresses plus the time and height.
 * @name MigrationRecord
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.MigrationRecord
 */
export const MigrationRecord = {
  typeUrl: "/lumera.evmigration.MigrationRecord",
  is(o: any): o is MigrationRecord {
    return o && (o.$typeUrl === MigrationRecord.typeUrl || typeof o.legacyAddress === "string" && typeof o.newAddress === "string" && typeof o.migrationTime === "bigint" && typeof o.migrationHeight === "bigint");
  },
  isAmino(o: any): o is MigrationRecordAmino {
    return o && (o.$typeUrl === MigrationRecord.typeUrl || typeof o.legacy_address === "string" && typeof o.new_address === "string" && typeof o.migration_time === "bigint" && typeof o.migration_height === "bigint");
  },
  encode(message: MigrationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.legacyAddress !== "") {
      writer.uint32(10).string(message.legacyAddress);
    }
    if (message.newAddress !== "") {
      writer.uint32(18).string(message.newAddress);
    }
    if (message.migrationTime !== BigInt(0)) {
      writer.uint32(24).int64(message.migrationTime);
    }
    if (message.migrationHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.migrationHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MigrationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyAddress = reader.string();
          break;
        case 2:
          message.newAddress = reader.string();
          break;
        case 3:
          message.migrationTime = reader.int64();
          break;
        case 4:
          message.migrationHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MigrationRecord>): MigrationRecord {
    const message = createBaseMigrationRecord();
    message.legacyAddress = object.legacyAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    message.migrationTime = object.migrationTime !== undefined && object.migrationTime !== null ? BigInt(object.migrationTime.toString()) : BigInt(0);
    message.migrationHeight = object.migrationHeight !== undefined && object.migrationHeight !== null ? BigInt(object.migrationHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MigrationRecordAmino): MigrationRecord {
    const message = createBaseMigrationRecord();
    if (object.legacy_address !== undefined && object.legacy_address !== null) {
      message.legacyAddress = object.legacy_address;
    }
    if (object.new_address !== undefined && object.new_address !== null) {
      message.newAddress = object.new_address;
    }
    if (object.migration_time !== undefined && object.migration_time !== null) {
      message.migrationTime = BigInt(object.migration_time);
    }
    if (object.migration_height !== undefined && object.migration_height !== null) {
      message.migrationHeight = BigInt(object.migration_height);
    }
    return message;
  },
  toAmino(message: MigrationRecord): MigrationRecordAmino {
    const obj: any = {};
    obj.legacy_address = message.legacyAddress === "" ? undefined : message.legacyAddress;
    obj.new_address = message.newAddress === "" ? undefined : message.newAddress;
    obj.migration_time = message.migrationTime !== BigInt(0) ? message.migrationTime?.toString() : undefined;
    obj.migration_height = message.migrationHeight !== BigInt(0) ? message.migrationHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MigrationRecordAminoMsg): MigrationRecord {
    return MigrationRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: MigrationRecordProtoMsg): MigrationRecord {
    return MigrationRecord.decode(message.value);
  },
  toProto(message: MigrationRecord): Uint8Array {
    return MigrationRecord.encode(message).finish();
  },
  toProtoMsg(message: MigrationRecord): MigrationRecordProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.MigrationRecord",
      value: MigrationRecord.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};