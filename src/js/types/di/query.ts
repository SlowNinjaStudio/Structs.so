/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Reactor } from "./Reactor";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";
import { Instance } from "./Instance";
import { Structure } from "./Structure";
import { Schematic } from "./Schematic";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "di";

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

export interface QueryAllWattUnderManagementRequest {}

export interface QueryAllWattUnderManagementResponse {
  wattUnderManagement: QueryWattUnderManagementResponse[];
}

const baseQueryGetReactorRequest: object = { id: 0 };

export const QueryGetReactorRequest = {
  encode(
    message: QueryGetReactorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReactorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetReactorRequest } as QueryGetReactorRequest;
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

  fromJSON(object: any): QueryGetReactorRequest {
    const message = { ...baseQueryGetReactorRequest } as QueryGetReactorRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetReactorRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReactorRequest>
  ): QueryGetReactorRequest {
    const message = { ...baseQueryGetReactorRequest } as QueryGetReactorRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetReactorResponse: object = {};

export const QueryGetReactorResponse = {
  encode(
    message: QueryGetReactorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Reactor !== undefined) {
      Reactor.encode(message.Reactor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetReactorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReactorResponse,
    } as QueryGetReactorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Reactor = Reactor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReactorResponse {
    const message = {
      ...baseQueryGetReactorResponse,
    } as QueryGetReactorResponse;
    if (object.Reactor !== undefined && object.Reactor !== null) {
      message.Reactor = Reactor.fromJSON(object.Reactor);
    } else {
      message.Reactor = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetReactorResponse): unknown {
    const obj: any = {};
    message.Reactor !== undefined &&
      (obj.Reactor = message.Reactor
        ? Reactor.toJSON(message.Reactor)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReactorResponse>
  ): QueryGetReactorResponse {
    const message = {
      ...baseQueryGetReactorResponse,
    } as QueryGetReactorResponse;
    if (object.Reactor !== undefined && object.Reactor !== null) {
      message.Reactor = Reactor.fromPartial(object.Reactor);
    } else {
      message.Reactor = undefined;
    }
    return message;
  },
};

const baseQueryAllReactorRequest: object = {};

export const QueryAllReactorRequest = {
  encode(
    message: QueryAllReactorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReactorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllReactorRequest } as QueryAllReactorRequest;
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

  fromJSON(object: any): QueryAllReactorRequest {
    const message = { ...baseQueryAllReactorRequest } as QueryAllReactorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllReactorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllReactorRequest>
  ): QueryAllReactorRequest {
    const message = { ...baseQueryAllReactorRequest } as QueryAllReactorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllReactorResponse: object = {};

export const QueryAllReactorResponse = {
  encode(
    message: QueryAllReactorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Reactor) {
      Reactor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllReactorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllReactorResponse,
    } as QueryAllReactorResponse;
    message.Reactor = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Reactor.push(Reactor.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllReactorResponse {
    const message = {
      ...baseQueryAllReactorResponse,
    } as QueryAllReactorResponse;
    message.Reactor = [];
    if (object.Reactor !== undefined && object.Reactor !== null) {
      for (const e of object.Reactor) {
        message.Reactor.push(Reactor.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllReactorResponse): unknown {
    const obj: any = {};
    if (message.Reactor) {
      obj.Reactor = message.Reactor.map((e) =>
        e ? Reactor.toJSON(e) : undefined
      );
    } else {
      obj.Reactor = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllReactorResponse>
  ): QueryAllReactorResponse {
    const message = {
      ...baseQueryAllReactorResponse,
    } as QueryAllReactorResponse;
    message.Reactor = [];
    if (object.Reactor !== undefined && object.Reactor !== null) {
      for (const e of object.Reactor) {
        message.Reactor.push(Reactor.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetInstanceRequest: object = { address: "" };

export const QueryGetInstanceRequest = {
  encode(
    message: QueryGetInstanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetInstanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInstanceRequest,
    } as QueryGetInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInstanceRequest {
    const message = {
      ...baseQueryGetInstanceRequest,
    } as QueryGetInstanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryGetInstanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInstanceRequest>
  ): QueryGetInstanceRequest {
    const message = {
      ...baseQueryGetInstanceRequest,
    } as QueryGetInstanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryGetInstanceResponse: object = {};

export const QueryGetInstanceResponse = {
  encode(
    message: QueryGetInstanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Instance !== undefined) {
      Instance.encode(message.Instance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetInstanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetInstanceResponse,
    } as QueryGetInstanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Instance = Instance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetInstanceResponse {
    const message = {
      ...baseQueryGetInstanceResponse,
    } as QueryGetInstanceResponse;
    if (object.Instance !== undefined && object.Instance !== null) {
      message.Instance = Instance.fromJSON(object.Instance);
    } else {
      message.Instance = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetInstanceResponse): unknown {
    const obj: any = {};
    message.Instance !== undefined &&
      (obj.Instance = message.Instance
        ? Instance.toJSON(message.Instance)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetInstanceResponse>
  ): QueryGetInstanceResponse {
    const message = {
      ...baseQueryGetInstanceResponse,
    } as QueryGetInstanceResponse;
    if (object.Instance !== undefined && object.Instance !== null) {
      message.Instance = Instance.fromPartial(object.Instance);
    } else {
      message.Instance = undefined;
    }
    return message;
  },
};

const baseQueryAllInstanceRequest: object = {};

export const QueryAllInstanceRequest = {
  encode(
    message: QueryAllInstanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllInstanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInstanceRequest,
    } as QueryAllInstanceRequest;
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

  fromJSON(object: any): QueryAllInstanceRequest {
    const message = {
      ...baseQueryAllInstanceRequest,
    } as QueryAllInstanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInstanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInstanceRequest>
  ): QueryAllInstanceRequest {
    const message = {
      ...baseQueryAllInstanceRequest,
    } as QueryAllInstanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllInstanceResponse: object = {};

export const QueryAllInstanceResponse = {
  encode(
    message: QueryAllInstanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Instance) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllInstanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllInstanceResponse,
    } as QueryAllInstanceResponse;
    message.Instance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Instance.push(Instance.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllInstanceResponse {
    const message = {
      ...baseQueryAllInstanceResponse,
    } as QueryAllInstanceResponse;
    message.Instance = [];
    if (object.Instance !== undefined && object.Instance !== null) {
      for (const e of object.Instance) {
        message.Instance.push(Instance.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllInstanceResponse): unknown {
    const obj: any = {};
    if (message.Instance) {
      obj.Instance = message.Instance.map((e) =>
        e ? Instance.toJSON(e) : undefined
      );
    } else {
      obj.Instance = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllInstanceResponse>
  ): QueryAllInstanceResponse {
    const message = {
      ...baseQueryAllInstanceResponse,
    } as QueryAllInstanceResponse;
    message.Instance = [];
    if (object.Instance !== undefined && object.Instance !== null) {
      for (const e of object.Instance) {
        message.Instance.push(Instance.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySearchInstanceRequest: object = { query: "" };

export const QuerySearchInstanceRequest = {
  encode(
    message: QuerySearchInstanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchInstanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchInstanceRequest,
    } as QuerySearchInstanceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchInstanceRequest {
    const message = {
      ...baseQuerySearchInstanceRequest,
    } as QuerySearchInstanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    return message;
  },

  toJSON(message: QuerySearchInstanceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchInstanceRequest>
  ): QuerySearchInstanceRequest {
    const message = {
      ...baseQuerySearchInstanceRequest,
    } as QuerySearchInstanceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
};

const baseQueryGetStructureRequest: object = { id: 0 };

export const QueryGetStructureRequest = {
  encode(
    message: QueryGetStructureRequest,
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
  ): QueryGetStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStructureRequest,
    } as QueryGetStructureRequest;
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

  fromJSON(object: any): QueryGetStructureRequest {
    const message = {
      ...baseQueryGetStructureRequest,
    } as QueryGetStructureRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetStructureRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStructureRequest>
  ): QueryGetStructureRequest {
    const message = {
      ...baseQueryGetStructureRequest,
    } as QueryGetStructureRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetStructureResponse: object = {};

export const QueryGetStructureResponse = {
  encode(
    message: QueryGetStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Structure !== undefined) {
      Structure.encode(message.Structure, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetStructureResponse,
    } as QueryGetStructureResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Structure = Structure.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStructureResponse {
    const message = {
      ...baseQueryGetStructureResponse,
    } as QueryGetStructureResponse;
    if (object.Structure !== undefined && object.Structure !== null) {
      message.Structure = Structure.fromJSON(object.Structure);
    } else {
      message.Structure = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStructureResponse): unknown {
    const obj: any = {};
    message.Structure !== undefined &&
      (obj.Structure = message.Structure
        ? Structure.toJSON(message.Structure)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStructureResponse>
  ): QueryGetStructureResponse {
    const message = {
      ...baseQueryGetStructureResponse,
    } as QueryGetStructureResponse;
    if (object.Structure !== undefined && object.Structure !== null) {
      message.Structure = Structure.fromPartial(object.Structure);
    } else {
      message.Structure = undefined;
    }
    return message;
  },
};

const baseQueryAllStructureRequest: object = {};

export const QueryAllStructureRequest = {
  encode(
    message: QueryAllStructureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStructureRequest,
    } as QueryAllStructureRequest;
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

  fromJSON(object: any): QueryAllStructureRequest {
    const message = {
      ...baseQueryAllStructureRequest,
    } as QueryAllStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStructureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStructureRequest>
  ): QueryAllStructureRequest {
    const message = {
      ...baseQueryAllStructureRequest,
    } as QueryAllStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCreatorStructureRequest: object = { creator: "" };

export const QueryCreatorStructureRequest = {
  encode(
    message: QueryCreatorStructureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCreatorStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCreatorStructureRequest,
    } as QueryCreatorStructureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCreatorStructureRequest {
    const message = {
      ...baseQueryCreatorStructureRequest,
    } as QueryCreatorStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryCreatorStructureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCreatorStructureRequest>
  ): QueryCreatorStructureRequest {
    const message = {
      ...baseQueryCreatorStructureRequest,
    } as QueryCreatorStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQuerySearchStructureRequest: object = { query: "" };

export const QuerySearchStructureRequest = {
  encode(
    message: QuerySearchStructureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchStructureRequest,
    } as QuerySearchStructureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchStructureRequest {
    const message = {
      ...baseQuerySearchStructureRequest,
    } as QuerySearchStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    return message;
  },

  toJSON(message: QuerySearchStructureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchStructureRequest>
  ): QuerySearchStructureRequest {
    const message = {
      ...baseQuerySearchStructureRequest,
    } as QuerySearchStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
};

const baseQuerySearchPerformingStructureRequest: object = {
  query: "",
  actionType: "",
  target: "",
  instance: "",
};

export const QuerySearchPerformingStructureRequest = {
  encode(
    message: QuerySearchPerformingStructureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.actionType !== "") {
      writer.uint32(26).string(message.actionType);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    if (message.instance !== "") {
      writer.uint32(42).string(message.instance);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchPerformingStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchPerformingStructureRequest,
    } as QuerySearchPerformingStructureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.actionType = reader.string();
          break;
        case 4:
          message.target = reader.string();
          break;
        case 5:
          message.instance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchPerformingStructureRequest {
    const message = {
      ...baseQuerySearchPerformingStructureRequest,
    } as QuerySearchPerformingStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    if (object.actionType !== undefined && object.actionType !== null) {
      message.actionType = String(object.actionType);
    } else {
      message.actionType = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    if (object.instance !== undefined && object.instance !== null) {
      message.instance = String(object.instance);
    } else {
      message.instance = "";
    }
    return message;
  },

  toJSON(message: QuerySearchPerformingStructureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.query !== undefined && (obj.query = message.query);
    message.actionType !== undefined && (obj.actionType = message.actionType);
    message.target !== undefined && (obj.target = message.target);
    message.instance !== undefined && (obj.instance = message.instance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchPerformingStructureRequest>
  ): QuerySearchPerformingStructureRequest {
    const message = {
      ...baseQuerySearchPerformingStructureRequest,
    } as QuerySearchPerformingStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    if (object.actionType !== undefined && object.actionType !== null) {
      message.actionType = object.actionType;
    } else {
      message.actionType = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    if (object.instance !== undefined && object.instance !== null) {
      message.instance = object.instance;
    } else {
      message.instance = "";
    }
    return message;
  },
};

const baseQuerySearchTargetingStructureRequest: object = {
  query: "",
  actionType: "",
  performing: 0,
};

export const QuerySearchTargetingStructureRequest = {
  encode(
    message: QuerySearchTargetingStructureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    if (message.actionType !== "") {
      writer.uint32(26).string(message.actionType);
    }
    if (message.performing !== 0) {
      writer.uint32(32).uint64(message.performing);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchTargetingStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchTargetingStructureRequest,
    } as QuerySearchTargetingStructureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = reader.string();
          break;
        case 3:
          message.actionType = reader.string();
          break;
        case 4:
          message.performing = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchTargetingStructureRequest {
    const message = {
      ...baseQuerySearchTargetingStructureRequest,
    } as QuerySearchTargetingStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    if (object.actionType !== undefined && object.actionType !== null) {
      message.actionType = String(object.actionType);
    } else {
      message.actionType = "";
    }
    if (object.performing !== undefined && object.performing !== null) {
      message.performing = Number(object.performing);
    } else {
      message.performing = 0;
    }
    return message;
  },

  toJSON(message: QuerySearchTargetingStructureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.query !== undefined && (obj.query = message.query);
    message.actionType !== undefined && (obj.actionType = message.actionType);
    message.performing !== undefined && (obj.performing = message.performing);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchTargetingStructureRequest>
  ): QuerySearchTargetingStructureRequest {
    const message = {
      ...baseQuerySearchTargetingStructureRequest,
    } as QuerySearchTargetingStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    if (object.actionType !== undefined && object.actionType !== null) {
      message.actionType = object.actionType;
    } else {
      message.actionType = "";
    }
    if (object.performing !== undefined && object.performing !== null) {
      message.performing = object.performing;
    } else {
      message.performing = 0;
    }
    return message;
  },
};

const baseQueryAllStructureResponse: object = {};

export const QueryAllStructureResponse = {
  encode(
    message: QueryAllStructureResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Structure) {
      Structure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllStructureResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllStructureResponse,
    } as QueryAllStructureResponse;
    message.Structure = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Structure.push(Structure.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStructureResponse {
    const message = {
      ...baseQueryAllStructureResponse,
    } as QueryAllStructureResponse;
    message.Structure = [];
    if (object.Structure !== undefined && object.Structure !== null) {
      for (const e of object.Structure) {
        message.Structure.push(Structure.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStructureResponse): unknown {
    const obj: any = {};
    if (message.Structure) {
      obj.Structure = message.Structure.map((e) =>
        e ? Structure.toJSON(e) : undefined
      );
    } else {
      obj.Structure = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStructureResponse>
  ): QueryAllStructureResponse {
    const message = {
      ...baseQueryAllStructureResponse,
    } as QueryAllStructureResponse;
    message.Structure = [];
    if (object.Structure !== undefined && object.Structure !== null) {
      for (const e of object.Structure) {
        message.Structure.push(Structure.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSchematicRequest: object = { id: 0, hash: "", creator: "" };

export const QueryGetSchematicRequest = {
  encode(
    message: QueryGetSchematicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSchematicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSchematicRequest,
    } as QueryGetSchematicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSchematicRequest {
    const message = {
      ...baseQueryGetSchematicRequest,
    } as QueryGetSchematicRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryGetSchematicRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.hash !== undefined && (obj.hash = message.hash);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSchematicRequest>
  ): QueryGetSchematicRequest {
    const message = {
      ...baseQueryGetSchematicRequest,
    } as QueryGetSchematicRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQueryGetSchematicResponse: object = {};

export const QueryGetSchematicResponse = {
  encode(
    message: QueryGetSchematicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Schematic !== undefined) {
      Schematic.encode(message.Schematic, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSchematicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSchematicResponse,
    } as QueryGetSchematicResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Schematic = Schematic.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSchematicResponse {
    const message = {
      ...baseQueryGetSchematicResponse,
    } as QueryGetSchematicResponse;
    if (object.Schematic !== undefined && object.Schematic !== null) {
      message.Schematic = Schematic.fromJSON(object.Schematic);
    } else {
      message.Schematic = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSchematicResponse): unknown {
    const obj: any = {};
    message.Schematic !== undefined &&
      (obj.Schematic = message.Schematic
        ? Schematic.toJSON(message.Schematic)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSchematicResponse>
  ): QueryGetSchematicResponse {
    const message = {
      ...baseQueryGetSchematicResponse,
    } as QueryGetSchematicResponse;
    if (object.Schematic !== undefined && object.Schematic !== null) {
      message.Schematic = Schematic.fromPartial(object.Schematic);
    } else {
      message.Schematic = undefined;
    }
    return message;
  },
};

const baseQueryAllSchematicRequest: object = {};

export const QueryAllSchematicRequest = {
  encode(
    message: QueryAllSchematicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSchematicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSchematicRequest,
    } as QueryAllSchematicRequest;
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

  fromJSON(object: any): QueryAllSchematicRequest {
    const message = {
      ...baseQueryAllSchematicRequest,
    } as QueryAllSchematicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSchematicRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSchematicRequest>
  ): QueryAllSchematicRequest {
    const message = {
      ...baseQueryAllSchematicRequest,
    } as QueryAllSchematicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySearchSchematicRequest: object = { query: "" };

export const QuerySearchSchematicRequest = {
  encode(
    message: QuerySearchSchematicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.query !== "") {
      writer.uint32(18).string(message.query);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchSchematicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchSchematicRequest,
    } as QuerySearchSchematicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchSchematicRequest {
    const message = {
      ...baseQuerySearchSchematicRequest,
    } as QuerySearchSchematicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    return message;
  },

  toJSON(message: QuerySearchSchematicRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchSchematicRequest>
  ): QuerySearchSchematicRequest {
    const message = {
      ...baseQuerySearchSchematicRequest,
    } as QuerySearchSchematicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
};

const baseQuerySearchSchematicByStructureRequest: object = {
  structureId: 0,
  query: "",
};

export const QuerySearchSchematicByStructureRequest = {
  encode(
    message: QuerySearchSchematicByStructureRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.structureId !== 0) {
      writer.uint32(16).uint64(message.structureId);
    }
    if (message.query !== "") {
      writer.uint32(26).string(message.query);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchSchematicByStructureRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchSchematicByStructureRequest,
    } as QuerySearchSchematicByStructureRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.structureId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchSchematicByStructureRequest {
    const message = {
      ...baseQuerySearchSchematicByStructureRequest,
    } as QuerySearchSchematicByStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.structureId !== undefined && object.structureId !== null) {
      message.structureId = Number(object.structureId);
    } else {
      message.structureId = 0;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = String(object.query);
    } else {
      message.query = "";
    }
    return message;
  },

  toJSON(message: QuerySearchSchematicByStructureRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.structureId !== undefined &&
      (obj.structureId = message.structureId);
    message.query !== undefined && (obj.query = message.query);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchSchematicByStructureRequest>
  ): QuerySearchSchematicByStructureRequest {
    const message = {
      ...baseQuerySearchSchematicByStructureRequest,
    } as QuerySearchSchematicByStructureRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.structureId !== undefined && object.structureId !== null) {
      message.structureId = object.structureId;
    } else {
      message.structureId = 0;
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    } else {
      message.query = "";
    }
    return message;
  },
};

const baseQueryCreatorSchematicRequest: object = { creator: "" };

export const QueryCreatorSchematicRequest = {
  encode(
    message: QueryCreatorSchematicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCreatorSchematicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCreatorSchematicRequest,
    } as QueryCreatorSchematicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCreatorSchematicRequest {
    const message = {
      ...baseQueryCreatorSchematicRequest,
    } as QueryCreatorSchematicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryCreatorSchematicRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCreatorSchematicRequest>
  ): QueryCreatorSchematicRequest {
    const message = {
      ...baseQueryCreatorSchematicRequest,
    } as QueryCreatorSchematicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQueryAllSchematicResponse: object = {};

export const QueryAllSchematicResponse = {
  encode(
    message: QueryAllSchematicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Schematic) {
      Schematic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSchematicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSchematicResponse,
    } as QueryAllSchematicResponse;
    message.Schematic = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Schematic.push(Schematic.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllSchematicResponse {
    const message = {
      ...baseQueryAllSchematicResponse,
    } as QueryAllSchematicResponse;
    message.Schematic = [];
    if (object.Schematic !== undefined && object.Schematic !== null) {
      for (const e of object.Schematic) {
        message.Schematic.push(Schematic.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSchematicResponse): unknown {
    const obj: any = {};
    if (message.Schematic) {
      obj.Schematic = message.Schematic.map((e) =>
        e ? Schematic.toJSON(e) : undefined
      );
    } else {
      obj.Schematic = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSchematicResponse>
  ): QueryAllSchematicResponse {
    const message = {
      ...baseQueryAllSchematicResponse,
    } as QueryAllSchematicResponse;
    message.Schematic = [];
    if (object.Schematic !== undefined && object.Schematic !== null) {
      for (const e of object.Schematic) {
        message.Schematic.push(Schematic.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryWattUnderManagementRequest: object = { creator: "" };

export const QueryWattUnderManagementRequest = {
  encode(
    message: QueryWattUnderManagementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryWattUnderManagementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryWattUnderManagementRequest,
    } as QueryWattUnderManagementRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWattUnderManagementRequest {
    const message = {
      ...baseQueryWattUnderManagementRequest,
    } as QueryWattUnderManagementRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: QueryWattUnderManagementRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryWattUnderManagementRequest>
  ): QueryWattUnderManagementRequest {
    const message = {
      ...baseQueryWattUnderManagementRequest,
    } as QueryWattUnderManagementRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseQueryWattUnderManagementResponse: object = {
  creator: "",
  name: "",
  mood: "",
};

export const QueryWattUnderManagementResponse = {
  encode(
    message: QueryWattUnderManagementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.wattUnderManagement !== undefined) {
      Coin.encode(
        message.wattUnderManagement,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.mood !== "") {
      writer.uint32(34).string(message.mood);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryWattUnderManagementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryWattUnderManagementResponse,
    } as QueryWattUnderManagementResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.wattUnderManagement = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.mood = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWattUnderManagementResponse {
    const message = {
      ...baseQueryWattUnderManagementResponse,
    } as QueryWattUnderManagementResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.wattUnderManagement !== undefined &&
      object.wattUnderManagement !== null
    ) {
      message.wattUnderManagement = Coin.fromJSON(object.wattUnderManagement);
    } else {
      message.wattUnderManagement = undefined;
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

  toJSON(message: QueryWattUnderManagementResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.wattUnderManagement !== undefined &&
      (obj.wattUnderManagement = message.wattUnderManagement
        ? Coin.toJSON(message.wattUnderManagement)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.mood !== undefined && (obj.mood = message.mood);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryWattUnderManagementResponse>
  ): QueryWattUnderManagementResponse {
    const message = {
      ...baseQueryWattUnderManagementResponse,
    } as QueryWattUnderManagementResponse;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.wattUnderManagement !== undefined &&
      object.wattUnderManagement !== null
    ) {
      message.wattUnderManagement = Coin.fromPartial(
        object.wattUnderManagement
      );
    } else {
      message.wattUnderManagement = undefined;
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

const baseQueryAllWattUnderManagementRequest: object = {};

export const QueryAllWattUnderManagementRequest = {
  encode(
    _: QueryAllWattUnderManagementRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWattUnderManagementRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWattUnderManagementRequest,
    } as QueryAllWattUnderManagementRequest;
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

  fromJSON(_: any): QueryAllWattUnderManagementRequest {
    const message = {
      ...baseQueryAllWattUnderManagementRequest,
    } as QueryAllWattUnderManagementRequest;
    return message;
  },

  toJSON(_: QueryAllWattUnderManagementRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllWattUnderManagementRequest>
  ): QueryAllWattUnderManagementRequest {
    const message = {
      ...baseQueryAllWattUnderManagementRequest,
    } as QueryAllWattUnderManagementRequest;
    return message;
  },
};

const baseQueryAllWattUnderManagementResponse: object = {};

export const QueryAllWattUnderManagementResponse = {
  encode(
    message: QueryAllWattUnderManagementResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.wattUnderManagement) {
      QueryWattUnderManagementResponse.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllWattUnderManagementResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWattUnderManagementResponse,
    } as QueryAllWattUnderManagementResponse;
    message.wattUnderManagement = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wattUnderManagement.push(
            QueryWattUnderManagementResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWattUnderManagementResponse {
    const message = {
      ...baseQueryAllWattUnderManagementResponse,
    } as QueryAllWattUnderManagementResponse;
    message.wattUnderManagement = [];
    if (
      object.wattUnderManagement !== undefined &&
      object.wattUnderManagement !== null
    ) {
      for (const e of object.wattUnderManagement) {
        message.wattUnderManagement.push(
          QueryWattUnderManagementResponse.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: QueryAllWattUnderManagementResponse): unknown {
    const obj: any = {};
    if (message.wattUnderManagement) {
      obj.wattUnderManagement = message.wattUnderManagement.map((e) =>
        e ? QueryWattUnderManagementResponse.toJSON(e) : undefined
      );
    } else {
      obj.wattUnderManagement = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWattUnderManagementResponse>
  ): QueryAllWattUnderManagementResponse {
    const message = {
      ...baseQueryAllWattUnderManagementResponse,
    } as QueryAllWattUnderManagementResponse;
    message.wattUnderManagement = [];
    if (
      object.wattUnderManagement !== undefined &&
      object.wattUnderManagement !== null
    ) {
      for (const e of object.wattUnderManagement) {
        message.wattUnderManagement.push(
          QueryWattUnderManagementResponse.fromPartial(e)
        );
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Reactor(request: QueryGetReactorRequest): Promise<QueryGetReactorResponse>;
  ReactorAll(request: QueryAllReactorRequest): Promise<QueryAllReactorResponse>;
  Instance(request: QueryGetInstanceRequest): Promise<QueryGetInstanceResponse>;
  InstanceAll(
    request: QueryAllInstanceRequest
  ): Promise<QueryAllInstanceResponse>;
  InstanceSearch(
    request: QuerySearchInstanceRequest
  ): Promise<QueryAllInstanceResponse>;
  Structure(
    request: QueryGetStructureRequest
  ): Promise<QueryGetStructureResponse>;
  StructureAll(
    request: QueryAllStructureRequest
  ): Promise<QueryAllStructureResponse>;
  StructureByCreator(
    request: QueryCreatorStructureRequest
  ): Promise<QueryAllStructureResponse>;
  StructureSearch(
    request: QuerySearchStructureRequest
  ): Promise<QueryAllStructureResponse>;
  StructureSearchForPerforming(
    request: QuerySearchPerformingStructureRequest
  ): Promise<QueryAllStructureResponse>;
  StructureSearchForTargeting(
    request: QuerySearchTargetingStructureRequest
  ): Promise<QueryAllStructureResponse>;
  Schematic(
    request: QueryGetSchematicRequest
  ): Promise<QueryGetSchematicResponse>;
  SchematicByHash(
    request: QueryGetSchematicRequest
  ): Promise<QueryGetSchematicResponse>;
  SchematicSearch(
    request: QuerySearchSchematicRequest
  ): Promise<QueryAllSchematicResponse>;
  SchematicSearchByStructure(
    request: QuerySearchSchematicByStructureRequest
  ): Promise<QueryAllSchematicResponse>;
  SchematicByCreator(
    request: QueryCreatorSchematicRequest
  ): Promise<QueryAllSchematicResponse>;
  WattUnderManagement(
    request: QueryWattUnderManagementRequest
  ): Promise<QueryWattUnderManagementResponse>;
  AllWattUnderManagement(
    request: QueryAllWattUnderManagementRequest
  ): Promise<QueryAllWattUnderManagementResponse>;
  SchematicAll(
    request: QueryAllSchematicRequest
  ): Promise<QueryAllSchematicResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Reactor(request: QueryGetReactorRequest): Promise<QueryGetReactorResponse> {
    const data = QueryGetReactorRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "Reactor", data);
    return promise.then((data) =>
      QueryGetReactorResponse.decode(new Reader(data))
    );
  }

  ReactorAll(
    request: QueryAllReactorRequest
  ): Promise<QueryAllReactorResponse> {
    const data = QueryAllReactorRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "ReactorAll", data);
    return promise.then((data) =>
      QueryAllReactorResponse.decode(new Reader(data))
    );
  }

  Instance(
    request: QueryGetInstanceRequest
  ): Promise<QueryGetInstanceResponse> {
    const data = QueryGetInstanceRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "Instance", data);
    return promise.then((data) =>
      QueryGetInstanceResponse.decode(new Reader(data))
    );
  }

  InstanceAll(
    request: QueryAllInstanceRequest
  ): Promise<QueryAllInstanceResponse> {
    const data = QueryAllInstanceRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "InstanceAll", data);
    return promise.then((data) =>
      QueryAllInstanceResponse.decode(new Reader(data))
    );
  }

  InstanceSearch(
    request: QuerySearchInstanceRequest
  ): Promise<QueryAllInstanceResponse> {
    const data = QuerySearchInstanceRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "InstanceSearch", data);
    return promise.then((data) =>
      QueryAllInstanceResponse.decode(new Reader(data))
    );
  }

  Structure(
    request: QueryGetStructureRequest
  ): Promise<QueryGetStructureResponse> {
    const data = QueryGetStructureRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "Structure", data);
    return promise.then((data) =>
      QueryGetStructureResponse.decode(new Reader(data))
    );
  }

  StructureAll(
    request: QueryAllStructureRequest
  ): Promise<QueryAllStructureResponse> {
    const data = QueryAllStructureRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "StructureAll", data);
    return promise.then((data) =>
      QueryAllStructureResponse.decode(new Reader(data))
    );
  }

  StructureByCreator(
    request: QueryCreatorStructureRequest
  ): Promise<QueryAllStructureResponse> {
    const data = QueryCreatorStructureRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "StructureByCreator", data);
    return promise.then((data) =>
      QueryAllStructureResponse.decode(new Reader(data))
    );
  }

  StructureSearch(
    request: QuerySearchStructureRequest
  ): Promise<QueryAllStructureResponse> {
    const data = QuerySearchStructureRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "StructureSearch", data);
    return promise.then((data) =>
      QueryAllStructureResponse.decode(new Reader(data))
    );
  }

  StructureSearchForPerforming(
    request: QuerySearchPerformingStructureRequest
  ): Promise<QueryAllStructureResponse> {
    const data = QuerySearchPerformingStructureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "di.Query",
      "StructureSearchForPerforming",
      data
    );
    return promise.then((data) =>
      QueryAllStructureResponse.decode(new Reader(data))
    );
  }

  StructureSearchForTargeting(
    request: QuerySearchTargetingStructureRequest
  ): Promise<QueryAllStructureResponse> {
    const data = QuerySearchTargetingStructureRequest.encode(request).finish();
    const promise = this.rpc.request(
      "di.Query",
      "StructureSearchForTargeting",
      data
    );
    return promise.then((data) =>
      QueryAllStructureResponse.decode(new Reader(data))
    );
  }

  Schematic(
    request: QueryGetSchematicRequest
  ): Promise<QueryGetSchematicResponse> {
    const data = QueryGetSchematicRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "Schematic", data);
    return promise.then((data) =>
      QueryGetSchematicResponse.decode(new Reader(data))
    );
  }

  SchematicByHash(
    request: QueryGetSchematicRequest
  ): Promise<QueryGetSchematicResponse> {
    const data = QueryGetSchematicRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "SchematicByHash", data);
    return promise.then((data) =>
      QueryGetSchematicResponse.decode(new Reader(data))
    );
  }

  SchematicSearch(
    request: QuerySearchSchematicRequest
  ): Promise<QueryAllSchematicResponse> {
    const data = QuerySearchSchematicRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "SchematicSearch", data);
    return promise.then((data) =>
      QueryAllSchematicResponse.decode(new Reader(data))
    );
  }

  SchematicSearchByStructure(
    request: QuerySearchSchematicByStructureRequest
  ): Promise<QueryAllSchematicResponse> {
    const data = QuerySearchSchematicByStructureRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "di.Query",
      "SchematicSearchByStructure",
      data
    );
    return promise.then((data) =>
      QueryAllSchematicResponse.decode(new Reader(data))
    );
  }

  SchematicByCreator(
    request: QueryCreatorSchematicRequest
  ): Promise<QueryAllSchematicResponse> {
    const data = QueryCreatorSchematicRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "SchematicByCreator", data);
    return promise.then((data) =>
      QueryAllSchematicResponse.decode(new Reader(data))
    );
  }

  WattUnderManagement(
    request: QueryWattUnderManagementRequest
  ): Promise<QueryWattUnderManagementResponse> {
    const data = QueryWattUnderManagementRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "WattUnderManagement", data);
    return promise.then((data) =>
      QueryWattUnderManagementResponse.decode(new Reader(data))
    );
  }

  AllWattUnderManagement(
    request: QueryAllWattUnderManagementRequest
  ): Promise<QueryAllWattUnderManagementResponse> {
    const data = QueryAllWattUnderManagementRequest.encode(request).finish();
    const promise = this.rpc.request(
      "di.Query",
      "AllWattUnderManagement",
      data
    );
    return promise.then((data) =>
      QueryAllWattUnderManagementResponse.decode(new Reader(data))
    );
  }

  SchematicAll(
    request: QueryAllSchematicRequest
  ): Promise<QueryAllSchematicResponse> {
    const data = QueryAllSchematicRequest.encode(request).finish();
    const promise = this.rpc.request("di.Query", "SchematicAll", data);
    return promise.then((data) =>
      QueryAllSchematicResponse.decode(new Reader(data))
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
