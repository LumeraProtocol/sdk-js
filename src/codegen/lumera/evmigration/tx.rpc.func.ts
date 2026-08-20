// @ts-nocheck
/* eslint-disable */
import { buildTx } from "../../helper-func-types";
import { MsgUpdateParams, MsgClaimLegacyAccount, MsgMigrateValidator } from "./tx";
/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 * @name updateParams
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/**
 * ClaimLegacyAccount migrates all on-chain state from a legacy (coin-type-118)
 * address to a new (coin-type-60) address. Requires dual-signature proof.
 * @name claimLegacyAccount
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.ClaimLegacyAccount
 */
export const claimLegacyAccount = buildTx<MsgClaimLegacyAccount>({
  msg: MsgClaimLegacyAccount
});
/**
 * MigrateValidator migrates a validator operator from legacy to new address,
 * including all delegations, distribution state, supernode records, and
 * account-level state.
 * @name migrateValidator
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigrateValidator
 */
export const migrateValidator = buildTx<MsgMigrateValidator>({
  msg: MsgMigrateValidator
});