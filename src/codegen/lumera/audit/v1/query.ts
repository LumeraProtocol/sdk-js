// @ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { HealOpStatus, EpochReport, EpochReportAmino, PortState, HostReport, HostReportAmino, NodeSuspicionState, NodeSuspicionStateAmino, ReporterReliabilityState, ReporterReliabilityStateAmino, TicketDeteriorationState, TicketDeteriorationStateAmino, HealOp, HealOpAmino } from "./audit";
import { Params, ParamsAmino } from "./params";
import { Evidence, EvidenceAmino } from "./evidence";
import { EpochAnchor, EpochAnchorAmino } from "./epoch";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name QueryParamsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * @name QueryParamsRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lumera.audit.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * @name QueryParamsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * @name QueryParamsResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lumera.audit.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QueryEvidenceByIdRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByIdRequest
 */
export interface QueryEvidenceByIdRequest {
  evidenceId: bigint;
}
export interface QueryEvidenceByIdRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByIdRequest";
  value: Uint8Array;
}
/**
 * @name QueryEvidenceByIdRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByIdRequest
 */
export interface QueryEvidenceByIdRequestAmino {
  evidence_id: string;
}
export interface QueryEvidenceByIdRequestAminoMsg {
  type: "/lumera.audit.v1.QueryEvidenceByIdRequest";
  value: QueryEvidenceByIdRequestAmino;
}
/**
 * @name QueryEvidenceByIdResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByIdResponse
 */
export interface QueryEvidenceByIdResponse {
  evidence: Evidence;
}
export interface QueryEvidenceByIdResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByIdResponse";
  value: Uint8Array;
}
/**
 * @name QueryEvidenceByIdResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByIdResponse
 */
export interface QueryEvidenceByIdResponseAmino {
  evidence: EvidenceAmino;
}
export interface QueryEvidenceByIdResponseAminoMsg {
  type: "/lumera.audit.v1.QueryEvidenceByIdResponse";
  value: QueryEvidenceByIdResponseAmino;
}
/**
 * @name QueryEvidenceBySubjectRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceBySubjectRequest
 */
export interface QueryEvidenceBySubjectRequest {
  subjectAddress: string;
  pagination?: PageRequest;
}
export interface QueryEvidenceBySubjectRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEvidenceBySubjectRequest";
  value: Uint8Array;
}
/**
 * @name QueryEvidenceBySubjectRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceBySubjectRequest
 */
export interface QueryEvidenceBySubjectRequestAmino {
  subject_address: string;
  pagination?: PageRequestAmino;
}
export interface QueryEvidenceBySubjectRequestAminoMsg {
  type: "/lumera.audit.v1.QueryEvidenceBySubjectRequest";
  value: QueryEvidenceBySubjectRequestAmino;
}
/**
 * @name QueryEvidenceBySubjectResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceBySubjectResponse
 */
export interface QueryEvidenceBySubjectResponse {
  evidence: Evidence[];
  pagination?: PageResponse;
}
export interface QueryEvidenceBySubjectResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEvidenceBySubjectResponse";
  value: Uint8Array;
}
/**
 * @name QueryEvidenceBySubjectResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceBySubjectResponse
 */
export interface QueryEvidenceBySubjectResponseAmino {
  evidence: EvidenceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEvidenceBySubjectResponseAminoMsg {
  type: "/lumera.audit.v1.QueryEvidenceBySubjectResponse";
  value: QueryEvidenceBySubjectResponseAmino;
}
/**
 * @name QueryEvidenceByActionRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByActionRequest
 */
export interface QueryEvidenceByActionRequest {
  actionId: string;
  pagination?: PageRequest;
}
export interface QueryEvidenceByActionRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByActionRequest";
  value: Uint8Array;
}
/**
 * @name QueryEvidenceByActionRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByActionRequest
 */
export interface QueryEvidenceByActionRequestAmino {
  action_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryEvidenceByActionRequestAminoMsg {
  type: "/lumera.audit.v1.QueryEvidenceByActionRequest";
  value: QueryEvidenceByActionRequestAmino;
}
/**
 * @name QueryEvidenceByActionResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByActionResponse
 */
export interface QueryEvidenceByActionResponse {
  evidence: Evidence[];
  pagination?: PageResponse;
}
export interface QueryEvidenceByActionResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByActionResponse";
  value: Uint8Array;
}
/**
 * @name QueryEvidenceByActionResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByActionResponse
 */
export interface QueryEvidenceByActionResponseAmino {
  evidence: EvidenceAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEvidenceByActionResponseAminoMsg {
  type: "/lumera.audit.v1.QueryEvidenceByActionResponse";
  value: QueryEvidenceByActionResponseAmino;
}
/**
 * @name QueryCurrentEpochRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochRequest
 */
export interface QueryCurrentEpochRequest {}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurrentEpochRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochRequest
 */
export interface QueryCurrentEpochRequestAmino {}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "/lumera.audit.v1.QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
/**
 * @name QueryCurrentEpochResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochResponse
 */
export interface QueryCurrentEpochResponse {
  epochId: bigint;
  epochStartHeight: bigint;
  epochEndHeight: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurrentEpochResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochResponse
 */
export interface QueryCurrentEpochResponseAmino {
  epoch_id: string;
  epoch_start_height: string;
  epoch_end_height: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "/lumera.audit.v1.QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
/**
 * @name QueryEpochAnchorRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochAnchorRequest
 */
export interface QueryEpochAnchorRequest {
  epochId: bigint;
}
export interface QueryEpochAnchorRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEpochAnchorRequest";
  value: Uint8Array;
}
/**
 * @name QueryEpochAnchorRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochAnchorRequest
 */
export interface QueryEpochAnchorRequestAmino {
  epoch_id: string;
}
export interface QueryEpochAnchorRequestAminoMsg {
  type: "/lumera.audit.v1.QueryEpochAnchorRequest";
  value: QueryEpochAnchorRequestAmino;
}
/**
 * @name QueryEpochAnchorResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochAnchorResponse
 */
export interface QueryEpochAnchorResponse {
  anchor: EpochAnchor;
}
export interface QueryEpochAnchorResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEpochAnchorResponse";
  value: Uint8Array;
}
/**
 * @name QueryEpochAnchorResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochAnchorResponse
 */
export interface QueryEpochAnchorResponseAmino {
  anchor: EpochAnchorAmino;
}
export interface QueryEpochAnchorResponseAminoMsg {
  type: "/lumera.audit.v1.QueryEpochAnchorResponse";
  value: QueryEpochAnchorResponseAmino;
}
/**
 * @name QueryCurrentEpochAnchorRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochAnchorRequest
 */
export interface QueryCurrentEpochAnchorRequest {}
export interface QueryCurrentEpochAnchorRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochAnchorRequest";
  value: Uint8Array;
}
/**
 * @name QueryCurrentEpochAnchorRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochAnchorRequest
 */
export interface QueryCurrentEpochAnchorRequestAmino {}
export interface QueryCurrentEpochAnchorRequestAminoMsg {
  type: "/lumera.audit.v1.QueryCurrentEpochAnchorRequest";
  value: QueryCurrentEpochAnchorRequestAmino;
}
/**
 * @name QueryCurrentEpochAnchorResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochAnchorResponse
 */
export interface QueryCurrentEpochAnchorResponse {
  anchor: EpochAnchor;
}
export interface QueryCurrentEpochAnchorResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochAnchorResponse";
  value: Uint8Array;
}
/**
 * @name QueryCurrentEpochAnchorResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochAnchorResponse
 */
export interface QueryCurrentEpochAnchorResponseAmino {
  anchor: EpochAnchorAmino;
}
export interface QueryCurrentEpochAnchorResponseAminoMsg {
  type: "/lumera.audit.v1.QueryCurrentEpochAnchorResponse";
  value: QueryCurrentEpochAnchorResponseAmino;
}
/**
 * @name QueryAssignedTargetsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryAssignedTargetsRequest
 */
export interface QueryAssignedTargetsRequest {
  supernodeAccount: string;
  epochId: bigint;
  filterByEpochId: boolean;
}
export interface QueryAssignedTargetsRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryAssignedTargetsRequest";
  value: Uint8Array;
}
/**
 * @name QueryAssignedTargetsRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryAssignedTargetsRequest
 */
export interface QueryAssignedTargetsRequestAmino {
  supernode_account: string;
  epoch_id: string;
  filter_by_epoch_id: boolean;
}
export interface QueryAssignedTargetsRequestAminoMsg {
  type: "/lumera.audit.v1.QueryAssignedTargetsRequest";
  value: QueryAssignedTargetsRequestAmino;
}
/**
 * @name QueryAssignedTargetsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryAssignedTargetsResponse
 */
export interface QueryAssignedTargetsResponse {
  epochId: bigint;
  epochStartHeight: bigint;
  requiredOpenPorts: number[];
  targetSupernodeAccounts: string[];
}
export interface QueryAssignedTargetsResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryAssignedTargetsResponse";
  value: Uint8Array;
}
/**
 * @name QueryAssignedTargetsResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryAssignedTargetsResponse
 */
export interface QueryAssignedTargetsResponseAmino {
  epoch_id: string;
  epoch_start_height: string;
  required_open_ports: number[];
  target_supernode_accounts: string[];
}
export interface QueryAssignedTargetsResponseAminoMsg {
  type: "/lumera.audit.v1.QueryAssignedTargetsResponse";
  value: QueryAssignedTargetsResponseAmino;
}
/**
 * @name QueryEpochReportRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportRequest
 */
export interface QueryEpochReportRequest {
  epochId: bigint;
  supernodeAccount: string;
}
export interface QueryEpochReportRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEpochReportRequest";
  value: Uint8Array;
}
/**
 * @name QueryEpochReportRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportRequest
 */
export interface QueryEpochReportRequestAmino {
  epoch_id: string;
  supernode_account: string;
}
export interface QueryEpochReportRequestAminoMsg {
  type: "/lumera.audit.v1.QueryEpochReportRequest";
  value: QueryEpochReportRequestAmino;
}
/**
 * @name QueryEpochReportResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportResponse
 */
export interface QueryEpochReportResponse {
  report: EpochReport;
}
export interface QueryEpochReportResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEpochReportResponse";
  value: Uint8Array;
}
/**
 * @name QueryEpochReportResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportResponse
 */
export interface QueryEpochReportResponseAmino {
  report: EpochReportAmino;
}
export interface QueryEpochReportResponseAminoMsg {
  type: "/lumera.audit.v1.QueryEpochReportResponse";
  value: QueryEpochReportResponseAmino;
}
/**
 * @name QueryEpochReportsByReporterRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportsByReporterRequest
 */
export interface QueryEpochReportsByReporterRequest {
  supernodeAccount: string;
  epochId: bigint;
  pagination?: PageRequest;
  filterByEpochId: boolean;
}
export interface QueryEpochReportsByReporterRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEpochReportsByReporterRequest";
  value: Uint8Array;
}
/**
 * @name QueryEpochReportsByReporterRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportsByReporterRequest
 */
export interface QueryEpochReportsByReporterRequestAmino {
  supernode_account: string;
  epoch_id: string;
  pagination?: PageRequestAmino;
  filter_by_epoch_id: boolean;
}
export interface QueryEpochReportsByReporterRequestAminoMsg {
  type: "/lumera.audit.v1.QueryEpochReportsByReporterRequest";
  value: QueryEpochReportsByReporterRequestAmino;
}
/**
 * @name QueryEpochReportsByReporterResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportsByReporterResponse
 */
export interface QueryEpochReportsByReporterResponse {
  reports: EpochReport[];
  pagination?: PageResponse;
}
export interface QueryEpochReportsByReporterResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryEpochReportsByReporterResponse";
  value: Uint8Array;
}
/**
 * @name QueryEpochReportsByReporterResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportsByReporterResponse
 */
export interface QueryEpochReportsByReporterResponseAmino {
  reports: EpochReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEpochReportsByReporterResponseAminoMsg {
  type: "/lumera.audit.v1.QueryEpochReportsByReporterResponse";
  value: QueryEpochReportsByReporterResponseAmino;
}
/**
 * @name QueryStorageChallengeReportsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryStorageChallengeReportsRequest
 */
export interface QueryStorageChallengeReportsRequest {
  supernodeAccount: string;
  epochId: bigint;
  pagination?: PageRequest;
  filterByEpochId: boolean;
}
export interface QueryStorageChallengeReportsRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryStorageChallengeReportsRequest";
  value: Uint8Array;
}
/**
 * @name QueryStorageChallengeReportsRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryStorageChallengeReportsRequest
 */
export interface QueryStorageChallengeReportsRequestAmino {
  supernode_account: string;
  epoch_id: string;
  pagination?: PageRequestAmino;
  filter_by_epoch_id: boolean;
}
export interface QueryStorageChallengeReportsRequestAminoMsg {
  type: "/lumera.audit.v1.QueryStorageChallengeReportsRequest";
  value: QueryStorageChallengeReportsRequestAmino;
}
/**
 * @name StorageChallengeReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeReport
 */
export interface StorageChallengeReport {
  reporterSupernodeAccount: string;
  epochId: bigint;
  reportHeight: bigint;
  portStates: PortState[];
}
export interface StorageChallengeReportProtoMsg {
  typeUrl: "/lumera.audit.v1.StorageChallengeReport";
  value: Uint8Array;
}
/**
 * @name StorageChallengeReportAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeReport
 */
export interface StorageChallengeReportAmino {
  reporter_supernode_account: string;
  epoch_id: string;
  report_height: string;
  port_states: PortState[];
}
export interface StorageChallengeReportAminoMsg {
  type: "/lumera.audit.v1.StorageChallengeReport";
  value: StorageChallengeReportAmino;
}
/**
 * @name QueryStorageChallengeReportsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryStorageChallengeReportsResponse
 */
export interface QueryStorageChallengeReportsResponse {
  reports: StorageChallengeReport[];
  pagination?: PageResponse;
}
export interface QueryStorageChallengeReportsResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryStorageChallengeReportsResponse";
  value: Uint8Array;
}
/**
 * @name QueryStorageChallengeReportsResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryStorageChallengeReportsResponse
 */
export interface QueryStorageChallengeReportsResponseAmino {
  reports: StorageChallengeReportAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryStorageChallengeReportsResponseAminoMsg {
  type: "/lumera.audit.v1.QueryStorageChallengeReportsResponse";
  value: QueryStorageChallengeReportsResponseAmino;
}
/**
 * @name QueryHostReportsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHostReportsRequest
 */
export interface QueryHostReportsRequest {
  supernodeAccount: string;
  epochId: bigint;
  pagination?: PageRequest;
  filterByEpochId: boolean;
}
export interface QueryHostReportsRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHostReportsRequest";
  value: Uint8Array;
}
/**
 * @name QueryHostReportsRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHostReportsRequest
 */
export interface QueryHostReportsRequestAmino {
  supernode_account: string;
  epoch_id: string;
  pagination?: PageRequestAmino;
  filter_by_epoch_id: boolean;
}
export interface QueryHostReportsRequestAminoMsg {
  type: "/lumera.audit.v1.QueryHostReportsRequest";
  value: QueryHostReportsRequestAmino;
}
/**
 * @name HostReportEntry
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HostReportEntry
 */
export interface HostReportEntry {
  epochId: bigint;
  reportHeight: bigint;
  hostReport: HostReport;
}
export interface HostReportEntryProtoMsg {
  typeUrl: "/lumera.audit.v1.HostReportEntry";
  value: Uint8Array;
}
/**
 * @name HostReportEntryAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HostReportEntry
 */
export interface HostReportEntryAmino {
  epoch_id: string;
  report_height: string;
  host_report: HostReportAmino;
}
export interface HostReportEntryAminoMsg {
  type: "/lumera.audit.v1.HostReportEntry";
  value: HostReportEntryAmino;
}
/**
 * @name QueryHostReportsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHostReportsResponse
 */
export interface QueryHostReportsResponse {
  reports: HostReportEntry[];
  pagination?: PageResponse;
}
export interface QueryHostReportsResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHostReportsResponse";
  value: Uint8Array;
}
/**
 * @name QueryHostReportsResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHostReportsResponse
 */
export interface QueryHostReportsResponseAmino {
  reports: HostReportEntryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryHostReportsResponseAminoMsg {
  type: "/lumera.audit.v1.QueryHostReportsResponse";
  value: QueryHostReportsResponseAmino;
}
/**
 * @name QueryNodeSuspicionStateRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryNodeSuspicionStateRequest
 */
export interface QueryNodeSuspicionStateRequest {
  supernodeAccount: string;
}
export interface QueryNodeSuspicionStateRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryNodeSuspicionStateRequest";
  value: Uint8Array;
}
/**
 * @name QueryNodeSuspicionStateRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryNodeSuspicionStateRequest
 */
export interface QueryNodeSuspicionStateRequestAmino {
  supernode_account: string;
}
export interface QueryNodeSuspicionStateRequestAminoMsg {
  type: "/lumera.audit.v1.QueryNodeSuspicionStateRequest";
  value: QueryNodeSuspicionStateRequestAmino;
}
/**
 * @name QueryNodeSuspicionStateResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryNodeSuspicionStateResponse
 */
export interface QueryNodeSuspicionStateResponse {
  state: NodeSuspicionState;
}
export interface QueryNodeSuspicionStateResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryNodeSuspicionStateResponse";
  value: Uint8Array;
}
/**
 * @name QueryNodeSuspicionStateResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryNodeSuspicionStateResponse
 */
export interface QueryNodeSuspicionStateResponseAmino {
  state: NodeSuspicionStateAmino;
}
export interface QueryNodeSuspicionStateResponseAminoMsg {
  type: "/lumera.audit.v1.QueryNodeSuspicionStateResponse";
  value: QueryNodeSuspicionStateResponseAmino;
}
/**
 * @name QueryReporterReliabilityStateRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryReporterReliabilityStateRequest
 */
export interface QueryReporterReliabilityStateRequest {
  reporterSupernodeAccount: string;
}
export interface QueryReporterReliabilityStateRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryReporterReliabilityStateRequest";
  value: Uint8Array;
}
/**
 * @name QueryReporterReliabilityStateRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryReporterReliabilityStateRequest
 */
export interface QueryReporterReliabilityStateRequestAmino {
  reporter_supernode_account: string;
}
export interface QueryReporterReliabilityStateRequestAminoMsg {
  type: "/lumera.audit.v1.QueryReporterReliabilityStateRequest";
  value: QueryReporterReliabilityStateRequestAmino;
}
/**
 * @name QueryReporterReliabilityStateResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryReporterReliabilityStateResponse
 */
export interface QueryReporterReliabilityStateResponse {
  state: ReporterReliabilityState;
}
export interface QueryReporterReliabilityStateResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryReporterReliabilityStateResponse";
  value: Uint8Array;
}
/**
 * @name QueryReporterReliabilityStateResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryReporterReliabilityStateResponse
 */
export interface QueryReporterReliabilityStateResponseAmino {
  state: ReporterReliabilityStateAmino;
}
export interface QueryReporterReliabilityStateResponseAminoMsg {
  type: "/lumera.audit.v1.QueryReporterReliabilityStateResponse";
  value: QueryReporterReliabilityStateResponseAmino;
}
/**
 * @name QueryTicketDeteriorationStateRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryTicketDeteriorationStateRequest
 */
export interface QueryTicketDeteriorationStateRequest {
  ticketId: string;
}
export interface QueryTicketDeteriorationStateRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryTicketDeteriorationStateRequest";
  value: Uint8Array;
}
/**
 * @name QueryTicketDeteriorationStateRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryTicketDeteriorationStateRequest
 */
export interface QueryTicketDeteriorationStateRequestAmino {
  ticket_id: string;
}
export interface QueryTicketDeteriorationStateRequestAminoMsg {
  type: "/lumera.audit.v1.QueryTicketDeteriorationStateRequest";
  value: QueryTicketDeteriorationStateRequestAmino;
}
/**
 * @name QueryTicketDeteriorationStateResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryTicketDeteriorationStateResponse
 */
export interface QueryTicketDeteriorationStateResponse {
  state: TicketDeteriorationState;
}
export interface QueryTicketDeteriorationStateResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryTicketDeteriorationStateResponse";
  value: Uint8Array;
}
/**
 * @name QueryTicketDeteriorationStateResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryTicketDeteriorationStateResponse
 */
export interface QueryTicketDeteriorationStateResponseAmino {
  state: TicketDeteriorationStateAmino;
}
export interface QueryTicketDeteriorationStateResponseAminoMsg {
  type: "/lumera.audit.v1.QueryTicketDeteriorationStateResponse";
  value: QueryTicketDeteriorationStateResponseAmino;
}
/**
 * @name QueryHealOpRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpRequest
 */
export interface QueryHealOpRequest {
  healOpId: bigint;
}
export interface QueryHealOpRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHealOpRequest";
  value: Uint8Array;
}
/**
 * @name QueryHealOpRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpRequest
 */
export interface QueryHealOpRequestAmino {
  heal_op_id: string;
}
export interface QueryHealOpRequestAminoMsg {
  type: "/lumera.audit.v1.QueryHealOpRequest";
  value: QueryHealOpRequestAmino;
}
/**
 * @name QueryHealOpResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpResponse
 */
export interface QueryHealOpResponse {
  healOp: HealOp;
}
export interface QueryHealOpResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHealOpResponse";
  value: Uint8Array;
}
/**
 * @name QueryHealOpResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpResponse
 */
export interface QueryHealOpResponseAmino {
  heal_op: HealOpAmino;
}
export interface QueryHealOpResponseAminoMsg {
  type: "/lumera.audit.v1.QueryHealOpResponse";
  value: QueryHealOpResponseAmino;
}
/**
 * @name QueryHealOpsByTicketRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByTicketRequest
 */
export interface QueryHealOpsByTicketRequest {
  ticketId: string;
  pagination?: PageRequest;
}
export interface QueryHealOpsByTicketRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByTicketRequest";
  value: Uint8Array;
}
/**
 * @name QueryHealOpsByTicketRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByTicketRequest
 */
export interface QueryHealOpsByTicketRequestAmino {
  ticket_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryHealOpsByTicketRequestAminoMsg {
  type: "/lumera.audit.v1.QueryHealOpsByTicketRequest";
  value: QueryHealOpsByTicketRequestAmino;
}
/**
 * @name QueryHealOpsByTicketResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByTicketResponse
 */
export interface QueryHealOpsByTicketResponse {
  healOps: HealOp[];
  pagination?: PageResponse;
}
export interface QueryHealOpsByTicketResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByTicketResponse";
  value: Uint8Array;
}
/**
 * @name QueryHealOpsByTicketResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByTicketResponse
 */
export interface QueryHealOpsByTicketResponseAmino {
  heal_ops: HealOpAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryHealOpsByTicketResponseAminoMsg {
  type: "/lumera.audit.v1.QueryHealOpsByTicketResponse";
  value: QueryHealOpsByTicketResponseAmino;
}
/**
 * @name QueryHealOpsByStatusRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByStatusRequest
 */
export interface QueryHealOpsByStatusRequest {
  status: HealOpStatus;
  pagination?: PageRequest;
}
export interface QueryHealOpsByStatusRequestProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByStatusRequest";
  value: Uint8Array;
}
/**
 * @name QueryHealOpsByStatusRequestAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByStatusRequest
 */
export interface QueryHealOpsByStatusRequestAmino {
  status: HealOpStatus;
  pagination?: PageRequestAmino;
}
export interface QueryHealOpsByStatusRequestAminoMsg {
  type: "/lumera.audit.v1.QueryHealOpsByStatusRequest";
  value: QueryHealOpsByStatusRequestAmino;
}
/**
 * @name QueryHealOpsByStatusResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByStatusResponse
 */
export interface QueryHealOpsByStatusResponse {
  healOps: HealOp[];
  pagination?: PageResponse;
}
export interface QueryHealOpsByStatusResponseProtoMsg {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByStatusResponse";
  value: Uint8Array;
}
/**
 * @name QueryHealOpsByStatusResponseAmino
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByStatusResponse
 */
export interface QueryHealOpsByStatusResponseAmino {
  heal_ops: HealOpAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryHealOpsByStatusResponseAminoMsg {
  type: "/lumera.audit.v1.QueryHealOpsByStatusResponse";
  value: QueryHealOpsByStatusResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * @name QueryParamsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/lumera.audit.v1.QueryParamsRequest",
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
      typeUrl: "/lumera.audit.v1.QueryParamsRequest",
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
 * @name QueryParamsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/lumera.audit.v1.QueryParamsResponse",
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
      typeUrl: "/lumera.audit.v1.QueryParamsResponse",
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
function createBaseQueryEvidenceByIdRequest(): QueryEvidenceByIdRequest {
  return {
    evidenceId: BigInt(0)
  };
}
/**
 * @name QueryEvidenceByIdRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByIdRequest
 */
export const QueryEvidenceByIdRequest = {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByIdRequest",
  is(o: any): o is QueryEvidenceByIdRequest {
    return o && (o.$typeUrl === QueryEvidenceByIdRequest.typeUrl || typeof o.evidenceId === "bigint");
  },
  isAmino(o: any): o is QueryEvidenceByIdRequestAmino {
    return o && (o.$typeUrl === QueryEvidenceByIdRequest.typeUrl || typeof o.evidence_id === "bigint");
  },
  encode(message: QueryEvidenceByIdRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.evidenceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEvidenceByIdRequest>): QueryEvidenceByIdRequest {
    const message = createBaseQueryEvidenceByIdRequest();
    message.evidenceId = object.evidenceId !== undefined && object.evidenceId !== null ? BigInt(object.evidenceId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEvidenceByIdRequestAmino): QueryEvidenceByIdRequest {
    const message = createBaseQueryEvidenceByIdRequest();
    if (object.evidence_id !== undefined && object.evidence_id !== null) {
      message.evidenceId = BigInt(object.evidence_id);
    }
    return message;
  },
  toAmino(message: QueryEvidenceByIdRequest): QueryEvidenceByIdRequestAmino {
    const obj: any = {};
    obj.evidence_id = message.evidenceId !== BigInt(0) ? message.evidenceId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceByIdRequestAminoMsg): QueryEvidenceByIdRequest {
    return QueryEvidenceByIdRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvidenceByIdRequestProtoMsg): QueryEvidenceByIdRequest {
    return QueryEvidenceByIdRequest.decode(message.value);
  },
  toProto(message: QueryEvidenceByIdRequest): Uint8Array {
    return QueryEvidenceByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceByIdRequest): QueryEvidenceByIdRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEvidenceByIdRequest",
      value: QueryEvidenceByIdRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEvidenceByIdResponse(): QueryEvidenceByIdResponse {
  return {
    evidence: Evidence.fromPartial({})
  };
}
/**
 * @name QueryEvidenceByIdResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByIdResponse
 */
export const QueryEvidenceByIdResponse = {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByIdResponse",
  is(o: any): o is QueryEvidenceByIdResponse {
    return o && (o.$typeUrl === QueryEvidenceByIdResponse.typeUrl || Evidence.is(o.evidence));
  },
  isAmino(o: any): o is QueryEvidenceByIdResponseAmino {
    return o && (o.$typeUrl === QueryEvidenceByIdResponse.typeUrl || Evidence.isAmino(o.evidence));
  },
  encode(message: QueryEvidenceByIdResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidence !== undefined) {
      Evidence.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Evidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEvidenceByIdResponse>): QueryEvidenceByIdResponse {
    const message = createBaseQueryEvidenceByIdResponse();
    message.evidence = object.evidence !== undefined && object.evidence !== null ? Evidence.fromPartial(object.evidence) : undefined;
    return message;
  },
  fromAmino(object: QueryEvidenceByIdResponseAmino): QueryEvidenceByIdResponse {
    const message = createBaseQueryEvidenceByIdResponse();
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Evidence.fromAmino(object.evidence);
    }
    return message;
  },
  toAmino(message: QueryEvidenceByIdResponse): QueryEvidenceByIdResponseAmino {
    const obj: any = {};
    obj.evidence = message.evidence ? Evidence.toAmino(message.evidence) : Evidence.toAmino(Evidence.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceByIdResponseAminoMsg): QueryEvidenceByIdResponse {
    return QueryEvidenceByIdResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvidenceByIdResponseProtoMsg): QueryEvidenceByIdResponse {
    return QueryEvidenceByIdResponse.decode(message.value);
  },
  toProto(message: QueryEvidenceByIdResponse): Uint8Array {
    return QueryEvidenceByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceByIdResponse): QueryEvidenceByIdResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEvidenceByIdResponse",
      value: QueryEvidenceByIdResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEvidenceByIdResponse.typeUrl)) {
      return;
    }
    Evidence.registerTypeUrl();
  }
};
function createBaseQueryEvidenceBySubjectRequest(): QueryEvidenceBySubjectRequest {
  return {
    subjectAddress: "",
    pagination: undefined
  };
}
/**
 * @name QueryEvidenceBySubjectRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceBySubjectRequest
 */
export const QueryEvidenceBySubjectRequest = {
  typeUrl: "/lumera.audit.v1.QueryEvidenceBySubjectRequest",
  is(o: any): o is QueryEvidenceBySubjectRequest {
    return o && (o.$typeUrl === QueryEvidenceBySubjectRequest.typeUrl || typeof o.subjectAddress === "string");
  },
  isAmino(o: any): o is QueryEvidenceBySubjectRequestAmino {
    return o && (o.$typeUrl === QueryEvidenceBySubjectRequest.typeUrl || typeof o.subject_address === "string");
  },
  encode(message: QueryEvidenceBySubjectRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subjectAddress !== "") {
      writer.uint32(10).string(message.subjectAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceBySubjectRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceBySubjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEvidenceBySubjectRequest>): QueryEvidenceBySubjectRequest {
    const message = createBaseQueryEvidenceBySubjectRequest();
    message.subjectAddress = object.subjectAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEvidenceBySubjectRequestAmino): QueryEvidenceBySubjectRequest {
    const message = createBaseQueryEvidenceBySubjectRequest();
    if (object.subject_address !== undefined && object.subject_address !== null) {
      message.subjectAddress = object.subject_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEvidenceBySubjectRequest): QueryEvidenceBySubjectRequestAmino {
    const obj: any = {};
    obj.subject_address = message.subjectAddress === "" ? undefined : message.subjectAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceBySubjectRequestAminoMsg): QueryEvidenceBySubjectRequest {
    return QueryEvidenceBySubjectRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvidenceBySubjectRequestProtoMsg): QueryEvidenceBySubjectRequest {
    return QueryEvidenceBySubjectRequest.decode(message.value);
  },
  toProto(message: QueryEvidenceBySubjectRequest): Uint8Array {
    return QueryEvidenceBySubjectRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceBySubjectRequest): QueryEvidenceBySubjectRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEvidenceBySubjectRequest",
      value: QueryEvidenceBySubjectRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEvidenceBySubjectRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryEvidenceBySubjectResponse(): QueryEvidenceBySubjectResponse {
  return {
    evidence: [],
    pagination: undefined
  };
}
/**
 * @name QueryEvidenceBySubjectResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceBySubjectResponse
 */
export const QueryEvidenceBySubjectResponse = {
  typeUrl: "/lumera.audit.v1.QueryEvidenceBySubjectResponse",
  is(o: any): o is QueryEvidenceBySubjectResponse {
    return o && (o.$typeUrl === QueryEvidenceBySubjectResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.is(o.evidence[0])));
  },
  isAmino(o: any): o is QueryEvidenceBySubjectResponseAmino {
    return o && (o.$typeUrl === QueryEvidenceBySubjectResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.isAmino(o.evidence[0])));
  },
  encode(message: QueryEvidenceBySubjectResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceBySubjectResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceBySubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryEvidenceBySubjectResponse>): QueryEvidenceBySubjectResponse {
    const message = createBaseQueryEvidenceBySubjectResponse();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEvidenceBySubjectResponseAmino): QueryEvidenceBySubjectResponse {
    const message = createBaseQueryEvidenceBySubjectResponse();
    message.evidence = object.evidence?.map(e => Evidence.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEvidenceBySubjectResponse): QueryEvidenceBySubjectResponseAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = message.evidence;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceBySubjectResponseAminoMsg): QueryEvidenceBySubjectResponse {
    return QueryEvidenceBySubjectResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvidenceBySubjectResponseProtoMsg): QueryEvidenceBySubjectResponse {
    return QueryEvidenceBySubjectResponse.decode(message.value);
  },
  toProto(message: QueryEvidenceBySubjectResponse): Uint8Array {
    return QueryEvidenceBySubjectResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceBySubjectResponse): QueryEvidenceBySubjectResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEvidenceBySubjectResponse",
      value: QueryEvidenceBySubjectResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEvidenceBySubjectResponse.typeUrl)) {
      return;
    }
    Evidence.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryEvidenceByActionRequest(): QueryEvidenceByActionRequest {
  return {
    actionId: "",
    pagination: undefined
  };
}
/**
 * @name QueryEvidenceByActionRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByActionRequest
 */
export const QueryEvidenceByActionRequest = {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByActionRequest",
  is(o: any): o is QueryEvidenceByActionRequest {
    return o && (o.$typeUrl === QueryEvidenceByActionRequest.typeUrl || typeof o.actionId === "string");
  },
  isAmino(o: any): o is QueryEvidenceByActionRequestAmino {
    return o && (o.$typeUrl === QueryEvidenceByActionRequest.typeUrl || typeof o.action_id === "string");
  },
  encode(message: QueryEvidenceByActionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actionId !== "") {
      writer.uint32(10).string(message.actionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceByActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceByActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEvidenceByActionRequest>): QueryEvidenceByActionRequest {
    const message = createBaseQueryEvidenceByActionRequest();
    message.actionId = object.actionId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEvidenceByActionRequestAmino): QueryEvidenceByActionRequest {
    const message = createBaseQueryEvidenceByActionRequest();
    if (object.action_id !== undefined && object.action_id !== null) {
      message.actionId = object.action_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEvidenceByActionRequest): QueryEvidenceByActionRequestAmino {
    const obj: any = {};
    obj.action_id = message.actionId === "" ? undefined : message.actionId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceByActionRequestAminoMsg): QueryEvidenceByActionRequest {
    return QueryEvidenceByActionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvidenceByActionRequestProtoMsg): QueryEvidenceByActionRequest {
    return QueryEvidenceByActionRequest.decode(message.value);
  },
  toProto(message: QueryEvidenceByActionRequest): Uint8Array {
    return QueryEvidenceByActionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceByActionRequest): QueryEvidenceByActionRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEvidenceByActionRequest",
      value: QueryEvidenceByActionRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEvidenceByActionRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryEvidenceByActionResponse(): QueryEvidenceByActionResponse {
  return {
    evidence: [],
    pagination: undefined
  };
}
/**
 * @name QueryEvidenceByActionResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEvidenceByActionResponse
 */
export const QueryEvidenceByActionResponse = {
  typeUrl: "/lumera.audit.v1.QueryEvidenceByActionResponse",
  is(o: any): o is QueryEvidenceByActionResponse {
    return o && (o.$typeUrl === QueryEvidenceByActionResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.is(o.evidence[0])));
  },
  isAmino(o: any): o is QueryEvidenceByActionResponseAmino {
    return o && (o.$typeUrl === QueryEvidenceByActionResponse.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || Evidence.isAmino(o.evidence[0])));
  },
  encode(message: QueryEvidenceByActionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceByActionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceByActionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryEvidenceByActionResponse>): QueryEvidenceByActionResponse {
    const message = createBaseQueryEvidenceByActionResponse();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEvidenceByActionResponseAmino): QueryEvidenceByActionResponse {
    const message = createBaseQueryEvidenceByActionResponse();
    message.evidence = object.evidence?.map(e => Evidence.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEvidenceByActionResponse): QueryEvidenceByActionResponseAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toAmino(e) : undefined);
    } else {
      obj.evidence = message.evidence;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceByActionResponseAminoMsg): QueryEvidenceByActionResponse {
    return QueryEvidenceByActionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEvidenceByActionResponseProtoMsg): QueryEvidenceByActionResponse {
    return QueryEvidenceByActionResponse.decode(message.value);
  },
  toProto(message: QueryEvidenceByActionResponse): Uint8Array {
    return QueryEvidenceByActionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceByActionResponse): QueryEvidenceByActionResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEvidenceByActionResponse",
      value: QueryEvidenceByActionResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEvidenceByActionResponse.typeUrl)) {
      return;
    }
    Evidence.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {};
}
/**
 * @name QueryCurrentEpochRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochRequest
 */
export const QueryCurrentEpochRequest = {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochRequest",
  is(o: any): o is QueryCurrentEpochRequest {
    return o && o.$typeUrl === QueryCurrentEpochRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentEpochRequestAmino {
    return o && o.$typeUrl === QueryCurrentEpochRequest.typeUrl;
  },
  encode(_: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
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
  fromPartial(_: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    return message;
  },
  fromAmino(_: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    return message;
  },
  toAmino(_: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    epochId: BigInt(0),
    epochStartHeight: BigInt(0),
    epochEndHeight: BigInt(0)
  };
}
/**
 * @name QueryCurrentEpochResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochResponse
 */
export const QueryCurrentEpochResponse = {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochResponse",
  is(o: any): o is QueryCurrentEpochResponse {
    return o && (o.$typeUrl === QueryCurrentEpochResponse.typeUrl || typeof o.epochId === "bigint" && typeof o.epochStartHeight === "bigint" && typeof o.epochEndHeight === "bigint");
  },
  isAmino(o: any): o is QueryCurrentEpochResponseAmino {
    return o && (o.$typeUrl === QueryCurrentEpochResponse.typeUrl || typeof o.epoch_id === "bigint" && typeof o.epoch_start_height === "bigint" && typeof o.epoch_end_height === "bigint");
  },
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.epochStartHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartHeight);
    }
    if (message.epochEndHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.epochEndHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.epochStartHeight = reader.int64();
          break;
        case 3:
          message.epochEndHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.epochStartHeight = object.epochStartHeight !== undefined && object.epochStartHeight !== null ? BigInt(object.epochStartHeight.toString()) : BigInt(0);
    message.epochEndHeight = object.epochEndHeight !== undefined && object.epochEndHeight !== null ? BigInt(object.epochEndHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.epoch_start_height !== undefined && object.epoch_start_height !== null) {
      message.epochStartHeight = BigInt(object.epoch_start_height);
    }
    if (object.epoch_end_height !== undefined && object.epoch_end_height !== null) {
      message.epochEndHeight = BigInt(object.epoch_end_height);
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.epoch_start_height = message.epochStartHeight !== BigInt(0) ? message.epochStartHeight?.toString() : undefined;
    obj.epoch_end_height = message.epochEndHeight !== BigInt(0) ? message.epochEndHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochAnchorRequest(): QueryEpochAnchorRequest {
  return {
    epochId: BigInt(0)
  };
}
/**
 * @name QueryEpochAnchorRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochAnchorRequest
 */
export const QueryEpochAnchorRequest = {
  typeUrl: "/lumera.audit.v1.QueryEpochAnchorRequest",
  is(o: any): o is QueryEpochAnchorRequest {
    return o && (o.$typeUrl === QueryEpochAnchorRequest.typeUrl || typeof o.epochId === "bigint");
  },
  isAmino(o: any): o is QueryEpochAnchorRequestAmino {
    return o && (o.$typeUrl === QueryEpochAnchorRequest.typeUrl || typeof o.epoch_id === "bigint");
  },
  encode(message: QueryEpochAnchorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochAnchorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochAnchorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEpochAnchorRequest>): QueryEpochAnchorRequest {
    const message = createBaseQueryEpochAnchorRequest();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEpochAnchorRequestAmino): QueryEpochAnchorRequest {
    const message = createBaseQueryEpochAnchorRequest();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    return message;
  },
  toAmino(message: QueryEpochAnchorRequest): QueryEpochAnchorRequestAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochAnchorRequestAminoMsg): QueryEpochAnchorRequest {
    return QueryEpochAnchorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochAnchorRequestProtoMsg): QueryEpochAnchorRequest {
    return QueryEpochAnchorRequest.decode(message.value);
  },
  toProto(message: QueryEpochAnchorRequest): Uint8Array {
    return QueryEpochAnchorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochAnchorRequest): QueryEpochAnchorRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEpochAnchorRequest",
      value: QueryEpochAnchorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochAnchorResponse(): QueryEpochAnchorResponse {
  return {
    anchor: EpochAnchor.fromPartial({})
  };
}
/**
 * @name QueryEpochAnchorResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochAnchorResponse
 */
export const QueryEpochAnchorResponse = {
  typeUrl: "/lumera.audit.v1.QueryEpochAnchorResponse",
  is(o: any): o is QueryEpochAnchorResponse {
    return o && (o.$typeUrl === QueryEpochAnchorResponse.typeUrl || EpochAnchor.is(o.anchor));
  },
  isAmino(o: any): o is QueryEpochAnchorResponseAmino {
    return o && (o.$typeUrl === QueryEpochAnchorResponse.typeUrl || EpochAnchor.isAmino(o.anchor));
  },
  encode(message: QueryEpochAnchorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.anchor !== undefined) {
      EpochAnchor.encode(message.anchor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochAnchorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochAnchorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anchor = EpochAnchor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEpochAnchorResponse>): QueryEpochAnchorResponse {
    const message = createBaseQueryEpochAnchorResponse();
    message.anchor = object.anchor !== undefined && object.anchor !== null ? EpochAnchor.fromPartial(object.anchor) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochAnchorResponseAmino): QueryEpochAnchorResponse {
    const message = createBaseQueryEpochAnchorResponse();
    if (object.anchor !== undefined && object.anchor !== null) {
      message.anchor = EpochAnchor.fromAmino(object.anchor);
    }
    return message;
  },
  toAmino(message: QueryEpochAnchorResponse): QueryEpochAnchorResponseAmino {
    const obj: any = {};
    obj.anchor = message.anchor ? EpochAnchor.toAmino(message.anchor) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochAnchorResponseAminoMsg): QueryEpochAnchorResponse {
    return QueryEpochAnchorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochAnchorResponseProtoMsg): QueryEpochAnchorResponse {
    return QueryEpochAnchorResponse.decode(message.value);
  },
  toProto(message: QueryEpochAnchorResponse): Uint8Array {
    return QueryEpochAnchorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochAnchorResponse): QueryEpochAnchorResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEpochAnchorResponse",
      value: QueryEpochAnchorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEpochAnchorResponse.typeUrl)) {
      return;
    }
    EpochAnchor.registerTypeUrl();
  }
};
function createBaseQueryCurrentEpochAnchorRequest(): QueryCurrentEpochAnchorRequest {
  return {};
}
/**
 * @name QueryCurrentEpochAnchorRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochAnchorRequest
 */
export const QueryCurrentEpochAnchorRequest = {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochAnchorRequest",
  is(o: any): o is QueryCurrentEpochAnchorRequest {
    return o && o.$typeUrl === QueryCurrentEpochAnchorRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentEpochAnchorRequestAmino {
    return o && o.$typeUrl === QueryCurrentEpochAnchorRequest.typeUrl;
  },
  encode(_: QueryCurrentEpochAnchorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochAnchorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochAnchorRequest();
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
  fromPartial(_: DeepPartial<QueryCurrentEpochAnchorRequest>): QueryCurrentEpochAnchorRequest {
    const message = createBaseQueryCurrentEpochAnchorRequest();
    return message;
  },
  fromAmino(_: QueryCurrentEpochAnchorRequestAmino): QueryCurrentEpochAnchorRequest {
    const message = createBaseQueryCurrentEpochAnchorRequest();
    return message;
  },
  toAmino(_: QueryCurrentEpochAnchorRequest): QueryCurrentEpochAnchorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochAnchorRequestAminoMsg): QueryCurrentEpochAnchorRequest {
    return QueryCurrentEpochAnchorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochAnchorRequestProtoMsg): QueryCurrentEpochAnchorRequest {
    return QueryCurrentEpochAnchorRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochAnchorRequest): Uint8Array {
    return QueryCurrentEpochAnchorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochAnchorRequest): QueryCurrentEpochAnchorRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryCurrentEpochAnchorRequest",
      value: QueryCurrentEpochAnchorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCurrentEpochAnchorResponse(): QueryCurrentEpochAnchorResponse {
  return {
    anchor: EpochAnchor.fromPartial({})
  };
}
/**
 * @name QueryCurrentEpochAnchorResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryCurrentEpochAnchorResponse
 */
export const QueryCurrentEpochAnchorResponse = {
  typeUrl: "/lumera.audit.v1.QueryCurrentEpochAnchorResponse",
  is(o: any): o is QueryCurrentEpochAnchorResponse {
    return o && (o.$typeUrl === QueryCurrentEpochAnchorResponse.typeUrl || EpochAnchor.is(o.anchor));
  },
  isAmino(o: any): o is QueryCurrentEpochAnchorResponseAmino {
    return o && (o.$typeUrl === QueryCurrentEpochAnchorResponse.typeUrl || EpochAnchor.isAmino(o.anchor));
  },
  encode(message: QueryCurrentEpochAnchorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.anchor !== undefined) {
      EpochAnchor.encode(message.anchor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochAnchorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochAnchorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.anchor = EpochAnchor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentEpochAnchorResponse>): QueryCurrentEpochAnchorResponse {
    const message = createBaseQueryCurrentEpochAnchorResponse();
    message.anchor = object.anchor !== undefined && object.anchor !== null ? EpochAnchor.fromPartial(object.anchor) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentEpochAnchorResponseAmino): QueryCurrentEpochAnchorResponse {
    const message = createBaseQueryCurrentEpochAnchorResponse();
    if (object.anchor !== undefined && object.anchor !== null) {
      message.anchor = EpochAnchor.fromAmino(object.anchor);
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochAnchorResponse): QueryCurrentEpochAnchorResponseAmino {
    const obj: any = {};
    obj.anchor = message.anchor ? EpochAnchor.toAmino(message.anchor) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochAnchorResponseAminoMsg): QueryCurrentEpochAnchorResponse {
    return QueryCurrentEpochAnchorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochAnchorResponseProtoMsg): QueryCurrentEpochAnchorResponse {
    return QueryCurrentEpochAnchorResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochAnchorResponse): Uint8Array {
    return QueryCurrentEpochAnchorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochAnchorResponse): QueryCurrentEpochAnchorResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryCurrentEpochAnchorResponse",
      value: QueryCurrentEpochAnchorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCurrentEpochAnchorResponse.typeUrl)) {
      return;
    }
    EpochAnchor.registerTypeUrl();
  }
};
function createBaseQueryAssignedTargetsRequest(): QueryAssignedTargetsRequest {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    filterByEpochId: false
  };
}
/**
 * @name QueryAssignedTargetsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryAssignedTargetsRequest
 */
export const QueryAssignedTargetsRequest = {
  typeUrl: "/lumera.audit.v1.QueryAssignedTargetsRequest",
  is(o: any): o is QueryAssignedTargetsRequest {
    return o && (o.$typeUrl === QueryAssignedTargetsRequest.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.filterByEpochId === "boolean");
  },
  isAmino(o: any): o is QueryAssignedTargetsRequestAmino {
    return o && (o.$typeUrl === QueryAssignedTargetsRequest.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.filter_by_epoch_id === "boolean");
  },
  encode(message: QueryAssignedTargetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.filterByEpochId === true) {
      writer.uint32(24).bool(message.filterByEpochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssignedTargetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssignedTargetsRequest();
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
          message.filterByEpochId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAssignedTargetsRequest>): QueryAssignedTargetsRequest {
    const message = createBaseQueryAssignedTargetsRequest();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.filterByEpochId = object.filterByEpochId ?? false;
    return message;
  },
  fromAmino(object: QueryAssignedTargetsRequestAmino): QueryAssignedTargetsRequest {
    const message = createBaseQueryAssignedTargetsRequest();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.filter_by_epoch_id !== undefined && object.filter_by_epoch_id !== null) {
      message.filterByEpochId = object.filter_by_epoch_id;
    }
    return message;
  },
  toAmino(message: QueryAssignedTargetsRequest): QueryAssignedTargetsRequestAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.filter_by_epoch_id = message.filterByEpochId === false ? undefined : message.filterByEpochId;
    return obj;
  },
  fromAminoMsg(object: QueryAssignedTargetsRequestAminoMsg): QueryAssignedTargetsRequest {
    return QueryAssignedTargetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssignedTargetsRequestProtoMsg): QueryAssignedTargetsRequest {
    return QueryAssignedTargetsRequest.decode(message.value);
  },
  toProto(message: QueryAssignedTargetsRequest): Uint8Array {
    return QueryAssignedTargetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssignedTargetsRequest): QueryAssignedTargetsRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryAssignedTargetsRequest",
      value: QueryAssignedTargetsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAssignedTargetsResponse(): QueryAssignedTargetsResponse {
  return {
    epochId: BigInt(0),
    epochStartHeight: BigInt(0),
    requiredOpenPorts: [],
    targetSupernodeAccounts: []
  };
}
/**
 * @name QueryAssignedTargetsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryAssignedTargetsResponse
 */
export const QueryAssignedTargetsResponse = {
  typeUrl: "/lumera.audit.v1.QueryAssignedTargetsResponse",
  is(o: any): o is QueryAssignedTargetsResponse {
    return o && (o.$typeUrl === QueryAssignedTargetsResponse.typeUrl || typeof o.epochId === "bigint" && typeof o.epochStartHeight === "bigint" && Array.isArray(o.requiredOpenPorts) && (!o.requiredOpenPorts.length || typeof o.requiredOpenPorts[0] === "number") && Array.isArray(o.targetSupernodeAccounts) && (!o.targetSupernodeAccounts.length || typeof o.targetSupernodeAccounts[0] === "string"));
  },
  isAmino(o: any): o is QueryAssignedTargetsResponseAmino {
    return o && (o.$typeUrl === QueryAssignedTargetsResponse.typeUrl || typeof o.epoch_id === "bigint" && typeof o.epoch_start_height === "bigint" && Array.isArray(o.required_open_ports) && (!o.required_open_ports.length || typeof o.required_open_ports[0] === "number") && Array.isArray(o.target_supernode_accounts) && (!o.target_supernode_accounts.length || typeof o.target_supernode_accounts[0] === "string"));
  },
  encode(message: QueryAssignedTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.epochStartHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.epochStartHeight);
    }
    writer.uint32(26).fork();
    for (const v of message.requiredOpenPorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    for (const v of message.targetSupernodeAccounts) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssignedTargetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssignedTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.epochStartHeight = reader.int64();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requiredOpenPorts.push(reader.uint32());
            }
          } else {
            message.requiredOpenPorts.push(reader.uint32());
          }
          break;
        case 4:
          message.targetSupernodeAccounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAssignedTargetsResponse>): QueryAssignedTargetsResponse {
    const message = createBaseQueryAssignedTargetsResponse();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.epochStartHeight = object.epochStartHeight !== undefined && object.epochStartHeight !== null ? BigInt(object.epochStartHeight.toString()) : BigInt(0);
    message.requiredOpenPorts = object.requiredOpenPorts?.map(e => e) || [];
    message.targetSupernodeAccounts = object.targetSupernodeAccounts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAssignedTargetsResponseAmino): QueryAssignedTargetsResponse {
    const message = createBaseQueryAssignedTargetsResponse();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.epoch_start_height !== undefined && object.epoch_start_height !== null) {
      message.epochStartHeight = BigInt(object.epoch_start_height);
    }
    message.requiredOpenPorts = object.required_open_ports?.map(e => e) || [];
    message.targetSupernodeAccounts = object.target_supernode_accounts?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAssignedTargetsResponse): QueryAssignedTargetsResponseAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.epoch_start_height = message.epochStartHeight !== BigInt(0) ? message.epochStartHeight?.toString() : undefined;
    if (message.requiredOpenPorts) {
      obj.required_open_ports = message.requiredOpenPorts.map(e => e);
    } else {
      obj.required_open_ports = message.requiredOpenPorts;
    }
    if (message.targetSupernodeAccounts) {
      obj.target_supernode_accounts = message.targetSupernodeAccounts.map(e => e);
    } else {
      obj.target_supernode_accounts = message.targetSupernodeAccounts;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssignedTargetsResponseAminoMsg): QueryAssignedTargetsResponse {
    return QueryAssignedTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssignedTargetsResponseProtoMsg): QueryAssignedTargetsResponse {
    return QueryAssignedTargetsResponse.decode(message.value);
  },
  toProto(message: QueryAssignedTargetsResponse): Uint8Array {
    return QueryAssignedTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssignedTargetsResponse): QueryAssignedTargetsResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryAssignedTargetsResponse",
      value: QueryAssignedTargetsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochReportRequest(): QueryEpochReportRequest {
  return {
    epochId: BigInt(0),
    supernodeAccount: ""
  };
}
/**
 * @name QueryEpochReportRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportRequest
 */
export const QueryEpochReportRequest = {
  typeUrl: "/lumera.audit.v1.QueryEpochReportRequest",
  is(o: any): o is QueryEpochReportRequest {
    return o && (o.$typeUrl === QueryEpochReportRequest.typeUrl || typeof o.epochId === "bigint" && typeof o.supernodeAccount === "string");
  },
  isAmino(o: any): o is QueryEpochReportRequestAmino {
    return o && (o.$typeUrl === QueryEpochReportRequest.typeUrl || typeof o.epoch_id === "bigint" && typeof o.supernode_account === "string");
  },
  encode(message: QueryEpochReportRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.supernodeAccount !== "") {
      writer.uint32(18).string(message.supernodeAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochReportRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.supernodeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEpochReportRequest>): QueryEpochReportRequest {
    const message = createBaseQueryEpochReportRequest();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.supernodeAccount = object.supernodeAccount ?? "";
    return message;
  },
  fromAmino(object: QueryEpochReportRequestAmino): QueryEpochReportRequest {
    const message = createBaseQueryEpochReportRequest();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    return message;
  },
  toAmino(message: QueryEpochReportRequest): QueryEpochReportRequestAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    return obj;
  },
  fromAminoMsg(object: QueryEpochReportRequestAminoMsg): QueryEpochReportRequest {
    return QueryEpochReportRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochReportRequestProtoMsg): QueryEpochReportRequest {
    return QueryEpochReportRequest.decode(message.value);
  },
  toProto(message: QueryEpochReportRequest): Uint8Array {
    return QueryEpochReportRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochReportRequest): QueryEpochReportRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEpochReportRequest",
      value: QueryEpochReportRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEpochReportResponse(): QueryEpochReportResponse {
  return {
    report: EpochReport.fromPartial({})
  };
}
/**
 * @name QueryEpochReportResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportResponse
 */
export const QueryEpochReportResponse = {
  typeUrl: "/lumera.audit.v1.QueryEpochReportResponse",
  is(o: any): o is QueryEpochReportResponse {
    return o && (o.$typeUrl === QueryEpochReportResponse.typeUrl || EpochReport.is(o.report));
  },
  isAmino(o: any): o is QueryEpochReportResponseAmino {
    return o && (o.$typeUrl === QueryEpochReportResponse.typeUrl || EpochReport.isAmino(o.report));
  },
  encode(message: QueryEpochReportResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.report !== undefined) {
      EpochReport.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochReportResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report = EpochReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEpochReportResponse>): QueryEpochReportResponse {
    const message = createBaseQueryEpochReportResponse();
    message.report = object.report !== undefined && object.report !== null ? EpochReport.fromPartial(object.report) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochReportResponseAmino): QueryEpochReportResponse {
    const message = createBaseQueryEpochReportResponse();
    if (object.report !== undefined && object.report !== null) {
      message.report = EpochReport.fromAmino(object.report);
    }
    return message;
  },
  toAmino(message: QueryEpochReportResponse): QueryEpochReportResponseAmino {
    const obj: any = {};
    obj.report = message.report ? EpochReport.toAmino(message.report) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochReportResponseAminoMsg): QueryEpochReportResponse {
    return QueryEpochReportResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochReportResponseProtoMsg): QueryEpochReportResponse {
    return QueryEpochReportResponse.decode(message.value);
  },
  toProto(message: QueryEpochReportResponse): Uint8Array {
    return QueryEpochReportResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochReportResponse): QueryEpochReportResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEpochReportResponse",
      value: QueryEpochReportResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEpochReportResponse.typeUrl)) {
      return;
    }
    EpochReport.registerTypeUrl();
  }
};
function createBaseQueryEpochReportsByReporterRequest(): QueryEpochReportsByReporterRequest {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    pagination: undefined,
    filterByEpochId: false
  };
}
/**
 * @name QueryEpochReportsByReporterRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportsByReporterRequest
 */
export const QueryEpochReportsByReporterRequest = {
  typeUrl: "/lumera.audit.v1.QueryEpochReportsByReporterRequest",
  is(o: any): o is QueryEpochReportsByReporterRequest {
    return o && (o.$typeUrl === QueryEpochReportsByReporterRequest.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.filterByEpochId === "boolean");
  },
  isAmino(o: any): o is QueryEpochReportsByReporterRequestAmino {
    return o && (o.$typeUrl === QueryEpochReportsByReporterRequest.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.filter_by_epoch_id === "boolean");
  },
  encode(message: QueryEpochReportsByReporterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (message.filterByEpochId === true) {
      writer.uint32(32).bool(message.filterByEpochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochReportsByReporterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochReportsByReporterRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.filterByEpochId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEpochReportsByReporterRequest>): QueryEpochReportsByReporterRequest {
    const message = createBaseQueryEpochReportsByReporterRequest();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.filterByEpochId = object.filterByEpochId ?? false;
    return message;
  },
  fromAmino(object: QueryEpochReportsByReporterRequestAmino): QueryEpochReportsByReporterRequest {
    const message = createBaseQueryEpochReportsByReporterRequest();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.filter_by_epoch_id !== undefined && object.filter_by_epoch_id !== null) {
      message.filterByEpochId = object.filter_by_epoch_id;
    }
    return message;
  },
  toAmino(message: QueryEpochReportsByReporterRequest): QueryEpochReportsByReporterRequestAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.filter_by_epoch_id = message.filterByEpochId === false ? undefined : message.filterByEpochId;
    return obj;
  },
  fromAminoMsg(object: QueryEpochReportsByReporterRequestAminoMsg): QueryEpochReportsByReporterRequest {
    return QueryEpochReportsByReporterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochReportsByReporterRequestProtoMsg): QueryEpochReportsByReporterRequest {
    return QueryEpochReportsByReporterRequest.decode(message.value);
  },
  toProto(message: QueryEpochReportsByReporterRequest): Uint8Array {
    return QueryEpochReportsByReporterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochReportsByReporterRequest): QueryEpochReportsByReporterRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEpochReportsByReporterRequest",
      value: QueryEpochReportsByReporterRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEpochReportsByReporterRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryEpochReportsByReporterResponse(): QueryEpochReportsByReporterResponse {
  return {
    reports: [],
    pagination: undefined
  };
}
/**
 * @name QueryEpochReportsByReporterResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryEpochReportsByReporterResponse
 */
export const QueryEpochReportsByReporterResponse = {
  typeUrl: "/lumera.audit.v1.QueryEpochReportsByReporterResponse",
  is(o: any): o is QueryEpochReportsByReporterResponse {
    return o && (o.$typeUrl === QueryEpochReportsByReporterResponse.typeUrl || Array.isArray(o.reports) && (!o.reports.length || EpochReport.is(o.reports[0])));
  },
  isAmino(o: any): o is QueryEpochReportsByReporterResponseAmino {
    return o && (o.$typeUrl === QueryEpochReportsByReporterResponse.typeUrl || Array.isArray(o.reports) && (!o.reports.length || EpochReport.isAmino(o.reports[0])));
  },
  encode(message: QueryEpochReportsByReporterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reports) {
      EpochReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochReportsByReporterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochReportsByReporterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(EpochReport.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryEpochReportsByReporterResponse>): QueryEpochReportsByReporterResponse {
    const message = createBaseQueryEpochReportsByReporterResponse();
    message.reports = object.reports?.map(e => EpochReport.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochReportsByReporterResponseAmino): QueryEpochReportsByReporterResponse {
    const message = createBaseQueryEpochReportsByReporterResponse();
    message.reports = object.reports?.map(e => EpochReport.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryEpochReportsByReporterResponse): QueryEpochReportsByReporterResponseAmino {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map(e => e ? EpochReport.toAmino(e) : undefined);
    } else {
      obj.reports = message.reports;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochReportsByReporterResponseAminoMsg): QueryEpochReportsByReporterResponse {
    return QueryEpochReportsByReporterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochReportsByReporterResponseProtoMsg): QueryEpochReportsByReporterResponse {
    return QueryEpochReportsByReporterResponse.decode(message.value);
  },
  toProto(message: QueryEpochReportsByReporterResponse): Uint8Array {
    return QueryEpochReportsByReporterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochReportsByReporterResponse): QueryEpochReportsByReporterResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryEpochReportsByReporterResponse",
      value: QueryEpochReportsByReporterResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEpochReportsByReporterResponse.typeUrl)) {
      return;
    }
    EpochReport.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryStorageChallengeReportsRequest(): QueryStorageChallengeReportsRequest {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    pagination: undefined,
    filterByEpochId: false
  };
}
/**
 * @name QueryStorageChallengeReportsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryStorageChallengeReportsRequest
 */
export const QueryStorageChallengeReportsRequest = {
  typeUrl: "/lumera.audit.v1.QueryStorageChallengeReportsRequest",
  is(o: any): o is QueryStorageChallengeReportsRequest {
    return o && (o.$typeUrl === QueryStorageChallengeReportsRequest.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.filterByEpochId === "boolean");
  },
  isAmino(o: any): o is QueryStorageChallengeReportsRequestAmino {
    return o && (o.$typeUrl === QueryStorageChallengeReportsRequest.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.filter_by_epoch_id === "boolean");
  },
  encode(message: QueryStorageChallengeReportsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (message.filterByEpochId === true) {
      writer.uint32(32).bool(message.filterByEpochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageChallengeReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageChallengeReportsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.filterByEpochId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStorageChallengeReportsRequest>): QueryStorageChallengeReportsRequest {
    const message = createBaseQueryStorageChallengeReportsRequest();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.filterByEpochId = object.filterByEpochId ?? false;
    return message;
  },
  fromAmino(object: QueryStorageChallengeReportsRequestAmino): QueryStorageChallengeReportsRequest {
    const message = createBaseQueryStorageChallengeReportsRequest();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.filter_by_epoch_id !== undefined && object.filter_by_epoch_id !== null) {
      message.filterByEpochId = object.filter_by_epoch_id;
    }
    return message;
  },
  toAmino(message: QueryStorageChallengeReportsRequest): QueryStorageChallengeReportsRequestAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.filter_by_epoch_id = message.filterByEpochId === false ? undefined : message.filterByEpochId;
    return obj;
  },
  fromAminoMsg(object: QueryStorageChallengeReportsRequestAminoMsg): QueryStorageChallengeReportsRequest {
    return QueryStorageChallengeReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageChallengeReportsRequestProtoMsg): QueryStorageChallengeReportsRequest {
    return QueryStorageChallengeReportsRequest.decode(message.value);
  },
  toProto(message: QueryStorageChallengeReportsRequest): Uint8Array {
    return QueryStorageChallengeReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageChallengeReportsRequest): QueryStorageChallengeReportsRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryStorageChallengeReportsRequest",
      value: QueryStorageChallengeReportsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryStorageChallengeReportsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseStorageChallengeReport(): StorageChallengeReport {
  return {
    reporterSupernodeAccount: "",
    epochId: BigInt(0),
    reportHeight: BigInt(0),
    portStates: []
  };
}
/**
 * @name StorageChallengeReport
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.StorageChallengeReport
 */
export const StorageChallengeReport = {
  typeUrl: "/lumera.audit.v1.StorageChallengeReport",
  is(o: any): o is StorageChallengeReport {
    return o && (o.$typeUrl === StorageChallengeReport.typeUrl || typeof o.reporterSupernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.reportHeight === "bigint" && Array.isArray(o.portStates));
  },
  isAmino(o: any): o is StorageChallengeReportAmino {
    return o && (o.$typeUrl === StorageChallengeReport.typeUrl || typeof o.reporter_supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.report_height === "bigint" && Array.isArray(o.port_states));
  },
  encode(message: StorageChallengeReport, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterSupernodeAccount !== "") {
      writer.uint32(10).string(message.reporterSupernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.reportHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.reportHeight);
    }
    writer.uint32(34).fork();
    for (const v of message.portStates) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageChallengeReport {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageChallengeReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterSupernodeAccount = reader.string();
          break;
        case 2:
          message.epochId = reader.uint64();
          break;
        case 3:
          message.reportHeight = reader.int64();
          break;
        case 4:
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
  fromPartial(object: DeepPartial<StorageChallengeReport>): StorageChallengeReport {
    const message = createBaseStorageChallengeReport();
    message.reporterSupernodeAccount = object.reporterSupernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.reportHeight = object.reportHeight !== undefined && object.reportHeight !== null ? BigInt(object.reportHeight.toString()) : BigInt(0);
    message.portStates = object.portStates?.map(e => e) || [];
    return message;
  },
  fromAmino(object: StorageChallengeReportAmino): StorageChallengeReport {
    const message = createBaseStorageChallengeReport();
    if (object.reporter_supernode_account !== undefined && object.reporter_supernode_account !== null) {
      message.reporterSupernodeAccount = object.reporter_supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.report_height !== undefined && object.report_height !== null) {
      message.reportHeight = BigInt(object.report_height);
    }
    message.portStates = object.port_states?.map(e => e) || [];
    return message;
  },
  toAmino(message: StorageChallengeReport): StorageChallengeReportAmino {
    const obj: any = {};
    obj.reporter_supernode_account = message.reporterSupernodeAccount === "" ? undefined : message.reporterSupernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.report_height = message.reportHeight !== BigInt(0) ? message.reportHeight?.toString() : undefined;
    if (message.portStates) {
      obj.port_states = message.portStates.map(e => e);
    } else {
      obj.port_states = message.portStates;
    }
    return obj;
  },
  fromAminoMsg(object: StorageChallengeReportAminoMsg): StorageChallengeReport {
    return StorageChallengeReport.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageChallengeReportProtoMsg): StorageChallengeReport {
    return StorageChallengeReport.decode(message.value);
  },
  toProto(message: StorageChallengeReport): Uint8Array {
    return StorageChallengeReport.encode(message).finish();
  },
  toProtoMsg(message: StorageChallengeReport): StorageChallengeReportProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.StorageChallengeReport",
      value: StorageChallengeReport.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryStorageChallengeReportsResponse(): QueryStorageChallengeReportsResponse {
  return {
    reports: [],
    pagination: undefined
  };
}
/**
 * @name QueryStorageChallengeReportsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryStorageChallengeReportsResponse
 */
export const QueryStorageChallengeReportsResponse = {
  typeUrl: "/lumera.audit.v1.QueryStorageChallengeReportsResponse",
  is(o: any): o is QueryStorageChallengeReportsResponse {
    return o && (o.$typeUrl === QueryStorageChallengeReportsResponse.typeUrl || Array.isArray(o.reports) && (!o.reports.length || StorageChallengeReport.is(o.reports[0])));
  },
  isAmino(o: any): o is QueryStorageChallengeReportsResponseAmino {
    return o && (o.$typeUrl === QueryStorageChallengeReportsResponse.typeUrl || Array.isArray(o.reports) && (!o.reports.length || StorageChallengeReport.isAmino(o.reports[0])));
  },
  encode(message: QueryStorageChallengeReportsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reports) {
      StorageChallengeReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorageChallengeReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorageChallengeReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(StorageChallengeReport.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryStorageChallengeReportsResponse>): QueryStorageChallengeReportsResponse {
    const message = createBaseQueryStorageChallengeReportsResponse();
    message.reports = object.reports?.map(e => StorageChallengeReport.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryStorageChallengeReportsResponseAmino): QueryStorageChallengeReportsResponse {
    const message = createBaseQueryStorageChallengeReportsResponse();
    message.reports = object.reports?.map(e => StorageChallengeReport.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryStorageChallengeReportsResponse): QueryStorageChallengeReportsResponseAmino {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map(e => e ? StorageChallengeReport.toAmino(e) : undefined);
    } else {
      obj.reports = message.reports;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStorageChallengeReportsResponseAminoMsg): QueryStorageChallengeReportsResponse {
    return QueryStorageChallengeReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorageChallengeReportsResponseProtoMsg): QueryStorageChallengeReportsResponse {
    return QueryStorageChallengeReportsResponse.decode(message.value);
  },
  toProto(message: QueryStorageChallengeReportsResponse): Uint8Array {
    return QueryStorageChallengeReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorageChallengeReportsResponse): QueryStorageChallengeReportsResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryStorageChallengeReportsResponse",
      value: QueryStorageChallengeReportsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryStorageChallengeReportsResponse.typeUrl)) {
      return;
    }
    StorageChallengeReport.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryHostReportsRequest(): QueryHostReportsRequest {
  return {
    supernodeAccount: "",
    epochId: BigInt(0),
    pagination: undefined,
    filterByEpochId: false
  };
}
/**
 * @name QueryHostReportsRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHostReportsRequest
 */
export const QueryHostReportsRequest = {
  typeUrl: "/lumera.audit.v1.QueryHostReportsRequest",
  is(o: any): o is QueryHostReportsRequest {
    return o && (o.$typeUrl === QueryHostReportsRequest.typeUrl || typeof o.supernodeAccount === "string" && typeof o.epochId === "bigint" && typeof o.filterByEpochId === "boolean");
  },
  isAmino(o: any): o is QueryHostReportsRequestAmino {
    return o && (o.$typeUrl === QueryHostReportsRequest.typeUrl || typeof o.supernode_account === "string" && typeof o.epoch_id === "bigint" && typeof o.filter_by_epoch_id === "boolean");
  },
  encode(message: QueryHostReportsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    if (message.epochId !== BigInt(0)) {
      writer.uint32(16).uint64(message.epochId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (message.filterByEpochId === true) {
      writer.uint32(32).bool(message.filterByEpochId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostReportsRequest();
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
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.filterByEpochId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHostReportsRequest>): QueryHostReportsRequest {
    const message = createBaseQueryHostReportsRequest();
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.filterByEpochId = object.filterByEpochId ?? false;
    return message;
  },
  fromAmino(object: QueryHostReportsRequestAmino): QueryHostReportsRequest {
    const message = createBaseQueryHostReportsRequest();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.filter_by_epoch_id !== undefined && object.filter_by_epoch_id !== null) {
      message.filterByEpochId = object.filter_by_epoch_id;
    }
    return message;
  },
  toAmino(message: QueryHostReportsRequest): QueryHostReportsRequestAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.filter_by_epoch_id = message.filterByEpochId === false ? undefined : message.filterByEpochId;
    return obj;
  },
  fromAminoMsg(object: QueryHostReportsRequestAminoMsg): QueryHostReportsRequest {
    return QueryHostReportsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostReportsRequestProtoMsg): QueryHostReportsRequest {
    return QueryHostReportsRequest.decode(message.value);
  },
  toProto(message: QueryHostReportsRequest): Uint8Array {
    return QueryHostReportsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHostReportsRequest): QueryHostReportsRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHostReportsRequest",
      value: QueryHostReportsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHostReportsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseHostReportEntry(): HostReportEntry {
  return {
    epochId: BigInt(0),
    reportHeight: BigInt(0),
    hostReport: HostReport.fromPartial({})
  };
}
/**
 * @name HostReportEntry
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.HostReportEntry
 */
export const HostReportEntry = {
  typeUrl: "/lumera.audit.v1.HostReportEntry",
  is(o: any): o is HostReportEntry {
    return o && (o.$typeUrl === HostReportEntry.typeUrl || typeof o.epochId === "bigint" && typeof o.reportHeight === "bigint" && HostReport.is(o.hostReport));
  },
  isAmino(o: any): o is HostReportEntryAmino {
    return o && (o.$typeUrl === HostReportEntry.typeUrl || typeof o.epoch_id === "bigint" && typeof o.report_height === "bigint" && HostReport.isAmino(o.host_report));
  },
  encode(message: HostReportEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epochId !== BigInt(0)) {
      writer.uint32(8).uint64(message.epochId);
    }
    if (message.reportHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.reportHeight);
    }
    if (message.hostReport !== undefined) {
      HostReport.encode(message.hostReport, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostReportEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostReportEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochId = reader.uint64();
          break;
        case 2:
          message.reportHeight = reader.int64();
          break;
        case 3:
          message.hostReport = HostReport.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HostReportEntry>): HostReportEntry {
    const message = createBaseHostReportEntry();
    message.epochId = object.epochId !== undefined && object.epochId !== null ? BigInt(object.epochId.toString()) : BigInt(0);
    message.reportHeight = object.reportHeight !== undefined && object.reportHeight !== null ? BigInt(object.reportHeight.toString()) : BigInt(0);
    message.hostReport = object.hostReport !== undefined && object.hostReport !== null ? HostReport.fromPartial(object.hostReport) : undefined;
    return message;
  },
  fromAmino(object: HostReportEntryAmino): HostReportEntry {
    const message = createBaseHostReportEntry();
    if (object.epoch_id !== undefined && object.epoch_id !== null) {
      message.epochId = BigInt(object.epoch_id);
    }
    if (object.report_height !== undefined && object.report_height !== null) {
      message.reportHeight = BigInt(object.report_height);
    }
    if (object.host_report !== undefined && object.host_report !== null) {
      message.hostReport = HostReport.fromAmino(object.host_report);
    }
    return message;
  },
  toAmino(message: HostReportEntry): HostReportEntryAmino {
    const obj: any = {};
    obj.epoch_id = message.epochId !== BigInt(0) ? message.epochId?.toString() : undefined;
    obj.report_height = message.reportHeight !== BigInt(0) ? message.reportHeight?.toString() : undefined;
    obj.host_report = message.hostReport ? HostReport.toAmino(message.hostReport) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostReportEntryAminoMsg): HostReportEntry {
    return HostReportEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: HostReportEntryProtoMsg): HostReportEntry {
    return HostReportEntry.decode(message.value);
  },
  toProto(message: HostReportEntry): Uint8Array {
    return HostReportEntry.encode(message).finish();
  },
  toProtoMsg(message: HostReportEntry): HostReportEntryProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.HostReportEntry",
      value: HostReportEntry.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(HostReportEntry.typeUrl)) {
      return;
    }
    HostReport.registerTypeUrl();
  }
};
function createBaseQueryHostReportsResponse(): QueryHostReportsResponse {
  return {
    reports: [],
    pagination: undefined
  };
}
/**
 * @name QueryHostReportsResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHostReportsResponse
 */
export const QueryHostReportsResponse = {
  typeUrl: "/lumera.audit.v1.QueryHostReportsResponse",
  is(o: any): o is QueryHostReportsResponse {
    return o && (o.$typeUrl === QueryHostReportsResponse.typeUrl || Array.isArray(o.reports) && (!o.reports.length || HostReportEntry.is(o.reports[0])));
  },
  isAmino(o: any): o is QueryHostReportsResponseAmino {
    return o && (o.$typeUrl === QueryHostReportsResponse.typeUrl || Array.isArray(o.reports) && (!o.reports.length || HostReportEntry.isAmino(o.reports[0])));
  },
  encode(message: QueryHostReportsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.reports) {
      HostReportEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHostReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHostReportsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(HostReportEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryHostReportsResponse>): QueryHostReportsResponse {
    const message = createBaseQueryHostReportsResponse();
    message.reports = object.reports?.map(e => HostReportEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHostReportsResponseAmino): QueryHostReportsResponse {
    const message = createBaseQueryHostReportsResponse();
    message.reports = object.reports?.map(e => HostReportEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHostReportsResponse): QueryHostReportsResponseAmino {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map(e => e ? HostReportEntry.toAmino(e) : undefined);
    } else {
      obj.reports = message.reports;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHostReportsResponseAminoMsg): QueryHostReportsResponse {
    return QueryHostReportsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHostReportsResponseProtoMsg): QueryHostReportsResponse {
    return QueryHostReportsResponse.decode(message.value);
  },
  toProto(message: QueryHostReportsResponse): Uint8Array {
    return QueryHostReportsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHostReportsResponse): QueryHostReportsResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHostReportsResponse",
      value: QueryHostReportsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHostReportsResponse.typeUrl)) {
      return;
    }
    HostReportEntry.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryNodeSuspicionStateRequest(): QueryNodeSuspicionStateRequest {
  return {
    supernodeAccount: ""
  };
}
/**
 * @name QueryNodeSuspicionStateRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryNodeSuspicionStateRequest
 */
export const QueryNodeSuspicionStateRequest = {
  typeUrl: "/lumera.audit.v1.QueryNodeSuspicionStateRequest",
  is(o: any): o is QueryNodeSuspicionStateRequest {
    return o && (o.$typeUrl === QueryNodeSuspicionStateRequest.typeUrl || typeof o.supernodeAccount === "string");
  },
  isAmino(o: any): o is QueryNodeSuspicionStateRequestAmino {
    return o && (o.$typeUrl === QueryNodeSuspicionStateRequest.typeUrl || typeof o.supernode_account === "string");
  },
  encode(message: QueryNodeSuspicionStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAccount !== "") {
      writer.uint32(10).string(message.supernodeAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNodeSuspicionStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodeSuspicionStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNodeSuspicionStateRequest>): QueryNodeSuspicionStateRequest {
    const message = createBaseQueryNodeSuspicionStateRequest();
    message.supernodeAccount = object.supernodeAccount ?? "";
    return message;
  },
  fromAmino(object: QueryNodeSuspicionStateRequestAmino): QueryNodeSuspicionStateRequest {
    const message = createBaseQueryNodeSuspicionStateRequest();
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    return message;
  },
  toAmino(message: QueryNodeSuspicionStateRequest): QueryNodeSuspicionStateRequestAmino {
    const obj: any = {};
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    return obj;
  },
  fromAminoMsg(object: QueryNodeSuspicionStateRequestAminoMsg): QueryNodeSuspicionStateRequest {
    return QueryNodeSuspicionStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodeSuspicionStateRequestProtoMsg): QueryNodeSuspicionStateRequest {
    return QueryNodeSuspicionStateRequest.decode(message.value);
  },
  toProto(message: QueryNodeSuspicionStateRequest): Uint8Array {
    return QueryNodeSuspicionStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNodeSuspicionStateRequest): QueryNodeSuspicionStateRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryNodeSuspicionStateRequest",
      value: QueryNodeSuspicionStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNodeSuspicionStateResponse(): QueryNodeSuspicionStateResponse {
  return {
    state: NodeSuspicionState.fromPartial({})
  };
}
/**
 * @name QueryNodeSuspicionStateResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryNodeSuspicionStateResponse
 */
export const QueryNodeSuspicionStateResponse = {
  typeUrl: "/lumera.audit.v1.QueryNodeSuspicionStateResponse",
  is(o: any): o is QueryNodeSuspicionStateResponse {
    return o && (o.$typeUrl === QueryNodeSuspicionStateResponse.typeUrl || NodeSuspicionState.is(o.state));
  },
  isAmino(o: any): o is QueryNodeSuspicionStateResponseAmino {
    return o && (o.$typeUrl === QueryNodeSuspicionStateResponse.typeUrl || NodeSuspicionState.isAmino(o.state));
  },
  encode(message: QueryNodeSuspicionStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      NodeSuspicionState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNodeSuspicionStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodeSuspicionStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = NodeSuspicionState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNodeSuspicionStateResponse>): QueryNodeSuspicionStateResponse {
    const message = createBaseQueryNodeSuspicionStateResponse();
    message.state = object.state !== undefined && object.state !== null ? NodeSuspicionState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryNodeSuspicionStateResponseAmino): QueryNodeSuspicionStateResponse {
    const message = createBaseQueryNodeSuspicionStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = NodeSuspicionState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryNodeSuspicionStateResponse): QueryNodeSuspicionStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? NodeSuspicionState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNodeSuspicionStateResponseAminoMsg): QueryNodeSuspicionStateResponse {
    return QueryNodeSuspicionStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNodeSuspicionStateResponseProtoMsg): QueryNodeSuspicionStateResponse {
    return QueryNodeSuspicionStateResponse.decode(message.value);
  },
  toProto(message: QueryNodeSuspicionStateResponse): Uint8Array {
    return QueryNodeSuspicionStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNodeSuspicionStateResponse): QueryNodeSuspicionStateResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryNodeSuspicionStateResponse",
      value: QueryNodeSuspicionStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNodeSuspicionStateResponse.typeUrl)) {
      return;
    }
    NodeSuspicionState.registerTypeUrl();
  }
};
function createBaseQueryReporterReliabilityStateRequest(): QueryReporterReliabilityStateRequest {
  return {
    reporterSupernodeAccount: ""
  };
}
/**
 * @name QueryReporterReliabilityStateRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryReporterReliabilityStateRequest
 */
export const QueryReporterReliabilityStateRequest = {
  typeUrl: "/lumera.audit.v1.QueryReporterReliabilityStateRequest",
  is(o: any): o is QueryReporterReliabilityStateRequest {
    return o && (o.$typeUrl === QueryReporterReliabilityStateRequest.typeUrl || typeof o.reporterSupernodeAccount === "string");
  },
  isAmino(o: any): o is QueryReporterReliabilityStateRequestAmino {
    return o && (o.$typeUrl === QueryReporterReliabilityStateRequest.typeUrl || typeof o.reporter_supernode_account === "string");
  },
  encode(message: QueryReporterReliabilityStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reporterSupernodeAccount !== "") {
      writer.uint32(10).string(message.reporterSupernodeAccount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReporterReliabilityStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReporterReliabilityStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reporterSupernodeAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReporterReliabilityStateRequest>): QueryReporterReliabilityStateRequest {
    const message = createBaseQueryReporterReliabilityStateRequest();
    message.reporterSupernodeAccount = object.reporterSupernodeAccount ?? "";
    return message;
  },
  fromAmino(object: QueryReporterReliabilityStateRequestAmino): QueryReporterReliabilityStateRequest {
    const message = createBaseQueryReporterReliabilityStateRequest();
    if (object.reporter_supernode_account !== undefined && object.reporter_supernode_account !== null) {
      message.reporterSupernodeAccount = object.reporter_supernode_account;
    }
    return message;
  },
  toAmino(message: QueryReporterReliabilityStateRequest): QueryReporterReliabilityStateRequestAmino {
    const obj: any = {};
    obj.reporter_supernode_account = message.reporterSupernodeAccount === "" ? undefined : message.reporterSupernodeAccount;
    return obj;
  },
  fromAminoMsg(object: QueryReporterReliabilityStateRequestAminoMsg): QueryReporterReliabilityStateRequest {
    return QueryReporterReliabilityStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReporterReliabilityStateRequestProtoMsg): QueryReporterReliabilityStateRequest {
    return QueryReporterReliabilityStateRequest.decode(message.value);
  },
  toProto(message: QueryReporterReliabilityStateRequest): Uint8Array {
    return QueryReporterReliabilityStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReporterReliabilityStateRequest): QueryReporterReliabilityStateRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryReporterReliabilityStateRequest",
      value: QueryReporterReliabilityStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryReporterReliabilityStateResponse(): QueryReporterReliabilityStateResponse {
  return {
    state: ReporterReliabilityState.fromPartial({})
  };
}
/**
 * @name QueryReporterReliabilityStateResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryReporterReliabilityStateResponse
 */
export const QueryReporterReliabilityStateResponse = {
  typeUrl: "/lumera.audit.v1.QueryReporterReliabilityStateResponse",
  is(o: any): o is QueryReporterReliabilityStateResponse {
    return o && (o.$typeUrl === QueryReporterReliabilityStateResponse.typeUrl || ReporterReliabilityState.is(o.state));
  },
  isAmino(o: any): o is QueryReporterReliabilityStateResponseAmino {
    return o && (o.$typeUrl === QueryReporterReliabilityStateResponse.typeUrl || ReporterReliabilityState.isAmino(o.state));
  },
  encode(message: QueryReporterReliabilityStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      ReporterReliabilityState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryReporterReliabilityStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReporterReliabilityStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = ReporterReliabilityState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryReporterReliabilityStateResponse>): QueryReporterReliabilityStateResponse {
    const message = createBaseQueryReporterReliabilityStateResponse();
    message.state = object.state !== undefined && object.state !== null ? ReporterReliabilityState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryReporterReliabilityStateResponseAmino): QueryReporterReliabilityStateResponse {
    const message = createBaseQueryReporterReliabilityStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = ReporterReliabilityState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryReporterReliabilityStateResponse): QueryReporterReliabilityStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? ReporterReliabilityState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReporterReliabilityStateResponseAminoMsg): QueryReporterReliabilityStateResponse {
    return QueryReporterReliabilityStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReporterReliabilityStateResponseProtoMsg): QueryReporterReliabilityStateResponse {
    return QueryReporterReliabilityStateResponse.decode(message.value);
  },
  toProto(message: QueryReporterReliabilityStateResponse): Uint8Array {
    return QueryReporterReliabilityStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReporterReliabilityStateResponse): QueryReporterReliabilityStateResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryReporterReliabilityStateResponse",
      value: QueryReporterReliabilityStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryReporterReliabilityStateResponse.typeUrl)) {
      return;
    }
    ReporterReliabilityState.registerTypeUrl();
  }
};
function createBaseQueryTicketDeteriorationStateRequest(): QueryTicketDeteriorationStateRequest {
  return {
    ticketId: ""
  };
}
/**
 * @name QueryTicketDeteriorationStateRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryTicketDeteriorationStateRequest
 */
export const QueryTicketDeteriorationStateRequest = {
  typeUrl: "/lumera.audit.v1.QueryTicketDeteriorationStateRequest",
  is(o: any): o is QueryTicketDeteriorationStateRequest {
    return o && (o.$typeUrl === QueryTicketDeteriorationStateRequest.typeUrl || typeof o.ticketId === "string");
  },
  isAmino(o: any): o is QueryTicketDeteriorationStateRequestAmino {
    return o && (o.$typeUrl === QueryTicketDeteriorationStateRequest.typeUrl || typeof o.ticket_id === "string");
  },
  encode(message: QueryTicketDeteriorationStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTicketDeteriorationStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTicketDeteriorationStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTicketDeteriorationStateRequest>): QueryTicketDeteriorationStateRequest {
    const message = createBaseQueryTicketDeteriorationStateRequest();
    message.ticketId = object.ticketId ?? "";
    return message;
  },
  fromAmino(object: QueryTicketDeteriorationStateRequestAmino): QueryTicketDeteriorationStateRequest {
    const message = createBaseQueryTicketDeteriorationStateRequest();
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    return message;
  },
  toAmino(message: QueryTicketDeteriorationStateRequest): QueryTicketDeteriorationStateRequestAmino {
    const obj: any = {};
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    return obj;
  },
  fromAminoMsg(object: QueryTicketDeteriorationStateRequestAminoMsg): QueryTicketDeteriorationStateRequest {
    return QueryTicketDeteriorationStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTicketDeteriorationStateRequestProtoMsg): QueryTicketDeteriorationStateRequest {
    return QueryTicketDeteriorationStateRequest.decode(message.value);
  },
  toProto(message: QueryTicketDeteriorationStateRequest): Uint8Array {
    return QueryTicketDeteriorationStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTicketDeteriorationStateRequest): QueryTicketDeteriorationStateRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryTicketDeteriorationStateRequest",
      value: QueryTicketDeteriorationStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTicketDeteriorationStateResponse(): QueryTicketDeteriorationStateResponse {
  return {
    state: TicketDeteriorationState.fromPartial({})
  };
}
/**
 * @name QueryTicketDeteriorationStateResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryTicketDeteriorationStateResponse
 */
export const QueryTicketDeteriorationStateResponse = {
  typeUrl: "/lumera.audit.v1.QueryTicketDeteriorationStateResponse",
  is(o: any): o is QueryTicketDeteriorationStateResponse {
    return o && (o.$typeUrl === QueryTicketDeteriorationStateResponse.typeUrl || TicketDeteriorationState.is(o.state));
  },
  isAmino(o: any): o is QueryTicketDeteriorationStateResponseAmino {
    return o && (o.$typeUrl === QueryTicketDeteriorationStateResponse.typeUrl || TicketDeteriorationState.isAmino(o.state));
  },
  encode(message: QueryTicketDeteriorationStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      TicketDeteriorationState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTicketDeteriorationStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTicketDeteriorationStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = TicketDeteriorationState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTicketDeteriorationStateResponse>): QueryTicketDeteriorationStateResponse {
    const message = createBaseQueryTicketDeteriorationStateResponse();
    message.state = object.state !== undefined && object.state !== null ? TicketDeteriorationState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryTicketDeteriorationStateResponseAmino): QueryTicketDeteriorationStateResponse {
    const message = createBaseQueryTicketDeteriorationStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = TicketDeteriorationState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryTicketDeteriorationStateResponse): QueryTicketDeteriorationStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? TicketDeteriorationState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTicketDeteriorationStateResponseAminoMsg): QueryTicketDeteriorationStateResponse {
    return QueryTicketDeteriorationStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTicketDeteriorationStateResponseProtoMsg): QueryTicketDeteriorationStateResponse {
    return QueryTicketDeteriorationStateResponse.decode(message.value);
  },
  toProto(message: QueryTicketDeteriorationStateResponse): Uint8Array {
    return QueryTicketDeteriorationStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTicketDeteriorationStateResponse): QueryTicketDeteriorationStateResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryTicketDeteriorationStateResponse",
      value: QueryTicketDeteriorationStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTicketDeteriorationStateResponse.typeUrl)) {
      return;
    }
    TicketDeteriorationState.registerTypeUrl();
  }
};
function createBaseQueryHealOpRequest(): QueryHealOpRequest {
  return {
    healOpId: BigInt(0)
  };
}
/**
 * @name QueryHealOpRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpRequest
 */
export const QueryHealOpRequest = {
  typeUrl: "/lumera.audit.v1.QueryHealOpRequest",
  is(o: any): o is QueryHealOpRequest {
    return o && (o.$typeUrl === QueryHealOpRequest.typeUrl || typeof o.healOpId === "bigint");
  },
  isAmino(o: any): o is QueryHealOpRequestAmino {
    return o && (o.$typeUrl === QueryHealOpRequest.typeUrl || typeof o.heal_op_id === "bigint");
  },
  encode(message: QueryHealOpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.healOpId !== BigInt(0)) {
      writer.uint32(8).uint64(message.healOpId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHealOpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealOpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healOpId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHealOpRequest>): QueryHealOpRequest {
    const message = createBaseQueryHealOpRequest();
    message.healOpId = object.healOpId !== undefined && object.healOpId !== null ? BigInt(object.healOpId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryHealOpRequestAmino): QueryHealOpRequest {
    const message = createBaseQueryHealOpRequest();
    if (object.heal_op_id !== undefined && object.heal_op_id !== null) {
      message.healOpId = BigInt(object.heal_op_id);
    }
    return message;
  },
  toAmino(message: QueryHealOpRequest): QueryHealOpRequestAmino {
    const obj: any = {};
    obj.heal_op_id = message.healOpId !== BigInt(0) ? message.healOpId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealOpRequestAminoMsg): QueryHealOpRequest {
    return QueryHealOpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealOpRequestProtoMsg): QueryHealOpRequest {
    return QueryHealOpRequest.decode(message.value);
  },
  toProto(message: QueryHealOpRequest): Uint8Array {
    return QueryHealOpRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHealOpRequest): QueryHealOpRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHealOpRequest",
      value: QueryHealOpRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryHealOpResponse(): QueryHealOpResponse {
  return {
    healOp: HealOp.fromPartial({})
  };
}
/**
 * @name QueryHealOpResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpResponse
 */
export const QueryHealOpResponse = {
  typeUrl: "/lumera.audit.v1.QueryHealOpResponse",
  is(o: any): o is QueryHealOpResponse {
    return o && (o.$typeUrl === QueryHealOpResponse.typeUrl || HealOp.is(o.healOp));
  },
  isAmino(o: any): o is QueryHealOpResponseAmino {
    return o && (o.$typeUrl === QueryHealOpResponse.typeUrl || HealOp.isAmino(o.heal_op));
  },
  encode(message: QueryHealOpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.healOp !== undefined) {
      HealOp.encode(message.healOp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHealOpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealOpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healOp = HealOp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHealOpResponse>): QueryHealOpResponse {
    const message = createBaseQueryHealOpResponse();
    message.healOp = object.healOp !== undefined && object.healOp !== null ? HealOp.fromPartial(object.healOp) : undefined;
    return message;
  },
  fromAmino(object: QueryHealOpResponseAmino): QueryHealOpResponse {
    const message = createBaseQueryHealOpResponse();
    if (object.heal_op !== undefined && object.heal_op !== null) {
      message.healOp = HealOp.fromAmino(object.heal_op);
    }
    return message;
  },
  toAmino(message: QueryHealOpResponse): QueryHealOpResponseAmino {
    const obj: any = {};
    obj.heal_op = message.healOp ? HealOp.toAmino(message.healOp) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealOpResponseAminoMsg): QueryHealOpResponse {
    return QueryHealOpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealOpResponseProtoMsg): QueryHealOpResponse {
    return QueryHealOpResponse.decode(message.value);
  },
  toProto(message: QueryHealOpResponse): Uint8Array {
    return QueryHealOpResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHealOpResponse): QueryHealOpResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHealOpResponse",
      value: QueryHealOpResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHealOpResponse.typeUrl)) {
      return;
    }
    HealOp.registerTypeUrl();
  }
};
function createBaseQueryHealOpsByTicketRequest(): QueryHealOpsByTicketRequest {
  return {
    ticketId: "",
    pagination: undefined
  };
}
/**
 * @name QueryHealOpsByTicketRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByTicketRequest
 */
export const QueryHealOpsByTicketRequest = {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByTicketRequest",
  is(o: any): o is QueryHealOpsByTicketRequest {
    return o && (o.$typeUrl === QueryHealOpsByTicketRequest.typeUrl || typeof o.ticketId === "string");
  },
  isAmino(o: any): o is QueryHealOpsByTicketRequestAmino {
    return o && (o.$typeUrl === QueryHealOpsByTicketRequest.typeUrl || typeof o.ticket_id === "string");
  },
  encode(message: QueryHealOpsByTicketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ticketId !== "") {
      writer.uint32(10).string(message.ticketId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHealOpsByTicketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealOpsByTicketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ticketId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHealOpsByTicketRequest>): QueryHealOpsByTicketRequest {
    const message = createBaseQueryHealOpsByTicketRequest();
    message.ticketId = object.ticketId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHealOpsByTicketRequestAmino): QueryHealOpsByTicketRequest {
    const message = createBaseQueryHealOpsByTicketRequest();
    if (object.ticket_id !== undefined && object.ticket_id !== null) {
      message.ticketId = object.ticket_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHealOpsByTicketRequest): QueryHealOpsByTicketRequestAmino {
    const obj: any = {};
    obj.ticket_id = message.ticketId === "" ? undefined : message.ticketId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealOpsByTicketRequestAminoMsg): QueryHealOpsByTicketRequest {
    return QueryHealOpsByTicketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealOpsByTicketRequestProtoMsg): QueryHealOpsByTicketRequest {
    return QueryHealOpsByTicketRequest.decode(message.value);
  },
  toProto(message: QueryHealOpsByTicketRequest): Uint8Array {
    return QueryHealOpsByTicketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHealOpsByTicketRequest): QueryHealOpsByTicketRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHealOpsByTicketRequest",
      value: QueryHealOpsByTicketRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHealOpsByTicketRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryHealOpsByTicketResponse(): QueryHealOpsByTicketResponse {
  return {
    healOps: [],
    pagination: undefined
  };
}
/**
 * @name QueryHealOpsByTicketResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByTicketResponse
 */
export const QueryHealOpsByTicketResponse = {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByTicketResponse",
  is(o: any): o is QueryHealOpsByTicketResponse {
    return o && (o.$typeUrl === QueryHealOpsByTicketResponse.typeUrl || Array.isArray(o.healOps) && (!o.healOps.length || HealOp.is(o.healOps[0])));
  },
  isAmino(o: any): o is QueryHealOpsByTicketResponseAmino {
    return o && (o.$typeUrl === QueryHealOpsByTicketResponse.typeUrl || Array.isArray(o.heal_ops) && (!o.heal_ops.length || HealOp.isAmino(o.heal_ops[0])));
  },
  encode(message: QueryHealOpsByTicketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.healOps) {
      HealOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHealOpsByTicketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealOpsByTicketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healOps.push(HealOp.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryHealOpsByTicketResponse>): QueryHealOpsByTicketResponse {
    const message = createBaseQueryHealOpsByTicketResponse();
    message.healOps = object.healOps?.map(e => HealOp.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHealOpsByTicketResponseAmino): QueryHealOpsByTicketResponse {
    const message = createBaseQueryHealOpsByTicketResponse();
    message.healOps = object.heal_ops?.map(e => HealOp.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHealOpsByTicketResponse): QueryHealOpsByTicketResponseAmino {
    const obj: any = {};
    if (message.healOps) {
      obj.heal_ops = message.healOps.map(e => e ? HealOp.toAmino(e) : undefined);
    } else {
      obj.heal_ops = message.healOps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealOpsByTicketResponseAminoMsg): QueryHealOpsByTicketResponse {
    return QueryHealOpsByTicketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealOpsByTicketResponseProtoMsg): QueryHealOpsByTicketResponse {
    return QueryHealOpsByTicketResponse.decode(message.value);
  },
  toProto(message: QueryHealOpsByTicketResponse): Uint8Array {
    return QueryHealOpsByTicketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHealOpsByTicketResponse): QueryHealOpsByTicketResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHealOpsByTicketResponse",
      value: QueryHealOpsByTicketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHealOpsByTicketResponse.typeUrl)) {
      return;
    }
    HealOp.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryHealOpsByStatusRequest(): QueryHealOpsByStatusRequest {
  return {
    status: 0,
    pagination: undefined
  };
}
/**
 * @name QueryHealOpsByStatusRequest
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByStatusRequest
 */
export const QueryHealOpsByStatusRequest = {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByStatusRequest",
  is(o: any): o is QueryHealOpsByStatusRequest {
    return o && (o.$typeUrl === QueryHealOpsByStatusRequest.typeUrl || isSet(o.status));
  },
  isAmino(o: any): o is QueryHealOpsByStatusRequestAmino {
    return o && (o.$typeUrl === QueryHealOpsByStatusRequest.typeUrl || isSet(o.status));
  },
  encode(message: QueryHealOpsByStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHealOpsByStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealOpsByStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHealOpsByStatusRequest>): QueryHealOpsByStatusRequest {
    const message = createBaseQueryHealOpsByStatusRequest();
    message.status = object.status ?? 0;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHealOpsByStatusRequestAmino): QueryHealOpsByStatusRequest {
    const message = createBaseQueryHealOpsByStatusRequest();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHealOpsByStatusRequest): QueryHealOpsByStatusRequestAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealOpsByStatusRequestAminoMsg): QueryHealOpsByStatusRequest {
    return QueryHealOpsByStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealOpsByStatusRequestProtoMsg): QueryHealOpsByStatusRequest {
    return QueryHealOpsByStatusRequest.decode(message.value);
  },
  toProto(message: QueryHealOpsByStatusRequest): Uint8Array {
    return QueryHealOpsByStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHealOpsByStatusRequest): QueryHealOpsByStatusRequestProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHealOpsByStatusRequest",
      value: QueryHealOpsByStatusRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHealOpsByStatusRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryHealOpsByStatusResponse(): QueryHealOpsByStatusResponse {
  return {
    healOps: [],
    pagination: undefined
  };
}
/**
 * @name QueryHealOpsByStatusResponse
 * @package lumera.audit.v1
 * @see proto type: lumera.audit.v1.QueryHealOpsByStatusResponse
 */
export const QueryHealOpsByStatusResponse = {
  typeUrl: "/lumera.audit.v1.QueryHealOpsByStatusResponse",
  is(o: any): o is QueryHealOpsByStatusResponse {
    return o && (o.$typeUrl === QueryHealOpsByStatusResponse.typeUrl || Array.isArray(o.healOps) && (!o.healOps.length || HealOp.is(o.healOps[0])));
  },
  isAmino(o: any): o is QueryHealOpsByStatusResponseAmino {
    return o && (o.$typeUrl === QueryHealOpsByStatusResponse.typeUrl || Array.isArray(o.heal_ops) && (!o.heal_ops.length || HealOp.isAmino(o.heal_ops[0])));
  },
  encode(message: QueryHealOpsByStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.healOps) {
      HealOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHealOpsByStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHealOpsByStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.healOps.push(HealOp.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryHealOpsByStatusResponse>): QueryHealOpsByStatusResponse {
    const message = createBaseQueryHealOpsByStatusResponse();
    message.healOps = object.healOps?.map(e => HealOp.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHealOpsByStatusResponseAmino): QueryHealOpsByStatusResponse {
    const message = createBaseQueryHealOpsByStatusResponse();
    message.healOps = object.heal_ops?.map(e => HealOp.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryHealOpsByStatusResponse): QueryHealOpsByStatusResponseAmino {
    const obj: any = {};
    if (message.healOps) {
      obj.heal_ops = message.healOps.map(e => e ? HealOp.toAmino(e) : undefined);
    } else {
      obj.heal_ops = message.healOps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHealOpsByStatusResponseAminoMsg): QueryHealOpsByStatusResponse {
    return QueryHealOpsByStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHealOpsByStatusResponseProtoMsg): QueryHealOpsByStatusResponse {
    return QueryHealOpsByStatusResponse.decode(message.value);
  },
  toProto(message: QueryHealOpsByStatusResponse): Uint8Array {
    return QueryHealOpsByStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHealOpsByStatusResponse): QueryHealOpsByStatusResponseProtoMsg {
    return {
      typeUrl: "/lumera.audit.v1.QueryHealOpsByStatusResponse",
      value: QueryHealOpsByStatusResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryHealOpsByStatusResponse.typeUrl)) {
      return;
    }
    HealOp.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};