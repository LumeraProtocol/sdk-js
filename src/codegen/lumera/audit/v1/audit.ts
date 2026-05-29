// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export enum PortState {
  PORT_STATE_UNKNOWN = 0,
  PORT_STATE_OPEN = 1,
  PORT_STATE_CLOSED = 2,
  UNRECOGNIZED = -1,
}
export const PortStateAmino = PortState;
export function portStateFromJSON(object: any): PortState {
  switch (object) {
    case 0:
    case "PORT_STATE_UNKNOWN":
      return PortState.PORT_STATE_UNKNOWN;
    case 1:
    case "PORT_STATE_OPEN":
      return PortState.PORT_STATE_OPEN;
    case 2:
    case "PORT_STATE_CLOSED":
      return PortState.PORT_STATE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PortState.UNRECOGNIZED;
  }
}
export function portStateToJSON(object: PortState): string {
  switch (object) {
    case PortState.PORT_STATE_UNKNOWN:
      return "PORT_STATE_UNKNOWN";
    case PortState.PORT_STATE_OPEN:
      return "PORT_STATE_OPEN";
    case PortState.PORT_STATE_CLOSED:
      return "PORT_STATE_CLOSED";
    case PortState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum StorageProofBucketType {
  STORAGE_PROOF_BUCKET_TYPE_UNSPECIFIED = 0,
  STORAGE_PROOF_BUCKET_TYPE_RECENT = 1,
  STORAGE_PROOF_BUCKET_TYPE_OLD = 2,
  STORAGE_PROOF_BUCKET_TYPE_PROBATION = 3,
  STORAGE_PROOF_BUCKET_TYPE_RECHECK = 4,
  UNRECOGNIZED = -1,
}
export const StorageProofBucketTypeAmino = StorageProofBucketType;
export function storageProofBucketTypeFromJSON(object: any): StorageProofBucketType {
  switch (object) {
    case 0:
    case "STORAGE_PROOF_BUCKET_TYPE_UNSPECIFIED":
      return StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_UNSPECIFIED;
    case 1:
    case "STORAGE_PROOF_BUCKET_TYPE_RECENT":
      return StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_RECENT;
    case 2:
    case "STORAGE_PROOF_BUCKET_TYPE_OLD":
      return StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_OLD;
    case 3:
    case "STORAGE_PROOF_BUCKET_TYPE_PROBATION":
      return StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_PROBATION;
    case 4:
    case "STORAGE_PROOF_BUCKET_TYPE_RECHECK":
      return StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_RECHECK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageProofBucketType.UNRECOGNIZED;
  }
}
export function storageProofBucketTypeToJSON(object: StorageProofBucketType): string {
  switch (object) {
    case StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_UNSPECIFIED:
      return "STORAGE_PROOF_BUCKET_TYPE_UNSPECIFIED";
    case StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_RECENT:
      return "STORAGE_PROOF_BUCKET_TYPE_RECENT";
    case StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_OLD:
      return "STORAGE_PROOF_BUCKET_TYPE_OLD";
    case StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_PROBATION:
      return "STORAGE_PROOF_BUCKET_TYPE_PROBATION";
    case StorageProofBucketType.STORAGE_PROOF_BUCKET_TYPE_RECHECK:
      return "STORAGE_PROOF_BUCKET_TYPE_RECHECK";
    case StorageProofBucketType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum StorageProofArtifactClass {
  STORAGE_PROOF_ARTIFACT_CLASS_UNSPECIFIED = 0,
  STORAGE_PROOF_ARTIFACT_CLASS_INDEX = 1,
  STORAGE_PROOF_ARTIFACT_CLASS_SYMBOL = 2,
  UNRECOGNIZED = -1,
}
export const StorageProofArtifactClassAmino = StorageProofArtifactClass;
export function storageProofArtifactClassFromJSON(object: any): StorageProofArtifactClass {
  switch (object) {
    case 0:
    case "STORAGE_PROOF_ARTIFACT_CLASS_UNSPECIFIED":
      return StorageProofArtifactClass.STORAGE_PROOF_ARTIFACT_CLASS_UNSPECIFIED;
    case 1:
    case "STORAGE_PROOF_ARTIFACT_CLASS_INDEX":
      return StorageProofArtifactClass.STORAGE_PROOF_ARTIFACT_CLASS_INDEX;
    case 2:
    case "STORAGE_PROOF_ARTIFACT_CLASS_SYMBOL":
      return StorageProofArtifactClass.STORAGE_PROOF_ARTIFACT_CLASS_SYMBOL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageProofArtifactClass.UNRECOGNIZED;
  }
}
export function storageProofArtifactClassToJSON(object: StorageProofArtifactClass): string {
  switch (object) {
    case StorageProofArtifactClass.STORAGE_PROOF_ARTIFACT_CLASS_UNSPECIFIED:
      return "STORAGE_PROOF_ARTIFACT_CLASS_UNSPECIFIED";
    case StorageProofArtifactClass.STORAGE_PROOF_ARTIFACT_CLASS_INDEX:
      return "STORAGE_PROOF_ARTIFACT_CLASS_INDEX";
    case StorageProofArtifactClass.STORAGE_PROOF_ARTIFACT_CLASS_SYMBOL:
      return "STORAGE_PROOF_ARTIFACT_CLASS_SYMBOL";
    case StorageProofArtifactClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum StorageProofResultClass {
  STORAGE_PROOF_RESULT_CLASS_UNSPECIFIED = 0,
  STORAGE_PROOF_RESULT_CLASS_PASS = 1,
  STORAGE_PROOF_RESULT_CLASS_HASH_MISMATCH = 2,
  STORAGE_PROOF_RESULT_CLASS_TIMEOUT_OR_NO_RESPONSE = 3,
  STORAGE_PROOF_RESULT_CLASS_OBSERVER_QUORUM_FAIL = 4,
  STORAGE_PROOF_RESULT_CLASS_NO_ELIGIBLE_TICKET = 5,
  STORAGE_PROOF_RESULT_CLASS_INVALID_TRANSCRIPT = 6,
  STORAGE_PROOF_RESULT_CLASS_RECHECK_CONFIRMED_FAIL = 7,
  UNRECOGNIZED = -1,
}
export const StorageProofResultClassAmino = StorageProofResultClass;
export function storageProofResultClassFromJSON(object: any): StorageProofResultClass {
  switch (object) {
    case 0:
    case "STORAGE_PROOF_RESULT_CLASS_UNSPECIFIED":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_UNSPECIFIED;
    case 1:
    case "STORAGE_PROOF_RESULT_CLASS_PASS":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_PASS;
    case 2:
    case "STORAGE_PROOF_RESULT_CLASS_HASH_MISMATCH":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_HASH_MISMATCH;
    case 3:
    case "STORAGE_PROOF_RESULT_CLASS_TIMEOUT_OR_NO_RESPONSE":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_TIMEOUT_OR_NO_RESPONSE;
    case 4:
    case "STORAGE_PROOF_RESULT_CLASS_OBSERVER_QUORUM_FAIL":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_OBSERVER_QUORUM_FAIL;
    case 5:
    case "STORAGE_PROOF_RESULT_CLASS_NO_ELIGIBLE_TICKET":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_NO_ELIGIBLE_TICKET;
    case 6:
    case "STORAGE_PROOF_RESULT_CLASS_INVALID_TRANSCRIPT":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_INVALID_TRANSCRIPT;
    case 7:
    case "STORAGE_PROOF_RESULT_CLASS_RECHECK_CONFIRMED_FAIL":
      return StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_RECHECK_CONFIRMED_FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageProofResultClass.UNRECOGNIZED;
  }
}
export function storageProofResultClassToJSON(object: StorageProofResultClass): string {
  switch (object) {
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_UNSPECIFIED:
      return "STORAGE_PROOF_RESULT_CLASS_UNSPECIFIED";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_PASS:
      return "STORAGE_PROOF_RESULT_CLASS_PASS";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_HASH_MISMATCH:
      return "STORAGE_PROOF_RESULT_CLASS_HASH_MISMATCH";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_TIMEOUT_OR_NO_RESPONSE:
      return "STORAGE_PROOF_RESULT_CLASS_TIMEOUT_OR_NO_RESPONSE";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_OBSERVER_QUORUM_FAIL:
      return "STORAGE_PROOF_RESULT_CLASS_OBSERVER_QUORUM_FAIL";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_NO_ELIGIBLE_TICKET:
      return "STORAGE_PROOF_RESULT_CLASS_NO_ELIGIBLE_TICKET";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_INVALID_TRANSCRIPT:
      return "STORAGE_PROOF_RESULT_CLASS_INVALID_TRANSCRIPT";
    case StorageProofResultClass.STORAGE_PROOF_RESULT_CLASS_RECHECK_CONFIRMED_FAIL:
      return "STORAGE_PROOF_RESULT_CLASS_RECHECK_CONFIRMED_FAIL";
    case StorageProofResultClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum ReporterTrustBand {
  REPORTER_TRUST_BAND_UNSPECIFIED = 0,
  REPORTER_TRUST_BAND_NORMAL = 1,
  REPORTER_TRUST_BAND_LOW_TRUST = 2,
  REPORTER_TRUST_BAND_CHALLENGER_INELIGIBLE = 3,
  REPORTER_TRUST_BAND_DEGRADED = 4,
  UNRECOGNIZED = -1,
}
export const ReporterTrustBandAmino = ReporterTrustBand;
export function reporterTrustBandFromJSON(object: any): ReporterTrustBand {
  switch (object) {
    case 0:
    case "REPORTER_TRUST_BAND_UNSPECIFIED":
      return ReporterTrustBand.REPORTER_TRUST_BAND_UNSPECIFIED;
    case 1:
    case "REPORTER_TRUST_BAND_NORMAL":
      return ReporterTrustBand.REPORTER_TRUST_BAND_NORMAL;
    case 2:
    case "REPORTER_TRUST_BAND_LOW_TRUST":
      return ReporterTrustBand.REPORTER_TRUST_BAND_LOW_TRUST;
    case 3:
    case "REPORTER_TRUST_BAND_CHALLENGER_INELIGIBLE":
      return ReporterTrustBand.REPORTER_TRUST_BAND_CHALLENGER_INELIGIBLE;
    case 4:
    case "REPORTER_TRUST_BAND_DEGRADED":
      return ReporterTrustBand.REPORTER_TRUST_BAND_DEGRADED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReporterTrustBand.UNRECOGNIZED;
  }
}
export function reporterTrustBandToJSON(object: ReporterTrustBand): string {
  switch (object) {
    case ReporterTrustBand.REPORTER_TRUST_BAND_UNSPECIFIED:
      return "REPORTER_TRUST_BAND_UNSPECIFIED";
    case ReporterTrustBand.REPORTER_TRUST_BAND_NORMAL:
      return "REPORTER_TRUST_BAND_NORMAL";
    case ReporterTrustBand.REPORTER_TRUST_BAND_LOW_TRUST:
      return "REPORTER_TRUST_BAND_LOW_TRUST";
    case ReporterTrustBand.REPORTER_TRUST_BAND_CHALLENGER_INELIGIBLE:
      return "REPORTER_TRUST_BAND_CHALLENGER_INELIGIBLE";
    case ReporterTrustBand.REPORTER_TRUST_BAND_DEGRADED:
      return "REPORTER_TRUST_BAND_DEGRADED";
    case ReporterTrustBand.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum HealOpStatus {
  HEAL_OP_STATUS_UNSPECIFIED = 0,
  HEAL_OP_STATUS_SCHEDULED = 1,
  HEAL_OP_STATUS_IN_PROGRESS = 2,
  HEAL_OP_STATUS_HEALER_REPORTED = 3,
  HEAL_OP_STATUS_VERIFIED = 4,
  HEAL_OP_STATUS_FAILED = 5,
  HEAL_OP_STATUS_EXPIRED = 6,
  UNRECOGNIZED = -1,
}
export const HealOpStatusAmino = HealOpStatus;
export function healOpStatusFromJSON(object: any): HealOpStatus {
  switch (object) {
    case 0:
    case "HEAL_OP_STATUS_UNSPECIFIED":
      return HealOpStatus.HEAL_OP_STATUS_UNSPECIFIED;
    case 1:
    case "HEAL_OP_STATUS_SCHEDULED":
      return HealOpStatus.HEAL_OP_STATUS_SCHEDULED;
    case 2:
    case "HEAL_OP_STATUS_IN_PROGRESS":
      return HealOpStatus.HEAL_OP_STATUS_IN_PROGRESS;
    case 3:
    case "HEAL_OP_STATUS_HEALER_REPORTED":
      return HealOpStatus.HEAL_OP_STATUS_HEALER_REPORTED;
    case 4:
    case "HEAL_OP_STATUS_VERIFIED":
      return HealOpStatus.HEAL_OP_STATUS_VERIFIED;
    case 5:
    case "HEAL_OP_STATUS_FAILED":
      return HealOpStatus.HEAL_OP_STATUS_FAILED;
    case 6:
    case "HEAL_OP_STATUS_EXPIRED":
      return HealOpStatus.HEAL_OP_STATUS_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HealOpStatus.UNRECOGNIZED;
  }
}
export function healOpStatusToJSON(object: HealOpStatus): string {
  switch (object) {
    case HealOpStatus.HEAL_OP_STATUS_UNSPECIFIED:
      return "HEAL_OP_STATUS_UNSPECIFIED";
    case HealOpStatus.HEAL_OP_STATUS_SCHEDULED:
      return "HEAL_OP_STATUS_SCHEDULED";
    case HealOpStatus.HEAL_OP_STATUS_IN_PROGRESS:
      return "HEAL_OP_STATUS_IN_PROGRESS";
    case HealOpStatus.HEAL_OP_STATUS_HEALER_REPORTED:
      return "HEAL_OP_STATUS_HEALER_REPORTED";
    case HealOpStatus.HEAL_OP_STATUS_VERIFIED:
      return "HEAL_OP_STATUS_VERIFIED";
    case HealOpStatus.HEAL_OP_STATUS_FAILED:
      return "HEAL_OP_STATUS_FAILED";
    case HealOpStatus.HEAL_OP_STATUS_EXPIRED:
      return "HEAL_OP_STATUS_EXPIRED";
    case HealOpStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * HostReport is the Supernode's self-reported host metrics and counters for an epoch.
 * @name HostReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HostReport
 */
export interface HostReport {
  cpuUsagePercent: number;
  memUsagePercent: number;
  diskUsagePercent: number;
  inboundPortStates: PortState[];
  failedActionsCount: number;
  /**
   * Cascade Kademlia DB size in bytes, self-reported by the SuperNode.
   * Carried on HostReport purely as a metric-courier on the audit epoch report
   * channel — the audit module does NOT consume this value for its own
   * consensus logic (LEP-6 §12). On successful epoch-report acceptance the
   * audit handler bridges this value into x/supernode SupernodeMetricsState,
   * which is the sole source consulted by Everlight payout / eligibility.
   * MUST be finite and non-negative; zero is valid (empty Kademlia store).
   */
  cascadeKademliaDbBytes: number;
}
export interface HostReportProtoMsg {
  typeUrl: "/lumera.audit.v1.HostReport";
  value: Uint8Array;
}
/**
 * HostReport is the Supernode's self-reported host metrics and counters for an epoch.
 * @name HostReportAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HostReport
 */
export interface HostReportAmino {
  cpu_usage_percent: number;
  mem_usage_percent: number;
  disk_usage_percent: number;
  inbound_port_states: PortState[];
  failed_actions_count: number;
  /**
   * Cascade Kademlia DB size in bytes, self-reported by the SuperNode.
   * Carried on HostReport purely as a metric-courier on the audit epoch report
   * channel — the audit module does NOT consume this value for its own
   * consensus logic (LEP-6 §12). On successful epoch-report acceptance the
   * audit handler bridges this value into x/supernode SupernodeMetricsState,
   * which is the sole source consulted by Everlight payout / eligibility.
   * MUST be finite and non-negative; zero is valid (empty Kademlia store).
   */
  cascade_kademlia_db_bytes: number;
}
export interface HostReportAminoMsg {
  type: "/lumera.audit.v1.HostReport";
  value: HostReportAmino;
}
/**
 * StorageChallengeObservation is a prober's reachability observation about an assigned target.
 * @name StorageChallengeObservation
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeObservation
 */
export interface StorageChallengeObservation {
  targetSupernodeAccount: string;
  /**
   * port_states[i] refers to required_open_ports[i] for the epoch.
   */
  portStates: PortState[];
}
export interface StorageChallengeObservationProtoMsg {
  typeUrl: "/lumera.audit.v1.StorageChallengeObservation";
  value: Uint8Array;
}
/**
 * StorageChallengeObservation is a prober's reachability observation about an assigned target.
 * @name StorageChallengeObservationAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeObservation
 */
export interface StorageChallengeObservationAmino {
  target_supernode_account: string;
  /**
   * port_states[i] refers to required_open_ports[i] for the epoch.
   */
  port_states: PortState[];
}
export interface StorageChallengeObservationAminoMsg {
  type: "/lumera.audit.v1.StorageChallengeObservation";
  value: StorageChallengeObservationAmino;
}
/**
 * StorageProofResult captures one storage-truth storage-proof check outcome.
 * 
 * NOTE: StorageProofResult stores transcript_hash plus a compact deterministic
 * derivation/signature envelope so transcript disagreements become explicit on-chain.
 * @name StorageProofResult
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageProofResult
 */
export interface StorageProofResult {
  targetSupernodeAccount: string;
  challengerSupernodeAccount: string;
  /**
   * ticket_id identifies the ticket selected by deterministic bucket logic.
   */
  ticketId: string;
  bucketType: StorageProofBucketType;
  artifactClass: StorageProofArtifactClass;
  /**
   * artifact_ordinal is the deterministic ordinal selected inside the artifact class.
   */
  artifactOrdinal: number;
  artifactKey: string;
  resultClass: StorageProofResultClass;
  transcriptHash: string;
  /**
   * details is an optional short diagnostic summary for non-pass outcomes.
   */
  details: string;
  /**
   * artifact_count is the class-specific denominator used for deterministic
   * ordinal selection: artifact_ordinal = H(...) mod artifact_count.
   */
  artifactCount: number;
  /**
   * derivation_input_hash commits deterministic derivation inputs (seed, range
   * selection inputs, and resolver inputs) used off-chain for transcript build.
   */
  derivationInputHash: string;
  /**
   * challenger_signature is the challenger's signature over transcript commitment.
   */
  challengerSignature: string;
  /**
   * observer_attestation_signatures carries observer attestations for the
   * transcript commitment when available.
   */
  observerAttestationSignatures: string[];
}
export interface StorageProofResultProtoMsg {
  typeUrl: "/lumera.audit.v1.StorageProofResult";
  value: Uint8Array;
}
/**
 * StorageProofResult captures one storage-truth storage-proof check outcome.
 * 
 * NOTE: StorageProofResult stores transcript_hash plus a compact deterministic
 * derivation/signature envelope so transcript disagreements become explicit on-chain.
 * @name StorageProofResultAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageProofResult
 */
export interface StorageProofResultAmino {
  target_supernode_account: string;
  challenger_supernode_account: string;
  /**
   * ticket_id identifies the ticket selected by deterministic bucket logic.
   */
  ticket_id: string;
  bucket_type: StorageProofBucketType;
  artifact_class: StorageProofArtifactClass;
  /**
   * artifact_ordinal is the deterministic ordinal selected inside the artifact class.
   */
  artifact_ordinal: number;
  artifact_key: string;
  result_class: StorageProofResultClass;
  transcript_hash: string;
  /**
   * details is an optional short diagnostic summary for non-pass outcomes.
   */
  details: string;
  /**
   * artifact_count is the class-specific denominator used for deterministic
   * ordinal selection: artifact_ordinal = H(...) mod artifact_count.
   */
  artifact_count: number;
  /**
   * derivation_input_hash commits deterministic derivation inputs (seed, range
   * selection inputs, and resolver inputs) used off-chain for transcript build.
   */
  derivation_input_hash: string;
  /**
   * challenger_signature is the challenger's signature over transcript commitment.
   */
  challenger_signature: string;
  /**
   * observer_attestation_signatures carries observer attestations for the
   * transcript commitment when available.
   */
  observer_attestation_signatures: string[];
}
export interface StorageProofResultAminoMsg {
  type: "/lumera.audit.v1.StorageProofResult";
  value: StorageProofResultAmino;
}
/**
 * NodeSuspicionState is the persisted storage-truth node-level suspicion snapshot.
 * @name NodeSuspicionState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.NodeSuspicionState
 */
export interface NodeSuspicionState {
  supernodeAccount: string;
  suspicionScore: bigint;
  lastUpdatedEpoch: bigint;
  lastRecentFailEpoch: bigint;
  lastOldFailEpoch: bigint;
  distinctTicketFailWindow: number;
  windowStartEpoch: bigint;
  classACountWindow: number;
  lastClassAEpoch: bigint;
  classBCountWindow: number;
  lastClassBEpoch: bigint;
  cleanPassCount: number;
  lastCleanPassEpoch: bigint;
  lastIndexFailEpoch: bigint;
  /**
   * Per 121-F8 — recovery delta from snapshot, not cumulative.
   */
  cleanPassCountAtPostpone: number;
}
export interface NodeSuspicionStateProtoMsg {
  typeUrl: "/lumera.audit.v1.NodeSuspicionState";
  value: Uint8Array;
}
/**
 * NodeSuspicionState is the persisted storage-truth node-level suspicion snapshot.
 * @name NodeSuspicionStateAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.NodeSuspicionState
 */
export interface NodeSuspicionStateAmino {
  supernode_account: string;
  suspicion_score: string;
  last_updated_epoch: string;
  last_recent_fail_epoch: string;
  last_old_fail_epoch: string;
  distinct_ticket_fail_window: number;
  window_start_epoch: string;
  class_a_count_window: number;
  last_class_a_epoch: string;
  class_b_count_window: number;
  last_class_b_epoch: string;
  clean_pass_count: number;
  last_clean_pass_epoch: string;
  last_index_fail_epoch: string;
  /**
   * Per 121-F8 — recovery delta from snapshot, not cumulative.
   */
  clean_pass_count_at_postpone: number;
}
export interface NodeSuspicionStateAminoMsg {
  type: "/lumera.audit.v1.NodeSuspicionState";
  value: NodeSuspicionStateAmino;
}
/**
 * ReporterReliabilityState is the persisted storage-truth reporter reliability snapshot.
 * @name ReporterReliabilityState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ReporterReliabilityState
 */
export interface ReporterReliabilityState {
  reporterSupernodeAccount: string;
  reliabilityScore: bigint;
  lastUpdatedEpoch: bigint;
  trustBand: ReporterTrustBand;
  contradictionCount: bigint;
  ineligibleUntilEpoch: bigint;
  windowPositiveCount: number;
  windowNegativeCount: number;
  windowStartEpoch: bigint;
}
export interface ReporterReliabilityStateProtoMsg {
  typeUrl: "/lumera.audit.v1.ReporterReliabilityState";
  value: Uint8Array;
}
/**
 * ReporterReliabilityState is the persisted storage-truth reporter reliability snapshot.
 * @name ReporterReliabilityStateAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ReporterReliabilityState
 */
export interface ReporterReliabilityStateAmino {
  reporter_supernode_account: string;
  reliability_score: string;
  last_updated_epoch: string;
  trust_band: ReporterTrustBand;
  contradiction_count: string;
  ineligible_until_epoch: string;
  window_positive_count: number;
  window_negative_count: number;
  window_start_epoch: string;
}
export interface ReporterReliabilityStateAminoMsg {
  type: "/lumera.audit.v1.ReporterReliabilityState";
  value: ReporterReliabilityStateAmino;
}
/**
 * TicketDeteriorationState is the persisted storage-truth ticket deterioration snapshot.
 * @name TicketDeteriorationState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.TicketDeteriorationState
 */
export interface TicketDeteriorationState {
  ticketId: string;
  deteriorationScore: bigint;
  lastUpdatedEpoch: bigint;
  activeHealOpId: bigint;
  probationUntilEpoch: bigint;
  lastHealEpoch: bigint;
  lastFailureEpoch: bigint;
  recentFailureEpochCount: number;
  contradictionCount: bigint;
  lastTargetSupernodeAccount: string;
  lastReporterSupernodeAccount: string;
  lastResultClass: StorageProofResultClass;
  lastResultEpoch: bigint;
  distinctHolderFailureCount: number;
  lastIndexFailureEpoch: bigint;
  recentBucketFailureEpoch: bigint;
  oldBucketFailureEpoch: bigint;
}
export interface TicketDeteriorationStateProtoMsg {
  typeUrl: "/lumera.audit.v1.TicketDeteriorationState";
  value: Uint8Array;
}
/**
 * TicketDeteriorationState is the persisted storage-truth ticket deterioration snapshot.
 * @name TicketDeteriorationStateAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.TicketDeteriorationState
 */
export interface TicketDeteriorationStateAmino {
  ticket_id: string;
  deterioration_score: string;
  last_updated_epoch: string;
  active_heal_op_id: string;
  probation_until_epoch: string;
  last_heal_epoch: string;
  last_failure_epoch: string;
  recent_failure_epoch_count: number;
  contradiction_count: string;
  last_target_supernode_account: string;
  last_reporter_supernode_account: string;
  last_result_class: StorageProofResultClass;
  last_result_epoch: string;
  distinct_holder_failure_count: number;
  last_index_failure_epoch: string;
  recent_bucket_failure_epoch: string;
  old_bucket_failure_epoch: string;
}
export interface TicketDeteriorationStateAminoMsg {
  type: "/lumera.audit.v1.TicketDeteriorationState";
  value: TicketDeteriorationStateAmino;
}
/**
 * TicketArtifactCountState stores canonical per-ticket artifact counts used to
 * validate deterministic ordinal selection inputs.
 * @name TicketArtifactCountState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.TicketArtifactCountState
 */
export interface TicketArtifactCountState {
  ticketId: string;
  indexArtifactCount: number;
  symbolArtifactCount: number;
}
export interface TicketArtifactCountStateProtoMsg {
  typeUrl: "/lumera.audit.v1.TicketArtifactCountState";
  value: Uint8Array;
}
/**
 * TicketArtifactCountState stores canonical per-ticket artifact counts used to
 * validate deterministic ordinal selection inputs.
 * @name TicketArtifactCountStateAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.TicketArtifactCountState
 */
export interface TicketArtifactCountStateAmino {
  ticket_id: string;
  index_artifact_count: number;
  symbol_artifact_count: number;
}
export interface TicketArtifactCountStateAminoMsg {
  type: "/lumera.audit.v1.TicketArtifactCountState";
  value: TicketArtifactCountStateAmino;
}
/**
 * HealOp is the chain-tracked storage-truth healing operation state.
 * @name HealOp
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HealOp
 */
export interface HealOp {
  healOpId: bigint;
  ticketId: string;
  scheduledEpochId: bigint;
  healerSupernodeAccount: string;
  verifierSupernodeAccounts: string[];
  status: HealOpStatus;
  createdHeight: bigint;
  updatedHeight: bigint;
  deadlineEpochId: bigint;
  resultHash: string;
  notes: string;
}
export interface HealOpProtoMsg {
  typeUrl: "/lumera.audit.v1.HealOp";
  value: Uint8Array;
}
/**
 * HealOp is the chain-tracked storage-truth healing operation state.
 * @name HealOpAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HealOp
 */
export interface HealOpAmino {
  heal_op_id: string;
  ticket_id: string;
  scheduled_epoch_id: string;
  healer_supernode_account: string;
  verifier_supernode_accounts: string[];
  status: HealOpStatus;
  created_height: string;
  updated_height: string;
  deadline_epoch_id: string;
  result_hash: string;
  notes: string;
}
export interface HealOpAminoMsg {
  type: "/lumera.audit.v1.HealOp";
  value: HealOpAmino;
}
/**
 * EpochReport is a single per-epoch report submitted by a Supernode.
 * @name EpochReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.EpochReport
 */
export interface EpochReport {
  supernodeAccount: string;
  epochId: bigint;
  reportHeight: bigint;
  hostReport: HostReport;
  storageChallengeObservations: StorageChallengeObservation[];
  storageProofResults: StorageProofResult[];
}
export interface EpochReportProtoMsg {
  typeUrl: "/lumera.audit.v1.EpochReport";
  value: Uint8Array;
}
/**
 * EpochReport is a single per-epoch report submitted by a Supernode.
 * @name EpochReportAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.EpochReport
 */
export interface EpochReportAmino {
  supernode_account: string;
  epoch_id: string;
  report_height: string;
  host_report: HostReportAmino;
  storage_challenge_observations: StorageChallengeObservationAmino[];
  storage_proof_results: StorageProofResultAmino[];
}
export interface EpochReportAminoMsg {
  type: "/lumera.audit.v1.EpochReport";
  value: EpochReportAmino;
}
function createBaseHostReport(): HostReport {
  return {
    cpuUsagePercent: 0,
    memUsagePercent: 0,
    diskUsagePercent: 0,
    inboundPortStates: [],
    failedActionsCount: 0,
    cascadeKademliaDbBytes: 0
  };
}
/**
 * HostReport is the Supernode's self-reported host metrics and counters for an epoch.
 * @name HostReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HostReport
 */
export const HostReport = {
  typeUrl: "/lumera.audit.v1.HostReport",
  is(o: any): o is HostReport {
    return o && (o.$typeUrl === HostReport.typeUrl || typeof o.cpuUsagePercent === "number" && typeof o.memUsagePercent === "number" && typeof o.diskUsagePercent === "number" && Array.isArray(o.inboundPortStates) && typeof o.failedActionsCount === "number" && typeof o.cascadeKademliaDbBytes === "number");
  },
  isAmino(o: any): o is HostReportAmino {
    return o && (o.$typeUrl === HostReport.typeUrl || typeof o.cpu_usage_percent === "number" && typeof o.mem_usage_percent === "number" && typeof o.disk_usage_percent === "number" && Array.isArray(o.inbound_port_states) && typeof o.failed_actions_count === "number" && typeof o.cascade_kademlia_db_bytes === "number");
  },
  encode(message: HostReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cpuUsagePercent !== 0) {
      writer.uint32(9).double(message.cpuUsagePercent);
    }
    if (message.memUsagePercent !== 0) {
      writer.uint32(17).double(message.memUsagePercent);
    }
    if (message.diskUsagePercent !== 0) {
      writer.uint32(25).double(message.diskUsagePercent);
    }
    writer.uint32(34).fork();
    for (const v of message.inboundPortStates) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.failedActionsCount !== 0) {
      writer.uint32(40).uint32(message.failedActionsCount);
    }
    if (message.cascadeKademliaDbBytes !== 0) {
      writer.uint32(49).double(message.cascadeKademliaDbBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cpuUsagePercent = reader.double();
          break;
        case 2:
          message.memUsagePercent = reader.double();
          break;
        case 3:
          message.diskUsagePercent = reader.double();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.inboundPortStates.push(reader.int32() as any);
            }
          } else {
            message.inboundPortStates.push(reader.int32() as any);
          }
          break;
        case 5:
          message.failedActionsCount = reader.uint32();
          break;
        case 6:
          message.cascadeKademliaDbBytes = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HostReport>): HostReport {
    const message = createBaseHostReport();
    message.cpuUsagePercent = object.cpuUsagePercent ?? 0;
    message.memUsagePercent = object.memUsagePercent ?? 0;
    message.diskUsagePercent = object.diskUsagePercent ?? 0;
    message.inboundPortStates = object.inboundPortStates?.map(e => e) || [];
    message.failedActionsCount = object.failedActionsCount ?? 0;
    message.cascadeKademliaDbBytes = object.cascadeKademliaDbBytes ?? 0;
    return message;
  },
  fromAmino(object: HostReportAmino): HostReport {
    const message = createBaseHostReport();
    if (object.cpu_usage_percent !== undefined && object.cpu_usage_percent !== null) {
      message.cpuUsagePercent = object.cpu_usage_percent;
    }
    if (object.mem_usage_percent !== undefined && object.mem_usage_percent !== null) {
      message.memUsagePercent = object.mem_usage_percent;
    }
    if (object.disk_usage_percent !== undefined && object.disk_usage_percent !== null) {
      message.diskUsagePercent = object.disk_usage_percent;
    }
    message.inboundPortStates = object.inbound_port_states?.map(e => e) || [];
    if (object.failed_actions_count !== undefined && object.failed_actions_count !== null) {
      message.failedActionsCount = object.failed_actions_count;
    }
    if (object.cascade_kademlia_db_bytes !== undefined && object.cascade_kademlia_db_bytes !== null) {
      message.cascadeKademliaDbBytes = object.cascade_kademlia_db_bytes;
    }
    return message;
  },
  toAmino(message: HostReport): HostReportAmino {
    const obj: any = {};
    obj.cpu_usage_percent = message.cpuUsagePercent === 0 ? undefined : message.cpuUsagePercent;
    obj.mem_usage_percent = message.memUsagePercent === 0 ? undefined : message.memUsagePercent;
    obj.disk_usage_percent = message.diskUsagePercent === 0 ? undefined : message.diskUsagePercent;
    if (message.inboundPortStates) {
      obj.inbound_port_states = message.inboundPortStates.map(e => e);
    } else {
      obj.inbound_port_states = message.inboundPortStates;
    }
    obj.failed_actions_count = message.failedActionsCount === 0 ? undefined : message.failedActionsCount;
    obj.cascade_kademlia_db_bytes = message.cascadeKademliaDbBytes === 0 ? undefined : message.cascadeKademliaDbBytes;
    return obj;
  },
  fromAminoMsg(object: HostReportAminoMsg): HostReport {
    return HostReport.fromAmino(object.value);
  },
  fromProtoMsg(message: HostReportProtoMsg): HostReport {
    return HostReport.decode(message.value);
  },
  toProto(message: HostReport): Uint8Array {
    return HostReport.encode(message).finish();
  },
  toProtoMsg(message: HostReport): HostReportProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.HostReport",
      value: HostReport.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStorageChallengeObservation(): StorageChallengeObservation {
  return {
    targetSupernodeAccount: "",
    portStates: []
  };
}
/**
 * StorageChallengeObservation is a prober's reachability observation about an assigned target.
 * @name StorageChallengeObservation
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeObservation
 */
export const StorageChallengeObservation = {
  typeUrl: "/lumera.audit.v1.StorageChallengeObservation",
  is(o: any): o is StorageChallengeObservation {
    return o && (o.$typeUrl === StorageChallengeObservation.typeUrl || typeof o.targetSupernodeAccount === "string" && Array.isArray(o.portStates));
  },
  isAmino(o: any): o is StorageChallengeObservationAmino {
    return o && (o.$typeUrl === StorageChallengeObservation.typeUrl || typeof o.target_supernode_account === "string" && Array.isArray(o.port_states));
  },
  encode(message: StorageChallengeObservation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetSupernodeAccount !== "") {
      writer.uint32(10).string(message.targetSupernodeAccount);
    }
    writer.uint32(18).fork();
    for (const v of message.portStates) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageChallengeObservation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageChallengeObservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetSupernodeAccount = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.portStates.push(reader.int32() as any);
            }
          } else {
            message.portStates.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StorageChallengeObservation>): StorageChallengeObservation {
    const message = createBaseStorageChallengeObservation();
    message.targetSupernodeAccount = object.targetSupernodeAccount ?? "";
    message.portStates = object.portStates?.map(e => e) || [];
    return message;
  },
  fromAmino(object: StorageChallengeObservationAmino): StorageChallengeObservation {
    const message = createBaseStorageChallengeObservation();
    if (object.target_supernode_account !== undefined && object.target_supernode_account !== null) {
      message.targetSupernodeAccount = object.target_supernode_account;
    }
    message.portStates = object.port_states?.map(e => e) || [];
    return message;
  },
  toAmino(message: StorageChallengeObservation): StorageChallengeObservationAmino {
    const obj: any = {};
    obj.target_supernode_account = message.targetSupernodeAccount === "" ? undefined : message.targetSupernodeAccount;
    if (message.portStates) {
      obj.port_states = message.portStates.map(e => e);
    } else {
      obj.port_states = message.portStates;
    }
    return obj;
  },
  fromAminoMsg(object: StorageChallengeObservationAminoMsg): StorageChallengeObservation {
    return StorageChallengeObservation.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageChallengeObservationProtoMsg): StorageChallengeObservation {
    return StorageChallengeObservation.decode(message.value);
  },
  toProto(message: StorageChallengeObservation): Uint8Array {
    return StorageChallengeObservation.encode(message).finish();
  },
  toProtoMsg(message: StorageChallengeObservation): StorageChallengeObservationProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.StorageChallengeObservation",
      value: StorageChallengeObservation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseStorageProofResult(): StorageProofResult {
  return {
    targetSupernodeAccount: "",
    challengerSupernodeAccount: "",
    ticketId: "",
    bucketType: 0,
    artifactClass: 0,
    artifactOrdinal: 0,
    artifactKey: "",
    resultClass: 0,
    transcriptHash: "",
    details: "",
    artifactCount: 0,
    derivationInputHash: "",
    challengerSignature: "",
    observerAttestationSignatures: []
  };
}
/**
 * StorageProofResult captures one storage-truth storage-proof check outcome.
 * 
 * NOTE: StorageProofResult stores transcript_hash plus a compact deterministic
 * derivation/signature envelope so transcript disagreements become explicit on-chain.
 * @name StorageProofResult
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageProofResult
 */
export const StorageProofResult = {
  typeUrl: "/lumera.audit.v1.StorageProofResult",
  is(o: any): o is StorageProofResult {
    return o && (o.$typeUrl === StorageProofResult.typeUrl || typeof o.targetSupernodeAccount === "string" && typeof o.challengerSupernodeAccount === "string" && typeof o.ticketId === "string" && isSet(o.bucketType) && isSet(o.artifactClass) && typeof o.artifactOrdinal === "number" && typeof o.artifactKey === "string" && isSet(o.resultClass) && typeof o.transcriptHash === "string" && typeof o.details === "string" && typeof o.artifactCount === "number" && typeof o.derivationInputHash === "string" && typeof o.challengerSignature === "string" && Array.isArray(o.observerAttestationSignatures) && (!o.observerAttestationSignatures.length || typeof o.observerAttestationSignatures[0] === "string"));
  },
  isAmino(o: any): o is StorageProofResultAmino {
    return o && (o.$typeUrl === StorageProofResult.typeUrl || typeof o.target_supernode_account === "string" && typeof o.challenger_supernode_account === "string" && typeof o.ticket_id === "string" && isSet(o.bucket_type) && isSet(o.artifact_class) && typeof o.artifact_ordinal === "number" && typeof o.artifact_key === "string" && isSet(o.result_class) && typeof o.transcript_hash === "string" && typeof o.details === "string" && typeof o.artifact_count === "number" && typeof o.derivation_input_hash === "string" && typeof o.challenger_signature === "string" && Array.isArray(o.observer_attestation_signatures) && (!o.observer_attestation_signatures.length || typeof o.observer_attestation_signatures[0] === "string"));
  },
  encode(message: StorageProofResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.targetSupernodeAccount !== "") {
      writer.uint32(10).string(message.targetSupernodeAccount);
    }
    if (message.challengerSupernodeAccount !== "") {
      writer.uint32(18).string(message.challengerSupernodeAccount);
    }
    if (message.ticketId !== "") {
      writer.uint32(26).string(message.ticketId);
    }
    if (message.bucketType !== 0) {
      writer.uint32(32).int32(message.bucketType);
    }
    if (message.artifactClass !== 0) {
      writer.uint32(40).int32(message.artifactClass);
    }
    if (message.artifactOrdinal !== 0) {
      writer.uint32(48).uint32(message.artifactOrdinal);
    }
    if (message.artifactKey !== "") {
      writer.uint32(58).string(message.artifactKey);
    }
    if (message.resultClass !== 0) {
      writer.uint32(64).int32(message.resultClass);
    }
    if (message.transcriptHash !== "") {
      writer.uint32(74).string(message.transcriptHash);
    }
    if (message.details !== "") {
      writer.uint32(82).string(message.details);
    }
    if (message.artifactCount !== 0) {
      writer.uint32(88).uint32(message.artifactCount);
    }
    if (message.derivationInputHash !== "") {
      writer.uint32(98).string(message.derivationInputHash);
    }
    if (message.challengerSignature !== "") {
      writer.uint32(106).string(message.challengerSignature);
    }
    for (const v of message.observerAttestationSignatures) {
      writer.uint32(114).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageProofResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProofResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetSupernodeAccount = reader.string();
          break;
        case 2:
          message.challengerSupernodeAccount = reader.string();
          break;
        case 3:
          message.ticketId = reader.string();
          break;
        case 4:
          message.bucketType = reader.int32() as any;
          break;
        case 5:
          message.artifactClass = reader.int32() as any;
          break;
        case 6:
          message.artifactOrdinal = reader.uint32();
          break;
        case 7:
          message.artifactKey = reader.string();
          break;
        case 8:
          message.resultClass = reader.int32() as any;
          break;
        case 9:
          message.transcriptHash = reader.string();
          break;
        case 10:
          message.details = reader.string();
          break;
        case 11:
          message.artifactCount = reader.uint32();
          break;
        case 12:
          message.derivationInputHash = reader.string();
          break;
        case 13:
          message.challengerSignature = reader.string();
          break;
        case 14:
          message.observerAttestationSignatures.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StorageProofResult>): StorageProofResult {
    const message = createBaseStorageProofResult();
    message.targetSupernodeAccount = object.targetSupernodeAccount ?? "";
    message.challengerSupernodeAccount = object.challengerSupernodeAccount ?? "";
    message.ticketId = object.ticketId ?? "";
    message.bucketType = object.bucketType ?? 0;
    message.artifactClass = object.artifactClass ?? 0;
    message.artifactOrdinal = object.artifactOrdinal ?? 0;
    message.artifactKey = object.artifactKey ?? "";
    message.resultClass = object.resultClass ?? 0;
    message.transcriptHash = object.transcriptHash ?? "";
    message.details = object.details ?? "";
    message.artifactCount = object.artifactCount ?? 0;
    message.derivationInputHash = object.derivationInputHash ?? "";
    message.challengerSignature = object.challengerSignature ?? "";
    message.observerAttestationSignatures = object.observerAttestationSignatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: StorageProofResultAmino): StorageProofResult {
    const message = createBaseStorageProofResult();
    if (object.target_supernode_account !== undefined && object.target_supernode_account !== null) {
      message.targetSupernodeAccount = object.target_supernode_account;
    }
    if (object.challenger_supernode_account !== undefined && object.challenger_supernode_account !== null) {
      message.challengerSupernodeAccount = object.challenger_supernode_account;
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.bucket_type !== undefined && object.bucket_type !== null) {
      message.bucketType = object.bucket_type;
    }
    if (object.artifact_class !== undefined && object.artifact_class !== null) {
      message.artifactClass = object.artifact_class;
    }
    if (object.artifact_ordinal !== undefined && object.artifact_ordinal !== null) {
      message.artifactOrdinal = object.artifact_ordinal;
    }
    if (object.artifact_key !== undefined && object.artifact_key !== null) {
      message.artifactKey = object.artifact_key;
    }
    if (object.result_class !== undefined && object.result_class !== null) {
      message.resultClass = object.result_class;
    }
    if (object.transcript_hash !== undefined && object.transcript_hash !== null) {
      message.transcriptHash = object.transcript_hash;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    if (object.artifact_count !== undefined && object.artifact_count !== null) {
      message.artifactCount = object.artifact_count;
    }
    if (object.derivation_input_hash !== undefined && object.derivation_input_hash !== null) {
      message.derivationInputHash = object.derivation_input_hash;
    }
    if (object.challenger_signature !== undefined && object.challenger_signature !== null) {
      message.challengerSignature = object.challenger_signature;
    }
    message.observerAttestationSignatures = object.observer_attestation_signatures?.map(e => e) || [];
    return message;
  },
  toAmino(message: StorageProofResult): StorageProofResultAmino {
    const obj: any = {};
    obj.target_supernode_account = message.targetSupernodeAccount === "" ? undefined : message.targetSupernodeAccount;
    obj.challenger_supernode_account = message.challengerSupernodeAccount === "" ? undefined : message.challengerSupernodeAccount;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.bucket_type = message.bucketType === 0 ? undefined : message.bucketType;
    obj.artifact_class = message.artifactClass === 0 ? undefined : message.artifactClass;
    obj.artifact_ordinal = message.artifactOrdinal === 0 ? undefined : message.artifactOrdinal;
    obj.artifact_key = message.artifactKey === "" ? undefined : message.artifactKey;
    obj.result_class = message.resultClass === 0 ? undefined : message.resultClass;
    obj.transcript_hash = message.transcriptHash === "" ? undefined : message.transcriptHash;
    obj.details = message.details === "" ? undefined : message.details;
    obj.artifact_count = message.artifactCount === 0 ? undefined : message.artifactCount;
    obj.derivation_input_hash = message.derivationInputHash === "" ? undefined : message.derivationInputHash;
    obj.challenger_signature = message.challengerSignature === "" ? undefined : message.challengerSignature;
    if (message.observerAttestationSignatures) {
      obj.observer_attestation_signatures = message.observerAttestationSignatures.map(e => e);
    } else {
      obj.observer_attestation_signatures = message.observerAttestationSignatures;
    }
    return obj;
  },
  fromAminoMsg(object: StorageProofResultAminoMsg): StorageProofResult {
    return StorageProofResult.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProofResultProtoMsg): StorageProofResult {
    return StorageProofResult.decode(message.value);
  },
  toProto(message: StorageProofResult): Uint8Array {
    return StorageProofResult.encode(message).finish();
  },
  toProtoMsg(message: StorageProofResult): StorageProofResultProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.StorageProofResult",
      value: StorageProofResult.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseNodeSuspicionState(): NodeSuspicionState {
  return {
    supernodeAccount: "",
    suspicionScore: BigInt(0),
    lastUpdatedEpoch: BigInt(0),
    lastRecentFailEpoch: BigInt(0),
    lastOldFailEpoch: BigInt(0),
    distinctTicketFailWindow: 0,
    windowStartEpoch: BigInt(0),
    classACountWindow: 0,
    lastClassAEpoch: BigInt(0),
    classBCountWindow: 0,
    lastClassBEpoch: BigInt(0),
    cleanPassCount: 0,
    lastCleanPassEpoch: BigInt(0),
    lastIndexFailEpoch: BigInt(0),
    cleanPassCountAtPostpone: 0
  };
}
/**
 * NodeSuspicionState is the persisted storage-truth node-level suspicion snapshot.
 * @name NodeSuspicionState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.NodeSuspicionState
 */
export const NodeSuspicionState = {
  typeUrl: "/lumera.audit.v1.NodeSuspicionState",
  is(o: any): o is NodeSuspicionState {
    return o && (o.$typeUrl === NodeSuspicionState.typeUrl || typeof o.supernodeAccount === "string" && typeof o.suspicionScore === "bigint" && typeof o.lastUpdatedEpoch === "bigint" && typeof o.lastRecentFailEpoch === "bigint" && typeof o.lastOldFailEpoch === "bigint" && typeof o.distinctTicketFailWindow === "number" && typeof o.windowStartEpoch === "bigint" && typeof o.classACountWindow === "number" && typeof o.lastClassAEpoch === "bigint" && typeof o.classBCountWindow === "number" && typeof o.lastClassBEpoch === "bigint" && typeof o.cleanPassCount === "number" && typeof o.lastCleanPassEpoch === "bigint" && typeof o.lastIndexFailEpoch === "bigint" && typeof o.cleanPassCountAtPostpone === "number");
  },
  isAmino(o: any): o is NodeSuspicionStateAmino {
    return o && (o.$typeUrl === NodeSuspicionState.typeUrl || typeof o.supernode_account === "string" && typeof o.suspicion_score === "bigint" && typeof o.last_updated_epoch === "bigint" && typeof o.last_recent_fail_epoch === "bigint" && typeof o.last_old_fail_epoch === "bigint" && typeof o.distinct_ticket_fail_window === "number" && typeof o.window_start_epoch === "bigint" && typeof o.class_a_count_window === "number" && typeof o.last_class_a_epoch === "bigint" && typeof o.class_b_count_window === "number" && typeof o.last_class_b_epoch === "bigint" && typeof o.clean_pass_count === "number" && typeof o.last_clean_pass_epoch === "bigint" && typeof o.last_index_fail_epoch === "bigint" && typeof o.clean_pass_count_at_postpone === "number");
  },
  encode(message: NodeSuspicionState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.suspicionScore !== BigInt(0)) {
      writer.uint32(16).int64(message.suspicionScore);
    }
    if (message.lastUpdatedEpoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastUpdatedEpoch);
    }
    if (message.lastRecentFailEpoch !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastRecentFailEpoch);
    }
    if (message.lastOldFailEpoch !== BigInt(0)) {
      writer.uint32(40).uint64(message.lastOldFailEpoch);
    }
    if (message.distinctTicketFailWindow !== 0) {
      writer.uint32(48).uint32(message.distinctTicketFailWindow);
    }
    if (message.windowStartEpoch !== BigInt(0)) {
      writer.uint32(56).uint64(message.windowStartEpoch);
    }
    if (message.classACountWindow !== 0) {
      writer.uint32(64).uint32(message.classACountWindow);
    }
    if (message.lastClassAEpoch !== BigInt(0)) {
      writer.uint32(72).uint64(message.lastClassAEpoch);
    }
    if (message.classBCountWindow !== 0) {
      writer.uint32(80).uint32(message.classBCountWindow);
    }
    if (message.lastClassBEpoch !== BigInt(0)) {
      writer.uint32(88).uint64(message.lastClassBEpoch);
    }
    if (message.cleanPassCount !== 0) {
      writer.uint32(96).uint32(message.cleanPassCount);
    }
    if (message.lastCleanPassEpoch !== BigInt(0)) {
      writer.uint32(104).uint64(message.lastCleanPassEpoch);
    }
    if (message.lastIndexFailEpoch !== BigInt(0)) {
      writer.uint32(112).uint64(message.lastIndexFailEpoch);
    }
    if (message.cleanPassCountAtPostpone !== 0) {
      writer.uint32(120).uint32(message.cleanPassCountAtPostpone);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NodeSuspicionState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeSuspicionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodeAccount = reader.string();
          break;
        case 2:
          message.suspicionScore = reader.int64();
          break;
        case 3:
          message.lastUpdatedEpoch = reader.uint64();
          break;
        case 4:
          message.lastRecentFailEpoch = reader.uint64();
          break;
        case 5:
          message.lastOldFailEpoch = reader.uint64();
          break;
        case 6:
          message.distinctTicketFailWindow = reader.uint32();
          break;
        case 7:
          message.windowStartEpoch = reader.uint64();
          break;
        case 8:
          message.classACountWindow = reader.uint32();
          break;
        case 9:
          message.lastClassAEpoch = reader.uint64();
          break;
        case 10:
          message.classBCountWindow = reader.uint32();
          break;
        case 11:
          message.lastClassBEpoch = reader.uint64();
          break;
        case 12:
          message.cleanPassCount = reader.uint32();
          break;
        case 13:
          message.lastCleanPassEpoch = reader.uint64();
          break;
        case 14:
          message.lastIndexFailEpoch = reader.uint64();
          break;
        case 15:
          message.cleanPassCountAtPostpone = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<NodeSuspicionState>): NodeSuspicionState {
    const message = createBaseNodeSuspicionState();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.suspicionScore = object.suspicionScore !== undefined && object.suspicionScore !== null ? BigInt(object.suspicionScore.toString()) : BigInt(0);
    message.lastUpdatedEpoch = object.lastUpdatedEpoch !== undefined && object.lastUpdatedEpoch !== null ? BigInt(object.lastUpdatedEpoch.toString()) : BigInt(0);
    message.lastRecentFailEpoch = object.lastRecentFailEpoch !== undefined && object.lastRecentFailEpoch !== null ? BigInt(object.lastRecentFailEpoch.toString()) : BigInt(0);
    message.lastOldFailEpoch = object.lastOldFailEpoch !== undefined && object.lastOldFailEpoch !== null ? BigInt(object.lastOldFailEpoch.toString()) : BigInt(0);
    message.distinctTicketFailWindow = object.distinctTicketFailWindow ?? 0;
    message.windowStartEpoch = object.windowStartEpoch !== undefined && object.windowStartEpoch !== null ? BigInt(object.windowStartEpoch.toString()) : BigInt(0);
    message.classACountWindow = object.classACountWindow ?? 0;
    message.lastClassAEpoch = object.lastClassAEpoch !== undefined && object.lastClassAEpoch !== null ? BigInt(object.lastClassAEpoch.toString()) : BigInt(0);
    message.classBCountWindow = object.classBCountWindow ?? 0;
    message.lastClassBEpoch = object.lastClassBEpoch !== undefined && object.lastClassBEpoch !== null ? BigInt(object.lastClassBEpoch.toString()) : BigInt(0);
    message.cleanPassCount = object.cleanPassCount ?? 0;
    message.lastCleanPassEpoch = object.lastCleanPassEpoch !== undefined && object.lastCleanPassEpoch !== null ? BigInt(object.lastCleanPassEpoch.toString()) : BigInt(0);
    message.lastIndexFailEpoch = object.lastIndexFailEpoch !== undefined && object.lastIndexFailEpoch !== null ? BigInt(object.lastIndexFailEpoch.toString()) : BigInt(0);
    message.cleanPassCountAtPostpone = object.cleanPassCountAtPostpone ?? 0;
    return message;
  },
  fromAmino(object: NodeSuspicionStateAmino): NodeSuspicionState {
    const message = createBaseNodeSuspicionState();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.suspicion_score !== undefined && object.suspicion_score !== null) {
      message.suspicionScore = BigInt(object.suspicion_score);
    }
    if (object.last_updated_epoch !== undefined && object.last_updated_epoch !== null) {
      message.lastUpdatedEpoch = BigInt(object.last_updated_epoch);
    }
    if (object.last_recent_fail_epoch !== undefined && object.last_recent_fail_epoch !== null) {
      message.lastRecentFailEpoch = BigInt(object.last_recent_fail_epoch);
    }
    if (object.last_old_fail_epoch !== undefined && object.last_old_fail_epoch !== null) {
      message.lastOldFailEpoch = BigInt(object.last_old_fail_epoch);
    }
    if (object.distinct_ticket_fail_window !== undefined && object.distinct_ticket_fail_window !== null) {
      message.distinctTicketFailWindow = object.distinct_ticket_fail_window;
    }
    if (object.window_start_epoch !== undefined && object.window_start_epoch !== null) {
      message.windowStartEpoch = BigInt(object.window_start_epoch);
    }
    if (object.class_a_count_window !== undefined && object.class_a_count_window !== null) {
      message.classACountWindow = object.class_a_count_window;
    }
    if (object.last_class_a_epoch !== undefined && object.last_class_a_epoch !== null) {
      message.lastClassAEpoch = BigInt(object.last_class_a_epoch);
    }
    if (object.class_b_count_window !== undefined && object.class_b_count_window !== null) {
      message.classBCountWindow = object.class_b_count_window;
    }
    if (object.last_class_b_epoch !== undefined && object.last_class_b_epoch !== null) {
      message.lastClassBEpoch = BigInt(object.last_class_b_epoch);
    }
    if (object.clean_pass_count !== undefined && object.clean_pass_count !== null) {
      message.cleanPassCount = object.clean_pass_count;
    }
    if (object.last_clean_pass_epoch !== undefined && object.last_clean_pass_epoch !== null) {
      message.lastCleanPassEpoch = BigInt(object.last_clean_pass_epoch);
    }
    if (object.last_index_fail_epoch !== undefined && object.last_index_fail_epoch !== null) {
      message.lastIndexFailEpoch = BigInt(object.last_index_fail_epoch);
    }
    if (object.clean_pass_count_at_postpone !== undefined && object.clean_pass_count_at_postpone !== null) {
      message.cleanPassCountAtPostpone = object.clean_pass_count_at_postpone;
    }
    return message;
  },
  toAmino(message: NodeSuspicionState): NodeSuspicionStateAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.suspicion_score = message.suspicionScore !== BigInt(0) ? message.suspicionScore?.toString() : undefined;
    obj.last_updated_epoch = message.lastUpdatedEpoch !== BigInt(0) ? message.lastUpdatedEpoch?.toString() : undefined;
    obj.last_recent_fail_epoch = message.lastRecentFailEpoch !== BigInt(0) ? message.lastRecentFailEpoch?.toString() : undefined;
    obj.last_old_fail_epoch = message.lastOldFailEpoch !== BigInt(0) ? message.lastOldFailEpoch?.toString() : undefined;
    obj.distinct_ticket_fail_window = message.distinctTicketFailWindow === 0 ? undefined : message.distinctTicketFailWindow;
    obj.window_start_epoch = message.windowStartEpoch !== BigInt(0) ? message.windowStartEpoch?.toString() : undefined;
    obj.class_a_count_window = message.classACountWindow === 0 ? undefined : message.classACountWindow;
    obj.last_class_a_epoch = message.lastClassAEpoch !== BigInt(0) ? message.lastClassAEpoch?.toString() : undefined;
    obj.class_b_count_window = message.classBCountWindow === 0 ? undefined : message.classBCountWindow;
    obj.last_class_b_epoch = message.lastClassBEpoch !== BigInt(0) ? message.lastClassBEpoch?.toString() : undefined;
    obj.clean_pass_count = message.cleanPassCount === 0 ? undefined : message.cleanPassCount;
    obj.last_clean_pass_epoch = message.lastCleanPassEpoch !== BigInt(0) ? message.lastCleanPassEpoch?.toString() : undefined;
    obj.last_index_fail_epoch = message.lastIndexFailEpoch !== BigInt(0) ? message.lastIndexFailEpoch?.toString() : undefined;
    obj.clean_pass_count_at_postpone = message.cleanPassCountAtPostpone === 0 ? undefined : message.cleanPassCountAtPostpone;
    return obj;
  },
  fromAminoMsg(object: NodeSuspicionStateAminoMsg): NodeSuspicionState {
    return NodeSuspicionState.fromAmino(object.value);
  },
  fromProtoMsg(message: NodeSuspicionStateProtoMsg): NodeSuspicionState {
    return NodeSuspicionState.decode(message.value);
  },
  toProto(message: NodeSuspicionState): Uint8Array {
    return NodeSuspicionState.encode(message).finish();
  },
  toProtoMsg(message: NodeSuspicionState): NodeSuspicionStateProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.NodeSuspicionState",
      value: NodeSuspicionState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseReporterReliabilityState(): ReporterReliabilityState {
  return {
    reporterSupernodeAccount: "",
    reliabilityScore: BigInt(0),
    lastUpdatedEpoch: BigInt(0),
    trustBand: 0,
    contradictionCount: BigInt(0),
    ineligibleUntilEpoch: BigInt(0),
    windowPositiveCount: 0,
    windowNegativeCount: 0,
    windowStartEpoch: BigInt(0)
  };
}
/**
 * ReporterReliabilityState is the persisted storage-truth reporter reliability snapshot.
 * @name ReporterReliabilityState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.ReporterReliabilityState
 */
export const ReporterReliabilityState = {
  typeUrl: "/lumera.audit.v1.ReporterReliabilityState",
  is(o: any): o is ReporterReliabilityState {
    return o && (o.$typeUrl === ReporterReliabilityState.typeUrl || typeof o.reporterSupernodeAccount === "string" && typeof o.reliabilityScore === "bigint" && typeof o.lastUpdatedEpoch === "bigint" && isSet(o.trustBand) && typeof o.contradictionCount === "bigint" && typeof o.ineligibleUntilEpoch === "bigint" && typeof o.windowPositiveCount === "number" && typeof o.windowNegativeCount === "number" && typeof o.windowStartEpoch === "bigint");
  },
  isAmino(o: any): o is ReporterReliabilityStateAmino {
    return o && (o.$typeUrl === ReporterReliabilityState.typeUrl || typeof o.reporter_supernode_account === "string" && typeof o.reliability_score === "bigint" && typeof o.last_updated_epoch === "bigint" && isSet(o.trust_band) && typeof o.contradiction_count === "bigint" && typeof o.ineligible_until_epoch === "bigint" && typeof o.window_positive_count === "number" && typeof o.window_negative_count === "number" && typeof o.window_start_epoch === "bigint");
  },
  encode(message: ReporterReliabilityState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterSupernodeAccount !== "") {
      writer.uint32(10).string(message.reporterSupernodeAccount);
    }
    if (message.reliabilityScore !== BigInt(0)) {
      writer.uint32(16).int64(message.reliabilityScore);
    }
    if (message.lastUpdatedEpoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastUpdatedEpoch);
    }
    if (message.trustBand !== 0) {
      writer.uint32(32).int32(message.trustBand);
    }
    if (message.contradictionCount !== BigInt(0)) {
      writer.uint32(40).uint64(message.contradictionCount);
    }
    if (message.ineligibleUntilEpoch !== BigInt(0)) {
      writer.uint32(48).uint64(message.ineligibleUntilEpoch);
    }
    if (message.windowPositiveCount !== 0) {
      writer.uint32(56).uint32(message.windowPositiveCount);
    }
    if (message.windowNegativeCount !== 0) {
      writer.uint32(64).uint32(message.windowNegativeCount);
    }
    if (message.windowStartEpoch !== BigInt(0)) {
      writer.uint32(72).uint64(message.windowStartEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReporterReliabilityState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReporterReliabilityState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterSupernodeAccount = reader.string();
          break;
        case 2:
          message.reliabilityScore = reader.int64();
          break;
        case 3:
          message.lastUpdatedEpoch = reader.uint64();
          break;
        case 4:
          message.trustBand = reader.int32() as any;
          break;
        case 5:
          message.contradictionCount = reader.uint64();
          break;
        case 6:
          message.ineligibleUntilEpoch = reader.uint64();
          break;
        case 7:
          message.windowPositiveCount = reader.uint32();
          break;
        case 8:
          message.windowNegativeCount = reader.uint32();
          break;
        case 9:
          message.windowStartEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ReporterReliabilityState>): ReporterReliabilityState {
    const message = createBaseReporterReliabilityState();
    message.reporterSupernodeAccount = object.reporterSupernodeAccount ?? "";
    message.reliabilityScore = object.reliabilityScore !== undefined && object.reliabilityScore !== null ? BigInt(object.reliabilityScore.toString()) : BigInt(0);
    message.lastUpdatedEpoch = object.lastUpdatedEpoch !== undefined && object.lastUpdatedEpoch !== null ? BigInt(object.lastUpdatedEpoch.toString()) : BigInt(0);
    message.trustBand = object.trustBand ?? 0;
    message.contradictionCount = object.contradictionCount !== undefined && object.contradictionCount !== null ? BigInt(object.contradictionCount.toString()) : BigInt(0);
    message.ineligibleUntilEpoch = object.ineligibleUntilEpoch !== undefined && object.ineligibleUntilEpoch !== null ? BigInt(object.ineligibleUntilEpoch.toString()) : BigInt(0);
    message.windowPositiveCount = object.windowPositiveCount ?? 0;
    message.windowNegativeCount = object.windowNegativeCount ?? 0;
    message.windowStartEpoch = object.windowStartEpoch !== undefined && object.windowStartEpoch !== null ? BigInt(object.windowStartEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReporterReliabilityStateAmino): ReporterReliabilityState {
    const message = createBaseReporterReliabilityState();
    if (object.reporter_supernode_account !== undefined && object.reporter_supernode_account !== null) {
      message.reporterSupernodeAccount = object.reporter_supernode_account;
    }
    if (object.reliability_score !== undefined && object.reliability_score !== null) {
      message.reliabilityScore = BigInt(object.reliability_score);
    }
    if (object.last_updated_epoch !== undefined && object.last_updated_epoch !== null) {
      message.lastUpdatedEpoch = BigInt(object.last_updated_epoch);
    }
    if (object.trust_band !== undefined && object.trust_band !== null) {
      message.trustBand = object.trust_band;
    }
    if (object.contradiction_count !== undefined && object.contradiction_count !== null) {
      message.contradictionCount = BigInt(object.contradiction_count);
    }
    if (object.ineligible_until_epoch !== undefined && object.ineligible_until_epoch !== null) {
      message.ineligibleUntilEpoch = BigInt(object.ineligible_until_epoch);
    }
    if (object.window_positive_count !== undefined && object.window_positive_count !== null) {
      message.windowPositiveCount = object.window_positive_count;
    }
    if (object.window_negative_count !== undefined && object.window_negative_count !== null) {
      message.windowNegativeCount = object.window_negative_count;
    }
    if (object.window_start_epoch !== undefined && object.window_start_epoch !== null) {
      message.windowStartEpoch = BigInt(object.window_start_epoch);
    }
    return message;
  },
  toAmino(message: ReporterReliabilityState): ReporterReliabilityStateAmino {
    const obj: any = {};
    obj.reporter_supernode_account = message.reporterSupernodeAccount === "" ? undefined : message.reporterSupernodeAccount;
    obj.reliability_score = message.reliabilityScore !== BigInt(0) ? message.reliabilityScore?.toString() : undefined;
    obj.last_updated_epoch = message.lastUpdatedEpoch !== BigInt(0) ? message.lastUpdatedEpoch?.toString() : undefined;
    obj.trust_band = message.trustBand === 0 ? undefined : message.trustBand;
    obj.contradiction_count = message.contradictionCount !== BigInt(0) ? message.contradictionCount?.toString() : undefined;
    obj.ineligible_until_epoch = message.ineligibleUntilEpoch !== BigInt(0) ? message.ineligibleUntilEpoch?.toString() : undefined;
    obj.window_positive_count = message.windowPositiveCount === 0 ? undefined : message.windowPositiveCount;
    obj.window_negative_count = message.windowNegativeCount === 0 ? undefined : message.windowNegativeCount;
    obj.window_start_epoch = message.windowStartEpoch !== BigInt(0) ? message.windowStartEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReporterReliabilityStateAminoMsg): ReporterReliabilityState {
    return ReporterReliabilityState.fromAmino(object.value);
  },
  fromProtoMsg(message: ReporterReliabilityStateProtoMsg): ReporterReliabilityState {
    return ReporterReliabilityState.decode(message.value);
  },
  toProto(message: ReporterReliabilityState): Uint8Array {
    return ReporterReliabilityState.encode(message).finish();
  },
  toProtoMsg(message: ReporterReliabilityState): ReporterReliabilityStateProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.ReporterReliabilityState",
      value: ReporterReliabilityState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTicketDeteriorationState(): TicketDeteriorationState {
  return {
    ticketId: "",
    deteriorationScore: BigInt(0),
    lastUpdatedEpoch: BigInt(0),
    activeHealOpId: BigInt(0),
    probationUntilEpoch: BigInt(0),
    lastHealEpoch: BigInt(0),
    lastFailureEpoch: BigInt(0),
    recentFailureEpochCount: 0,
    contradictionCount: BigInt(0),
    lastTargetSupernodeAccount: "",
    lastReporterSupernodeAccount: "",
    lastResultClass: 0,
    lastResultEpoch: BigInt(0),
    distinctHolderFailureCount: 0,
    lastIndexFailureEpoch: BigInt(0),
    recentBucketFailureEpoch: BigInt(0),
    oldBucketFailureEpoch: BigInt(0)
  };
}
/**
 * TicketDeteriorationState is the persisted storage-truth ticket deterioration snapshot.
 * @name TicketDeteriorationState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.TicketDeteriorationState
 */
export const TicketDeteriorationState = {
  typeUrl: "/lumera.audit.v1.TicketDeteriorationState",
  is(o: any): o is TicketDeteriorationState {
    return o && (o.$typeUrl === TicketDeteriorationState.typeUrl || typeof o.ticketId === "string" && typeof o.deteriorationScore === "bigint" && typeof o.lastUpdatedEpoch === "bigint" && typeof o.activeHealOpId === "bigint" && typeof o.probationUntilEpoch === "bigint" && typeof o.lastHealEpoch === "bigint" && typeof o.lastFailureEpoch === "bigint" && typeof o.recentFailureEpochCount === "number" && typeof o.contradictionCount === "bigint" && typeof o.lastTargetSupernodeAccount === "string" && typeof o.lastReporterSupernodeAccount === "string" && isSet(o.lastResultClass) && typeof o.lastResultEpoch === "bigint" && typeof o.distinctHolderFailureCount === "number" && typeof o.lastIndexFailureEpoch === "bigint" && typeof o.recentBucketFailureEpoch === "bigint" && typeof o.oldBucketFailureEpoch === "bigint");
  },
  isAmino(o: any): o is TicketDeteriorationStateAmino {
    return o && (o.$typeUrl === TicketDeteriorationState.typeUrl || typeof o.ticket_id === "string" && typeof o.deterioration_score === "bigint" && typeof o.last_updated_epoch === "bigint" && typeof o.active_heal_op_id === "bigint" && typeof o.probation_until_epoch === "bigint" && typeof o.last_heal_epoch === "bigint" && typeof o.last_failure_epoch === "bigint" && typeof o.recent_failure_epoch_count === "number" && typeof o.contradiction_count === "bigint" && typeof o.last_target_supernode_account === "string" && typeof o.last_reporter_supernode_account === "string" && isSet(o.last_result_class) && typeof o.last_result_epoch === "bigint" && typeof o.distinct_holder_failure_count === "number" && typeof o.last_index_failure_epoch === "bigint" && typeof o.recent_bucket_failure_epoch === "bigint" && typeof o.old_bucket_failure_epoch === "bigint");
  },
  encode(message: TicketDeteriorationState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.deteriorationScore !== BigInt(0)) {
      writer.uint32(16).int64(message.deteriorationScore);
    }
    if (message.lastUpdatedEpoch !== BigInt(0)) {
      writer.uint32(24).uint64(message.lastUpdatedEpoch);
    }
    if (message.activeHealOpId !== BigInt(0)) {
      writer.uint32(32).uint64(message.activeHealOpId);
    }
    if (message.probationUntilEpoch !== BigInt(0)) {
      writer.uint32(40).uint64(message.probationUntilEpoch);
    }
    if (message.lastHealEpoch !== BigInt(0)) {
      writer.uint32(48).uint64(message.lastHealEpoch);
    }
    if (message.lastFailureEpoch !== BigInt(0)) {
      writer.uint32(56).uint64(message.lastFailureEpoch);
    }
    if (message.recentFailureEpochCount !== 0) {
      writer.uint32(64).uint32(message.recentFailureEpochCount);
    }
    if (message.contradictionCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.contradictionCount);
    }
    if (message.lastTargetSupernodeAccount !== "") {
      writer.uint32(82).string(message.lastTargetSupernodeAccount);
    }
    if (message.lastReporterSupernodeAccount !== "") {
      writer.uint32(90).string(message.lastReporterSupernodeAccount);
    }
    if (message.lastResultClass !== 0) {
      writer.uint32(96).int32(message.lastResultClass);
    }
    if (message.lastResultEpoch !== BigInt(0)) {
      writer.uint32(104).uint64(message.lastResultEpoch);
    }
    if (message.distinctHolderFailureCount !== 0) {
      writer.uint32(112).uint32(message.distinctHolderFailureCount);
    }
    if (message.lastIndexFailureEpoch !== BigInt(0)) {
      writer.uint32(120).uint64(message.lastIndexFailureEpoch);
    }
    if (message.recentBucketFailureEpoch !== BigInt(0)) {
      writer.uint32(128).uint64(message.recentBucketFailureEpoch);
    }
    if (message.oldBucketFailureEpoch !== BigInt(0)) {
      writer.uint32(136).uint64(message.oldBucketFailureEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TicketDeteriorationState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketDeteriorationState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticketId = reader.string();
          break;
        case 2:
          message.deteriorationScore = reader.int64();
          break;
        case 3:
          message.lastUpdatedEpoch = reader.uint64();
          break;
        case 4:
          message.activeHealOpId = reader.uint64();
          break;
        case 5:
          message.probationUntilEpoch = reader.uint64();
          break;
        case 6:
          message.lastHealEpoch = reader.uint64();
          break;
        case 7:
          message.lastFailureEpoch = reader.uint64();
          break;
        case 8:
          message.recentFailureEpochCount = reader.uint32();
          break;
        case 9:
          message.contradictionCount = reader.uint64();
          break;
        case 10:
          message.lastTargetSupernodeAccount = reader.string();
          break;
        case 11:
          message.lastReporterSupernodeAccount = reader.string();
          break;
        case 12:
          message.lastResultClass = reader.int32() as any;
          break;
        case 13:
          message.lastResultEpoch = reader.uint64();
          break;
        case 14:
          message.distinctHolderFailureCount = reader.uint32();
          break;
        case 15:
          message.lastIndexFailureEpoch = reader.uint64();
          break;
        case 16:
          message.recentBucketFailureEpoch = reader.uint64();
          break;
        case 17:
          message.oldBucketFailureEpoch = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TicketDeteriorationState>): TicketDeteriorationState {
    const message = createBaseTicketDeteriorationState();
    message.ticketId = object.ticketId ?? "";
    message.deteriorationScore = object.deteriorationScore !== undefined && object.deteriorationScore !== null ? BigInt(object.deteriorationScore.toString()) : BigInt(0);
    message.lastUpdatedEpoch = object.lastUpdatedEpoch !== undefined && object.lastUpdatedEpoch !== null ? BigInt(object.lastUpdatedEpoch.toString()) : BigInt(0);
    message.activeHealOpId = object.activeHealOpId !== undefined && object.activeHealOpId !== null ? BigInt(object.activeHealOpId.toString()) : BigInt(0);
    message.probationUntilEpoch = object.probationUntilEpoch !== undefined && object.probationUntilEpoch !== null ? BigInt(object.probationUntilEpoch.toString()) : BigInt(0);
    message.lastHealEpoch = object.lastHealEpoch !== undefined && object.lastHealEpoch !== null ? BigInt(object.lastHealEpoch.toString()) : BigInt(0);
    message.lastFailureEpoch = object.lastFailureEpoch !== undefined && object.lastFailureEpoch !== null ? BigInt(object.lastFailureEpoch.toString()) : BigInt(0);
    message.recentFailureEpochCount = object.recentFailureEpochCount ?? 0;
    message.contradictionCount = object.contradictionCount !== undefined && object.contradictionCount !== null ? BigInt(object.contradictionCount.toString()) : BigInt(0);
    message.lastTargetSupernodeAccount = object.lastTargetSupernodeAccount ?? "";
    message.lastReporterSupernodeAccount = object.lastReporterSupernodeAccount ?? "";
    message.lastResultClass = object.lastResultClass ?? 0;
    message.lastResultEpoch = object.lastResultEpoch !== undefined && object.lastResultEpoch !== null ? BigInt(object.lastResultEpoch.toString()) : BigInt(0);
    message.distinctHolderFailureCount = object.distinctHolderFailureCount ?? 0;
    message.lastIndexFailureEpoch = object.lastIndexFailureEpoch !== undefined && object.lastIndexFailureEpoch !== null ? BigInt(object.lastIndexFailureEpoch.toString()) : BigInt(0);
    message.recentBucketFailureEpoch = object.recentBucketFailureEpoch !== undefined && object.recentBucketFailureEpoch !== null ? BigInt(object.recentBucketFailureEpoch.toString()) : BigInt(0);
    message.oldBucketFailureEpoch = object.oldBucketFailureEpoch !== undefined && object.oldBucketFailureEpoch !== null ? BigInt(object.oldBucketFailureEpoch.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TicketDeteriorationStateAmino): TicketDeteriorationState {
    const message = createBaseTicketDeteriorationState();
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.deterioration_score !== undefined && object.deterioration_score !== null) {
      message.deteriorationScore = BigInt(object.deterioration_score);
    }
    if (object.last_updated_epoch !== undefined && object.last_updated_epoch !== null) {
      message.lastUpdatedEpoch = BigInt(object.last_updated_epoch);
    }
    if (object.active_heal_op_id !== undefined && object.active_heal_op_id !== null) {
      message.activeHealOpId = BigInt(object.active_heal_op_id);
    }
    if (object.probation_until_epoch !== undefined && object.probation_until_epoch !== null) {
      message.probationUntilEpoch = BigInt(object.probation_until_epoch);
    }
    if (object.last_heal_epoch !== undefined && object.last_heal_epoch !== null) {
      message.lastHealEpoch = BigInt(object.last_heal_epoch);
    }
    if (object.last_failure_epoch !== undefined && object.last_failure_epoch !== null) {
      message.lastFailureEpoch = BigInt(object.last_failure_epoch);
    }
    if (object.recent_failure_epoch_count !== undefined && object.recent_failure_epoch_count !== null) {
      message.recentFailureEpochCount = object.recent_failure_epoch_count;
    }
    if (object.contradiction_count !== undefined && object.contradiction_count !== null) {
      message.contradictionCount = BigInt(object.contradiction_count);
    }
    if (object.last_target_supernode_account !== undefined && object.last_target_supernode_account !== null) {
      message.lastTargetSupernodeAccount = object.last_target_supernode_account;
    }
    if (object.last_reporter_supernode_account !== undefined && object.last_reporter_supernode_account !== null) {
      message.lastReporterSupernodeAccount = object.last_reporter_supernode_account;
    }
    if (object.last_result_class !== undefined && object.last_result_class !== null) {
      message.lastResultClass = object.last_result_class;
    }
    if (object.last_result_epoch !== undefined && object.last_result_epoch !== null) {
      message.lastResultEpoch = BigInt(object.last_result_epoch);
    }
    if (object.distinct_holder_failure_count !== undefined && object.distinct_holder_failure_count !== null) {
      message.distinctHolderFailureCount = object.distinct_holder_failure_count;
    }
    if (object.last_index_failure_epoch !== undefined && object.last_index_failure_epoch !== null) {
      message.lastIndexFailureEpoch = BigInt(object.last_index_failure_epoch);
    }
    if (object.recent_bucket_failure_epoch !== undefined && object.recent_bucket_failure_epoch !== null) {
      message.recentBucketFailureEpoch = BigInt(object.recent_bucket_failure_epoch);
    }
    if (object.old_bucket_failure_epoch !== undefined && object.old_bucket_failure_epoch !== null) {
      message.oldBucketFailureEpoch = BigInt(object.old_bucket_failure_epoch);
    }
    return message;
  },
  toAmino(message: TicketDeteriorationState): TicketDeteriorationStateAmino {
    const obj: any = {};
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.deterioration_score = message.deteriorationScore !== BigInt(0) ? message.deteriorationScore?.toString() : undefined;
    obj.last_updated_epoch = message.lastUpdatedEpoch !== BigInt(0) ? message.lastUpdatedEpoch?.toString() : undefined;
    obj.active_heal_op_id = message.activeHealOpId !== BigInt(0) ? message.activeHealOpId?.toString() : undefined;
    obj.probation_until_epoch = message.probationUntilEpoch !== BigInt(0) ? message.probationUntilEpoch?.toString() : undefined;
    obj.last_heal_epoch = message.lastHealEpoch !== BigInt(0) ? message.lastHealEpoch?.toString() : undefined;
    obj.last_failure_epoch = message.lastFailureEpoch !== BigInt(0) ? message.lastFailureEpoch?.toString() : undefined;
    obj.recent_failure_epoch_count = message.recentFailureEpochCount === 0 ? undefined : message.recentFailureEpochCount;
    obj.contradiction_count = message.contradictionCount !== BigInt(0) ? message.contradictionCount?.toString() : undefined;
    obj.last_target_supernode_account = message.lastTargetSupernodeAccount === "" ? undefined : message.lastTargetSupernodeAccount;
    obj.last_reporter_supernode_account = message.lastReporterSupernodeAccount === "" ? undefined : message.lastReporterSupernodeAccount;
    obj.last_result_class = message.lastResultClass === 0 ? undefined : message.lastResultClass;
    obj.last_result_epoch = message.lastResultEpoch !== BigInt(0) ? message.lastResultEpoch?.toString() : undefined;
    obj.distinct_holder_failure_count = message.distinctHolderFailureCount === 0 ? undefined : message.distinctHolderFailureCount;
    obj.last_index_failure_epoch = message.lastIndexFailureEpoch !== BigInt(0) ? message.lastIndexFailureEpoch?.toString() : undefined;
    obj.recent_bucket_failure_epoch = message.recentBucketFailureEpoch !== BigInt(0) ? message.recentBucketFailureEpoch?.toString() : undefined;
    obj.old_bucket_failure_epoch = message.oldBucketFailureEpoch !== BigInt(0) ? message.oldBucketFailureEpoch?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TicketDeteriorationStateAminoMsg): TicketDeteriorationState {
    return TicketDeteriorationState.fromAmino(object.value);
  },
  fromProtoMsg(message: TicketDeteriorationStateProtoMsg): TicketDeteriorationState {
    return TicketDeteriorationState.decode(message.value);
  },
  toProto(message: TicketDeteriorationState): Uint8Array {
    return TicketDeteriorationState.encode(message).finish();
  },
  toProtoMsg(message: TicketDeteriorationState): TicketDeteriorationStateProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.TicketDeteriorationState",
      value: TicketDeteriorationState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTicketArtifactCountState(): TicketArtifactCountState {
  return {
    ticketId: "",
    indexArtifactCount: 0,
    symbolArtifactCount: 0
  };
}
/**
 * TicketArtifactCountState stores canonical per-ticket artifact counts used to
 * validate deterministic ordinal selection inputs.
 * @name TicketArtifactCountState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.TicketArtifactCountState
 */
export const TicketArtifactCountState = {
  typeUrl: "/lumera.audit.v1.TicketArtifactCountState",
  is(o: any): o is TicketArtifactCountState {
    return o && (o.$typeUrl === TicketArtifactCountState.typeUrl || typeof o.ticketId === "string" && typeof o.indexArtifactCount === "number" && typeof o.symbolArtifactCount === "number");
  },
  isAmino(o: any): o is TicketArtifactCountStateAmino {
    return o && (o.$typeUrl === TicketArtifactCountState.typeUrl || typeof o.ticket_id === "string" && typeof o.index_artifact_count === "number" && typeof o.symbol_artifact_count === "number");
  },
  encode(message: TicketArtifactCountState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.indexArtifactCount !== 0) {
      writer.uint32(16).uint32(message.indexArtifactCount);
    }
    if (message.symbolArtifactCount !== 0) {
      writer.uint32(24).uint32(message.symbolArtifactCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TicketArtifactCountState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketArtifactCountState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticketId = reader.string();
          break;
        case 2:
          message.indexArtifactCount = reader.uint32();
          break;
        case 3:
          message.symbolArtifactCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TicketArtifactCountState>): TicketArtifactCountState {
    const message = createBaseTicketArtifactCountState();
    message.ticketId = object.ticketId ?? "";
    message.indexArtifactCount = object.indexArtifactCount ?? 0;
    message.symbolArtifactCount = object.symbolArtifactCount ?? 0;
    return message;
  },
  fromAmino(object: TicketArtifactCountStateAmino): TicketArtifactCountState {
    const message = createBaseTicketArtifactCountState();
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.index_artifact_count !== undefined && object.index_artifact_count !== null) {
      message.indexArtifactCount = object.index_artifact_count;
    }
    if (object.symbol_artifact_count !== undefined && object.symbol_artifact_count !== null) {
      message.symbolArtifactCount = object.symbol_artifact_count;
    }
    return message;
  },
  toAmino(message: TicketArtifactCountState): TicketArtifactCountStateAmino {
    const obj: any = {};
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.index_artifact_count = message.indexArtifactCount === 0 ? undefined : message.indexArtifactCount;
    obj.symbol_artifact_count = message.symbolArtifactCount === 0 ? undefined : message.symbolArtifactCount;
    return obj;
  },
  fromAminoMsg(object: TicketArtifactCountStateAminoMsg): TicketArtifactCountState {
    return TicketArtifactCountState.fromAmino(object.value);
  },
  fromProtoMsg(message: TicketArtifactCountStateProtoMsg): TicketArtifactCountState {
    return TicketArtifactCountState.decode(message.value);
  },
  toProto(message: TicketArtifactCountState): Uint8Array {
    return TicketArtifactCountState.encode(message).finish();
  },
  toProtoMsg(message: TicketArtifactCountState): TicketArtifactCountStateProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.TicketArtifactCountState",
      value: TicketArtifactCountState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseHealOp(): HealOp {
  return {
    healOpId: BigInt(0),
    ticketId: "",
    scheduledEpochId: BigInt(0),
    healerSupernodeAccount: "",
    verifierSupernodeAccounts: [],
    status: 0,
    createdHeight: BigInt(0),
    updatedHeight: BigInt(0),
    deadlineEpochId: BigInt(0),
    resultHash: "",
    notes: ""
  };
}
/**
 * HealOp is the chain-tracked storage-truth healing operation state.
 * @name HealOp
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HealOp
 */
export const HealOp = {
  typeUrl: "/lumera.audit.v1.HealOp",
  is(o: any): o is HealOp {
    return o && (o.$typeUrl === HealOp.typeUrl || typeof o.healOpId === "bigint" && typeof o.ticketId === "string" && typeof o.scheduledEpochId === "bigint" && typeof o.healerSupernodeAccount === "string" && Array.isArray(o.verifierSupernodeAccounts) && (!o.verifierSupernodeAccounts.length || typeof o.verifierSupernodeAccounts[0] === "string") && isSet(o.status) && typeof o.createdHeight === "bigint" && typeof o.updatedHeight === "bigint" && typeof o.deadlineEpochId === "bigint" && typeof o.resultHash === "string" && typeof o.notes === "string");
  },
  isAmino(o: any): o is HealOpAmino {
    return o && (o.$typeUrl === HealOp.typeUrl || typeof o.heal_op_id === "bigint" && typeof o.ticket_id === "string" && typeof o.scheduled_epoch_id === "bigint" && typeof o.healer_supernode_account === "string" && Array.isArray(o.verifier_supernode_accounts) && (!o.verifier_supernode_accounts.length || typeof o.verifier_supernode_accounts[0] === "string") && isSet(o.status) && typeof o.created_height === "bigint" && typeof o.updated_height === "bigint" && typeof o.deadline_epoch_id === "bigint" && typeof o.result_hash === "string" && typeof o.notes === "string");
  },
  encode(message: HealOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.healOpId !== BigInt(0)) {
      writer.uint32(8).uint64(message.healOpId);
    }
    if (message.ticketId !== "") {
      writer.uint32(18).string(message.ticketId);
    }
    if (message.scheduledEpochId !== BigInt(0)) {
      writer.uint32(24).uint64(message.scheduledEpochId);
    }
    if (message.healerSupernodeAccount !== "") {
      writer.uint32(34).string(message.healerSupernodeAccount);
    }
    for (const v of message.verifierSupernodeAccounts) {
      writer.uint32(42).string(v!);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.createdHeight !== BigInt(0)) {
      writer.uint32(56).uint64(message.createdHeight);
    }
    if (message.updatedHeight !== BigInt(0)) {
      writer.uint32(64).uint64(message.updatedHeight);
    }
    if (message.deadlineEpochId !== BigInt(0)) {
      writer.uint32(72).uint64(message.deadlineEpochId);
    }
    if (message.resultHash !== "") {
      writer.uint32(82).string(message.resultHash);
    }
    if (message.notes !== "") {
      writer.uint32(90).string(message.notes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HealOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healOpId = reader.uint64();
          break;
        case 2:
          message.ticketId = reader.string();
          break;
        case 3:
          message.scheduledEpochId = reader.uint64();
          break;
        case 4:
          message.healerSupernodeAccount = reader.string();
          break;
        case 5:
          message.verifierSupernodeAccounts.push(reader.string());
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.createdHeight = reader.uint64();
          break;
        case 8:
          message.updatedHeight = reader.uint64();
          break;
        case 9:
          message.deadlineEpochId = reader.uint64();
          break;
        case 10:
          message.resultHash = reader.string();
          break;
        case 11:
          message.notes = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HealOp>): HealOp {
    const message = createBaseHealOp();
    message.healOpId = object.healOpId !== undefined && object.healOpId !== null ? BigInt(object.healOpId.toString()) : BigInt(0);
    message.ticketId = object.ticketId ?? "";
    message.scheduledEpochId = object.scheduledEpochId !== undefined && object.scheduledEpochId !== null ? BigInt(object.scheduledEpochId.toString()) : BigInt(0);
    message.healerSupernodeAccount = object.healerSupernodeAccount ?? "";
    message.verifierSupernodeAccounts = object.verifierSupernodeAccounts?.map(e => e) || [];
    message.status = object.status ?? 0;
    message.createdHeight = object.createdHeight !== undefined && object.createdHeight !== null ? BigInt(object.createdHeight.toString()) : BigInt(0);
    message.updatedHeight = object.updatedHeight !== undefined && object.updatedHeight !== null ? BigInt(object.updatedHeight.toString()) : BigInt(0);
    message.deadlineEpochId = object.deadlineEpochId !== undefined && object.deadlineEpochId !== null ? BigInt(object.deadlineEpochId.toString()) : BigInt(0);
    message.resultHash = object.resultHash ?? "";
    message.notes = object.notes ?? "";
    return message;
  },
  fromAmino(object: HealOpAmino): HealOp {
    const message = createBaseHealOp();
    if (object.heal_op_id !== undefined && object.heal_op_id !== null) {
      message.healOpId = BigInt(object.heal_op_id);
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.scheduled_epoch_id !== undefined && object.scheduled_epoch_id !== null) {
      message.scheduledEpochId = BigInt(object.scheduled_epoch_id);
    }
    if (object.healer_supernode_account !== undefined && object.healer_supernode_account !== null) {
      message.healerSupernodeAccount = object.healer_supernode_account;
    }
    message.verifierSupernodeAccounts = object.verifier_supernode_accounts?.map(e => e) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.created_height !== undefined && object.created_height !== null) {
      message.createdHeight = BigInt(object.created_height);
    }
    if (object.updated_height !== undefined && object.updated_height !== null) {
      message.updatedHeight = BigInt(object.updated_height);
    }
    if (object.deadline_epoch_id !== undefined && object.deadline_epoch_id !== null) {
      message.deadlineEpochId = BigInt(object.deadline_epoch_id);
    }
    if (object.result_hash !== undefined && object.result_hash !== null) {
      message.resultHash = object.result_hash;
    }
    if (object.notes !== undefined && object.notes !== null) {
      message.notes = object.notes;
    }
    return message;
  },
  toAmino(message: HealOp): HealOpAmino {
    const obj: any = {};
    obj.heal_op_id = message.healOpId !== BigInt(0) ? message.healOpId?.toString() : undefined;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.scheduled_epoch_id = message.scheduledEpochId !== BigInt(0) ? message.scheduledEpochId?.toString() : undefined;
    obj.healer_supernode_account = message.healerSupernodeAccount === "" ? undefined : message.healerSupernodeAccount;
    if (message.verifierSupernodeAccounts) {
      obj.verifier_supernode_accounts = message.verifierSupernodeAccounts.map(e => e);
    } else {
      obj.verifier_supernode_accounts = message.verifierSupernodeAccounts;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.created_height = message.createdHeight !== BigInt(0) ? message.createdHeight?.toString() : undefined;
    obj.updated_height = message.updatedHeight !== BigInt(0) ? message.updatedHeight?.toString() : undefined;
    obj.deadline_epoch_id = message.deadlineEpochId !== BigInt(0) ? message.deadlineEpochId?.toString() : undefined;
    obj.result_hash = message.resultHash === "" ? undefined : message.resultHash;
    obj.notes = message.notes === "" ? undefined : message.notes;
    return obj;
  },
  fromAminoMsg(object: HealOpAminoMsg): HealOp {
    return HealOp.fromAmino(object.value);
  },
  fromProtoMsg(message: HealOpProtoMsg): HealOp {
    return HealOp.decode(message.value);
  },
  toProto(message: HealOp): Uint8Array {
    return HealOp.encode(message).finish();
  },
  toProtoMsg(message: HealOp): HealOpProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.HealOp",
      value: HealOp.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEpochReport(): EpochReport {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    reportHeight: BigInt(0),
    hostReport: HostReport.fromPartial({}),
    storageChallengeObservations: [],
    storageProofResults: []
  };
}
/**
 * EpochReport is a single per-epoch report submitted by a Supernode.
 * @name EpochReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.EpochReport
 */
export const EpochReport = {
  typeUrl: "/lumera.audit.v1.EpochReport",
  is(o: any): o is EpochReport {
    return o && (o.$typeUrl === EpochReport.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.reportHeight === "bigint" && HostReport.is(o.hostReport) && Array.isArray(o.storageChallengeObservations) && (!o.storageChallengeObservations.length || StorageChallengeObservation.is(o.storageChallengeObservations[0])) && Array.isArray(o.storageProofResults) && (!o.storageProofResults.length || StorageProofResult.is(o.storageProofResults[0])));
  },
  isAmino(o: any): o is EpochReportAmino {
    return o && (o.$typeUrl === EpochReport.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.report_height === "bigint" && HostReport.isAmino(o.host_report) && Array.isArray(o.storage_challenge_observations) && (!o.storage_challenge_observations.length || StorageChallengeObservation.isAmino(o.storage_challenge_observations[0])) && Array.isArray(o.storage_proof_results) && (!o.storage_proof_results.length || StorageProofResult.isAmino(o.storage_proof_results[0])));
  },
  encode(message: EpochReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.reportHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.reportHeight);
    }
    if (message.hostReport !== undefined) {
      HostReport.encode(message.hostReport, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.storageChallengeObservations) {
      StorageChallengeObservation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.storageProofResults) {
      StorageProofResult.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodeAccount = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        case 3:
          message.reportHeight = reader.int64();
          break;
        case 4:
          message.hostReport = HostReport.decode(reader, reader.uint32());
          break;
        case 5:
          message.storageChallengeObservations.push(StorageChallengeObservation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.storageProofResults.push(StorageProofResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EpochReport>): EpochReport {
    const message = createBaseEpochReport();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.reportHeight = object.reportHeight !== undefined && object.reportHeight !== null ? BigInt(object.reportHeight.toString()) : BigInt(0);
    message.hostReport = object.hostReport !== undefined && object.hostReport !== null ? HostReport.fromPartial(object.hostReport) : undefined;
    message.storageChallengeObservations = object.storageChallengeObservations?.map(e => StorageChallengeObservation.fromPartial(e)) || [];
    message.storageProofResults = object.storageProofResults?.map(e => StorageProofResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EpochReportAmino): EpochReport {
    const message = createBaseEpochReport();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.report_height !== undefined && object.report_height !== null) {
      message.reportHeight = BigInt(object.report_height);
    }
    if (object.host_report !== undefined && object.host_report !== null) {
      message.hostReport = HostReport.fromAmino(object.host_report);
    }
    message.storageChallengeObservations = object.storage_challenge_observations?.map(e => StorageChallengeObservation.fromAmino(e)) || [];
    message.storageProofResults = object.storage_proof_results?.map(e => StorageProofResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EpochReport): EpochReportAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.report_height = message.reportHeight !== BigInt(0) ? message.reportHeight?.toString() : undefined;
    obj.host_report = message.hostReport ? HostReport.toAmino(message.hostReport) : undefined;
    if (message.storageChallengeObservations) {
      obj.storage_challenge_observations = message.storageChallengeObservations.map(e => e ? StorageChallengeObservation.toAmino(e) : undefined);
    } else {
      obj.storage_challenge_observations = message.storageChallengeObservations;
    }
    if (message.storageProofResults) {
      obj.storage_proof_results = message.storageProofResults.map(e => e ? StorageProofResult.toAmino(e) : undefined);
    } else {
      obj.storage_proof_results = message.storageProofResults;
    }
    return obj;
  },
  fromAminoMsg(object: EpochReportAminoMsg): EpochReport {
    return EpochReport.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochReportProtoMsg): EpochReport {
    return EpochReport.decode(message.value);
  },
  toProto(message: EpochReport): Uint8Array {
    return EpochReport.encode(message).finish();
  },
  toProtoMsg(message: EpochReport): EpochReportProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.EpochReport",
      value: EpochReport.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EpochReport.typeUrl)) {
      return;
    }
    HostReport.registerTypeUrl();
    StorageChallengeObservation.registerTypeUrl();
    StorageProofResult.registerTypeUrl();
  }
};