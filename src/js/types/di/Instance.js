/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "di";
const baseInstance = { address: "", name: "", mood: "" };
export const Instance = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.mood !== "") {
            writer.uint32(42).string(message.mood);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstance };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
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
        const message = { ...baseInstance };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
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
        message.address !== undefined && (obj.address = message.address);
        message.name !== undefined && (obj.name = message.name);
        message.mood !== undefined && (obj.mood = message.mood);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInstance };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
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
