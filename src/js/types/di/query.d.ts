import { Reader, Writer } from "protobufjs/minimal";
import { Reactor } from "../di/Reactor";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Instance } from "../di/Instance";
import { Structure } from "../di/Structure";
import { Schematic } from "../di/Schematic";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "di";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetReactorRequest {
    id: number;
}
export interface QueryGetReactorResponse {
    Reactor: Reactor | undefined;
}
export interface QueryAllReactorRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllReactorResponse {
    Reactor: Reactor[];
    pagination: PageResponse | undefined;
}
export interface QueryGetInstanceRequest {
    address: string;
}
export interface QueryGetInstanceResponse {
    Instance: Instance | undefined;
}
export interface QueryAllInstanceRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllInstanceResponse {
    Instance: Instance[];
    pagination: PageResponse | undefined;
}
export interface QuerySearchInstanceRequest {
    pagination: PageRequest | undefined;
    query: string;
}
export interface QueryGetStructureRequest {
    id: number;
}
export interface QueryGetStructureResponse {
    Structure: Structure | undefined;
}
export interface QueryAllStructureRequest {
    pagination: PageRequest | undefined;
}
export interface QueryCreatorStructureRequest {
    pagination: PageRequest | undefined;
    creator: string;
}
export interface QuerySearchStructureRequest {
    pagination: PageRequest | undefined;
    query: string;
}
export interface QuerySearchPerformingStructureRequest {
    pagination: PageRequest | undefined;
    query: string;
    actionType: string;
    target: string;
    instance: string;
}
export interface QuerySearchTargetingStructureRequest {
    pagination: PageRequest | undefined;
    query: string;
    actionType: string;
    performing: number;
}
export interface QueryAllStructureResponse {
    Structure: Structure[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSchematicRequest {
    id: number;
    hash: string;
    creator: string;
}
export interface QueryGetSchematicResponse {
    Schematic: Schematic | undefined;
}
export interface QueryAllSchematicRequest {
    pagination: PageRequest | undefined;
}
export interface QuerySearchSchematicRequest {
    pagination: PageRequest | undefined;
    query: string;
}
export interface QuerySearchSchematicByStructureRequest {
    pagination: PageRequest | undefined;
    structureId: number;
    query: string;
}
export interface QueryCreatorSchematicRequest {
    pagination: PageRequest | undefined;
    creator: string;
}
export interface QueryAllSchematicResponse {
    Schematic: Schematic[];
    pagination: PageResponse | undefined;
}
export interface QueryWattUnderManagementRequest {
    creator: string;
}
export interface QueryWattUnderManagementResponse {
    creator: string;
    wattUnderManagement: Coin | undefined;
    name: string;
    mood: string;
}
export interface QueryAllWattUnderManagementRequest {
}
export interface QueryAllWattUnderManagementResponse {
    wattUnderManagement: QueryWattUnderManagementResponse[];
}
export declare const QueryGetReactorRequest: {
    encode(message: QueryGetReactorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReactorRequest;
    fromJSON(object: any): QueryGetReactorRequest;
    toJSON(message: QueryGetReactorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetReactorRequest>): QueryGetReactorRequest;
};
export declare const QueryGetReactorResponse: {
    encode(message: QueryGetReactorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetReactorResponse;
    fromJSON(object: any): QueryGetReactorResponse;
    toJSON(message: QueryGetReactorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetReactorResponse>): QueryGetReactorResponse;
};
export declare const QueryAllReactorRequest: {
    encode(message: QueryAllReactorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReactorRequest;
    fromJSON(object: any): QueryAllReactorRequest;
    toJSON(message: QueryAllReactorRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllReactorRequest>): QueryAllReactorRequest;
};
export declare const QueryAllReactorResponse: {
    encode(message: QueryAllReactorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllReactorResponse;
    fromJSON(object: any): QueryAllReactorResponse;
    toJSON(message: QueryAllReactorResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllReactorResponse>): QueryAllReactorResponse;
};
export declare const QueryGetInstanceRequest: {
    encode(message: QueryGetInstanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceRequest;
    fromJSON(object: any): QueryGetInstanceRequest;
    toJSON(message: QueryGetInstanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetInstanceRequest>): QueryGetInstanceRequest;
};
export declare const QueryGetInstanceResponse: {
    encode(message: QueryGetInstanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceResponse;
    fromJSON(object: any): QueryGetInstanceResponse;
    toJSON(message: QueryGetInstanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetInstanceResponse>): QueryGetInstanceResponse;
};
export declare const QueryAllInstanceRequest: {
    encode(message: QueryAllInstanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceRequest;
    fromJSON(object: any): QueryAllInstanceRequest;
    toJSON(message: QueryAllInstanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllInstanceRequest>): QueryAllInstanceRequest;
};
export declare const QueryAllInstanceResponse: {
    encode(message: QueryAllInstanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceResponse;
    fromJSON(object: any): QueryAllInstanceResponse;
    toJSON(message: QueryAllInstanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllInstanceResponse>): QueryAllInstanceResponse;
};
export declare const QuerySearchInstanceRequest: {
    encode(message: QuerySearchInstanceRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySearchInstanceRequest;
    fromJSON(object: any): QuerySearchInstanceRequest;
    toJSON(message: QuerySearchInstanceRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchInstanceRequest>): QuerySearchInstanceRequest;
};
export declare const QueryGetStructureRequest: {
    encode(message: QueryGetStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStructureRequest;
    fromJSON(object: any): QueryGetStructureRequest;
    toJSON(message: QueryGetStructureRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetStructureRequest>): QueryGetStructureRequest;
};
export declare const QueryGetStructureResponse: {
    encode(message: QueryGetStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStructureResponse;
    fromJSON(object: any): QueryGetStructureResponse;
    toJSON(message: QueryGetStructureResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetStructureResponse>): QueryGetStructureResponse;
};
export declare const QueryAllStructureRequest: {
    encode(message: QueryAllStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStructureRequest;
    fromJSON(object: any): QueryAllStructureRequest;
    toJSON(message: QueryAllStructureRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllStructureRequest>): QueryAllStructureRequest;
};
export declare const QueryCreatorStructureRequest: {
    encode(message: QueryCreatorStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCreatorStructureRequest;
    fromJSON(object: any): QueryCreatorStructureRequest;
    toJSON(message: QueryCreatorStructureRequest): unknown;
    fromPartial(object: DeepPartial<QueryCreatorStructureRequest>): QueryCreatorStructureRequest;
};
export declare const QuerySearchStructureRequest: {
    encode(message: QuerySearchStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySearchStructureRequest;
    fromJSON(object: any): QuerySearchStructureRequest;
    toJSON(message: QuerySearchStructureRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchStructureRequest>): QuerySearchStructureRequest;
};
export declare const QuerySearchPerformingStructureRequest: {
    encode(message: QuerySearchPerformingStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySearchPerformingStructureRequest;
    fromJSON(object: any): QuerySearchPerformingStructureRequest;
    toJSON(message: QuerySearchPerformingStructureRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchPerformingStructureRequest>): QuerySearchPerformingStructureRequest;
};
export declare const QuerySearchTargetingStructureRequest: {
    encode(message: QuerySearchTargetingStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySearchTargetingStructureRequest;
    fromJSON(object: any): QuerySearchTargetingStructureRequest;
    toJSON(message: QuerySearchTargetingStructureRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchTargetingStructureRequest>): QuerySearchTargetingStructureRequest;
};
export declare const QueryAllStructureResponse: {
    encode(message: QueryAllStructureResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStructureResponse;
    fromJSON(object: any): QueryAllStructureResponse;
    toJSON(message: QueryAllStructureResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllStructureResponse>): QueryAllStructureResponse;
};
export declare const QueryGetSchematicRequest: {
    encode(message: QueryGetSchematicRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchematicRequest;
    fromJSON(object: any): QueryGetSchematicRequest;
    toJSON(message: QueryGetSchematicRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSchematicRequest>): QueryGetSchematicRequest;
};
export declare const QueryGetSchematicResponse: {
    encode(message: QueryGetSchematicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchematicResponse;
    fromJSON(object: any): QueryGetSchematicResponse;
    toJSON(message: QueryGetSchematicResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSchematicResponse>): QueryGetSchematicResponse;
};
export declare const QueryAllSchematicRequest: {
    encode(message: QueryAllSchematicRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSchematicRequest;
    fromJSON(object: any): QueryAllSchematicRequest;
    toJSON(message: QueryAllSchematicRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSchematicRequest>): QueryAllSchematicRequest;
};
export declare const QuerySearchSchematicRequest: {
    encode(message: QuerySearchSchematicRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySearchSchematicRequest;
    fromJSON(object: any): QuerySearchSchematicRequest;
    toJSON(message: QuerySearchSchematicRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchSchematicRequest>): QuerySearchSchematicRequest;
};
export declare const QuerySearchSchematicByStructureRequest: {
    encode(message: QuerySearchSchematicByStructureRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QuerySearchSchematicByStructureRequest;
    fromJSON(object: any): QuerySearchSchematicByStructureRequest;
    toJSON(message: QuerySearchSchematicByStructureRequest): unknown;
    fromPartial(object: DeepPartial<QuerySearchSchematicByStructureRequest>): QuerySearchSchematicByStructureRequest;
};
export declare const QueryCreatorSchematicRequest: {
    encode(message: QueryCreatorSchematicRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryCreatorSchematicRequest;
    fromJSON(object: any): QueryCreatorSchematicRequest;
    toJSON(message: QueryCreatorSchematicRequest): unknown;
    fromPartial(object: DeepPartial<QueryCreatorSchematicRequest>): QueryCreatorSchematicRequest;
};
export declare const QueryAllSchematicResponse: {
    encode(message: QueryAllSchematicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSchematicResponse;
    fromJSON(object: any): QueryAllSchematicResponse;
    toJSON(message: QueryAllSchematicResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSchematicResponse>): QueryAllSchematicResponse;
};
export declare const QueryWattUnderManagementRequest: {
    encode(message: QueryWattUnderManagementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryWattUnderManagementRequest;
    fromJSON(object: any): QueryWattUnderManagementRequest;
    toJSON(message: QueryWattUnderManagementRequest): unknown;
    fromPartial(object: DeepPartial<QueryWattUnderManagementRequest>): QueryWattUnderManagementRequest;
};
export declare const QueryWattUnderManagementResponse: {
    encode(message: QueryWattUnderManagementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryWattUnderManagementResponse;
    fromJSON(object: any): QueryWattUnderManagementResponse;
    toJSON(message: QueryWattUnderManagementResponse): unknown;
    fromPartial(object: DeepPartial<QueryWattUnderManagementResponse>): QueryWattUnderManagementResponse;
};
export declare const QueryAllWattUnderManagementRequest: {
    encode(_: QueryAllWattUnderManagementRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWattUnderManagementRequest;
    fromJSON(_: any): QueryAllWattUnderManagementRequest;
    toJSON(_: QueryAllWattUnderManagementRequest): unknown;
    fromPartial(_: DeepPartial<QueryAllWattUnderManagementRequest>): QueryAllWattUnderManagementRequest;
};
export declare const QueryAllWattUnderManagementResponse: {
    encode(message: QueryAllWattUnderManagementResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWattUnderManagementResponse;
    fromJSON(object: any): QueryAllWattUnderManagementResponse;
    toJSON(message: QueryAllWattUnderManagementResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllWattUnderManagementResponse>): QueryAllWattUnderManagementResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Reactor(request: QueryGetReactorRequest): Promise<QueryGetReactorResponse>;
    ReactorAll(request: QueryAllReactorRequest): Promise<QueryAllReactorResponse>;
    Instance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse>;
    InstanceAll(request: QueryAllInstanceRequest): Promise<QueryAllInstanceResponse>;
    InstanceSearch(request: QuerySearchInstanceRequest): Promise<QueryAllInstanceResponse>;
    Structure(request: QueryGetStructureRequest): Promise<QueryGetStructureResponse>;
    StructureAll(request: QueryAllStructureRequest): Promise<QueryAllStructureResponse>;
    StructureByCreator(request: QueryCreatorStructureRequest): Promise<QueryAllStructureResponse>;
    StructureSearch(request: QuerySearchStructureRequest): Promise<QueryAllStructureResponse>;
    StructureSearchForPerforming(request: QuerySearchPerformingStructureRequest): Promise<QueryAllStructureResponse>;
    StructureSearchForTargeting(request: QuerySearchTargetingStructureRequest): Promise<QueryAllStructureResponse>;
    Schematic(request: QueryGetSchematicRequest): Promise<QueryGetSchematicResponse>;
    SchematicByHash(request: QueryGetSchematicRequest): Promise<QueryGetSchematicResponse>;
    SchematicSearch(request: QuerySearchSchematicRequest): Promise<QueryAllSchematicResponse>;
    SchematicSearchByStructure(request: QuerySearchSchematicByStructureRequest): Promise<QueryAllSchematicResponse>;
    SchematicByCreator(request: QueryCreatorSchematicRequest): Promise<QueryAllSchematicResponse>;
    WattUnderManagement(request: QueryWattUnderManagementRequest): Promise<QueryWattUnderManagementResponse>;
    AllWattUnderManagement(request: QueryAllWattUnderManagementRequest): Promise<QueryAllWattUnderManagementResponse>;
    SchematicAll(request: QueryAllSchematicRequest): Promise<QueryAllSchematicResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Reactor(request: QueryGetReactorRequest): Promise<QueryGetReactorResponse>;
    ReactorAll(request: QueryAllReactorRequest): Promise<QueryAllReactorResponse>;
    Instance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse>;
    InstanceAll(request: QueryAllInstanceRequest): Promise<QueryAllInstanceResponse>;
    InstanceSearch(request: QuerySearchInstanceRequest): Promise<QueryAllInstanceResponse>;
    Structure(request: QueryGetStructureRequest): Promise<QueryGetStructureResponse>;
    StructureAll(request: QueryAllStructureRequest): Promise<QueryAllStructureResponse>;
    StructureByCreator(request: QueryCreatorStructureRequest): Promise<QueryAllStructureResponse>;
    StructureSearch(request: QuerySearchStructureRequest): Promise<QueryAllStructureResponse>;
    StructureSearchForPerforming(request: QuerySearchPerformingStructureRequest): Promise<QueryAllStructureResponse>;
    StructureSearchForTargeting(request: QuerySearchTargetingStructureRequest): Promise<QueryAllStructureResponse>;
    Schematic(request: QueryGetSchematicRequest): Promise<QueryGetSchematicResponse>;
    SchematicByHash(request: QueryGetSchematicRequest): Promise<QueryGetSchematicResponse>;
    SchematicSearch(request: QuerySearchSchematicRequest): Promise<QueryAllSchematicResponse>;
    SchematicSearchByStructure(request: QuerySearchSchematicByStructureRequest): Promise<QueryAllSchematicResponse>;
    SchematicByCreator(request: QueryCreatorSchematicRequest): Promise<QueryAllSchematicResponse>;
    WattUnderManagement(request: QueryWattUnderManagementRequest): Promise<QueryWattUnderManagementResponse>;
    AllWattUnderManagement(request: QueryAllWattUnderManagementRequest): Promise<QueryAllWattUnderManagementResponse>;
    SchematicAll(request: QueryAllSchematicRequest): Promise<QueryAllSchematicResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
