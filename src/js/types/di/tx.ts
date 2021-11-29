/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "di";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateReactor {
  creator: string;
  validator: string;
  moniker: string;
  description: string;
  power: Coin | undefined;
}

export interface MsgCreateReactorResponse {
  id: number;
}

export interface MsgUpdateReactor {
  creator: string;
  id: number;
  validator: string;
  moniker: string;
  description: string;
  power: Coin | undefined;
}

export interface MsgUpdateReactorResponse {}

export interface MsgDeleteReactor {
  creator: string;
  id: number;
}

export interface MsgDeleteReactorResponse {}

export interface MsgUpdateInstance {
  creator: string;
  name: string;
  mood: string;
}

export interface MsgUpdateInstanceName {
  creator: string;
  name: string;
}

export interface MsgUpdateInstanceMood {
  creator: string;
  mood: string;
}

export interface MsgUpdateInstanceResponse {}

export interface MsgCreateStructure {
  creator: string;
  name: string;
  description: string;
  hash: string;
  input: string;
  schematic: string;
  performingStructure: number;
  destinationStructure: number;
}

export interface MsgCreateStructureResponse {
  id: number;
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgCreateStructureResponse_Result;
}

export enum MsgCreateStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  POWER_FAILURE = 2,
  FEATURE_FAILURE = 3,
  REACH_FAILURE = 4,
  OFFLINE_FAILURE = 5,
  PERMISSION_FAILURE = 6,
  UNRECOGNIZED = -1,
}

export function msgCreateStructureResponse_ResultFromJSON(
  object: any
): MsgCreateStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgCreateStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgCreateStructureResponse_Result.FAILURE;
    case 2:
    case "POWER_FAILURE":
      return MsgCreateStructureResponse_Result.POWER_FAILURE;
    case 3:
    case "FEATURE_FAILURE":
      return MsgCreateStructureResponse_Result.FEATURE_FAILURE;
    case 4:
    case "REACH_FAILURE":
      return MsgCreateStructureResponse_Result.REACH_FAILURE;
    case 5:
    case "OFFLINE_FAILURE":
      return MsgCreateStructureResponse_Result.OFFLINE_FAILURE;
    case 6:
    case "PERMISSION_FAILURE":
      return MsgCreateStructureResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgCreateStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgCreateStructureResponse_ResultToJSON(
  object: MsgCreateStructureResponse_Result
): string {
  switch (object) {
    case MsgCreateStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgCreateStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgCreateStructureResponse_Result.POWER_FAILURE:
      return "POWER_FAILURE";
    case MsgCreateStructureResponse_Result.FEATURE_FAILURE:
      return "FEATURE_FAILURE";
    case MsgCreateStructureResponse_Result.REACH_FAILURE:
      return "REACH_FAILURE";
    case MsgCreateStructureResponse_Result.OFFLINE_FAILURE:
      return "OFFLINE_FAILURE";
    case MsgCreateStructureResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgUpdateStructure {
  creator: string;
  id: number;
  name: string;
  description: string;
}

export interface MsgUpdateStructureResponse {}

export interface MsgDeleteStructure {
  creator: string;
  id: number;
}

export interface MsgDeleteStructureResponse {}

export interface MsgCreateSchematic {
  creator: string;
  name: string;
  description: string;
  hash: string;
  input: string;
  owner: string;
}

export interface MsgCreateSchematicResponse {
  id: number;
  name: string;
  description: string;
  hash: string;
  input: string;
  owner: string;
}

export interface MsgUpdateSchematic {
  creator: string;
  id: number;
  name: string;
  owner: string;
}

export interface MsgUpdateSchematicResponse {}

export interface MsgDeleteSchematic {
  creator: string;
  id: number;
}

export interface MsgDeleteSchematicResponse {}

export interface MsgTransferSchematic {
  creator: string;
  schematic: string;
  newOwner: string;
}

export interface MsgTransferSchematicResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgTransferSchematicResponse_Result;
}

export enum MsgTransferSchematicResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  PERMISSION_FAILURE = 2,
  UNRECOGNIZED = -1,
}

export function msgTransferSchematicResponse_ResultFromJSON(
  object: any
): MsgTransferSchematicResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgTransferSchematicResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgTransferSchematicResponse_Result.FAILURE;
    case 2:
    case "PERMISSION_FAILURE":
      return MsgTransferSchematicResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgTransferSchematicResponse_Result.UNRECOGNIZED;
  }
}

export function msgTransferSchematicResponse_ResultToJSON(
  object: MsgTransferSchematicResponse_Result
): string {
  switch (object) {
    case MsgTransferSchematicResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgTransferSchematicResponse_Result.FAILURE:
      return "FAILURE";
    case MsgTransferSchematicResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgAttackStructure {
  creator: string;
  performingStructure: number;
  targetStructure: number;
  aimCalculationHash: string;
  aimCalculationInput: string;
}

export interface MsgAttackStructureResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgAttackStructureResponse_Result;
  damagePerformed: number;
  /**  */
  targetDestroyed: boolean;
}

export enum MsgAttackStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  POWER_FAILURE = 2,
  FEATURE_FAILURE = 3,
  REACH_FAILURE = 4,
  OFFLINE_FAILURE = 5,
  PERMISSION_FAILURE = 6,
  UNRECOGNIZED = -1,
}

export function msgAttackStructureResponse_ResultFromJSON(
  object: any
): MsgAttackStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgAttackStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgAttackStructureResponse_Result.FAILURE;
    case 2:
    case "POWER_FAILURE":
      return MsgAttackStructureResponse_Result.POWER_FAILURE;
    case 3:
    case "FEATURE_FAILURE":
      return MsgAttackStructureResponse_Result.FEATURE_FAILURE;
    case 4:
    case "REACH_FAILURE":
      return MsgAttackStructureResponse_Result.REACH_FAILURE;
    case 5:
    case "OFFLINE_FAILURE":
      return MsgAttackStructureResponse_Result.OFFLINE_FAILURE;
    case 6:
    case "PERMISSION_FAILURE":
      return MsgAttackStructureResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgAttackStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgAttackStructureResponse_ResultToJSON(
  object: MsgAttackStructureResponse_Result
): string {
  switch (object) {
    case MsgAttackStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgAttackStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgAttackStructureResponse_Result.POWER_FAILURE:
      return "POWER_FAILURE";
    case MsgAttackStructureResponse_Result.FEATURE_FAILURE:
      return "FEATURE_FAILURE";
    case MsgAttackStructureResponse_Result.REACH_FAILURE:
      return "REACH_FAILURE";
    case MsgAttackStructureResponse_Result.OFFLINE_FAILURE:
      return "OFFLINE_FAILURE";
    case MsgAttackStructureResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgDrainStructure {
  creator: string;
  performingStructure: number;
  targetStructure: number;
}

export interface MsgDrainStructureResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgDrainStructureResponse_Result;
  drainAmount: Coin | undefined;
}

export enum MsgDrainStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  POWER_FAILURE = 2,
  FEATURE_FAILURE = 3,
  REACH_FAILURE = 4,
  OFFLINE_FAILURE = 5,
  PERMISSION_FAILURE = 6,
  UNRECOGNIZED = -1,
}

export function msgDrainStructureResponse_ResultFromJSON(
  object: any
): MsgDrainStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgDrainStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgDrainStructureResponse_Result.FAILURE;
    case 2:
    case "POWER_FAILURE":
      return MsgDrainStructureResponse_Result.POWER_FAILURE;
    case 3:
    case "FEATURE_FAILURE":
      return MsgDrainStructureResponse_Result.FEATURE_FAILURE;
    case 4:
    case "REACH_FAILURE":
      return MsgDrainStructureResponse_Result.REACH_FAILURE;
    case 5:
    case "OFFLINE_FAILURE":
      return MsgDrainStructureResponse_Result.OFFLINE_FAILURE;
    case 6:
    case "PERMISSION_FAILURE":
      return MsgDrainStructureResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgDrainStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgDrainStructureResponse_ResultToJSON(
  object: MsgDrainStructureResponse_Result
): string {
  switch (object) {
    case MsgDrainStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgDrainStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgDrainStructureResponse_Result.POWER_FAILURE:
      return "POWER_FAILURE";
    case MsgDrainStructureResponse_Result.FEATURE_FAILURE:
      return "FEATURE_FAILURE";
    case MsgDrainStructureResponse_Result.REACH_FAILURE:
      return "REACH_FAILURE";
    case MsgDrainStructureResponse_Result.OFFLINE_FAILURE:
      return "OFFLINE_FAILURE";
    case MsgDrainStructureResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgRepairStructure {
  creator: string;
  performingStructure: number;
  targetStructure: number;
}

export interface MsgRepairStructureResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgRepairStructureResponse_Result;
  repairAmount: number;
}

export enum MsgRepairStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  POWER_FAILURE = 2,
  FEATURE_FAILURE = 3,
  REACH_FAILURE = 4,
  OFFLINE_FAILURE = 5,
  PERMISSION_FAILURE = 6,
  UNRECOGNIZED = -1,
}

export function msgRepairStructureResponse_ResultFromJSON(
  object: any
): MsgRepairStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgRepairStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgRepairStructureResponse_Result.FAILURE;
    case 2:
    case "POWER_FAILURE":
      return MsgRepairStructureResponse_Result.POWER_FAILURE;
    case 3:
    case "FEATURE_FAILURE":
      return MsgRepairStructureResponse_Result.FEATURE_FAILURE;
    case 4:
    case "REACH_FAILURE":
      return MsgRepairStructureResponse_Result.REACH_FAILURE;
    case 5:
    case "OFFLINE_FAILURE":
      return MsgRepairStructureResponse_Result.OFFLINE_FAILURE;
    case 6:
    case "PERMISSION_FAILURE":
      return MsgRepairStructureResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgRepairStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgRepairStructureResponse_ResultToJSON(
  object: MsgRepairStructureResponse_Result
): string {
  switch (object) {
    case MsgRepairStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgRepairStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgRepairStructureResponse_Result.POWER_FAILURE:
      return "POWER_FAILURE";
    case MsgRepairStructureResponse_Result.FEATURE_FAILURE:
      return "FEATURE_FAILURE";
    case MsgRepairStructureResponse_Result.REACH_FAILURE:
      return "REACH_FAILURE";
    case MsgRepairStructureResponse_Result.OFFLINE_FAILURE:
      return "OFFLINE_FAILURE";
    case MsgRepairStructureResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgConnectStructure {
  creator: string;
  structure: number;
  reactor: string;
}

export interface MsgConnectStructureResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgConnectStructureResponse_Result;
}

export enum MsgConnectStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  POWER_FAILURE = 2,
  FEATURE_FAILURE = 3,
  REACH_FAILURE = 4,
  OFFLINE_FAILURE = 5,
  PERMISSION_FAILURE = 6,
  UNRECOGNIZED = -1,
}

export function msgConnectStructureResponse_ResultFromJSON(
  object: any
): MsgConnectStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgConnectStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgConnectStructureResponse_Result.FAILURE;
    case 2:
    case "POWER_FAILURE":
      return MsgConnectStructureResponse_Result.POWER_FAILURE;
    case 3:
    case "FEATURE_FAILURE":
      return MsgConnectStructureResponse_Result.FEATURE_FAILURE;
    case 4:
    case "REACH_FAILURE":
      return MsgConnectStructureResponse_Result.REACH_FAILURE;
    case 5:
    case "OFFLINE_FAILURE":
      return MsgConnectStructureResponse_Result.OFFLINE_FAILURE;
    case 6:
    case "PERMISSION_FAILURE":
      return MsgConnectStructureResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgConnectStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgConnectStructureResponse_ResultToJSON(
  object: MsgConnectStructureResponse_Result
): string {
  switch (object) {
    case MsgConnectStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgConnectStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgConnectStructureResponse_Result.POWER_FAILURE:
      return "POWER_FAILURE";
    case MsgConnectStructureResponse_Result.FEATURE_FAILURE:
      return "FEATURE_FAILURE";
    case MsgConnectStructureResponse_Result.REACH_FAILURE:
      return "REACH_FAILURE";
    case MsgConnectStructureResponse_Result.OFFLINE_FAILURE:
      return "OFFLINE_FAILURE";
    case MsgConnectStructureResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgChargeStructure {
  creator: string;
  targetStructure: number;
  chargeAmount: number;
}

export interface MsgChargeStructureResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgChargeStructureResponse_Result;
  chargeAmount: number;
}

export enum MsgChargeStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  POWER_FAILURE = 2,
  UNRECOGNIZED = -1,
}

export function msgChargeStructureResponse_ResultFromJSON(
  object: any
): MsgChargeStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgChargeStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgChargeStructureResponse_Result.FAILURE;
    case 2:
    case "POWER_FAILURE":
      return MsgChargeStructureResponse_Result.POWER_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgChargeStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgChargeStructureResponse_ResultToJSON(
  object: MsgChargeStructureResponse_Result
): string {
  switch (object) {
    case MsgChargeStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgChargeStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgChargeStructureResponse_Result.POWER_FAILURE:
      return "POWER_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgTransferStructure {
  creator: string;
  targetStructure: number;
  newSupervisor: string;
}

export interface MsgTransferStructureResponse {
  actionResult: MsgTransferStructureResponse_Result;
}

export enum MsgTransferStructureResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  PERMISSION_FAILURE = 2,
  UNRECOGNIZED = -1,
}

export function msgTransferStructureResponse_ResultFromJSON(
  object: any
): MsgTransferStructureResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgTransferStructureResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgTransferStructureResponse_Result.FAILURE;
    case 2:
    case "PERMISSION_FAILURE":
      return MsgTransferStructureResponse_Result.PERMISSION_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgTransferStructureResponse_Result.UNRECOGNIZED;
  }
}

export function msgTransferStructureResponse_ResultToJSON(
  object: MsgTransferStructureResponse_Result
): string {
  switch (object) {
    case MsgTransferStructureResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgTransferStructureResponse_Result.FAILURE:
      return "FAILURE";
    case MsgTransferStructureResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    default:
      return "UNKNOWN";
  }
}

export interface MsgStructureChargeSlot {
  creator: string;
  performingStructure: number;
  chargeSlot: number;
  targetAddress: string;
}

export interface MsgStructureChargeSlotResponse {
  /** SUCCESS, POWER_FAILURE, */
  actionResult: MsgStructureChargeSlotResponse_Result;
}

export enum MsgStructureChargeSlotResponse_Result {
  SUCCESS = 0,
  FAILURE = 1,
  PERMISSION_FAILURE = 2,
  FEATURE_FAILURE = 3,
  UNRECOGNIZED = -1,
}

export function msgStructureChargeSlotResponse_ResultFromJSON(
  object: any
): MsgStructureChargeSlotResponse_Result {
  switch (object) {
    case 0:
    case "SUCCESS":
      return MsgStructureChargeSlotResponse_Result.SUCCESS;
    case 1:
    case "FAILURE":
      return MsgStructureChargeSlotResponse_Result.FAILURE;
    case 2:
    case "PERMISSION_FAILURE":
      return MsgStructureChargeSlotResponse_Result.PERMISSION_FAILURE;
    case 3:
    case "FEATURE_FAILURE":
      return MsgStructureChargeSlotResponse_Result.FEATURE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MsgStructureChargeSlotResponse_Result.UNRECOGNIZED;
  }
}

export function msgStructureChargeSlotResponse_ResultToJSON(
  object: MsgStructureChargeSlotResponse_Result
): string {
  switch (object) {
    case MsgStructureChargeSlotResponse_Result.SUCCESS:
      return "SUCCESS";
    case MsgStructureChargeSlotResponse_Result.FAILURE:
      return "FAILURE";
    case MsgStructureChargeSlotResponse_Result.PERMISSION_FAILURE:
      return "PERMISSION_FAILURE";
    case MsgStructureChargeSlotResponse_Result.FEATURE_FAILURE:
      return "FEATURE_FAILURE";
    default:
      return "UNKNOWN";
  }
}

const baseMsgCreateReactor: object = {
  creator: "",
  validator: "",
  moniker: "",
  description: "",
};

export const MsgCreateReactor = {
  encode(message: MsgCreateReactor, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.moniker !== "") {
      writer.uint32(26).string(message.moniker);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.power !== undefined) {
      Coin.encode(message.power, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateReactor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateReactor } as MsgCreateReactor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.moniker = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.power = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateReactor {
    const message = { ...baseMsgCreateReactor } as MsgCreateReactor;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Coin.fromJSON(object.power);
    } else {
      message.power = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateReactor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.description !== undefined &&
      (obj.description = message.description);
    message.power !== undefined &&
      (obj.power = message.power ? Coin.toJSON(message.power) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateReactor>): MsgCreateReactor {
    const message = { ...baseMsgCreateReactor } as MsgCreateReactor;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Coin.fromPartial(object.power);
    } else {
      message.power = undefined;
    }
    return message;
  },
};

const baseMsgCreateReactorResponse: object = { id: 0 };

export const MsgCreateReactorResponse = {
  encode(
    message: MsgCreateReactorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateReactorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateReactorResponse,
    } as MsgCreateReactorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateReactorResponse {
    const message = {
      ...baseMsgCreateReactorResponse,
    } as MsgCreateReactorResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateReactorResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateReactorResponse>
  ): MsgCreateReactorResponse {
    const message = {
      ...baseMsgCreateReactorResponse,
    } as MsgCreateReactorResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateReactor: object = {
  creator: "",
  id: 0,
  validator: "",
  moniker: "",
  description: "",
};

export const MsgUpdateReactor = {
  encode(message: MsgUpdateReactor, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    if (message.moniker !== "") {
      writer.uint32(34).string(message.moniker);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.power !== undefined) {
      Coin.encode(message.power, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateReactor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateReactor } as MsgUpdateReactor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.validator = reader.string();
          break;
        case 4:
          message.moniker = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.power = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateReactor {
    const message = { ...baseMsgUpdateReactor } as MsgUpdateReactor;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = String(object.moniker);
    } else {
      message.moniker = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Coin.fromJSON(object.power);
    } else {
      message.power = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateReactor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.validator !== undefined && (obj.validator = message.validator);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.description !== undefined &&
      (obj.description = message.description);
    message.power !== undefined &&
      (obj.power = message.power ? Coin.toJSON(message.power) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateReactor>): MsgUpdateReactor {
    const message = { ...baseMsgUpdateReactor } as MsgUpdateReactor;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    } else {
      message.moniker = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Coin.fromPartial(object.power);
    } else {
      message.power = undefined;
    }
    return message;
  },
};

const baseMsgUpdateReactorResponse: object = {};

export const MsgUpdateReactorResponse = {
  encode(
    _: MsgUpdateReactorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateReactorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateReactorResponse,
    } as MsgUpdateReactorResponse;
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

  fromJSON(_: any): MsgUpdateReactorResponse {
    const message = {
      ...baseMsgUpdateReactorResponse,
    } as MsgUpdateReactorResponse;
    return message;
  },

  toJSON(_: MsgUpdateReactorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateReactorResponse>
  ): MsgUpdateReactorResponse {
    const message = {
      ...baseMsgUpdateReactorResponse,
    } as MsgUpdateReactorResponse;
    return message;
  },
};

const baseMsgDeleteReactor: object = { creator: "", id: 0 };

export const MsgDeleteReactor = {
  encode(message: MsgDeleteReactor, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteReactor {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteReactor } as MsgDeleteReactor;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteReactor {
    const message = { ...baseMsgDeleteReactor } as MsgDeleteReactor;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteReactor): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteReactor>): MsgDeleteReactor {
    const message = { ...baseMsgDeleteReactor } as MsgDeleteReactor;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteReactorResponse: object = {};

export const MsgDeleteReactorResponse = {
  encode(
    _: MsgDeleteReactorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteReactorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteReactorResponse,
    } as MsgDeleteReactorResponse;
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

  fromJSON(_: any): MsgDeleteReactorResponse {
    const message = {
      ...baseMsgDeleteReactorResponse,
    } as MsgDeleteReactorResponse;
    return message;
  },

  toJSON(_: MsgDeleteReactorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteReactorResponse>
  ): MsgDeleteReactorResponse {
    const message = {
      ...baseMsgDeleteReactorResponse,
    } as MsgDeleteReactorResponse;
    return message;
  },
};

const baseMsgUpdateInstance: object = { creator: "", name: "", mood: "" };

export const MsgUpdateInstance = {
  encode(message: MsgUpdateInstance, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.mood !== "") {
      writer.uint32(26).string(message.mood);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInstance } as MsgUpdateInstance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.mood = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInstance {
    const message = { ...baseMsgUpdateInstance } as MsgUpdateInstance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.mood !== undefined && object.mood !== null) {
      message.mood = String(object.mood);
    } else {
      message.mood = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateInstance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.mood !== undefined && (obj.mood = message.mood);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateInstance>): MsgUpdateInstance {
    const message = { ...baseMsgUpdateInstance } as MsgUpdateInstance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.mood !== undefined && object.mood !== null) {
      message.mood = object.mood;
    } else {
      message.mood = "";
    }
    return message;
  },
};

const baseMsgUpdateInstanceName: object = { creator: "", name: "" };

export const MsgUpdateInstanceName = {
  encode(
    message: MsgUpdateInstanceName,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstanceName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInstanceName } as MsgUpdateInstanceName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInstanceName {
    const message = { ...baseMsgUpdateInstanceName } as MsgUpdateInstanceName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateInstanceName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateInstanceName>
  ): MsgUpdateInstanceName {
    const message = { ...baseMsgUpdateInstanceName } as MsgUpdateInstanceName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateInstanceMood: object = { creator: "", mood: "" };

export const MsgUpdateInstanceMood = {
  encode(
    message: MsgUpdateInstanceMood,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.mood !== "") {
      writer.uint32(18).string(message.mood);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstanceMood {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateInstanceMood } as MsgUpdateInstanceMood;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.mood = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateInstanceMood {
    const message = { ...baseMsgUpdateInstanceMood } as MsgUpdateInstanceMood;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.mood !== undefined && object.mood !== null) {
      message.mood = String(object.mood);
    } else {
      message.mood = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateInstanceMood): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.mood !== undefined && (obj.mood = message.mood);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateInstanceMood>
  ): MsgUpdateInstanceMood {
    const message = { ...baseMsgUpdateInstanceMood } as MsgUpdateInstanceMood;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.mood !== undefined && object.mood !== null) {
      message.mood = object.mood;
    } else {
      message.mood = "";
    }
    return message;
  },
};

const baseMsgUpdateInstanceResponse: object = {};

export const MsgUpdateInstanceResponse = {
  encode(
    _: MsgUpdateInstanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateInstanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateInstanceResponse,
    } as MsgUpdateInstanceResponse;
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

  fromJSON(_: any): MsgUpdateInstanceResponse {
    const message = {
      ...baseMsgUpdateInstanceResponse,
    } as MsgUpdateInstanceResponse;
    return message;
  },

  toJSON(_: MsgUpdateInstanceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateInstanceResponse>
  ): MsgUpdateInstanceResponse {
    const message = {
      ...baseMsgUpdateInstanceResponse,
    } as MsgUpdateInstanceResponse;
    return message;
  },
};

const baseMsgCreateStructure: object = {
  creator: "",
  name: "",
  description: "",
  hash: "",
  input: "",
  schematic: "",
  performingStructure: 0,
  destinationStructure: 0,
};

export const MsgCreateStructure = {
  encode(
    message: MsgCreateStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.input !== "") {
      writer.uint32(42).string(message.input);
    }
    if (message.schematic !== "") {
      writer.uint32(50).string(message.schematic);
    }
    if (message.performingStructure !== 0) {
      writer.uint32(56).uint64(message.performingStructure);
    }
    if (message.destinationStructure !== 0) {
      writer.uint32(64).uint64(message.destinationStructure);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStructure } as MsgCreateStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.input = reader.string();
          break;
        case 6:
          message.schematic = reader.string();
          break;
        case 7:
          message.performingStructure = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.destinationStructure = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStructure {
    const message = { ...baseMsgCreateStructure } as MsgCreateStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = String(object.input);
    } else {
      message.input = "";
    }
    if (object.schematic !== undefined && object.schematic !== null) {
      message.schematic = String(object.schematic);
    } else {
      message.schematic = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = Number(object.performingStructure);
    } else {
      message.performingStructure = 0;
    }
    if (
      object.destinationStructure !== undefined &&
      object.destinationStructure !== null
    ) {
      message.destinationStructure = Number(object.destinationStructure);
    } else {
      message.destinationStructure = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.hash !== undefined && (obj.hash = message.hash);
    message.input !== undefined && (obj.input = message.input);
    message.schematic !== undefined && (obj.schematic = message.schematic);
    message.performingStructure !== undefined &&
      (obj.performingStructure = message.performingStructure);
    message.destinationStructure !== undefined &&
      (obj.destinationStructure = message.destinationStructure);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateStructure>): MsgCreateStructure {
    const message = { ...baseMsgCreateStructure } as MsgCreateStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    } else {
      message.input = "";
    }
    if (object.schematic !== undefined && object.schematic !== null) {
      message.schematic = object.schematic;
    } else {
      message.schematic = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = object.performingStructure;
    } else {
      message.performingStructure = 0;
    }
    if (
      object.destinationStructure !== undefined &&
      object.destinationStructure !== null
    ) {
      message.destinationStructure = object.destinationStructure;
    } else {
      message.destinationStructure = 0;
    }
    return message;
  },
};

const baseMsgCreateStructureResponse: object = { id: 0, actionResult: 0 };

export const MsgCreateStructureResponse = {
  encode(
    message: MsgCreateStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.actionResult !== 0) {
      writer.uint32(16).int32(message.actionResult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateStructureResponse,
    } as MsgCreateStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.actionResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStructureResponse {
    const message = {
      ...baseMsgCreateStructureResponse,
    } as MsgCreateStructureResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgCreateStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateStructureResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.actionResult !== undefined &&
      (obj.actionResult = msgCreateStructureResponse_ResultToJSON(
        message.actionResult
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateStructureResponse>
  ): MsgCreateStructureResponse {
    const message = {
      ...baseMsgCreateStructureResponse,
    } as MsgCreateStructureResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    return message;
  },
};

const baseMsgUpdateStructure: object = {
  creator: "",
  id: 0,
  name: "",
  description: "",
};

export const MsgUpdateStructure = {
  encode(
    message: MsgUpdateStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateStructure } as MsgUpdateStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateStructure {
    const message = { ...baseMsgUpdateStructure } as MsgUpdateStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateStructure>): MsgUpdateStructure {
    const message = { ...baseMsgUpdateStructure } as MsgUpdateStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgUpdateStructureResponse: object = {};

export const MsgUpdateStructureResponse = {
  encode(
    _: MsgUpdateStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateStructureResponse,
    } as MsgUpdateStructureResponse;
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

  fromJSON(_: any): MsgUpdateStructureResponse {
    const message = {
      ...baseMsgUpdateStructureResponse,
    } as MsgUpdateStructureResponse;
    return message;
  },

  toJSON(_: MsgUpdateStructureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateStructureResponse>
  ): MsgUpdateStructureResponse {
    const message = {
      ...baseMsgUpdateStructureResponse,
    } as MsgUpdateStructureResponse;
    return message;
  },
};

const baseMsgDeleteStructure: object = { creator: "", id: 0 };

export const MsgDeleteStructure = {
  encode(
    message: MsgDeleteStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteStructure } as MsgDeleteStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteStructure {
    const message = { ...baseMsgDeleteStructure } as MsgDeleteStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteStructure>): MsgDeleteStructure {
    const message = { ...baseMsgDeleteStructure } as MsgDeleteStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteStructureResponse: object = {};

export const MsgDeleteStructureResponse = {
  encode(
    _: MsgDeleteStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteStructureResponse,
    } as MsgDeleteStructureResponse;
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

  fromJSON(_: any): MsgDeleteStructureResponse {
    const message = {
      ...baseMsgDeleteStructureResponse,
    } as MsgDeleteStructureResponse;
    return message;
  },

  toJSON(_: MsgDeleteStructureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteStructureResponse>
  ): MsgDeleteStructureResponse {
    const message = {
      ...baseMsgDeleteStructureResponse,
    } as MsgDeleteStructureResponse;
    return message;
  },
};

const baseMsgCreateSchematic: object = {
  creator: "",
  name: "",
  description: "",
  hash: "",
  input: "",
  owner: "",
};

export const MsgCreateSchematic = {
  encode(
    message: MsgCreateSchematic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.input !== "") {
      writer.uint32(42).string(message.input);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSchematic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSchematic } as MsgCreateSchematic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.input = reader.string();
          break;
        case 6:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSchematic {
    const message = { ...baseMsgCreateSchematic } as MsgCreateSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = String(object.input);
    } else {
      message.input = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSchematic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.hash !== undefined && (obj.hash = message.hash);
    message.input !== undefined && (obj.input = message.input);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSchematic>): MsgCreateSchematic {
    const message = { ...baseMsgCreateSchematic } as MsgCreateSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    } else {
      message.input = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgCreateSchematicResponse: object = {
  id: 0,
  name: "",
  description: "",
  hash: "",
  input: "",
  owner: "",
};

export const MsgCreateSchematicResponse = {
  encode(
    message: MsgCreateSchematicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.input !== "") {
      writer.uint32(42).string(message.input);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSchematicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSchematicResponse,
    } as MsgCreateSchematicResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.input = reader.string();
          break;
        case 6:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSchematicResponse {
    const message = {
      ...baseMsgCreateSchematicResponse,
    } as MsgCreateSchematicResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = String(object.input);
    } else {
      message.input = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSchematicResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.hash !== undefined && (obj.hash = message.hash);
    message.input !== undefined && (obj.input = message.input);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSchematicResponse>
  ): MsgCreateSchematicResponse {
    const message = {
      ...baseMsgCreateSchematicResponse,
    } as MsgCreateSchematicResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    } else {
      message.input = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgUpdateSchematic: object = {
  creator: "",
  id: 0,
  name: "",
  owner: "",
};

export const MsgUpdateSchematic = {
  encode(
    message: MsgUpdateSchematic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSchematic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSchematic } as MsgUpdateSchematic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSchematic {
    const message = { ...baseMsgUpdateSchematic } as MsgUpdateSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateSchematic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateSchematic>): MsgUpdateSchematic {
    const message = { ...baseMsgUpdateSchematic } as MsgUpdateSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseMsgUpdateSchematicResponse: object = {};

export const MsgUpdateSchematicResponse = {
  encode(
    _: MsgUpdateSchematicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSchematicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSchematicResponse,
    } as MsgUpdateSchematicResponse;
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

  fromJSON(_: any): MsgUpdateSchematicResponse {
    const message = {
      ...baseMsgUpdateSchematicResponse,
    } as MsgUpdateSchematicResponse;
    return message;
  },

  toJSON(_: MsgUpdateSchematicResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSchematicResponse>
  ): MsgUpdateSchematicResponse {
    const message = {
      ...baseMsgUpdateSchematicResponse,
    } as MsgUpdateSchematicResponse;
    return message;
  },
};

const baseMsgDeleteSchematic: object = { creator: "", id: 0 };

export const MsgDeleteSchematic = {
  encode(
    message: MsgDeleteSchematic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSchematic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSchematic } as MsgDeleteSchematic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSchematic {
    const message = { ...baseMsgDeleteSchematic } as MsgDeleteSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteSchematic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSchematic>): MsgDeleteSchematic {
    const message = { ...baseMsgDeleteSchematic } as MsgDeleteSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteSchematicResponse: object = {};

export const MsgDeleteSchematicResponse = {
  encode(
    _: MsgDeleteSchematicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSchematicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSchematicResponse,
    } as MsgDeleteSchematicResponse;
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

  fromJSON(_: any): MsgDeleteSchematicResponse {
    const message = {
      ...baseMsgDeleteSchematicResponse,
    } as MsgDeleteSchematicResponse;
    return message;
  },

  toJSON(_: MsgDeleteSchematicResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSchematicResponse>
  ): MsgDeleteSchematicResponse {
    const message = {
      ...baseMsgDeleteSchematicResponse,
    } as MsgDeleteSchematicResponse;
    return message;
  },
};

const baseMsgTransferSchematic: object = {
  creator: "",
  schematic: "",
  newOwner: "",
};

export const MsgTransferSchematic = {
  encode(
    message: MsgTransferSchematic,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.schematic !== "") {
      writer.uint32(18).string(message.schematic);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferSchematic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferSchematic } as MsgTransferSchematic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.schematic = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferSchematic {
    const message = { ...baseMsgTransferSchematic } as MsgTransferSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.schematic !== undefined && object.schematic !== null) {
      message.schematic = String(object.schematic);
    } else {
      message.schematic = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner);
    } else {
      message.newOwner = "";
    }
    return message;
  },

  toJSON(message: MsgTransferSchematic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.schematic !== undefined && (obj.schematic = message.schematic);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferSchematic>): MsgTransferSchematic {
    const message = { ...baseMsgTransferSchematic } as MsgTransferSchematic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.schematic !== undefined && object.schematic !== null) {
      message.schematic = object.schematic;
    } else {
      message.schematic = "";
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner;
    } else {
      message.newOwner = "";
    }
    return message;
  },
};

const baseMsgTransferSchematicResponse: object = { actionResult: 0 };

export const MsgTransferSchematicResponse = {
  encode(
    message: MsgTransferSchematicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTransferSchematicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferSchematicResponse,
    } as MsgTransferSchematicResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferSchematicResponse {
    const message = {
      ...baseMsgTransferSchematicResponse,
    } as MsgTransferSchematicResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgTransferSchematicResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    return message;
  },

  toJSON(message: MsgTransferSchematicResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgTransferSchematicResponse_ResultToJSON(
        message.actionResult
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgTransferSchematicResponse>
  ): MsgTransferSchematicResponse {
    const message = {
      ...baseMsgTransferSchematicResponse,
    } as MsgTransferSchematicResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    return message;
  },
};

const baseMsgAttackStructure: object = {
  creator: "",
  performingStructure: 0,
  targetStructure: 0,
  aimCalculationHash: "",
  aimCalculationInput: "",
};

export const MsgAttackStructure = {
  encode(
    message: MsgAttackStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.performingStructure !== 0) {
      writer.uint32(16).uint64(message.performingStructure);
    }
    if (message.targetStructure !== 0) {
      writer.uint32(24).uint64(message.targetStructure);
    }
    if (message.aimCalculationHash !== "") {
      writer.uint32(34).string(message.aimCalculationHash);
    }
    if (message.aimCalculationInput !== "") {
      writer.uint32(42).string(message.aimCalculationInput);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAttackStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAttackStructure } as MsgAttackStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.performingStructure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.targetStructure = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.aimCalculationHash = reader.string();
          break;
        case 5:
          message.aimCalculationInput = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAttackStructure {
    const message = { ...baseMsgAttackStructure } as MsgAttackStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = Number(object.performingStructure);
    } else {
      message.performingStructure = 0;
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = Number(object.targetStructure);
    } else {
      message.targetStructure = 0;
    }
    if (
      object.aimCalculationHash !== undefined &&
      object.aimCalculationHash !== null
    ) {
      message.aimCalculationHash = String(object.aimCalculationHash);
    } else {
      message.aimCalculationHash = "";
    }
    if (
      object.aimCalculationInput !== undefined &&
      object.aimCalculationInput !== null
    ) {
      message.aimCalculationInput = String(object.aimCalculationInput);
    } else {
      message.aimCalculationInput = "";
    }
    return message;
  },

  toJSON(message: MsgAttackStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.performingStructure !== undefined &&
      (obj.performingStructure = message.performingStructure);
    message.targetStructure !== undefined &&
      (obj.targetStructure = message.targetStructure);
    message.aimCalculationHash !== undefined &&
      (obj.aimCalculationHash = message.aimCalculationHash);
    message.aimCalculationInput !== undefined &&
      (obj.aimCalculationInput = message.aimCalculationInput);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAttackStructure>): MsgAttackStructure {
    const message = { ...baseMsgAttackStructure } as MsgAttackStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = object.performingStructure;
    } else {
      message.performingStructure = 0;
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = object.targetStructure;
    } else {
      message.targetStructure = 0;
    }
    if (
      object.aimCalculationHash !== undefined &&
      object.aimCalculationHash !== null
    ) {
      message.aimCalculationHash = object.aimCalculationHash;
    } else {
      message.aimCalculationHash = "";
    }
    if (
      object.aimCalculationInput !== undefined &&
      object.aimCalculationInput !== null
    ) {
      message.aimCalculationInput = object.aimCalculationInput;
    } else {
      message.aimCalculationInput = "";
    }
    return message;
  },
};

const baseMsgAttackStructureResponse: object = {
  actionResult: 0,
  damagePerformed: 0,
  targetDestroyed: false,
};

export const MsgAttackStructureResponse = {
  encode(
    message: MsgAttackStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    if (message.damagePerformed !== 0) {
      writer.uint32(16).uint64(message.damagePerformed);
    }
    if (message.targetDestroyed === true) {
      writer.uint32(24).bool(message.targetDestroyed);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAttackStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAttackStructureResponse,
    } as MsgAttackStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        case 2:
          message.damagePerformed = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.targetDestroyed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAttackStructureResponse {
    const message = {
      ...baseMsgAttackStructureResponse,
    } as MsgAttackStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgAttackStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    if (
      object.damagePerformed !== undefined &&
      object.damagePerformed !== null
    ) {
      message.damagePerformed = Number(object.damagePerformed);
    } else {
      message.damagePerformed = 0;
    }
    if (
      object.targetDestroyed !== undefined &&
      object.targetDestroyed !== null
    ) {
      message.targetDestroyed = Boolean(object.targetDestroyed);
    } else {
      message.targetDestroyed = false;
    }
    return message;
  },

  toJSON(message: MsgAttackStructureResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgAttackStructureResponse_ResultToJSON(
        message.actionResult
      ));
    message.damagePerformed !== undefined &&
      (obj.damagePerformed = message.damagePerformed);
    message.targetDestroyed !== undefined &&
      (obj.targetDestroyed = message.targetDestroyed);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAttackStructureResponse>
  ): MsgAttackStructureResponse {
    const message = {
      ...baseMsgAttackStructureResponse,
    } as MsgAttackStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    if (
      object.damagePerformed !== undefined &&
      object.damagePerformed !== null
    ) {
      message.damagePerformed = object.damagePerformed;
    } else {
      message.damagePerformed = 0;
    }
    if (
      object.targetDestroyed !== undefined &&
      object.targetDestroyed !== null
    ) {
      message.targetDestroyed = object.targetDestroyed;
    } else {
      message.targetDestroyed = false;
    }
    return message;
  },
};

const baseMsgDrainStructure: object = {
  creator: "",
  performingStructure: 0,
  targetStructure: 0,
};

export const MsgDrainStructure = {
  encode(message: MsgDrainStructure, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.performingStructure !== 0) {
      writer.uint32(16).uint64(message.performingStructure);
    }
    if (message.targetStructure !== 0) {
      writer.uint32(24).uint64(message.targetStructure);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDrainStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDrainStructure } as MsgDrainStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.performingStructure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.targetStructure = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrainStructure {
    const message = { ...baseMsgDrainStructure } as MsgDrainStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = Number(object.performingStructure);
    } else {
      message.performingStructure = 0;
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = Number(object.targetStructure);
    } else {
      message.targetStructure = 0;
    }
    return message;
  },

  toJSON(message: MsgDrainStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.performingStructure !== undefined &&
      (obj.performingStructure = message.performingStructure);
    message.targetStructure !== undefined &&
      (obj.targetStructure = message.targetStructure);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDrainStructure>): MsgDrainStructure {
    const message = { ...baseMsgDrainStructure } as MsgDrainStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = object.performingStructure;
    } else {
      message.performingStructure = 0;
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = object.targetStructure;
    } else {
      message.targetStructure = 0;
    }
    return message;
  },
};

const baseMsgDrainStructureResponse: object = { actionResult: 0 };

export const MsgDrainStructureResponse = {
  encode(
    message: MsgDrainStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    if (message.drainAmount !== undefined) {
      Coin.encode(message.drainAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDrainStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDrainStructureResponse,
    } as MsgDrainStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        case 2:
          message.drainAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrainStructureResponse {
    const message = {
      ...baseMsgDrainStructureResponse,
    } as MsgDrainStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgDrainStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    if (object.drainAmount !== undefined && object.drainAmount !== null) {
      message.drainAmount = Coin.fromJSON(object.drainAmount);
    } else {
      message.drainAmount = undefined;
    }
    return message;
  },

  toJSON(message: MsgDrainStructureResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgDrainStructureResponse_ResultToJSON(
        message.actionResult
      ));
    message.drainAmount !== undefined &&
      (obj.drainAmount = message.drainAmount
        ? Coin.toJSON(message.drainAmount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDrainStructureResponse>
  ): MsgDrainStructureResponse {
    const message = {
      ...baseMsgDrainStructureResponse,
    } as MsgDrainStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    if (object.drainAmount !== undefined && object.drainAmount !== null) {
      message.drainAmount = Coin.fromPartial(object.drainAmount);
    } else {
      message.drainAmount = undefined;
    }
    return message;
  },
};

const baseMsgRepairStructure: object = {
  creator: "",
  performingStructure: 0,
  targetStructure: 0,
};

export const MsgRepairStructure = {
  encode(
    message: MsgRepairStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.performingStructure !== 0) {
      writer.uint32(16).uint64(message.performingStructure);
    }
    if (message.targetStructure !== 0) {
      writer.uint32(24).uint64(message.targetStructure);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRepairStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRepairStructure } as MsgRepairStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.performingStructure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.targetStructure = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepairStructure {
    const message = { ...baseMsgRepairStructure } as MsgRepairStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = Number(object.performingStructure);
    } else {
      message.performingStructure = 0;
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = Number(object.targetStructure);
    } else {
      message.targetStructure = 0;
    }
    return message;
  },

  toJSON(message: MsgRepairStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.performingStructure !== undefined &&
      (obj.performingStructure = message.performingStructure);
    message.targetStructure !== undefined &&
      (obj.targetStructure = message.targetStructure);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRepairStructure>): MsgRepairStructure {
    const message = { ...baseMsgRepairStructure } as MsgRepairStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = object.performingStructure;
    } else {
      message.performingStructure = 0;
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = object.targetStructure;
    } else {
      message.targetStructure = 0;
    }
    return message;
  },
};

const baseMsgRepairStructureResponse: object = {
  actionResult: 0,
  repairAmount: 0,
};

export const MsgRepairStructureResponse = {
  encode(
    message: MsgRepairStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    if (message.repairAmount !== 0) {
      writer.uint32(16).uint64(message.repairAmount);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRepairStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRepairStructureResponse,
    } as MsgRepairStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        case 2:
          message.repairAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRepairStructureResponse {
    const message = {
      ...baseMsgRepairStructureResponse,
    } as MsgRepairStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgRepairStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    if (object.repairAmount !== undefined && object.repairAmount !== null) {
      message.repairAmount = Number(object.repairAmount);
    } else {
      message.repairAmount = 0;
    }
    return message;
  },

  toJSON(message: MsgRepairStructureResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgRepairStructureResponse_ResultToJSON(
        message.actionResult
      ));
    message.repairAmount !== undefined &&
      (obj.repairAmount = message.repairAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRepairStructureResponse>
  ): MsgRepairStructureResponse {
    const message = {
      ...baseMsgRepairStructureResponse,
    } as MsgRepairStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    if (object.repairAmount !== undefined && object.repairAmount !== null) {
      message.repairAmount = object.repairAmount;
    } else {
      message.repairAmount = 0;
    }
    return message;
  },
};

const baseMsgConnectStructure: object = {
  creator: "",
  structure: 0,
  reactor: "",
};

export const MsgConnectStructure = {
  encode(
    message: MsgConnectStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.structure !== 0) {
      writer.uint32(16).uint64(message.structure);
    }
    if (message.reactor !== "") {
      writer.uint32(26).string(message.reactor);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConnectStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConnectStructure } as MsgConnectStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.structure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.reactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConnectStructure {
    const message = { ...baseMsgConnectStructure } as MsgConnectStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.structure !== undefined && object.structure !== null) {
      message.structure = Number(object.structure);
    } else {
      message.structure = 0;
    }
    if (object.reactor !== undefined && object.reactor !== null) {
      message.reactor = String(object.reactor);
    } else {
      message.reactor = "";
    }
    return message;
  },

  toJSON(message: MsgConnectStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.structure !== undefined && (obj.structure = message.structure);
    message.reactor !== undefined && (obj.reactor = message.reactor);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConnectStructure>): MsgConnectStructure {
    const message = { ...baseMsgConnectStructure } as MsgConnectStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.structure !== undefined && object.structure !== null) {
      message.structure = object.structure;
    } else {
      message.structure = 0;
    }
    if (object.reactor !== undefined && object.reactor !== null) {
      message.reactor = object.reactor;
    } else {
      message.reactor = "";
    }
    return message;
  },
};

const baseMsgConnectStructureResponse: object = { actionResult: 0 };

export const MsgConnectStructureResponse = {
  encode(
    message: MsgConnectStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgConnectStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConnectStructureResponse,
    } as MsgConnectStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConnectStructureResponse {
    const message = {
      ...baseMsgConnectStructureResponse,
    } as MsgConnectStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgConnectStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    return message;
  },

  toJSON(message: MsgConnectStructureResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgConnectStructureResponse_ResultToJSON(
        message.actionResult
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConnectStructureResponse>
  ): MsgConnectStructureResponse {
    const message = {
      ...baseMsgConnectStructureResponse,
    } as MsgConnectStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    return message;
  },
};

const baseMsgChargeStructure: object = {
  creator: "",
  targetStructure: 0,
  chargeAmount: 0,
};

export const MsgChargeStructure = {
  encode(
    message: MsgChargeStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.targetStructure !== 0) {
      writer.uint32(16).uint64(message.targetStructure);
    }
    if (message.chargeAmount !== 0) {
      writer.uint32(24).uint64(message.chargeAmount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChargeStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChargeStructure } as MsgChargeStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.targetStructure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chargeAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChargeStructure {
    const message = { ...baseMsgChargeStructure } as MsgChargeStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = Number(object.targetStructure);
    } else {
      message.targetStructure = 0;
    }
    if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
      message.chargeAmount = Number(object.chargeAmount);
    } else {
      message.chargeAmount = 0;
    }
    return message;
  },

  toJSON(message: MsgChargeStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.targetStructure !== undefined &&
      (obj.targetStructure = message.targetStructure);
    message.chargeAmount !== undefined &&
      (obj.chargeAmount = message.chargeAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChargeStructure>): MsgChargeStructure {
    const message = { ...baseMsgChargeStructure } as MsgChargeStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = object.targetStructure;
    } else {
      message.targetStructure = 0;
    }
    if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
      message.chargeAmount = object.chargeAmount;
    } else {
      message.chargeAmount = 0;
    }
    return message;
  },
};

const baseMsgChargeStructureResponse: object = {
  actionResult: 0,
  chargeAmount: 0,
};

export const MsgChargeStructureResponse = {
  encode(
    message: MsgChargeStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    if (message.chargeAmount !== 0) {
      writer.uint32(16).uint64(message.chargeAmount);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgChargeStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChargeStructureResponse,
    } as MsgChargeStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        case 2:
          message.chargeAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChargeStructureResponse {
    const message = {
      ...baseMsgChargeStructureResponse,
    } as MsgChargeStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgChargeStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
      message.chargeAmount = Number(object.chargeAmount);
    } else {
      message.chargeAmount = 0;
    }
    return message;
  },

  toJSON(message: MsgChargeStructureResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgChargeStructureResponse_ResultToJSON(
        message.actionResult
      ));
    message.chargeAmount !== undefined &&
      (obj.chargeAmount = message.chargeAmount);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgChargeStructureResponse>
  ): MsgChargeStructureResponse {
    const message = {
      ...baseMsgChargeStructureResponse,
    } as MsgChargeStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
      message.chargeAmount = object.chargeAmount;
    } else {
      message.chargeAmount = 0;
    }
    return message;
  },
};

const baseMsgTransferStructure: object = {
  creator: "",
  targetStructure: 0,
  newSupervisor: "",
};

export const MsgTransferStructure = {
  encode(
    message: MsgTransferStructure,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.targetStructure !== 0) {
      writer.uint32(16).uint64(message.targetStructure);
    }
    if (message.newSupervisor !== "") {
      writer.uint32(26).string(message.newSupervisor);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferStructure {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferStructure } as MsgTransferStructure;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.targetStructure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.newSupervisor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferStructure {
    const message = { ...baseMsgTransferStructure } as MsgTransferStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = Number(object.targetStructure);
    } else {
      message.targetStructure = 0;
    }
    if (object.newSupervisor !== undefined && object.newSupervisor !== null) {
      message.newSupervisor = String(object.newSupervisor);
    } else {
      message.newSupervisor = "";
    }
    return message;
  },

  toJSON(message: MsgTransferStructure): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.targetStructure !== undefined &&
      (obj.targetStructure = message.targetStructure);
    message.newSupervisor !== undefined &&
      (obj.newSupervisor = message.newSupervisor);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferStructure>): MsgTransferStructure {
    const message = { ...baseMsgTransferStructure } as MsgTransferStructure;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.targetStructure !== undefined &&
      object.targetStructure !== null
    ) {
      message.targetStructure = object.targetStructure;
    } else {
      message.targetStructure = 0;
    }
    if (object.newSupervisor !== undefined && object.newSupervisor !== null) {
      message.newSupervisor = object.newSupervisor;
    } else {
      message.newSupervisor = "";
    }
    return message;
  },
};

const baseMsgTransferStructureResponse: object = { actionResult: 0 };

export const MsgTransferStructureResponse = {
  encode(
    message: MsgTransferStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTransferStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTransferStructureResponse,
    } as MsgTransferStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferStructureResponse {
    const message = {
      ...baseMsgTransferStructureResponse,
    } as MsgTransferStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgTransferStructureResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    return message;
  },

  toJSON(message: MsgTransferStructureResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgTransferStructureResponse_ResultToJSON(
        message.actionResult
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgTransferStructureResponse>
  ): MsgTransferStructureResponse {
    const message = {
      ...baseMsgTransferStructureResponse,
    } as MsgTransferStructureResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    return message;
  },
};

const baseMsgStructureChargeSlot: object = {
  creator: "",
  performingStructure: 0,
  chargeSlot: 0,
  targetAddress: "",
};

export const MsgStructureChargeSlot = {
  encode(
    message: MsgStructureChargeSlot,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.performingStructure !== 0) {
      writer.uint32(16).uint64(message.performingStructure);
    }
    if (message.chargeSlot !== 0) {
      writer.uint32(24).uint64(message.chargeSlot);
    }
    if (message.targetAddress !== "") {
      writer.uint32(34).string(message.targetAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgStructureChargeSlot {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgStructureChargeSlot } as MsgStructureChargeSlot;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.performingStructure = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.chargeSlot = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.targetAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStructureChargeSlot {
    const message = { ...baseMsgStructureChargeSlot } as MsgStructureChargeSlot;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = Number(object.performingStructure);
    } else {
      message.performingStructure = 0;
    }
    if (object.chargeSlot !== undefined && object.chargeSlot !== null) {
      message.chargeSlot = Number(object.chargeSlot);
    } else {
      message.chargeSlot = 0;
    }
    if (object.targetAddress !== undefined && object.targetAddress !== null) {
      message.targetAddress = String(object.targetAddress);
    } else {
      message.targetAddress = "";
    }
    return message;
  },

  toJSON(message: MsgStructureChargeSlot): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.performingStructure !== undefined &&
      (obj.performingStructure = message.performingStructure);
    message.chargeSlot !== undefined && (obj.chargeSlot = message.chargeSlot);
    message.targetAddress !== undefined &&
      (obj.targetAddress = message.targetAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgStructureChargeSlot>
  ): MsgStructureChargeSlot {
    const message = { ...baseMsgStructureChargeSlot } as MsgStructureChargeSlot;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.performingStructure !== undefined &&
      object.performingStructure !== null
    ) {
      message.performingStructure = object.performingStructure;
    } else {
      message.performingStructure = 0;
    }
    if (object.chargeSlot !== undefined && object.chargeSlot !== null) {
      message.chargeSlot = object.chargeSlot;
    } else {
      message.chargeSlot = 0;
    }
    if (object.targetAddress !== undefined && object.targetAddress !== null) {
      message.targetAddress = object.targetAddress;
    } else {
      message.targetAddress = "";
    }
    return message;
  },
};

const baseMsgStructureChargeSlotResponse: object = { actionResult: 0 };

export const MsgStructureChargeSlotResponse = {
  encode(
    message: MsgStructureChargeSlotResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.actionResult !== 0) {
      writer.uint32(8).int32(message.actionResult);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgStructureChargeSlotResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgStructureChargeSlotResponse,
    } as MsgStructureChargeSlotResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStructureChargeSlotResponse {
    const message = {
      ...baseMsgStructureChargeSlotResponse,
    } as MsgStructureChargeSlotResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = msgStructureChargeSlotResponse_ResultFromJSON(
        object.actionResult
      );
    } else {
      message.actionResult = 0;
    }
    return message;
  },

  toJSON(message: MsgStructureChargeSlotResponse): unknown {
    const obj: any = {};
    message.actionResult !== undefined &&
      (obj.actionResult = msgStructureChargeSlotResponse_ResultToJSON(
        message.actionResult
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgStructureChargeSlotResponse>
  ): MsgStructureChargeSlotResponse {
    const message = {
      ...baseMsgStructureChargeSlotResponse,
    } as MsgStructureChargeSlotResponse;
    if (object.actionResult !== undefined && object.actionResult !== null) {
      message.actionResult = object.actionResult;
    } else {
      message.actionResult = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateReactor(request: MsgCreateReactor): Promise<MsgCreateReactorResponse>;
  UpdateReactor(request: MsgUpdateReactor): Promise<MsgUpdateReactorResponse>;
  DeleteReactor(request: MsgDeleteReactor): Promise<MsgDeleteReactorResponse>;
  UpdateInstance(
    request: MsgUpdateInstance
  ): Promise<MsgUpdateInstanceResponse>;
  UpdateInstanceName(
    request: MsgUpdateInstanceName
  ): Promise<MsgUpdateInstanceResponse>;
  UpdateInstanceMood(
    request: MsgUpdateInstanceMood
  ): Promise<MsgUpdateInstanceResponse>;
  CreateStructure(
    request: MsgCreateStructure
  ): Promise<MsgCreateStructureResponse>;
  UpdateStructure(
    request: MsgUpdateStructure
  ): Promise<MsgUpdateStructureResponse>;
  DeleteStructure(
    request: MsgDeleteStructure
  ): Promise<MsgDeleteStructureResponse>;
  AttackStructure(
    request: MsgAttackStructure
  ): Promise<MsgAttackStructureResponse>;
  DrainStructure(
    request: MsgDrainStructure
  ): Promise<MsgDrainStructureResponse>;
  RepairStructure(
    request: MsgRepairStructure
  ): Promise<MsgRepairStructureResponse>;
  ConnectStructure(
    request: MsgConnectStructure
  ): Promise<MsgConnectStructureResponse>;
  ChargeStructure(
    request: MsgChargeStructure
  ): Promise<MsgChargeStructureResponse>;
  TransferStructure(
    request: MsgTransferStructure
  ): Promise<MsgTransferStructureResponse>;
  StructureChargeSlot(
    request: MsgStructureChargeSlot
  ): Promise<MsgStructureChargeSlotResponse>;
  CreateSchematic(
    request: MsgCreateSchematic
  ): Promise<MsgCreateSchematicResponse>;
  UpdateSchematic(
    request: MsgUpdateSchematic
  ): Promise<MsgUpdateSchematicResponse>;
  DeleteSchematic(
    request: MsgDeleteSchematic
  ): Promise<MsgDeleteSchematicResponse>;
  TransferSchematic(
    request: MsgTransferSchematic
  ): Promise<MsgTransferSchematicResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateReactor(request: MsgCreateReactor): Promise<MsgCreateReactorResponse> {
    const data = MsgCreateReactor.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "CreateReactor", data);
    return promise.then((data) =>
      MsgCreateReactorResponse.decode(new Reader(data))
    );
  }

  UpdateReactor(request: MsgUpdateReactor): Promise<MsgUpdateReactorResponse> {
    const data = MsgUpdateReactor.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "UpdateReactor", data);
    return promise.then((data) =>
      MsgUpdateReactorResponse.decode(new Reader(data))
    );
  }

  DeleteReactor(request: MsgDeleteReactor): Promise<MsgDeleteReactorResponse> {
    const data = MsgDeleteReactor.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "DeleteReactor", data);
    return promise.then((data) =>
      MsgDeleteReactorResponse.decode(new Reader(data))
    );
  }

  UpdateInstance(
    request: MsgUpdateInstance
  ): Promise<MsgUpdateInstanceResponse> {
    const data = MsgUpdateInstance.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "UpdateInstance", data);
    return promise.then((data) =>
      MsgUpdateInstanceResponse.decode(new Reader(data))
    );
  }

  UpdateInstanceName(
    request: MsgUpdateInstanceName
  ): Promise<MsgUpdateInstanceResponse> {
    const data = MsgUpdateInstanceName.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "UpdateInstanceName", data);
    return promise.then((data) =>
      MsgUpdateInstanceResponse.decode(new Reader(data))
    );
  }

  UpdateInstanceMood(
    request: MsgUpdateInstanceMood
  ): Promise<MsgUpdateInstanceResponse> {
    const data = MsgUpdateInstanceMood.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "UpdateInstanceMood", data);
    return promise.then((data) =>
      MsgUpdateInstanceResponse.decode(new Reader(data))
    );
  }

  CreateStructure(
    request: MsgCreateStructure
  ): Promise<MsgCreateStructureResponse> {
    const data = MsgCreateStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "CreateStructure", data);
    return promise.then((data) =>
      MsgCreateStructureResponse.decode(new Reader(data))
    );
  }

  UpdateStructure(
    request: MsgUpdateStructure
  ): Promise<MsgUpdateStructureResponse> {
    const data = MsgUpdateStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "UpdateStructure", data);
    return promise.then((data) =>
      MsgUpdateStructureResponse.decode(new Reader(data))
    );
  }

  DeleteStructure(
    request: MsgDeleteStructure
  ): Promise<MsgDeleteStructureResponse> {
    const data = MsgDeleteStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "DeleteStructure", data);
    return promise.then((data) =>
      MsgDeleteStructureResponse.decode(new Reader(data))
    );
  }

  AttackStructure(
    request: MsgAttackStructure
  ): Promise<MsgAttackStructureResponse> {
    const data = MsgAttackStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "AttackStructure", data);
    return promise.then((data) =>
      MsgAttackStructureResponse.decode(new Reader(data))
    );
  }

  DrainStructure(
    request: MsgDrainStructure
  ): Promise<MsgDrainStructureResponse> {
    const data = MsgDrainStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "DrainStructure", data);
    return promise.then((data) =>
      MsgDrainStructureResponse.decode(new Reader(data))
    );
  }

  RepairStructure(
    request: MsgRepairStructure
  ): Promise<MsgRepairStructureResponse> {
    const data = MsgRepairStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "RepairStructure", data);
    return promise.then((data) =>
      MsgRepairStructureResponse.decode(new Reader(data))
    );
  }

  ConnectStructure(
    request: MsgConnectStructure
  ): Promise<MsgConnectStructureResponse> {
    const data = MsgConnectStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "ConnectStructure", data);
    return promise.then((data) =>
      MsgConnectStructureResponse.decode(new Reader(data))
    );
  }

  ChargeStructure(
    request: MsgChargeStructure
  ): Promise<MsgChargeStructureResponse> {
    const data = MsgChargeStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "ChargeStructure", data);
    return promise.then((data) =>
      MsgChargeStructureResponse.decode(new Reader(data))
    );
  }

  TransferStructure(
    request: MsgTransferStructure
  ): Promise<MsgTransferStructureResponse> {
    const data = MsgTransferStructure.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "TransferStructure", data);
    return promise.then((data) =>
      MsgTransferStructureResponse.decode(new Reader(data))
    );
  }

  StructureChargeSlot(
    request: MsgStructureChargeSlot
  ): Promise<MsgStructureChargeSlotResponse> {
    const data = MsgStructureChargeSlot.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "StructureChargeSlot", data);
    return promise.then((data) =>
      MsgStructureChargeSlotResponse.decode(new Reader(data))
    );
  }

  CreateSchematic(
    request: MsgCreateSchematic
  ): Promise<MsgCreateSchematicResponse> {
    const data = MsgCreateSchematic.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "CreateSchematic", data);
    return promise.then((data) =>
      MsgCreateSchematicResponse.decode(new Reader(data))
    );
  }

  UpdateSchematic(
    request: MsgUpdateSchematic
  ): Promise<MsgUpdateSchematicResponse> {
    const data = MsgUpdateSchematic.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "UpdateSchematic", data);
    return promise.then((data) =>
      MsgUpdateSchematicResponse.decode(new Reader(data))
    );
  }

  DeleteSchematic(
    request: MsgDeleteSchematic
  ): Promise<MsgDeleteSchematicResponse> {
    const data = MsgDeleteSchematic.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "DeleteSchematic", data);
    return promise.then((data) =>
      MsgDeleteSchematicResponse.decode(new Reader(data))
    );
  }

  TransferSchematic(
    request: MsgTransferSchematic
  ): Promise<MsgTransferSchematicResponse> {
    const data = MsgTransferSchematic.encode(request).finish();
    const promise = this.rpc.request("di.Msg", "TransferSchematic", data);
    return promise.then((data) =>
      MsgTransferSchematicResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
