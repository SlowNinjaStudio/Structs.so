/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Reactor } from "../di/Reactor";
import { PageRequest, PageResponse, } from "../../cosmos/base/query/v1beta1/pagination";
import { Instance } from "../di/Instance";
import { Structure } from "../di/Structure";
import { Schematic } from "../di/Schematic";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const protobufPackage = "di";
const baseQueryGetReactorRequest = { id: 0 };
export const QueryGetReactorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetReactorRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetReactorRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetReactorRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetReactorResponse = {};
export const QueryGetReactorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Reactor !== undefined) {
            Reactor.encode(message.Reactor, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetReactorResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetReactorResponse,
        };
        if (object.Reactor !== undefined && object.Reactor !== null) {
            message.Reactor = Reactor.fromJSON(object.Reactor);
        }
        else {
            message.Reactor = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Reactor !== undefined &&
            (obj.Reactor = message.Reactor
                ? Reactor.toJSON(message.Reactor)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetReactorResponse,
        };
        if (object.Reactor !== undefined && object.Reactor !== null) {
            message.Reactor = Reactor.fromPartial(object.Reactor);
        }
        else {
            message.Reactor = undefined;
        }
        return message;
    },
};
const baseQueryAllReactorRequest = {};
export const QueryAllReactorRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllReactorRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllReactorRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllReactorRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllReactorResponse = {};
export const QueryAllReactorResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Reactor) {
            Reactor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllReactorResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllReactorResponse,
        };
        message.Reactor = [];
        if (object.Reactor !== undefined && object.Reactor !== null) {
            for (const e of object.Reactor) {
                message.Reactor.push(Reactor.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Reactor) {
            obj.Reactor = message.Reactor.map((e) => e ? Reactor.toJSON(e) : undefined);
        }
        else {
            obj.Reactor = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllReactorResponse,
        };
        message.Reactor = [];
        if (object.Reactor !== undefined && object.Reactor !== null) {
            for (const e of object.Reactor) {
                message.Reactor.push(Reactor.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetInstanceRequest = { address: "" };
export const QueryGetInstanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetInstanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetInstanceRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetInstanceRequest,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseQueryGetInstanceResponse = {};
export const QueryGetInstanceResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Instance !== undefined) {
            Instance.encode(message.Instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetInstanceResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetInstanceResponse,
        };
        if (object.Instance !== undefined && object.Instance !== null) {
            message.Instance = Instance.fromJSON(object.Instance);
        }
        else {
            message.Instance = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Instance !== undefined &&
            (obj.Instance = message.Instance
                ? Instance.toJSON(message.Instance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetInstanceResponse,
        };
        if (object.Instance !== undefined && object.Instance !== null) {
            message.Instance = Instance.fromPartial(object.Instance);
        }
        else {
            message.Instance = undefined;
        }
        return message;
    },
};
const baseQueryAllInstanceRequest = {};
export const QueryAllInstanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllInstanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllInstanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllInstanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllInstanceResponse = {};
export const QueryAllInstanceResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Instance) {
            Instance.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllInstanceResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllInstanceResponse,
        };
        message.Instance = [];
        if (object.Instance !== undefined && object.Instance !== null) {
            for (const e of object.Instance) {
                message.Instance.push(Instance.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Instance) {
            obj.Instance = message.Instance.map((e) => e ? Instance.toJSON(e) : undefined);
        }
        else {
            obj.Instance = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllInstanceResponse,
        };
        message.Instance = [];
        if (object.Instance !== undefined && object.Instance !== null) {
            for (const e of object.Instance) {
                message.Instance.push(Instance.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQuerySearchInstanceRequest = { query: "" };
export const QuerySearchInstanceRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== "") {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySearchInstanceRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQuerySearchInstanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = String(object.query);
        }
        else {
            message.query = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySearchInstanceRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = "";
        }
        return message;
    },
};
const baseQueryGetStructureRequest = { id: 0 };
export const QueryGetStructureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetStructureRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetStructureRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetStructureRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetStructureResponse = {};
export const QueryGetStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Structure !== undefined) {
            Structure.encode(message.Structure, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetStructureResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetStructureResponse,
        };
        if (object.Structure !== undefined && object.Structure !== null) {
            message.Structure = Structure.fromJSON(object.Structure);
        }
        else {
            message.Structure = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Structure !== undefined &&
            (obj.Structure = message.Structure
                ? Structure.toJSON(message.Structure)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetStructureResponse,
        };
        if (object.Structure !== undefined && object.Structure !== null) {
            message.Structure = Structure.fromPartial(object.Structure);
        }
        else {
            message.Structure = undefined;
        }
        return message;
    },
};
const baseQueryAllStructureRequest = {};
export const QueryAllStructureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllStructureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryCreatorStructureRequest = { creator: "" };
export const QueryCreatorStructureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCreatorStructureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryCreatorStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCreatorStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseQuerySearchStructureRequest = { query: "" };
export const QuerySearchStructureRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== "") {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySearchStructureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQuerySearchStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = String(object.query);
        }
        else {
            message.query = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySearchStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = "";
        }
        return message;
    },
};
const baseQuerySearchPerformingStructureRequest = {
    query: "",
    actionType: "",
    target: "",
    instance: "",
};
export const QuerySearchPerformingStructureRequest = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySearchPerformingStructureRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQuerySearchPerformingStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = String(object.query);
        }
        else {
            message.query = "";
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = String(object.actionType);
        }
        else {
            message.actionType = "";
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = String(object.target);
        }
        else {
            message.target = "";
        }
        if (object.instance !== undefined && object.instance !== null) {
            message.instance = String(object.instance);
        }
        else {
            message.instance = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = {
            ...baseQuerySearchPerformingStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = "";
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = object.actionType;
        }
        else {
            message.actionType = "";
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = object.target;
        }
        else {
            message.target = "";
        }
        if (object.instance !== undefined && object.instance !== null) {
            message.instance = object.instance;
        }
        else {
            message.instance = "";
        }
        return message;
    },
};
const baseQuerySearchTargetingStructureRequest = {
    query: "",
    actionType: "",
    performing: 0,
};
export const QuerySearchTargetingStructureRequest = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySearchTargetingStructureRequest,
        };
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
                    message.performing = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySearchTargetingStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = String(object.query);
        }
        else {
            message.query = "";
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = String(object.actionType);
        }
        else {
            message.actionType = "";
        }
        if (object.performing !== undefined && object.performing !== null) {
            message.performing = Number(object.performing);
        }
        else {
            message.performing = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.query !== undefined && (obj.query = message.query);
        message.actionType !== undefined && (obj.actionType = message.actionType);
        message.performing !== undefined && (obj.performing = message.performing);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySearchTargetingStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = "";
        }
        if (object.actionType !== undefined && object.actionType !== null) {
            message.actionType = object.actionType;
        }
        else {
            message.actionType = "";
        }
        if (object.performing !== undefined && object.performing !== null) {
            message.performing = object.performing;
        }
        else {
            message.performing = 0;
        }
        return message;
    },
};
const baseQueryAllStructureResponse = {};
export const QueryAllStructureResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Structure) {
            Structure.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllStructureResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllStructureResponse,
        };
        message.Structure = [];
        if (object.Structure !== undefined && object.Structure !== null) {
            for (const e of object.Structure) {
                message.Structure.push(Structure.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Structure) {
            obj.Structure = message.Structure.map((e) => e ? Structure.toJSON(e) : undefined);
        }
        else {
            obj.Structure = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllStructureResponse,
        };
        message.Structure = [];
        if (object.Structure !== undefined && object.Structure !== null) {
            for (const e of object.Structure) {
                message.Structure.push(Structure.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetSchematicRequest = { id: 0, hash: "", creator: "" };
export const QueryGetSchematicRequest = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSchematicRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetSchematicRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.hash !== undefined && (obj.hash = message.hash);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSchematicRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseQueryGetSchematicResponse = {};
export const QueryGetSchematicResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Schematic !== undefined) {
            Schematic.encode(message.Schematic, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSchematicResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetSchematicResponse,
        };
        if (object.Schematic !== undefined && object.Schematic !== null) {
            message.Schematic = Schematic.fromJSON(object.Schematic);
        }
        else {
            message.Schematic = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Schematic !== undefined &&
            (obj.Schematic = message.Schematic
                ? Schematic.toJSON(message.Schematic)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSchematicResponse,
        };
        if (object.Schematic !== undefined && object.Schematic !== null) {
            message.Schematic = Schematic.fromPartial(object.Schematic);
        }
        else {
            message.Schematic = undefined;
        }
        return message;
    },
};
const baseQueryAllSchematicRequest = {};
export const QueryAllSchematicRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSchematicRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllSchematicRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSchematicRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQuerySearchSchematicRequest = { query: "" };
export const QuerySearchSchematicRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== "") {
            writer.uint32(18).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySearchSchematicRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQuerySearchSchematicRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = String(object.query);
        }
        else {
            message.query = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySearchSchematicRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = "";
        }
        return message;
    },
};
const baseQuerySearchSchematicByStructureRequest = {
    structureId: 0,
    query: "",
};
export const QuerySearchSchematicByStructureRequest = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySearchSchematicByStructureRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.structureId = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = {
            ...baseQuerySearchSchematicByStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.structureId !== undefined && object.structureId !== null) {
            message.structureId = Number(object.structureId);
        }
        else {
            message.structureId = 0;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = String(object.query);
        }
        else {
            message.query = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.structureId !== undefined &&
            (obj.structureId = message.structureId);
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySearchSchematicByStructureRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.structureId !== undefined && object.structureId !== null) {
            message.structureId = object.structureId;
        }
        else {
            message.structureId = 0;
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = "";
        }
        return message;
    },
};
const baseQueryCreatorSchematicRequest = { creator: "" };
export const QueryCreatorSchematicRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryCreatorSchematicRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryCreatorSchematicRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryCreatorSchematicRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseQueryAllSchematicResponse = {};
export const QueryAllSchematicResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Schematic) {
            Schematic.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSchematicResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllSchematicResponse,
        };
        message.Schematic = [];
        if (object.Schematic !== undefined && object.Schematic !== null) {
            for (const e of object.Schematic) {
                message.Schematic.push(Schematic.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Schematic) {
            obj.Schematic = message.Schematic.map((e) => e ? Schematic.toJSON(e) : undefined);
        }
        else {
            obj.Schematic = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSchematicResponse,
        };
        message.Schematic = [];
        if (object.Schematic !== undefined && object.Schematic !== null) {
            for (const e of object.Schematic) {
                message.Schematic.push(Schematic.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryWattUnderManagementRequest = { creator: "" };
export const QueryWattUnderManagementRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryWattUnderManagementRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryWattUnderManagementRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryWattUnderManagementRequest,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseQueryWattUnderManagementResponse = {
    creator: "",
    name: "",
    mood: "",
};
export const QueryWattUnderManagementResponse = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.wattUnderManagement !== undefined) {
            Coin.encode(message.wattUnderManagement, writer.uint32(18).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.mood !== "") {
            writer.uint32(34).string(message.mood);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryWattUnderManagementResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryWattUnderManagementResponse,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.wattUnderManagement !== undefined &&
            object.wattUnderManagement !== null) {
            message.wattUnderManagement = Coin.fromJSON(object.wattUnderManagement);
        }
        else {
            message.wattUnderManagement = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.mood !== undefined && object.mood !== null) {
            message.mood = String(object.mood);
        }
        else {
            message.mood = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.wattUnderManagement !== undefined &&
            (obj.wattUnderManagement = message.wattUnderManagement
                ? Coin.toJSON(message.wattUnderManagement)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.mood !== undefined && (obj.mood = message.mood);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryWattUnderManagementResponse,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.wattUnderManagement !== undefined &&
            object.wattUnderManagement !== null) {
            message.wattUnderManagement = Coin.fromPartial(object.wattUnderManagement);
        }
        else {
            message.wattUnderManagement = undefined;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.mood !== undefined && object.mood !== null) {
            message.mood = object.mood;
        }
        else {
            message.mood = "";
        }
        return message;
    },
};
const baseQueryAllWattUnderManagementRequest = {};
export const QueryAllWattUnderManagementRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllWattUnderManagementRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryAllWattUnderManagementRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryAllWattUnderManagementRequest,
        };
        return message;
    },
};
const baseQueryAllWattUnderManagementResponse = {};
export const QueryAllWattUnderManagementResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.wattUnderManagement) {
            QueryWattUnderManagementResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllWattUnderManagementResponse,
        };
        message.wattUnderManagement = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.wattUnderManagement.push(QueryWattUnderManagementResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllWattUnderManagementResponse,
        };
        message.wattUnderManagement = [];
        if (object.wattUnderManagement !== undefined &&
            object.wattUnderManagement !== null) {
            for (const e of object.wattUnderManagement) {
                message.wattUnderManagement.push(QueryWattUnderManagementResponse.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.wattUnderManagement) {
            obj.wattUnderManagement = message.wattUnderManagement.map((e) => e ? QueryWattUnderManagementResponse.toJSON(e) : undefined);
        }
        else {
            obj.wattUnderManagement = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllWattUnderManagementResponse,
        };
        message.wattUnderManagement = [];
        if (object.wattUnderManagement !== undefined &&
            object.wattUnderManagement !== null) {
            for (const e of object.wattUnderManagement) {
                message.wattUnderManagement.push(QueryWattUnderManagementResponse.fromPartial(e));
            }
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Reactor(request) {
        const data = QueryGetReactorRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "Reactor", data);
        return promise.then((data) => QueryGetReactorResponse.decode(new Reader(data)));
    }
    ReactorAll(request) {
        const data = QueryAllReactorRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "ReactorAll", data);
        return promise.then((data) => QueryAllReactorResponse.decode(new Reader(data)));
    }
    Instance(request) {
        const data = QueryGetInstanceRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "Instance", data);
        return promise.then((data) => QueryGetInstanceResponse.decode(new Reader(data)));
    }
    InstanceAll(request) {
        const data = QueryAllInstanceRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "InstanceAll", data);
        return promise.then((data) => QueryAllInstanceResponse.decode(new Reader(data)));
    }
    InstanceSearch(request) {
        const data = QuerySearchInstanceRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "InstanceSearch", data);
        return promise.then((data) => QueryAllInstanceResponse.decode(new Reader(data)));
    }
    Structure(request) {
        const data = QueryGetStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "Structure", data);
        return promise.then((data) => QueryGetStructureResponse.decode(new Reader(data)));
    }
    StructureAll(request) {
        const data = QueryAllStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "StructureAll", data);
        return promise.then((data) => QueryAllStructureResponse.decode(new Reader(data)));
    }
    StructureByCreator(request) {
        const data = QueryCreatorStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "StructureByCreator", data);
        return promise.then((data) => QueryAllStructureResponse.decode(new Reader(data)));
    }
    StructureSearch(request) {
        const data = QuerySearchStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "StructureSearch", data);
        return promise.then((data) => QueryAllStructureResponse.decode(new Reader(data)));
    }
    StructureSearchForPerforming(request) {
        const data = QuerySearchPerformingStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "StructureSearchForPerforming", data);
        return promise.then((data) => QueryAllStructureResponse.decode(new Reader(data)));
    }
    StructureSearchForTargeting(request) {
        const data = QuerySearchTargetingStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "StructureSearchForTargeting", data);
        return promise.then((data) => QueryAllStructureResponse.decode(new Reader(data)));
    }
    Schematic(request) {
        const data = QueryGetSchematicRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "Schematic", data);
        return promise.then((data) => QueryGetSchematicResponse.decode(new Reader(data)));
    }
    SchematicByHash(request) {
        const data = QueryGetSchematicRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "SchematicByHash", data);
        return promise.then((data) => QueryGetSchematicResponse.decode(new Reader(data)));
    }
    SchematicSearch(request) {
        const data = QuerySearchSchematicRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "SchematicSearch", data);
        return promise.then((data) => QueryAllSchematicResponse.decode(new Reader(data)));
    }
    SchematicSearchByStructure(request) {
        const data = QuerySearchSchematicByStructureRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "SchematicSearchByStructure", data);
        return promise.then((data) => QueryAllSchematicResponse.decode(new Reader(data)));
    }
    SchematicByCreator(request) {
        const data = QueryCreatorSchematicRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "SchematicByCreator", data);
        return promise.then((data) => QueryAllSchematicResponse.decode(new Reader(data)));
    }
    WattUnderManagement(request) {
        const data = QueryWattUnderManagementRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "WattUnderManagement", data);
        return promise.then((data) => QueryWattUnderManagementResponse.decode(new Reader(data)));
    }
    AllWattUnderManagement(request) {
        const data = QueryAllWattUnderManagementRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "AllWattUnderManagement", data);
        return promise.then((data) => QueryAllWattUnderManagementResponse.decode(new Reader(data)));
    }
    SchematicAll(request) {
        const data = QueryAllSchematicRequest.encode(request).finish();
        const promise = this.rpc.request("di.Query", "SchematicAll", data);
        return promise.then((data) => QueryAllSchematicResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
