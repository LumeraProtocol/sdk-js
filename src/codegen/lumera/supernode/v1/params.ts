// @ts-nocheck
/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * RewardDistribution governs the Everlight reward pool's payout cadence,
 * eligibility floor, ramp-up, smoothing window and growth cap. All fields
 * are governance-mutable via supernode MsgUpdateParams.
 * @name RewardDistribution
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.RewardDistribution
 */
export interface RewardDistribution {
  /**
   * Distribution period in blocks. Pool balance distributed every this many blocks.
   */
  paymentPeriodBlocks: bigint;
  /**
   * Share of action registration fees routed to Everlight pool, in basis points.
   */
  registrationFeeShareBps: bigint;
  /**
   * Minimum cascade_kademlia_db_bytes for a SuperNode to qualify for payouts.
   */
  minCascadeBytesForPayment: bigint;
  /**
   * Number of payment periods for new SuperNode payout ramp-up.
   */
  newSnRampUpPeriods: bigint;
  /**
   * Rolling average window (in payment periods) for weight smoothing.
   */
  measurementSmoothingPeriods: bigint;
  /**
   * Maximum rate of reported cascade bytes increase per period, in basis points.
   */
  usageGrowthCapBpsPerPeriod: bigint;
}
export interface RewardDistributionProtoMsg {
  typeUrl: "/lumera.supernode.v1.RewardDistribution";
  value: Uint8Array;
}
/**
 * RewardDistribution governs the Everlight reward pool's payout cadence,
 * eligibility floor, ramp-up, smoothing window and growth cap. All fields
 * are governance-mutable via supernode MsgUpdateParams.
 * @name RewardDistributionAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.RewardDistribution
 */
export interface RewardDistributionAmino {
  /**
   * Distribution period in blocks. Pool balance distributed every this many blocks.
   */
  payment_period_blocks: string;
  /**
   * Share of action registration fees routed to Everlight pool, in basis points.
   */
  registration_fee_share_bps: string;
  /**
   * Minimum cascade_kademlia_db_bytes for a SuperNode to qualify for payouts.
   */
  min_cascade_bytes_for_payment: string;
  /**
   * Number of payment periods for new SuperNode payout ramp-up.
   */
  new_sn_ramp_up_periods: string;
  /**
   * Rolling average window (in payment periods) for weight smoothing.
   */
  measurement_smoothing_periods: string;
  /**
   * Maximum rate of reported cascade bytes increase per period, in basis points.
   */
  usage_growth_cap_bps_per_period: string;
}
export interface RewardDistributionAminoMsg {
  type: "/lumera.supernode.v1.RewardDistribution";
  value: RewardDistributionAmino;
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.Params
 */
export interface Params {
  minimumStakeForSn: Coin;
  reportingThreshold: bigint;
  slashingThreshold: bigint;
  metricsThresholds: string;
  evidenceRetentionPeriod: string;
  slashingFraction: string;
  inactivityPenaltyPeriod: string;
  /**
   * Expected cadence (in blocks) between supernode metrics reports. The daemon
   * can run on a timer using expected block time, but the chain enforces
   * height-based staleness strictly in blocks.
   */
  metricsUpdateIntervalBlocks: bigint;
  /**
   * Additional grace (in blocks) before marking metrics overdue/stale.
   */
  metricsGracePeriodBlocks: bigint;
  /**
   * Maximum acceptable staleness (in blocks) for a metrics report when
   * validating freshness.
   */
  metricsFreshnessMaxBlocks: bigint;
  minSupernodeVersion: string;
  minCpuCores: bigint;
  maxCpuUsagePercent: bigint;
  minMemGb: bigint;
  maxMemUsagePercent: bigint;
  minStorageGb: bigint;
  maxStorageUsagePercent: bigint;
  requiredOpenPorts: number[];
  rewardDistribution?: RewardDistribution;
}
export interface ParamsProtoMsg {
  typeUrl: "/lumera.supernode.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.Params
 */
export interface ParamsAmino {
  minimum_stake_for_sn: CoinAmino;
  reporting_threshold: string;
  slashing_threshold: string;
  metrics_thresholds: string;
  evidence_retention_period: string;
  slashing_fraction: string;
  inactivity_penalty_period: string;
  /**
   * Expected cadence (in blocks) between supernode metrics reports. The daemon
   * can run on a timer using expected block time, but the chain enforces
   * height-based staleness strictly in blocks.
   */
  metrics_update_interval_blocks: string;
  /**
   * Additional grace (in blocks) before marking metrics overdue/stale.
   */
  metrics_grace_period_blocks: string;
  /**
   * Maximum acceptable staleness (in blocks) for a metrics report when
   * validating freshness.
   */
  metrics_freshness_max_blocks: string;
  min_supernode_version: string;
  min_cpu_cores: string;
  max_cpu_usage_percent: string;
  min_mem_gb: string;
  max_mem_usage_percent: string;
  min_storage_gb: string;
  max_storage_usage_percent: string;
  required_open_ports: number[];
  reward_distribution?: RewardDistributionAmino;
}
export interface ParamsAminoMsg {
  type: "lumera/x/supernode/v1/Params";
  value: ParamsAmino;
}
function createBaseRewardDistribution(): RewardDistribution {
  return {
    paymentPeriodBlocks: BigInt(0),
    registrationFeeShareBps: BigInt(0),
    minCascadeBytesForPayment: BigInt(0),
    newSnRampUpPeriods: BigInt(0),
    measurementSmoothingPeriods: BigInt(0),
    usageGrowthCapBpsPerPeriod: BigInt(0)
  };
}
/**
 * RewardDistribution governs the Everlight reward pool's payout cadence,
 * eligibility floor, ramp-up, smoothing window and growth cap. All fields
 * are governance-mutable via supernode MsgUpdateParams.
 * @name RewardDistribution
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.RewardDistribution
 */
export const RewardDistribution = {
  typeUrl: "/lumera.supernode.v1.RewardDistribution",
  is(o: any): o is RewardDistribution {
    return o && (o.$typeUrl === RewardDistribution.typeUrl || typeof o.paymentPeriodBlocks === "bigint" && typeof o.registrationFeeShareBps === "bigint" && typeof o.minCascadeBytesForPayment === "bigint" && typeof o.newSnRampUpPeriods === "bigint" && typeof o.measurementSmoothingPeriods === "bigint" && typeof o.usageGrowthCapBpsPerPeriod === "bigint");
  },
  isAmino(o: any): o is RewardDistributionAmino {
    return o && (o.$typeUrl === RewardDistribution.typeUrl || typeof o.payment_period_blocks === "bigint" && typeof o.registration_fee_share_bps === "bigint" && typeof o.min_cascade_bytes_for_payment === "bigint" && typeof o.new_sn_ramp_up_periods === "bigint" && typeof o.measurement_smoothing_periods === "bigint" && typeof o.usage_growth_cap_bps_per_period === "bigint");
  },
  encode(message: RewardDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paymentPeriodBlocks !== BigInt(0)) {
      writer.uint32(8).uint64(message.paymentPeriodBlocks);
    }
    if (message.registrationFeeShareBps !== BigInt(0)) {
      writer.uint32(16).uint64(message.registrationFeeShareBps);
    }
    if (message.minCascadeBytesForPayment !== BigInt(0)) {
      writer.uint32(24).uint64(message.minCascadeBytesForPayment);
    }
    if (message.newSnRampUpPeriods !== BigInt(0)) {
      writer.uint32(32).uint64(message.newSnRampUpPeriods);
    }
    if (message.measurementSmoothingPeriods !== BigInt(0)) {
      writer.uint32(40).uint64(message.measurementSmoothingPeriods);
    }
    if (message.usageGrowthCapBpsPerPeriod !== BigInt(0)) {
      writer.uint32(48).uint64(message.usageGrowthCapBpsPerPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentPeriodBlocks = reader.uint64();
          break;
        case 2:
          message.registrationFeeShareBps = reader.uint64();
          break;
        case 3:
          message.minCascadeBytesForPayment = reader.uint64();
          break;
        case 4:
          message.newSnRampUpPeriods = reader.uint64();
          break;
        case 5:
          message.measurementSmoothingPeriods = reader.uint64();
          break;
        case 6:
          message.usageGrowthCapBpsPerPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RewardDistribution>): RewardDistribution {
    const message = createBaseRewardDistribution();
    message.paymentPeriodBlocks = object.paymentPeriodBlocks !== undefined && object.paymentPeriodBlocks !== null ? BigInt(object.paymentPeriodBlocks.toString()) : BigInt(0);
    message.registrationFeeShareBps = object.registrationFeeShareBps !== undefined && object.registrationFeeShareBps !== null ? BigInt(object.registrationFeeShareBps.toString()) : BigInt(0);
    message.minCascadeBytesForPayment = object.minCascadeBytesForPayment !== undefined && object.minCascadeBytesForPayment !== null ? BigInt(object.minCascadeBytesForPayment.toString()) : BigInt(0);
    message.newSnRampUpPeriods = object.newSnRampUpPeriods !== undefined && object.newSnRampUpPeriods !== null ? BigInt(object.newSnRampUpPeriods.toString()) : BigInt(0);
    message.measurementSmoothingPeriods = object.measurementSmoothingPeriods !== undefined && object.measurementSmoothingPeriods !== null ? BigInt(object.measurementSmoothingPeriods.toString()) : BigInt(0);
    message.usageGrowthCapBpsPerPeriod = object.usageGrowthCapBpsPerPeriod !== undefined && object.usageGrowthCapBpsPerPeriod !== null ? BigInt(object.usageGrowthCapBpsPerPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RewardDistributionAmino): RewardDistribution {
    const message = createBaseRewardDistribution();
    if (object.payment_period_blocks !== undefined && object.payment_period_blocks !== null) {
      message.paymentPeriodBlocks = BigInt(object.payment_period_blocks);
    }
    if (object.registration_fee_share_bps !== undefined && object.registration_fee_share_bps !== null) {
      message.registrationFeeShareBps = BigInt(object.registration_fee_share_bps);
    }
    if (object.min_cascade_bytes_for_payment !== undefined && object.min_cascade_bytes_for_payment !== null) {
      message.minCascadeBytesForPayment = BigInt(object.min_cascade_bytes_for_payment);
    }
    if (object.new_sn_ramp_up_periods !== undefined && object.new_sn_ramp_up_periods !== null) {
      message.newSnRampUpPeriods = BigInt(object.new_sn_ramp_up_periods);
    }
    if (object.measurement_smoothing_periods !== undefined && object.measurement_smoothing_periods !== null) {
      message.measurementSmoothingPeriods = BigInt(object.measurement_smoothing_periods);
    }
    if (object.usage_growth_cap_bps_per_period !== undefined && object.usage_growth_cap_bps_per_period !== null) {
      message.usageGrowthCapBpsPerPeriod = BigInt(object.usage_growth_cap_bps_per_period);
    }
    return message;
  },
  toAmino(message: RewardDistribution): RewardDistributionAmino {
    const obj: any = {};
    obj.payment_period_blocks = message.paymentPeriodBlocks !== BigInt(0) ? message.paymentPeriodBlocks?.toString() : undefined;
    obj.registration_fee_share_bps = message.registrationFeeShareBps !== BigInt(0) ? message.registrationFeeShareBps?.toString() : undefined;
    obj.min_cascade_bytes_for_payment = message.minCascadeBytesForPayment !== BigInt(0) ? message.minCascadeBytesForPayment?.toString() : undefined;
    obj.new_sn_ramp_up_periods = message.newSnRampUpPeriods !== BigInt(0) ? message.newSnRampUpPeriods?.toString() : undefined;
    obj.measurement_smoothing_periods = message.measurementSmoothingPeriods !== BigInt(0) ? message.measurementSmoothingPeriods?.toString() : undefined;
    obj.usage_growth_cap_bps_per_period = message.usageGrowthCapBpsPerPeriod !== BigInt(0) ? message.usageGrowthCapBpsPerPeriod?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardDistributionAminoMsg): RewardDistribution {
    return RewardDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardDistributionProtoMsg): RewardDistribution {
    return RewardDistribution.decode(message.value);
  },
  toProto(message: RewardDistribution): Uint8Array {
    return RewardDistribution.encode(message).finish();
  },
  toProtoMsg(message: RewardDistribution): RewardDistributionProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.RewardDistribution",
      value: RewardDistribution.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    minimumStakeForSn: Coin.fromPartial({}),
    reportingThreshold: BigInt(0),
    slashingThreshold: BigInt(0),
    metricsThresholds: "",
    evidenceRetentionPeriod: "",
    slashingFraction: "",
    inactivityPenaltyPeriod: "",
    metricsUpdateIntervalBlocks: BigInt(0),
    metricsGracePeriodBlocks: BigInt(0),
    metricsFreshnessMaxBlocks: BigInt(0),
    minSupernodeVersion: "",
    minCpuCores: BigInt(0),
    maxCpuUsagePercent: BigInt(0),
    minMemGb: BigInt(0),
    maxMemUsagePercent: BigInt(0),
    minStorageGb: BigInt(0),
    maxStorageUsagePercent: BigInt(0),
    requiredOpenPorts: [],
    rewardDistribution: undefined
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package lumera.supernode.v1
 * @see proto type: lumera.supernode.v1.Params
 */
export const Params = {
  typeUrl: "/lumera.supernode.v1.Params",
  aminoType: "lumera/x/supernode/v1/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.minimumStakeForSn) && typeof o.reportingThreshold === "bigint" && typeof o.slashingThreshold === "bigint" && typeof o.metricsThresholds === "string" && typeof o.evidenceRetentionPeriod === "string" && typeof o.slashingFraction === "string" && typeof o.inactivityPenaltyPeriod === "string" && typeof o.metricsUpdateIntervalBlocks === "bigint" && typeof o.metricsGracePeriodBlocks === "bigint" && typeof o.metricsFreshnessMaxBlocks === "bigint" && typeof o.minSupernodeVersion === "string" && typeof o.minCpuCores === "bigint" && typeof o.maxCpuUsagePercent === "bigint" && typeof o.minMemGb === "bigint" && typeof o.maxMemUsagePercent === "bigint" && typeof o.minStorageGb === "bigint" && typeof o.maxStorageUsagePercent === "bigint" && Array.isArray(o.requiredOpenPorts) && (!o.requiredOpenPorts.length || typeof o.requiredOpenPorts[0] === "number"));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.minimum_stake_for_sn) && typeof o.reporting_threshold === "bigint" && typeof o.slashing_threshold === "bigint" && typeof o.metrics_thresholds === "string" && typeof o.evidence_retention_period === "string" && typeof o.slashing_fraction === "string" && typeof o.inactivity_penalty_period === "string" && typeof o.metrics_update_interval_blocks === "bigint" && typeof o.metrics_grace_period_blocks === "bigint" && typeof o.metrics_freshness_max_blocks === "bigint" && typeof o.min_supernode_version === "string" && typeof o.min_cpu_cores === "bigint" && typeof o.max_cpu_usage_percent === "bigint" && typeof o.min_mem_gb === "bigint" && typeof o.max_mem_usage_percent === "bigint" && typeof o.min_storage_gb === "bigint" && typeof o.max_storage_usage_percent === "bigint" && Array.isArray(o.required_open_ports) && (!o.required_open_ports.length || typeof o.required_open_ports[0] === "number"));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimumStakeForSn !== undefined) {
      Coin.encode(message.minimumStakeForSn, writer.uint32(10).fork()).ldelim();
    }
    if (message.reportingThreshold !== BigInt(0)) {
      writer.uint32(16).uint64(message.reportingThreshold);
    }
    if (message.slashingThreshold !== BigInt(0)) {
      writer.uint32(24).uint64(message.slashingThreshold);
    }
    if (message.metricsThresholds !== "") {
      writer.uint32(34).string(message.metricsThresholds);
    }
    if (message.evidenceRetentionPeriod !== "") {
      writer.uint32(42).string(message.evidenceRetentionPeriod);
    }
    if (message.slashingFraction !== "") {
      writer.uint32(50).string(message.slashingFraction);
    }
    if (message.inactivityPenaltyPeriod !== "") {
      writer.uint32(58).string(message.inactivityPenaltyPeriod);
    }
    if (message.metricsUpdateIntervalBlocks !== BigInt(0)) {
      writer.uint32(64).uint64(message.metricsUpdateIntervalBlocks);
    }
    if (message.metricsGracePeriodBlocks !== BigInt(0)) {
      writer.uint32(72).uint64(message.metricsGracePeriodBlocks);
    }
    if (message.metricsFreshnessMaxBlocks !== BigInt(0)) {
      writer.uint32(80).uint64(message.metricsFreshnessMaxBlocks);
    }
    if (message.minSupernodeVersion !== "") {
      writer.uint32(90).string(message.minSupernodeVersion);
    }
    if (message.minCpuCores !== BigInt(0)) {
      writer.uint32(96).uint64(message.minCpuCores);
    }
    if (message.maxCpuUsagePercent !== BigInt(0)) {
      writer.uint32(104).uint64(message.maxCpuUsagePercent);
    }
    if (message.minMemGb !== BigInt(0)) {
      writer.uint32(112).uint64(message.minMemGb);
    }
    if (message.maxMemUsagePercent !== BigInt(0)) {
      writer.uint32(120).uint64(message.maxMemUsagePercent);
    }
    if (message.minStorageGb !== BigInt(0)) {
      writer.uint32(128).uint64(message.minStorageGb);
    }
    if (message.maxStorageUsagePercent !== BigInt(0)) {
      writer.uint32(136).uint64(message.maxStorageUsagePercent);
    }
    writer.uint32(146).fork();
    for (const v of message.requiredOpenPorts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.rewardDistribution !== undefined) {
      RewardDistribution.encode(message.rewardDistribution, writer.uint32(154).fork()).ldelim();
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
          message.minimumStakeForSn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.reportingThreshold = reader.uint64();
          break;
        case 3:
          message.slashingThreshold = reader.uint64();
          break;
        case 4:
          message.metricsThresholds = reader.string();
          break;
        case 5:
          message.evidenceRetentionPeriod = reader.string();
          break;
        case 6:
          message.slashingFraction = reader.string();
          break;
        case 7:
          message.inactivityPenaltyPeriod = reader.string();
          break;
        case 8:
          message.metricsUpdateIntervalBlocks = reader.uint64();
          break;
        case 9:
          message.metricsGracePeriodBlocks = reader.uint64();
          break;
        case 10:
          message.metricsFreshnessMaxBlocks = reader.uint64();
          break;
        case 11:
          message.minSupernodeVersion = reader.string();
          break;
        case 12:
          message.minCpuCores = reader.uint64();
          break;
        case 13:
          message.maxCpuUsagePercent = reader.uint64();
          break;
        case 14:
          message.minMemGb = reader.uint64();
          break;
        case 15:
          message.maxMemUsagePercent = reader.uint64();
          break;
        case 16:
          message.minStorageGb = reader.uint64();
          break;
        case 17:
          message.maxStorageUsagePercent = reader.uint64();
          break;
        case 18:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requiredOpenPorts.push(reader.uint32());
            }
          } else {
            message.requiredOpenPorts.push(reader.uint32());
          }
          break;
        case 19:
          message.rewardDistribution = RewardDistribution.decode(reader, reader.uint32());
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
    message.minimumStakeForSn = object.minimumStakeForSn !== undefined && object.minimumStakeForSn !== null ? Coin.fromPartial(object.minimumStakeForSn) : undefined;
    message.reportingThreshold = object.reportingThreshold !== undefined && object.reportingThreshold !== null ? BigInt(object.reportingThreshold.toString()) : BigInt(0);
    message.slashingThreshold = object.slashingThreshold !== undefined && object.slashingThreshold !== null ? BigInt(object.slashingThreshold.toString()) : BigInt(0);
    message.metricsThresholds = object.metricsThresholds ?? "";
    message.evidenceRetentionPeriod = object.evidenceRetentionPeriod ?? "";
    message.slashingFraction = object.slashingFraction ?? "";
    message.inactivityPenaltyPeriod = object.inactivityPenaltyPeriod ?? "";
    message.metricsUpdateIntervalBlocks = object.metricsUpdateIntervalBlocks !== undefined && object.metricsUpdateIntervalBlocks !== null ? BigInt(object.metricsUpdateIntervalBlocks.toString()) : BigInt(0);
    message.metricsGracePeriodBlocks = object.metricsGracePeriodBlocks !== undefined && object.metricsGracePeriodBlocks !== null ? BigInt(object.metricsGracePeriodBlocks.toString()) : BigInt(0);
    message.metricsFreshnessMaxBlocks = object.metricsFreshnessMaxBlocks !== undefined && object.metricsFreshnessMaxBlocks !== null ? BigInt(object.metricsFreshnessMaxBlocks.toString()) : BigInt(0);
    message.minSupernodeVersion = object.minSupernodeVersion ?? "";
    message.minCpuCores = object.minCpuCores !== undefined && object.minCpuCores !== null ? BigInt(object.minCpuCores.toString()) : BigInt(0);
    message.maxCpuUsagePercent = object.maxCpuUsagePercent !== undefined && object.maxCpuUsagePercent !== null ? BigInt(object.maxCpuUsagePercent.toString()) : BigInt(0);
    message.minMemGb = object.minMemGb !== undefined && object.minMemGb !== null ? BigInt(object.minMemGb.toString()) : BigInt(0);
    message.maxMemUsagePercent = object.maxMemUsagePercent !== undefined && object.maxMemUsagePercent !== null ? BigInt(object.maxMemUsagePercent.toString()) : BigInt(0);
    message.minStorageGb = object.minStorageGb !== undefined && object.minStorageGb !== null ? BigInt(object.minStorageGb.toString()) : BigInt(0);
    message.maxStorageUsagePercent = object.maxStorageUsagePercent !== undefined && object.maxStorageUsagePercent !== null ? BigInt(object.maxStorageUsagePercent.toString()) : BigInt(0);
    message.requiredOpenPorts = object.requiredOpenPorts?.map(e => e) || [];
    message.rewardDistribution = object.rewardDistribution !== undefined && object.rewardDistribution !== null ? RewardDistribution.fromPartial(object.rewardDistribution) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.minimum_stake_for_sn !== undefined && object.minimum_stake_for_sn !== null) {
      message.minimumStakeForSn = Coin.fromAmino(object.minimum_stake_for_sn);
    }
    if (object.reporting_threshold !== undefined && object.reporting_threshold !== null) {
      message.reportingThreshold = BigInt(object.reporting_threshold);
    }
    if (object.slashing_threshold !== undefined && object.slashing_threshold !== null) {
      message.slashingThreshold = BigInt(object.slashing_threshold);
    }
    if (object.metrics_thresholds !== undefined && object.metrics_thresholds !== null) {
      message.metricsThresholds = object.metrics_thresholds;
    }
    if (object.evidence_retention_period !== undefined && object.evidence_retention_period !== null) {
      message.evidenceRetentionPeriod = object.evidence_retention_period;
    }
    if (object.slashing_fraction !== undefined && object.slashing_fraction !== null) {
      message.slashingFraction = object.slashing_fraction;
    }
    if (object.inactivity_penalty_period !== undefined && object.inactivity_penalty_period !== null) {
      message.inactivityPenaltyPeriod = object.inactivity_penalty_period;
    }
    if (object.metrics_update_interval_blocks !== undefined && object.metrics_update_interval_blocks !== null) {
      message.metricsUpdateIntervalBlocks = BigInt(object.metrics_update_interval_blocks);
    }
    if (object.metrics_grace_period_blocks !== undefined && object.metrics_grace_period_blocks !== null) {
      message.metricsGracePeriodBlocks = BigInt(object.metrics_grace_period_blocks);
    }
    if (object.metrics_freshness_max_blocks !== undefined && object.metrics_freshness_max_blocks !== null) {
      message.metricsFreshnessMaxBlocks = BigInt(object.metrics_freshness_max_blocks);
    }
    if (object.min_supernode_version !== undefined && object.min_supernode_version !== null) {
      message.minSupernodeVersion = object.min_supernode_version;
    }
    if (object.min_cpu_cores !== undefined && object.min_cpu_cores !== null) {
      message.minCpuCores = BigInt(object.min_cpu_cores);
    }
    if (object.max_cpu_usage_percent !== undefined && object.max_cpu_usage_percent !== null) {
      message.maxCpuUsagePercent = BigInt(object.max_cpu_usage_percent);
    }
    if (object.min_mem_gb !== undefined && object.min_mem_gb !== null) {
      message.minMemGb = BigInt(object.min_mem_gb);
    }
    if (object.max_mem_usage_percent !== undefined && object.max_mem_usage_percent !== null) {
      message.maxMemUsagePercent = BigInt(object.max_mem_usage_percent);
    }
    if (object.min_storage_gb !== undefined && object.min_storage_gb !== null) {
      message.minStorageGb = BigInt(object.min_storage_gb);
    }
    if (object.max_storage_usage_percent !== undefined && object.max_storage_usage_percent !== null) {
      message.maxStorageUsagePercent = BigInt(object.max_storage_usage_percent);
    }
    message.requiredOpenPorts = object.required_open_ports?.map(e => e) || [];
    if (object.reward_distribution !== undefined && object.reward_distribution !== null) {
      message.rewardDistribution = RewardDistribution.fromAmino(object.reward_distribution);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minimum_stake_for_sn = message.minimumStakeForSn ? Coin.toAmino(message.minimumStakeForSn) : Coin.toAmino(Coin.fromPartial({}));
    obj.reporting_threshold = message.reportingThreshold !== BigInt(0) ? message.reportingThreshold?.toString() : undefined;
    obj.slashing_threshold = message.slashingThreshold !== BigInt(0) ? message.slashingThreshold?.toString() : undefined;
    obj.metrics_thresholds = message.metricsThresholds === "" ? undefined : message.metricsThresholds;
    obj.evidence_retention_period = message.evidenceRetentionPeriod === "" ? undefined : message.evidenceRetentionPeriod;
    obj.slashing_fraction = message.slashingFraction === "" ? undefined : message.slashingFraction;
    obj.inactivity_penalty_period = message.inactivityPenaltyPeriod === "" ? undefined : message.inactivityPenaltyPeriod;
    obj.metrics_update_interval_blocks = message.metricsUpdateIntervalBlocks !== BigInt(0) ? message.metricsUpdateIntervalBlocks?.toString() : undefined;
    obj.metrics_grace_period_blocks = message.metricsGracePeriodBlocks !== BigInt(0) ? message.metricsGracePeriodBlocks?.toString() : undefined;
    obj.metrics_freshness_max_blocks = message.metricsFreshnessMaxBlocks !== BigInt(0) ? message.metricsFreshnessMaxBlocks?.toString() : undefined;
    obj.min_supernode_version = message.minSupernodeVersion === "" ? undefined : message.minSupernodeVersion;
    obj.min_cpu_cores = message.minCpuCores !== BigInt(0) ? message.minCpuCores?.toString() : undefined;
    obj.max_cpu_usage_percent = message.maxCpuUsagePercent !== BigInt(0) ? message.maxCpuUsagePercent?.toString() : undefined;
    obj.min_mem_gb = message.minMemGb !== BigInt(0) ? message.minMemGb?.toString() : undefined;
    obj.max_mem_usage_percent = message.maxMemUsagePercent !== BigInt(0) ? message.maxMemUsagePercent?.toString() : undefined;
    obj.min_storage_gb = message.minStorageGb !== BigInt(0) ? message.minStorageGb?.toString() : undefined;
    obj.max_storage_usage_percent = message.maxStorageUsagePercent !== BigInt(0) ? message.maxStorageUsagePercent?.toString() : undefined;
    if (message.requiredOpenPorts) {
      obj.required_open_ports = message.requiredOpenPorts.map(e => e);
    } else {
      obj.required_open_ports = message.requiredOpenPorts;
    }
    obj.reward_distribution = message.rewardDistribution ? RewardDistribution.toAmino(message.rewardDistribution) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "lumera/x/supernode/v1/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/lumera.supernode.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    RewardDistribution.registerTypeUrl();
  }
};