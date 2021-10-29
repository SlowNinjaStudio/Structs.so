import { Writer, Reader } from "protobufjs/minimal";
import { DecProto, Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "di";
export interface Contributor {
    address: string;
    share: DecProto | undefined;
}
export interface Reactor {
    creator: string;
    id: number;
    validator: string;
    moniker: string;
    description: string;
    power: Coin | undefined;
    contributors: Contributor[];
    online: boolean;
}
export declare const Contributor: {
    encode(message: Contributor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Contributor;
    fromJSON(object: any): Contributor;
    toJSON(message: Contributor): unknown;
    fromPartial(object: DeepPartial<Contributor>): Contributor;
};
export declare const Reactor: {
    encode(message: Reactor, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Reactor;
    fromJSON(object: any): Reactor;
    toJSON(message: Reactor): unknown;
    fromPartial(object: DeepPartial<Reactor>): Reactor;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
