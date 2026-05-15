// @ts-nocheck
/* eslint-disable */
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino } from "./params";
import { SuperNode, SuperNodeAmino } from "./super_node";
import { SupernodeMetricsState, SupernodeMetricsStateAmino } from "./metrics";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryGetSuperNodeRequest is request type for the Query/GetSuperNode RPC method.
 * @name QueryGetSuperNodeRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeRequest
 */
export interface QueryGetSuperNodeRequest {
  validatorAddress: string;
}
export interface QueryGetSuperNodeRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeRequest";
  value: Uint8Array;
}
/**
 * QueryGetSuperNodeRequest is request type for the Query/GetSuperNode RPC method.
 * @name QueryGetSuperNodeRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeRequest
 */
export interface QueryGetSuperNodeRequestAmino {
  validatorAddress: string;
}
export interface QueryGetSuperNodeRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryGetSuperNodeRequest";
  value: QueryGetSuperNodeRequestAmino;
}
/**
 * QueryGetSuperNodeResponse is response type for the Query/GetSuperNode RPC method.
 * @name QueryGetSuperNodeResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeResponse
 */
export interface QueryGetSuperNodeResponse {
  supernode?: SuperNode;
}
export interface QueryGetSuperNodeResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeResponse";
  value: Uint8Array;
}
/**
 * QueryGetSuperNodeResponse is response type for the Query/GetSuperNode RPC method.
 * @name QueryGetSuperNodeResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeResponse
 */
export interface QueryGetSuperNodeResponseAmino {
  supernode?: SuperNodeAmino;
}
export interface QueryGetSuperNodeResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryGetSuperNodeResponse";
  value: QueryGetSuperNodeResponseAmino;
}
/**
 * QueryGetSuperNodeBySuperNodeAddressRequest is request type for the Query/GetSuperNodeBySuperNodeAddress RPC method.
 * @name QueryGetSuperNodeBySuperNodeAddressRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest
 */
export interface QueryGetSuperNodeBySuperNodeAddressRequest {
  supernodeAddress: string;
}
export interface QueryGetSuperNodeBySuperNodeAddressRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest";
  value: Uint8Array;
}
/**
 * QueryGetSuperNodeBySuperNodeAddressRequest is request type for the Query/GetSuperNodeBySuperNodeAddress RPC method.
 * @name QueryGetSuperNodeBySuperNodeAddressRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest
 */
export interface QueryGetSuperNodeBySuperNodeAddressRequestAmino {
  supernodeAddress: string;
}
export interface QueryGetSuperNodeBySuperNodeAddressRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest";
  value: QueryGetSuperNodeBySuperNodeAddressRequestAmino;
}
/**
 * QueryGetSuperNodeBySuperNodeAddressResponse is response type for the Query/GetSuperNodeBySuperNodeAddress RPC method.
 * @name QueryGetSuperNodeBySuperNodeAddressResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse
 */
export interface QueryGetSuperNodeBySuperNodeAddressResponse {
  supernode?: SuperNode;
}
export interface QueryGetSuperNodeBySuperNodeAddressResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse";
  value: Uint8Array;
}
/**
 * QueryGetSuperNodeBySuperNodeAddressResponse is response type for the Query/GetSuperNodeBySuperNodeAddress RPC method.
 * @name QueryGetSuperNodeBySuperNodeAddressResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse
 */
export interface QueryGetSuperNodeBySuperNodeAddressResponseAmino {
  supernode?: SuperNodeAmino;
}
export interface QueryGetSuperNodeBySuperNodeAddressResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse";
  value: QueryGetSuperNodeBySuperNodeAddressResponseAmino;
}
/**
 * QueryListSuperNodesRequest is request type for the Query/ListSuperNodes RPC method.
 * @name QueryListSuperNodesRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryListSuperNodesRequest
 */
export interface QueryListSuperNodesRequest {
  pagination?: PageRequest;
}
export interface QueryListSuperNodesRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryListSuperNodesRequest";
  value: Uint8Array;
}
/**
 * QueryListSuperNodesRequest is request type for the Query/ListSuperNodes RPC method.
 * @name QueryListSuperNodesRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryListSuperNodesRequest
 */
export interface QueryListSuperNodesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryListSuperNodesRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryListSuperNodesRequest";
  value: QueryListSuperNodesRequestAmino;
}
/**
 * QueryListSuperNodesResponse is response type for the Query/ListSuperNodes RPC method.
 * @name QueryListSuperNodesResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryListSuperNodesResponse
 */
export interface QueryListSuperNodesResponse {
  supernodes: SuperNode[];
  pagination?: PageResponse;
}
export interface QueryListSuperNodesResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryListSuperNodesResponse";
  value: Uint8Array;
}
/**
 * QueryListSuperNodesResponse is response type for the Query/ListSuperNodes RPC method.
 * @name QueryListSuperNodesResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryListSuperNodesResponse
 */
export interface QueryListSuperNodesResponseAmino {
  supernodes: SuperNodeAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryListSuperNodesResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryListSuperNodesResponse";
  value: QueryListSuperNodesResponseAmino;
}
/**
 * QueryGetTopSuperNodesForBlockRequest is request type for the Query/GetTopSuperNodesForBlock RPC method.
 * @name QueryGetTopSuperNodesForBlockRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest
 */
export interface QueryGetTopSuperNodesForBlockRequest {
  blockHeight: number;
  limit: number;
  state: string;
}
export interface QueryGetTopSuperNodesForBlockRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest";
  value: Uint8Array;
}
/**
 * QueryGetTopSuperNodesForBlockRequest is request type for the Query/GetTopSuperNodesForBlock RPC method.
 * @name QueryGetTopSuperNodesForBlockRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest
 */
export interface QueryGetTopSuperNodesForBlockRequestAmino {
  blockHeight: number;
  limit: number;
  state: string;
}
export interface QueryGetTopSuperNodesForBlockRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest";
  value: QueryGetTopSuperNodesForBlockRequestAmino;
}
/**
 * QueryGetTopSuperNodesForBlockResponse is response type for the Query/GetTopSuperNodesForBlock RPC method.
 * @name QueryGetTopSuperNodesForBlockResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse
 */
export interface QueryGetTopSuperNodesForBlockResponse {
  supernodes: SuperNode[];
}
export interface QueryGetTopSuperNodesForBlockResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse";
  value: Uint8Array;
}
/**
 * QueryGetTopSuperNodesForBlockResponse is response type for the Query/GetTopSuperNodesForBlock RPC method.
 * @name QueryGetTopSuperNodesForBlockResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse
 */
export interface QueryGetTopSuperNodesForBlockResponseAmino {
  supernodes: SuperNodeAmino[];
}
export interface QueryGetTopSuperNodesForBlockResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse";
  value: QueryGetTopSuperNodesForBlockResponseAmino;
}
/**
 * QueryGetMetricsRequest is request type for the Query/GetMetrics RPC method.
 * @name QueryGetMetricsRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetMetricsRequest
 */
export interface QueryGetMetricsRequest {
  validatorAddress: string;
}
export interface QueryGetMetricsRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetMetricsRequest";
  value: Uint8Array;
}
/**
 * QueryGetMetricsRequest is request type for the Query/GetMetrics RPC method.
 * @name QueryGetMetricsRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetMetricsRequest
 */
export interface QueryGetMetricsRequestAmino {
  validatorAddress: string;
}
export interface QueryGetMetricsRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryGetMetricsRequest";
  value: QueryGetMetricsRequestAmino;
}
/**
 * QueryGetMetricsResponse is response type for the Query/GetMetrics RPC method.
 * @name QueryGetMetricsResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetMetricsResponse
 */
export interface QueryGetMetricsResponse {
  metricsState?: SupernodeMetricsState;
}
export interface QueryGetMetricsResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryGetMetricsResponse";
  value: Uint8Array;
}
/**
 * QueryGetMetricsResponse is response type for the Query/GetMetrics RPC method.
 * @name QueryGetMetricsResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetMetricsResponse
 */
export interface QueryGetMetricsResponseAmino {
  metrics_state?: SupernodeMetricsStateAmino;
}
export interface QueryGetMetricsResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryGetMetricsResponse";
  value: QueryGetMetricsResponseAmino;
}
/**
 * QueryPoolStateRequest is request type for the Query/PoolState RPC method.
 * @name QueryPoolStateRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPoolStateRequest
 */
export interface QueryPoolStateRequest {}
export interface QueryPoolStateRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryPoolStateRequest";
  value: Uint8Array;
}
/**
 * QueryPoolStateRequest is request type for the Query/PoolState RPC method.
 * @name QueryPoolStateRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPoolStateRequest
 */
export interface QueryPoolStateRequestAmino {}
export interface QueryPoolStateRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryPoolStateRequest";
  value: QueryPoolStateRequestAmino;
}
/**
 * QueryPoolStateResponse is response type for the Query/PoolState RPC method.
 * @name QueryPoolStateResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPoolStateResponse
 */
export interface QueryPoolStateResponse {
  /**
   * balance is the current undistributed pool balance.
   */
  balance: Coin[];
  /**
   * last_distribution_height is the block height of the last distribution.
   */
  lastDistributionHeight: bigint;
  /**
   * total_distributed is the cumulative amount distributed.
   */
  totalDistributed: Coin[];
  /**
   * eligible_sn_count is the number of SuperNodes currently eligible for payouts.
   */
  eligibleSnCount: bigint;
}
export interface QueryPoolStateResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryPoolStateResponse";
  value: Uint8Array;
}
/**
 * QueryPoolStateResponse is response type for the Query/PoolState RPC method.
 * @name QueryPoolStateResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPoolStateResponse
 */
export interface QueryPoolStateResponseAmino {
  /**
   * balance is the current undistributed pool balance.
   */
  balance: CoinAmino[];
  /**
   * last_distribution_height is the block height of the last distribution.
   */
  last_distribution_height: string;
  /**
   * total_distributed is the cumulative amount distributed.
   */
  total_distributed: CoinAmino[];
  /**
   * eligible_sn_count is the number of SuperNodes currently eligible for payouts.
   */
  eligible_sn_count: string;
}
export interface QueryPoolStateResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryPoolStateResponse";
  value: QueryPoolStateResponseAmino;
}
/**
 * QuerySNEligibilityRequest is request type for the Query/SNEligibility RPC method.
 * @name QuerySNEligibilityRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QuerySNEligibilityRequest
 */
export interface QuerySNEligibilityRequest {
  validatorAddress: string;
}
export interface QuerySNEligibilityRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QuerySNEligibilityRequest";
  value: Uint8Array;
}
/**
 * QuerySNEligibilityRequest is request type for the Query/SNEligibility RPC method.
 * @name QuerySNEligibilityRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QuerySNEligibilityRequest
 */
export interface QuerySNEligibilityRequestAmino {
  validator_address: string;
}
export interface QuerySNEligibilityRequestAminoMsg {
  type: "/lumera.supernode.v1.QuerySNEligibilityRequest";
  value: QuerySNEligibilityRequestAmino;
}
/**
 * QuerySNEligibilityResponse is response type for the Query/SNEligibility RPC method.
 * @name QuerySNEligibilityResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QuerySNEligibilityResponse
 */
export interface QuerySNEligibilityResponse {
  eligible: boolean;
  reason: string;
  cascadeKademliaDbBytes: number;
  smoothedWeight: number;
}
export interface QuerySNEligibilityResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QuerySNEligibilityResponse";
  value: Uint8Array;
}
/**
 * QuerySNEligibilityResponse is response type for the Query/SNEligibility RPC method.
 * @name QuerySNEligibilityResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QuerySNEligibilityResponse
 */
export interface QuerySNEligibilityResponseAmino {
  eligible: boolean;
  reason: string;
  cascade_kademlia_db_bytes: number;
  smoothed_weight: number;
}
export interface QuerySNEligibilityResponseAminoMsg {
  type: "/lumera.supernode.v1.QuerySNEligibilityResponse";
  value: QuerySNEligibilityResponseAmino;
}
/**
 * @name PayoutHistoryEntry
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.PayoutHistoryEntry
 */
export interface PayoutHistoryEntry {
  height: bigint;
  validatorAddress: string;
  supernodeAccount: string;
  amount: Coin[];
  rawBytes: number;
  smoothedBytes: number;
  effectiveWeight: number;
  rampWeight: number;
}
export interface PayoutHistoryEntryProtoMsg {
  typeUrl: "/lumera.supernode.v1.PayoutHistoryEntry";
  value: Uint8Array;
}
/**
 * @name PayoutHistoryEntryAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.PayoutHistoryEntry
 */
export interface PayoutHistoryEntryAmino {
  height: string;
  validator_address: string;
  supernode_account: string;
  amount: CoinAmino[];
  raw_bytes: number;
  smoothed_bytes: number;
  effective_weight: number;
  ramp_weight: number;
}
export interface PayoutHistoryEntryAminoMsg {
  type: "/lumera.supernode.v1.PayoutHistoryEntry";
  value: PayoutHistoryEntryAmino;
}
/**
 * @name QueryPayoutHistoryRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPayoutHistoryRequest
 */
export interface QueryPayoutHistoryRequest {
  validatorAddress: string;
  pagination?: PageRequest;
}
export interface QueryPayoutHistoryRequestProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryPayoutHistoryRequest";
  value: Uint8Array;
}
/**
 * @name QueryPayoutHistoryRequestAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPayoutHistoryRequest
 */
export interface QueryPayoutHistoryRequestAmino {
  validator_address: string;
  pagination?: PageRequestAmino;
}
export interface QueryPayoutHistoryRequestAminoMsg {
  type: "/lumera.supernode.v1.QueryPayoutHistoryRequest";
  value: QueryPayoutHistoryRequestAmino;
}
/**
 * @name QueryPayoutHistoryResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPayoutHistoryResponse
 */
export interface QueryPayoutHistoryResponse {
  entries: PayoutHistoryEntry[];
  pagination?: PageResponse;
}
export interface QueryPayoutHistoryResponseProtoMsg {
  typeUrl: "/lumera.supernode.v1.QueryPayoutHistoryResponse";
  value: Uint8Array;
}
/**
 * @name QueryPayoutHistoryResponseAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPayoutHistoryResponse
 */
export interface QueryPayoutHistoryResponseAmino {
  entries: PayoutHistoryEntryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPayoutHistoryResponseAminoMsg {
  type: "/lumera.supernode.v1.QueryPayoutHistoryResponse";
  value: QueryPayoutHistoryResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/lumera.supernode.v1.QueryParamsRequest",
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
      typeUrl: "/lumera.supernode.v1.QueryParamsRequest",
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
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/lumera.supernode.v1.QueryParamsResponse",
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
      typeUrl: "/lumera.supernode.v1.QueryParamsResponse",
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
function createBaseQueryGetSuperNodeRequest(): QueryGetSuperNodeRequest {
  return {
    validatorAddress: ""
  };
}
/**
 * QueryGetSuperNodeRequest is request type for the Query/GetSuperNode RPC method.
 * @name QueryGetSuperNodeRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeRequest
 */
export const QueryGetSuperNodeRequest = {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeRequest",
  is(o: any): o is QueryGetSuperNodeRequest {
    return o && (o.$typeUrl === QueryGetSuperNodeRequest.typeUrl || typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QueryGetSuperNodeRequestAmino {
    return o && (o.$typeUrl === QueryGetSuperNodeRequest.typeUrl || typeof o.validatorAddress === "string");
  },
  encode(message: QueryGetSuperNodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSuperNodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSuperNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSuperNodeRequest>): QueryGetSuperNodeRequest {
    const message = createBaseQueryGetSuperNodeRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetSuperNodeRequestAmino): QueryGetSuperNodeRequest {
    const message = createBaseQueryGetSuperNodeRequest();
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    }
    return message;
  },
  toAmino(message: QueryGetSuperNodeRequest): QueryGetSuperNodeRequestAmino {
    const obj: any = {};
    obj.validatorAddress = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetSuperNodeRequestAminoMsg): QueryGetSuperNodeRequest {
    return QueryGetSuperNodeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSuperNodeRequestProtoMsg): QueryGetSuperNodeRequest {
    return QueryGetSuperNodeRequest.decode(message.value);
  },
  toProto(message: QueryGetSuperNodeRequest): Uint8Array {
    return QueryGetSuperNodeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSuperNodeRequest): QueryGetSuperNodeRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeRequest",
      value: QueryGetSuperNodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGetSuperNodeResponse(): QueryGetSuperNodeResponse {
  return {
    supernode: undefined
  };
}
/**
 * QueryGetSuperNodeResponse is response type for the Query/GetSuperNode RPC method.
 * @name QueryGetSuperNodeResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeResponse
 */
export const QueryGetSuperNodeResponse = {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeResponse",
  is(o: any): o is QueryGetSuperNodeResponse {
    return o && o.$typeUrl === QueryGetSuperNodeResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGetSuperNodeResponseAmino {
    return o && o.$typeUrl === QueryGetSuperNodeResponse.typeUrl;
  },
  encode(message: QueryGetSuperNodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernode !== undefined) {
      SuperNode.encode(message.supernode, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSuperNodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSuperNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernode = SuperNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSuperNodeResponse>): QueryGetSuperNodeResponse {
    const message = createBaseQueryGetSuperNodeResponse();
    message.supernode = object.supernode !== undefined && object.supernode !== null ? SuperNode.fromPartial(object.supernode) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSuperNodeResponseAmino): QueryGetSuperNodeResponse {
    const message = createBaseQueryGetSuperNodeResponse();
    if (object.supernode !== undefined && object.supernode !== null) {
      message.supernode = SuperNode.fromAmino(object.supernode);
    }
    return message;
  },
  toAmino(message: QueryGetSuperNodeResponse): QueryGetSuperNodeResponseAmino {
    const obj: any = {};
    obj.supernode = message.supernode ? SuperNode.toAmino(message.supernode) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSuperNodeResponseAminoMsg): QueryGetSuperNodeResponse {
    return QueryGetSuperNodeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSuperNodeResponseProtoMsg): QueryGetSuperNodeResponse {
    return QueryGetSuperNodeResponse.decode(message.value);
  },
  toProto(message: QueryGetSuperNodeResponse): Uint8Array {
    return QueryGetSuperNodeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSuperNodeResponse): QueryGetSuperNodeResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeResponse",
      value: QueryGetSuperNodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGetSuperNodeResponse.typeUrl)) {
      return;
    }
    SuperNode.registerTypeUrl();
  }
};
function createBaseQueryGetSuperNodeBySuperNodeAddressRequest(): QueryGetSuperNodeBySuperNodeAddressRequest {
  return {
    supernodeAddress: ""
  };
}
/**
 * QueryGetSuperNodeBySuperNodeAddressRequest is request type for the Query/GetSuperNodeBySuperNodeAddress RPC method.
 * @name QueryGetSuperNodeBySuperNodeAddressRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest
 */
export const QueryGetSuperNodeBySuperNodeAddressRequest = {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest",
  is(o: any): o is QueryGetSuperNodeBySuperNodeAddressRequest {
    return o && (o.$typeUrl === QueryGetSuperNodeBySuperNodeAddressRequest.typeUrl || typeof o.supernodeAddress === "string");
  },
  isAmino(o: any): o is QueryGetSuperNodeBySuperNodeAddressRequestAmino {
    return o && (o.$typeUrl === QueryGetSuperNodeBySuperNodeAddressRequest.typeUrl || typeof o.supernodeAddress === "string");
  },
  encode(message: QueryGetSuperNodeBySuperNodeAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernodeAddress !== "") {
      writer.uint32(10).string(message.supernodeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSuperNodeBySuperNodeAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSuperNodeBySuperNodeAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSuperNodeBySuperNodeAddressRequest>): QueryGetSuperNodeBySuperNodeAddressRequest {
    const message = createBaseQueryGetSuperNodeBySuperNodeAddressRequest();
    message.supernodeAddress = object.supernodeAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetSuperNodeBySuperNodeAddressRequestAmino): QueryGetSuperNodeBySuperNodeAddressRequest {
    const message = createBaseQueryGetSuperNodeBySuperNodeAddressRequest();
    if (object.supernodeAddress !== undefined && object.supernodeAddress !== null) {
      message.supernodeAddress = object.supernodeAddress;
    }
    return message;
  },
  toAmino(message: QueryGetSuperNodeBySuperNodeAddressRequest): QueryGetSuperNodeBySuperNodeAddressRequestAmino {
    const obj: any = {};
    obj.supernodeAddress = message.supernodeAddress === "" ? undefined : message.supernodeAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetSuperNodeBySuperNodeAddressRequestAminoMsg): QueryGetSuperNodeBySuperNodeAddressRequest {
    return QueryGetSuperNodeBySuperNodeAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSuperNodeBySuperNodeAddressRequestProtoMsg): QueryGetSuperNodeBySuperNodeAddressRequest {
    return QueryGetSuperNodeBySuperNodeAddressRequest.decode(message.value);
  },
  toProto(message: QueryGetSuperNodeBySuperNodeAddressRequest): Uint8Array {
    return QueryGetSuperNodeBySuperNodeAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSuperNodeBySuperNodeAddressRequest): QueryGetSuperNodeBySuperNodeAddressRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressRequest",
      value: QueryGetSuperNodeBySuperNodeAddressRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGetSuperNodeBySuperNodeAddressResponse(): QueryGetSuperNodeBySuperNodeAddressResponse {
  return {
    supernode: undefined
  };
}
/**
 * QueryGetSuperNodeBySuperNodeAddressResponse is response type for the Query/GetSuperNodeBySuperNodeAddress RPC method.
 * @name QueryGetSuperNodeBySuperNodeAddressResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse
 */
export const QueryGetSuperNodeBySuperNodeAddressResponse = {
  typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse",
  is(o: any): o is QueryGetSuperNodeBySuperNodeAddressResponse {
    return o && o.$typeUrl === QueryGetSuperNodeBySuperNodeAddressResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGetSuperNodeBySuperNodeAddressResponseAmino {
    return o && o.$typeUrl === QueryGetSuperNodeBySuperNodeAddressResponse.typeUrl;
  },
  encode(message: QueryGetSuperNodeBySuperNodeAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.supernode !== undefined) {
      SuperNode.encode(message.supernode, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetSuperNodeBySuperNodeAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSuperNodeBySuperNodeAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernode = SuperNode.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetSuperNodeBySuperNodeAddressResponse>): QueryGetSuperNodeBySuperNodeAddressResponse {
    const message = createBaseQueryGetSuperNodeBySuperNodeAddressResponse();
    message.supernode = object.supernode !== undefined && object.supernode !== null ? SuperNode.fromPartial(object.supernode) : undefined;
    return message;
  },
  fromAmino(object: QueryGetSuperNodeBySuperNodeAddressResponseAmino): QueryGetSuperNodeBySuperNodeAddressResponse {
    const message = createBaseQueryGetSuperNodeBySuperNodeAddressResponse();
    if (object.supernode !== undefined && object.supernode !== null) {
      message.supernode = SuperNode.fromAmino(object.supernode);
    }
    return message;
  },
  toAmino(message: QueryGetSuperNodeBySuperNodeAddressResponse): QueryGetSuperNodeBySuperNodeAddressResponseAmino {
    const obj: any = {};
    obj.supernode = message.supernode ? SuperNode.toAmino(message.supernode) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetSuperNodeBySuperNodeAddressResponseAminoMsg): QueryGetSuperNodeBySuperNodeAddressResponse {
    return QueryGetSuperNodeBySuperNodeAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetSuperNodeBySuperNodeAddressResponseProtoMsg): QueryGetSuperNodeBySuperNodeAddressResponse {
    return QueryGetSuperNodeBySuperNodeAddressResponse.decode(message.value);
  },
  toProto(message: QueryGetSuperNodeBySuperNodeAddressResponse): Uint8Array {
    return QueryGetSuperNodeBySuperNodeAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetSuperNodeBySuperNodeAddressResponse): QueryGetSuperNodeBySuperNodeAddressResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetSuperNodeBySuperNodeAddressResponse",
      value: QueryGetSuperNodeBySuperNodeAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGetSuperNodeBySuperNodeAddressResponse.typeUrl)) {
      return;
    }
    SuperNode.registerTypeUrl();
  }
};
function createBaseQueryListSuperNodesRequest(): QueryListSuperNodesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryListSuperNodesRequest is request type for the Query/ListSuperNodes RPC method.
 * @name QueryListSuperNodesRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryListSuperNodesRequest
 */
export const QueryListSuperNodesRequest = {
  typeUrl: "/lumera.supernode.v1.QueryListSuperNodesRequest",
  is(o: any): o is QueryListSuperNodesRequest {
    return o && o.$typeUrl === QueryListSuperNodesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryListSuperNodesRequestAmino {
    return o && o.$typeUrl === QueryListSuperNodesRequest.typeUrl;
  },
  encode(message: QueryListSuperNodesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListSuperNodesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListSuperNodesRequest();
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
  fromPartial(object: DeepPartial<QueryListSuperNodesRequest>): QueryListSuperNodesRequest {
    const message = createBaseQueryListSuperNodesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListSuperNodesRequestAmino): QueryListSuperNodesRequest {
    const message = createBaseQueryListSuperNodesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListSuperNodesRequest): QueryListSuperNodesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListSuperNodesRequestAminoMsg): QueryListSuperNodesRequest {
    return QueryListSuperNodesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListSuperNodesRequestProtoMsg): QueryListSuperNodesRequest {
    return QueryListSuperNodesRequest.decode(message.value);
  },
  toProto(message: QueryListSuperNodesRequest): Uint8Array {
    return QueryListSuperNodesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryListSuperNodesRequest): QueryListSuperNodesRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryListSuperNodesRequest",
      value: QueryListSuperNodesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryListSuperNodesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryListSuperNodesResponse(): QueryListSuperNodesResponse {
  return {
    supernodes: [],
    pagination: undefined
  };
}
/**
 * QueryListSuperNodesResponse is response type for the Query/ListSuperNodes RPC method.
 * @name QueryListSuperNodesResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryListSuperNodesResponse
 */
export const QueryListSuperNodesResponse = {
  typeUrl: "/lumera.supernode.v1.QueryListSuperNodesResponse",
  is(o: any): o is QueryListSuperNodesResponse {
    return o && (o.$typeUrl === QueryListSuperNodesResponse.typeUrl || Array.isArray(o.supernodes) && (!o.supernodes.length || SuperNode.is(o.supernodes[0])));
  },
  isAmino(o: any): o is QueryListSuperNodesResponseAmino {
    return o && (o.$typeUrl === QueryListSuperNodesResponse.typeUrl || Array.isArray(o.supernodes) && (!o.supernodes.length || SuperNode.isAmino(o.supernodes[0])));
  },
  encode(message: QueryListSuperNodesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supernodes) {
      SuperNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryListSuperNodesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListSuperNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodes.push(SuperNode.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryListSuperNodesResponse>): QueryListSuperNodesResponse {
    const message = createBaseQueryListSuperNodesResponse();
    message.supernodes = object.supernodes?.map(e => SuperNode.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryListSuperNodesResponseAmino): QueryListSuperNodesResponse {
    const message = createBaseQueryListSuperNodesResponse();
    message.supernodes = object.supernodes?.map(e => SuperNode.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryListSuperNodesResponse): QueryListSuperNodesResponseAmino {
    const obj: any = {};
    if (message.supernodes) {
      obj.supernodes = message.supernodes.map(e => e ? SuperNode.toAmino(e) : undefined);
    } else {
      obj.supernodes = message.supernodes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryListSuperNodesResponseAminoMsg): QueryListSuperNodesResponse {
    return QueryListSuperNodesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryListSuperNodesResponseProtoMsg): QueryListSuperNodesResponse {
    return QueryListSuperNodesResponse.decode(message.value);
  },
  toProto(message: QueryListSuperNodesResponse): Uint8Array {
    return QueryListSuperNodesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryListSuperNodesResponse): QueryListSuperNodesResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryListSuperNodesResponse",
      value: QueryListSuperNodesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryListSuperNodesResponse.typeUrl)) {
      return;
    }
    SuperNode.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryGetTopSuperNodesForBlockRequest(): QueryGetTopSuperNodesForBlockRequest {
  return {
    blockHeight: 0,
    limit: 0,
    state: ""
  };
}
/**
 * QueryGetTopSuperNodesForBlockRequest is request type for the Query/GetTopSuperNodesForBlock RPC method.
 * @name QueryGetTopSuperNodesForBlockRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest
 */
export const QueryGetTopSuperNodesForBlockRequest = {
  typeUrl: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest",
  is(o: any): o is QueryGetTopSuperNodesForBlockRequest {
    return o && (o.$typeUrl === QueryGetTopSuperNodesForBlockRequest.typeUrl || typeof o.blockHeight === "number" && typeof o.limit === "number" && typeof o.state === "string");
  },
  isAmino(o: any): o is QueryGetTopSuperNodesForBlockRequestAmino {
    return o && (o.$typeUrl === QueryGetTopSuperNodesForBlockRequest.typeUrl || typeof o.blockHeight === "number" && typeof o.limit === "number" && typeof o.state === "string");
  },
  encode(message: QueryGetTopSuperNodesForBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== 0) {
      writer.uint32(8).int32(message.blockHeight);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTopSuperNodesForBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTopSuperNodesForBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int32();
          break;
        case 2:
          message.limit = reader.int32();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTopSuperNodesForBlockRequest>): QueryGetTopSuperNodesForBlockRequest {
    const message = createBaseQueryGetTopSuperNodesForBlockRequest();
    message.blockHeight = object.blockHeight ?? 0;
    message.limit = object.limit ?? 0;
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: QueryGetTopSuperNodesForBlockRequestAmino): QueryGetTopSuperNodesForBlockRequest {
    const message = createBaseQueryGetTopSuperNodesForBlockRequest();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: QueryGetTopSuperNodesForBlockRequest): QueryGetTopSuperNodesForBlockRequestAmino {
    const obj: any = {};
    obj.blockHeight = message.blockHeight === 0 ? undefined : message.blockHeight;
    obj.limit = message.limit === 0 ? undefined : message.limit;
    obj.state = message.state === "" ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: QueryGetTopSuperNodesForBlockRequestAminoMsg): QueryGetTopSuperNodesForBlockRequest {
    return QueryGetTopSuperNodesForBlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTopSuperNodesForBlockRequestProtoMsg): QueryGetTopSuperNodesForBlockRequest {
    return QueryGetTopSuperNodesForBlockRequest.decode(message.value);
  },
  toProto(message: QueryGetTopSuperNodesForBlockRequest): Uint8Array {
    return QueryGetTopSuperNodesForBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTopSuperNodesForBlockRequest): QueryGetTopSuperNodesForBlockRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockRequest",
      value: QueryGetTopSuperNodesForBlockRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGetTopSuperNodesForBlockResponse(): QueryGetTopSuperNodesForBlockResponse {
  return {
    supernodes: []
  };
}
/**
 * QueryGetTopSuperNodesForBlockResponse is response type for the Query/GetTopSuperNodesForBlock RPC method.
 * @name QueryGetTopSuperNodesForBlockResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse
 */
export const QueryGetTopSuperNodesForBlockResponse = {
  typeUrl: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse",
  is(o: any): o is QueryGetTopSuperNodesForBlockResponse {
    return o && (o.$typeUrl === QueryGetTopSuperNodesForBlockResponse.typeUrl || Array.isArray(o.supernodes) && (!o.supernodes.length || SuperNode.is(o.supernodes[0])));
  },
  isAmino(o: any): o is QueryGetTopSuperNodesForBlockResponseAmino {
    return o && (o.$typeUrl === QueryGetTopSuperNodesForBlockResponse.typeUrl || Array.isArray(o.supernodes) && (!o.supernodes.length || SuperNode.isAmino(o.supernodes[0])));
  },
  encode(message: QueryGetTopSuperNodesForBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supernodes) {
      SuperNode.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTopSuperNodesForBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTopSuperNodesForBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supernodes.push(SuperNode.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTopSuperNodesForBlockResponse>): QueryGetTopSuperNodesForBlockResponse {
    const message = createBaseQueryGetTopSuperNodesForBlockResponse();
    message.supernodes = object.supernodes?.map(e => SuperNode.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetTopSuperNodesForBlockResponseAmino): QueryGetTopSuperNodesForBlockResponse {
    const message = createBaseQueryGetTopSuperNodesForBlockResponse();
    message.supernodes = object.supernodes?.map(e => SuperNode.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryGetTopSuperNodesForBlockResponse): QueryGetTopSuperNodesForBlockResponseAmino {
    const obj: any = {};
    if (message.supernodes) {
      obj.supernodes = message.supernodes.map(e => e ? SuperNode.toAmino(e) : undefined);
    } else {
      obj.supernodes = message.supernodes;
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetTopSuperNodesForBlockResponseAminoMsg): QueryGetTopSuperNodesForBlockResponse {
    return QueryGetTopSuperNodesForBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTopSuperNodesForBlockResponseProtoMsg): QueryGetTopSuperNodesForBlockResponse {
    return QueryGetTopSuperNodesForBlockResponse.decode(message.value);
  },
  toProto(message: QueryGetTopSuperNodesForBlockResponse): Uint8Array {
    return QueryGetTopSuperNodesForBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTopSuperNodesForBlockResponse): QueryGetTopSuperNodesForBlockResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetTopSuperNodesForBlockResponse",
      value: QueryGetTopSuperNodesForBlockResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGetTopSuperNodesForBlockResponse.typeUrl)) {
      return;
    }
    SuperNode.registerTypeUrl();
  }
};
function createBaseQueryGetMetricsRequest(): QueryGetMetricsRequest {
  return {
    validatorAddress: ""
  };
}
/**
 * QueryGetMetricsRequest is request type for the Query/GetMetrics RPC method.
 * @name QueryGetMetricsRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetMetricsRequest
 */
export const QueryGetMetricsRequest = {
  typeUrl: "/lumera.supernode.v1.QueryGetMetricsRequest",
  is(o: any): o is QueryGetMetricsRequest {
    return o && (o.$typeUrl === QueryGetMetricsRequest.typeUrl || typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QueryGetMetricsRequestAmino {
    return o && (o.$typeUrl === QueryGetMetricsRequest.typeUrl || typeof o.validatorAddress === "string");
  },
  encode(message: QueryGetMetricsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMetricsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMetricsRequest>): QueryGetMetricsRequest {
    const message = createBaseQueryGetMetricsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGetMetricsRequestAmino): QueryGetMetricsRequest {
    const message = createBaseQueryGetMetricsRequest();
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    }
    return message;
  },
  toAmino(message: QueryGetMetricsRequest): QueryGetMetricsRequestAmino {
    const obj: any = {};
    obj.validatorAddress = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGetMetricsRequestAminoMsg): QueryGetMetricsRequest {
    return QueryGetMetricsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMetricsRequestProtoMsg): QueryGetMetricsRequest {
    return QueryGetMetricsRequest.decode(message.value);
  },
  toProto(message: QueryGetMetricsRequest): Uint8Array {
    return QueryGetMetricsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMetricsRequest): QueryGetMetricsRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetMetricsRequest",
      value: QueryGetMetricsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGetMetricsResponse(): QueryGetMetricsResponse {
  return {
    metricsState: undefined
  };
}
/**
 * QueryGetMetricsResponse is response type for the Query/GetMetrics RPC method.
 * @name QueryGetMetricsResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryGetMetricsResponse
 */
export const QueryGetMetricsResponse = {
  typeUrl: "/lumera.supernode.v1.QueryGetMetricsResponse",
  is(o: any): o is QueryGetMetricsResponse {
    return o && o.$typeUrl === QueryGetMetricsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGetMetricsResponseAmino {
    return o && o.$typeUrl === QueryGetMetricsResponse.typeUrl;
  },
  encode(message: QueryGetMetricsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metricsState !== undefined) {
      SupernodeMetricsState.encode(message.metricsState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMetricsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metricsState = SupernodeMetricsState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMetricsResponse>): QueryGetMetricsResponse {
    const message = createBaseQueryGetMetricsResponse();
    message.metricsState = object.metricsState !== undefined && object.metricsState !== null ? SupernodeMetricsState.fromPartial(object.metricsState) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMetricsResponseAmino): QueryGetMetricsResponse {
    const message = createBaseQueryGetMetricsResponse();
    if (object.metrics_state !== undefined && object.metrics_state !== null) {
      message.metricsState = SupernodeMetricsState.fromAmino(object.metrics_state);
    }
    return message;
  },
  toAmino(message: QueryGetMetricsResponse): QueryGetMetricsResponseAmino {
    const obj: any = {};
    obj.metrics_state = message.metricsState ? SupernodeMetricsState.toAmino(message.metricsState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMetricsResponseAminoMsg): QueryGetMetricsResponse {
    return QueryGetMetricsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMetricsResponseProtoMsg): QueryGetMetricsResponse {
    return QueryGetMetricsResponse.decode(message.value);
  },
  toProto(message: QueryGetMetricsResponse): Uint8Array {
    return QueryGetMetricsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMetricsResponse): QueryGetMetricsResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryGetMetricsResponse",
      value: QueryGetMetricsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryGetMetricsResponse.typeUrl)) {
      return;
    }
    SupernodeMetricsState.registerTypeUrl();
  }
};
function createBaseQueryPoolStateRequest(): QueryPoolStateRequest {
  return {};
}
/**
 * QueryPoolStateRequest is request type for the Query/PoolState RPC method.
 * @name QueryPoolStateRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPoolStateRequest
 */
export const QueryPoolStateRequest = {
  typeUrl: "/lumera.supernode.v1.QueryPoolStateRequest",
  is(o: any): o is QueryPoolStateRequest {
    return o && o.$typeUrl === QueryPoolStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPoolStateRequestAmino {
    return o && o.$typeUrl === QueryPoolStateRequest.typeUrl;
  },
  encode(_: QueryPoolStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolStateRequest();
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
  fromPartial(_: DeepPartial<QueryPoolStateRequest>): QueryPoolStateRequest {
    const message = createBaseQueryPoolStateRequest();
    return message;
  },
  fromAmino(_: QueryPoolStateRequestAmino): QueryPoolStateRequest {
    const message = createBaseQueryPoolStateRequest();
    return message;
  },
  toAmino(_: QueryPoolStateRequest): QueryPoolStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPoolStateRequestAminoMsg): QueryPoolStateRequest {
    return QueryPoolStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolStateRequestProtoMsg): QueryPoolStateRequest {
    return QueryPoolStateRequest.decode(message.value);
  },
  toProto(message: QueryPoolStateRequest): Uint8Array {
    return QueryPoolStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolStateRequest): QueryPoolStateRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryPoolStateRequest",
      value: QueryPoolStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPoolStateResponse(): QueryPoolStateResponse {
  return {
    balance: [],
    lastDistributionHeight: BigInt(0),
    totalDistributed: [],
    eligibleSnCount: BigInt(0)
  };
}
/**
 * QueryPoolStateResponse is response type for the Query/PoolState RPC method.
 * @name QueryPoolStateResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPoolStateResponse
 */
export const QueryPoolStateResponse = {
  typeUrl: "/lumera.supernode.v1.QueryPoolStateResponse",
  is(o: any): o is QueryPoolStateResponse {
    return o && (o.$typeUrl === QueryPoolStateResponse.typeUrl || Array.isArray(o.balance) && (!o.balance.length || Coin.is(o.balance[0])) && typeof o.lastDistributionHeight === "bigint" && Array.isArray(o.totalDistributed) && (!o.totalDistributed.length || Coin.is(o.totalDistributed[0])) && typeof o.eligibleSnCount === "bigint");
  },
  isAmino(o: any): o is QueryPoolStateResponseAmino {
    return o && (o.$typeUrl === QueryPoolStateResponse.typeUrl || Array.isArray(o.balance) && (!o.balance.length || Coin.isAmino(o.balance[0])) && typeof o.last_distribution_height === "bigint" && Array.isArray(o.total_distributed) && (!o.total_distributed.length || Coin.isAmino(o.total_distributed[0])) && typeof o.eligible_sn_count === "bigint");
  },
  encode(message: QueryPoolStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastDistributionHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.lastDistributionHeight);
    }
    for (const v of message.totalDistributed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.eligibleSnCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.eligibleSnCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastDistributionHeight = reader.int64();
          break;
        case 3:
          message.totalDistributed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.eligibleSnCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPoolStateResponse>): QueryPoolStateResponse {
    const message = createBaseQueryPoolStateResponse();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    message.lastDistributionHeight = object.lastDistributionHeight !== undefined && object.lastDistributionHeight !== null ? BigInt(object.lastDistributionHeight.toString()) : BigInt(0);
    message.totalDistributed = object.totalDistributed?.map(e => Coin.fromPartial(e)) || [];
    message.eligibleSnCount = object.eligibleSnCount !== undefined && object.eligibleSnCount !== null ? BigInt(object.eligibleSnCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPoolStateResponseAmino): QueryPoolStateResponse {
    const message = createBaseQueryPoolStateResponse();
    message.balance = object.balance?.map(e => Coin.fromAmino(e)) || [];
    if (object.last_distribution_height !== undefined && object.last_distribution_height !== null) {
      message.lastDistributionHeight = BigInt(object.last_distribution_height);
    }
    message.totalDistributed = object.total_distributed?.map(e => Coin.fromAmino(e)) || [];
    if (object.eligible_sn_count !== undefined && object.eligible_sn_count !== null) {
      message.eligibleSnCount = BigInt(object.eligible_sn_count);
    }
    return message;
  },
  toAmino(message: QueryPoolStateResponse): QueryPoolStateResponseAmino {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = message.balance;
    }
    obj.last_distribution_height = message.lastDistributionHeight !== BigInt(0) ? message.lastDistributionHeight?.toString() : undefined;
    if (message.totalDistributed) {
      obj.total_distributed = message.totalDistributed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_distributed = message.totalDistributed;
    }
    obj.eligible_sn_count = message.eligibleSnCount !== BigInt(0) ? message.eligibleSnCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolStateResponseAminoMsg): QueryPoolStateResponse {
    return QueryPoolStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolStateResponseProtoMsg): QueryPoolStateResponse {
    return QueryPoolStateResponse.decode(message.value);
  },
  toProto(message: QueryPoolStateResponse): Uint8Array {
    return QueryPoolStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolStateResponse): QueryPoolStateResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryPoolStateResponse",
      value: QueryPoolStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPoolStateResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQuerySNEligibilityRequest(): QuerySNEligibilityRequest {
  return {
    validatorAddress: ""
  };
}
/**
 * QuerySNEligibilityRequest is request type for the Query/SNEligibility RPC method.
 * @name QuerySNEligibilityRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QuerySNEligibilityRequest
 */
export const QuerySNEligibilityRequest = {
  typeUrl: "/lumera.supernode.v1.QuerySNEligibilityRequest",
  is(o: any): o is QuerySNEligibilityRequest {
    return o && (o.$typeUrl === QuerySNEligibilityRequest.typeUrl || typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QuerySNEligibilityRequestAmino {
    return o && (o.$typeUrl === QuerySNEligibilityRequest.typeUrl || typeof o.validator_address === "string");
  },
  encode(message: QuerySNEligibilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySNEligibilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySNEligibilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySNEligibilityRequest>): QuerySNEligibilityRequest {
    const message = createBaseQuerySNEligibilityRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QuerySNEligibilityRequestAmino): QuerySNEligibilityRequest {
    const message = createBaseQuerySNEligibilityRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QuerySNEligibilityRequest): QuerySNEligibilityRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QuerySNEligibilityRequestAminoMsg): QuerySNEligibilityRequest {
    return QuerySNEligibilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySNEligibilityRequestProtoMsg): QuerySNEligibilityRequest {
    return QuerySNEligibilityRequest.decode(message.value);
  },
  toProto(message: QuerySNEligibilityRequest): Uint8Array {
    return QuerySNEligibilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySNEligibilityRequest): QuerySNEligibilityRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QuerySNEligibilityRequest",
      value: QuerySNEligibilityRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySNEligibilityResponse(): QuerySNEligibilityResponse {
  return {
    eligible: false,
    reason: "",
    cascadeKademliaDbBytes: 0,
    smoothedWeight: 0
  };
}
/**
 * QuerySNEligibilityResponse is response type for the Query/SNEligibility RPC method.
 * @name QuerySNEligibilityResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QuerySNEligibilityResponse
 */
export const QuerySNEligibilityResponse = {
  typeUrl: "/lumera.supernode.v1.QuerySNEligibilityResponse",
  is(o: any): o is QuerySNEligibilityResponse {
    return o && (o.$typeUrl === QuerySNEligibilityResponse.typeUrl || typeof o.eligible === "boolean" && typeof o.reason === "string" && typeof o.cascadeKademliaDbBytes === "number" && typeof o.smoothedWeight === "number");
  },
  isAmino(o: any): o is QuerySNEligibilityResponseAmino {
    return o && (o.$typeUrl === QuerySNEligibilityResponse.typeUrl || typeof o.eligible === "boolean" && typeof o.reason === "string" && typeof o.cascade_kademlia_db_bytes === "number" && typeof o.smoothed_weight === "number");
  },
  encode(message: QuerySNEligibilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.eligible === true) {
      writer.uint32(8).bool(message.eligible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.cascadeKademliaDbBytes !== 0) {
      writer.uint32(25).double(message.cascadeKademliaDbBytes);
    }
    if (message.smoothedWeight !== 0) {
      writer.uint32(33).double(message.smoothedWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySNEligibilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySNEligibilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eligible = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        case 3:
          message.cascadeKademliaDbBytes = reader.double();
          break;
        case 4:
          message.smoothedWeight = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySNEligibilityResponse>): QuerySNEligibilityResponse {
    const message = createBaseQuerySNEligibilityResponse();
    message.eligible = object.eligible ?? false;
    message.reason = object.reason ?? "";
    message.cascadeKademliaDbBytes = object.cascadeKademliaDbBytes ?? 0;
    message.smoothedWeight = object.smoothedWeight ?? 0;
    return message;
  },
  fromAmino(object: QuerySNEligibilityResponseAmino): QuerySNEligibilityResponse {
    const message = createBaseQuerySNEligibilityResponse();
    if (object.eligible !== undefined && object.eligible !== null) {
      message.eligible = object.eligible;
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.cascade_kademlia_db_bytes !== undefined && object.cascade_kademlia_db_bytes !== null) {
      message.cascadeKademliaDbBytes = object.cascade_kademlia_db_bytes;
    }
    if (object.smoothed_weight !== undefined && object.smoothed_weight !== null) {
      message.smoothedWeight = object.smoothed_weight;
    }
    return message;
  },
  toAmino(message: QuerySNEligibilityResponse): QuerySNEligibilityResponseAmino {
    const obj: any = {};
    obj.eligible = message.eligible === false ? undefined : message.eligible;
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.cascade_kademlia_db_bytes = message.cascadeKademliaDbBytes === 0 ? undefined : message.cascadeKademliaDbBytes;
    obj.smoothed_weight = message.smoothedWeight === 0 ? undefined : message.smoothedWeight;
    return obj;
  },
  fromAminoMsg(object: QuerySNEligibilityResponseAminoMsg): QuerySNEligibilityResponse {
    return QuerySNEligibilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySNEligibilityResponseProtoMsg): QuerySNEligibilityResponse {
    return QuerySNEligibilityResponse.decode(message.value);
  },
  toProto(message: QuerySNEligibilityResponse): Uint8Array {
    return QuerySNEligibilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySNEligibilityResponse): QuerySNEligibilityResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QuerySNEligibilityResponse",
      value: QuerySNEligibilityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePayoutHistoryEntry(): PayoutHistoryEntry {
  return {
    height: BigInt(0),
    validatorAddress: "",
    supernodeAccount: "",
    amount: [],
    rawBytes: 0,
    smoothedBytes: 0,
    effectiveWeight: 0,
    rampWeight: 0
  };
}
/**
 * @name PayoutHistoryEntry
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.PayoutHistoryEntry
 */
export const PayoutHistoryEntry = {
  typeUrl: "/lumera.supernode.v1.PayoutHistoryEntry",
  is(o: any): o is PayoutHistoryEntry {
    return o && (o.$typeUrl === PayoutHistoryEntry.typeUrl || typeof o.height === "bigint" && typeof o.validatorAddress === "string" && typeof o.supernodeAccount === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.rawBytes === "number" && typeof o.smoothedBytes === "number" && typeof o.effectiveWeight === "number" && typeof o.rampWeight === "number");
  },
  isAmino(o: any): o is PayoutHistoryEntryAmino {
    return o && (o.$typeUrl === PayoutHistoryEntry.typeUrl || typeof o.height === "bigint" && typeof o.validator_address === "string" && typeof o.supernode_account === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.raw_bytes === "number" && typeof o.smoothed_bytes === "number" && typeof o.effective_weight === "number" && typeof o.ramp_weight === "number");
  },
  encode(message: PayoutHistoryEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.supernodeAccount !== "") {
      writer.uint32(26).string(message.supernodeAccount);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rawBytes !== 0) {
      writer.uint32(41).double(message.rawBytes);
    }
    if (message.smoothedBytes !== 0) {
      writer.uint32(49).double(message.smoothedBytes);
    }
    if (message.effectiveWeight !== 0) {
      writer.uint32(57).double(message.effectiveWeight);
    }
    if (message.rampWeight !== 0) {
      writer.uint32(65).double(message.rampWeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PayoutHistoryEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayoutHistoryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.supernodeAccount = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rawBytes = reader.double();
          break;
        case 6:
          message.smoothedBytes = reader.double();
          break;
        case 7:
          message.effectiveWeight = reader.double();
          break;
        case 8:
          message.rampWeight = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PayoutHistoryEntry>): PayoutHistoryEntry {
    const message = createBasePayoutHistoryEntry();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.validatorAddress = object.validatorAddress ?? "";
    message.supernodeAccount = object.supernodeAccount ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.rawBytes = object.rawBytes ?? 0;
    message.smoothedBytes = object.smoothedBytes ?? 0;
    message.effectiveWeight = object.effectiveWeight ?? 0;
    message.rampWeight = object.rampWeight ?? 0;
    return message;
  },
  fromAmino(object: PayoutHistoryEntryAmino): PayoutHistoryEntry {
    const message = createBasePayoutHistoryEntry();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.supernode_account !== undefined && object.supernode_account !== null) {
      message.supernodeAccount = object.supernode_account;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.raw_bytes !== undefined && object.raw_bytes !== null) {
      message.rawBytes = object.raw_bytes;
    }
    if (object.smoothed_bytes !== undefined && object.smoothed_bytes !== null) {
      message.smoothedBytes = object.smoothed_bytes;
    }
    if (object.effective_weight !== undefined && object.effective_weight !== null) {
      message.effectiveWeight = object.effective_weight;
    }
    if (object.ramp_weight !== undefined && object.ramp_weight !== null) {
      message.rampWeight = object.ramp_weight;
    }
    return message;
  },
  toAmino(message: PayoutHistoryEntry): PayoutHistoryEntryAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.supernode_account = message.supernodeAccount === "" ? undefined : message.supernodeAccount;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.raw_bytes = message.rawBytes === 0 ? undefined : message.rawBytes;
    obj.smoothed_bytes = message.smoothedBytes === 0 ? undefined : message.smoothedBytes;
    obj.effective_weight = message.effectiveWeight === 0 ? undefined : message.effectiveWeight;
    obj.ramp_weight = message.rampWeight === 0 ? undefined : message.rampWeight;
    return obj;
  },
  fromAminoMsg(object: PayoutHistoryEntryAminoMsg): PayoutHistoryEntry {
    return PayoutHistoryEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: PayoutHistoryEntryProtoMsg): PayoutHistoryEntry {
    return PayoutHistoryEntry.decode(message.value);
  },
  toProto(message: PayoutHistoryEntry): Uint8Array {
    return PayoutHistoryEntry.encode(message).finish();
  },
  toProtoMsg(message: PayoutHistoryEntry): PayoutHistoryEntryProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.PayoutHistoryEntry",
      value: PayoutHistoryEntry.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(PayoutHistoryEntry.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryPayoutHistoryRequest(): QueryPayoutHistoryRequest {
  return {
    validatorAddress: "",
    pagination: undefined
  };
}
/**
 * @name QueryPayoutHistoryRequest
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPayoutHistoryRequest
 */
export const QueryPayoutHistoryRequest = {
  typeUrl: "/lumera.supernode.v1.QueryPayoutHistoryRequest",
  is(o: any): o is QueryPayoutHistoryRequest {
    return o && (o.$typeUrl === QueryPayoutHistoryRequest.typeUrl || typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QueryPayoutHistoryRequestAmino {
    return o && (o.$typeUrl === QueryPayoutHistoryRequest.typeUrl || typeof o.validator_address === "string");
  },
  encode(message: QueryPayoutHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayoutHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
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
  fromPartial(object: DeepPartial<QueryPayoutHistoryRequest>): QueryPayoutHistoryRequest {
    const message = createBaseQueryPayoutHistoryRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutHistoryRequestAmino): QueryPayoutHistoryRequest {
    const message = createBaseQueryPayoutHistoryRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutHistoryRequest): QueryPayoutHistoryRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutHistoryRequestAminoMsg): QueryPayoutHistoryRequest {
    return QueryPayoutHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutHistoryRequestProtoMsg): QueryPayoutHistoryRequest {
    return QueryPayoutHistoryRequest.decode(message.value);
  },
  toProto(message: QueryPayoutHistoryRequest): Uint8Array {
    return QueryPayoutHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutHistoryRequest): QueryPayoutHistoryRequestProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryPayoutHistoryRequest",
      value: QueryPayoutHistoryRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPayoutHistoryRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryPayoutHistoryResponse(): QueryPayoutHistoryResponse {
  return {
    entries: [],
    pagination: undefined
  };
}
/**
 * @name QueryPayoutHistoryResponse
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.QueryPayoutHistoryResponse
 */
export const QueryPayoutHistoryResponse = {
  typeUrl: "/lumera.supernode.v1.QueryPayoutHistoryResponse",
  is(o: any): o is QueryPayoutHistoryResponse {
    return o && (o.$typeUrl === QueryPayoutHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || PayoutHistoryEntry.is(o.entries[0])));
  },
  isAmino(o: any): o is QueryPayoutHistoryResponseAmino {
    return o && (o.$typeUrl === QueryPayoutHistoryResponse.typeUrl || Array.isArray(o.entries) && (!o.entries.length || PayoutHistoryEntry.isAmino(o.entries[0])));
  },
  encode(message: QueryPayoutHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      PayoutHistoryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayoutHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayoutHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(PayoutHistoryEntry.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryPayoutHistoryResponse>): QueryPayoutHistoryResponse {
    const message = createBaseQueryPayoutHistoryResponse();
    message.entries = object.entries?.map(e => PayoutHistoryEntry.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPayoutHistoryResponseAmino): QueryPayoutHistoryResponse {
    const message = createBaseQueryPayoutHistoryResponse();
    message.entries = object.entries?.map(e => PayoutHistoryEntry.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPayoutHistoryResponse): QueryPayoutHistoryResponseAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? PayoutHistoryEntry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPayoutHistoryResponseAminoMsg): QueryPayoutHistoryResponse {
    return QueryPayoutHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPayoutHistoryResponseProtoMsg): QueryPayoutHistoryResponse {
    return QueryPayoutHistoryResponse.decode(message.value);
  },
  toProto(message: QueryPayoutHistoryResponse): Uint8Array {
    return QueryPayoutHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPayoutHistoryResponse): QueryPayoutHistoryResponseProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.QueryPayoutHistoryResponse",
      value: QueryPayoutHistoryResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPayoutHistoryResponse.typeUrl)) {
      return;
    }
    PayoutHistoryEntry.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};