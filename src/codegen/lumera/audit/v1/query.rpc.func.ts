// @ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryEvidenceByIdRequest, QueryEvidenceByIdResponse, QueryEvidenceBySubjectRequest, QueryEvidenceBySubjectResponse, QueryEvidenceByActionRequest, QueryEvidenceByActionResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochAnchorRequest, QueryEpochAnchorResponse, QueryCurrentEpochAnchorRequest, QueryCurrentEpochAnchorResponse, QueryAssignedTargetsRequest, QueryAssignedTargetsResponse, QueryEpochReportRequest, QueryEpochReportResponse, QueryEpochReportsByReporterRequest, QueryEpochReportsByReporterResponse, QueryStorageChallengeReportsRequest, QueryStorageChallengeReportsResponse, QueryHostReportsRequest, QueryHostReportsResponse, QueryNodeSuspicionStateRequest, QueryNodeSuspicionStateResponse, QueryReporterReliabilityStateRequest, QueryReporterReliabilityStateResponse, QueryTicketDeteriorationStateRequest, QueryTicketDeteriorationStateResponse, QueryHealOpRequest, QueryHealOpResponse, QueryHealOpsByTicketRequest, QueryHealOpsByTicketResponse, QueryHealOpsByStatusRequest, QueryHealOpsByStatusResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * EvidenceById queries a single evidence record by id.
 * @name getEvidenceById
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.EvidenceById
 */
export const getEvidenceById = buildQuery<QueryEvidenceByIdRequest, QueryEvidenceByIdResponse>({
  encode: QueryEvidenceByIdRequest.encode,
  decode: QueryEvidenceByIdResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "EvidenceById",
  deps: [QueryEvidenceByIdRequest, QueryEvidenceByIdResponse]
});
/**
 * EvidenceBySubject queries evidence records by subject address.
 * @name getEvidenceBySubject
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.EvidenceBySubject
 */
export const getEvidenceBySubject = buildQuery<QueryEvidenceBySubjectRequest, QueryEvidenceBySubjectResponse>({
  encode: QueryEvidenceBySubjectRequest.encode,
  decode: QueryEvidenceBySubjectResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "EvidenceBySubject",
  deps: [QueryEvidenceBySubjectRequest, QueryEvidenceBySubjectResponse]
});
/**
 * EvidenceByAction queries evidence records by action id.
 * @name getEvidenceByAction
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.EvidenceByAction
 */
export const getEvidenceByAction = buildQuery<QueryEvidenceByActionRequest, QueryEvidenceByActionResponse>({
  encode: QueryEvidenceByActionRequest.encode,
  decode: QueryEvidenceByActionResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "EvidenceByAction",
  deps: [QueryEvidenceByActionRequest, QueryEvidenceByActionResponse]
});
/**
 * CurrentEpoch returns the current derived epoch boundaries at the current chain height.
 * @name getCurrentEpoch
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.CurrentEpoch
 */
export const getCurrentEpoch = buildQuery<QueryCurrentEpochRequest, QueryCurrentEpochResponse>({
  encode: QueryCurrentEpochRequest.encode,
  decode: QueryCurrentEpochResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "CurrentEpoch",
  deps: [QueryCurrentEpochRequest, QueryCurrentEpochResponse]
});
/**
 * EpochAnchor returns the persisted epoch anchor for the given epoch_id.
 * @name getEpochAnchor
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.EpochAnchor
 */
export const getEpochAnchor = buildQuery<QueryEpochAnchorRequest, QueryEpochAnchorResponse>({
  encode: QueryEpochAnchorRequest.encode,
  decode: QueryEpochAnchorResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "EpochAnchor",
  deps: [QueryEpochAnchorRequest, QueryEpochAnchorResponse]
});
/**
 * CurrentEpochAnchor returns the persisted epoch anchor for the current epoch.
 * @name getCurrentEpochAnchor
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.CurrentEpochAnchor
 */
export const getCurrentEpochAnchor = buildQuery<QueryCurrentEpochAnchorRequest, QueryCurrentEpochAnchorResponse>({
  encode: QueryCurrentEpochAnchorRequest.encode,
  decode: QueryCurrentEpochAnchorResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "CurrentEpochAnchor",
  deps: [QueryCurrentEpochAnchorRequest, QueryCurrentEpochAnchorResponse]
});
/**
 * AssignedTargets returns the prober -> targets assignment for a given supernode_account.
 * If filter_by_epoch_id is false, it returns the assignments for the current epoch.
 * @name getAssignedTargets
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.AssignedTargets
 */
export const getAssignedTargets = buildQuery<QueryAssignedTargetsRequest, QueryAssignedTargetsResponse>({
  encode: QueryAssignedTargetsRequest.encode,
  decode: QueryAssignedTargetsResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "AssignedTargets",
  deps: [QueryAssignedTargetsRequest, QueryAssignedTargetsResponse]
});
/**
 * EpochReport returns the submitted epoch report for (epoch_id, supernode_account).
 * @name getEpochReport
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.EpochReport
 */
export const getEpochReport = buildQuery<QueryEpochReportRequest, QueryEpochReportResponse>({
  encode: QueryEpochReportRequest.encode,
  decode: QueryEpochReportResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "EpochReport",
  deps: [QueryEpochReportRequest, QueryEpochReportResponse]
});
/**
 * EpochReportsByReporter returns epoch reports submitted by the given reporter across epochs.
 * @name getEpochReportsByReporter
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.EpochReportsByReporter
 */
export const getEpochReportsByReporter = buildQuery<QueryEpochReportsByReporterRequest, QueryEpochReportsByReporterResponse>({
  encode: QueryEpochReportsByReporterRequest.encode,
  decode: QueryEpochReportsByReporterResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "EpochReportsByReporter",
  deps: [QueryEpochReportsByReporterRequest, QueryEpochReportsByReporterResponse]
});
/**
 * StorageChallengeReports returns all reports that include storage-challenge observations about the given supernode_account.
 * @name getStorageChallengeReports
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.StorageChallengeReports
 */
export const getStorageChallengeReports = buildQuery<QueryStorageChallengeReportsRequest, QueryStorageChallengeReportsResponse>({
  encode: QueryStorageChallengeReportsRequest.encode,
  decode: QueryStorageChallengeReportsResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "StorageChallengeReports",
  deps: [QueryStorageChallengeReportsRequest, QueryStorageChallengeReportsResponse]
});
/**
 * HostReports returns host reports submitted by the given supernode_account across epochs.
 * @name getHostReports
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.HostReports
 */
export const getHostReports = buildQuery<QueryHostReportsRequest, QueryHostReportsResponse>({
  encode: QueryHostReportsRequest.encode,
  decode: QueryHostReportsResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "HostReports",
  deps: [QueryHostReportsRequest, QueryHostReportsResponse]
});
/**
 * NodeSuspicionState returns storage-truth node suspicion state for a supernode account.
 * @name getNodeSuspicionState
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.NodeSuspicionState
 */
export const getNodeSuspicionState = buildQuery<QueryNodeSuspicionStateRequest, QueryNodeSuspicionStateResponse>({
  encode: QueryNodeSuspicionStateRequest.encode,
  decode: QueryNodeSuspicionStateResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "NodeSuspicionState",
  deps: [QueryNodeSuspicionStateRequest, QueryNodeSuspicionStateResponse]
});
/**
 * ReporterReliabilityState returns storage-truth reporter reliability state for a reporter account.
 * @name getReporterReliabilityState
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.ReporterReliabilityState
 */
export const getReporterReliabilityState = buildQuery<QueryReporterReliabilityStateRequest, QueryReporterReliabilityStateResponse>({
  encode: QueryReporterReliabilityStateRequest.encode,
  decode: QueryReporterReliabilityStateResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "ReporterReliabilityState",
  deps: [QueryReporterReliabilityStateRequest, QueryReporterReliabilityStateResponse]
});
/**
 * TicketDeteriorationState returns storage-truth ticket deterioration state for a ticket id.
 * @name getTicketDeteriorationState
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.TicketDeteriorationState
 */
export const getTicketDeteriorationState = buildQuery<QueryTicketDeteriorationStateRequest, QueryTicketDeteriorationStateResponse>({
  encode: QueryTicketDeteriorationStateRequest.encode,
  decode: QueryTicketDeteriorationStateResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "TicketDeteriorationState",
  deps: [QueryTicketDeteriorationStateRequest, QueryTicketDeteriorationStateResponse]
});
/**
 * HealOp returns a single storage-truth heal operation by id.
 * @name getHealOp
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.HealOp
 */
export const getHealOp = buildQuery<QueryHealOpRequest, QueryHealOpResponse>({
  encode: QueryHealOpRequest.encode,
  decode: QueryHealOpResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "HealOp",
  deps: [QueryHealOpRequest, QueryHealOpResponse]
});
/**
 * HealOpsByTicket returns storage-truth heal operations for a ticket id.
 * @name getHealOpsByTicket
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.HealOpsByTicket
 */
export const getHealOpsByTicket = buildQuery<QueryHealOpsByTicketRequest, QueryHealOpsByTicketResponse>({
  encode: QueryHealOpsByTicketRequest.encode,
  decode: QueryHealOpsByTicketResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "HealOpsByTicket",
  deps: [QueryHealOpsByTicketRequest, QueryHealOpsByTicketResponse]
});
/**
 * HealOpsByStatus returns storage-truth heal operations filtered by status.
 * @name getHealOpsByStatus
 * @package lumera.audit.v1
 * @see proto service: lumera.audit.v1.HealOpsByStatus
 */
export const getHealOpsByStatus = buildQuery<QueryHealOpsByStatusRequest, QueryHealOpsByStatusResponse>({
  encode: QueryHealOpsByStatusRequest.encode,
  decode: QueryHealOpsByStatusResponse.decode,
  service: "lumera.audit.v1.Query",
  method: "HealOpsByStatus",
  deps: [QueryHealOpsByStatusRequest, QueryHealOpsByStatusResponse]
});