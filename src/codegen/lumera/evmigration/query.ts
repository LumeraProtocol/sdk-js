// @ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { MigrationRecord, MigrationRecordAmino } from "./migration_record";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lumera.evmigration.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lumera.evmigration.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryMigrationRecordRequest is the request type for the Query/MigrationRecord RPC method.
 * @name QueryMigrationRecordRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordRequest
 */
export interface QueryMigrationRecordRequest {
  /**
   * legacy_address is the coin-type-118 address to look up.
   */
  legacyAddress: string;
}
export interface QueryMigrationRecordRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordRequest";
  value: Uint8Array;
}
/**
 * QueryMigrationRecordRequest is the request type for the Query/MigrationRecord RPC method.
 * @name QueryMigrationRecordRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordRequest
 */
export interface QueryMigrationRecordRequestAmino {
  /**
   * legacy_address is the coin-type-118 address to look up.
   */
  legacy_address: string;
}
export interface QueryMigrationRecordRequestAminoMsg {
  type: "/lumera.evmigration.QueryMigrationRecordRequest";
  value: QueryMigrationRecordRequestAmino;
}
/**
 * QueryMigrationRecordResponse is the response type for the Query/MigrationRecord RPC method.
 * @name QueryMigrationRecordResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordResponse
 */
export interface QueryMigrationRecordResponse {
  /**
   * record is the migration record, or nil if not found.
   */
  record?: MigrationRecord;
}
export interface QueryMigrationRecordResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordResponse";
  value: Uint8Array;
}
/**
 * QueryMigrationRecordResponse is the response type for the Query/MigrationRecord RPC method.
 * @name QueryMigrationRecordResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordResponse
 */
export interface QueryMigrationRecordResponseAmino {
  /**
   * record is the migration record, or nil if not found.
   */
  record?: MigrationRecordAmino;
}
export interface QueryMigrationRecordResponseAminoMsg {
  type: "/lumera.evmigration.QueryMigrationRecordResponse";
  value: QueryMigrationRecordResponseAmino;
}
/**
 * QueryMigrationRecordByNewAddressRequest is the request type for the Query/MigrationRecordByNewAddress RPC method.
 * @name QueryMigrationRecordByNewAddressRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordByNewAddressRequest
 */
export interface QueryMigrationRecordByNewAddressRequest {
  /**
   * new_address is the coin-type-60 destination address to look up.
   */
  newAddress: string;
}
export interface QueryMigrationRecordByNewAddressRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordByNewAddressRequest";
  value: Uint8Array;
}
/**
 * QueryMigrationRecordByNewAddressRequest is the request type for the Query/MigrationRecordByNewAddress RPC method.
 * @name QueryMigrationRecordByNewAddressRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordByNewAddressRequest
 */
export interface QueryMigrationRecordByNewAddressRequestAmino {
  /**
   * new_address is the coin-type-60 destination address to look up.
   */
  new_address: string;
}
export interface QueryMigrationRecordByNewAddressRequestAminoMsg {
  type: "/lumera.evmigration.QueryMigrationRecordByNewAddressRequest";
  value: QueryMigrationRecordByNewAddressRequestAmino;
}
/**
 * QueryMigrationRecordByNewAddressResponse is the response type for the Query/MigrationRecordByNewAddress RPC method.
 * @name QueryMigrationRecordByNewAddressResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordByNewAddressResponse
 */
export interface QueryMigrationRecordByNewAddressResponse {
  /**
   * record is the migration record, or nil if not found.
   */
  record?: MigrationRecord;
}
export interface QueryMigrationRecordByNewAddressResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordByNewAddressResponse";
  value: Uint8Array;
}
/**
 * QueryMigrationRecordByNewAddressResponse is the response type for the Query/MigrationRecordByNewAddress RPC method.
 * @name QueryMigrationRecordByNewAddressResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordByNewAddressResponse
 */
export interface QueryMigrationRecordByNewAddressResponseAmino {
  /**
   * record is the migration record, or nil if not found.
   */
  record?: MigrationRecordAmino;
}
export interface QueryMigrationRecordByNewAddressResponseAminoMsg {
  type: "/lumera.evmigration.QueryMigrationRecordByNewAddressResponse";
  value: QueryMigrationRecordByNewAddressResponseAmino;
}
/**
 * QueryMigrationRecordsRequest is the request type for the Query/MigrationRecords RPC method.
 * @name QueryMigrationRecordsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordsRequest
 */
export interface QueryMigrationRecordsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryMigrationRecordsRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryMigrationRecordsRequest is the request type for the Query/MigrationRecords RPC method.
 * @name QueryMigrationRecordsRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordsRequest
 */
export interface QueryMigrationRecordsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryMigrationRecordsRequestAminoMsg {
  type: "/lumera.evmigration.QueryMigrationRecordsRequest";
  value: QueryMigrationRecordsRequestAmino;
}
/**
 * QueryMigrationRecordsResponse is the response type for the Query/MigrationRecords RPC method.
 * @name QueryMigrationRecordsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordsResponse
 */
export interface QueryMigrationRecordsResponse {
  /**
   * records is the list of completed migration records.
   */
  records: MigrationRecord[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryMigrationRecordsResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryMigrationRecordsResponse is the response type for the Query/MigrationRecords RPC method.
 * @name QueryMigrationRecordsResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordsResponse
 */
export interface QueryMigrationRecordsResponseAmino {
  /**
   * records is the list of completed migration records.
   */
  records: MigrationRecordAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryMigrationRecordsResponseAminoMsg {
  type: "/lumera.evmigration.QueryMigrationRecordsResponse";
  value: QueryMigrationRecordsResponseAmino;
}
/**
 * QueryMigrationEstimateRequest is the request type for the Query/MigrationEstimate RPC method.
 * @name QueryMigrationEstimateRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationEstimateRequest
 */
export interface QueryMigrationEstimateRequest {
  /**
   * legacy_address is the coin-type-118 address to estimate migration for.
   */
  legacyAddress: string;
}
export interface QueryMigrationEstimateRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationEstimateRequest";
  value: Uint8Array;
}
/**
 * QueryMigrationEstimateRequest is the request type for the Query/MigrationEstimate RPC method.
 * @name QueryMigrationEstimateRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationEstimateRequest
 */
export interface QueryMigrationEstimateRequestAmino {
  /**
   * legacy_address is the coin-type-118 address to estimate migration for.
   */
  legacy_address: string;
}
export interface QueryMigrationEstimateRequestAminoMsg {
  type: "/lumera.evmigration.QueryMigrationEstimateRequest";
  value: QueryMigrationEstimateRequestAmino;
}
/**
 * QueryMigrationEstimateResponse is the response type for the Query/MigrationEstimate RPC method.
 * It provides a dry-run estimate of what would be migrated.
 * @name QueryMigrationEstimateResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationEstimateResponse
 */
export interface QueryMigrationEstimateResponse {
  /**
   * is_validator is true if the legacy address is a validator operator.
   */
  isValidator: boolean;
  /**
   * delegation_count is the number of active delegations from this address.
   */
  delegationCount: bigint;
  /**
   * unbonding_count is the number of unbonding delegation entries.
   */
  unbondingCount: bigint;
  /**
   * redelegation_count is the number of redelegation entries.
   */
  redelegationCount: bigint;
  /**
   * authz_grant_count is the number of authz grants as granter or grantee.
   */
  authzGrantCount: bigint;
  /**
   * feegrant_count is the number of fee allowances as granter or grantee.
   */
  feegrantCount: bigint;
  /**
   * total_touched is the sum of all records that would be re-keyed.
   */
  totalTouched: bigint;
  /**
   * would_succeed is false if migration would be rejected.
   */
  wouldSucceed: boolean;
  /**
   * rejection_reason is non-empty if would_succeed is false.
   */
  rejectionReason: string;
  /**
   * val_delegation_count is delegations TO this validator (from all delegators).
   * Populated only when is_validator is true.
   */
  valDelegationCount: bigint;
  /**
   * val_unbonding_count is unbonding delegations TO this validator.
   * Populated only when is_validator is true.
   */
  valUnbondingCount: bigint;
  /**
   * val_redelegation_count is redelegations referencing this validator as src or dst.
   * Populated only when is_validator is true.
   */
  valRedelegationCount: bigint;
  /**
   * action_count is the number of action records where this address appears
   * either as creator or in the SuperNodes list.
   */
  actionCount: bigint;
  /**
   * balance_summary is a human-readable total balance across all denoms (e.g. "10000000000ulume").
   */
  balanceSummary: string;
  /**
   * has_supernode is true if the legacy address owns a registered supernode.
   */
  hasSupernode: boolean;
  /**
   * is_multisig is true when the account's on-chain pubkey is a flat Cosmos
   * multisig of secp256k1 sub-keys.
   */
  isMultisig: boolean;
  /**
   * threshold is K for K-of-N multisig (0 when !is_multisig).
   */
  threshold: number;
  /**
   * num_signers is N for K-of-N multisig (0 when !is_multisig).
   */
  numSigners: number;
  /**
   * validator_status is the staking BondStatus of the validator entity, as
   * a stable enum string ("BOND_STATUS_BONDED" | "BOND_STATUS_UNBONDING" |
   * "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNSPECIFIED"). Populated only when
   * is_validator is true; empty otherwise. Surfaced so callers can show why
   * would_succeed is false without a separate staking query.
   */
  validatorStatus: string;
  /**
   * validator_jailed is the staking jailed flag of the validator entity.
   * Populated only when is_validator is true. A jailed validator is always
   * also Unbonding or Unbonded; surfacing both fields lets callers
   * distinguish "jailed for downtime/equivocation" (actionable: unjail
   * after slashing window) from "voluntarily unbonded" (not actionable).
   */
  validatorJailed: boolean;
}
export interface QueryMigrationEstimateResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationEstimateResponse";
  value: Uint8Array;
}
/**
 * QueryMigrationEstimateResponse is the response type for the Query/MigrationEstimate RPC method.
 * It provides a dry-run estimate of what would be migrated.
 * @name QueryMigrationEstimateResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationEstimateResponse
 */
export interface QueryMigrationEstimateResponseAmino {
  /**
   * is_validator is true if the legacy address is a validator operator.
   */
  is_validator: boolean;
  /**
   * delegation_count is the number of active delegations from this address.
   */
  delegation_count: string;
  /**
   * unbonding_count is the number of unbonding delegation entries.
   */
  unbonding_count: string;
  /**
   * redelegation_count is the number of redelegation entries.
   */
  redelegation_count: string;
  /**
   * authz_grant_count is the number of authz grants as granter or grantee.
   */
  authz_grant_count: string;
  /**
   * feegrant_count is the number of fee allowances as granter or grantee.
   */
  feegrant_count: string;
  /**
   * total_touched is the sum of all records that would be re-keyed.
   */
  total_touched: string;
  /**
   * would_succeed is false if migration would be rejected.
   */
  would_succeed: boolean;
  /**
   * rejection_reason is non-empty if would_succeed is false.
   */
  rejection_reason: string;
  /**
   * val_delegation_count is delegations TO this validator (from all delegators).
   * Populated only when is_validator is true.
   */
  val_delegation_count: string;
  /**
   * val_unbonding_count is unbonding delegations TO this validator.
   * Populated only when is_validator is true.
   */
  val_unbonding_count: string;
  /**
   * val_redelegation_count is redelegations referencing this validator as src or dst.
   * Populated only when is_validator is true.
   */
  val_redelegation_count: string;
  /**
   * action_count is the number of action records where this address appears
   * either as creator or in the SuperNodes list.
   */
  action_count: string;
  /**
   * balance_summary is a human-readable total balance across all denoms (e.g. "10000000000ulume").
   */
  balance_summary: string;
  /**
   * has_supernode is true if the legacy address owns a registered supernode.
   */
  has_supernode: boolean;
  /**
   * is_multisig is true when the account's on-chain pubkey is a flat Cosmos
   * multisig of secp256k1 sub-keys.
   */
  is_multisig: boolean;
  /**
   * threshold is K for K-of-N multisig (0 when !is_multisig).
   */
  threshold: number;
  /**
   * num_signers is N for K-of-N multisig (0 when !is_multisig).
   */
  num_signers: number;
  /**
   * validator_status is the staking BondStatus of the validator entity, as
   * a stable enum string ("BOND_STATUS_BONDED" | "BOND_STATUS_UNBONDING" |
   * "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNSPECIFIED"). Populated only when
   * is_validator is true; empty otherwise. Surfaced so callers can show why
   * would_succeed is false without a separate staking query.
   */
  validator_status: string;
  /**
   * validator_jailed is the staking jailed flag of the validator entity.
   * Populated only when is_validator is true. A jailed validator is always
   * also Unbonding or Unbonded; surfacing both fields lets callers
   * distinguish "jailed for downtime/equivocation" (actionable: unjail
   * after slashing window) from "voluntarily unbonded" (not actionable).
   */
  validator_jailed: boolean;
}
export interface QueryMigrationEstimateResponseAminoMsg {
  type: "/lumera.evmigration.QueryMigrationEstimateResponse";
  value: QueryMigrationEstimateResponseAmino;
}
/**
 * QueryMigrationStatsRequest is the request type for the Query/MigrationStats RPC method.
 * @name QueryMigrationStatsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationStatsRequest
 */
export interface QueryMigrationStatsRequest {}
export interface QueryMigrationStatsRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationStatsRequest";
  value: Uint8Array;
}
/**
 * QueryMigrationStatsRequest is the request type for the Query/MigrationStats RPC method.
 * @name QueryMigrationStatsRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationStatsRequest
 */
export interface QueryMigrationStatsRequestAmino {}
export interface QueryMigrationStatsRequestAminoMsg {
  type: "/lumera.evmigration.QueryMigrationStatsRequest";
  value: QueryMigrationStatsRequestAmino;
}
/**
 * QueryMigrationStatsResponse is the response type for the Query/MigrationStats RPC method.
 * It provides aggregate counters for the migration dashboard.
 * @name QueryMigrationStatsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationStatsResponse
 */
export interface QueryMigrationStatsResponse {
  /**
   * total_migrated is the number of accounts that completed migration (O(1) from state counter).
   */
  totalMigrated: bigint;
  /**
   * total_legacy is the number of accounts that still have legacy state.
   */
  totalLegacy: bigint;
  /**
   * total_legacy_staked is the subset of total_legacy with active delegations.
   */
  totalLegacyStaked: bigint;
  /**
   * total_validators_migrated is the number of validators that completed migration.
   */
  totalValidatorsMigrated: bigint;
  /**
   * total_validators_legacy is the number of validators with legacy operator address.
   */
  totalValidatorsLegacy: bigint;
  /**
   * total_legacy_with_pubkey is the subset of total_legacy whose pubkey is already on-chain.
   */
  totalLegacyWithPubkey: bigint;
  /**
   * total_legacy_without_pubkey is the subset of total_legacy whose pubkey is nil on-chain.
   */
  totalLegacyWithoutPubkey: bigint;
}
export interface QueryMigrationStatsResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigrationStatsResponse";
  value: Uint8Array;
}
/**
 * QueryMigrationStatsResponse is the response type for the Query/MigrationStats RPC method.
 * It provides aggregate counters for the migration dashboard.
 * @name QueryMigrationStatsResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationStatsResponse
 */
export interface QueryMigrationStatsResponseAmino {
  /**
   * total_migrated is the number of accounts that completed migration (O(1) from state counter).
   */
  total_migrated: string;
  /**
   * total_legacy is the number of accounts that still have legacy state.
   */
  total_legacy: string;
  /**
   * total_legacy_staked is the subset of total_legacy with active delegations.
   */
  total_legacy_staked: string;
  /**
   * total_validators_migrated is the number of validators that completed migration.
   */
  total_validators_migrated: string;
  /**
   * total_validators_legacy is the number of validators with legacy operator address.
   */
  total_validators_legacy: string;
  /**
   * total_legacy_with_pubkey is the subset of total_legacy whose pubkey is already on-chain.
   */
  total_legacy_with_pubkey: string;
  /**
   * total_legacy_without_pubkey is the subset of total_legacy whose pubkey is nil on-chain.
   */
  total_legacy_without_pubkey: string;
}
export interface QueryMigrationStatsResponseAminoMsg {
  type: "/lumera.evmigration.QueryMigrationStatsResponse";
  value: QueryMigrationStatsResponseAmino;
}
/**
 * QueryLegacyAccountsRequest is the request type for the Query/LegacyAccounts RPC method.
 * @name QueryLegacyAccountsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryLegacyAccountsRequest
 */
export interface QueryLegacyAccountsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryLegacyAccountsRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryLegacyAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryLegacyAccountsRequest is the request type for the Query/LegacyAccounts RPC method.
 * @name QueryLegacyAccountsRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryLegacyAccountsRequest
 */
export interface QueryLegacyAccountsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryLegacyAccountsRequestAminoMsg {
  type: "/lumera.evmigration.QueryLegacyAccountsRequest";
  value: QueryLegacyAccountsRequestAmino;
}
/**
 * QueryLegacyAccountsResponse is the response type for the Query/LegacyAccounts RPC method.
 * @name QueryLegacyAccountsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryLegacyAccountsResponse
 */
export interface QueryLegacyAccountsResponse {
  /**
   * accounts is the list of legacy accounts that need migration.
   */
  accounts: LegacyAccountInfo[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryLegacyAccountsResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryLegacyAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryLegacyAccountsResponse is the response type for the Query/LegacyAccounts RPC method.
 * @name QueryLegacyAccountsResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryLegacyAccountsResponse
 */
export interface QueryLegacyAccountsResponseAmino {
  /**
   * accounts is the list of legacy accounts that need migration.
   */
  accounts: LegacyAccountInfoAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryLegacyAccountsResponseAminoMsg {
  type: "/lumera.evmigration.QueryLegacyAccountsResponse";
  value: QueryLegacyAccountsResponseAmino;
}
/**
 * LegacyAccountInfo provides summary information about a legacy account
 * that has not yet been migrated.
 * @name LegacyAccountInfo
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.LegacyAccountInfo
 */
export interface LegacyAccountInfo {
  /**
   * address is the bech32 account address.
   */
  address: string;
  /**
   * balance_summary is a human-readable total balance across all denoms.
   */
  balanceSummary: string;
  /**
   * has_delegations is true if the account has active staking delegations.
   */
  hasDelegations: boolean;
  /**
   * is_validator is true if the account is a validator operator.
   */
  isValidator: boolean;
  /**
   * is_multisig is true when the account's on-chain pubkey is a flat Cosmos
   * multisig of secp256k1 sub-keys.
   */
  isMultisig: boolean;
  /**
   * threshold is K for K-of-N multisig (0 when !is_multisig).
   */
  threshold: number;
  /**
   * num_signers is N for K-of-N multisig (0 when !is_multisig).
   */
  numSigners: number;
}
export interface LegacyAccountInfoProtoMsg {
  typeUrl: "/lumera.evmigration.LegacyAccountInfo";
  value: Uint8Array;
}
/**
 * LegacyAccountInfo provides summary information about a legacy account
 * that has not yet been migrated.
 * @name LegacyAccountInfoAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.LegacyAccountInfo
 */
export interface LegacyAccountInfoAmino {
  /**
   * address is the bech32 account address.
   */
  address: string;
  /**
   * balance_summary is a human-readable total balance across all denoms.
   */
  balance_summary: string;
  /**
   * has_delegations is true if the account has active staking delegations.
   */
  has_delegations: boolean;
  /**
   * is_validator is true if the account is a validator operator.
   */
  is_validator: boolean;
  /**
   * is_multisig is true when the account's on-chain pubkey is a flat Cosmos
   * multisig of secp256k1 sub-keys.
   */
  is_multisig: boolean;
  /**
   * threshold is K for K-of-N multisig (0 when !is_multisig).
   */
  threshold: number;
  /**
   * num_signers is N for K-of-N multisig (0 when !is_multisig).
   */
  num_signers: number;
}
export interface LegacyAccountInfoAminoMsg {
  type: "/lumera.evmigration.LegacyAccountInfo";
  value: LegacyAccountInfoAmino;
}
/**
 * QueryMigratedAccountsRequest is the request type for the Query/MigratedAccounts RPC method.
 * @name QueryMigratedAccountsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigratedAccountsRequest
 */
export interface QueryMigratedAccountsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryMigratedAccountsRequestProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigratedAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryMigratedAccountsRequest is the request type for the Query/MigratedAccounts RPC method.
 * @name QueryMigratedAccountsRequestAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigratedAccountsRequest
 */
export interface QueryMigratedAccountsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryMigratedAccountsRequestAminoMsg {
  type: "/lumera.evmigration.QueryMigratedAccountsRequest";
  value: QueryMigratedAccountsRequestAmino;
}
/**
 * QueryMigratedAccountsResponse is the response type for the Query/MigratedAccounts RPC method.
 * @name QueryMigratedAccountsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigratedAccountsResponse
 */
export interface QueryMigratedAccountsResponse {
  /**
   * records is the list of completed migration records.
   */
  records: MigrationRecord[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryMigratedAccountsResponseProtoMsg {
  typeUrl: "/lumera.evmigration.QueryMigratedAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryMigratedAccountsResponse is the response type for the Query/MigratedAccounts RPC method.
 * @name QueryMigratedAccountsResponseAmino
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigratedAccountsResponse
 */
export interface QueryMigratedAccountsResponseAmino {
  /**
   * records is the list of completed migration records.
   */
  records: MigrationRecordAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryMigratedAccountsResponseAminoMsg {
  type: "/lumera.evmigration.QueryMigratedAccountsResponse";
  value: QueryMigratedAccountsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/lumera.evmigration.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/lumera.evmigration.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryMigrationRecordRequest(): QueryMigrationRecordRequest {
  return {
    legacyAddress: ""
  };
}
/**
 * QueryMigrationRecordRequest is the request type for the Query/MigrationRecord RPC method.
 * @name QueryMigrationRecordRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordRequest
 */
export const QueryMigrationRecordRequest = {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordRequest",
  is(o: any): o is QueryMigrationRecordRequest {
    return o && (o.$typeUrl === QueryMigrationRecordRequest.typeUrl || typeof o.legacyAddress === "string");
  },
  isAmino(o: any): o is QueryMigrationRecordRequestAmino {
    return o && (o.$typeUrl === QueryMigrationRecordRequest.typeUrl || typeof o.legacy_address === "string");
  },
  encode(message: QueryMigrationRecordRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.legacyAddress !== "") {
      writer.uint32(10).string(message.legacyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationRecordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationRecordRequest>): QueryMigrationRecordRequest {
    const message = createBaseQueryMigrationRecordRequest();
    message.legacyAddress = object.legacyAddress ?? "";
    return message;
  },
  fromAmino(object: QueryMigrationRecordRequestAmino): QueryMigrationRecordRequest {
    const message = createBaseQueryMigrationRecordRequest();
    if (object.legacy_address !== undefined && object.legacy_address !== null) {
      message.legacyAddress = object.legacy_address;
    }
    return message;
  },
  toAmino(message: QueryMigrationRecordRequest): QueryMigrationRecordRequestAmino {
    const obj: any = {};
    obj.legacy_address = message.legacyAddress === "" ? undefined : message.legacyAddress;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationRecordRequestAminoMsg): QueryMigrationRecordRequest {
    return QueryMigrationRecordRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationRecordRequestProtoMsg): QueryMigrationRecordRequest {
    return QueryMigrationRecordRequest.decode(message.value);
  },
  toProto(message: QueryMigrationRecordRequest): Uint8Array {
    return QueryMigrationRecordRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationRecordRequest): QueryMigrationRecordRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationRecordRequest",
      value: QueryMigrationRecordRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMigrationRecordResponse(): QueryMigrationRecordResponse {
  return {
    record: undefined
  };
}
/**
 * QueryMigrationRecordResponse is the response type for the Query/MigrationRecord RPC method.
 * @name QueryMigrationRecordResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordResponse
 */
export const QueryMigrationRecordResponse = {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordResponse",
  is(o: any): o is QueryMigrationRecordResponse {
    return o && o.$typeUrl === QueryMigrationRecordResponse.typeUrl;
  },
  isAmino(o: any): o is QueryMigrationRecordResponseAmino {
    return o && o.$typeUrl === QueryMigrationRecordResponse.typeUrl;
  },
  encode(message: QueryMigrationRecordResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      MigrationRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationRecordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = MigrationRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationRecordResponse>): QueryMigrationRecordResponse {
    const message = createBaseQueryMigrationRecordResponse();
    message.record = object.record !== undefined && object.record !== null ? MigrationRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryMigrationRecordResponseAmino): QueryMigrationRecordResponse {
    const message = createBaseQueryMigrationRecordResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = MigrationRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryMigrationRecordResponse): QueryMigrationRecordResponseAmino {
    const obj: any = {};
    obj.record = message.record ? MigrationRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationRecordResponseAminoMsg): QueryMigrationRecordResponse {
    return QueryMigrationRecordResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationRecordResponseProtoMsg): QueryMigrationRecordResponse {
    return QueryMigrationRecordResponse.decode(message.value);
  },
  toProto(message: QueryMigrationRecordResponse): Uint8Array {
    return QueryMigrationRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationRecordResponse): QueryMigrationRecordResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationRecordResponse",
      value: QueryMigrationRecordResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMigrationRecordResponse.typeUrl)) {
      return;
    }
    MigrationRecord.registerTypeUrl();
  }
};
function createBaseQueryMigrationRecordByNewAddressRequest(): QueryMigrationRecordByNewAddressRequest {
  return {
    newAddress: ""
  };
}
/**
 * QueryMigrationRecordByNewAddressRequest is the request type for the Query/MigrationRecordByNewAddress RPC method.
 * @name QueryMigrationRecordByNewAddressRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordByNewAddressRequest
 */
export const QueryMigrationRecordByNewAddressRequest = {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordByNewAddressRequest",
  is(o: any): o is QueryMigrationRecordByNewAddressRequest {
    return o && (o.$typeUrl === QueryMigrationRecordByNewAddressRequest.typeUrl || typeof o.newAddress === "string");
  },
  isAmino(o: any): o is QueryMigrationRecordByNewAddressRequestAmino {
    return o && (o.$typeUrl === QueryMigrationRecordByNewAddressRequest.typeUrl || typeof o.new_address === "string");
  },
  encode(message: QueryMigrationRecordByNewAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newAddress !== "") {
      writer.uint32(10).string(message.newAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationRecordByNewAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationRecordByNewAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationRecordByNewAddressRequest>): QueryMigrationRecordByNewAddressRequest {
    const message = createBaseQueryMigrationRecordByNewAddressRequest();
    message.newAddress = object.newAddress ?? "";
    return message;
  },
  fromAmino(object: QueryMigrationRecordByNewAddressRequestAmino): QueryMigrationRecordByNewAddressRequest {
    const message = createBaseQueryMigrationRecordByNewAddressRequest();
    if (object.new_address !== undefined && object.new_address !== null) {
      message.newAddress = object.new_address;
    }
    return message;
  },
  toAmino(message: QueryMigrationRecordByNewAddressRequest): QueryMigrationRecordByNewAddressRequestAmino {
    const obj: any = {};
    obj.new_address = message.newAddress === "" ? undefined : message.newAddress;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationRecordByNewAddressRequestAminoMsg): QueryMigrationRecordByNewAddressRequest {
    return QueryMigrationRecordByNewAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationRecordByNewAddressRequestProtoMsg): QueryMigrationRecordByNewAddressRequest {
    return QueryMigrationRecordByNewAddressRequest.decode(message.value);
  },
  toProto(message: QueryMigrationRecordByNewAddressRequest): Uint8Array {
    return QueryMigrationRecordByNewAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationRecordByNewAddressRequest): QueryMigrationRecordByNewAddressRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationRecordByNewAddressRequest",
      value: QueryMigrationRecordByNewAddressRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMigrationRecordByNewAddressResponse(): QueryMigrationRecordByNewAddressResponse {
  return {
    record: undefined
  };
}
/**
 * QueryMigrationRecordByNewAddressResponse is the response type for the Query/MigrationRecordByNewAddress RPC method.
 * @name QueryMigrationRecordByNewAddressResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordByNewAddressResponse
 */
export const QueryMigrationRecordByNewAddressResponse = {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordByNewAddressResponse",
  is(o: any): o is QueryMigrationRecordByNewAddressResponse {
    return o && o.$typeUrl === QueryMigrationRecordByNewAddressResponse.typeUrl;
  },
  isAmino(o: any): o is QueryMigrationRecordByNewAddressResponseAmino {
    return o && o.$typeUrl === QueryMigrationRecordByNewAddressResponse.typeUrl;
  },
  encode(message: QueryMigrationRecordByNewAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.record !== undefined) {
      MigrationRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationRecordByNewAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationRecordByNewAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = MigrationRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationRecordByNewAddressResponse>): QueryMigrationRecordByNewAddressResponse {
    const message = createBaseQueryMigrationRecordByNewAddressResponse();
    message.record = object.record !== undefined && object.record !== null ? MigrationRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryMigrationRecordByNewAddressResponseAmino): QueryMigrationRecordByNewAddressResponse {
    const message = createBaseQueryMigrationRecordByNewAddressResponse();
    if (object.record !== undefined && object.record !== null) {
      message.record = MigrationRecord.fromAmino(object.record);
    }
    return message;
  },
  toAmino(message: QueryMigrationRecordByNewAddressResponse): QueryMigrationRecordByNewAddressResponseAmino {
    const obj: any = {};
    obj.record = message.record ? MigrationRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationRecordByNewAddressResponseAminoMsg): QueryMigrationRecordByNewAddressResponse {
    return QueryMigrationRecordByNewAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationRecordByNewAddressResponseProtoMsg): QueryMigrationRecordByNewAddressResponse {
    return QueryMigrationRecordByNewAddressResponse.decode(message.value);
  },
  toProto(message: QueryMigrationRecordByNewAddressResponse): Uint8Array {
    return QueryMigrationRecordByNewAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationRecordByNewAddressResponse): QueryMigrationRecordByNewAddressResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationRecordByNewAddressResponse",
      value: QueryMigrationRecordByNewAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMigrationRecordByNewAddressResponse.typeUrl)) {
      return;
    }
    MigrationRecord.registerTypeUrl();
  }
};
function createBaseQueryMigrationRecordsRequest(): QueryMigrationRecordsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryMigrationRecordsRequest is the request type for the Query/MigrationRecords RPC method.
 * @name QueryMigrationRecordsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordsRequest
 */
export const QueryMigrationRecordsRequest = {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordsRequest",
  is(o: any): o is QueryMigrationRecordsRequest {
    return o && o.$typeUrl === QueryMigrationRecordsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMigrationRecordsRequestAmino {
    return o && o.$typeUrl === QueryMigrationRecordsRequest.typeUrl;
  },
  encode(message: QueryMigrationRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationRecordsRequest>): QueryMigrationRecordsRequest {
    const message = createBaseQueryMigrationRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMigrationRecordsRequestAmino): QueryMigrationRecordsRequest {
    const message = createBaseQueryMigrationRecordsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMigrationRecordsRequest): QueryMigrationRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationRecordsRequestAminoMsg): QueryMigrationRecordsRequest {
    return QueryMigrationRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationRecordsRequestProtoMsg): QueryMigrationRecordsRequest {
    return QueryMigrationRecordsRequest.decode(message.value);
  },
  toProto(message: QueryMigrationRecordsRequest): Uint8Array {
    return QueryMigrationRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationRecordsRequest): QueryMigrationRecordsRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationRecordsRequest",
      value: QueryMigrationRecordsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMigrationRecordsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryMigrationRecordsResponse(): QueryMigrationRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
/**
 * QueryMigrationRecordsResponse is the response type for the Query/MigrationRecords RPC method.
 * @name QueryMigrationRecordsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationRecordsResponse
 */
export const QueryMigrationRecordsResponse = {
  typeUrl: "/lumera.evmigration.QueryMigrationRecordsResponse",
  is(o: any): o is QueryMigrationRecordsResponse {
    return o && (o.$typeUrl === QueryMigrationRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || MigrationRecord.is(o.records[0])));
  },
  isAmino(o: any): o is QueryMigrationRecordsResponseAmino {
    return o && (o.$typeUrl === QueryMigrationRecordsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || MigrationRecord.isAmino(o.records[0])));
  },
  encode(message: QueryMigrationRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      MigrationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(MigrationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationRecordsResponse>): QueryMigrationRecordsResponse {
    const message = createBaseQueryMigrationRecordsResponse();
    message.records = object.records?.map(e => MigrationRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMigrationRecordsResponseAmino): QueryMigrationRecordsResponse {
    const message = createBaseQueryMigrationRecordsResponse();
    message.records = object.records?.map(e => MigrationRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMigrationRecordsResponse): QueryMigrationRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? MigrationRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationRecordsResponseAminoMsg): QueryMigrationRecordsResponse {
    return QueryMigrationRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationRecordsResponseProtoMsg): QueryMigrationRecordsResponse {
    return QueryMigrationRecordsResponse.decode(message.value);
  },
  toProto(message: QueryMigrationRecordsResponse): Uint8Array {
    return QueryMigrationRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationRecordsResponse): QueryMigrationRecordsResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationRecordsResponse",
      value: QueryMigrationRecordsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMigrationRecordsResponse.typeUrl)) {
      return;
    }
    MigrationRecord.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryMigrationEstimateRequest(): QueryMigrationEstimateRequest {
  return {
    legacyAddress: ""
  };
}
/**
 * QueryMigrationEstimateRequest is the request type for the Query/MigrationEstimate RPC method.
 * @name QueryMigrationEstimateRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationEstimateRequest
 */
export const QueryMigrationEstimateRequest = {
  typeUrl: "/lumera.evmigration.QueryMigrationEstimateRequest",
  is(o: any): o is QueryMigrationEstimateRequest {
    return o && (o.$typeUrl === QueryMigrationEstimateRequest.typeUrl || typeof o.legacyAddress === "string");
  },
  isAmino(o: any): o is QueryMigrationEstimateRequestAmino {
    return o && (o.$typeUrl === QueryMigrationEstimateRequest.typeUrl || typeof o.legacy_address === "string");
  },
  encode(message: QueryMigrationEstimateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.legacyAddress !== "") {
      writer.uint32(10).string(message.legacyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationEstimateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationEstimateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationEstimateRequest>): QueryMigrationEstimateRequest {
    const message = createBaseQueryMigrationEstimateRequest();
    message.legacyAddress = object.legacyAddress ?? "";
    return message;
  },
  fromAmino(object: QueryMigrationEstimateRequestAmino): QueryMigrationEstimateRequest {
    const message = createBaseQueryMigrationEstimateRequest();
    if (object.legacy_address !== undefined && object.legacy_address !== null) {
      message.legacyAddress = object.legacy_address;
    }
    return message;
  },
  toAmino(message: QueryMigrationEstimateRequest): QueryMigrationEstimateRequestAmino {
    const obj: any = {};
    obj.legacy_address = message.legacyAddress === "" ? undefined : message.legacyAddress;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationEstimateRequestAminoMsg): QueryMigrationEstimateRequest {
    return QueryMigrationEstimateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationEstimateRequestProtoMsg): QueryMigrationEstimateRequest {
    return QueryMigrationEstimateRequest.decode(message.value);
  },
  toProto(message: QueryMigrationEstimateRequest): Uint8Array {
    return QueryMigrationEstimateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationEstimateRequest): QueryMigrationEstimateRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationEstimateRequest",
      value: QueryMigrationEstimateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMigrationEstimateResponse(): QueryMigrationEstimateResponse {
  return {
    isValidator: false,
    delegationCount: BigInt(0),
    unbondingCount: BigInt(0),
    redelegationCount: BigInt(0),
    authzGrantCount: BigInt(0),
    feegrantCount: BigInt(0),
    totalTouched: BigInt(0),
    wouldSucceed: false,
    rejectionReason: "",
    valDelegationCount: BigInt(0),
    valUnbondingCount: BigInt(0),
    valRedelegationCount: BigInt(0),
    actionCount: BigInt(0),
    balanceSummary: "",
    hasSupernode: false,
    isMultisig: false,
    threshold: 0,
    numSigners: 0,
    validatorStatus: "",
    validatorJailed: false
  };
}
/**
 * QueryMigrationEstimateResponse is the response type for the Query/MigrationEstimate RPC method.
 * It provides a dry-run estimate of what would be migrated.
 * @name QueryMigrationEstimateResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationEstimateResponse
 */
export const QueryMigrationEstimateResponse = {
  typeUrl: "/lumera.evmigration.QueryMigrationEstimateResponse",
  is(o: any): o is QueryMigrationEstimateResponse {
    return o && (o.$typeUrl === QueryMigrationEstimateResponse.typeUrl || typeof o.isValidator === "boolean" && typeof o.delegationCount === "bigint" && typeof o.unbondingCount === "bigint" && typeof o.redelegationCount === "bigint" && typeof o.authzGrantCount === "bigint" && typeof o.feegrantCount === "bigint" && typeof o.totalTouched === "bigint" && typeof o.wouldSucceed === "boolean" && typeof o.rejectionReason === "string" && typeof o.valDelegationCount === "bigint" && typeof o.valUnbondingCount === "bigint" && typeof o.valRedelegationCount === "bigint" && typeof o.actionCount === "bigint" && typeof o.balanceSummary === "string" && typeof o.hasSupernode === "boolean" && typeof o.isMultisig === "boolean" && typeof o.threshold === "number" && typeof o.numSigners === "number" && typeof o.validatorStatus === "string" && typeof o.validatorJailed === "boolean");
  },
  isAmino(o: any): o is QueryMigrationEstimateResponseAmino {
    return o && (o.$typeUrl === QueryMigrationEstimateResponse.typeUrl || typeof o.is_validator === "boolean" && typeof o.delegation_count === "bigint" && typeof o.unbonding_count === "bigint" && typeof o.redelegation_count === "bigint" && typeof o.authz_grant_count === "bigint" && typeof o.feegrant_count === "bigint" && typeof o.total_touched === "bigint" && typeof o.would_succeed === "boolean" && typeof o.rejection_reason === "string" && typeof o.val_delegation_count === "bigint" && typeof o.val_unbonding_count === "bigint" && typeof o.val_redelegation_count === "bigint" && typeof o.action_count === "bigint" && typeof o.balance_summary === "string" && typeof o.has_supernode === "boolean" && typeof o.is_multisig === "boolean" && typeof o.threshold === "number" && typeof o.num_signers === "number" && typeof o.validator_status === "string" && typeof o.validator_jailed === "boolean");
  },
  encode(message: QueryMigrationEstimateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isValidator === true) {
      writer.uint32(8).bool(message.isValidator);
    }
    if (message.delegationCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.delegationCount);
    }
    if (message.unbondingCount !== BigInt(0)) {
      writer.uint32(24).uint64(message.unbondingCount);
    }
    if (message.redelegationCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.redelegationCount);
    }
    if (message.authzGrantCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.authzGrantCount);
    }
    if (message.feegrantCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.feegrantCount);
    }
    if (message.totalTouched !== BigInt(0)) {
      writer.uint32(56).uint64(message.totalTouched);
    }
    if (message.wouldSucceed === true) {
      writer.uint32(64).bool(message.wouldSucceed);
    }
    if (message.rejectionReason !== "") {
      writer.uint32(74).string(message.rejectionReason);
    }
    if (message.valDelegationCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.valDelegationCount);
    }
    if (message.valUnbondingCount !== BigInt(0)) {
      writer.uint32(88).uint64(message.valUnbondingCount);
    }
    if (message.valRedelegationCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.valRedelegationCount);
    }
    if (message.actionCount !== BigInt(0)) {
      writer.uint32(104).uint64(message.actionCount);
    }
    if (message.balanceSummary !== "") {
      writer.uint32(114).string(message.balanceSummary);
    }
    if (message.hasSupernode === true) {
      writer.uint32(120).bool(message.hasSupernode);
    }
    if (message.isMultisig === true) {
      writer.uint32(128).bool(message.isMultisig);
    }
    if (message.threshold !== 0) {
      writer.uint32(136).uint32(message.threshold);
    }
    if (message.numSigners !== 0) {
      writer.uint32(144).uint32(message.numSigners);
    }
    if (message.validatorStatus !== "") {
      writer.uint32(154).string(message.validatorStatus);
    }
    if (message.validatorJailed === true) {
      writer.uint32(160).bool(message.validatorJailed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationEstimateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationEstimateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isValidator = reader.bool();
          break;
        case 2:
          message.delegationCount = reader.uint64();
          break;
        case 3:
          message.unbondingCount = reader.uint64();
          break;
        case 4:
          message.redelegationCount = reader.uint64();
          break;
        case 5:
          message.authzGrantCount = reader.uint64();
          break;
        case 6:
          message.feegrantCount = reader.uint64();
          break;
        case 7:
          message.totalTouched = reader.uint64();
          break;
        case 8:
          message.wouldSucceed = reader.bool();
          break;
        case 9:
          message.rejectionReason = reader.string();
          break;
        case 10:
          message.valDelegationCount = reader.uint64();
          break;
        case 11:
          message.valUnbondingCount = reader.uint64();
          break;
        case 12:
          message.valRedelegationCount = reader.uint64();
          break;
        case 13:
          message.actionCount = reader.uint64();
          break;
        case 14:
          message.balanceSummary = reader.string();
          break;
        case 15:
          message.hasSupernode = reader.bool();
          break;
        case 16:
          message.isMultisig = reader.bool();
          break;
        case 17:
          message.threshold = reader.uint32();
          break;
        case 18:
          message.numSigners = reader.uint32();
          break;
        case 19:
          message.validatorStatus = reader.string();
          break;
        case 20:
          message.validatorJailed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationEstimateResponse>): QueryMigrationEstimateResponse {
    const message = createBaseQueryMigrationEstimateResponse();
    message.isValidator = object.isValidator ?? false;
    message.delegationCount = object.delegationCount !== undefined && object.delegationCount !== null ? BigInt(object.delegationCount.toString()) : BigInt(0);
    message.unbondingCount = object.unbondingCount !== undefined && object.unbondingCount !== null ? BigInt(object.unbondingCount.toString()) : BigInt(0);
    message.redelegationCount = object.redelegationCount !== undefined && object.redelegationCount !== null ? BigInt(object.redelegationCount.toString()) : BigInt(0);
    message.authzGrantCount = object.authzGrantCount !== undefined && object.authzGrantCount !== null ? BigInt(object.authzGrantCount.toString()) : BigInt(0);
    message.feegrantCount = object.feegrantCount !== undefined && object.feegrantCount !== null ? BigInt(object.feegrantCount.toString()) : BigInt(0);
    message.totalTouched = object.totalTouched !== undefined && object.totalTouched !== null ? BigInt(object.totalTouched.toString()) : BigInt(0);
    message.wouldSucceed = object.wouldSucceed ?? false;
    message.rejectionReason = object.rejectionReason ?? "";
    message.valDelegationCount = object.valDelegationCount !== undefined && object.valDelegationCount !== null ? BigInt(object.valDelegationCount.toString()) : BigInt(0);
    message.valUnbondingCount = object.valUnbondingCount !== undefined && object.valUnbondingCount !== null ? BigInt(object.valUnbondingCount.toString()) : BigInt(0);
    message.valRedelegationCount = object.valRedelegationCount !== undefined && object.valRedelegationCount !== null ? BigInt(object.valRedelegationCount.toString()) : BigInt(0);
    message.actionCount = object.actionCount !== undefined && object.actionCount !== null ? BigInt(object.actionCount.toString()) : BigInt(0);
    message.balanceSummary = object.balanceSummary ?? "";
    message.hasSupernode = object.hasSupernode ?? false;
    message.isMultisig = object.isMultisig ?? false;
    message.threshold = object.threshold ?? 0;
    message.numSigners = object.numSigners ?? 0;
    message.validatorStatus = object.validatorStatus ?? "";
    message.validatorJailed = object.validatorJailed ?? false;
    return message;
  },
  fromAmino(object: QueryMigrationEstimateResponseAmino): QueryMigrationEstimateResponse {
    const message = createBaseQueryMigrationEstimateResponse();
    if (object.is_validator !== undefined && object.is_validator !== null) {
      message.isValidator = object.is_validator;
    }
    if (object.delegation_count !== undefined && object.delegation_count !== null) {
      message.delegationCount = BigInt(object.delegation_count);
    }
    if (object.unbonding_count !== undefined && object.unbonding_count !== null) {
      message.unbondingCount = BigInt(object.unbonding_count);
    }
    if (object.redelegation_count !== undefined && object.redelegation_count !== null) {
      message.redelegationCount = BigInt(object.redelegation_count);
    }
    if (object.authz_grant_count !== undefined && object.authz_grant_count !== null) {
      message.authzGrantCount = BigInt(object.authz_grant_count);
    }
    if (object.feegrant_count !== undefined && object.feegrant_count !== null) {
      message.feegrantCount = BigInt(object.feegrant_count);
    }
    if (object.total_touched !== undefined && object.total_touched !== null) {
      message.totalTouched = BigInt(object.total_touched);
    }
    if (object.would_succeed !== undefined && object.would_succeed !== null) {
      message.wouldSucceed = object.would_succeed;
    }
    if (object.rejection_reason !== undefined && object.rejection_reason !== null) {
      message.rejectionReason = object.rejection_reason;
    }
    if (object.val_delegation_count !== undefined && object.val_delegation_count !== null) {
      message.valDelegationCount = BigInt(object.val_delegation_count);
    }
    if (object.val_unbonding_count !== undefined && object.val_unbonding_count !== null) {
      message.valUnbondingCount = BigInt(object.val_unbonding_count);
    }
    if (object.val_redelegation_count !== undefined && object.val_redelegation_count !== null) {
      message.valRedelegationCount = BigInt(object.val_redelegation_count);
    }
    if (object.action_count !== undefined && object.action_count !== null) {
      message.actionCount = BigInt(object.action_count);
    }
    if (object.balance_summary !== undefined && object.balance_summary !== null) {
      message.balanceSummary = object.balance_summary;
    }
    if (object.has_supernode !== undefined && object.has_supernode !== null) {
      message.hasSupernode = object.has_supernode;
    }
    if (object.is_multisig !== undefined && object.is_multisig !== null) {
      message.isMultisig = object.is_multisig;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.num_signers !== undefined && object.num_signers !== null) {
      message.numSigners = object.num_signers;
    }
    if (object.validator_status !== undefined && object.validator_status !== null) {
      message.validatorStatus = object.validator_status;
    }
    if (object.validator_jailed !== undefined && object.validator_jailed !== null) {
      message.validatorJailed = object.validator_jailed;
    }
    return message;
  },
  toAmino(message: QueryMigrationEstimateResponse): QueryMigrationEstimateResponseAmino {
    const obj: any = {};
    obj.is_validator = message.isValidator === false ? undefined : message.isValidator;
    obj.delegation_count = message.delegationCount !== BigInt(0) ? message.delegationCount?.toString() : undefined;
    obj.unbonding_count = message.unbondingCount !== BigInt(0) ? message.unbondingCount?.toString() : undefined;
    obj.redelegation_count = message.redelegationCount !== BigInt(0) ? message.redelegationCount?.toString() : undefined;
    obj.authz_grant_count = message.authzGrantCount !== BigInt(0) ? message.authzGrantCount?.toString() : undefined;
    obj.feegrant_count = message.feegrantCount !== BigInt(0) ? message.feegrantCount?.toString() : undefined;
    obj.total_touched = message.totalTouched !== BigInt(0) ? message.totalTouched?.toString() : undefined;
    obj.would_succeed = message.wouldSucceed === false ? undefined : message.wouldSucceed;
    obj.rejection_reason = message.rejectionReason === "" ? undefined : message.rejectionReason;
    obj.val_delegation_count = message.valDelegationCount !== BigInt(0) ? message.valDelegationCount?.toString() : undefined;
    obj.val_unbonding_count = message.valUnbondingCount !== BigInt(0) ? message.valUnbondingCount?.toString() : undefined;
    obj.val_redelegation_count = message.valRedelegationCount !== BigInt(0) ? message.valRedelegationCount?.toString() : undefined;
    obj.action_count = message.actionCount !== BigInt(0) ? message.actionCount?.toString() : undefined;
    obj.balance_summary = message.balanceSummary === "" ? undefined : message.balanceSummary;
    obj.has_supernode = message.hasSupernode === false ? undefined : message.hasSupernode;
    obj.is_multisig = message.isMultisig === false ? undefined : message.isMultisig;
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    obj.num_signers = message.numSigners === 0 ? undefined : message.numSigners;
    obj.validator_status = message.validatorStatus === "" ? undefined : message.validatorStatus;
    obj.validator_jailed = message.validatorJailed === false ? undefined : message.validatorJailed;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationEstimateResponseAminoMsg): QueryMigrationEstimateResponse {
    return QueryMigrationEstimateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationEstimateResponseProtoMsg): QueryMigrationEstimateResponse {
    return QueryMigrationEstimateResponse.decode(message.value);
  },
  toProto(message: QueryMigrationEstimateResponse): Uint8Array {
    return QueryMigrationEstimateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationEstimateResponse): QueryMigrationEstimateResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationEstimateResponse",
      value: QueryMigrationEstimateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMigrationStatsRequest(): QueryMigrationStatsRequest {
  return {};
}
/**
 * QueryMigrationStatsRequest is the request type for the Query/MigrationStats RPC method.
 * @name QueryMigrationStatsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationStatsRequest
 */
export const QueryMigrationStatsRequest = {
  typeUrl: "/lumera.evmigration.QueryMigrationStatsRequest",
  is(o: any): o is QueryMigrationStatsRequest {
    return o && o.$typeUrl === QueryMigrationStatsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMigrationStatsRequestAmino {
    return o && o.$typeUrl === QueryMigrationStatsRequest.typeUrl;
  },
  encode(_: QueryMigrationStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationStatsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationStatsRequest();
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
  fromPartial(_: DeepPartial<QueryMigrationStatsRequest>): QueryMigrationStatsRequest {
    const message = createBaseQueryMigrationStatsRequest();
    return message;
  },
  fromAmino(_: QueryMigrationStatsRequestAmino): QueryMigrationStatsRequest {
    const message = createBaseQueryMigrationStatsRequest();
    return message;
  },
  toAmino(_: QueryMigrationStatsRequest): QueryMigrationStatsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMigrationStatsRequestAminoMsg): QueryMigrationStatsRequest {
    return QueryMigrationStatsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationStatsRequestProtoMsg): QueryMigrationStatsRequest {
    return QueryMigrationStatsRequest.decode(message.value);
  },
  toProto(message: QueryMigrationStatsRequest): Uint8Array {
    return QueryMigrationStatsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationStatsRequest): QueryMigrationStatsRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationStatsRequest",
      value: QueryMigrationStatsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMigrationStatsResponse(): QueryMigrationStatsResponse {
  return {
    totalMigrated: BigInt(0),
    totalLegacy: BigInt(0),
    totalLegacyStaked: BigInt(0),
    totalValidatorsMigrated: BigInt(0),
    totalValidatorsLegacy: BigInt(0),
    totalLegacyWithPubkey: BigInt(0),
    totalLegacyWithoutPubkey: BigInt(0)
  };
}
/**
 * QueryMigrationStatsResponse is the response type for the Query/MigrationStats RPC method.
 * It provides aggregate counters for the migration dashboard.
 * @name QueryMigrationStatsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigrationStatsResponse
 */
export const QueryMigrationStatsResponse = {
  typeUrl: "/lumera.evmigration.QueryMigrationStatsResponse",
  is(o: any): o is QueryMigrationStatsResponse {
    return o && (o.$typeUrl === QueryMigrationStatsResponse.typeUrl || typeof o.totalMigrated === "bigint" && typeof o.totalLegacy === "bigint" && typeof o.totalLegacyStaked === "bigint" && typeof o.totalValidatorsMigrated === "bigint" && typeof o.totalValidatorsLegacy === "bigint" && typeof o.totalLegacyWithPubkey === "bigint" && typeof o.totalLegacyWithoutPubkey === "bigint");
  },
  isAmino(o: any): o is QueryMigrationStatsResponseAmino {
    return o && (o.$typeUrl === QueryMigrationStatsResponse.typeUrl || typeof o.total_migrated === "bigint" && typeof o.total_legacy === "bigint" && typeof o.total_legacy_staked === "bigint" && typeof o.total_validators_migrated === "bigint" && typeof o.total_validators_legacy === "bigint" && typeof o.total_legacy_with_pubkey === "bigint" && typeof o.total_legacy_without_pubkey === "bigint");
  },
  encode(message: QueryMigrationStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalMigrated !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalMigrated);
    }
    if (message.totalLegacy !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalLegacy);
    }
    if (message.totalLegacyStaked !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalLegacyStaked);
    }
    if (message.totalValidatorsMigrated !== BigInt(0)) {
      writer.uint32(32).uint64(message.totalValidatorsMigrated);
    }
    if (message.totalValidatorsLegacy !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalValidatorsLegacy);
    }
    if (message.totalLegacyWithPubkey !== BigInt(0)) {
      writer.uint32(48).uint64(message.totalLegacyWithPubkey);
    }
    if (message.totalLegacyWithoutPubkey !== BigInt(0)) {
      writer.uint32(56).uint64(message.totalLegacyWithoutPubkey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigrationStatsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigrationStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalMigrated = reader.uint64();
          break;
        case 2:
          message.totalLegacy = reader.uint64();
          break;
        case 3:
          message.totalLegacyStaked = reader.uint64();
          break;
        case 4:
          message.totalValidatorsMigrated = reader.uint64();
          break;
        case 5:
          message.totalValidatorsLegacy = reader.uint64();
          break;
        case 6:
          message.totalLegacyWithPubkey = reader.uint64();
          break;
        case 7:
          message.totalLegacyWithoutPubkey = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigrationStatsResponse>): QueryMigrationStatsResponse {
    const message = createBaseQueryMigrationStatsResponse();
    message.totalMigrated = object.totalMigrated !== undefined && object.totalMigrated !== null ? BigInt(object.totalMigrated.toString()) : BigInt(0);
    message.totalLegacy = object.totalLegacy !== undefined && object.totalLegacy !== null ? BigInt(object.totalLegacy.toString()) : BigInt(0);
    message.totalLegacyStaked = object.totalLegacyStaked !== undefined && object.totalLegacyStaked !== null ? BigInt(object.totalLegacyStaked.toString()) : BigInt(0);
    message.totalValidatorsMigrated = object.totalValidatorsMigrated !== undefined && object.totalValidatorsMigrated !== null ? BigInt(object.totalValidatorsMigrated.toString()) : BigInt(0);
    message.totalValidatorsLegacy = object.totalValidatorsLegacy !== undefined && object.totalValidatorsLegacy !== null ? BigInt(object.totalValidatorsLegacy.toString()) : BigInt(0);
    message.totalLegacyWithPubkey = object.totalLegacyWithPubkey !== undefined && object.totalLegacyWithPubkey !== null ? BigInt(object.totalLegacyWithPubkey.toString()) : BigInt(0);
    message.totalLegacyWithoutPubkey = object.totalLegacyWithoutPubkey !== undefined && object.totalLegacyWithoutPubkey !== null ? BigInt(object.totalLegacyWithoutPubkey.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryMigrationStatsResponseAmino): QueryMigrationStatsResponse {
    const message = createBaseQueryMigrationStatsResponse();
    if (object.total_migrated !== undefined && object.total_migrated !== null) {
      message.totalMigrated = BigInt(object.total_migrated);
    }
    if (object.total_legacy !== undefined && object.total_legacy !== null) {
      message.totalLegacy = BigInt(object.total_legacy);
    }
    if (object.total_legacy_staked !== undefined && object.total_legacy_staked !== null) {
      message.totalLegacyStaked = BigInt(object.total_legacy_staked);
    }
    if (object.total_validators_migrated !== undefined && object.total_validators_migrated !== null) {
      message.totalValidatorsMigrated = BigInt(object.total_validators_migrated);
    }
    if (object.total_validators_legacy !== undefined && object.total_validators_legacy !== null) {
      message.totalValidatorsLegacy = BigInt(object.total_validators_legacy);
    }
    if (object.total_legacy_with_pubkey !== undefined && object.total_legacy_with_pubkey !== null) {
      message.totalLegacyWithPubkey = BigInt(object.total_legacy_with_pubkey);
    }
    if (object.total_legacy_without_pubkey !== undefined && object.total_legacy_without_pubkey !== null) {
      message.totalLegacyWithoutPubkey = BigInt(object.total_legacy_without_pubkey);
    }
    return message;
  },
  toAmino(message: QueryMigrationStatsResponse): QueryMigrationStatsResponseAmino {
    const obj: any = {};
    obj.total_migrated = message.totalMigrated !== BigInt(0) ? message.totalMigrated?.toString() : undefined;
    obj.total_legacy = message.totalLegacy !== BigInt(0) ? message.totalLegacy?.toString() : undefined;
    obj.total_legacy_staked = message.totalLegacyStaked !== BigInt(0) ? message.totalLegacyStaked?.toString() : undefined;
    obj.total_validators_migrated = message.totalValidatorsMigrated !== BigInt(0) ? message.totalValidatorsMigrated?.toString() : undefined;
    obj.total_validators_legacy = message.totalValidatorsLegacy !== BigInt(0) ? message.totalValidatorsLegacy?.toString() : undefined;
    obj.total_legacy_with_pubkey = message.totalLegacyWithPubkey !== BigInt(0) ? message.totalLegacyWithPubkey?.toString() : undefined;
    obj.total_legacy_without_pubkey = message.totalLegacyWithoutPubkey !== BigInt(0) ? message.totalLegacyWithoutPubkey?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigrationStatsResponseAminoMsg): QueryMigrationStatsResponse {
    return QueryMigrationStatsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigrationStatsResponseProtoMsg): QueryMigrationStatsResponse {
    return QueryMigrationStatsResponse.decode(message.value);
  },
  toProto(message: QueryMigrationStatsResponse): Uint8Array {
    return QueryMigrationStatsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMigrationStatsResponse): QueryMigrationStatsResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigrationStatsResponse",
      value: QueryMigrationStatsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLegacyAccountsRequest(): QueryLegacyAccountsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryLegacyAccountsRequest is the request type for the Query/LegacyAccounts RPC method.
 * @name QueryLegacyAccountsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryLegacyAccountsRequest
 */
export const QueryLegacyAccountsRequest = {
  typeUrl: "/lumera.evmigration.QueryLegacyAccountsRequest",
  is(o: any): o is QueryLegacyAccountsRequest {
    return o && o.$typeUrl === QueryLegacyAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryLegacyAccountsRequestAmino {
    return o && o.$typeUrl === QueryLegacyAccountsRequest.typeUrl;
  },
  encode(message: QueryLegacyAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLegacyAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLegacyAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLegacyAccountsRequest>): QueryLegacyAccountsRequest {
    const message = createBaseQueryLegacyAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLegacyAccountsRequestAmino): QueryLegacyAccountsRequest {
    const message = createBaseQueryLegacyAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLegacyAccountsRequest): QueryLegacyAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLegacyAccountsRequestAminoMsg): QueryLegacyAccountsRequest {
    return QueryLegacyAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLegacyAccountsRequestProtoMsg): QueryLegacyAccountsRequest {
    return QueryLegacyAccountsRequest.decode(message.value);
  },
  toProto(message: QueryLegacyAccountsRequest): Uint8Array {
    return QueryLegacyAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLegacyAccountsRequest): QueryLegacyAccountsRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryLegacyAccountsRequest",
      value: QueryLegacyAccountsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLegacyAccountsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryLegacyAccountsResponse(): QueryLegacyAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
/**
 * QueryLegacyAccountsResponse is the response type for the Query/LegacyAccounts RPC method.
 * @name QueryLegacyAccountsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryLegacyAccountsResponse
 */
export const QueryLegacyAccountsResponse = {
  typeUrl: "/lumera.evmigration.QueryLegacyAccountsResponse",
  is(o: any): o is QueryLegacyAccountsResponse {
    return o && (o.$typeUrl === QueryLegacyAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || LegacyAccountInfo.is(o.accounts[0])));
  },
  isAmino(o: any): o is QueryLegacyAccountsResponseAmino {
    return o && (o.$typeUrl === QueryLegacyAccountsResponse.typeUrl || Array.isArray(o.accounts) && (!o.accounts.length || LegacyAccountInfo.isAmino(o.accounts[0])));
  },
  encode(message: QueryLegacyAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      LegacyAccountInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLegacyAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLegacyAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(LegacyAccountInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLegacyAccountsResponse>): QueryLegacyAccountsResponse {
    const message = createBaseQueryLegacyAccountsResponse();
    message.accounts = object.accounts?.map(e => LegacyAccountInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryLegacyAccountsResponseAmino): QueryLegacyAccountsResponse {
    const message = createBaseQueryLegacyAccountsResponse();
    message.accounts = object.accounts?.map(e => LegacyAccountInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryLegacyAccountsResponse): QueryLegacyAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? LegacyAccountInfo.toAmino(e) : undefined);
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLegacyAccountsResponseAminoMsg): QueryLegacyAccountsResponse {
    return QueryLegacyAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLegacyAccountsResponseProtoMsg): QueryLegacyAccountsResponse {
    return QueryLegacyAccountsResponse.decode(message.value);
  },
  toProto(message: QueryLegacyAccountsResponse): Uint8Array {
    return QueryLegacyAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLegacyAccountsResponse): QueryLegacyAccountsResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryLegacyAccountsResponse",
      value: QueryLegacyAccountsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryLegacyAccountsResponse.typeUrl)) {
      return;
    }
    LegacyAccountInfo.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseLegacyAccountInfo(): LegacyAccountInfo {
  return {
    address: "",
    balanceSummary: "",
    hasDelegations: false,
    isValidator: false,
    isMultisig: false,
    threshold: 0,
    numSigners: 0
  };
}
/**
 * LegacyAccountInfo provides summary information about a legacy account
 * that has not yet been migrated.
 * @name LegacyAccountInfo
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.LegacyAccountInfo
 */
export const LegacyAccountInfo = {
  typeUrl: "/lumera.evmigration.LegacyAccountInfo",
  is(o: any): o is LegacyAccountInfo {
    return o && (o.$typeUrl === LegacyAccountInfo.typeUrl || typeof o.address === "string" && typeof o.balanceSummary === "string" && typeof o.hasDelegations === "boolean" && typeof o.isValidator === "boolean" && typeof o.isMultisig === "boolean" && typeof o.threshold === "number" && typeof o.numSigners === "number");
  },
  isAmino(o: any): o is LegacyAccountInfoAmino {
    return o && (o.$typeUrl === LegacyAccountInfo.typeUrl || typeof o.address === "string" && typeof o.balance_summary === "string" && typeof o.has_delegations === "boolean" && typeof o.is_validator === "boolean" && typeof o.is_multisig === "boolean" && typeof o.threshold === "number" && typeof o.num_signers === "number");
  },
  encode(message: LegacyAccountInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.balanceSummary !== "") {
      writer.uint32(18).string(message.balanceSummary);
    }
    if (message.hasDelegations === true) {
      writer.uint32(24).bool(message.hasDelegations);
    }
    if (message.isValidator === true) {
      writer.uint32(32).bool(message.isValidator);
    }
    if (message.isMultisig === true) {
      writer.uint32(40).bool(message.isMultisig);
    }
    if (message.threshold !== 0) {
      writer.uint32(48).uint32(message.threshold);
    }
    if (message.numSigners !== 0) {
      writer.uint32(56).uint32(message.numSigners);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyAccountInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAccountInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.balanceSummary = reader.string();
          break;
        case 3:
          message.hasDelegations = reader.bool();
          break;
        case 4:
          message.isValidator = reader.bool();
          break;
        case 5:
          message.isMultisig = reader.bool();
          break;
        case 6:
          message.threshold = reader.uint32();
          break;
        case 7:
          message.numSigners = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LegacyAccountInfo>): LegacyAccountInfo {
    const message = createBaseLegacyAccountInfo();
    message.address = object.address ?? "";
    message.balanceSummary = object.balanceSummary ?? "";
    message.hasDelegations = object.hasDelegations ?? false;
    message.isValidator = object.isValidator ?? false;
    message.isMultisig = object.isMultisig ?? false;
    message.threshold = object.threshold ?? 0;
    message.numSigners = object.numSigners ?? 0;
    return message;
  },
  fromAmino(object: LegacyAccountInfoAmino): LegacyAccountInfo {
    const message = createBaseLegacyAccountInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.balance_summary !== undefined && object.balance_summary !== null) {
      message.balanceSummary = object.balance_summary;
    }
    if (object.has_delegations !== undefined && object.has_delegations !== null) {
      message.hasDelegations = object.has_delegations;
    }
    if (object.is_validator !== undefined && object.is_validator !== null) {
      message.isValidator = object.is_validator;
    }
    if (object.is_multisig !== undefined && object.is_multisig !== null) {
      message.isMultisig = object.is_multisig;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.num_signers !== undefined && object.num_signers !== null) {
      message.numSigners = object.num_signers;
    }
    return message;
  },
  toAmino(message: LegacyAccountInfo): LegacyAccountInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.balance_summary = message.balanceSummary === "" ? undefined : message.balanceSummary;
    obj.has_delegations = message.hasDelegations === false ? undefined : message.hasDelegations;
    obj.is_validator = message.isValidator === false ? undefined : message.isValidator;
    obj.is_multisig = message.isMultisig === false ? undefined : message.isMultisig;
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    obj.num_signers = message.numSigners === 0 ? undefined : message.numSigners;
    return obj;
  },
  fromAminoMsg(object: LegacyAccountInfoAminoMsg): LegacyAccountInfo {
    return LegacyAccountInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: LegacyAccountInfoProtoMsg): LegacyAccountInfo {
    return LegacyAccountInfo.decode(message.value);
  },
  toProto(message: LegacyAccountInfo): Uint8Array {
    return LegacyAccountInfo.encode(message).finish();
  },
  toProtoMsg(message: LegacyAccountInfo): LegacyAccountInfoProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.LegacyAccountInfo",
      value: LegacyAccountInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMigratedAccountsRequest(): QueryMigratedAccountsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryMigratedAccountsRequest is the request type for the Query/MigratedAccounts RPC method.
 * @name QueryMigratedAccountsRequest
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigratedAccountsRequest
 */
export const QueryMigratedAccountsRequest = {
  typeUrl: "/lumera.evmigration.QueryMigratedAccountsRequest",
  is(o: any): o is QueryMigratedAccountsRequest {
    return o && o.$typeUrl === QueryMigratedAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMigratedAccountsRequestAmino {
    return o && o.$typeUrl === QueryMigratedAccountsRequest.typeUrl;
  },
  encode(message: QueryMigratedAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigratedAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigratedAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigratedAccountsRequest>): QueryMigratedAccountsRequest {
    const message = createBaseQueryMigratedAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMigratedAccountsRequestAmino): QueryMigratedAccountsRequest {
    const message = createBaseQueryMigratedAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMigratedAccountsRequest): QueryMigratedAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigratedAccountsRequestAminoMsg): QueryMigratedAccountsRequest {
    return QueryMigratedAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigratedAccountsRequestProtoMsg): QueryMigratedAccountsRequest {
    return QueryMigratedAccountsRequest.decode(message.value);
  },
  toProto(message: QueryMigratedAccountsRequest): Uint8Array {
    return QueryMigratedAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMigratedAccountsRequest): QueryMigratedAccountsRequestProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigratedAccountsRequest",
      value: QueryMigratedAccountsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMigratedAccountsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryMigratedAccountsResponse(): QueryMigratedAccountsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
/**
 * QueryMigratedAccountsResponse is the response type for the Query/MigratedAccounts RPC method.
 * @name QueryMigratedAccountsResponse
 * @package lumera.evmigration
 * @see proto type: lumera.evmigration.QueryMigratedAccountsResponse
 */
export const QueryMigratedAccountsResponse = {
  typeUrl: "/lumera.evmigration.QueryMigratedAccountsResponse",
  is(o: any): o is QueryMigratedAccountsResponse {
    return o && (o.$typeUrl === QueryMigratedAccountsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || MigrationRecord.is(o.records[0])));
  },
  isAmino(o: any): o is QueryMigratedAccountsResponseAmino {
    return o && (o.$typeUrl === QueryMigratedAccountsResponse.typeUrl || Array.isArray(o.records) && (!o.records.length || MigrationRecord.isAmino(o.records[0])));
  },
  encode(message: QueryMigratedAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      MigrationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMigratedAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMigratedAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(MigrationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMigratedAccountsResponse>): QueryMigratedAccountsResponse {
    const message = createBaseQueryMigratedAccountsResponse();
    message.records = object.records?.map(e => MigrationRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMigratedAccountsResponseAmino): QueryMigratedAccountsResponse {
    const message = createBaseQueryMigratedAccountsResponse();
    message.records = object.records?.map(e => MigrationRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMigratedAccountsResponse): QueryMigratedAccountsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? MigrationRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMigratedAccountsResponseAminoMsg): QueryMigratedAccountsResponse {
    return QueryMigratedAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMigratedAccountsResponseProtoMsg): QueryMigratedAccountsResponse {
    return QueryMigratedAccountsResponse.decode(message.value);
  },
  toProto(message: QueryMigratedAccountsResponse): Uint8Array {
    return QueryMigratedAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMigratedAccountsResponse): QueryMigratedAccountsResponseProtoMsg {
    return {
      typeUrl: "/lumera.evmigration.QueryMigratedAccountsResponse",
      value: QueryMigratedAccountsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMigratedAccountsResponse.typeUrl)) {
      return;
    }
    MigrationRecord.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};