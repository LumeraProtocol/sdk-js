// @ts-nocheck
/* eslint-disable */
import { isSet, DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
export enum StorageTruthEnforcementMode {
  STORAGE_TRUTH_ENFORCEMENT_MODE_UNSPECIFIED = 0,
  STORAGE_TRUTH_ENFORCEMENT_MODE_SHADOW = 1,
  STORAGE_TRUTH_ENFORCEMENT_MODE_SOFT = 2,
  STORAGE_TRUTH_ENFORCEMENT_MODE_FULL = 3,
  UNRECOGNIZED = -1,
}
export const StorageTruthEnforcementModeAmino = StorageTruthEnforcementMode;
export function storageTruthEnforcementModeFromJSON(object: any): StorageTruthEnforcementMode {
  switch (object) {
    case 0:
    case "STORAGE_TRUTH_ENFORCEMENT_MODE_UNSPECIFIED":
      return StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_UNSPECIFIED;
    case 1:
    case "STORAGE_TRUTH_ENFORCEMENT_MODE_SHADOW":
      return StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_SHADOW;
    case 2:
    case "STORAGE_TRUTH_ENFORCEMENT_MODE_SOFT":
      return StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_SOFT;
    case 3:
    case "STORAGE_TRUTH_ENFORCEMENT_MODE_FULL":
      return StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StorageTruthEnforcementMode.UNRECOGNIZED;
  }
}
export function storageTruthEnforcementModeToJSON(object: StorageTruthEnforcementMode): string {
  switch (object) {
    case StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_UNSPECIFIED:
      return "STORAGE_TRUTH_ENFORCEMENT_MODE_UNSPECIFIED";
    case StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_SHADOW:
      return "STORAGE_TRUTH_ENFORCEMENT_MODE_SHADOW";
    case StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_SOFT:
      return "STORAGE_TRUTH_ENFORCEMENT_MODE_SOFT";
    case StorageTruthEnforcementMode.STORAGE_TRUTH_ENFORCEMENT_MODE_FULL:
      return "STORAGE_TRUTH_ENFORCEMENT_MODE_FULL";
    case StorageTruthEnforcementMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Params defines the parameters for the audit module.
 * @name Params
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.Params
 */
export interface Params {
  epochLengthBlocks: bigint;
  /**
   * epoch_zero_height defines the reference chain height at which epoch_id = 0 starts.
   * This makes epoch boundaries deterministic from genesis without needing to query state.
   */
  epochZeroHeight: bigint;
  peerQuorumReports: number;
  minProbeTargetsPerEpoch: number;
  maxProbeTargetsPerEpoch: number;
  requiredOpenPorts: number[];
  /**
   * Minimum required host free capacity (self reported).
   * free% = 100 - usage%
   * A usage% of 0 is treated as "unknown" (no action).
   */
  minCpuFreePercent: number;
  minMemFreePercent: number;
  minDiskFreePercent: number;
  /**
   * Number of consecutive epochs a required port must be reported CLOSED by peers
   * at or above peer_port_postpone_threshold_percent before postponing the supernode.
   */
  consecutiveEpochsToPostpone: number;
  /**
   * How many completed epochs to keep in state for epoch-scoped data like EpochReport
   * and related indices. Pruning runs at epoch end.
   */
  keepLastEpochEntries: bigint;
  /**
   * Minimum percent (1-100) of peer reports that must report a required port as CLOSED
   * for the port to be treated as CLOSED for postponement purposes.
   * 
   * 100 means unanimous.
   * Example: to approximate a 2/3 threshold, use 66 (since 2/3 ≈ 66.6%).
   */
  peerPortPostponeThresholdPercent: number;
  /**
   * action_finalization_signature_failure_evidences_per_epoch is the per-epoch count threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE.
   */
  actionFinalizationSignatureFailureEvidencesPerEpoch: number;
  /**
   * action_finalization_signature_failure_consecutive_epochs is the consecutive epochs threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE.
   */
  actionFinalizationSignatureFailureConsecutiveEpochs: number;
  /**
   * action_finalization_not_in_top10_evidences_per_epoch is the per-epoch count threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10.
   */
  actionFinalizationNotInTop10EvidencesPerEpoch: number;
  /**
   * action_finalization_not_in_top10_consecutive_epochs is the consecutive epochs threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10.
   */
  actionFinalizationNotInTop10ConsecutiveEpochs: number;
  /**
   * action_finalization_recovery_epochs is the number of epochs to wait before considering recovery.
   */
  actionFinalizationRecoveryEpochs: number;
  /**
   * action_finalization_recovery_max_total_bad_evidences is the maximum allowed total count of bad
   * action-finalization evidences in the recovery epoch-span for auto-recovery to occur.
   * Recovery happens ONLY IF total_bad < this value.
   */
  actionFinalizationRecoveryMaxTotalBadEvidences: number;
  /**
   * Storage Challenge (SC) params.
   */
  scEnabled: boolean;
  scChallengersPerEpoch: number;
  /**
   * Storage-truth challenge shape params.
   */
  storageTruthRecentBucketMaxBlocks: bigint;
  storageTruthOldBucketMinBlocks: bigint;
  storageTruthChallengeTargetDivisor: number;
  storageTruthCompoundRangesPerArtifact: number;
  storageTruthCompoundRangeLenBytes: number;
  /**
   * Storage-truth scoring and healing params.
   */
  storageTruthMaxSelfHealOpsPerEpoch: number;
  storageTruthProbationEpochs: number;
  storageTruthNodeSuspicionDecayPerEpoch: bigint;
  storageTruthReporterReliabilityDecayPerEpoch: bigint;
  storageTruthTicketDeteriorationDecayPerEpoch: bigint;
  storageTruthNodeSuspicionThresholdWatch: bigint;
  storageTruthNodeSuspicionThresholdProbation: bigint;
  storageTruthNodeSuspicionThresholdPostpone: bigint;
  storageTruthReporterReliabilityLowTrustThreshold: bigint;
  storageTruthReporterReliabilityIneligibleThreshold: bigint;
  storageTruthTicketDeteriorationHealThreshold: bigint;
  /**
   * Storage-truth rollout gate.
   */
  storageTruthEnforcementMode: StorageTruthEnforcementMode;
  /**
   * New LEP-6 spec-alignment params.
   * Reporter reliability degraded threshold (positive-penalty model).
   */
  storageTruthReporterReliabilityDegradedThreshold: bigint;
  /**
   * Pattern escalation window in epochs (default 14).
   */
  storageTruthPatternEscalationWindow: number;
  /**
   * Statistical divergence scoring params.
   */
  storageTruthDivergenceWindowEpochs: number;
  storageTruthReporterMinReportsForDivergence: number;
  /**
   * Strong-postpone threshold (default 140).
   */
  storageTruthNodeSuspicionThresholdStrongPostpone: bigint;
  /**
   * Recovery requires this many clean passes (default 3).
   */
  storageTruthRecoveryCleanPassCount: number;
  /**
   * Class A and B fault windows.
   */
  storageTruthClassAFaultWindow: number;
  storageTruthClassBFaultWindow: number;
  /**
   * Heal deadline in epochs (default 3).
   */
  storageTruthHealDeadlineEpochs: number;
  /**
   * OLD Class-A distinct-ticket window in epochs (default 21).
   */
  storageTruthOldClassAFaultWindow: number;
  /**
   * Contradiction confirmation window in epochs (default 7).
   */
  storageTruthContradictionWindowEpochs: number;
  /**
   * Reporter challenger ineligibility duration in epochs (default 7).
   */
  storageTruthReporterIneligibleDurationEpochs: number;
  /**
   * Strong-band recovery clean-pass requirement (F121-F12, default 5).
   */
  storageTruthStrongRecoveryCleanPassCount: number;
  /**
   * Number of verifier supernodes assigned per heal-op (NEW-B-3, default 2).
   * Verifiers cross-check the healer's recovery; making this a Param allows
   * governance to tune redundancy if heal volume / failure rate shifts.
   */
  storageTruthHealVerifierCount: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/lumera.audit.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the audit module.
 * @name ParamsAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.Params
 */
export interface ParamsAmino {
  epoch_length_blocks: string;
  /**
   * epoch_zero_height defines the reference chain height at which epoch_id = 0 starts.
   * This makes epoch boundaries deterministic from genesis without needing to query state.
   */
  epoch_zero_height: string;
  peer_quorum_reports: number;
  min_probe_targets_per_epoch: number;
  max_probe_targets_per_epoch: number;
  required_open_ports: number[];
  /**
   * Minimum required host free capacity (self reported).
   * free% = 100 - usage%
   * A usage% of 0 is treated as "unknown" (no action).
   */
  min_cpu_free_percent: number;
  min_mem_free_percent: number;
  min_disk_free_percent: number;
  /**
   * Number of consecutive epochs a required port must be reported CLOSED by peers
   * at or above peer_port_postpone_threshold_percent before postponing the supernode.
   */
  consecutive_epochs_to_postpone: number;
  /**
   * How many completed epochs to keep in state for epoch-scoped data like EpochReport
   * and related indices. Pruning runs at epoch end.
   */
  keep_last_epoch_entries: string;
  /**
   * Minimum percent (1-100) of peer reports that must report a required port as CLOSED
   * for the port to be treated as CLOSED for postponement purposes.
   * 
   * 100 means unanimous.
   * Example: to approximate a 2/3 threshold, use 66 (since 2/3 ≈ 66.6%).
   */
  peer_port_postpone_threshold_percent: number;
  /**
   * action_finalization_signature_failure_evidences_per_epoch is the per-epoch count threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE.
   */
  action_finalization_signature_failure_evidences_per_epoch: number;
  /**
   * action_finalization_signature_failure_consecutive_epochs is the consecutive epochs threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_SIGNATURE_FAILURE.
   */
  action_finalization_signature_failure_consecutive_epochs: number;
  /**
   * action_finalization_not_in_top10_evidences_per_epoch is the per-epoch count threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10.
   */
  action_finalization_not_in_top10_evidences_per_epoch: number;
  /**
   * action_finalization_not_in_top10_consecutive_epochs is the consecutive epochs threshold
   * for EVIDENCE_TYPE_ACTION_FINALIZATION_NOT_IN_TOP_10.
   */
  action_finalization_not_in_top10_consecutive_epochs: number;
  /**
   * action_finalization_recovery_epochs is the number of epochs to wait before considering recovery.
   */
  action_finalization_recovery_epochs: number;
  /**
   * action_finalization_recovery_max_total_bad_evidences is the maximum allowed total count of bad
   * action-finalization evidences in the recovery epoch-span for auto-recovery to occur.
   * Recovery happens ONLY IF total_bad < this value.
   */
  action_finalization_recovery_max_total_bad_evidences: number;
  /**
   * Storage Challenge (SC) params.
   */
  sc_enabled: boolean;
  sc_challengers_per_epoch: number;
  /**
   * Storage-truth challenge shape params.
   */
  storage_truth_recent_bucket_max_blocks: string;
  storage_truth_old_bucket_min_blocks: string;
  storage_truth_challenge_target_divisor: number;
  storage_truth_compound_ranges_per_artifact: number;
  storage_truth_compound_range_len_bytes: number;
  /**
   * Storage-truth scoring and healing params.
   */
  storage_truth_max_self_heal_ops_per_epoch: number;
  storage_truth_probation_epochs: number;
  storage_truth_node_suspicion_decay_per_epoch: string;
  storage_truth_reporter_reliability_decay_per_epoch: string;
  storage_truth_ticket_deterioration_decay_per_epoch: string;
  storage_truth_node_suspicion_threshold_watch: string;
  storage_truth_node_suspicion_threshold_probation: string;
  storage_truth_node_suspicion_threshold_postpone: string;
  storage_truth_reporter_reliability_low_trust_threshold: string;
  storage_truth_reporter_reliability_ineligible_threshold: string;
  storage_truth_ticket_deterioration_heal_threshold: string;
  /**
   * Storage-truth rollout gate.
   */
  storage_truth_enforcement_mode: StorageTruthEnforcementMode;
  /**
   * New LEP-6 spec-alignment params.
   * Reporter reliability degraded threshold (positive-penalty model).
   */
  storage_truth_reporter_reliability_degraded_threshold: string;
  /**
   * Pattern escalation window in epochs (default 14).
   */
  storage_truth_pattern_escalation_window: number;
  /**
   * Statistical divergence scoring params.
   */
  storage_truth_divergence_window_epochs: number;
  storage_truth_reporter_min_reports_for_divergence: number;
  /**
   * Strong-postpone threshold (default 140).
   */
  storage_truth_node_suspicion_threshold_strong_postpone: string;
  /**
   * Recovery requires this many clean passes (default 3).
   */
  storage_truth_recovery_clean_pass_count: number;
  /**
   * Class A and B fault windows.
   */
  storage_truth_class_a_fault_window: number;
  storage_truth_class_b_fault_window: number;
  /**
   * Heal deadline in epochs (default 3).
   */
  storage_truth_heal_deadline_epochs: number;
  /**
   * OLD Class-A distinct-ticket window in epochs (default 21).
   */
  storage_truth_old_class_a_fault_window: number;
  /**
   * Contradiction confirmation window in epochs (default 7).
   */
  storage_truth_contradiction_window_epochs: number;
  /**
   * Reporter challenger ineligibility duration in epochs (default 7).
   */
  storage_truth_reporter_ineligible_duration_epochs: number;
  /**
   * Strong-band recovery clean-pass requirement (F121-F12, default 5).
   */
  storage_truth_strong_recovery_clean_pass_count: number;
  /**
   * Number of verifier supernodes assigned per heal-op (NEW-B-3, default 2).
   * Verifiers cross-check the healer's recovery; making this a Param allows
   * governance to tune redundancy if heal volume / failure rate shifts.
   */
  storage_truth_heal_verifier_count: number;
}
export interface ParamsAminoMsg {
  type: "/lumera.audit.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    epochLengthBlocks: BigInt(0),
    epochZeroHeight: BigInt(0),
    peerQuorumReports: 0,
    minProbeTargetsPerEpoch: 0,
    maxProbeTargetsPerEpoch: 0,
    requiredOpenPorts: [],
    minCpuFreePercent: 0,
    minMemFreePercent: 0,
    minDiskFreePercent: 0,
    consecutiveEpochsToPostpone: 0,
    keepLastEpochEntries: BigInt(0),
    peerPortPostponeThresholdPercent: 0,
    actionFinalizationSignatureFailureEvidencesPerEpoch: 0,
    actionFinalizationSignatureFailureConsecutiveEpochs: 0,
    actionFinalizationNotInTop10EvidencesPerEpoch: 0,
    actionFinalizationNotInTop10ConsecutiveEpochs: 0,
    actionFinalizationRecoveryEpochs: 0,
    actionFinalizationRecoveryMaxTotalBadEvidences: 0,
    scEnabled: false,
    scChallengersPerEpoch: 0,
    storageTruthRecentBucketMaxBlocks: BigInt(0),
    storageTruthOldBucketMinBlocks: BigInt(0),
    storageTruthChallengeTargetDivisor: 0,
    storageTruthCompoundRangesPerArtifact: 0,
    storageTruthCompoundRangeLenBytes: 0,
    storageTruthMaxSelfHealOpsPerEpoch: 0,
    storageTruthProbationEpochs: 0,
    storageTruthNodeSuspicionDecayPerEpoch: BigInt(0),
    storageTruthReporterReliabilityDecayPerEpoch: BigInt(0),
    storageTruthTicketDeteriorationDecayPerEpoch: BigInt(0),
    storageTruthNodeSuspicionThresholdWatch: BigInt(0),
    storageTruthNodeSuspicionThresholdProbation: BigInt(0),
    storageTruthNodeSuspicionThresholdPostpone: BigInt(0),
    storageTruthReporterReliabilityLowTrustThreshold: BigInt(0),
    storageTruthReporterReliabilityIneligibleThreshold: BigInt(0),
    storageTruthTicketDeteriorationHealThreshold: BigInt(0),
    storageTruthEnforcementMode: 0,
    storageTruthReporterReliabilityDegradedThreshold: BigInt(0),
    storageTruthPatternEscalationWindow: 0,
    storageTruthDivergenceWindowEpochs: 0,
    storageTruthReporterMinReportsForDivergence: 0,
    storageTruthNodeSuspicionThresholdStrongPostpone: BigInt(0),
    storageTruthRecoveryCleanPassCount: 0,
    storageTruthClassAFaultWindow: 0,
    storageTruthClassBFaultWindow: 0,
    storageTruthHealDeadlineEpochs: 0,
    storageTruthOldClassAFaultWindow: 0,
    storageTruthContradictionWindowEpochs: 0,
    storageTruthReporterIneligibleDurationEpochs: 0,
    storageTruthStrongRecoveryCleanPassCount: 0,
    storageTruthHealVerifierCount: 0
  };
}
/**
 * Params defines the parameters for the audit module.
 * @name Params
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.Params
 */
export const Params = {
  typeUrl: "/lumera.audit.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epochLengthBlocks === "bigint" && typeof o.epochZeroHeight === "bigint" && typeof o.peerQuorumReports === "number" && typeof o.minProbeTargetsPerEpoch === "number" && typeof o.maxProbeTargetsPerEpoch === "number" && Array.isArray(o.requiredOpenPorts) && (!o.requiredOpenPorts.length || typeof o.requiredOpenPorts[0] === "number") && typeof o.minCpuFreePercent === "number" && typeof o.minMemFreePercent === "number" && typeof o.minDiskFreePercent === "number" && typeof o.consecutiveEpochsToPostpone === "number" && typeof o.keepLastEpochEntries === "bigint" && typeof o.peerPortPostponeThresholdPercent === "number" && typeof o.actionFinalizationSignatureFailureEvidencesPerEpoch === "number" && typeof o.actionFinalizationSignatureFailureConsecutiveEpochs === "number" && typeof o.actionFinalizationNotInTop10EvidencesPerEpoch === "number" && typeof o.actionFinalizationNotInTop10ConsecutiveEpochs === "number" && typeof o.actionFinalizationRecoveryEpochs === "number" && typeof o.actionFinalizationRecoveryMaxTotalBadEvidences === "number" && typeof o.scEnabled === "boolean" && typeof o.scChallengersPerEpoch === "number" && typeof o.storageTruthRecentBucketMaxBlocks === "bigint" && typeof o.storageTruthOldBucketMinBlocks === "bigint" && typeof o.storageTruthChallengeTargetDivisor === "number" && typeof o.storageTruthCompoundRangesPerArtifact === "number" && typeof o.storageTruthCompoundRangeLenBytes === "number" && typeof o.storageTruthMaxSelfHealOpsPerEpoch === "number" && typeof o.storageTruthProbationEpochs === "number" && typeof o.storageTruthNodeSuspicionDecayPerEpoch === "bigint" && typeof o.storageTruthReporterReliabilityDecayPerEpoch === "bigint" && typeof o.storageTruthTicketDeteriorationDecayPerEpoch === "bigint" && typeof o.storageTruthNodeSuspicionThresholdWatch === "bigint" && typeof o.storageTruthNodeSuspicionThresholdProbation === "bigint" && typeof o.storageTruthNodeSuspicionThresholdPostpone === "bigint" && typeof o.storageTruthReporterReliabilityLowTrustThreshold === "bigint" && typeof o.storageTruthReporterReliabilityIneligibleThreshold === "bigint" && typeof o.storageTruthTicketDeteriorationHealThreshold === "bigint" && isSet(o.storageTruthEnforcementMode) && typeof o.storageTruthReporterReliabilityDegradedThreshold === "bigint" && typeof o.storageTruthPatternEscalationWindow === "number" && typeof o.storageTruthDivergenceWindowEpochs === "number" && typeof o.storageTruthReporterMinReportsForDivergence === "number" && typeof o.storageTruthNodeSuspicionThresholdStrongPostpone === "bigint" && typeof o.storageTruthRecoveryCleanPassCount === "number" && typeof o.storageTruthClassAFaultWindow === "number" && typeof o.storageTruthClassBFaultWindow === "number" && typeof o.storageTruthHealDeadlineEpochs === "number" && typeof o.storageTruthOldClassAFaultWindow === "number" && typeof o.storageTruthContradictionWindowEpochs === "number" && typeof o.storageTruthReporterIneligibleDurationEpochs === "number" && typeof o.storageTruthStrongRecoveryCleanPassCount === "number" && typeof o.storageTruthHealVerifierCount === "number");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.epoch_length_blocks === "bigint" && typeof o.epoch_zero_height === "bigint" && typeof o.peer_quorum_reports === "number" && typeof o.min_probe_targets_per_epoch === "number" && typeof o.max_probe_targets_per_epoch === "number" && Array.isArray(o.required_open_ports) && (!o.required_open_ports.length || typeof o.required_open_ports[0] === "number") && typeof o.min_cpu_free_percent === "number" && typeof o.min_mem_free_percent === "number" && typeof o.min_disk_free_percent === "number" && typeof o.consecutive_epochs_to_postpone === "number" && typeof o.keep_last_epoch_entries === "bigint" && typeof o.peer_port_postpone_threshold_percent === "number" && typeof o.action_finalization_signature_failure_evidences_per_epoch === "number" && typeof o.action_finalization_signature_failure_consecutive_epochs === "number" && typeof o.action_finalization_not_in_top10_evidences_per_epoch === "number" && typeof o.action_finalization_not_in_top10_consecutive_epochs === "number" && typeof o.action_finalization_recovery_epochs === "number" && typeof o.action_finalization_recovery_max_total_bad_evidences === "number" && typeof o.sc_enabled === "boolean" && typeof o.sc_challengers_per_epoch === "number" && typeof o.storage_truth_recent_bucket_max_blocks === "bigint" && typeof o.storage_truth_old_bucket_min_blocks === "bigint" && typeof o.storage_truth_challenge_target_divisor === "number" && typeof o.storage_truth_compound_ranges_per_artifact === "number" && typeof o.storage_truth_compound_range_len_bytes === "number" && typeof o.storage_truth_max_self_heal_ops_per_epoch === "number" && typeof o.storage_truth_probation_epochs === "number" && typeof o.storage_truth_node_suspicion_decay_per_epoch === "bigint" && typeof o.storage_truth_reporter_reliability_decay_per_epoch === "bigint" && typeof o.storage_truth_ticket_deterioration_decay_per_epoch === "bigint" && typeof o.storage_truth_node_suspicion_threshold_watch === "bigint" && typeof o.storage_truth_node_suspicion_threshold_probation === "bigint" && typeof o.storage_truth_node_suspicion_threshold_postpone === "bigint" && typeof o.storage_truth_reporter_reliability_low_trust_threshold === "bigint" && typeof o.storage_truth_reporter_reliability_ineligible_threshold === "bigint" && typeof o.storage_truth_ticket_deterioration_heal_threshold === "bigint" && isSet(o.storage_truth_enforcement_mode) && typeof o.storage_truth_reporter_reliability_degraded_threshold === "bigint" && typeof o.storage_truth_pattern_escalation_window === "number" && typeof o.storage_truth_divergence_window_epochs === "number" && typeof o.storage_truth_reporter_min_reports_for_divergence === "number" && typeof o.storage_truth_node_suspicion_threshold_strong_postpone === "bigint" && typeof o.storage_truth_recovery_clean_pass_count === "number" && typeof o.storage_truth_class_a_fault_window === "number" && typeof o.storage_truth_class_b_fault_window === "number" && typeof o.storage_truth_heal_deadline_epochs === "number" && typeof o.storage_truth_old_class_a_fault_window === "number" && typeof o.storage_truth_contradiction_window_epochs === "number" && typeof o.storage_truth_reporter_ineligible_duration_epochs === "number" && typeof o.storage_truth_strong_recovery_clean_pass_count === "number" && typeof o.storage_truth_heal_verifier_count === "number");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochLengthBlocks !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochLengthBlocks);
    }
    if (message.epochZeroHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochZeroHeight);
    }
    if (message.peerQuorumReports !== 0) {
      writer.uint32(24).uint32(message.peerQuorumReports);
    }
    if (message.minProbeTargetsPerEpoch !== 0) {
      writer.uint32(32).uint32(message.minProbeTargetsPerEpoch);
    }
    if (message.maxProbeTargetsPerEpoch !== 0) {
      writer.uint32(40).uint32(message.maxProbeTargetsPerEpoch);
    }
    writer.uint32(50).fork();
    for (const v of message.requiredOpenPorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.minCpuFreePercent !== 0) {
      writer.uint32(56).uint32(message.minCpuFreePercent);
    }
    if (message.minMemFreePercent !== 0) {
      writer.uint32(64).uint32(message.minMemFreePercent);
    }
    if (message.minDiskFreePercent !== 0) {
      writer.uint32(72).uint32(message.minDiskFreePercent);
    }
    if (message.consecutiveEpochsToPostpone !== 0) {
      writer.uint32(80).uint32(message.consecutiveEpochsToPostpone);
    }
    if (message.keepLastEpochEntries !== BigInt(0)) {
      writer.uint32(88).uint64(message.keepLastEpochEntries);
    }
    if (message.peerPortPostponeThresholdPercent !== 0) {
      writer.uint32(96).uint32(message.peerPortPostponeThresholdPercent);
    }
    if (message.actionFinalizationSignatureFailureEvidencesPerEpoch !== 0) {
      writer.uint32(104).uint32(message.actionFinalizationSignatureFailureEvidencesPerEpoch);
    }
    if (message.actionFinalizationSignatureFailureConsecutiveEpochs !== 0) {
      writer.uint32(112).uint32(message.actionFinalizationSignatureFailureConsecutiveEpochs);
    }
    if (message.actionFinalizationNotInTop10EvidencesPerEpoch !== 0) {
      writer.uint32(120).uint32(message.actionFinalizationNotInTop10EvidencesPerEpoch);
    }
    if (message.actionFinalizationNotInTop10ConsecutiveEpochs !== 0) {
      writer.uint32(128).uint32(message.actionFinalizationNotInTop10ConsecutiveEpochs);
    }
    if (message.actionFinalizationRecoveryEpochs !== 0) {
      writer.uint32(136).uint32(message.actionFinalizationRecoveryEpochs);
    }
    if (message.actionFinalizationRecoveryMaxTotalBadEvidences !== 0) {
      writer.uint32(144).uint32(message.actionFinalizationRecoveryMaxTotalBadEvidences);
    }
    if (message.scEnabled === true) {
      writer.uint32(152).bool(message.scEnabled);
    }
    if (message.scChallengersPerEpoch !== 0) {
      writer.uint32(160).uint32(message.scChallengersPerEpoch);
    }
    if (message.storageTruthRecentBucketMaxBlocks !== BigInt(0)) {
      writer.uint32(168).uint64(message.storageTruthRecentBucketMaxBlocks);
    }
    if (message.storageTruthOldBucketMinBlocks !== BigInt(0)) {
      writer.uint32(176).uint64(message.storageTruthOldBucketMinBlocks);
    }
    if (message.storageTruthChallengeTargetDivisor !== 0) {
      writer.uint32(184).uint32(message.storageTruthChallengeTargetDivisor);
    }
    if (message.storageTruthCompoundRangesPerArtifact !== 0) {
      writer.uint32(192).uint32(message.storageTruthCompoundRangesPerArtifact);
    }
    if (message.storageTruthCompoundRangeLenBytes !== 0) {
      writer.uint32(200).uint32(message.storageTruthCompoundRangeLenBytes);
    }
    if (message.storageTruthMaxSelfHealOpsPerEpoch !== 0) {
      writer.uint32(208).uint32(message.storageTruthMaxSelfHealOpsPerEpoch);
    }
    if (message.storageTruthProbationEpochs !== 0) {
      writer.uint32(216).uint32(message.storageTruthProbationEpochs);
    }
    if (message.storageTruthNodeSuspicionDecayPerEpoch !== BigInt(0)) {
      writer.uint32(224).int64(message.storageTruthNodeSuspicionDecayPerEpoch);
    }
    if (message.storageTruthReporterReliabilityDecayPerEpoch !== BigInt(0)) {
      writer.uint32(232).int64(message.storageTruthReporterReliabilityDecayPerEpoch);
    }
    if (message.storageTruthTicketDeteriorationDecayPerEpoch !== BigInt(0)) {
      writer.uint32(240).int64(message.storageTruthTicketDeteriorationDecayPerEpoch);
    }
    if (message.storageTruthNodeSuspicionThresholdWatch !== BigInt(0)) {
      writer.uint32(248).int64(message.storageTruthNodeSuspicionThresholdWatch);
    }
    if (message.storageTruthNodeSuspicionThresholdProbation !== BigInt(0)) {
      writer.uint32(256).int64(message.storageTruthNodeSuspicionThresholdProbation);
    }
    if (message.storageTruthNodeSuspicionThresholdPostpone !== BigInt(0)) {
      writer.uint32(264).int64(message.storageTruthNodeSuspicionThresholdPostpone);
    }
    if (message.storageTruthReporterReliabilityLowTrustThreshold !== BigInt(0)) {
      writer.uint32(272).int64(message.storageTruthReporterReliabilityLowTrustThreshold);
    }
    if (message.storageTruthReporterReliabilityIneligibleThreshold !== BigInt(0)) {
      writer.uint32(280).int64(message.storageTruthReporterReliabilityIneligibleThreshold);
    }
    if (message.storageTruthTicketDeteriorationHealThreshold !== BigInt(0)) {
      writer.uint32(288).int64(message.storageTruthTicketDeteriorationHealThreshold);
    }
    if (message.storageTruthEnforcementMode !== 0) {
      writer.uint32(296).int32(message.storageTruthEnforcementMode);
    }
    if (message.storageTruthReporterReliabilityDegradedThreshold !== BigInt(0)) {
      writer.uint32(304).int64(message.storageTruthReporterReliabilityDegradedThreshold);
    }
    if (message.storageTruthPatternEscalationWindow !== 0) {
      writer.uint32(312).uint32(message.storageTruthPatternEscalationWindow);
    }
    if (message.storageTruthDivergenceWindowEpochs !== 0) {
      writer.uint32(320).uint32(message.storageTruthDivergenceWindowEpochs);
    }
    if (message.storageTruthReporterMinReportsForDivergence !== 0) {
      writer.uint32(328).uint32(message.storageTruthReporterMinReportsForDivergence);
    }
    if (message.storageTruthNodeSuspicionThresholdStrongPostpone !== BigInt(0)) {
      writer.uint32(336).int64(message.storageTruthNodeSuspicionThresholdStrongPostpone);
    }
    if (message.storageTruthRecoveryCleanPassCount !== 0) {
      writer.uint32(344).uint32(message.storageTruthRecoveryCleanPassCount);
    }
    if (message.storageTruthClassAFaultWindow !== 0) {
      writer.uint32(352).uint32(message.storageTruthClassAFaultWindow);
    }
    if (message.storageTruthClassBFaultWindow !== 0) {
      writer.uint32(360).uint32(message.storageTruthClassBFaultWindow);
    }
    if (message.storageTruthHealDeadlineEpochs !== 0) {
      writer.uint32(368).uint32(message.storageTruthHealDeadlineEpochs);
    }
    if (message.storageTruthOldClassAFaultWindow !== 0) {
      writer.uint32(376).uint32(message.storageTruthOldClassAFaultWindow);
    }
    if (message.storageTruthContradictionWindowEpochs !== 0) {
      writer.uint32(384).uint32(message.storageTruthContradictionWindowEpochs);
    }
    if (message.storageTruthReporterIneligibleDurationEpochs !== 0) {
      writer.uint32(392).uint32(message.storageTruthReporterIneligibleDurationEpochs);
    }
    if (message.storageTruthStrongRecoveryCleanPassCount !== 0) {
      writer.uint32(400).uint32(message.storageTruthStrongRecoveryCleanPassCount);
    }
    if (message.storageTruthHealVerifierCount !== 0) {
      writer.uint32(408).uint32(message.storageTruthHealVerifierCount);
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
          message.epochLengthBlocks = reader.uint64();
          break;
        case 2:
          message.epochZeroHeight = reader.uint64();
          break;
        case 3:
          message.peerQuorumReports = reader.uint32();
          break;
        case 4:
          message.minProbeTargetsPerEpoch = reader.uint32();
          break;
        case 5:
          message.maxProbeTargetsPerEpoch = reader.uint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requiredOpenPorts.push(reader.uint32());
            }
          } else {
            message.requiredOpenPorts.push(reader.uint32());
          }
          break;
        case 7:
          message.minCpuFreePercent = reader.uint32();
          break;
        case 8:
          message.minMemFreePercent = reader.uint32();
          break;
        case 9:
          message.minDiskFreePercent = reader.uint32();
          break;
        case 10:
          message.consecutiveEpochsToPostpone = reader.uint32();
          break;
        case 11:
          message.keepLastEpochEntries = reader.uint64();
          break;
        case 12:
          message.peerPortPostponeThresholdPercent = reader.uint32();
          break;
        case 13:
          message.actionFinalizationSignatureFailureEvidencesPerEpoch = reader.uint32();
          break;
        case 14:
          message.actionFinalizationSignatureFailureConsecutiveEpochs = reader.uint32();
          break;
        case 15:
          message.actionFinalizationNotInTop10EvidencesPerEpoch = reader.uint32();
          break;
        case 16:
          message.actionFinalizationNotInTop10ConsecutiveEpochs = reader.uint32();
          break;
        case 17:
          message.actionFinalizationRecoveryEpochs = reader.uint32();
          break;
        case 18:
          message.actionFinalizationRecoveryMaxTotalBadEvidences = reader.uint32();
          break;
        case 19:
          message.scEnabled = reader.bool();
          break;
        case 20:
          message.scChallengersPerEpoch = reader.uint32();
          break;
        case 21:
          message.storageTruthRecentBucketMaxBlocks = reader.uint64();
          break;
        case 22:
          message.storageTruthOldBucketMinBlocks = reader.uint64();
          break;
        case 23:
          message.storageTruthChallengeTargetDivisor = reader.uint32();
          break;
        case 24:
          message.storageTruthCompoundRangesPerArtifact = reader.uint32();
          break;
        case 25:
          message.storageTruthCompoundRangeLenBytes = reader.uint32();
          break;
        case 26:
          message.storageTruthMaxSelfHealOpsPerEpoch = reader.uint32();
          break;
        case 27:
          message.storageTruthProbationEpochs = reader.uint32();
          break;
        case 28:
          message.storageTruthNodeSuspicionDecayPerEpoch = reader.int64();
          break;
        case 29:
          message.storageTruthReporterReliabilityDecayPerEpoch = reader.int64();
          break;
        case 30:
          message.storageTruthTicketDeteriorationDecayPerEpoch = reader.int64();
          break;
        case 31:
          message.storageTruthNodeSuspicionThresholdWatch = reader.int64();
          break;
        case 32:
          message.storageTruthNodeSuspicionThresholdProbation = reader.int64();
          break;
        case 33:
          message.storageTruthNodeSuspicionThresholdPostpone = reader.int64();
          break;
        case 34:
          message.storageTruthReporterReliabilityLowTrustThreshold = reader.int64();
          break;
        case 35:
          message.storageTruthReporterReliabilityIneligibleThreshold = reader.int64();
          break;
        case 36:
          message.storageTruthTicketDeteriorationHealThreshold = reader.int64();
          break;
        case 37:
          message.storageTruthEnforcementMode = reader.int32() as any;
          break;
        case 38:
          message.storageTruthReporterReliabilityDegradedThreshold = reader.int64();
          break;
        case 39:
          message.storageTruthPatternEscalationWindow = reader.uint32();
          break;
        case 40:
          message.storageTruthDivergenceWindowEpochs = reader.uint32();
          break;
        case 41:
          message.storageTruthReporterMinReportsForDivergence = reader.uint32();
          break;
        case 42:
          message.storageTruthNodeSuspicionThresholdStrongPostpone = reader.int64();
          break;
        case 43:
          message.storageTruthRecoveryCleanPassCount = reader.uint32();
          break;
        case 44:
          message.storageTruthClassAFaultWindow = reader.uint32();
          break;
        case 45:
          message.storageTruthClassBFaultWindow = reader.uint32();
          break;
        case 46:
          message.storageTruthHealDeadlineEpochs = reader.uint32();
          break;
        case 47:
          message.storageTruthOldClassAFaultWindow = reader.uint32();
          break;
        case 48:
          message.storageTruthContradictionWindowEpochs = reader.uint32();
          break;
        case 49:
          message.storageTruthReporterIneligibleDurationEpochs = reader.uint32();
          break;
        case 50:
          message.storageTruthStrongRecoveryCleanPassCount = reader.uint32();
          break;
        case 51:
          message.storageTruthHealVerifierCount = reader.uint32();
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
    message.epochLengthBlocks = object.epochLengthBlocks !== undefined && object.epochLengthBlocks !== null ? BigInt(object.epochLengthBlocks.toString()) : BigInt(0);
    message.epochZeroHeight = object.epochZeroHeight !== undefined && object.epochZeroHeight !== null ? BigInt(object.epochZeroHeight.toString()) : BigInt(0);
    message.peerQuorumReports = object.peerQuorumReports ?? 0;
    message.minProbeTargetsPerEpoch = object.minProbeTargetsPerEpoch ?? 0;
    message.maxProbeTargetsPerEpoch = object.maxProbeTargetsPerEpoch ?? 0;
    message.requiredOpenPorts = object.requiredOpenPorts?.map(e => e) || [];
    message.minCpuFreePercent = object.minCpuFreePercent ?? 0;
    message.minMemFreePercent = object.minMemFreePercent ?? 0;
    message.minDiskFreePercent = object.minDiskFreePercent ?? 0;
    message.consecutiveEpochsToPostpone = object.consecutiveEpochsToPostpone ?? 0;
    message.keepLastEpochEntries = object.keepLastEpochEntries !== undefined && object.keepLastEpochEntries !== null ? BigInt(object.keepLastEpochEntries.toString()) : BigInt(0);
    message.peerPortPostponeThresholdPercent = object.peerPortPostponeThresholdPercent ?? 0;
    message.actionFinalizationSignatureFailureEvidencesPerEpoch = object.actionFinalizationSignatureFailureEvidencesPerEpoch ?? 0;
    message.actionFinalizationSignatureFailureConsecutiveEpochs = object.actionFinalizationSignatureFailureConsecutiveEpochs ?? 0;
    message.actionFinalizationNotInTop10EvidencesPerEpoch = object.actionFinalizationNotInTop10EvidencesPerEpoch ?? 0;
    message.actionFinalizationNotInTop10ConsecutiveEpochs = object.actionFinalizationNotInTop10ConsecutiveEpochs ?? 0;
    message.actionFinalizationRecoveryEpochs = object.actionFinalizationRecoveryEpochs ?? 0;
    message.actionFinalizationRecoveryMaxTotalBadEvidences = object.actionFinalizationRecoveryMaxTotalBadEvidences ?? 0;
    message.scEnabled = object.scEnabled ?? false;
    message.scChallengersPerEpoch = object.scChallengersPerEpoch ?? 0;
    message.storageTruthRecentBucketMaxBlocks = object.storageTruthRecentBucketMaxBlocks !== undefined && object.storageTruthRecentBucketMaxBlocks !== null ? BigInt(object.storageTruthRecentBucketMaxBlocks.toString()) : BigInt(0);
    message.storageTruthOldBucketMinBlocks = object.storageTruthOldBucketMinBlocks !== undefined && object.storageTruthOldBucketMinBlocks !== null ? BigInt(object.storageTruthOldBucketMinBlocks.toString()) : BigInt(0);
    message.storageTruthChallengeTargetDivisor = object.storageTruthChallengeTargetDivisor ?? 0;
    message.storageTruthCompoundRangesPerArtifact = object.storageTruthCompoundRangesPerArtifact ?? 0;
    message.storageTruthCompoundRangeLenBytes = object.storageTruthCompoundRangeLenBytes ?? 0;
    message.storageTruthMaxSelfHealOpsPerEpoch = object.storageTruthMaxSelfHealOpsPerEpoch ?? 0;
    message.storageTruthProbationEpochs = object.storageTruthProbationEpochs ?? 0;
    message.storageTruthNodeSuspicionDecayPerEpoch = object.storageTruthNodeSuspicionDecayPerEpoch !== undefined && object.storageTruthNodeSuspicionDecayPerEpoch !== null ? BigInt(object.storageTruthNodeSuspicionDecayPerEpoch.toString()) : BigInt(0);
    message.storageTruthReporterReliabilityDecayPerEpoch = object.storageTruthReporterReliabilityDecayPerEpoch !== undefined && object.storageTruthReporterReliabilityDecayPerEpoch !== null ? BigInt(object.storageTruthReporterReliabilityDecayPerEpoch.toString()) : BigInt(0);
    message.storageTruthTicketDeteriorationDecayPerEpoch = object.storageTruthTicketDeteriorationDecayPerEpoch !== undefined && object.storageTruthTicketDeteriorationDecayPerEpoch !== null ? BigInt(object.storageTruthTicketDeteriorationDecayPerEpoch.toString()) : BigInt(0);
    message.storageTruthNodeSuspicionThresholdWatch = object.storageTruthNodeSuspicionThresholdWatch !== undefined && object.storageTruthNodeSuspicionThresholdWatch !== null ? BigInt(object.storageTruthNodeSuspicionThresholdWatch.toString()) : BigInt(0);
    message.storageTruthNodeSuspicionThresholdProbation = object.storageTruthNodeSuspicionThresholdProbation !== undefined && object.storageTruthNodeSuspicionThresholdProbation !== null ? BigInt(object.storageTruthNodeSuspicionThresholdProbation.toString()) : BigInt(0);
    message.storageTruthNodeSuspicionThresholdPostpone = object.storageTruthNodeSuspicionThresholdPostpone !== undefined && object.storageTruthNodeSuspicionThresholdPostpone !== null ? BigInt(object.storageTruthNodeSuspicionThresholdPostpone.toString()) : BigInt(0);
    message.storageTruthReporterReliabilityLowTrustThreshold = object.storageTruthReporterReliabilityLowTrustThreshold !== undefined && object.storageTruthReporterReliabilityLowTrustThreshold !== null ? BigInt(object.storageTruthReporterReliabilityLowTrustThreshold.toString()) : BigInt(0);
    message.storageTruthReporterReliabilityIneligibleThreshold = object.storageTruthReporterReliabilityIneligibleThreshold !== undefined && object.storageTruthReporterReliabilityIneligibleThreshold !== null ? BigInt(object.storageTruthReporterReliabilityIneligibleThreshold.toString()) : BigInt(0);
    message.storageTruthTicketDeteriorationHealThreshold = object.storageTruthTicketDeteriorationHealThreshold !== undefined && object.storageTruthTicketDeteriorationHealThreshold !== null ? BigInt(object.storageTruthTicketDeteriorationHealThreshold.toString()) : BigInt(0);
    message.storageTruthEnforcementMode = object.storageTruthEnforcementMode ?? 0;
    message.storageTruthReporterReliabilityDegradedThreshold = object.storageTruthReporterReliabilityDegradedThreshold !== undefined && object.storageTruthReporterReliabilityDegradedThreshold !== null ? BigInt(object.storageTruthReporterReliabilityDegradedThreshold.toString()) : BigInt(0);
    message.storageTruthPatternEscalationWindow = object.storageTruthPatternEscalationWindow ?? 0;
    message.storageTruthDivergenceWindowEpochs = object.storageTruthDivergenceWindowEpochs ?? 0;
    message.storageTruthReporterMinReportsForDivergence = object.storageTruthReporterMinReportsForDivergence ?? 0;
    message.storageTruthNodeSuspicionThresholdStrongPostpone = object.storageTruthNodeSuspicionThresholdStrongPostpone !== undefined && object.storageTruthNodeSuspicionThresholdStrongPostpone !== null ? BigInt(object.storageTruthNodeSuspicionThresholdStrongPostpone.toString()) : BigInt(0);
    message.storageTruthRecoveryCleanPassCount = object.storageTruthRecoveryCleanPassCount ?? 0;
    message.storageTruthClassAFaultWindow = object.storageTruthClassAFaultWindow ?? 0;
    message.storageTruthClassBFaultWindow = object.storageTruthClassBFaultWindow ?? 0;
    message.storageTruthHealDeadlineEpochs = object.storageTruthHealDeadlineEpochs ?? 0;
    message.storageTruthOldClassAFaultWindow = object.storageTruthOldClassAFaultWindow ?? 0;
    message.storageTruthContradictionWindowEpochs = object.storageTruthContradictionWindowEpochs ?? 0;
    message.storageTruthReporterIneligibleDurationEpochs = object.storageTruthReporterIneligibleDurationEpochs ?? 0;
    message.storageTruthStrongRecoveryCleanPassCount = object.storageTruthStrongRecoveryCleanPassCount ?? 0;
    message.storageTruthHealVerifierCount = object.storageTruthHealVerifierCount ?? 0;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.epoch_length_blocks !== undefined && object.epoch_length_blocks !== null) {
      message.epochLengthBlocks = BigInt(object.epoch_length_blocks);
    }
    if (object.epoch_zero_height !== undefined && object.epoch_zero_height !== null) {
      message.epochZeroHeight = BigInt(object.epoch_zero_height);
    }
    if (object.peer_quorum_reports !== undefined && object.peer_quorum_reports !== null) {
      message.peerQuorumReports = object.peer_quorum_reports;
    }
    if (object.min_probe_targets_per_epoch !== undefined && object.min_probe_targets_per_epoch !== null) {
      message.minProbeTargetsPerEpoch = object.min_probe_targets_per_epoch;
    }
    if (object.max_probe_targets_per_epoch !== undefined && object.max_probe_targets_per_epoch !== null) {
      message.maxProbeTargetsPerEpoch = object.max_probe_targets_per_epoch;
    }
    message.requiredOpenPorts = object.required_open_ports?.map(e => e) || [];
    if (object.min_cpu_free_percent !== undefined && object.min_cpu_free_percent !== null) {
      message.minCpuFreePercent = object.min_cpu_free_percent;
    }
    if (object.min_mem_free_percent !== undefined && object.min_mem_free_percent !== null) {
      message.minMemFreePercent = object.min_mem_free_percent;
    }
    if (object.min_disk_free_percent !== undefined && object.min_disk_free_percent !== null) {
      message.minDiskFreePercent = object.min_disk_free_percent;
    }
    if (object.consecutive_epochs_to_postpone !== undefined && object.consecutive_epochs_to_postpone !== null) {
      message.consecutiveEpochsToPostpone = object.consecutive_epochs_to_postpone;
    }
    if (object.keep_last_epoch_entries !== undefined && object.keep_last_epoch_entries !== null) {
      message.keepLastEpochEntries = BigInt(object.keep_last_epoch_entries);
    }
    if (object.peer_port_postpone_threshold_percent !== undefined && object.peer_port_postpone_threshold_percent !== null) {
      message.peerPortPostponeThresholdPercent = object.peer_port_postpone_threshold_percent;
    }
    if (object.action_finalization_signature_failure_evidences_per_epoch !== undefined && object.action_finalization_signature_failure_evidences_per_epoch !== null) {
      message.actionFinalizationSignatureFailureEvidencesPerEpoch = object.action_finalization_signature_failure_evidences_per_epoch;
    }
    if (object.action_finalization_signature_failure_consecutive_epochs !== undefined && object.action_finalization_signature_failure_consecutive_epochs !== null) {
      message.actionFinalizationSignatureFailureConsecutiveEpochs = object.action_finalization_signature_failure_consecutive_epochs;
    }
    if (object.action_finalization_not_in_top10_evidences_per_epoch !== undefined && object.action_finalization_not_in_top10_evidences_per_epoch !== null) {
      message.actionFinalizationNotInTop10EvidencesPerEpoch = object.action_finalization_not_in_top10_evidences_per_epoch;
    }
    if (object.action_finalization_not_in_top10_consecutive_epochs !== undefined && object.action_finalization_not_in_top10_consecutive_epochs !== null) {
      message.actionFinalizationNotInTop10ConsecutiveEpochs = object.action_finalization_not_in_top10_consecutive_epochs;
    }
    if (object.action_finalization_recovery_epochs !== undefined && object.action_finalization_recovery_epochs !== null) {
      message.actionFinalizationRecoveryEpochs = object.action_finalization_recovery_epochs;
    }
    if (object.action_finalization_recovery_max_total_bad_evidences !== undefined && object.action_finalization_recovery_max_total_bad_evidences !== null) {
      message.actionFinalizationRecoveryMaxTotalBadEvidences = object.action_finalization_recovery_max_total_bad_evidences;
    }
    if (object.sc_enabled !== undefined && object.sc_enabled !== null) {
      message.scEnabled = object.sc_enabled;
    }
    if (object.sc_challengers_per_epoch !== undefined && object.sc_challengers_per_epoch !== null) {
      message.scChallengersPerEpoch = object.sc_challengers_per_epoch;
    }
    if (object.storage_truth_recent_bucket_max_blocks !== undefined && object.storage_truth_recent_bucket_max_blocks !== null) {
      message.storageTruthRecentBucketMaxBlocks = BigInt(object.storage_truth_recent_bucket_max_blocks);
    }
    if (object.storage_truth_old_bucket_min_blocks !== undefined && object.storage_truth_old_bucket_min_blocks !== null) {
      message.storageTruthOldBucketMinBlocks = BigInt(object.storage_truth_old_bucket_min_blocks);
    }
    if (object.storage_truth_challenge_target_divisor !== undefined && object.storage_truth_challenge_target_divisor !== null) {
      message.storageTruthChallengeTargetDivisor = object.storage_truth_challenge_target_divisor;
    }
    if (object.storage_truth_compound_ranges_per_artifact !== undefined && object.storage_truth_compound_ranges_per_artifact !== null) {
      message.storageTruthCompoundRangesPerArtifact = object.storage_truth_compound_ranges_per_artifact;
    }
    if (object.storage_truth_compound_range_len_bytes !== undefined && object.storage_truth_compound_range_len_bytes !== null) {
      message.storageTruthCompoundRangeLenBytes = object.storage_truth_compound_range_len_bytes;
    }
    if (object.storage_truth_max_self_heal_ops_per_epoch !== undefined && object.storage_truth_max_self_heal_ops_per_epoch !== null) {
      message.storageTruthMaxSelfHealOpsPerEpoch = object.storage_truth_max_self_heal_ops_per_epoch;
    }
    if (object.storage_truth_probation_epochs !== undefined && object.storage_truth_probation_epochs !== null) {
      message.storageTruthProbationEpochs = object.storage_truth_probation_epochs;
    }
    if (object.storage_truth_node_suspicion_decay_per_epoch !== undefined && object.storage_truth_node_suspicion_decay_per_epoch !== null) {
      message.storageTruthNodeSuspicionDecayPerEpoch = BigInt(object.storage_truth_node_suspicion_decay_per_epoch);
    }
    if (object.storage_truth_reporter_reliability_decay_per_epoch !== undefined && object.storage_truth_reporter_reliability_decay_per_epoch !== null) {
      message.storageTruthReporterReliabilityDecayPerEpoch = BigInt(object.storage_truth_reporter_reliability_decay_per_epoch);
    }
    if (object.storage_truth_ticket_deterioration_decay_per_epoch !== undefined && object.storage_truth_ticket_deterioration_decay_per_epoch !== null) {
      message.storageTruthTicketDeteriorationDecayPerEpoch = BigInt(object.storage_truth_ticket_deterioration_decay_per_epoch);
    }
    if (object.storage_truth_node_suspicion_threshold_watch !== undefined && object.storage_truth_node_suspicion_threshold_watch !== null) {
      message.storageTruthNodeSuspicionThresholdWatch = BigInt(object.storage_truth_node_suspicion_threshold_watch);
    }
    if (object.storage_truth_node_suspicion_threshold_probation !== undefined && object.storage_truth_node_suspicion_threshold_probation !== null) {
      message.storageTruthNodeSuspicionThresholdProbation = BigInt(object.storage_truth_node_suspicion_threshold_probation);
    }
    if (object.storage_truth_node_suspicion_threshold_postpone !== undefined && object.storage_truth_node_suspicion_threshold_postpone !== null) {
      message.storageTruthNodeSuspicionThresholdPostpone = BigInt(object.storage_truth_node_suspicion_threshold_postpone);
    }
    if (object.storage_truth_reporter_reliability_low_trust_threshold !== undefined && object.storage_truth_reporter_reliability_low_trust_threshold !== null) {
      message.storageTruthReporterReliabilityLowTrustThreshold = BigInt(object.storage_truth_reporter_reliability_low_trust_threshold);
    }
    if (object.storage_truth_reporter_reliability_ineligible_threshold !== undefined && object.storage_truth_reporter_reliability_ineligible_threshold !== null) {
      message.storageTruthReporterReliabilityIneligibleThreshold = BigInt(object.storage_truth_reporter_reliability_ineligible_threshold);
    }
    if (object.storage_truth_ticket_deterioration_heal_threshold !== undefined && object.storage_truth_ticket_deterioration_heal_threshold !== null) {
      message.storageTruthTicketDeteriorationHealThreshold = BigInt(object.storage_truth_ticket_deterioration_heal_threshold);
    }
    if (object.storage_truth_enforcement_mode !== undefined && object.storage_truth_enforcement_mode !== null) {
      message.storageTruthEnforcementMode = object.storage_truth_enforcement_mode;
    }
    if (object.storage_truth_reporter_reliability_degraded_threshold !== undefined && object.storage_truth_reporter_reliability_degraded_threshold !== null) {
      message.storageTruthReporterReliabilityDegradedThreshold = BigInt(object.storage_truth_reporter_reliability_degraded_threshold);
    }
    if (object.storage_truth_pattern_escalation_window !== undefined && object.storage_truth_pattern_escalation_window !== null) {
      message.storageTruthPatternEscalationWindow = object.storage_truth_pattern_escalation_window;
    }
    if (object.storage_truth_divergence_window_epochs !== undefined && object.storage_truth_divergence_window_epochs !== null) {
      message.storageTruthDivergenceWindowEpochs = object.storage_truth_divergence_window_epochs;
    }
    if (object.storage_truth_reporter_min_reports_for_divergence !== undefined && object.storage_truth_reporter_min_reports_for_divergence !== null) {
      message.storageTruthReporterMinReportsForDivergence = object.storage_truth_reporter_min_reports_for_divergence;
    }
    if (object.storage_truth_node_suspicion_threshold_strong_postpone !== undefined && object.storage_truth_node_suspicion_threshold_strong_postpone !== null) {
      message.storageTruthNodeSuspicionThresholdStrongPostpone = BigInt(object.storage_truth_node_suspicion_threshold_strong_postpone);
    }
    if (object.storage_truth_recovery_clean_pass_count !== undefined && object.storage_truth_recovery_clean_pass_count !== null) {
      message.storageTruthRecoveryCleanPassCount = object.storage_truth_recovery_clean_pass_count;
    }
    if (object.storage_truth_class_a_fault_window !== undefined && object.storage_truth_class_a_fault_window !== null) {
      message.storageTruthClassAFaultWindow = object.storage_truth_class_a_fault_window;
    }
    if (object.storage_truth_class_b_fault_window !== undefined && object.storage_truth_class_b_fault_window !== null) {
      message.storageTruthClassBFaultWindow = object.storage_truth_class_b_fault_window;
    }
    if (object.storage_truth_heal_deadline_epochs !== undefined && object.storage_truth_heal_deadline_epochs !== null) {
      message.storageTruthHealDeadlineEpochs = object.storage_truth_heal_deadline_epochs;
    }
    if (object.storage_truth_old_class_a_fault_window !== undefined && object.storage_truth_old_class_a_fault_window !== null) {
      message.storageTruthOldClassAFaultWindow = object.storage_truth_old_class_a_fault_window;
    }
    if (object.storage_truth_contradiction_window_epochs !== undefined && object.storage_truth_contradiction_window_epochs !== null) {
      message.storageTruthContradictionWindowEpochs = object.storage_truth_contradiction_window_epochs;
    }
    if (object.storage_truth_reporter_ineligible_duration_epochs !== undefined && object.storage_truth_reporter_ineligible_duration_epochs !== null) {
      message.storageTruthReporterIneligibleDurationEpochs = object.storage_truth_reporter_ineligible_duration_epochs;
    }
    if (object.storage_truth_strong_recovery_clean_pass_count !== undefined && object.storage_truth_strong_recovery_clean_pass_count !== null) {
      message.storageTruthStrongRecoveryCleanPassCount = object.storage_truth_strong_recovery_clean_pass_count;
    }
    if (object.storage_truth_heal_verifier_count !== undefined && object.storage_truth_heal_verifier_count !== null) {
      message.storageTruthHealVerifierCount = object.storage_truth_heal_verifier_count;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.epoch_length_blocks = message.epochLengthBlocks !== BigInt(0) ? message.epochLengthBlocks?.toString() : undefined;
    obj.epoch_zero_height = message.epochZeroHeight !== BigInt(0) ? message.epochZeroHeight?.toString() : undefined;
    obj.peer_quorum_reports = message.peerQuorumReports === 0 ? undefined : message.peerQuorumReports;
    obj.min_probe_targets_per_epoch = message.minProbeTargetsPerEpoch === 0 ? undefined : message.minProbeTargetsPerEpoch;
    obj.max_probe_targets_per_epoch = message.maxProbeTargetsPerEpoch === 0 ? undefined : message.maxProbeTargetsPerEpoch;
    if (message.requiredOpenPorts) {
      obj.required_open_ports = message.requiredOpenPorts.map(e => e);
    } else {
      obj.required_open_ports = message.requiredOpenPorts;
    }
    obj.min_cpu_free_percent = message.minCpuFreePercent === 0 ? undefined : message.minCpuFreePercent;
    obj.min_mem_free_percent = message.minMemFreePercent === 0 ? undefined : message.minMemFreePercent;
    obj.min_disk_free_percent = message.minDiskFreePercent === 0 ? undefined : message.minDiskFreePercent;
    obj.consecutive_epochs_to_postpone = message.consecutiveEpochsToPostpone === 0 ? undefined : message.consecutiveEpochsToPostpone;
    obj.keep_last_epoch_entries = message.keepLastEpochEntries !== BigInt(0) ? message.keepLastEpochEntries?.toString() : undefined;
    obj.peer_port_postpone_threshold_percent = message.peerPortPostponeThresholdPercent === 0 ? undefined : message.peerPortPostponeThresholdPercent;
    obj.action_finalization_signature_failure_evidences_per_epoch = message.actionFinalizationSignatureFailureEvidencesPerEpoch === 0 ? undefined : message.actionFinalizationSignatureFailureEvidencesPerEpoch;
    obj.action_finalization_signature_failure_consecutive_epochs = message.actionFinalizationSignatureFailureConsecutiveEpochs === 0 ? undefined : message.actionFinalizationSignatureFailureConsecutiveEpochs;
    obj.action_finalization_not_in_top10_evidences_per_epoch = message.actionFinalizationNotInTop10EvidencesPerEpoch === 0 ? undefined : message.actionFinalizationNotInTop10EvidencesPerEpoch;
    obj.action_finalization_not_in_top10_consecutive_epochs = message.actionFinalizationNotInTop10ConsecutiveEpochs === 0 ? undefined : message.actionFinalizationNotInTop10ConsecutiveEpochs;
    obj.action_finalization_recovery_epochs = message.actionFinalizationRecoveryEpochs === 0 ? undefined : message.actionFinalizationRecoveryEpochs;
    obj.action_finalization_recovery_max_total_bad_evidences = message.actionFinalizationRecoveryMaxTotalBadEvidences === 0 ? undefined : message.actionFinalizationRecoveryMaxTotalBadEvidences;
    obj.sc_enabled = message.scEnabled === false ? undefined : message.scEnabled;
    obj.sc_challengers_per_epoch = message.scChallengersPerEpoch === 0 ? undefined : message.scChallengersPerEpoch;
    obj.storage_truth_recent_bucket_max_blocks = message.storageTruthRecentBucketMaxBlocks !== BigInt(0) ? message.storageTruthRecentBucketMaxBlocks?.toString() : undefined;
    obj.storage_truth_old_bucket_min_blocks = message.storageTruthOldBucketMinBlocks !== BigInt(0) ? message.storageTruthOldBucketMinBlocks?.toString() : undefined;
    obj.storage_truth_challenge_target_divisor = message.storageTruthChallengeTargetDivisor === 0 ? undefined : message.storageTruthChallengeTargetDivisor;
    obj.storage_truth_compound_ranges_per_artifact = message.storageTruthCompoundRangesPerArtifact === 0 ? undefined : message.storageTruthCompoundRangesPerArtifact;
    obj.storage_truth_compound_range_len_bytes = message.storageTruthCompoundRangeLenBytes === 0 ? undefined : message.storageTruthCompoundRangeLenBytes;
    obj.storage_truth_max_self_heal_ops_per_epoch = message.storageTruthMaxSelfHealOpsPerEpoch === 0 ? undefined : message.storageTruthMaxSelfHealOpsPerEpoch;
    obj.storage_truth_probation_epochs = message.storageTruthProbationEpochs === 0 ? undefined : message.storageTruthProbationEpochs;
    obj.storage_truth_node_suspicion_decay_per_epoch = message.storageTruthNodeSuspicionDecayPerEpoch !== BigInt(0) ? message.storageTruthNodeSuspicionDecayPerEpoch?.toString() : undefined;
    obj.storage_truth_reporter_reliability_decay_per_epoch = message.storageTruthReporterReliabilityDecayPerEpoch !== BigInt(0) ? message.storageTruthReporterReliabilityDecayPerEpoch?.toString() : undefined;
    obj.storage_truth_ticket_deterioration_decay_per_epoch = message.storageTruthTicketDeteriorationDecayPerEpoch !== BigInt(0) ? message.storageTruthTicketDeteriorationDecayPerEpoch?.toString() : undefined;
    obj.storage_truth_node_suspicion_threshold_watch = message.storageTruthNodeSuspicionThresholdWatch !== BigInt(0) ? message.storageTruthNodeSuspicionThresholdWatch?.toString() : undefined;
    obj.storage_truth_node_suspicion_threshold_probation = message.storageTruthNodeSuspicionThresholdProbation !== BigInt(0) ? message.storageTruthNodeSuspicionThresholdProbation?.toString() : undefined;
    obj.storage_truth_node_suspicion_threshold_postpone = message.storageTruthNodeSuspicionThresholdPostpone !== BigInt(0) ? message.storageTruthNodeSuspicionThresholdPostpone?.toString() : undefined;
    obj.storage_truth_reporter_reliability_low_trust_threshold = message.storageTruthReporterReliabilityLowTrustThreshold !== BigInt(0) ? message.storageTruthReporterReliabilityLowTrustThreshold?.toString() : undefined;
    obj.storage_truth_reporter_reliability_ineligible_threshold = message.storageTruthReporterReliabilityIneligibleThreshold !== BigInt(0) ? message.storageTruthReporterReliabilityIneligibleThreshold?.toString() : undefined;
    obj.storage_truth_ticket_deterioration_heal_threshold = message.storageTruthTicketDeteriorationHealThreshold !== BigInt(0) ? message.storageTruthTicketDeteriorationHealThreshold?.toString() : undefined;
    obj.storage_truth_enforcement_mode = message.storageTruthEnforcementMode === 0 ? undefined : message.storageTruthEnforcementMode;
    obj.storage_truth_reporter_reliability_degraded_threshold = message.storageTruthReporterReliabilityDegradedThreshold !== BigInt(0) ? message.storageTruthReporterReliabilityDegradedThreshold?.toString() : undefined;
    obj.storage_truth_pattern_escalation_window = message.storageTruthPatternEscalationWindow === 0 ? undefined : message.storageTruthPatternEscalationWindow;
    obj.storage_truth_divergence_window_epochs = message.storageTruthDivergenceWindowEpochs === 0 ? undefined : message.storageTruthDivergenceWindowEpochs;
    obj.storage_truth_reporter_min_reports_for_divergence = message.storageTruthReporterMinReportsForDivergence === 0 ? undefined : message.storageTruthReporterMinReportsForDivergence;
    obj.storage_truth_node_suspicion_threshold_strong_postpone = message.storageTruthNodeSuspicionThresholdStrongPostpone !== BigInt(0) ? message.storageTruthNodeSuspicionThresholdStrongPostpone?.toString() : undefined;
    obj.storage_truth_recovery_clean_pass_count = message.storageTruthRecoveryCleanPassCount === 0 ? undefined : message.storageTruthRecoveryCleanPassCount;
    obj.storage_truth_class_a_fault_window = message.storageTruthClassAFaultWindow === 0 ? undefined : message.storageTruthClassAFaultWindow;
    obj.storage_truth_class_b_fault_window = message.storageTruthClassBFaultWindow === 0 ? undefined : message.storageTruthClassBFaultWindow;
    obj.storage_truth_heal_deadline_epochs = message.storageTruthHealDeadlineEpochs === 0 ? undefined : message.storageTruthHealDeadlineEpochs;
    obj.storage_truth_old_class_a_fault_window = message.storageTruthOldClassAFaultWindow === 0 ? undefined : message.storageTruthOldClassAFaultWindow;
    obj.storage_truth_contradiction_window_epochs = message.storageTruthContradictionWindowEpochs === 0 ? undefined : message.storageTruthContradictionWindowEpochs;
    obj.storage_truth_reporter_ineligible_duration_epochs = message.storageTruthReporterIneligibleDurationEpochs === 0 ? undefined : message.storageTruthReporterIneligibleDurationEpochs;
    obj.storage_truth_strong_recovery_clean_pass_count = message.storageTruthStrongRecoveryCleanPassCount === 0 ? undefined : message.storageTruthStrongRecoveryCleanPassCount;
    obj.storage_truth_heal_verifier_count = message.storageTruthHealVerifierCount === 0 ? undefined : message.storageTruthHealVerifierCount;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};