import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "di";
export interface Schematic {
    creator: string;
    id: number;
    name: string;
    description: string;
    hash: string;
    input: string;
    owner: string;
    features: Schematic_Feature[];
    ambits: Schematic_Ambit[];
    isMobile: boolean;
    isStationary: boolean;
    speed: number;
    accuracy: number;
    energyEfficiency: number;
    mass: number;
    strength: number;
    energyToBuild: Coin | undefined;
    primaryColor: string;
    secondaryColor: string;
    meleeAttack: number;
    rangeAttack: number;
    meleeDefense: number;
    rangeDefense: number;
    /** Probably remove this at some point */
    generateRate: number;
    chargeRate: number;
    drainRate: number;
    chargingSlotCount: number;
    buildRate: number;
    restorationRate: number;
    capacityMax: number;
    healthMax: number;
}
export declare enum Schematic_Feature {
    PAPER_WEIGHT = 0,
    ENGINEERING_SYSTEM = 7,
    STORAGE_SYSTEM = 24,
    DEFENSIVE_SYSTEM = 32,
    ATTACK_SYSTEM = 64,
    POWER_SYSTEM = 128,
    UNRECOGNIZED = -1
}
export declare function schematic_FeatureFromJSON(object: any): Schematic_Feature;
export declare function schematic_FeatureToJSON(object: Schematic_Feature): string;
export declare enum Schematic_Ambit {
    VOID = 0,
    SPACE = 7,
    SKY = 24,
    WATER = 96,
    LAND = 128,
    UNRECOGNIZED = -1
}
export declare function schematic_AmbitFromJSON(object: any): Schematic_Ambit;
export declare function schematic_AmbitToJSON(object: Schematic_Ambit): string;
export declare const Schematic: {
    encode(message: Schematic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Schematic;
    fromJSON(object: any): Schematic;
    toJSON(message: Schematic): unknown;
    fromPartial(object: DeepPartial<Schematic>): Schematic;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
