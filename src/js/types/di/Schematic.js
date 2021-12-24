/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const protobufPackage = "di";
export var Schematic_Feature;
(function (Schematic_Feature) {
    Schematic_Feature[Schematic_Feature["PAPER_WEIGHT"] = 0] = "PAPER_WEIGHT";
    Schematic_Feature[Schematic_Feature["ENGINEERING_SYSTEM"] = 7] = "ENGINEERING_SYSTEM";
    Schematic_Feature[Schematic_Feature["STORAGE_SYSTEM"] = 24] = "STORAGE_SYSTEM";
    Schematic_Feature[Schematic_Feature["DEFENSIVE_SYSTEM"] = 32] = "DEFENSIVE_SYSTEM";
    Schematic_Feature[Schematic_Feature["ATTACK_SYSTEM"] = 64] = "ATTACK_SYSTEM";
    Schematic_Feature[Schematic_Feature["POWER_SYSTEM"] = 128] = "POWER_SYSTEM";
    Schematic_Feature[Schematic_Feature["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Schematic_Feature || (Schematic_Feature = {}));
export function schematic_FeatureFromJSON(object) {
    switch (object) {
        case 0:
        case "PAPER_WEIGHT":
            return Schematic_Feature.PAPER_WEIGHT;
        case 7:
        case "ENGINEERING_SYSTEM":
            return Schematic_Feature.ENGINEERING_SYSTEM;
        case 24:
        case "STORAGE_SYSTEM":
            return Schematic_Feature.STORAGE_SYSTEM;
        case 32:
        case "DEFENSIVE_SYSTEM":
            return Schematic_Feature.DEFENSIVE_SYSTEM;
        case 64:
        case "ATTACK_SYSTEM":
            return Schematic_Feature.ATTACK_SYSTEM;
        case 128:
        case "POWER_SYSTEM":
            return Schematic_Feature.POWER_SYSTEM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Schematic_Feature.UNRECOGNIZED;
    }
}
export function schematic_FeatureToJSON(object) {
    switch (object) {
        case Schematic_Feature.PAPER_WEIGHT:
            return "PAPER_WEIGHT";
        case Schematic_Feature.ENGINEERING_SYSTEM:
            return "ENGINEERING_SYSTEM";
        case Schematic_Feature.STORAGE_SYSTEM:
            return "STORAGE_SYSTEM";
        case Schematic_Feature.DEFENSIVE_SYSTEM:
            return "DEFENSIVE_SYSTEM";
        case Schematic_Feature.ATTACK_SYSTEM:
            return "ATTACK_SYSTEM";
        case Schematic_Feature.POWER_SYSTEM:
            return "POWER_SYSTEM";
        default:
            return "UNKNOWN";
    }
}
export var Schematic_Ambit;
(function (Schematic_Ambit) {
    Schematic_Ambit[Schematic_Ambit["VOID"] = 0] = "VOID";
    Schematic_Ambit[Schematic_Ambit["SPACE"] = 7] = "SPACE";
    Schematic_Ambit[Schematic_Ambit["SKY"] = 24] = "SKY";
    Schematic_Ambit[Schematic_Ambit["WATER"] = 96] = "WATER";
    Schematic_Ambit[Schematic_Ambit["LAND"] = 128] = "LAND";
    Schematic_Ambit[Schematic_Ambit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Schematic_Ambit || (Schematic_Ambit = {}));
export function schematic_AmbitFromJSON(object) {
    switch (object) {
        case 0:
        case "VOID":
            return Schematic_Ambit.VOID;
        case 7:
        case "SPACE":
            return Schematic_Ambit.SPACE;
        case 24:
        case "SKY":
            return Schematic_Ambit.SKY;
        case 96:
        case "WATER":
            return Schematic_Ambit.WATER;
        case 128:
        case "LAND":
            return Schematic_Ambit.LAND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Schematic_Ambit.UNRECOGNIZED;
    }
}
export function schematic_AmbitToJSON(object) {
    switch (object) {
        case Schematic_Ambit.VOID:
            return "VOID";
        case Schematic_Ambit.SPACE:
            return "SPACE";
        case Schematic_Ambit.SKY:
            return "SKY";
        case Schematic_Ambit.WATER:
            return "WATER";
        case Schematic_Ambit.LAND:
            return "LAND";
        default:
            return "UNKNOWN";
    }
}
const baseSchematic = {
    creator: "",
    id: 0,
    name: "",
    description: "",
    hash: "",
    input: "",
    owner: "",
    features: 0,
    ambits: 0,
    isMobile: false,
    isStationary: false,
    speed: 0,
    accuracy: 0,
    energyEfficiency: 0,
    mass: 0,
    strength: 0,
    primaryColor: "",
    secondaryColor: "",
    meleeAttack: 0,
    rangeAttack: 0,
    meleeDefense: 0,
    rangeDefense: 0,
    generateRate: 0,
    chargeRate: 0,
    drainRate: 0,
    chargingSlotCount: 0,
    buildRate: 0,
    restorationRate: 0,
    capacityMax: 0,
    healthMax: 0,
};
export const Schematic = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.hash !== "") {
            writer.uint32(42).string(message.hash);
        }
        if (message.input !== "") {
            writer.uint32(50).string(message.input);
        }
        if (message.owner !== "") {
            writer.uint32(58).string(message.owner);
        }
        writer.uint32(66).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(74).fork();
        for (const v of message.ambits) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.isMobile === true) {
            writer.uint32(80).bool(message.isMobile);
        }
        if (message.isStationary === true) {
            writer.uint32(248).bool(message.isStationary);
        }
        if (message.speed !== 0) {
            writer.uint32(88).uint64(message.speed);
        }
        if (message.accuracy !== 0) {
            writer.uint32(96).uint64(message.accuracy);
        }
        if (message.energyEfficiency !== 0) {
            writer.uint32(104).uint64(message.energyEfficiency);
        }
        if (message.mass !== 0) {
            writer.uint32(112).uint64(message.mass);
        }
        if (message.strength !== 0) {
            writer.uint32(120).uint64(message.strength);
        }
        if (message.energyToBuild !== undefined) {
            Coin.encode(message.energyToBuild, writer.uint32(130).fork()).ldelim();
        }
        if (message.primaryColor !== "") {
            writer.uint32(138).string(message.primaryColor);
        }
        if (message.secondaryColor !== "") {
            writer.uint32(146).string(message.secondaryColor);
        }
        if (message.meleeAttack !== 0) {
            writer.uint32(152).uint64(message.meleeAttack);
        }
        if (message.rangeAttack !== 0) {
            writer.uint32(160).uint64(message.rangeAttack);
        }
        if (message.meleeDefense !== 0) {
            writer.uint32(168).uint64(message.meleeDefense);
        }
        if (message.rangeDefense !== 0) {
            writer.uint32(176).uint64(message.rangeDefense);
        }
        if (message.generateRate !== 0) {
            writer.uint32(184).uint64(message.generateRate);
        }
        if (message.chargeRate !== 0) {
            writer.uint32(192).uint64(message.chargeRate);
        }
        if (message.drainRate !== 0) {
            writer.uint32(200).uint64(message.drainRate);
        }
        if (message.chargingSlotCount !== 0) {
            writer.uint32(208).uint64(message.chargingSlotCount);
        }
        if (message.buildRate !== 0) {
            writer.uint32(216).uint64(message.buildRate);
        }
        if (message.restorationRate !== 0) {
            writer.uint32(224).uint64(message.restorationRate);
        }
        if (message.capacityMax !== 0) {
            writer.uint32(232).uint64(message.capacityMax);
        }
        if (message.healthMax !== 0) {
            writer.uint32(240).uint64(message.healthMax);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchematic };
        message.features = [];
        message.ambits = [];
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
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.hash = reader.string();
                    break;
                case 6:
                    message.input = reader.string();
                    break;
                case 7:
                    message.owner = reader.string();
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.features.push(reader.int32());
                        }
                    }
                    else {
                        message.features.push(reader.int32());
                    }
                    break;
                case 9:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ambits.push(reader.int32());
                        }
                    }
                    else {
                        message.ambits.push(reader.int32());
                    }
                    break;
                case 10:
                    message.isMobile = reader.bool();
                    break;
                case 31:
                    message.isStationary = reader.bool();
                    break;
                case 11:
                    message.speed = longToNumber(reader.uint64());
                    break;
                case 12:
                    message.accuracy = longToNumber(reader.uint64());
                    break;
                case 13:
                    message.energyEfficiency = longToNumber(reader.uint64());
                    break;
                case 14:
                    message.mass = longToNumber(reader.uint64());
                    break;
                case 15:
                    message.strength = longToNumber(reader.uint64());
                    break;
                case 16:
                    message.energyToBuild = Coin.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.primaryColor = reader.string();
                    break;
                case 18:
                    message.secondaryColor = reader.string();
                    break;
                case 19:
                    message.meleeAttack = longToNumber(reader.uint64());
                    break;
                case 20:
                    message.rangeAttack = longToNumber(reader.uint64());
                    break;
                case 21:
                    message.meleeDefense = longToNumber(reader.uint64());
                    break;
                case 22:
                    message.rangeDefense = longToNumber(reader.uint64());
                    break;
                case 23:
                    message.generateRate = longToNumber(reader.uint64());
                    break;
                case 24:
                    message.chargeRate = longToNumber(reader.uint64());
                    break;
                case 25:
                    message.drainRate = longToNumber(reader.uint64());
                    break;
                case 26:
                    message.chargingSlotCount = longToNumber(reader.uint64());
                    break;
                case 27:
                    message.buildRate = longToNumber(reader.uint64());
                    break;
                case 28:
                    message.restorationRate = longToNumber(reader.uint64());
                    break;
                case 29:
                    message.capacityMax = longToNumber(reader.uint64());
                    break;
                case 30:
                    message.healthMax = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSchematic };
        message.features = [];
        message.ambits = [];
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
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = String(object.input);
        }
        else {
            message.input = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(schematic_FeatureFromJSON(e));
            }
        }
        if (object.ambits !== undefined && object.ambits !== null) {
            for (const e of object.ambits) {
                message.ambits.push(schematic_AmbitFromJSON(e));
            }
        }
        if (object.isMobile !== undefined && object.isMobile !== null) {
            message.isMobile = Boolean(object.isMobile);
        }
        else {
            message.isMobile = false;
        }
        if (object.isStationary !== undefined && object.isStationary !== null) {
            message.isStationary = Boolean(object.isStationary);
        }
        else {
            message.isStationary = false;
        }
        if (object.speed !== undefined && object.speed !== null) {
            message.speed = Number(object.speed);
        }
        else {
            message.speed = 0;
        }
        if (object.accuracy !== undefined && object.accuracy !== null) {
            message.accuracy = Number(object.accuracy);
        }
        else {
            message.accuracy = 0;
        }
        if (object.energyEfficiency !== undefined &&
            object.energyEfficiency !== null) {
            message.energyEfficiency = Number(object.energyEfficiency);
        }
        else {
            message.energyEfficiency = 0;
        }
        if (object.mass !== undefined && object.mass !== null) {
            message.mass = Number(object.mass);
        }
        else {
            message.mass = 0;
        }
        if (object.strength !== undefined && object.strength !== null) {
            message.strength = Number(object.strength);
        }
        else {
            message.strength = 0;
        }
        if (object.energyToBuild !== undefined && object.energyToBuild !== null) {
            message.energyToBuild = Coin.fromJSON(object.energyToBuild);
        }
        else {
            message.energyToBuild = undefined;
        }
        if (object.primaryColor !== undefined && object.primaryColor !== null) {
            message.primaryColor = String(object.primaryColor);
        }
        else {
            message.primaryColor = "";
        }
        if (object.secondaryColor !== undefined && object.secondaryColor !== null) {
            message.secondaryColor = String(object.secondaryColor);
        }
        else {
            message.secondaryColor = "";
        }
        if (object.meleeAttack !== undefined && object.meleeAttack !== null) {
            message.meleeAttack = Number(object.meleeAttack);
        }
        else {
            message.meleeAttack = 0;
        }
        if (object.rangeAttack !== undefined && object.rangeAttack !== null) {
            message.rangeAttack = Number(object.rangeAttack);
        }
        else {
            message.rangeAttack = 0;
        }
        if (object.meleeDefense !== undefined && object.meleeDefense !== null) {
            message.meleeDefense = Number(object.meleeDefense);
        }
        else {
            message.meleeDefense = 0;
        }
        if (object.rangeDefense !== undefined && object.rangeDefense !== null) {
            message.rangeDefense = Number(object.rangeDefense);
        }
        else {
            message.rangeDefense = 0;
        }
        if (object.generateRate !== undefined && object.generateRate !== null) {
            message.generateRate = Number(object.generateRate);
        }
        else {
            message.generateRate = 0;
        }
        if (object.chargeRate !== undefined && object.chargeRate !== null) {
            message.chargeRate = Number(object.chargeRate);
        }
        else {
            message.chargeRate = 0;
        }
        if (object.drainRate !== undefined && object.drainRate !== null) {
            message.drainRate = Number(object.drainRate);
        }
        else {
            message.drainRate = 0;
        }
        if (object.chargingSlotCount !== undefined &&
            object.chargingSlotCount !== null) {
            message.chargingSlotCount = Number(object.chargingSlotCount);
        }
        else {
            message.chargingSlotCount = 0;
        }
        if (object.buildRate !== undefined && object.buildRate !== null) {
            message.buildRate = Number(object.buildRate);
        }
        else {
            message.buildRate = 0;
        }
        if (object.restorationRate !== undefined &&
            object.restorationRate !== null) {
            message.restorationRate = Number(object.restorationRate);
        }
        else {
            message.restorationRate = 0;
        }
        if (object.capacityMax !== undefined && object.capacityMax !== null) {
            message.capacityMax = Number(object.capacityMax);
        }
        else {
            message.capacityMax = 0;
        }
        if (object.healthMax !== undefined && object.healthMax !== null) {
            message.healthMax = Number(object.healthMax);
        }
        else {
            message.healthMax = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hash !== undefined && (obj.hash = message.hash);
        message.input !== undefined && (obj.input = message.input);
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.features) {
            obj.features = message.features.map((e) => schematic_FeatureToJSON(e));
        }
        else {
            obj.features = [];
        }
        if (message.ambits) {
            obj.ambits = message.ambits.map((e) => schematic_AmbitToJSON(e));
        }
        else {
            obj.ambits = [];
        }
        message.isMobile !== undefined && (obj.isMobile = message.isMobile);
        message.isStationary !== undefined &&
            (obj.isStationary = message.isStationary);
        message.speed !== undefined && (obj.speed = message.speed);
        message.accuracy !== undefined && (obj.accuracy = message.accuracy);
        message.energyEfficiency !== undefined &&
            (obj.energyEfficiency = message.energyEfficiency);
        message.mass !== undefined && (obj.mass = message.mass);
        message.strength !== undefined && (obj.strength = message.strength);
        message.energyToBuild !== undefined &&
            (obj.energyToBuild = message.energyToBuild
                ? Coin.toJSON(message.energyToBuild)
                : undefined);
        message.primaryColor !== undefined &&
            (obj.primaryColor = message.primaryColor);
        message.secondaryColor !== undefined &&
            (obj.secondaryColor = message.secondaryColor);
        message.meleeAttack !== undefined &&
            (obj.meleeAttack = message.meleeAttack);
        message.rangeAttack !== undefined &&
            (obj.rangeAttack = message.rangeAttack);
        message.meleeDefense !== undefined &&
            (obj.meleeDefense = message.meleeDefense);
        message.rangeDefense !== undefined &&
            (obj.rangeDefense = message.rangeDefense);
        message.generateRate !== undefined &&
            (obj.generateRate = message.generateRate);
        message.chargeRate !== undefined && (obj.chargeRate = message.chargeRate);
        message.drainRate !== undefined && (obj.drainRate = message.drainRate);
        message.chargingSlotCount !== undefined &&
            (obj.chargingSlotCount = message.chargingSlotCount);
        message.buildRate !== undefined && (obj.buildRate = message.buildRate);
        message.restorationRate !== undefined &&
            (obj.restorationRate = message.restorationRate);
        message.capacityMax !== undefined &&
            (obj.capacityMax = message.capacityMax);
        message.healthMax !== undefined && (obj.healthMax = message.healthMax);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSchematic };
        message.features = [];
        message.ambits = [];
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
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = object.input;
        }
        else {
            message.input = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(e);
            }
        }
        if (object.ambits !== undefined && object.ambits !== null) {
            for (const e of object.ambits) {
                message.ambits.push(e);
            }
        }
        if (object.isMobile !== undefined && object.isMobile !== null) {
            message.isMobile = object.isMobile;
        }
        else {
            message.isMobile = false;
        }
        if (object.isStationary !== undefined && object.isStationary !== null) {
            message.isStationary = object.isStationary;
        }
        else {
            message.isStationary = false;
        }
        if (object.speed !== undefined && object.speed !== null) {
            message.speed = object.speed;
        }
        else {
            message.speed = 0;
        }
        if (object.accuracy !== undefined && object.accuracy !== null) {
            message.accuracy = object.accuracy;
        }
        else {
            message.accuracy = 0;
        }
        if (object.energyEfficiency !== undefined &&
            object.energyEfficiency !== null) {
            message.energyEfficiency = object.energyEfficiency;
        }
        else {
            message.energyEfficiency = 0;
        }
        if (object.mass !== undefined && object.mass !== null) {
            message.mass = object.mass;
        }
        else {
            message.mass = 0;
        }
        if (object.strength !== undefined && object.strength !== null) {
            message.strength = object.strength;
        }
        else {
            message.strength = 0;
        }
        if (object.energyToBuild !== undefined && object.energyToBuild !== null) {
            message.energyToBuild = Coin.fromPartial(object.energyToBuild);
        }
        else {
            message.energyToBuild = undefined;
        }
        if (object.primaryColor !== undefined && object.primaryColor !== null) {
            message.primaryColor = object.primaryColor;
        }
        else {
            message.primaryColor = "";
        }
        if (object.secondaryColor !== undefined && object.secondaryColor !== null) {
            message.secondaryColor = object.secondaryColor;
        }
        else {
            message.secondaryColor = "";
        }
        if (object.meleeAttack !== undefined && object.meleeAttack !== null) {
            message.meleeAttack = object.meleeAttack;
        }
        else {
            message.meleeAttack = 0;
        }
        if (object.rangeAttack !== undefined && object.rangeAttack !== null) {
            message.rangeAttack = object.rangeAttack;
        }
        else {
            message.rangeAttack = 0;
        }
        if (object.meleeDefense !== undefined && object.meleeDefense !== null) {
            message.meleeDefense = object.meleeDefense;
        }
        else {
            message.meleeDefense = 0;
        }
        if (object.rangeDefense !== undefined && object.rangeDefense !== null) {
            message.rangeDefense = object.rangeDefense;
        }
        else {
            message.rangeDefense = 0;
        }
        if (object.generateRate !== undefined && object.generateRate !== null) {
            message.generateRate = object.generateRate;
        }
        else {
            message.generateRate = 0;
        }
        if (object.chargeRate !== undefined && object.chargeRate !== null) {
            message.chargeRate = object.chargeRate;
        }
        else {
            message.chargeRate = 0;
        }
        if (object.drainRate !== undefined && object.drainRate !== null) {
            message.drainRate = object.drainRate;
        }
        else {
            message.drainRate = 0;
        }
        if (object.chargingSlotCount !== undefined &&
            object.chargingSlotCount !== null) {
            message.chargingSlotCount = object.chargingSlotCount;
        }
        else {
            message.chargingSlotCount = 0;
        }
        if (object.buildRate !== undefined && object.buildRate !== null) {
            message.buildRate = object.buildRate;
        }
        else {
            message.buildRate = 0;
        }
        if (object.restorationRate !== undefined &&
            object.restorationRate !== null) {
            message.restorationRate = object.restorationRate;
        }
        else {
            message.restorationRate = 0;
        }
        if (object.capacityMax !== undefined && object.capacityMax !== null) {
            message.capacityMax = object.capacityMax;
        }
        else {
            message.capacityMax = 0;
        }
        if (object.healthMax !== undefined && object.healthMax !== null) {
            message.healthMax = object.healthMax;
        }
        else {
            message.healthMax = 0;
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
