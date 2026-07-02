// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * Params defines the governance-controlled parameters for the evmigration module.
 * These knobs determine when migrations are accepted and how much work the
 * chain performs per block during the legacy-to-EVM migration window.
 * @name Params
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.Params
 */
export interface Params {
  /**
   * enable_migration is the master switch for the migration window.
   * When false, all MsgClaimLegacyAccount and MsgMigrateValidator messages
   * are rejected regardless of other parameter values.
   * Governance should set this to false once the migration window closes.
   * Default: true.
   */
  enableMigration: boolean;
  /**
   * migration_end_time is an optional hard deadline expressed as a unix
   * timestamp (seconds). If non-zero, any migration message whose block time
   * exceeds this value is rejected. A value of 0 disables the deadline,
   * leaving enable_migration as the sole on/off control.
   * Default: 0 (no deadline).
   */
  migrationEndTime: bigint;
  /**
   * max_migrations_per_block is the maximum number of MsgClaimLegacyAccount
   * messages processed in a single block. Once this limit is reached,
   * additional claims in the same block are rejected. This prevents a burst
   * of migrations from consuming excessive block gas.
   * Default: 50.
   */
  maxMigrationsPerBlock: bigint;
  /**
   * max_validator_delegations is the safety cap for MsgMigrateValidator.
   * A validator migration must re-key every delegation and unbonding-delegation
   * record. If the total count exceeds this threshold the message is rejected
   * because the gas cost of iterating all records would be prohibitive.
   * Validators that exceed the cap must shed delegations before migrating.
   * Default: 2000.
   */
  maxValidatorDelegations: bigint;
  /**
   * max_multisig_sub_keys caps the number of sub-keys in a multisig legacy
   * account's MultisigProof. Bounds per-tx verification cost.
   * Default: 20.
   */
  maxMultisigSubKeys: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/lumera.evmigration.Params";
  value: Uint8Array;
}
/**
 * Params defines the governance-controlled parameters for the evmigration module.
 * These knobs determine when migrations are accepted and how much work the
 * chain performs per block during the legacy-to-EVM migration window.
 * @name ParamsAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.Params
 */
export interface ParamsAmino {
  /**
   * enable_migration is the master switch for the migration window.
   * When false, all MsgClaimLegacyAccount and MsgMigrateValidator messages
   * are rejected regardless of other parameter values.
   * Governance should set this to false once the migration window closes.
   * Default: true.
   */
  enable_migration: boolean;
  /**
   * migration_end_time is an optional hard deadline expressed as a unix
   * timestamp (seconds). If non-zero, any migration message whose block time
   * exceeds this value is rejected. A value of 0 disables the deadline,
   * leaving enable_migration as the sole on/off control.
   * Default: 0 (no deadline).
   */
  migration_end_time: string;
  /**
   * max_migrations_per_block is the maximum number of MsgClaimLegacyAccount
   * messages processed in a single block. Once this limit is reached,
   * additional claims in the same block are rejected. This prevents a burst
   * of migrations from consuming excessive block gas.
   * Default: 50.
   */
  max_migrations_per_block: string;
  /**
   * max_validator_delegations is the safety cap for MsgMigrateValidator.
   * A validator migration must re-key every delegation and unbonding-delegation
   * record. If the total count exceeds this threshold the message is rejected
   * because the gas cost of iterating all records would be prohibitive.
   * Validators that exceed the cap must shed delegations before migrating.
   * Default: 2000.
   */
  max_validator_delegations: string;
  /**
   * max_multisig_sub_keys caps the number of sub-keys in a multisig legacy
   * account's MultisigProof. Bounds per-tx verification cost.
   * Default: 20.
   */
  max_multisig_sub_keys: number;
}
export interface ParamsAminoMsg {
  type: "lumera/x/evmigration/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    enableMigration: false,
    migrationEndTime: BigInt(0),
    maxMigrationsPerBlock: BigInt(0),
    maxValidatorDelegations: BigInt(0),
    maxMultisigSubKeys: 0
  };
}
/**
 * Params defines the governance-controlled parameters for the evmigration module.
 * These knobs determine when migrations are accepted and how much work the
 * chain performs per block during the legacy-to-EVM migration window.
 * @name Params
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.Params
 */
export const Params = {
  typeUrl: "/lumera.evmigration.Params",
  aminoType: "lumera/x/evmigration/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enableMigration === "boolean" && typeof o.migrationEndTime === "bigint" && typeof o.maxMigrationsPerBlock === "bigint" && typeof o.maxValidatorDelegations === "bigint" && typeof o.maxMultisigSubKeys === "number");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enable_migration === "boolean" && typeof o.migration_end_time === "bigint" && typeof o.max_migrations_per_block === "bigint" && typeof o.max_validator_delegations === "bigint" && typeof o.max_multisig_sub_keys === "number");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableMigration === true) {
      writer.uint32(8).bool(message.enableMigration);
    }
    if (message.migrationEndTime !== BigInt(0)) {
      writer.uint32(16).int64(message.migrationEndTime);
    }
    if (message.maxMigrationsPerBlock !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxMigrationsPerBlock);
    }
    if (message.maxValidatorDelegations !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxValidatorDelegations);
    }
    if (message.maxMultisigSubKeys !== 0) {
      writer.uint32(40).uint32(message.maxMultisigSubKeys);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableMigration = reader.bool();
          break;
        case 2:
          message.migrationEndTime = reader.int64();
          break;
        case 3:
          message.maxMigrationsPerBlock = reader.uint64();
          break;
        case 4:
          message.maxValidatorDelegations = reader.uint64();
          break;
        case 5:
          message.maxMultisigSubKeys = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableMigration = object.enableMigration ?? false;
    message.migrationEndTime = object.migrationEndTime !== undefined && object.migrationEndTime !== null ? BigInt(object.migrationEndTime.toString()) : BigInt(0);
    message.maxMigrationsPerBlock = object.maxMigrationsPerBlock !== undefined && object.maxMigrationsPerBlock !== null ? BigInt(object.maxMigrationsPerBlock.toString()) : BigInt(0);
    message.maxValidatorDelegations = object.maxValidatorDelegations !== undefined && object.maxValidatorDelegations !== null ? BigInt(object.maxValidatorDelegations.toString()) : BigInt(0);
    message.maxMultisigSubKeys = object.maxMultisigSubKeys ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_migration !== undefined && object.enable_migration !== null) {
      message.enableMigration = object.enable_migration;
    }
    if (object.migration_end_time !== undefined && object.migration_end_time !== null) {
      message.migrationEndTime = BigInt(object.migration_end_time);
    }
    if (object.max_migrations_per_block !== undefined && object.max_migrations_per_block !== null) {
      message.maxMigrationsPerBlock = BigInt(object.max_migrations_per_block);
    }
    if (object.max_validator_delegations !== undefined && object.max_validator_delegations !== null) {
      message.maxValidatorDelegations = BigInt(object.max_validator_delegations);
    }
    if (object.max_multisig_sub_keys !== undefined && object.max_multisig_sub_keys !== null) {
      message.maxMultisigSubKeys = object.max_multisig_sub_keys;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_migration = message.enableMigration === false ? undefined : message.enableMigration;
    obj.migration_end_time = message.migrationEndTime !== BigInt(0) ? message.migrationEndTime?.toString() : undefined;
    obj.max_migrations_per_block = message.maxMigrationsPerBlock !== BigInt(0) ? message.maxMigrationsPerBlock?.toString() : undefined;
    obj.max_validator_delegations = message.maxValidatorDelegations !== BigInt(0) ? message.maxValidatorDelegations?.toString() : undefined;
    obj.max_multisig_sub_keys = message.maxMultisigSubKeys === 0 ? undefined : message.maxMultisigSubKeys;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "lumera/x/evmigration/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};