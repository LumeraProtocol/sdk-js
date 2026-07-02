// @ts-nocheck
/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { Evidence, EvidenceAmino, EvidenceType } from "./evidence";
import { NodeSuspicionState, NodeSuspicionStateAmino, ReporterReliabilityState, ReporterReliabilityStateAmino, TicketDeteriorationState, TicketDeteriorationStateAmino, HealOp, HealOpAmino, TicketArtifactCountState, TicketArtifactCountStateAmino, EpochReport, EpochReportAmino } from "./audit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * GenesisState defines the audit module's genesis state.
 * @name GenesisState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisState
 */
export interface GenesisState {
  params: Params;
  /**
   * evidence defines the initial evidence records (optional).
   */
  evidence: Evidence[];
  /**
   * next_evidence_id is the next id to use for chain-assigned ids.
   */
  nextEvidenceId: bigint;
  nodeSuspicionStates: NodeSuspicionState[];
  reporterReliabilityStates: ReporterReliabilityState[];
  ticketDeteriorationStates: TicketDeteriorationState[];
  healOps: HealOp[];
  /**
   * next_heal_op_id is the next id to use for storage-truth heal operations.
   */
  nextHealOpId: bigint;
  ticketArtifactCountStates: TicketArtifactCountState[];
  /**
   * storage_truth_postponements records active per-supernode postponement markers
   * exported/imported at genesis. Per 121-F7.
   */
  storageTruthPostponements: StorageTruthPostponement[];
  /**
   * Per NEW-C-1: round-trip every epoch-scoped audit prefix.
   */
  recheckEvidence: GenesisRecheckEvidence[];
  storageProofTranscripts: GenesisStorageProofTranscript[];
  nodeFailureFacts: GenesisNodeFailureFact[];
  reporterResultFacts: GenesisReporterResultFact[];
  failedHealMarkers: GenesisFailedHealMarker[];
  epochReports: EpochReport[];
  reportIndices: GenesisReportIndex[];
  hostReportIndices: GenesisHostReportIndex[];
  storageChallengeIndices: GenesisStorageChallengeIndex[];
  /**
   * Per final-gate F-B2 — action-finalization postponement markers must
   * survive export/import workflows.
   */
  actionFinalizationPostponements: GenesisActionFinalizationPostponement[];
  /**
   * Per final-gate F-B3 — evidence per-epoch aggregate counters must
   * survive export/import workflows.
   */
  evidenceEpochCounts: GenesisEvidenceEpochCount[];
  /**
   * Per final-gate F-B4 — per-verifier heal-op votes must survive
   * export/import workflows.
   */
  healOpVerifications: GenesisHealOpVerification[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the audit module's genesis state.
 * @name GenesisStateAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisState
 */
export interface GenesisStateAmino {
  params: ParamsAmino;
  /**
   * evidence defines the initial evidence records (optional).
   */
  evidence: EvidenceAmino[];
  /**
   * next_evidence_id is the next id to use for chain-assigned ids.
   */
  next_evidence_id: string;
  node_suspicion_states: NodeSuspicionStateAmino[];
  reporter_reliability_states: ReporterReliabilityStateAmino[];
  ticket_deterioration_states: TicketDeteriorationStateAmino[];
  heal_ops: HealOpAmino[];
  /**
   * next_heal_op_id is the next id to use for storage-truth heal operations.
   */
  next_heal_op_id: string;
  ticket_artifact_count_states: TicketArtifactCountStateAmino[];
  /**
   * storage_truth_postponements records active per-supernode postponement markers
   * exported/imported at genesis. Per 121-F7.
   */
  storage_truth_postponements: StorageTruthPostponementAmino[];
  /**
   * Per NEW-C-1: round-trip every epoch-scoped audit prefix.
   */
  recheck_evidence: GenesisRecheckEvidenceAmino[];
  storage_proof_transcripts: GenesisStorageProofTranscriptAmino[];
  node_failure_facts: GenesisNodeFailureFactAmino[];
  reporter_result_facts: GenesisReporterResultFactAmino[];
  failed_heal_markers: GenesisFailedHealMarkerAmino[];
  epoch_reports: EpochReportAmino[];
  report_indices: GenesisReportIndexAmino[];
  host_report_indices: GenesisHostReportIndexAmino[];
  storage_challenge_indices: GenesisStorageChallengeIndexAmino[];
  /**
   * Per final-gate F-B2 — action-finalization postponement markers must
   * survive export/import workflows.
   */
  action_finalization_postponements: GenesisActionFinalizationPostponementAmino[];
  /**
   * Per final-gate F-B3 — evidence per-epoch aggregate counters must
   * survive export/import workflows.
   */
  evidence_epoch_counts: GenesisEvidenceEpochCountAmino[];
  /**
   * Per final-gate F-B4 — per-verifier heal-op votes must survive
   * export/import workflows.
   */
  heal_op_verifications: GenesisHealOpVerificationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/lumera.audit.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * StorageTruthPostponement records a supernode's storage-truth postponement state
 * for genesis export/import. Per 121-F7.
 * @name StorageTruthPostponement
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageTruthPostponement
 */
export interface StorageTruthPostponement {
  supernodeAccount: string;
  postponedAtEpochId: bigint;
  /**
   * strong_postpone preserves the companion ap/sts/ marker (final-gate F-B1).
   */
  strongPostpone: boolean;
}
export interface StorageTruthPostponementProtoMsg {
  typeUrl: "/lumera.audit.v1.StorageTruthPostponement";
  value: Uint8Array;
}
/**
 * StorageTruthPostponement records a supernode's storage-truth postponement state
 * for genesis export/import. Per 121-F7.
 * @name StorageTruthPostponementAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageTruthPostponement
 */
export interface StorageTruthPostponementAmino {
  supernode_account: string;
  postponed_at_epoch_id: string;
  /**
   * strong_postpone preserves the companion ap/sts/ marker (final-gate F-B1).
   */
  strong_postpone: boolean;
}
export interface StorageTruthPostponementAminoMsg {
  type: "/lumera.audit.v1.StorageTruthPostponement";
  value: StorageTruthPostponementAmino;
}
/**
 * GenesisActionFinalizationPostponement — ap/af/ marker.
 * @name GenesisActionFinalizationPostponement
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisActionFinalizationPostponement
 */
export interface GenesisActionFinalizationPostponement {
  supernodeAccount: string;
  postponedAtEpochId: bigint;
}
export interface GenesisActionFinalizationPostponementProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisActionFinalizationPostponement";
  value: Uint8Array;
}
/**
 * GenesisActionFinalizationPostponement — ap/af/ marker.
 * @name GenesisActionFinalizationPostponementAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisActionFinalizationPostponement
 */
export interface GenesisActionFinalizationPostponementAmino {
  supernode_account: string;
  postponed_at_epoch_id: string;
}
export interface GenesisActionFinalizationPostponementAminoMsg {
  type: "/lumera.audit.v1.GenesisActionFinalizationPostponement";
  value: GenesisActionFinalizationPostponementAmino;
}
/**
 * GenesisEvidenceEpochCount — eve/ aggregate count.
 * @name GenesisEvidenceEpochCount
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisEvidenceEpochCount
 */
export interface GenesisEvidenceEpochCount {
  epochId: bigint;
  subjectAddress: string;
  evidenceType: EvidenceType;
  count: bigint;
}
export interface GenesisEvidenceEpochCountProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisEvidenceEpochCount";
  value: Uint8Array;
}
/**
 * GenesisEvidenceEpochCount — eve/ aggregate count.
 * @name GenesisEvidenceEpochCountAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisEvidenceEpochCount
 */
export interface GenesisEvidenceEpochCountAmino {
  epoch_id: string;
  subject_address: string;
  evidence_type: EvidenceType;
  count: string;
}
export interface GenesisEvidenceEpochCountAminoMsg {
  type: "/lumera.audit.v1.GenesisEvidenceEpochCount";
  value: GenesisEvidenceEpochCountAmino;
}
/**
 * GenesisHealOpVerification — st/hov/ per-verifier vote.
 * @name GenesisHealOpVerification
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisHealOpVerification
 */
export interface GenesisHealOpVerification {
  healOpId: bigint;
  verifierSupernodeAccount: string;
  verified: boolean;
}
export interface GenesisHealOpVerificationProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisHealOpVerification";
  value: Uint8Array;
}
/**
 * GenesisHealOpVerification — st/hov/ per-verifier vote.
 * @name GenesisHealOpVerificationAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisHealOpVerification
 */
export interface GenesisHealOpVerificationAmino {
  heal_op_id: string;
  verifier_supernode_account: string;
  verified: boolean;
}
export interface GenesisHealOpVerificationAminoMsg {
  type: "/lumera.audit.v1.GenesisHealOpVerification";
  value: GenesisHealOpVerificationAmino;
}
/**
 * GenesisRecheckEvidence — st/rce/ replay-protection key.
 * @name GenesisRecheckEvidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisRecheckEvidence
 */
export interface GenesisRecheckEvidence {
  epochId: bigint;
  ticketId: string;
  creatorAccount: string;
}
export interface GenesisRecheckEvidenceProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisRecheckEvidence";
  value: Uint8Array;
}
/**
 * GenesisRecheckEvidence — st/rce/ replay-protection key.
 * @name GenesisRecheckEvidenceAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisRecheckEvidence
 */
export interface GenesisRecheckEvidenceAmino {
  epoch_id: string;
  ticket_id: string;
  creator_account: string;
}
export interface GenesisRecheckEvidenceAminoMsg {
  type: "/lumera.audit.v1.GenesisRecheckEvidence";
  value: GenesisRecheckEvidenceAmino;
}
/**
 * GenesisStorageProofTranscript — st/spt/ value (JSON-encoded record).
 * The opaque record_json blob is the keeper's storageProofTranscriptRecord
 * JSON marshaling. InitGenesis re-writes via the existing setter so the
 * st/spt-tbe/ secondary index is rebuilt deterministically.
 * @name GenesisStorageProofTranscript
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisStorageProofTranscript
 */
export interface GenesisStorageProofTranscript {
  transcriptHash: string;
  recordJson: Uint8Array;
}
export interface GenesisStorageProofTranscriptProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisStorageProofTranscript";
  value: Uint8Array;
}
/**
 * GenesisStorageProofTranscript — st/spt/ value (JSON-encoded record).
 * The opaque record_json blob is the keeper's storageProofTranscriptRecord
 * JSON marshaling. InitGenesis re-writes via the existing setter so the
 * st/spt-tbe/ secondary index is rebuilt deterministically.
 * @name GenesisStorageProofTranscriptAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisStorageProofTranscript
 */
export interface GenesisStorageProofTranscriptAmino {
  transcript_hash: string;
  record_json: string;
}
export interface GenesisStorageProofTranscriptAminoMsg {
  type: "/lumera.audit.v1.GenesisStorageProofTranscript";
  value: GenesisStorageProofTranscriptAmino;
}
/**
 * GenesisNodeFailureFact — st/nf/ entry (JSON-encoded record).
 * @name GenesisNodeFailureFact
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisNodeFailureFact
 */
export interface GenesisNodeFailureFact {
  supernodeAccount: string;
  epochId: bigint;
  ticketId: string;
  reporterAccount: string;
  recordJson: Uint8Array;
}
export interface GenesisNodeFailureFactProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisNodeFailureFact";
  value: Uint8Array;
}
/**
 * GenesisNodeFailureFact — st/nf/ entry (JSON-encoded record).
 * @name GenesisNodeFailureFactAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisNodeFailureFact
 */
export interface GenesisNodeFailureFactAmino {
  supernode_account: string;
  epoch_id: string;
  ticket_id: string;
  reporter_account: string;
  record_json: string;
}
export interface GenesisNodeFailureFactAminoMsg {
  type: "/lumera.audit.v1.GenesisNodeFailureFact";
  value: GenesisNodeFailureFactAmino;
}
/**
 * GenesisReporterResultFact — st/rrs/ entry (JSON-encoded record).
 * Secondary indexes are rebuilt by the existing setter.
 * @name GenesisReporterResultFact
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisReporterResultFact
 */
export interface GenesisReporterResultFact {
  reporterAccount: string;
  epochId: bigint;
  ticketId: string;
  targetAccount: string;
  recordJson: Uint8Array;
}
export interface GenesisReporterResultFactProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisReporterResultFact";
  value: Uint8Array;
}
/**
 * GenesisReporterResultFact — st/rrs/ entry (JSON-encoded record).
 * Secondary indexes are rebuilt by the existing setter.
 * @name GenesisReporterResultFactAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisReporterResultFact
 */
export interface GenesisReporterResultFactAmino {
  reporter_account: string;
  epoch_id: string;
  ticket_id: string;
  target_account: string;
  record_json: string;
}
export interface GenesisReporterResultFactAminoMsg {
  type: "/lumera.audit.v1.GenesisReporterResultFact";
  value: GenesisReporterResultFactAmino;
}
/**
 * GenesisFailedHealMarker — st/fh/ marker.
 * @name GenesisFailedHealMarker
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisFailedHealMarker
 */
export interface GenesisFailedHealMarker {
  supernodeAccount: string;
  epochId: bigint;
  ticketId: string;
}
export interface GenesisFailedHealMarkerProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisFailedHealMarker";
  value: Uint8Array;
}
/**
 * GenesisFailedHealMarker — st/fh/ marker.
 * @name GenesisFailedHealMarkerAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisFailedHealMarker
 */
export interface GenesisFailedHealMarkerAmino {
  supernode_account: string;
  epoch_id: string;
  ticket_id: string;
}
export interface GenesisFailedHealMarkerAminoMsg {
  type: "/lumera.audit.v1.GenesisFailedHealMarker";
  value: GenesisFailedHealMarkerAmino;
}
/**
 * GenesisReportIndex — ri/ index entry.
 * @name GenesisReportIndex
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisReportIndex
 */
export interface GenesisReportIndex {
  reporterSupernodeAccount: string;
  epochId: bigint;
}
export interface GenesisReportIndexProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisReportIndex";
  value: Uint8Array;
}
/**
 * GenesisReportIndex — ri/ index entry.
 * @name GenesisReportIndexAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisReportIndex
 */
export interface GenesisReportIndexAmino {
  reporter_supernode_account: string;
  epoch_id: string;
}
export interface GenesisReportIndexAminoMsg {
  type: "/lumera.audit.v1.GenesisReportIndex";
  value: GenesisReportIndexAmino;
}
/**
 * GenesisHostReportIndex — hr/ index entry.
 * @name GenesisHostReportIndex
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisHostReportIndex
 */
export interface GenesisHostReportIndex {
  reporterSupernodeAccount: string;
  epochId: bigint;
}
export interface GenesisHostReportIndexProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisHostReportIndex";
  value: Uint8Array;
}
/**
 * GenesisHostReportIndex — hr/ index entry.
 * @name GenesisHostReportIndexAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisHostReportIndex
 */
export interface GenesisHostReportIndexAmino {
  reporter_supernode_account: string;
  epoch_id: string;
}
export interface GenesisHostReportIndexAminoMsg {
  type: "/lumera.audit.v1.GenesisHostReportIndex";
  value: GenesisHostReportIndexAmino;
}
/**
 * GenesisStorageChallengeIndex — sc/ index entry.
 * @name GenesisStorageChallengeIndex
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisStorageChallengeIndex
 */
export interface GenesisStorageChallengeIndex {
  supernodeAccount: string;
  epochId: bigint;
  reporterSupernodeAccount: string;
}
export interface GenesisStorageChallengeIndexProtoMsg {
  typeUrl: "/lumera.audit.v1.GenesisStorageChallengeIndex";
  value: Uint8Array;
}
/**
 * GenesisStorageChallengeIndex — sc/ index entry.
 * @name GenesisStorageChallengeIndexAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisStorageChallengeIndex
 */
export interface GenesisStorageChallengeIndexAmino {
  supernode_account: string;
  epoch_id: string;
  reporter_supernode_account: string;
}
export interface GenesisStorageChallengeIndexAminoMsg {
  type: "/lumera.audit.v1.GenesisStorageChallengeIndex";
  value: GenesisStorageChallengeIndexAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    evidence: [],
    nextEvidenceId: BigInt(0),
    nodeSuspicionStates: [],
    reporterReliabilityStates: [],
    ticketDeteriorationStates: [],
    healOps: [],
    nextHealOpId: BigInt(0),
    ticketArtifactCountStates: [],
    storageTruthPostponements: [],
    recheckEvidence: [],
    storageProofTranscripts: [],
    nodeFailureFacts: [],
    reporterResultFacts: [],
    failedHealMarkers: [],
    epochReports: [],
    reportIndices: [],
    hostReportIndices: [],
    storageChallengeIndices: [],
    actionFinalizationPostponements: [],
    evidenceEpochCounts: [],
    healOpVerifications: []
  };
}
/**
 * GenesisState defines the audit module's genesis state.
 * @name GenesisState
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/lumera.audit.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.evidence) && (!o.evidence.length || Evidence.is(o.evidence[0])) && typeof o.nextEvidenceId === "bigint" && Array.isArray(o.nodeSuspicionStates) && (!o.nodeSuspicionStates.length || NodeSuspicionState.is(o.nodeSuspicionStates[0])) && Array.isArray(o.reporterReliabilityStates) && (!o.reporterReliabilityStates.length || ReporterReliabilityState.is(o.reporterReliabilityStates[0])) && Array.isArray(o.ticketDeteriorationStates) && (!o.ticketDeteriorationStates.length || TicketDeteriorationState.is(o.ticketDeteriorationStates[0])) && Array.isArray(o.healOps) && (!o.healOps.length || HealOp.is(o.healOps[0])) && typeof o.nextHealOpId === "bigint" && Array.isArray(o.ticketArtifactCountStates) && (!o.ticketArtifactCountStates.length || TicketArtifactCountState.is(o.ticketArtifactCountStates[0])) && Array.isArray(o.storageTruthPostponements) && (!o.storageTruthPostponements.length || StorageTruthPostponement.is(o.storageTruthPostponements[0])) && Array.isArray(o.recheckEvidence) && (!o.recheckEvidence.length || GenesisRecheckEvidence.is(o.recheckEvidence[0])) && Array.isArray(o.storageProofTranscripts) && (!o.storageProofTranscripts.length || GenesisStorageProofTranscript.is(o.storageProofTranscripts[0])) && Array.isArray(o.nodeFailureFacts) && (!o.nodeFailureFacts.length || GenesisNodeFailureFact.is(o.nodeFailureFacts[0])) && Array.isArray(o.reporterResultFacts) && (!o.reporterResultFacts.length || GenesisReporterResultFact.is(o.reporterResultFacts[0])) && Array.isArray(o.failedHealMarkers) && (!o.failedHealMarkers.length || GenesisFailedHealMarker.is(o.failedHealMarkers[0])) && Array.isArray(o.epochReports) && (!o.epochReports.length || EpochReport.is(o.epochReports[0])) && Array.isArray(o.reportIndices) && (!o.reportIndices.length || GenesisReportIndex.is(o.reportIndices[0])) && Array.isArray(o.hostReportIndices) && (!o.hostReportIndices.length || GenesisHostReportIndex.is(o.hostReportIndices[0])) && Array.isArray(o.storageChallengeIndices) && (!o.storageChallengeIndices.length || GenesisStorageChallengeIndex.is(o.storageChallengeIndices[0])) && Array.isArray(o.actionFinalizationPostponements) && (!o.actionFinalizationPostponements.length || GenesisActionFinalizationPostponement.is(o.actionFinalizationPostponements[0])) && Array.isArray(o.evidenceEpochCounts) && (!o.evidenceEpochCounts.length || GenesisEvidenceEpochCount.is(o.evidenceEpochCounts[0])) && Array.isArray(o.healOpVerifications) && (!o.healOpVerifications.length || GenesisHealOpVerification.is(o.healOpVerifications[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.evidence) && (!o.evidence.length || Evidence.isAmino(o.evidence[0])) && typeof o.next_evidence_id === "bigint" && Array.isArray(o.node_suspicion_states) && (!o.node_suspicion_states.length || NodeSuspicionState.isAmino(o.node_suspicion_states[0])) && Array.isArray(o.reporter_reliability_states) && (!o.reporter_reliability_states.length || ReporterReliabilityState.isAmino(o.reporter_reliability_states[0])) && Array.isArray(o.ticket_deterioration_states) && (!o.ticket_deterioration_states.length || TicketDeteriorationState.isAmino(o.ticket_deterioration_states[0])) && Array.isArray(o.heal_ops) && (!o.heal_ops.length || HealOp.isAmino(o.heal_ops[0])) && typeof o.next_heal_op_id === "bigint" && Array.isArray(o.ticket_artifact_count_states) && (!o.ticket_artifact_count_states.length || TicketArtifactCountState.isAmino(o.ticket_artifact_count_states[0])) && Array.isArray(o.storage_truth_postponements) && (!o.storage_truth_postponements.length || StorageTruthPostponement.isAmino(o.storage_truth_postponements[0])) && Array.isArray(o.recheck_evidence) && (!o.recheck_evidence.length || GenesisRecheckEvidence.isAmino(o.recheck_evidence[0])) && Array.isArray(o.storage_proof_transcripts) && (!o.storage_proof_transcripts.length || GenesisStorageProofTranscript.isAmino(o.storage_proof_transcripts[0])) && Array.isArray(o.node_failure_facts) && (!o.node_failure_facts.length || GenesisNodeFailureFact.isAmino(o.node_failure_facts[0])) && Array.isArray(o.reporter_result_facts) && (!o.reporter_result_facts.length || GenesisReporterResultFact.isAmino(o.reporter_result_facts[0])) && Array.isArray(o.failed_heal_markers) && (!o.failed_heal_markers.length || GenesisFailedHealMarker.isAmino(o.failed_heal_markers[0])) && Array.isArray(o.epoch_reports) && (!o.epoch_reports.length || EpochReport.isAmino(o.epoch_reports[0])) && Array.isArray(o.report_indices) && (!o.report_indices.length || GenesisReportIndex.isAmino(o.report_indices[0])) && Array.isArray(o.host_report_indices) && (!o.host_report_indices.length || GenesisHostReportIndex.isAmino(o.host_report_indices[0])) && Array.isArray(o.storage_challenge_indices) && (!o.storage_challenge_indices.length || GenesisStorageChallengeIndex.isAmino(o.storage_challenge_indices[0])) && Array.isArray(o.action_finalization_postponements) && (!o.action_finalization_postponements.length || GenesisActionFinalizationPostponement.isAmino(o.action_finalization_postponements[0])) && Array.isArray(o.evidence_epoch_counts) && (!o.evidence_epoch_counts.length || GenesisEvidenceEpochCount.isAmino(o.evidence_epoch_counts[0])) && Array.isArray(o.heal_op_verifications) && (!o.heal_op_verifications.length || GenesisHealOpVerification.isAmino(o.heal_op_verifications[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextEvidenceId !== BigInt(0)) {
      writer.uint32(24).uint64(message.nextEvidenceId);
    }
    for (const v of message.nodeSuspicionStates) {
      NodeSuspicionState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reporterReliabilityStates) {
      ReporterReliabilityState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.ticketDeteriorationStates) {
      TicketDeteriorationState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.healOps) {
      HealOp.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nextHealOpId !== BigInt(0)) {
      writer.uint32(64).uint64(message.nextHealOpId);
    }
    for (const v of message.ticketArtifactCountStates) {
      TicketArtifactCountState.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.storageTruthPostponements) {
      StorageTruthPostponement.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.recheckEvidence) {
      GenesisRecheckEvidence.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.storageProofTranscripts) {
      GenesisStorageProofTranscript.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.nodeFailureFacts) {
      GenesisNodeFailureFact.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.reporterResultFacts) {
      GenesisReporterResultFact.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.failedHealMarkers) {
      GenesisFailedHealMarker.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.epochReports) {
      EpochReport.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    for (const v of message.reportIndices) {
      GenesisReportIndex.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    for (const v of message.hostReportIndices) {
      GenesisHostReportIndex.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.storageChallengeIndices) {
      GenesisStorageChallengeIndex.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.actionFinalizationPostponements) {
      GenesisActionFinalizationPostponement.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    for (const v of message.evidenceEpochCounts) {
      GenesisEvidenceEpochCount.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.healOpVerifications) {
      GenesisHealOpVerification.encode(v!, writer.uint32(178).fork()).ldelim();
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
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nextEvidenceId = reader.uint64();
          break;
        case 4:
          message.nodeSuspicionStates.push(NodeSuspicionState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reporterReliabilityStates.push(ReporterReliabilityState.decode(reader, reader.uint32()));
          break;
        case 6:
          message.ticketDeteriorationStates.push(TicketDeteriorationState.decode(reader, reader.uint32()));
          break;
        case 7:
          message.healOps.push(HealOp.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nextHealOpId = reader.uint64();
          break;
        case 9:
          message.ticketArtifactCountStates.push(TicketArtifactCountState.decode(reader, reader.uint32()));
          break;
        case 10:
          message.storageTruthPostponements.push(StorageTruthPostponement.decode(reader, reader.uint32()));
          break;
        case 11:
          message.recheckEvidence.push(GenesisRecheckEvidence.decode(reader, reader.uint32()));
          break;
        case 12:
          message.storageProofTranscripts.push(GenesisStorageProofTranscript.decode(reader, reader.uint32()));
          break;
        case 13:
          message.nodeFailureFacts.push(GenesisNodeFailureFact.decode(reader, reader.uint32()));
          break;
        case 14:
          message.reporterResultFacts.push(GenesisReporterResultFact.decode(reader, reader.uint32()));
          break;
        case 15:
          message.failedHealMarkers.push(GenesisFailedHealMarker.decode(reader, reader.uint32()));
          break;
        case 16:
          message.epochReports.push(EpochReport.decode(reader, reader.uint32()));
          break;
        case 17:
          message.reportIndices.push(GenesisReportIndex.decode(reader, reader.uint32()));
          break;
        case 18:
          message.hostReportIndices.push(GenesisHostReportIndex.decode(reader, reader.uint32()));
          break;
        case 19:
          message.storageChallengeIndices.push(GenesisStorageChallengeIndex.decode(reader, reader.uint32()));
          break;
        case 20:
          message.actionFinalizationPostponements.push(GenesisActionFinalizationPostponement.decode(reader, reader.uint32()));
          break;
        case 21:
          message.evidenceEpochCounts.push(GenesisEvidenceEpochCount.decode(reader, reader.uint32()));
          break;
        case 22:
          message.healOpVerifications.push(GenesisHealOpVerification.decode(reader, reader.uint32()));
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
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    message.nextEvidenceId = object.nextEvidenceId !== undefined && object.nextEvidenceId !== null ? BigInt(object.nextEvidenceId.toString()) : BigInt(0);
    message.nodeSuspicionStates = object.nodeSuspicionStates?.map(e => NodeSuspicionState.fromPartial(e)) || [];
    message.reporterReliabilityStates = object.reporterReliabilityStates?.map(e => ReporterReliabilityState.fromPartial(e)) || [];
    message.ticketDeteriorationStates = object.ticketDeteriorationStates?.map(e => TicketDeteriorationState.fromPartial(e)) || [];
    message.healOps = object.healOps?.map(e => HealOp.fromPartial(e)) || [];
    message.nextHealOpId = object.nextHealOpId !== undefined && object.nextHealOpId !== null ? BigInt(object.nextHealOpId.toString()) : BigInt(0);
    message.ticketArtifactCountStates = object.ticketArtifactCountStates?.map(e => TicketArtifactCountState.fromPartial(e)) || [];
    message.storageTruthPostponements = object.storageTruthPostponements?.map(e => StorageTruthPostponement.fromPartial(e)) || [];
    message.recheckEvidence = object.recheckEvidence?.map(e => GenesisRecheckEvidence.fromPartial(e)) || [];
    message.storageProofTranscripts = object.storageProofTranscripts?.map(e => GenesisStorageProofTranscript.fromPartial(e)) || [];
    message.nodeFailureFacts = object.nodeFailureFacts?.map(e => GenesisNodeFailureFact.fromPartial(e)) || [];
    message.reporterResultFacts = object.reporterResultFacts?.map(e => GenesisReporterResultFact.fromPartial(e)) || [];
    message.failedHealMarkers = object.failedHealMarkers?.map(e => GenesisFailedHealMarker.fromPartial(e)) || [];
    message.epochReports = object.epochReports?.map(e => EpochReport.fromPartial(e)) || [];
    message.reportIndices = object.reportIndices?.map(e => GenesisReportIndex.fromPartial(e)) || [];
    message.hostReportIndices = object.hostReportIndices?.map(e => GenesisHostReportIndex.fromPartial(e)) || [];
    message.storageChallengeIndices = object.storageChallengeIndices?.map(e => GenesisStorageChallengeIndex.fromPartial(e)) || [];
    message.actionFinalizationPostponements = object.actionFinalizationPostponements?.map(e => GenesisActionFinalizationPostponement.fromPartial(e)) || [];
    message.evidenceEpochCounts = object.evidenceEpochCounts?.map(e => GenesisEvidenceEpochCount.fromPartial(e)) || [];
    message.healOpVerifications = object.healOpVerifications?.map(e => GenesisHealOpVerification.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.evidence = object.evidence?.map(e => Evidence.fromAmino(e)) || [];
    if (object.next_evidence_id !== undefined && object.next_evidence_id !== null) {
      message.nextEvidenceId = BigInt(object.next_evidence_id);
    }
    message.nodeSuspicionStates = object.node_suspicion_states?.map(e => NodeSuspicionState.fromAmino(e)) || [];
    message.reporterReliabilityStates = object.reporter_reliability_states?.map(e => ReporterReliabilityState.fromAmino(e)) || [];
    message.ticketDeteriorationStates = object.ticket_deterioration_states?.map(e => TicketDeteriorationState.fromAmino(e)) || [];
    message.healOps = object.heal_ops?.map(e => HealOp.fromAmino(e)) || [];
    if (object.next_heal_op_id !== undefined && object.next_heal_op_id !== null) {
      message.nextHealOpId = BigInt(object.next_heal_op_id);
    }
    message.ticketArtifactCountStates = object.ticket_artifact_count_states?.map(e => TicketArtifactCountState.fromAmino(e)) || [];
    message.storageTruthPostponements = object.storage_truth_postponements?.map(e => StorageTruthPostponement.fromAmino(e)) || [];
    message.recheckEvidence = object.recheck_evidence?.map(e => GenesisRecheckEvidence.fromAmino(e)) || [];
    message.storageProofTranscripts = object.storage_proof_transcripts?.map(e => GenesisStorageProofTranscript.fromAmino(e)) || [];
    message.nodeFailureFacts = object.node_failure_facts?.map(e => GenesisNodeFailureFact.fromAmino(e)) || [];
    message.reporterResultFacts = object.reporter_result_facts?.map(e => GenesisReporterResultFact.fromAmino(e)) || [];
    message.failedHealMarkers = object.failed_heal_markers?.map(e => GenesisFailedHealMarker.fromAmino(e)) || [];
    message.epochReports = object.epoch_reports?.map(e => EpochReport.fromAmino(e)) || [];
    message.reportIndices = object.report_indices?.map(e => GenesisReportIndex.fromAmino(e)) || [];
    message.hostReportIndices = object.host_report_indices?.map(e => GenesisHostReportIndex.fromAmino(e)) || [];
    message.storageChallengeIndices = object.storage_challenge_indices?.map(e => GenesisStorageChallengeIndex.fromAmino(e)) || [];
    message.actionFinalizationPostponements = object.action_finalization_postponements?.map(e => GenesisActionFinalizationPostponement.fromAmino(e)) || [];
    message.evidenceEpochCounts = object.evidence_epoch_counts?.map(e => GenesisEvidenceEpochCount.fromAmino(e)) || [];
    message.healOpVerifications = object.heal_op_verifications?.map(e => GenesisHealOpVerification.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = message.evidence;
    }
    obj.next_evidence_id = message.nextEvidenceId !== BigInt(0) ? message.nextEvidenceId?.toString() : undefined;
    if (message.nodeSuspicionStates) {
      obj.node_suspicion_states = message.nodeSuspicionStates.map(e => e ? NodeSuspicionState.toAmino(e) : undefined);
    } else {
      obj.node_suspicion_states = message.nodeSuspicionStates;
    }
    if (message.reporterReliabilityStates) {
      obj.reporter_reliability_states = message.reporterReliabilityStates.map(e => e ? ReporterReliabilityState.toAmino(e) : undefined);
    } else {
      obj.reporter_reliability_states = message.reporterReliabilityStates;
    }
    if (message.ticketDeteriorationStates) {
      obj.ticket_deterioration_states = message.ticketDeteriorationStates.map(e => e ? TicketDeteriorationState.toAmino(e) : undefined);
    } else {
      obj.ticket_deterioration_states = message.ticketDeteriorationStates;
    }
    if (message.healOps) {
      obj.heal_ops = message.healOps.map(e => e ? HealOp.toAmino(e) : undefined);
    } else {
      obj.heal_ops = message.healOps;
    }
    obj.next_heal_op_id = message.nextHealOpId !== BigInt(0) ? message.nextHealOpId?.toString() : undefined;
    if (message.ticketArtifactCountStates) {
      obj.ticket_artifact_count_states = message.ticketArtifactCountStates.map(e => e ? TicketArtifactCountState.toAmino(e) : undefined);
    } else {
      obj.ticket_artifact_count_states = message.ticketArtifactCountStates;
    }
    if (message.storageTruthPostponements) {
      obj.storage_truth_postponements = message.storageTruthPostponements.map(e => e ? StorageTruthPostponement.toAmino(e) : undefined);
    } else {
      obj.storage_truth_postponements = message.storageTruthPostponements;
    }
    if (message.recheckEvidence) {
      obj.recheck_evidence = message.recheckEvidence.map(e => e ? GenesisRecheckEvidence.toAmino(e) : undefined);
    } else {
      obj.recheck_evidence = message.recheckEvidence;
    }
    if (message.storageProofTranscripts) {
      obj.storage_proof_transcripts = message.storageProofTranscripts.map(e => e ? GenesisStorageProofTranscript.toAmino(e) : undefined);
    } else {
      obj.storage_proof_transcripts = message.storageProofTranscripts;
    }
    if (message.nodeFailureFacts) {
      obj.node_failure_facts = message.nodeFailureFacts.map(e => e ? GenesisNodeFailureFact.toAmino(e) : undefined);
    } else {
      obj.node_failure_facts = message.nodeFailureFacts;
    }
    if (message.reporterResultFacts) {
      obj.reporter_result_facts = message.reporterResultFacts.map(e => e ? GenesisReporterResultFact.toAmino(e) : undefined);
    } else {
      obj.reporter_result_facts = message.reporterResultFacts;
    }
    if (message.failedHealMarkers) {
      obj.failed_heal_markers = message.failedHealMarkers.map(e => e ? GenesisFailedHealMarker.toAmino(e) : undefined);
    } else {
      obj.failed_heal_markers = message.failedHealMarkers;
    }
    if (message.epochReports) {
      obj.epoch_reports = message.epochReports.map(e => e ? EpochReport.toAmino(e) : undefined);
    } else {
      obj.epoch_reports = message.epochReports;
    }
    if (message.reportIndices) {
      obj.report_indices = message.reportIndices.map(e => e ? GenesisReportIndex.toAmino(e) : undefined);
    } else {
      obj.report_indices = message.reportIndices;
    }
    if (message.hostReportIndices) {
      obj.host_report_indices = message.hostReportIndices.map(e => e ? GenesisHostReportIndex.toAmino(e) : undefined);
    } else {
      obj.host_report_indices = message.hostReportIndices;
    }
    if (message.storageChallengeIndices) {
      obj.storage_challenge_indices = message.storageChallengeIndices.map(e => e ? GenesisStorageChallengeIndex.toAmino(e) : undefined);
    } else {
      obj.storage_challenge_indices = message.storageChallengeIndices;
    }
    if (message.actionFinalizationPostponements) {
      obj.action_finalization_postponements = message.actionFinalizationPostponements.map(e => e ? GenesisActionFinalizationPostponement.toAmino(e) : undefined);
    } else {
      obj.action_finalization_postponements = message.actionFinalizationPostponements;
    }
    if (message.evidenceEpochCounts) {
      obj.evidence_epoch_counts = message.evidenceEpochCounts.map(e => e ? GenesisEvidenceEpochCount.toAmino(e) : undefined);
    } else {
      obj.evidence_epoch_counts = message.evidenceEpochCounts;
    }
    if (message.healOpVerifications) {
      obj.heal_op_verifications = message.healOpVerifications.map(e => e ? GenesisHealOpVerification.toAmino(e) : undefined);
    } else {
      obj.heal_op_verifications = message.healOpVerifications;
    }
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
      typeUrl: "/lumera.audit.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    Evidence.registerTypeUrl();
    NodeSuspicionState.registerTypeUrl();
    ReporterReliabilityState.registerTypeUrl();
    TicketDeteriorationState.registerTypeUrl();
    HealOp.registerTypeUrl();
    TicketArtifactCountState.registerTypeUrl();
    StorageTruthPostponement.registerTypeUrl();
    GenesisRecheckEvidence.registerTypeUrl();
    GenesisStorageProofTranscript.registerTypeUrl();
    GenesisNodeFailureFact.registerTypeUrl();
    GenesisReporterResultFact.registerTypeUrl();
    GenesisFailedHealMarker.registerTypeUrl();
    EpochReport.registerTypeUrl();
    GenesisReportIndex.registerTypeUrl();
    GenesisHostReportIndex.registerTypeUrl();
    GenesisStorageChallengeIndex.registerTypeUrl();
    GenesisActionFinalizationPostponement.registerTypeUrl();
    GenesisEvidenceEpochCount.registerTypeUrl();
    GenesisHealOpVerification.registerTypeUrl();
  }
};
function createBaseStorageTruthPostponement(): StorageTruthPostponement {
  return {
    supernodeAccount: "",
    postponedAtEpochId: BigInt(0),
    strongPostpone: false
  };
}
/**
 * StorageTruthPostponement records a supernode's storage-truth postponement state
 * for genesis export/import. Per 121-F7.
 * @name StorageTruthPostponement
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageTruthPostponement
 */
export const StorageTruthPostponement = {
  typeUrl: "/lumera.audit.v1.StorageTruthPostponement",
  is(o: any): o is StorageTruthPostponement {
    return o && (o.$typeUrl === StorageTruthPostponement.typeUrl || typeof o.supernodeAccount === "string" && typeof o.postponedAtEpochId === "bigint" && typeof o.strongPostpone === "boolean");
  },
  isAmino(o: any): o is StorageTruthPostponementAmino {
    return o && (o.$typeUrl === StorageTruthPostponement.typeUrl || typeof o.supernode_account === "string" && typeof o.postponed_at_epoch_id === "bigint" && typeof o.strong_postpone === "boolean");
  },
  encode(message: StorageTruthPostponement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.postponedAtEpochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postponedAtEpochId);
    }
    if (message.strongPostpone === true) {
      writer.uint32(24).bool(message.strongPostpone);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageTruthPostponement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageTruthPostponement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodeAccount = reader.string();
          break;
        case 2:
          message.postponedAtEpochId = reader.uint64();
          break;
        case 3:
          message.strongPostpone = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StorageTruthPostponement>): StorageTruthPostponement {
    const message = createBaseStorageTruthPostponement();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.postponedAtEpochId = object.postponedAtEpochId !== undefined && object.postponedAtEpochId !== null ? BigInt(object.postponedAtEpochId.toString()) : BigInt(0);
    message.strongPostpone = object.strongPostpone ?? false;
    return message;
  },
  fromAmino(object: StorageTruthPostponementAmino): StorageTruthPostponement {
    const message = createBaseStorageTruthPostponement();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.postponed_at_epoch_id !== undefined && object.postponed_at_epoch_id !== null) {
      message.postponedAtEpochId = BigInt(object.postponed_at_epoch_id);
    }
    if (object.strong_postpone !== undefined && object.strong_postpone !== null) {
      message.strongPostpone = object.strong_postpone;
    }
    return message;
  },
  toAmino(message: StorageTruthPostponement): StorageTruthPostponementAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.postponed_at_epoch_id = message.postponedAtEpochId !== BigInt(0) ? message.postponedAtEpochId?.toString() : undefined;
    obj.strong_postpone = message.strongPostpone === false ? undefined : message.strongPostpone;
    return obj;
  },
  fromAminoMsg(object: StorageTruthPostponementAminoMsg): StorageTruthPostponement {
    return StorageTruthPostponement.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageTruthPostponementProtoMsg): StorageTruthPostponement {
    return StorageTruthPostponement.decode(message.value);
  },
  toProto(message: StorageTruthPostponement): Uint8Array {
    return StorageTruthPostponement.encode(message).finish();
  },
  toProtoMsg(message: StorageTruthPostponement): StorageTruthPostponementProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.StorageTruthPostponement",
      value: StorageTruthPostponement.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisActionFinalizationPostponement(): GenesisActionFinalizationPostponement {
  return {
    supernodeAccount: "",
    postponedAtEpochId: BigInt(0)
  };
}
/**
 * GenesisActionFinalizationPostponement — ap/af/ marker.
 * @name GenesisActionFinalizationPostponement
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisActionFinalizationPostponement
 */
export const GenesisActionFinalizationPostponement = {
  typeUrl: "/lumera.audit.v1.GenesisActionFinalizationPostponement",
  is(o: any): o is GenesisActionFinalizationPostponement {
    return o && (o.$typeUrl === GenesisActionFinalizationPostponement.typeUrl || typeof o.supernodeAccount === "string" && typeof o.postponedAtEpochId === "bigint");
  },
  isAmino(o: any): o is GenesisActionFinalizationPostponementAmino {
    return o && (o.$typeUrl === GenesisActionFinalizationPostponement.typeUrl || typeof o.supernode_account === "string" && typeof o.postponed_at_epoch_id === "bigint");
  },
  encode(message: GenesisActionFinalizationPostponement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.postponedAtEpochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.postponedAtEpochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisActionFinalizationPostponement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisActionFinalizationPostponement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodeAccount = reader.string();
          break;
        case 2:
          message.postponedAtEpochId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisActionFinalizationPostponement>): GenesisActionFinalizationPostponement {
    const message = createBaseGenesisActionFinalizationPostponement();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.postponedAtEpochId = object.postponedAtEpochId !== undefined && object.postponedAtEpochId !== null ? BigInt(object.postponedAtEpochId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisActionFinalizationPostponementAmino): GenesisActionFinalizationPostponement {
    const message = createBaseGenesisActionFinalizationPostponement();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.postponed_at_epoch_id !== undefined && object.postponed_at_epoch_id !== null) {
      message.postponedAtEpochId = BigInt(object.postponed_at_epoch_id);
    }
    return message;
  },
  toAmino(message: GenesisActionFinalizationPostponement): GenesisActionFinalizationPostponementAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.postponed_at_epoch_id = message.postponedAtEpochId !== BigInt(0) ? message.postponedAtEpochId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisActionFinalizationPostponementAminoMsg): GenesisActionFinalizationPostponement {
    return GenesisActionFinalizationPostponement.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisActionFinalizationPostponementProtoMsg): GenesisActionFinalizationPostponement {
    return GenesisActionFinalizationPostponement.decode(message.value);
  },
  toProto(message: GenesisActionFinalizationPostponement): Uint8Array {
    return GenesisActionFinalizationPostponement.encode(message).finish();
  },
  toProtoMsg(message: GenesisActionFinalizationPostponement): GenesisActionFinalizationPostponementProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisActionFinalizationPostponement",
      value: GenesisActionFinalizationPostponement.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisEvidenceEpochCount(): GenesisEvidenceEpochCount {
  return {
    epochId: BigInt(0),
    subjectAddress: "",
    evidenceType: 0,
    count: BigInt(0)
  };
}
/**
 * GenesisEvidenceEpochCount — eve/ aggregate count.
 * @name GenesisEvidenceEpochCount
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisEvidenceEpochCount
 */
export const GenesisEvidenceEpochCount = {
  typeUrl: "/lumera.audit.v1.GenesisEvidenceEpochCount",
  is(o: any): o is GenesisEvidenceEpochCount {
    return o && (o.$typeUrl === GenesisEvidenceEpochCount.typeUrl || typeof o.epochId === "bigint" && typeof o.subjectAddress === "string" && isSet(o.evidenceType) && typeof o.count === "bigint");
  },
  isAmino(o: any): o is GenesisEvidenceEpochCountAmino {
    return o && (o.$typeUrl === GenesisEvidenceEpochCount.typeUrl || typeof o.epoch_id === "bigint" && typeof o.subject_address === "string" && isSet(o.evidence_type) && typeof o.count === "bigint");
  },
  encode(message: GenesisEvidenceEpochCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.subjectAddress !== "") {
      writer.uint32(18).string(message.subjectAddress);
    }
    if (message.evidenceType !== 0) {
      writer.uint32(24).int32(message.evidenceType);
    }
    if (message.count !== BigInt(0)) {
      writer.uint32(32).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisEvidenceEpochCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisEvidenceEpochCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.subjectAddress = reader.string();
          break;
        case 3:
          message.evidenceType = reader.int32() as any;
          break;
        case 4:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisEvidenceEpochCount>): GenesisEvidenceEpochCount {
    const message = createBaseGenesisEvidenceEpochCount();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.subjectAddress = object.subjectAddress ?? "";
    message.evidenceType = object.evidenceType ?? 0;
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisEvidenceEpochCountAmino): GenesisEvidenceEpochCount {
    const message = createBaseGenesisEvidenceEpochCount();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.subject_address !== undefined && object.subject_address !== null) {
      message.subjectAddress = object.subject_address;
    }
    if (object.evidence_type !== undefined && object.evidence_type !== null) {
      message.evidenceType = object.evidence_type;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    return message;
  },
  toAmino(message: GenesisEvidenceEpochCount): GenesisEvidenceEpochCountAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.subject_address = message.subjectAddress === "" ? undefined : message.subjectAddress;
    obj.evidence_type = message.evidenceType === 0 ? undefined : message.evidenceType;
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisEvidenceEpochCountAminoMsg): GenesisEvidenceEpochCount {
    return GenesisEvidenceEpochCount.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisEvidenceEpochCountProtoMsg): GenesisEvidenceEpochCount {
    return GenesisEvidenceEpochCount.decode(message.value);
  },
  toProto(message: GenesisEvidenceEpochCount): Uint8Array {
    return GenesisEvidenceEpochCount.encode(message).finish();
  },
  toProtoMsg(message: GenesisEvidenceEpochCount): GenesisEvidenceEpochCountProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisEvidenceEpochCount",
      value: GenesisEvidenceEpochCount.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisHealOpVerification(): GenesisHealOpVerification {
  return {
    healOpId: BigInt(0),
    verifierSupernodeAccount: "",
    verified: false
  };
}
/**
 * GenesisHealOpVerification — st/hov/ per-verifier vote.
 * @name GenesisHealOpVerification
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisHealOpVerification
 */
export const GenesisHealOpVerification = {
  typeUrl: "/lumera.audit.v1.GenesisHealOpVerification",
  is(o: any): o is GenesisHealOpVerification {
    return o && (o.$typeUrl === GenesisHealOpVerification.typeUrl || typeof o.healOpId === "bigint" && typeof o.verifierSupernodeAccount === "string" && typeof o.verified === "boolean");
  },
  isAmino(o: any): o is GenesisHealOpVerificationAmino {
    return o && (o.$typeUrl === GenesisHealOpVerification.typeUrl || typeof o.heal_op_id === "bigint" && typeof o.verifier_supernode_account === "string" && typeof o.verified === "boolean");
  },
  encode(message: GenesisHealOpVerification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.healOpId !== BigInt(0)) {
      writer.uint32(8).uint64(message.healOpId);
    }
    if (message.verifierSupernodeAccount !== "") {
      writer.uint32(18).string(message.verifierSupernodeAccount);
    }
    if (message.verified === true) {
      writer.uint32(24).bool(message.verified);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisHealOpVerification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisHealOpVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healOpId = reader.uint64();
          break;
        case 2:
          message.verifierSupernodeAccount = reader.string();
          break;
        case 3:
          message.verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisHealOpVerification>): GenesisHealOpVerification {
    const message = createBaseGenesisHealOpVerification();
    message.healOpId = object.healOpId !== undefined && object.healOpId !== null ? BigInt(object.healOpId.toString()) : BigInt(0);
    message.verifierSupernodeAccount = object.verifierSupernodeAccount ?? "";
    message.verified = object.verified ?? false;
    return message;
  },
  fromAmino(object: GenesisHealOpVerificationAmino): GenesisHealOpVerification {
    const message = createBaseGenesisHealOpVerification();
    if (object.heal_op_id !== undefined && object.heal_op_id !== null) {
      message.healOpId = BigInt(object.heal_op_id);
    }
    if (object.verifier_supernode_account !== undefined && object.verifier_supernode_account !== null) {
      message.verifierSupernodeAccount = object.verifier_supernode_account;
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    return message;
  },
  toAmino(message: GenesisHealOpVerification): GenesisHealOpVerificationAmino {
    const obj: any = {};
    obj.heal_op_id = message.healOpId !== BigInt(0) ? message.healOpId?.toString() : undefined;
    obj.verifier_supernode_account = message.verifierSupernodeAccount === "" ? undefined : message.verifierSupernodeAccount;
    obj.verified = message.verified === false ? undefined : message.verified;
    return obj;
  },
  fromAminoMsg(object: GenesisHealOpVerificationAminoMsg): GenesisHealOpVerification {
    return GenesisHealOpVerification.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisHealOpVerificationProtoMsg): GenesisHealOpVerification {
    return GenesisHealOpVerification.decode(message.value);
  },
  toProto(message: GenesisHealOpVerification): Uint8Array {
    return GenesisHealOpVerification.encode(message).finish();
  },
  toProtoMsg(message: GenesisHealOpVerification): GenesisHealOpVerificationProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisHealOpVerification",
      value: GenesisHealOpVerification.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisRecheckEvidence(): GenesisRecheckEvidence {
  return {
    epochId: BigInt(0),
    ticketId: "",
    creatorAccount: ""
  };
}
/**
 * GenesisRecheckEvidence — st/rce/ replay-protection key.
 * @name GenesisRecheckEvidence
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisRecheckEvidence
 */
export const GenesisRecheckEvidence = {
  typeUrl: "/lumera.audit.v1.GenesisRecheckEvidence",
  is(o: any): o is GenesisRecheckEvidence {
    return o && (o.$typeUrl === GenesisRecheckEvidence.typeUrl || typeof o.epochId === "bigint" && typeof o.ticketId === "string" && typeof o.creatorAccount === "string");
  },
  isAmino(o: any): o is GenesisRecheckEvidenceAmino {
    return o && (o.$typeUrl === GenesisRecheckEvidence.typeUrl || typeof o.epoch_id === "bigint" && typeof o.ticket_id === "string" && typeof o.creator_account === "string");
  },
  encode(message: GenesisRecheckEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.ticketId !== "") {
      writer.uint32(18).string(message.ticketId);
    }
    if (message.creatorAccount !== "") {
      writer.uint32(26).string(message.creatorAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisRecheckEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisRecheckEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.ticketId = reader.string();
          break;
        case 3:
          message.creatorAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisRecheckEvidence>): GenesisRecheckEvidence {
    const message = createBaseGenesisRecheckEvidence();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.ticketId = object.ticketId ?? "";
    message.creatorAccount = object.creatorAccount ?? "";
    return message;
  },
  fromAmino(object: GenesisRecheckEvidenceAmino): GenesisRecheckEvidence {
    const message = createBaseGenesisRecheckEvidence();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.creator_account !== undefined && object.creator_account !== null) {
      message.creatorAccount = object.creator_account;
    }
    return message;
  },
  toAmino(message: GenesisRecheckEvidence): GenesisRecheckEvidenceAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.creator_account = message.creatorAccount === "" ? undefined : message.creatorAccount;
    return obj;
  },
  fromAminoMsg(object: GenesisRecheckEvidenceAminoMsg): GenesisRecheckEvidence {
    return GenesisRecheckEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisRecheckEvidenceProtoMsg): GenesisRecheckEvidence {
    return GenesisRecheckEvidence.decode(message.value);
  },
  toProto(message: GenesisRecheckEvidence): Uint8Array {
    return GenesisRecheckEvidence.encode(message).finish();
  },
  toProtoMsg(message: GenesisRecheckEvidence): GenesisRecheckEvidenceProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisRecheckEvidence",
      value: GenesisRecheckEvidence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisStorageProofTranscript(): GenesisStorageProofTranscript {
  return {
    transcriptHash: "",
    recordJson: new Uint8Array()
  };
}
/**
 * GenesisStorageProofTranscript — st/spt/ value (JSON-encoded record).
 * The opaque record_json blob is the keeper's storageProofTranscriptRecord
 * JSON marshaling. InitGenesis re-writes via the existing setter so the
 * st/spt-tbe/ secondary index is rebuilt deterministically.
 * @name GenesisStorageProofTranscript
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisStorageProofTranscript
 */
export const GenesisStorageProofTranscript = {
  typeUrl: "/lumera.audit.v1.GenesisStorageProofTranscript",
  is(o: any): o is GenesisStorageProofTranscript {
    return o && (o.$typeUrl === GenesisStorageProofTranscript.typeUrl || typeof o.transcriptHash === "string" && (o.recordJson instanceof Uint8Array || typeof o.recordJson === "string"));
  },
  isAmino(o: any): o is GenesisStorageProofTranscriptAmino {
    return o && (o.$typeUrl === GenesisStorageProofTranscript.typeUrl || typeof o.transcript_hash === "string" && (o.record_json instanceof Uint8Array || typeof o.record_json === "string"));
  },
  encode(message: GenesisStorageProofTranscript, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transcriptHash !== "") {
      writer.uint32(10).string(message.transcriptHash);
    }
    if (message.recordJson.length !== 0) {
      writer.uint32(18).bytes(message.recordJson);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisStorageProofTranscript {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisStorageProofTranscript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transcriptHash = reader.string();
          break;
        case 2:
          message.recordJson = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisStorageProofTranscript>): GenesisStorageProofTranscript {
    const message = createBaseGenesisStorageProofTranscript();
    message.transcriptHash = object.transcriptHash ?? "";
    message.recordJson = object.recordJson ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisStorageProofTranscriptAmino): GenesisStorageProofTranscript {
    const message = createBaseGenesisStorageProofTranscript();
    if (object.transcript_hash !== undefined && object.transcript_hash !== null) {
      message.transcriptHash = object.transcript_hash;
    }
    if (object.record_json !== undefined && object.record_json !== null) {
      message.recordJson = bytesFromBase64(object.record_json);
    }
    return message;
  },
  toAmino(message: GenesisStorageProofTranscript): GenesisStorageProofTranscriptAmino {
    const obj: any = {};
    obj.transcript_hash = message.transcriptHash === "" ? undefined : message.transcriptHash;
    obj.record_json = message.recordJson ? base64FromBytes(message.recordJson) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStorageProofTranscriptAminoMsg): GenesisStorageProofTranscript {
    return GenesisStorageProofTranscript.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStorageProofTranscriptProtoMsg): GenesisStorageProofTranscript {
    return GenesisStorageProofTranscript.decode(message.value);
  },
  toProto(message: GenesisStorageProofTranscript): Uint8Array {
    return GenesisStorageProofTranscript.encode(message).finish();
  },
  toProtoMsg(message: GenesisStorageProofTranscript): GenesisStorageProofTranscriptProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisStorageProofTranscript",
      value: GenesisStorageProofTranscript.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisNodeFailureFact(): GenesisNodeFailureFact {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    ticketId: "",
    reporterAccount: "",
    recordJson: new Uint8Array()
  };
}
/**
 * GenesisNodeFailureFact — st/nf/ entry (JSON-encoded record).
 * @name GenesisNodeFailureFact
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisNodeFailureFact
 */
export const GenesisNodeFailureFact = {
  typeUrl: "/lumera.audit.v1.GenesisNodeFailureFact",
  is(o: any): o is GenesisNodeFailureFact {
    return o && (o.$typeUrl === GenesisNodeFailureFact.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.ticketId === "string" && typeof o.reporterAccount === "string" && (o.recordJson instanceof Uint8Array || typeof o.recordJson === "string"));
  },
  isAmino(o: any): o is GenesisNodeFailureFactAmino {
    return o && (o.$typeUrl === GenesisNodeFailureFact.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.ticket_id === "string" && typeof o.reporter_account === "string" && (o.record_json instanceof Uint8Array || typeof o.record_json === "string"));
  },
  encode(message: GenesisNodeFailureFact, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.ticketId !== "") {
      writer.uint32(26).string(message.ticketId);
    }
    if (message.reporterAccount !== "") {
      writer.uint32(34).string(message.reporterAccount);
    }
    if (message.recordJson.length !== 0) {
      writer.uint32(42).bytes(message.recordJson);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisNodeFailureFact {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisNodeFailureFact();
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
          message.ticketId = reader.string();
          break;
        case 4:
          message.reporterAccount = reader.string();
          break;
        case 5:
          message.recordJson = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisNodeFailureFact>): GenesisNodeFailureFact {
    const message = createBaseGenesisNodeFailureFact();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.ticketId = object.ticketId ?? "";
    message.reporterAccount = object.reporterAccount ?? "";
    message.recordJson = object.recordJson ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisNodeFailureFactAmino): GenesisNodeFailureFact {
    const message = createBaseGenesisNodeFailureFact();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.reporter_account !== undefined && object.reporter_account !== null) {
      message.reporterAccount = object.reporter_account;
    }
    if (object.record_json !== undefined && object.record_json !== null) {
      message.recordJson = bytesFromBase64(object.record_json);
    }
    return message;
  },
  toAmino(message: GenesisNodeFailureFact): GenesisNodeFailureFactAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.reporter_account = message.reporterAccount === "" ? undefined : message.reporterAccount;
    obj.record_json = message.recordJson ? base64FromBytes(message.recordJson) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisNodeFailureFactAminoMsg): GenesisNodeFailureFact {
    return GenesisNodeFailureFact.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisNodeFailureFactProtoMsg): GenesisNodeFailureFact {
    return GenesisNodeFailureFact.decode(message.value);
  },
  toProto(message: GenesisNodeFailureFact): Uint8Array {
    return GenesisNodeFailureFact.encode(message).finish();
  },
  toProtoMsg(message: GenesisNodeFailureFact): GenesisNodeFailureFactProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisNodeFailureFact",
      value: GenesisNodeFailureFact.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisReporterResultFact(): GenesisReporterResultFact {
  return {
    reporterAccount: "",
    epochId: BigInt(0),
    ticketId: "",
    targetAccount: "",
    recordJson: new Uint8Array()
  };
}
/**
 * GenesisReporterResultFact — st/rrs/ entry (JSON-encoded record).
 * Secondary indexes are rebuilt by the existing setter.
 * @name GenesisReporterResultFact
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisReporterResultFact
 */
export const GenesisReporterResultFact = {
  typeUrl: "/lumera.audit.v1.GenesisReporterResultFact",
  is(o: any): o is GenesisReporterResultFact {
    return o && (o.$typeUrl === GenesisReporterResultFact.typeUrl || typeof o.reporterAccount === "string" && typeof o.epochId === "bigint" && typeof o.ticketId === "string" && typeof o.targetAccount === "string" && (o.recordJson instanceof Uint8Array || typeof o.recordJson === "string"));
  },
  isAmino(o: any): o is GenesisReporterResultFactAmino {
    return o && (o.$typeUrl === GenesisReporterResultFact.typeUrl || typeof o.reporter_account === "string" && typeof o.epoch_id === "bigint" && typeof o.ticket_id === "string" && typeof o.target_account === "string" && (o.record_json instanceof Uint8Array || typeof o.record_json === "string"));
  },
  encode(message: GenesisReporterResultFact, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterAccount !== "") {
      writer.uint32(10).string(message.reporterAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.ticketId !== "") {
      writer.uint32(26).string(message.ticketId);
    }
    if (message.targetAccount !== "") {
      writer.uint32(34).string(message.targetAccount);
    }
    if (message.recordJson.length !== 0) {
      writer.uint32(42).bytes(message.recordJson);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisReporterResultFact {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisReporterResultFact();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterAccount = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        case 3:
          message.ticketId = reader.string();
          break;
        case 4:
          message.targetAccount = reader.string();
          break;
        case 5:
          message.recordJson = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisReporterResultFact>): GenesisReporterResultFact {
    const message = createBaseGenesisReporterResultFact();
    message.reporterAccount = object.reporterAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.ticketId = object.ticketId ?? "";
    message.targetAccount = object.targetAccount ?? "";
    message.recordJson = object.recordJson ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisReporterResultFactAmino): GenesisReporterResultFact {
    const message = createBaseGenesisReporterResultFact();
    if (object.reporter_account !== undefined && object.reporter_account !== null) {
      message.reporterAccount = object.reporter_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.target_account !== undefined && object.target_account !== null) {
      message.targetAccount = object.target_account;
    }
    if (object.record_json !== undefined && object.record_json !== null) {
      message.recordJson = bytesFromBase64(object.record_json);
    }
    return message;
  },
  toAmino(message: GenesisReporterResultFact): GenesisReporterResultFactAmino {
    const obj: any = {};
    obj.reporter_account = message.reporterAccount === "" ? undefined : message.reporterAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.target_account = message.targetAccount === "" ? undefined : message.targetAccount;
    obj.record_json = message.recordJson ? base64FromBytes(message.recordJson) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisReporterResultFactAminoMsg): GenesisReporterResultFact {
    return GenesisReporterResultFact.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisReporterResultFactProtoMsg): GenesisReporterResultFact {
    return GenesisReporterResultFact.decode(message.value);
  },
  toProto(message: GenesisReporterResultFact): Uint8Array {
    return GenesisReporterResultFact.encode(message).finish();
  },
  toProtoMsg(message: GenesisReporterResultFact): GenesisReporterResultFactProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisReporterResultFact",
      value: GenesisReporterResultFact.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisFailedHealMarker(): GenesisFailedHealMarker {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    ticketId: ""
  };
}
/**
 * GenesisFailedHealMarker — st/fh/ marker.
 * @name GenesisFailedHealMarker
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisFailedHealMarker
 */
export const GenesisFailedHealMarker = {
  typeUrl: "/lumera.audit.v1.GenesisFailedHealMarker",
  is(o: any): o is GenesisFailedHealMarker {
    return o && (o.$typeUrl === GenesisFailedHealMarker.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.ticketId === "string");
  },
  isAmino(o: any): o is GenesisFailedHealMarkerAmino {
    return o && (o.$typeUrl === GenesisFailedHealMarker.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.ticket_id === "string");
  },
  encode(message: GenesisFailedHealMarker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.ticketId !== "") {
      writer.uint32(26).string(message.ticketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisFailedHealMarker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisFailedHealMarker();
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
          message.ticketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisFailedHealMarker>): GenesisFailedHealMarker {
    const message = createBaseGenesisFailedHealMarker();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.ticketId = object.ticketId ?? "";
    return message;
  },
  fromAmino(object: GenesisFailedHealMarkerAmino): GenesisFailedHealMarker {
    const message = createBaseGenesisFailedHealMarker();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    return message;
  },
  toAmino(message: GenesisFailedHealMarker): GenesisFailedHealMarkerAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    return obj;
  },
  fromAminoMsg(object: GenesisFailedHealMarkerAminoMsg): GenesisFailedHealMarker {
    return GenesisFailedHealMarker.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisFailedHealMarkerProtoMsg): GenesisFailedHealMarker {
    return GenesisFailedHealMarker.decode(message.value);
  },
  toProto(message: GenesisFailedHealMarker): Uint8Array {
    return GenesisFailedHealMarker.encode(message).finish();
  },
  toProtoMsg(message: GenesisFailedHealMarker): GenesisFailedHealMarkerProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisFailedHealMarker",
      value: GenesisFailedHealMarker.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisReportIndex(): GenesisReportIndex {
  return {
    reporterSupernodeAccount: "",
    epochId: BigInt(0)
  };
}
/**
 * GenesisReportIndex — ri/ index entry.
 * @name GenesisReportIndex
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisReportIndex
 */
export const GenesisReportIndex = {
  typeUrl: "/lumera.audit.v1.GenesisReportIndex",
  is(o: any): o is GenesisReportIndex {
    return o && (o.$typeUrl === GenesisReportIndex.typeUrl || typeof o.reporterSupernodeAccount === "string" && typeof o.epochId === "bigint");
  },
  isAmino(o: any): o is GenesisReportIndexAmino {
    return o && (o.$typeUrl === GenesisReportIndex.typeUrl || typeof o.reporter_supernode_account === "string" && typeof o.epoch_id === "bigint");
  },
  encode(message: GenesisReportIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterSupernodeAccount !== "") {
      writer.uint32(10).string(message.reporterSupernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisReportIndex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisReportIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterSupernodeAccount = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisReportIndex>): GenesisReportIndex {
    const message = createBaseGenesisReportIndex();
    message.reporterSupernodeAccount = object.reporterSupernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisReportIndexAmino): GenesisReportIndex {
    const message = createBaseGenesisReportIndex();
    if (object.reporter_supernode_account !== undefined && object.reporter_supernode_account !== null) {
      message.reporterSupernodeAccount = object.reporter_supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    return message;
  },
  toAmino(message: GenesisReportIndex): GenesisReportIndexAmino {
    const obj: any = {};
    obj.reporter_supernode_account = message.reporterSupernodeAccount === "" ? undefined : message.reporterSupernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisReportIndexAminoMsg): GenesisReportIndex {
    return GenesisReportIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisReportIndexProtoMsg): GenesisReportIndex {
    return GenesisReportIndex.decode(message.value);
  },
  toProto(message: GenesisReportIndex): Uint8Array {
    return GenesisReportIndex.encode(message).finish();
  },
  toProtoMsg(message: GenesisReportIndex): GenesisReportIndexProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisReportIndex",
      value: GenesisReportIndex.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisHostReportIndex(): GenesisHostReportIndex {
  return {
    reporterSupernodeAccount: "",
    epochId: BigInt(0)
  };
}
/**
 * GenesisHostReportIndex — hr/ index entry.
 * @name GenesisHostReportIndex
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisHostReportIndex
 */
export const GenesisHostReportIndex = {
  typeUrl: "/lumera.audit.v1.GenesisHostReportIndex",
  is(o: any): o is GenesisHostReportIndex {
    return o && (o.$typeUrl === GenesisHostReportIndex.typeUrl || typeof o.reporterSupernodeAccount === "string" && typeof o.epochId === "bigint");
  },
  isAmino(o: any): o is GenesisHostReportIndexAmino {
    return o && (o.$typeUrl === GenesisHostReportIndex.typeUrl || typeof o.reporter_supernode_account === "string" && typeof o.epoch_id === "bigint");
  },
  encode(message: GenesisHostReportIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterSupernodeAccount !== "") {
      writer.uint32(10).string(message.reporterSupernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisHostReportIndex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisHostReportIndex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterSupernodeAccount = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisHostReportIndex>): GenesisHostReportIndex {
    const message = createBaseGenesisHostReportIndex();
    message.reporterSupernodeAccount = object.reporterSupernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisHostReportIndexAmino): GenesisHostReportIndex {
    const message = createBaseGenesisHostReportIndex();
    if (object.reporter_supernode_account !== undefined && object.reporter_supernode_account !== null) {
      message.reporterSupernodeAccount = object.reporter_supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    return message;
  },
  toAmino(message: GenesisHostReportIndex): GenesisHostReportIndexAmino {
    const obj: any = {};
    obj.reporter_supernode_account = message.reporterSupernodeAccount === "" ? undefined : message.reporterSupernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisHostReportIndexAminoMsg): GenesisHostReportIndex {
    return GenesisHostReportIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisHostReportIndexProtoMsg): GenesisHostReportIndex {
    return GenesisHostReportIndex.decode(message.value);
  },
  toProto(message: GenesisHostReportIndex): Uint8Array {
    return GenesisHostReportIndex.encode(message).finish();
  },
  toProtoMsg(message: GenesisHostReportIndex): GenesisHostReportIndexProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisHostReportIndex",
      value: GenesisHostReportIndex.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGenesisStorageChallengeIndex(): GenesisStorageChallengeIndex {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    reporterSupernodeAccount: ""
  };
}
/**
 * GenesisStorageChallengeIndex — sc/ index entry.
 * @name GenesisStorageChallengeIndex
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.GenesisStorageChallengeIndex
 */
export const GenesisStorageChallengeIndex = {
  typeUrl: "/lumera.audit.v1.GenesisStorageChallengeIndex",
  is(o: any): o is GenesisStorageChallengeIndex {
    return o && (o.$typeUrl === GenesisStorageChallengeIndex.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.reporterSupernodeAccount === "string");
  },
  isAmino(o: any): o is GenesisStorageChallengeIndexAmino {
    return o && (o.$typeUrl === GenesisStorageChallengeIndex.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.reporter_supernode_account === "string");
  },
  encode(message: GenesisStorageChallengeIndex, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.reporterSupernodeAccount !== "") {
      writer.uint32(26).string(message.reporterSupernodeAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisStorageChallengeIndex {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisStorageChallengeIndex();
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
          message.reporterSupernodeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisStorageChallengeIndex>): GenesisStorageChallengeIndex {
    const message = createBaseGenesisStorageChallengeIndex();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.reporterSupernodeAccount = object.reporterSupernodeAccount ?? "";
    return message;
  },
  fromAmino(object: GenesisStorageChallengeIndexAmino): GenesisStorageChallengeIndex {
    const message = createBaseGenesisStorageChallengeIndex();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.reporter_supernode_account !== undefined && object.reporter_supernode_account !== null) {
      message.reporterSupernodeAccount = object.reporter_supernode_account;
    }
    return message;
  },
  toAmino(message: GenesisStorageChallengeIndex): GenesisStorageChallengeIndexAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.reporter_supernode_account = message.reporterSupernodeAccount === "" ? undefined : message.reporterSupernodeAccount;
    return obj;
  },
  fromAminoMsg(object: GenesisStorageChallengeIndexAminoMsg): GenesisStorageChallengeIndex {
    return GenesisStorageChallengeIndex.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStorageChallengeIndexProtoMsg): GenesisStorageChallengeIndex {
    return GenesisStorageChallengeIndex.decode(message.value);
  },
  toProto(message: GenesisStorageChallengeIndex): Uint8Array {
    return GenesisStorageChallengeIndex.encode(message).finish();
  },
  toProtoMsg(message: GenesisStorageChallengeIndex): GenesisStorageChallengeIndexProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.GenesisStorageChallengeIndex",
      value: GenesisStorageChallengeIndex.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};