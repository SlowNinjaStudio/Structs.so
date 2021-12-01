/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const protobufPackage = "di";
export var Structure_Feature;
(function (Structure_Feature) {
    Structure_Feature[Structure_Feature["PAPER_WEIGHT"] = 0] = "PAPER_WEIGHT";
    Structure_Feature[Structure_Feature["ENGINEERING_SYSTEM"] = 7] = "ENGINEERING_SYSTEM";
    Structure_Feature[Structure_Feature["STORAGE_SYSTEM"] = 24] = "STORAGE_SYSTEM";
    Structure_Feature[Structure_Feature["DEFENSIVE_SYSTEM"] = 32] = "DEFENSIVE_SYSTEM";
    Structure_Feature[Structure_Feature["ATTACK_SYSTEM"] = 64] = "ATTACK_SYSTEM";
    Structure_Feature[Structure_Feature["POWER_SYSTEM"] = 128] = "POWER_SYSTEM";
    Structure_Feature[Structure_Feature["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Structure_Feature || (Structure_Feature = {}));
export function structure_FeatureFromJSON(object) {
    switch (object) {
        case 0:
        case "PAPER_WEIGHT":
            return Structure_Feature.PAPER_WEIGHT;
        case 7:
        case "ENGINEERING_SYSTEM":
            return Structure_Feature.ENGINEERING_SYSTEM;
        case 24:
        case "STORAGE_SYSTEM":
            return Structure_Feature.STORAGE_SYSTEM;
        case 32:
        case "DEFENSIVE_SYSTEM":
            return Structure_Feature.DEFENSIVE_SYSTEM;
        case 64:
        case "ATTACK_SYSTEM":
            return Structure_Feature.ATTACK_SYSTEM;
        case 128:
        case "POWER_SYSTEM":
            return Structure_Feature.POWER_SYSTEM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Structure_Feature.UNRECOGNIZED;
    }
}
export function structure_FeatureToJSON(object) {
    switch (object) {
        case Structure_Feature.PAPER_WEIGHT:
            return "PAPER_WEIGHT";
        case Structure_Feature.ENGINEERING_SYSTEM:
            return "ENGINEERING_SYSTEM";
        case Structure_Feature.STORAGE_SYSTEM:
            return "STORAGE_SYSTEM";
        case Structure_Feature.DEFENSIVE_SYSTEM:
            return "DEFENSIVE_SYSTEM";
        case Structure_Feature.ATTACK_SYSTEM:
            return "ATTACK_SYSTEM";
        case Structure_Feature.POWER_SYSTEM:
            return "POWER_SYSTEM";
        default:
            return "UNKNOWN";
    }
}
export var Structure_Ambit;
(function (Structure_Ambit) {
    Structure_Ambit[Structure_Ambit["VOID"] = 0] = "VOID";
    Structure_Ambit[Structure_Ambit["SPACE"] = 7] = "SPACE";
    Structure_Ambit[Structure_Ambit["SKY"] = 24] = "SKY";
    Structure_Ambit[Structure_Ambit["WATER"] = 96] = "WATER";
    Structure_Ambit[Structure_Ambit["LAND"] = 128] = "LAND";
    Structure_Ambit[Structure_Ambit["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Structure_Ambit || (Structure_Ambit = {}));
export function structure_AmbitFromJSON(object) {
    switch (object) {
        case 0:
        case "VOID":
            return Structure_Ambit.VOID;
        case 7:
        case "SPACE":
            return Structure_Ambit.SPACE;
        case 24:
        case "SKY":
            return Structure_Ambit.SKY;
        case 96:
        case "WATER":
            return Structure_Ambit.WATER;
        case 128:
        case "LAND":
            return Structure_Ambit.LAND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Structure_Ambit.UNRECOGNIZED;
    }
}
export function structure_AmbitToJSON(object) {
    switch (object) {
        case Structure_Ambit.VOID:
            return "VOID";
        case Structure_Ambit.SPACE:
            return "SPACE";
        case Structure_Ambit.SKY:
            return "SKY";
        case Structure_Ambit.WATER:
            return "WATER";
        case Structure_Ambit.LAND:
            return "LAND";
        default:
            return "UNKNOWN";
    }
}
const baseStructure = {
    creator: "",
    id: 0,
    name: "",
    description: "",
    hash: "",
    input: "",
    schematic: "",
    supervisor: "",
    features: 0,
    ambits: 0,
    isMobile: false,
    isStationary: false,
    speed: 0,
    accuracy: 0,
    energyEfficiency: 0,
    mass: 0,
    strength: 0,
    meleeAttack: 0,
    rangeAttack: 0,
    meleeDefense: 0,
    rangeDefense: 0,
    generateRate: 0,
    chargeRate: 0,
    drainRate: 0,
    chargingSlotCount: 0,
    chargingSlot: "",
    buildRate: 0,
    restorationRate: 0,
    capacityMax: 0,
    healthCurrent: 0,
    healthMax: 0,
    parentId: 0,
    storage: 0,
    capacityCurrent: 0,
    reactor: "",
    primaryColor: "",
    secondaryColor: "",
    builtBy: 0,
};
export const Structure = {
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
        if (message.schematic !== "") {
            writer.uint32(58).string(message.schematic);
        }
        if (message.supervisor !== "") {
            writer.uint32(66).string(message.supervisor);
        }
        writer.uint32(74).fork();
        for (const v of message.features) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(82).fork();
        for (const v of message.ambits) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.isMobile === true) {
            writer.uint32(88).bool(message.isMobile);
        }
        if (message.isStationary === true) {
            writer.uint32(312).bool(message.isStationary);
        }
        if (message.speed !== 0) {
            writer.uint32(96).uint64(message.speed);
        }
        if (message.accuracy !== 0) {
            writer.uint32(104).uint64(message.accuracy);
        }
        if (message.energyEfficiency !== 0) {
            writer.uint32(112).uint64(message.energyEfficiency);
        }
        if (message.mass !== 0) {
            writer.uint32(120).uint64(message.mass);
        }
        if (message.strength !== 0) {
            writer.uint32(128).uint64(message.strength);
        }
        if (message.meleeAttack !== 0) {
            writer.uint32(136).uint64(message.meleeAttack);
        }
        if (message.rangeAttack !== 0) {
            writer.uint32(144).uint64(message.rangeAttack);
        }
        if (message.meleeDefense !== 0) {
            writer.uint32(152).uint64(message.meleeDefense);
        }
        if (message.rangeDefense !== 0) {
            writer.uint32(160).uint64(message.rangeDefense);
        }
        if (message.generateRate !== 0) {
            writer.uint32(168).uint64(message.generateRate);
        }
        if (message.chargeRate !== 0) {
            writer.uint32(176).uint64(message.chargeRate);
        }
        if (message.drainRate !== 0) {
            writer.uint32(184).uint64(message.drainRate);
        }
        if (message.chargingSlotCount !== 0) {
            writer.uint32(280).uint64(message.chargingSlotCount);
        }
        for (const v of message.chargingSlot) {
            writer.uint32(290).string(v);
        }
        if (message.buildRate !== 0) {
            writer.uint32(192).uint64(message.buildRate);
        }
        if (message.restorationRate !== 0) {
            writer.uint32(200).uint64(message.restorationRate);
        }
        if (message.capacityMax !== 0) {
            writer.uint32(208).uint64(message.capacityMax);
        }
        if (message.healthCurrent !== 0) {
            writer.uint32(216).uint64(message.healthCurrent);
        }
        if (message.healthMax !== 0) {
            writer.uint32(224).uint64(message.healthMax);
        }
        if (message.battery !== undefined) {
            Coin.encode(message.battery, writer.uint32(234).fork()).ldelim();
        }
        if (message.energyToBuild !== undefined) {
            Coin.encode(message.energyToBuild, writer.uint32(242).fork()).ldelim();
        }
        if (message.parentId !== 0) {
            writer.uint32(248).int64(message.parentId);
        }
        writer.uint32(258).fork();
        for (const v of message.storage) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.capacityCurrent !== 0) {
            writer.uint32(264).uint64(message.capacityCurrent);
        }
        if (message.reactor !== "") {
            writer.uint32(274).string(message.reactor);
        }
        if (message.primaryColor !== "") {
            writer.uint32(298).string(message.primaryColor);
        }
        if (message.secondaryColor !== "") {
            writer.uint32(306).string(message.secondaryColor);
        }
        if (message.builtBy !== 0) {
            writer.uint32(320).uint64(message.builtBy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStructure };
        message.features = [];
        message.ambits = [];
        message.chargingSlot = [];
        message.storage = [];
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
                    message.schematic = reader.string();
                    break;
                case 8:
                    message.supervisor = reader.string();
                    break;
                case 9:
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
                case 10:
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
                case 11:
                    message.isMobile = reader.bool();
                    break;
                case 39:
                    message.isStationary = reader.bool();
                    break;
                case 12:
                    message.speed = longToNumber(reader.uint64());
                    break;
                case 13:
                    message.accuracy = longToNumber(reader.uint64());
                    break;
                case 14:
                    message.energyEfficiency = longToNumber(reader.uint64());
                    break;
                case 15:
                    message.mass = longToNumber(reader.uint64());
                    break;
                case 16:
                    message.strength = longToNumber(reader.uint64());
                    break;
                case 17:
                    message.meleeAttack = longToNumber(reader.uint64());
                    break;
                case 18:
                    message.rangeAttack = longToNumber(reader.uint64());
                    break;
                case 19:
                    message.meleeDefense = longToNumber(reader.uint64());
                    break;
                case 20:
                    message.rangeDefense = longToNumber(reader.uint64());
                    break;
                case 21:
                    message.generateRate = longToNumber(reader.uint64());
                    break;
                case 22:
                    message.chargeRate = longToNumber(reader.uint64());
                    break;
                case 23:
                    message.drainRate = longToNumber(reader.uint64());
                    break;
                case 35:
                    message.chargingSlotCount = longToNumber(reader.uint64());
                    break;
                case 36:
                    message.chargingSlot.push(reader.string());
                    break;
                case 24:
                    message.buildRate = longToNumber(reader.uint64());
                    break;
                case 25:
                    message.restorationRate = longToNumber(reader.uint64());
                    break;
                case 26:
                    message.capacityMax = longToNumber(reader.uint64());
                    break;
                case 27:
                    message.healthCurrent = longToNumber(reader.uint64());
                    break;
                case 28:
                    message.healthMax = longToNumber(reader.uint64());
                    break;
                case 29:
                    message.battery = Coin.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.energyToBuild = Coin.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.parentId = longToNumber(reader.int64());
                    break;
                case 32:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.storage.push(longToNumber(reader.uint64()));
                        }
                    }
                    else {
                        message.storage.push(longToNumber(reader.uint64()));
                    }
                    break;
                case 33:
                    message.capacityCurrent = longToNumber(reader.uint64());
                    break;
                case 34:
                    message.reactor = reader.string();
                    break;
                case 37:
                    message.primaryColor = reader.string();
                    break;
                case 38:
                    message.secondaryColor = reader.string();
                    break;
                case 40:
                    message.builtBy = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStructure };
        message.features = [];
        message.ambits = [];
        message.chargingSlot = [];
        message.storage = [];
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
        if (object.schematic !== undefined && object.schematic !== null) {
            message.schematic = String(object.schematic);
        }
        else {
            message.schematic = "";
        }
        if (object.supervisor !== undefined && object.supervisor !== null) {
            message.supervisor = String(object.supervisor);
        }
        else {
            message.supervisor = "";
        }
        if (object.features !== undefined && object.features !== null) {
            for (const e of object.features) {
                message.features.push(structure_FeatureFromJSON(e));
            }
        }
        if (object.ambits !== undefined && object.ambits !== null) {
            for (const e of object.ambits) {
                message.ambits.push(structure_AmbitFromJSON(e));
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
        if (object.chargingSlot !== undefined && object.chargingSlot !== null) {
            for (const e of object.chargingSlot) {
                message.chargingSlot.push(String(e));
            }
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
        if (object.healthCurrent !== undefined && object.healthCurrent !== null) {
            message.healthCurrent = Number(object.healthCurrent);
        }
        else {
            message.healthCurrent = 0;
        }
        if (object.healthMax !== undefined && object.healthMax !== null) {
            message.healthMax = Number(object.healthMax);
        }
        else {
            message.healthMax = 0;
        }
        if (object.battery !== undefined && object.battery !== null) {
            message.battery = Coin.fromJSON(object.battery);
        }
        else {
            message.battery = undefined;
        }
        if (object.energyToBuild !== undefined && object.energyToBuild !== null) {
            message.energyToBuild = Coin.fromJSON(object.energyToBuild);
        }
        else {
            message.energyToBuild = undefined;
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = Number(object.parentId);
        }
        else {
            message.parentId = 0;
        }
        if (object.storage !== undefined && object.storage !== null) {
            for (const e of object.storage) {
                message.storage.push(Number(e));
            }
        }
        if (object.capacityCurrent !== undefined &&
            object.capacityCurrent !== null) {
            message.capacityCurrent = Number(object.capacityCurrent);
        }
        else {
            message.capacityCurrent = 0;
        }
        if (object.reactor !== undefined && object.reactor !== null) {
            message.reactor = String(object.reactor);
        }
        else {
            message.reactor = "";
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
        if (object.builtBy !== undefined && object.builtBy !== null) {
            message.builtBy = Number(object.builtBy);
        }
        else {
            message.builtBy = 0;
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
        message.schematic !== undefined && (obj.schematic = message.schematic);
        message.supervisor !== undefined && (obj.supervisor = message.supervisor);
        if (message.features) {
            obj.features = message.features.map((e) => structure_FeatureToJSON(e));
        }
        else {
            obj.features = [];
        }
        if (message.ambits) {
            obj.ambits = message.ambits.map((e) => structure_AmbitToJSON(e));
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
        if (message.chargingSlot) {
            obj.chargingSlot = message.chargingSlot.map((e) => e);
        }
        else {
            obj.chargingSlot = [];
        }
        message.buildRate !== undefined && (obj.buildRate = message.buildRate);
        message.restorationRate !== undefined &&
            (obj.restorationRate = message.restorationRate);
        message.capacityMax !== undefined &&
            (obj.capacityMax = message.capacityMax);
        message.healthCurrent !== undefined &&
            (obj.healthCurrent = message.healthCurrent);
        message.healthMax !== undefined && (obj.healthMax = message.healthMax);
        message.battery !== undefined &&
            (obj.battery = message.battery
                ? Coin.toJSON(message.battery)
                : undefined);
        message.energyToBuild !== undefined &&
            (obj.energyToBuild = message.energyToBuild
                ? Coin.toJSON(message.energyToBuild)
                : undefined);
        message.parentId !== undefined && (obj.parentId = message.parentId);
        if (message.storage) {
            obj.storage = message.storage.map((e) => e);
        }
        else {
            obj.storage = [];
        }
        message.capacityCurrent !== undefined &&
            (obj.capacityCurrent = message.capacityCurrent);
        message.reactor !== undefined && (obj.reactor = message.reactor);
        message.primaryColor !== undefined &&
            (obj.primaryColor = message.primaryColor);
        message.secondaryColor !== undefined &&
            (obj.secondaryColor = message.secondaryColor);
        message.builtBy !== undefined && (obj.builtBy = message.builtBy);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStructure };
        message.features = [];
        message.ambits = [];
        message.chargingSlot = [];
        message.storage = [];
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
        if (object.schematic !== undefined && object.schematic !== null) {
            message.schematic = object.schematic;
        }
        else {
            message.schematic = "";
        }
        if (object.supervisor !== undefined && object.supervisor !== null) {
            message.supervisor = object.supervisor;
        }
        else {
            message.supervisor = "";
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
        if (object.chargingSlot !== undefined && object.chargingSlot !== null) {
            for (const e of object.chargingSlot) {
                message.chargingSlot.push(e);
            }
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
        if (object.healthCurrent !== undefined && object.healthCurrent !== null) {
            message.healthCurrent = object.healthCurrent;
        }
        else {
            message.healthCurrent = 0;
        }
        if (object.healthMax !== undefined && object.healthMax !== null) {
            message.healthMax = object.healthMax;
        }
        else {
            message.healthMax = 0;
        }
        if (object.battery !== undefined && object.battery !== null) {
            message.battery = Coin.fromPartial(object.battery);
        }
        else {
            message.battery = undefined;
        }
        if (object.energyToBuild !== undefined && object.energyToBuild !== null) {
            message.energyToBuild = Coin.fromPartial(object.energyToBuild);
        }
        else {
            message.energyToBuild = undefined;
        }
        if (object.parentId !== undefined && object.parentId !== null) {
            message.parentId = object.parentId;
        }
        else {
            message.parentId = 0;
        }
        if (object.storage !== undefined && object.storage !== null) {
            for (const e of object.storage) {
                message.storage.push(e);
            }
        }
        if (object.capacityCurrent !== undefined &&
            object.capacityCurrent !== null) {
            message.capacityCurrent = object.capacityCurrent;
        }
        else {
            message.capacityCurrent = 0;
        }
        if (object.reactor !== undefined && object.reactor !== null) {
            message.reactor = object.reactor;
        }
        else {
            message.reactor = "";
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
        if (object.builtBy !== undefined && object.builtBy !== null) {
            message.builtBy = object.builtBy;
        }
        else {
            message.builtBy = 0;
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
