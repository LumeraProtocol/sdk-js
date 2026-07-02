// @ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMigrationRecordRequest, QueryMigrationRecordResponse, QueryMigrationRecordByNewAddressRequest, QueryMigrationRecordByNewAddressResponse, QueryMigrationRecordsRequest, QueryMigrationRecordsResponse, QueryMigrationEstimateRequest, QueryMigrationEstimateResponse, QueryMigrationStatsRequest, QueryMigrationStatsResponse, QueryLegacyAccountsRequest, QueryLegacyAccountsResponse, QueryMigratedAccountsRequest, QueryMigratedAccountsResponse } from "./query";
/** Query defines the gRPC querier service for the evmigration module. */
export interface Query {
  /** Params returns the current migration parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * MigrationRecord returns the migration record for a single legacy address.
   * Returns nil record if the address has not been migrated.
   */
  migrationRecord(request: QueryMigrationRecordRequest): Promise<QueryMigrationRecordResponse>;
  /**
   * MigrationRecordByNewAddress returns the migration record for a single new address.
   * Returns nil record if the new address has not been used as a migration destination.
   */
  migrationRecordByNewAddress(request: QueryMigrationRecordByNewAddressRequest): Promise<QueryMigrationRecordByNewAddressResponse>;
  /** MigrationRecords returns all completed migration records with pagination. */
  migrationRecords(request?: QueryMigrationRecordsRequest): Promise<QueryMigrationRecordsResponse>;
  /**
   * MigrationEstimate returns a dry-run estimate of what would be migrated
   * for a given legacy address (delegation count, unbonding count, etc.).
   * Useful for validators to pre-check before submitting MsgMigrateValidator.
   */
  migrationEstimate(request: QueryMigrationEstimateRequest): Promise<QueryMigrationEstimateResponse>;
  /**
   * MigrationStats returns aggregate counters: total migrated, total legacy,
   * total legacy staked, total validators migrated/legacy.
   */
  migrationStats(request?: QueryMigrationStatsRequest): Promise<QueryMigrationStatsResponse>;
  /**
   * LegacyAccounts lists accounts that still use secp256k1 pubkey and have
   * non-zero balance or delegations (i.e. accounts that should migrate).
   */
  legacyAccounts(request?: QueryLegacyAccountsRequest): Promise<QueryLegacyAccountsResponse>;
  /** MigratedAccounts lists all completed migrations with full detail. */
  migratedAccounts(request?: QueryMigratedAccountsRequest): Promise<QueryMigratedAccountsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params returns the current migration parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* MigrationRecord returns the migration record for a single legacy address.
   Returns nil record if the address has not been migrated. */
  migrationRecord = async (request: QueryMigrationRecordRequest): Promise<QueryMigrationRecordResponse> => {
    const data = QueryMigrationRecordRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "MigrationRecord", data);
    return promise.then(data => QueryMigrationRecordResponse.decode(new BinaryReader(data)));
  };
  /* MigrationRecordByNewAddress returns the migration record for a single new address.
   Returns nil record if the new address has not been used as a migration destination. */
  migrationRecordByNewAddress = async (request: QueryMigrationRecordByNewAddressRequest): Promise<QueryMigrationRecordByNewAddressResponse> => {
    const data = QueryMigrationRecordByNewAddressRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "MigrationRecordByNewAddress", data);
    return promise.then(data => QueryMigrationRecordByNewAddressResponse.decode(new BinaryReader(data)));
  };
  /* MigrationRecords returns all completed migration records with pagination. */
  migrationRecords = async (request: QueryMigrationRecordsRequest = {
    pagination: undefined
  }): Promise<QueryMigrationRecordsResponse> => {
    const data = QueryMigrationRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "MigrationRecords", data);
    return promise.then(data => QueryMigrationRecordsResponse.decode(new BinaryReader(data)));
  };
  /* MigrationEstimate returns a dry-run estimate of what would be migrated
   for a given legacy address (delegation count, unbonding count, etc.).
   Useful for validators to pre-check before submitting MsgMigrateValidator. */
  migrationEstimate = async (request: QueryMigrationEstimateRequest): Promise<QueryMigrationEstimateResponse> => {
    const data = QueryMigrationEstimateRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "MigrationEstimate", data);
    return promise.then(data => QueryMigrationEstimateResponse.decode(new BinaryReader(data)));
  };
  /* MigrationStats returns aggregate counters: total migrated, total legacy,
   total legacy staked, total validators migrated/legacy. */
  migrationStats = async (request: QueryMigrationStatsRequest = {}): Promise<QueryMigrationStatsResponse> => {
    const data = QueryMigrationStatsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "MigrationStats", data);
    return promise.then(data => QueryMigrationStatsResponse.decode(new BinaryReader(data)));
  };
  /* LegacyAccounts lists accounts that still use secp256k1 pubkey and have
   non-zero balance or delegations (i.e. accounts that should migrate). */
  legacyAccounts = async (request: QueryLegacyAccountsRequest = {
    pagination: undefined
  }): Promise<QueryLegacyAccountsResponse> => {
    const data = QueryLegacyAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "LegacyAccounts", data);
    return promise.then(data => QueryLegacyAccountsResponse.decode(new BinaryReader(data)));
  };
  /* MigratedAccounts lists all completed migrations with full detail. */
  migratedAccounts = async (request: QueryMigratedAccountsRequest = {
    pagination: undefined
  }): Promise<QueryMigratedAccountsResponse> => {
    const data = QueryMigratedAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.evmigration.Query", "MigratedAccounts", data);
    return promise.then(data => QueryMigratedAccountsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    migrationRecord(request: QueryMigrationRecordRequest): Promise<QueryMigrationRecordResponse> {
      return queryService.migrationRecord(request);
    },
    migrationRecordByNewAddress(request: QueryMigrationRecordByNewAddressRequest): Promise<QueryMigrationRecordByNewAddressResponse> {
      return queryService.migrationRecordByNewAddress(request);
    },
    migrationRecords(request?: QueryMigrationRecordsRequest): Promise<QueryMigrationRecordsResponse> {
      return queryService.migrationRecords(request);
    },
    migrationEstimate(request: QueryMigrationEstimateRequest): Promise<QueryMigrationEstimateResponse> {
      return queryService.migrationEstimate(request);
    },
    migrationStats(request?: QueryMigrationStatsRequest): Promise<QueryMigrationStatsResponse> {
      return queryService.migrationStats(request);
    },
    legacyAccounts(request?: QueryLegacyAccountsRequest): Promise<QueryLegacyAccountsResponse> {
      return queryService.legacyAccounts(request);
    },
    migratedAccounts(request?: QueryMigratedAccountsRequest): Promise<QueryMigratedAccountsResponse> {
      return queryService.migratedAccounts(request);
    }
  };
};