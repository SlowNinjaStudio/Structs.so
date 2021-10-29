import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "di";
export interface Instance {
    address: string;
    name: string;
    mood: string;
}
export declare const Instance: {
    encode(message: Instance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Instance;
    fromJSON(object: any): Instance;
    toJSON(message: Instance): unknown;
    fromPartial(object: DeepPartial<Instance>): Instance;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
