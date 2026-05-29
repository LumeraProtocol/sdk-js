// @ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEvidenceByIdRequest, QueryEvidenceByIdResponse, QueryEvidenceBySubjectRequest, QueryEvidenceBySubjectResponse, QueryEvidenceByActionRequest, QueryEvidenceByActionResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse, QueryEpochAnchorRequest, QueryEpochAnchorResponse, QueryCurrentEpochAnchorRequest, QueryCurrentEpochAnchorResponse, QueryAssignedTargetsRequest, QueryAssignedTargetsResponse, QueryEpochReportRequest, QueryEpochReportResponse, QueryEpochReportsByReporterRequest, QueryEpochReportsByReporterResponse, QueryStorageChallengeReportsRequest, QueryStorageChallengeReportsResponse, QueryHostReportsRequest, QueryHostReportsResponse, QueryNodeSuspicionStateRequest, QueryNodeSuspicionStateResponse, QueryReporterReliabilityStateRequest, QueryReporterReliabilityStateResponse, QueryTicketDeteriorationStateRequest, QueryTicketDeteriorationStateResponse, QueryHealOpRequest, QueryHealOpResponse, QueryHealOpsByTicketRequest, QueryHealOpsByTicketResponse, QueryHealOpsByStatusRequest, QueryHealOpsByStatusResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EvidenceById queries a single evidence record by id. */
  evidenceById(request: QueryEvidenceByIdRequest): Promise<QueryEvidenceByIdResponse>;
  /** EvidenceBySubject queries evidence records by subject address. */
  evidenceBySubject(request: QueryEvidenceBySubjectRequest): Promise<QueryEvidenceBySubjectResponse>;
  /** EvidenceByAction queries evidence records by action id. */
  evidenceByAction(request: QueryEvidenceByActionRequest): Promise<QueryEvidenceByActionResponse>;
  /** CurrentEpoch returns the current derived epoch boundaries at the current chain height. */
  currentEpoch(request?: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
  /** EpochAnchor returns the persisted epoch anchor for the given epoch_id. */
  epochAnchor(request: QueryEpochAnchorRequest): Promise<QueryEpochAnchorResponse>;
  /** CurrentEpochAnchor returns the persisted epoch anchor for the current epoch. */
  currentEpochAnchor(request?: QueryCurrentEpochAnchorRequest): Promise<QueryCurrentEpochAnchorResponse>;
  /**
   * AssignedTargets returns the prober -> targets assignment for a given supernode_account.
   * If filter_by_epoch_id is false, it returns the assignments for the current epoch.
   */
  assignedTargets(request: QueryAssignedTargetsRequest): Promise<QueryAssignedTargetsResponse>;
  /** EpochReport returns the submitted epoch report for (epoch_id, supernode_account). */
  epochReport(request: QueryEpochReportRequest): Promise<QueryEpochReportResponse>;
  /** EpochReportsByReporter returns epoch reports submitted by the given reporter across epochs. */
  epochReportsByReporter(request: QueryEpochReportsByReporterRequest): Promise<QueryEpochReportsByReporterResponse>;
  /** StorageChallengeReports returns all reports that include storage-challenge observations about the given supernode_account. */
  storageChallengeReports(request: QueryStorageChallengeReportsRequest): Promise<QueryStorageChallengeReportsResponse>;
  /** HostReports returns host reports submitted by the given supernode_account across epochs. */
  hostReports(request: QueryHostReportsRequest): Promise<QueryHostReportsResponse>;
  /** NodeSuspicionState returns storage-truth node suspicion state for a supernode account. */
  nodeSuspicionState(request: QueryNodeSuspicionStateRequest): Promise<QueryNodeSuspicionStateResponse>;
  /** ReporterReliabilityState returns storage-truth reporter reliability state for a reporter account. */
  reporterReliabilityState(request: QueryReporterReliabilityStateRequest): Promise<QueryReporterReliabilityStateResponse>;
  /** TicketDeteriorationState returns storage-truth ticket deterioration state for a ticket id. */
  ticketDeteriorationState(request: QueryTicketDeteriorationStateRequest): Promise<QueryTicketDeteriorationStateResponse>;
  /** HealOp returns a single storage-truth heal operation by id. */
  healOp(request: QueryHealOpRequest): Promise<QueryHealOpResponse>;
  /** HealOpsByTicket returns storage-truth heal operations for a ticket id. */
  healOpsByTicket(request: QueryHealOpsByTicketRequest): Promise<QueryHealOpsByTicketResponse>;
  /** HealOpsByStatus returns storage-truth heal operations filtered by status. */
  healOpsByStatus(request: QueryHealOpsByStatusRequest): Promise<QueryHealOpsByStatusResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* EvidenceById queries a single evidence record by id. */
  evidenceById = async (request: QueryEvidenceByIdRequest): Promise<QueryEvidenceByIdResponse> => {
    const data = QueryEvidenceByIdRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "EvidenceById", data);
    return promise.then(data => QueryEvidenceByIdResponse.decode(new BinaryReader(data)));
  };
  /* EvidenceBySubject queries evidence records by subject address. */
  evidenceBySubject = async (request: QueryEvidenceBySubjectRequest): Promise<QueryEvidenceBySubjectResponse> => {
    const data = QueryEvidenceBySubjectRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "EvidenceBySubject", data);
    return promise.then(data => QueryEvidenceBySubjectResponse.decode(new BinaryReader(data)));
  };
  /* EvidenceByAction queries evidence records by action id. */
  evidenceByAction = async (request: QueryEvidenceByActionRequest): Promise<QueryEvidenceByActionResponse> => {
    const data = QueryEvidenceByActionRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "EvidenceByAction", data);
    return promise.then(data => QueryEvidenceByActionResponse.decode(new BinaryReader(data)));
  };
  /* CurrentEpoch returns the current derived epoch boundaries at the current chain height. */
  currentEpoch = async (request: QueryCurrentEpochRequest = {}): Promise<QueryCurrentEpochResponse> => {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
  };
  /* EpochAnchor returns the persisted epoch anchor for the given epoch_id. */
  epochAnchor = async (request: QueryEpochAnchorRequest): Promise<QueryEpochAnchorResponse> => {
    const data = QueryEpochAnchorRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "EpochAnchor", data);
    return promise.then(data => QueryEpochAnchorResponse.decode(new BinaryReader(data)));
  };
  /* CurrentEpochAnchor returns the persisted epoch anchor for the current epoch. */
  currentEpochAnchor = async (request: QueryCurrentEpochAnchorRequest = {}): Promise<QueryCurrentEpochAnchorResponse> => {
    const data = QueryCurrentEpochAnchorRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "CurrentEpochAnchor", data);
    return promise.then(data => QueryCurrentEpochAnchorResponse.decode(new BinaryReader(data)));
  };
  /* AssignedTargets returns the prober -> targets assignment for a given supernode_account.
   If filter_by_epoch_id is false, it returns the assignments for the current epoch. */
  assignedTargets = async (request: QueryAssignedTargetsRequest): Promise<QueryAssignedTargetsResponse> => {
    const data = QueryAssignedTargetsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "AssignedTargets", data);
    return promise.then(data => QueryAssignedTargetsResponse.decode(new BinaryReader(data)));
  };
  /* EpochReport returns the submitted epoch report for (epoch_id, supernode_account). */
  epochReport = async (request: QueryEpochReportRequest): Promise<QueryEpochReportResponse> => {
    const data = QueryEpochReportRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "EpochReport", data);
    return promise.then(data => QueryEpochReportResponse.decode(new BinaryReader(data)));
  };
  /* EpochReportsByReporter returns epoch reports submitted by the given reporter across epochs. */
  epochReportsByReporter = async (request: QueryEpochReportsByReporterRequest): Promise<QueryEpochReportsByReporterResponse> => {
    const data = QueryEpochReportsByReporterRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "EpochReportsByReporter", data);
    return promise.then(data => QueryEpochReportsByReporterResponse.decode(new BinaryReader(data)));
  };
  /* StorageChallengeReports returns all reports that include storage-challenge observations about the given supernode_account. */
  storageChallengeReports = async (request: QueryStorageChallengeReportsRequest): Promise<QueryStorageChallengeReportsResponse> => {
    const data = QueryStorageChallengeReportsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "StorageChallengeReports", data);
    return promise.then(data => QueryStorageChallengeReportsResponse.decode(new BinaryReader(data)));
  };
  /* HostReports returns host reports submitted by the given supernode_account across epochs. */
  hostReports = async (request: QueryHostReportsRequest): Promise<QueryHostReportsResponse> => {
    const data = QueryHostReportsRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "HostReports", data);
    return promise.then(data => QueryHostReportsResponse.decode(new BinaryReader(data)));
  };
  /* NodeSuspicionState returns storage-truth node suspicion state for a supernode account. */
  nodeSuspicionState = async (request: QueryNodeSuspicionStateRequest): Promise<QueryNodeSuspicionStateResponse> => {
    const data = QueryNodeSuspicionStateRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "NodeSuspicionState", data);
    return promise.then(data => QueryNodeSuspicionStateResponse.decode(new BinaryReader(data)));
  };
  /* ReporterReliabilityState returns storage-truth reporter reliability state for a reporter account. */
  reporterReliabilityState = async (request: QueryReporterReliabilityStateRequest): Promise<QueryReporterReliabilityStateResponse> => {
    const data = QueryReporterReliabilityStateRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "ReporterReliabilityState", data);
    return promise.then(data => QueryReporterReliabilityStateResponse.decode(new BinaryReader(data)));
  };
  /* TicketDeteriorationState returns storage-truth ticket deterioration state for a ticket id. */
  ticketDeteriorationState = async (request: QueryTicketDeteriorationStateRequest): Promise<QueryTicketDeteriorationStateResponse> => {
    const data = QueryTicketDeteriorationStateRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "TicketDeteriorationState", data);
    return promise.then(data => QueryTicketDeteriorationStateResponse.decode(new BinaryReader(data)));
  };
  /* HealOp returns a single storage-truth heal operation by id. */
  healOp = async (request: QueryHealOpRequest): Promise<QueryHealOpResponse> => {
    const data = QueryHealOpRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "HealOp", data);
    return promise.then(data => QueryHealOpResponse.decode(new BinaryReader(data)));
  };
  /* HealOpsByTicket returns storage-truth heal operations for a ticket id. */
  healOpsByTicket = async (request: QueryHealOpsByTicketRequest): Promise<QueryHealOpsByTicketResponse> => {
    const data = QueryHealOpsByTicketRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "HealOpsByTicket", data);
    return promise.then(data => QueryHealOpsByTicketResponse.decode(new BinaryReader(data)));
  };
  /* HealOpsByStatus returns storage-truth heal operations filtered by status. */
  healOpsByStatus = async (request: QueryHealOpsByStatusRequest): Promise<QueryHealOpsByStatusResponse> => {
    const data = QueryHealOpsByStatusRequest.encode(request).finish();
    const promise = this.rpc.request("lumera.audit.v1.Query", "HealOpsByStatus", data);
    return promise.then(data => QueryHealOpsByStatusResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    evidenceById(request: QueryEvidenceByIdRequest): Promise<QueryEvidenceByIdResponse> {
      return queryService.evidenceById(request);
    },
    evidenceBySubject(request: QueryEvidenceBySubjectRequest): Promise<QueryEvidenceBySubjectResponse> {
      return queryService.evidenceBySubject(request);
    },
    evidenceByAction(request: QueryEvidenceByActionRequest): Promise<QueryEvidenceByActionResponse> {
      return queryService.evidenceByAction(request);
    },
    currentEpoch(request?: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
      return queryService.currentEpoch(request);
    },
    epochAnchor(request: QueryEpochAnchorRequest): Promise<QueryEpochAnchorResponse> {
      return queryService.epochAnchor(request);
    },
    currentEpochAnchor(request?: QueryCurrentEpochAnchorRequest): Promise<QueryCurrentEpochAnchorResponse> {
      return queryService.currentEpochAnchor(request);
    },
    assignedTargets(request: QueryAssignedTargetsRequest): Promise<QueryAssignedTargetsResponse> {
      return queryService.assignedTargets(request);
    },
    epochReport(request: QueryEpochReportRequest): Promise<QueryEpochReportResponse> {
      return queryService.epochReport(request);
    },
    epochReportsByReporter(request: QueryEpochReportsByReporterRequest): Promise<QueryEpochReportsByReporterResponse> {
      return queryService.epochReportsByReporter(request);
    },
    storageChallengeReports(request: QueryStorageChallengeReportsRequest): Promise<QueryStorageChallengeReportsResponse> {
      return queryService.storageChallengeReports(request);
    },
    hostReports(request: QueryHostReportsRequest): Promise<QueryHostReportsResponse> {
      return queryService.hostReports(request);
    },
    nodeSuspicionState(request: QueryNodeSuspicionStateRequest): Promise<QueryNodeSuspicionStateResponse> {
      return queryService.nodeSuspicionState(request);
    },
    reporterReliabilityState(request: QueryReporterReliabilityStateRequest): Promise<QueryReporterReliabilityStateResponse> {
      return queryService.reporterReliabilityState(request);
    },
    ticketDeteriorationState(request: QueryTicketDeteriorationStateRequest): Promise<QueryTicketDeteriorationStateResponse> {
      return queryService.ticketDeteriorationState(request);
    },
    healOp(request: QueryHealOpRequest): Promise<QueryHealOpResponse> {
      return queryService.healOp(request);
    },
    healOpsByTicket(request: QueryHealOpsByTicketRequest): Promise<QueryHealOpsByTicketResponse> {
      return queryService.healOpsByTicket(request);
    },
    healOpsByStatus(request: QueryHealOpsByStatusRequest): Promise<QueryHealOpsByStatusResponse> {
      return queryService.healOpsByStatus(request);
    }
  };
};