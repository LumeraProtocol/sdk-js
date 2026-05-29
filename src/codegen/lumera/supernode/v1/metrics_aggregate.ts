// @ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name MetricValue
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.MetricValue
 */
export interface MetricValue {
  name: string;
  value: number;
}
export interface MetricValueProtoMsg {
  typeUrl: "/lumera.supernode.v1.MetricValue";
  value: Uint8Array;
}
/**
 * @name MetricValueAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.MetricValue
 */
export interface MetricValueAmino {
  name: string;
  value: number;
}
export interface MetricValueAminoMsg {
  type: "/lumera.supernode.v1.MetricValue";
  value: MetricValueAmino;
}
/**
 * @name MetricsAggregate
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.MetricsAggregate
 */
export interface MetricsAggregate {
  metrics: MetricValue[];
  reportCount: bigint;
  height: bigint;
}
export interface MetricsAggregateProtoMsg {
  typeUrl: "/lumera.supernode.v1.MetricsAggregate";
  value: Uint8Array;
}
/**
 * @name MetricsAggregateAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.MetricsAggregate
 */
export interface MetricsAggregateAmino {
  metrics: MetricValueAmino[];
  report_count: string;
  height: string;
}
export interface MetricsAggregateAminoMsg {
  type: "/lumera.supernode.v1.MetricsAggregate";
  value: MetricsAggregateAmino;
}
function createBaseMetricValue(): MetricValue {
  return {
    name: "",
    value: 0
  };
}
/**
 * @name MetricValue
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.MetricValue
 */
export const MetricValue = {
  typeUrl: "/lumera.supernode.v1.MetricValue",
  is(o: any): o is MetricValue {
    return o && (o.$typeUrl === MetricValue.typeUrl || typeof o.name === "string" && typeof o.value === "number");
  },
  isAmino(o: any): o is MetricValueAmino {
    return o && (o.$typeUrl === MetricValue.typeUrl || typeof o.name === "string" && typeof o.value === "number");
  },
  encode(message: MetricValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetricValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MetricValue>): MetricValue {
    const message = createBaseMetricValue();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
  fromAmino(object: MetricValueAmino): MetricValue {
    const message = createBaseMetricValue();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: MetricValue): MetricValueAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: MetricValueAminoMsg): MetricValue {
    return MetricValue.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricValueProtoMsg): MetricValue {
    return MetricValue.decode(message.value);
  },
  toProto(message: MetricValue): Uint8Array {
    return MetricValue.encode(message).finish();
  },
  toProtoMsg(message: MetricValue): MetricValueProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.MetricValue",
      value: MetricValue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMetricsAggregate(): MetricsAggregate {
  return {
    metrics: [],
    reportCount: BigInt(0),
    height: BigInt(0)
  };
}
/**
 * @name MetricsAggregate
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.MetricsAggregate
 */
export const MetricsAggregate = {
  typeUrl: "/lumera.supernode.v1.MetricsAggregate",
  is(o: any): o is MetricsAggregate {
    return o && (o.$typeUrl === MetricsAggregate.typeUrl || Array.isArray(o.metrics) && (!o.metrics.length || MetricValue.is(o.metrics[0])) && typeof o.reportCount === "bigint" && typeof o.height === "bigint");
  },
  isAmino(o: any): o is MetricsAggregateAmino {
    return o && (o.$typeUrl === MetricsAggregate.typeUrl || Array.isArray(o.metrics) && (!o.metrics.length || MetricValue.isAmino(o.metrics[0])) && typeof o.report_count === "bigint" && typeof o.height === "bigint");
  },
  encode(message: MetricsAggregate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.metrics) {
      MetricValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.reportCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.reportCount);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MetricsAggregate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricsAggregate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(MetricValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.reportCount = reader.uint64();
          break;
        case 3:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MetricsAggregate>): MetricsAggregate {
    const message = createBaseMetricsAggregate();
    message.metrics = object.metrics?.map(e => MetricValue.fromPartial(e)) || [];
    message.reportCount = object.reportCount !== undefined && object.reportCount !== null ? BigInt(object.reportCount.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MetricsAggregateAmino): MetricsAggregate {
    const message = createBaseMetricsAggregate();
    message.metrics = object.metrics?.map(e => MetricValue.fromAmino(e)) || [];
    if (object.report_count !== undefined && object.report_count !== null) {
      message.reportCount = BigInt(object.report_count);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: MetricsAggregate): MetricsAggregateAmino {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e ? MetricValue.toAmino(e) : undefined);
    } else {
      obj.metrics = message.metrics;
    }
    obj.report_count = message.reportCount !== BigInt(0) ? message.reportCount?.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MetricsAggregateAminoMsg): MetricsAggregate {
    return MetricsAggregate.fromAmino(object.value);
  },
  fromProtoMsg(message: MetricsAggregateProtoMsg): MetricsAggregate {
    return MetricsAggregate.decode(message.value);
  },
  toProto(message: MetricsAggregate): Uint8Array {
    return MetricsAggregate.encode(message).finish();
  },
  toProtoMsg(message: MetricsAggregate): MetricsAggregateProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.MetricsAggregate",
      value: MetricsAggregate.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MetricsAggregate.typeUrl)) {
      return;
    }
    MetricValue.registerTypeUrl();
  }
};