import { Reactor } from "../di/Reactor";
import { Instance } from "../di/Instance";
import { Structure } from "../di/Structure";
import { Schematic } from "../di/Schematic";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "di";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
