/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { DecProto, Coin } from "../cosmos/base/v1beta1/coin";
export const protobufPackage = "di";
const baseContributor = { address: "" };
export const Contributor = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.share !== undefined) {
            DecProto.encode(message.share, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContributor };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.share = DecProto.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContributor };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.share !== undefined && object.share !== null) {
            message.share = DecProto.fromJSON(object.share);
        }
        else {
            message.share = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.share !== undefined &&
            (obj.share = message.share ? DecProto.toJSON(message.share) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContributor };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.share !== undefined && object.share !== null) {
            message.share = DecProto.fromPartial(object.share);
        }
        else {
            message.share = undefined;
        }
        return message;
    },
};
const baseReactor = {
    creator: "",
    id: 0,
    validator: "",
    moniker: "",
    description: "",
    online: false,
};
export const Reactor = {
    encode(message, writer = Writer.create()) {
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
        for (const v of message.contributors) {
            Contributor.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.online === true) {
            writer.uint32(64).bool(message.online);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReactor };
        message.contributors = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
                case 7:
                    message.contributors.push(Contributor.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.online = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReactor };
        message.contributors = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = String(object.moniker);
        }
        else {
            message.moniker = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromJSON(object.power);
        }
        else {
            message.power = undefined;
        }
        if (object.contributors !== undefined && object.contributors !== null) {
            for (const e of object.contributors) {
                message.contributors.push(Contributor.fromJSON(e));
            }
        }
        if (object.online !== undefined && object.online !== null) {
            message.online = Boolean(object.online);
        }
        else {
            message.online = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.validator !== undefined && (obj.validator = message.validator);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.description !== undefined &&
            (obj.description = message.description);
        message.power !== undefined &&
            (obj.power = message.power ? Coin.toJSON(message.power) : undefined);
        if (message.contributors) {
            obj.contributors = message.contributors.map((e) => e ? Contributor.toJSON(e) : undefined);
        }
        else {
            obj.contributors = [];
        }
        message.online !== undefined && (obj.online = message.online);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReactor };
        message.contributors = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        else {
            message.moniker = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromPartial(object.power);
        }
        else {
            message.power = undefined;
        }
        if (object.contributors !== undefined && object.contributors !== null) {
            for (const e of object.contributors) {
                message.contributors.push(Contributor.fromPartial(e));
            }
        }
        if (object.online !== undefined && object.online !== null) {
            message.online = object.online;
        }
        else {
            message.online = false;
        }
        return message;
    },
};
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
