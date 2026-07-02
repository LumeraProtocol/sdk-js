// @ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryMigrationRecordRequest, QueryMigrationRecordResponse, QueryMigrationRecordByNewAddressRequest, QueryMigrationRecordByNewAddressResponse, QueryMigrationRecordsRequest, QueryMigrationRecordsResponse, QueryMigrationEstimateRequest, QueryMigrationEstimateResponse, QueryMigrationStatsRequest, QueryMigrationStatsResponse, QueryLegacyAccountsRequest, QueryLegacyAccountsResponse, QueryMigratedAccountsRequest, QueryMigratedAccountsResponse } from "./query";
/**
 * Params returns the current migration parameters.
 * @name getParams
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "lumera.evmigration.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * MigrationRecord returns the migration record for a single legacy address.
 * Returns nil record if the address has not been migrated.
 * @name getMigrationRecord
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigrationRecord
 */
export const getMigrationRecord = buildQuery<QueryMigrationRecordRequest, QueryMigrationRecordResponse>({
  encode: QueryMigrationRecordRequest.encode,
  decode: QueryMigrationRecordResponse.decode,
  service: "lumera.evmigration.Query",
  method: "MigrationRecord",
  deps: [QueryMigrationRecordRequest, QueryMigrationRecordResponse]
});
/**
 * MigrationRecordByNewAddress returns the migration record for a single new address.
 * Returns nil record if the new address has not been used as a migration destination.
 * @name getMigrationRecordByNewAddress
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigrationRecordByNewAddress
 */
export const getMigrationRecordByNewAddress = buildQuery<QueryMigrationRecordByNewAddressRequest, QueryMigrationRecordByNewAddressResponse>({
  encode: QueryMigrationRecordByNewAddressRequest.encode,
  decode: QueryMigrationRecordByNewAddressResponse.decode,
  service: "lumera.evmigration.Query",
  method: "MigrationRecordByNewAddress",
  deps: [QueryMigrationRecordByNewAddressRequest, QueryMigrationRecordByNewAddressResponse]
});
/**
 * MigrationRecords returns all completed migration records with pagination.
 * @name getMigrationRecords
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigrationRecords
 */
export const getMigrationRecords = buildQuery<QueryMigrationRecordsRequest, QueryMigrationRecordsResponse>({
  encode: QueryMigrationRecordsRequest.encode,
  decode: QueryMigrationRecordsResponse.decode,
  service: "lumera.evmigration.Query",
  method: "MigrationRecords",
  deps: [QueryMigrationRecordsRequest, QueryMigrationRecordsResponse]
});
/**
 * MigrationEstimate returns a dry-run estimate of what would be migrated
 * for a given legacy address (delegation count, unbonding count, etc.).
 * Useful for validators to pre-check before submitting MsgMigrateValidator.
 * @name getMigrationEstimate
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigrationEstimate
 */
export const getMigrationEstimate = buildQuery<QueryMigrationEstimateRequest, QueryMigrationEstimateResponse>({
  encode: QueryMigrationEstimateRequest.encode,
  decode: QueryMigrationEstimateResponse.decode,
  service: "lumera.evmigration.Query",
  method: "MigrationEstimate",
  deps: [QueryMigrationEstimateRequest, QueryMigrationEstimateResponse]
});
/**
 * MigrationStats returns aggregate counters: total migrated, total legacy,
 * total legacy staked, total validators migrated/legacy.
 * @name getMigrationStats
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigrationStats
 */
export const getMigrationStats = buildQuery<QueryMigrationStatsRequest, QueryMigrationStatsResponse>({
  encode: QueryMigrationStatsRequest.encode,
  decode: QueryMigrationStatsResponse.decode,
  service: "lumera.evmigration.Query",
  method: "MigrationStats",
  deps: [QueryMigrationStatsRequest, QueryMigrationStatsResponse]
});
/**
 * LegacyAccounts lists accounts that still use secp256k1 pubkey and have
 * non-zero balance or delegations (i.e. accounts that should migrate).
 * @name getLegacyAccounts
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.LegacyAccounts
 */
export const getLegacyAccounts = buildQuery<QueryLegacyAccountsRequest, QueryLegacyAccountsResponse>({
  encode: QueryLegacyAccountsRequest.encode,
  decode: QueryLegacyAccountsResponse.decode,
  service: "lumera.evmigration.Query",
  method: "LegacyAccounts",
  deps: [QueryLegacyAccountsRequest, QueryLegacyAccountsResponse]
});
/**
 * MigratedAccounts lists all completed migrations with full detail.
 * @name getMigratedAccounts
 * @package lumera.evmigration
 * @see proto service: lumera.evmigration.MigratedAccounts
 */
export const getMigratedAccounts = buildQuery<QueryMigratedAccountsRequest, QueryMigratedAccountsResponse>({
  encode: QueryMigratedAccountsRequest.encode,
  decode: QueryMigratedAccountsResponse.decode,
  service: "lumera.evmigration.Query",
  method: "MigratedAccounts",
  deps: [QueryMigratedAccountsRequest, QueryMigratedAccountsResponse]
});