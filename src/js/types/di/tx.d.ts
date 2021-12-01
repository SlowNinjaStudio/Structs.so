import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "di";
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
export interface MsgUpdateReactorResponse {
}
export interface MsgDeleteReactor {
    creator: string;
    id: number;
}
export interface MsgDeleteReactorResponse {
}
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
export interface MsgUpdateInstanceResponse {
}
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
export declare enum MsgCreateStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    POWER_FAILURE = 2,
    FEATURE_FAILURE = 3,
    REACH_FAILURE = 4,
    OFFLINE_FAILURE = 5,
    PERMISSION_FAILURE = 6,
    UNRECOGNIZED = -1
}
export declare function msgCreateStructureResponse_ResultFromJSON(object: any): MsgCreateStructureResponse_Result;
export declare function msgCreateStructureResponse_ResultToJSON(object: MsgCreateStructureResponse_Result): string;
export interface MsgUpdateStructure {
    creator: string;
    id: number;
    name: string;
    description: string;
}
export interface MsgUpdateStructureResponse {
}
export interface MsgDeleteStructure {
    creator: string;
    id: number;
}
export interface MsgDeleteStructureResponse {
}
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
export interface MsgUpdateSchematicResponse {
}
export interface MsgDeleteSchematic {
    creator: string;
    id: number;
}
export interface MsgDeleteSchematicResponse {
}
export interface MsgTransferSchematic {
    creator: string;
    schematic: string;
    newOwner: string;
}
export interface MsgTransferSchematicResponse {
    /** SUCCESS, POWER_FAILURE, */
    actionResult: MsgTransferSchematicResponse_Result;
}
export declare enum MsgTransferSchematicResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    PERMISSION_FAILURE = 2,
    UNRECOGNIZED = -1
}
export declare function msgTransferSchematicResponse_ResultFromJSON(object: any): MsgTransferSchematicResponse_Result;
export declare function msgTransferSchematicResponse_ResultToJSON(object: MsgTransferSchematicResponse_Result): string;
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
export declare enum MsgAttackStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    POWER_FAILURE = 2,
    FEATURE_FAILURE = 3,
    REACH_FAILURE = 4,
    OFFLINE_FAILURE = 5,
    PERMISSION_FAILURE = 6,
    UNRECOGNIZED = -1
}
export declare function msgAttackStructureResponse_ResultFromJSON(object: any): MsgAttackStructureResponse_Result;
export declare function msgAttackStructureResponse_ResultToJSON(object: MsgAttackStructureResponse_Result): string;
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
export declare enum MsgDrainStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    POWER_FAILURE = 2,
    FEATURE_FAILURE = 3,
    REACH_FAILURE = 4,
    OFFLINE_FAILURE = 5,
    PERMISSION_FAILURE = 6,
    UNRECOGNIZED = -1
}
export declare function msgDrainStructureResponse_ResultFromJSON(object: any): MsgDrainStructureResponse_Result;
export declare function msgDrainStructureResponse_ResultToJSON(object: MsgDrainStructureResponse_Result): string;
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
export declare enum MsgRepairStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    POWER_FAILURE = 2,
    FEATURE_FAILURE = 3,
    REACH_FAILURE = 4,
    OFFLINE_FAILURE = 5,
    PERMISSION_FAILURE = 6,
    UNRECOGNIZED = -1
}
export declare function msgRepairStructureResponse_ResultFromJSON(object: any): MsgRepairStructureResponse_Result;
export declare function msgRepairStructureResponse_ResultToJSON(object: MsgRepairStructureResponse_Result): string;
export interface MsgConnectStructure {
    creator: string;
    structure: number;
    reactor: string;
}
export interface MsgConnectStructureResponse {
    /** SUCCESS, POWER_FAILURE, */
    actionResult: MsgConnectStructureResponse_Result;
}
export declare enum MsgConnectStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    POWER_FAILURE = 2,
    FEATURE_FAILURE = 3,
    REACH_FAILURE = 4,
    OFFLINE_FAILURE = 5,
    PERMISSION_FAILURE = 6,
    UNRECOGNIZED = -1
}
export declare function msgConnectStructureResponse_ResultFromJSON(object: any): MsgConnectStructureResponse_Result;
export declare function msgConnectStructureResponse_ResultToJSON(object: MsgConnectStructureResponse_Result): string;
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
export declare enum MsgChargeStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    POWER_FAILURE = 2,
    UNRECOGNIZED = -1
}
export declare function msgChargeStructureResponse_ResultFromJSON(object: any): MsgChargeStructureResponse_Result;
export declare function msgChargeStructureResponse_ResultToJSON(object: MsgChargeStructureResponse_Result): string;
export interface MsgTransferStructure {
    creator: string;
    targetStructure: number;
    newSupervisor: string;
}
export interface MsgTransferStructureResponse {
    actionResult: MsgTransferStructureResponse_Result;
}
export declare enum MsgTransferStructureResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    PERMISSION_FAILURE = 2,
    UNRECOGNIZED = -1
}
export declare function msgTransferStructureResponse_ResultFromJSON(object: any): MsgTransferStructureResponse_Result;
export declare function msgTransferStructureResponse_ResultToJSON(object: MsgTransferStructureResponse_Result): string;
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
export declare enum MsgStructureChargeSlotResponse_Result {
    SUCCESS = 0,
    FAILURE = 1,
    PERMISSION_FAILURE = 2,
    FEATURE_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare function msgStructureChargeSlotResponse_ResultFromJSON(object: any): MsgStructureChargeSlotResponse_Result;
export declare function msgStructureChargeSlotResponse_ResultToJSON(object: MsgStructureChargeSlotResponse_Result): string;
export declare const MsgCreateReactor: {
    encode(message: MsgCreateReactor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateReactor;
    fromJSON(object: any): MsgCreateReactor;
    toJSON(message: MsgCreateReactor): unknown;
    fromPartial(object: DeepPartial<MsgCreateReactor>): MsgCreateReactor;
};
export declare const MsgCreateReactorResponse: {
    encode(message: MsgCreateReactorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateReactorResponse;
    fromJSON(object: any): MsgCreateReactorResponse;
    toJSON(message: MsgCreateReactorResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateReactorResponse>): MsgCreateReactorResponse;
};
export declare const MsgUpdateReactor: {
    encode(message: MsgUpdateReactor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateReactor;
    fromJSON(object: any): MsgUpdateReactor;
    toJSON(message: MsgUpdateReactor): unknown;
    fromPartial(object: DeepPartial<MsgUpdateReactor>): MsgUpdateReactor;
};
export declare const MsgUpdateReactorResponse: {
    encode(_: MsgUpdateReactorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateReactorResponse;
    fromJSON(_: any): MsgUpdateReactorResponse;
    toJSON(_: MsgUpdateReactorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateReactorResponse>): MsgUpdateReactorResponse;
};
export declare const MsgDeleteReactor: {
    encode(message: MsgDeleteReactor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteReactor;
    fromJSON(object: any): MsgDeleteReactor;
    toJSON(message: MsgDeleteReactor): unknown;
    fromPartial(object: DeepPartial<MsgDeleteReactor>): MsgDeleteReactor;
};
export declare const MsgDeleteReactorResponse: {
    encode(_: MsgDeleteReactorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteReactorResponse;
    fromJSON(_: any): MsgDeleteReactorResponse;
    toJSON(_: MsgDeleteReactorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteReactorResponse>): MsgDeleteReactorResponse;
};
export declare const MsgUpdateInstance: {
    encode(message: MsgUpdateInstance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstance;
    fromJSON(object: any): MsgUpdateInstance;
    toJSON(message: MsgUpdateInstance): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInstance>): MsgUpdateInstance;
};
export declare const MsgUpdateInstanceName: {
    encode(message: MsgUpdateInstanceName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstanceName;
    fromJSON(object: any): MsgUpdateInstanceName;
    toJSON(message: MsgUpdateInstanceName): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInstanceName>): MsgUpdateInstanceName;
};
export declare const MsgUpdateInstanceMood: {
    encode(message: MsgUpdateInstanceMood, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstanceMood;
    fromJSON(object: any): MsgUpdateInstanceMood;
    toJSON(message: MsgUpdateInstanceMood): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInstanceMood>): MsgUpdateInstanceMood;
};
export declare const MsgUpdateInstanceResponse: {
    encode(_: MsgUpdateInstanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateInstanceResponse;
    fromJSON(_: any): MsgUpdateInstanceResponse;
    toJSON(_: MsgUpdateInstanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateInstanceResponse>): MsgUpdateInstanceResponse;
};
export declare const MsgCreateStructure: {
    encode(message: MsgCreateStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStructure;
    fromJSON(object: any): MsgCreateStructure;
    toJSON(message: MsgCreateStructure): unknown;
    fromPartial(object: DeepPartial<MsgCreateStructure>): MsgCreateStructure;
};
export declare const MsgCreateStructureResponse: {
    encode(message: MsgCreateStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStructureResponse;
    fromJSON(object: any): MsgCreateStructureResponse;
    toJSON(message: MsgCreateStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateStructureResponse>): MsgCreateStructureResponse;
};
export declare const MsgUpdateStructure: {
    encode(message: MsgUpdateStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStructure;
    fromJSON(object: any): MsgUpdateStructure;
    toJSON(message: MsgUpdateStructure): unknown;
    fromPartial(object: DeepPartial<MsgUpdateStructure>): MsgUpdateStructure;
};
export declare const MsgUpdateStructureResponse: {
    encode(_: MsgUpdateStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStructureResponse;
    fromJSON(_: any): MsgUpdateStructureResponse;
    toJSON(_: MsgUpdateStructureResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateStructureResponse>): MsgUpdateStructureResponse;
};
export declare const MsgDeleteStructure: {
    encode(message: MsgDeleteStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStructure;
    fromJSON(object: any): MsgDeleteStructure;
    toJSON(message: MsgDeleteStructure): unknown;
    fromPartial(object: DeepPartial<MsgDeleteStructure>): MsgDeleteStructure;
};
export declare const MsgDeleteStructureResponse: {
    encode(_: MsgDeleteStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStructureResponse;
    fromJSON(_: any): MsgDeleteStructureResponse;
    toJSON(_: MsgDeleteStructureResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteStructureResponse>): MsgDeleteStructureResponse;
};
export declare const MsgCreateSchematic: {
    encode(message: MsgCreateSchematic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSchematic;
    fromJSON(object: any): MsgCreateSchematic;
    toJSON(message: MsgCreateSchematic): unknown;
    fromPartial(object: DeepPartial<MsgCreateSchematic>): MsgCreateSchematic;
};
export declare const MsgCreateSchematicResponse: {
    encode(message: MsgCreateSchematicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSchematicResponse;
    fromJSON(object: any): MsgCreateSchematicResponse;
    toJSON(message: MsgCreateSchematicResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSchematicResponse>): MsgCreateSchematicResponse;
};
export declare const MsgUpdateSchematic: {
    encode(message: MsgUpdateSchematic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSchematic;
    fromJSON(object: any): MsgUpdateSchematic;
    toJSON(message: MsgUpdateSchematic): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSchematic>): MsgUpdateSchematic;
};
export declare const MsgUpdateSchematicResponse: {
    encode(_: MsgUpdateSchematicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSchematicResponse;
    fromJSON(_: any): MsgUpdateSchematicResponse;
    toJSON(_: MsgUpdateSchematicResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSchematicResponse>): MsgUpdateSchematicResponse;
};
export declare const MsgDeleteSchematic: {
    encode(message: MsgDeleteSchematic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSchematic;
    fromJSON(object: any): MsgDeleteSchematic;
    toJSON(message: MsgDeleteSchematic): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSchematic>): MsgDeleteSchematic;
};
export declare const MsgDeleteSchematicResponse: {
    encode(_: MsgDeleteSchematicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSchematicResponse;
    fromJSON(_: any): MsgDeleteSchematicResponse;
    toJSON(_: MsgDeleteSchematicResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSchematicResponse>): MsgDeleteSchematicResponse;
};
export declare const MsgTransferSchematic: {
    encode(message: MsgTransferSchematic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferSchematic;
    fromJSON(object: any): MsgTransferSchematic;
    toJSON(message: MsgTransferSchematic): unknown;
    fromPartial(object: DeepPartial<MsgTransferSchematic>): MsgTransferSchematic;
};
export declare const MsgTransferSchematicResponse: {
    encode(message: MsgTransferSchematicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferSchematicResponse;
    fromJSON(object: any): MsgTransferSchematicResponse;
    toJSON(message: MsgTransferSchematicResponse): unknown;
    fromPartial(object: DeepPartial<MsgTransferSchematicResponse>): MsgTransferSchematicResponse;
};
export declare const MsgAttackStructure: {
    encode(message: MsgAttackStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAttackStructure;
    fromJSON(object: any): MsgAttackStructure;
    toJSON(message: MsgAttackStructure): unknown;
    fromPartial(object: DeepPartial<MsgAttackStructure>): MsgAttackStructure;
};
export declare const MsgAttackStructureResponse: {
    encode(message: MsgAttackStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAttackStructureResponse;
    fromJSON(object: any): MsgAttackStructureResponse;
    toJSON(message: MsgAttackStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgAttackStructureResponse>): MsgAttackStructureResponse;
};
export declare const MsgDrainStructure: {
    encode(message: MsgDrainStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDrainStructure;
    fromJSON(object: any): MsgDrainStructure;
    toJSON(message: MsgDrainStructure): unknown;
    fromPartial(object: DeepPartial<MsgDrainStructure>): MsgDrainStructure;
};
export declare const MsgDrainStructureResponse: {
    encode(message: MsgDrainStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDrainStructureResponse;
    fromJSON(object: any): MsgDrainStructureResponse;
    toJSON(message: MsgDrainStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgDrainStructureResponse>): MsgDrainStructureResponse;
};
export declare const MsgRepairStructure: {
    encode(message: MsgRepairStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRepairStructure;
    fromJSON(object: any): MsgRepairStructure;
    toJSON(message: MsgRepairStructure): unknown;
    fromPartial(object: DeepPartial<MsgRepairStructure>): MsgRepairStructure;
};
export declare const MsgRepairStructureResponse: {
    encode(message: MsgRepairStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRepairStructureResponse;
    fromJSON(object: any): MsgRepairStructureResponse;
    toJSON(message: MsgRepairStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgRepairStructureResponse>): MsgRepairStructureResponse;
};
export declare const MsgConnectStructure: {
    encode(message: MsgConnectStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgConnectStructure;
    fromJSON(object: any): MsgConnectStructure;
    toJSON(message: MsgConnectStructure): unknown;
    fromPartial(object: DeepPartial<MsgConnectStructure>): MsgConnectStructure;
};
export declare const MsgConnectStructureResponse: {
    encode(message: MsgConnectStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgConnectStructureResponse;
    fromJSON(object: any): MsgConnectStructureResponse;
    toJSON(message: MsgConnectStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgConnectStructureResponse>): MsgConnectStructureResponse;
};
export declare const MsgChargeStructure: {
    encode(message: MsgChargeStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgChargeStructure;
    fromJSON(object: any): MsgChargeStructure;
    toJSON(message: MsgChargeStructure): unknown;
    fromPartial(object: DeepPartial<MsgChargeStructure>): MsgChargeStructure;
};
export declare const MsgChargeStructureResponse: {
    encode(message: MsgChargeStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgChargeStructureResponse;
    fromJSON(object: any): MsgChargeStructureResponse;
    toJSON(message: MsgChargeStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgChargeStructureResponse>): MsgChargeStructureResponse;
};
export declare const MsgTransferStructure: {
    encode(message: MsgTransferStructure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferStructure;
    fromJSON(object: any): MsgTransferStructure;
    toJSON(message: MsgTransferStructure): unknown;
    fromPartial(object: DeepPartial<MsgTransferStructure>): MsgTransferStructure;
};
export declare const MsgTransferStructureResponse: {
    encode(message: MsgTransferStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTransferStructureResponse;
    fromJSON(object: any): MsgTransferStructureResponse;
    toJSON(message: MsgTransferStructureResponse): unknown;
    fromPartial(object: DeepPartial<MsgTransferStructureResponse>): MsgTransferStructureResponse;
};
export declare const MsgStructureChargeSlot: {
    encode(message: MsgStructureChargeSlot, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgStructureChargeSlot;
    fromJSON(object: any): MsgStructureChargeSlot;
    toJSON(message: MsgStructureChargeSlot): unknown;
    fromPartial(object: DeepPartial<MsgStructureChargeSlot>): MsgStructureChargeSlot;
};
export declare const MsgStructureChargeSlotResponse: {
    encode(message: MsgStructureChargeSlotResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgStructureChargeSlotResponse;
    fromJSON(object: any): MsgStructureChargeSlotResponse;
    toJSON(message: MsgStructureChargeSlotResponse): unknown;
    fromPartial(object: DeepPartial<MsgStructureChargeSlotResponse>): MsgStructureChargeSlotResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateReactor(request: MsgCreateReactor): Promise<MsgCreateReactorResponse>;
    UpdateReactor(request: MsgUpdateReactor): Promise<MsgUpdateReactorResponse>;
    DeleteReactor(request: MsgDeleteReactor): Promise<MsgDeleteReactorResponse>;
    UpdateInstance(request: MsgUpdateInstance): Promise<MsgUpdateInstanceResponse>;
    UpdateInstanceName(request: MsgUpdateInstanceName): Promise<MsgUpdateInstanceResponse>;
    UpdateInstanceMood(request: MsgUpdateInstanceMood): Promise<MsgUpdateInstanceResponse>;
    CreateStructure(request: MsgCreateStructure): Promise<MsgCreateStructureResponse>;
    UpdateStructure(request: MsgUpdateStructure): Promise<MsgUpdateStructureResponse>;
    DeleteStructure(request: MsgDeleteStructure): Promise<MsgDeleteStructureResponse>;
    AttackStructure(request: MsgAttackStructure): Promise<MsgAttackStructureResponse>;
    DrainStructure(request: MsgDrainStructure): Promise<MsgDrainStructureResponse>;
    RepairStructure(request: MsgRepairStructure): Promise<MsgRepairStructureResponse>;
    ConnectStructure(request: MsgConnectStructure): Promise<MsgConnectStructureResponse>;
    ChargeStructure(request: MsgChargeStructure): Promise<MsgChargeStructureResponse>;
    TransferStructure(request: MsgTransferStructure): Promise<MsgTransferStructureResponse>;
    StructureChargeSlot(request: MsgStructureChargeSlot): Promise<MsgStructureChargeSlotResponse>;
    CreateSchematic(request: MsgCreateSchematic): Promise<MsgCreateSchematicResponse>;
    UpdateSchematic(request: MsgUpdateSchematic): Promise<MsgUpdateSchematicResponse>;
    DeleteSchematic(request: MsgDeleteSchematic): Promise<MsgDeleteSchematicResponse>;
    TransferSchematic(request: MsgTransferSchematic): Promise<MsgTransferSchematicResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateReactor(request: MsgCreateReactor): Promise<MsgCreateReactorResponse>;
    UpdateReactor(request: MsgUpdateReactor): Promise<MsgUpdateReactorResponse>;
    DeleteReactor(request: MsgDeleteReactor): Promise<MsgDeleteReactorResponse>;
    UpdateInstance(request: MsgUpdateInstance): Promise<MsgUpdateInstanceResponse>;
    UpdateInstanceName(request: MsgUpdateInstanceName): Promise<MsgUpdateInstanceResponse>;
    UpdateInstanceMood(request: MsgUpdateInstanceMood): Promise<MsgUpdateInstanceResponse>;
    CreateStructure(request: MsgCreateStructure): Promise<MsgCreateStructureResponse>;
    UpdateStructure(request: MsgUpdateStructure): Promise<MsgUpdateStructureResponse>;
    DeleteStructure(request: MsgDeleteStructure): Promise<MsgDeleteStructureResponse>;
    AttackStructure(request: MsgAttackStructure): Promise<MsgAttackStructureResponse>;
    DrainStructure(request: MsgDrainStructure): Promise<MsgDrainStructureResponse>;
    RepairStructure(request: MsgRepairStructure): Promise<MsgRepairStructureResponse>;
    ConnectStructure(request: MsgConnectStructure): Promise<MsgConnectStructureResponse>;
    ChargeStructure(request: MsgChargeStructure): Promise<MsgChargeStructureResponse>;
    TransferStructure(request: MsgTransferStructure): Promise<MsgTransferStructureResponse>;
    StructureChargeSlot(request: MsgStructureChargeSlot): Promise<MsgStructureChargeSlotResponse>;
    CreateSchematic(request: MsgCreateSchematic): Promise<MsgCreateSchematicResponse>;
    UpdateSchematic(request: MsgUpdateSchematic): Promise<MsgUpdateSchematicResponse>;
    DeleteSchematic(request: MsgDeleteSchematic): Promise<MsgDeleteSchematicResponse>;
    TransferSchematic(request: MsgTransferSchematic): Promise<MsgTransferSchematicResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
