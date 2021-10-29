/* eslint-disable */
import { Reactor } from "../di/Reactor";
import { Instance } from "../di/Instance";
import { Structure } from "../di/Structure";
import { Schematic } from "../di/Schematic";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "di";

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  reactorList: Reactor[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  InstanceList: Instance[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  StructureList: Structure[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  SchematicList: Schematic[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.reactorList) {
      Reactor.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.InstanceList) {
      Instance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.StructureList) {
      Structure.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.SchematicList) {
      Schematic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.reactorList = [];
    message.InstanceList = [];
    message.StructureList = [];
    message.SchematicList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.reactorList.push(Reactor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.InstanceList.push(Instance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.StructureList.push(Structure.decode(reader, reader.uint32()));
          break;
        case 1:
          message.SchematicList.push(Schematic.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.reactorList = [];
    message.InstanceList = [];
    message.StructureList = [];
    message.SchematicList = [];
    if (object.reactorList !== undefined && object.reactorList !== null) {
      for (const e of object.reactorList) {
        message.reactorList.push(Reactor.fromJSON(e));
      }
    }
    if (object.InstanceList !== undefined && object.InstanceList !== null) {
      for (const e of object.InstanceList) {
        message.InstanceList.push(Instance.fromJSON(e));
      }
    }
    if (object.StructureList !== undefined && object.StructureList !== null) {
      for (const e of object.StructureList) {
        message.StructureList.push(Structure.fromJSON(e));
      }
    }
    if (object.SchematicList !== undefined && object.SchematicList !== null) {
      for (const e of object.SchematicList) {
        message.SchematicList.push(Schematic.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.reactorList) {
      obj.reactorList = message.reactorList.map((e) =>
        e ? Reactor.toJSON(e) : undefined
      );
    } else {
      obj.reactorList = [];
    }
    if (message.InstanceList) {
      obj.InstanceList = message.InstanceList.map((e) =>
        e ? Instance.toJSON(e) : undefined
      );
    } else {
      obj.InstanceList = [];
    }
    if (message.StructureList) {
      obj.StructureList = message.StructureList.map((e) =>
        e ? Structure.toJSON(e) : undefined
      );
    } else {
      obj.StructureList = [];
    }
    if (message.SchematicList) {
      obj.SchematicList = message.SchematicList.map((e) =>
        e ? Schematic.toJSON(e) : undefined
      );
    } else {
      obj.SchematicList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.reactorList = [];
    message.InstanceList = [];
    message.StructureList = [];
    message.SchematicList = [];
    if (object.reactorList !== undefined && object.reactorList !== null) {
      for (const e of object.reactorList) {
        message.reactorList.push(Reactor.fromPartial(e));
      }
    }
    if (object.InstanceList !== undefined && object.InstanceList !== null) {
      for (const e of object.InstanceList) {
        message.InstanceList.push(Instance.fromPartial(e));
      }
    }
    if (object.StructureList !== undefined && object.StructureList !== null) {
      for (const e of object.StructureList) {
        message.StructureList.push(Structure.fromPartial(e));
      }
    }
    if (object.SchematicList !== undefined && object.SchematicList !== null) {
      for (const e of object.SchematicList) {
        message.SchematicList.push(Schematic.fromPartial(e));
      }
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
