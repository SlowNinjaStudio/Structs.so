import { Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "di";
export interface Structure {
    creator: string;
    id: number;
    name: string;
    description: string;
    hash: string;
    input: string;
    schematic: string;
    supervisor: string;
    features: Structure_Feature[];
    ambits: Structure_Ambit[];
    isMobile: boolean;
    isStationary: boolean;
    speed: number;
    accuracy: number;
    energyEfficiency: number;
    mass: number;
    strength: number;
    meleeAttack: number;
    rangeAttack: number;
    meleeDefense: number;
    rangeDefense: number;
    /** Probably remove this at some point */
    generateRate: number;
    chargeRate: number;
    drainRate: number;
    chargingSlotCount: number;
    chargingSlot: string[];
    buildRate: number;
    restorationRate: number;
    capacityMax: number;
    healthCurrent: number;
    healthMax: number;
    battery: Coin | undefined;
    energyToBuild: Coin | undefined;
    parentId: number;
    storage: number[];
    capacityCurrent: number;
    reactor: string;
    primaryColor: string;
    secondaryColor: string;
}
export declare enum Structure_Feature {
    PAPER_WEIGHT = 0,
    ENGINEERING_SYSTEM = 7,
    STORAGE_SYSTEM = 24,
    DEFENSIVE_SYSTEM = 32,
    ATTACK_SYSTEM = 64,
    POWER_SYSTEM = 128,
    UNRECOGNIZED = -1
}
export declare function structure_FeatureFromJSON(object: any): Structure_Feature;
export declare function structure_FeatureToJSON(object: Structure_Feature): string;
export declare enum Structure_Ambit {
    VOID = 0,
    SPACE = 7,
    SKY = 24,
    WATER = 96,
    LAND = 128,
    UNRECOGNIZED = -1
}
export declare function structure_AmbitFromJSON(object: any): Structure_Ambit;
export declare function structure_AmbitToJSON(object: Structure_Ambit): string;
export declare const Structure: {
    encode(message: Structure, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Structure;
    fromJSON(object: any): Structure;
    toJSON(message: Structure): unknown;
    fromPartial(object: DeepPartial<Structure>): Structure;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
