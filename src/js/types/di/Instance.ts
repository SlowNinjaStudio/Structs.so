/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "di";

export interface Instance {
  address: string;
  name: string;
  mood: string;
}

const baseInstance: object = { address: "", name: "", mood: "" };

export const Instance = {
  encode(message: Instance, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstance } as Instance;
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

  fromJSON(object: any): Instance {
    const message = { ...baseInstance } as Instance;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
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

  toJSON(message: Instance): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.name !== undefined && (obj.name = message.name);
    message.mood !== undefined && (obj.mood = message.mood);
    return obj;
  },

  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = { ...baseInstance } as Instance;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
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
