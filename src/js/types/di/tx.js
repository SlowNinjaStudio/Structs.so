/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export const protobufPackage = "di";
export var MsgCreateStructureResponse_Result;
(function (MsgCreateStructureResponse_Result) {
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["POWER_FAILURE"] = 2] = "POWER_FAILURE";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["FEATURE_FAILURE"] = 3] = "FEATURE_FAILURE";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["REACH_FAILURE"] = 4] = "REACH_FAILURE";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["OFFLINE_FAILURE"] = 5] = "OFFLINE_FAILURE";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["PERMISSION_FAILURE"] = 6] = "PERMISSION_FAILURE";
    MsgCreateStructureResponse_Result[MsgCreateStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgCreateStructureResponse_Result || (MsgCreateStructureResponse_Result = {}));
export function msgCreateStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgCreateStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgCreateStructureResponse_Result.FAILURE;
        case 2:
        case "POWER_FAILURE":
            return MsgCreateStructureResponse_Result.POWER_FAILURE;
        case 3:
        case "FEATURE_FAILURE":
            return MsgCreateStructureResponse_Result.FEATURE_FAILURE;
        case 4:
        case "REACH_FAILURE":
            return MsgCreateStructureResponse_Result.REACH_FAILURE;
        case 5:
        case "OFFLINE_FAILURE":
            return MsgCreateStructureResponse_Result.OFFLINE_FAILURE;
        case 6:
        case "PERMISSION_FAILURE":
            return MsgCreateStructureResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgCreateStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgCreateStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgCreateStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgCreateStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgCreateStructureResponse_Result.POWER_FAILURE:
            return "POWER_FAILURE";
        case MsgCreateStructureResponse_Result.FEATURE_FAILURE:
            return "FEATURE_FAILURE";
        case MsgCreateStructureResponse_Result.REACH_FAILURE:
            return "REACH_FAILURE";
        case MsgCreateStructureResponse_Result.OFFLINE_FAILURE:
            return "OFFLINE_FAILURE";
        case MsgCreateStructureResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgTransferSchematicResponse_Result;
(function (MsgTransferSchematicResponse_Result) {
    MsgTransferSchematicResponse_Result[MsgTransferSchematicResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgTransferSchematicResponse_Result[MsgTransferSchematicResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgTransferSchematicResponse_Result[MsgTransferSchematicResponse_Result["PERMISSION_FAILURE"] = 2] = "PERMISSION_FAILURE";
    MsgTransferSchematicResponse_Result[MsgTransferSchematicResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgTransferSchematicResponse_Result || (MsgTransferSchematicResponse_Result = {}));
export function msgTransferSchematicResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgTransferSchematicResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgTransferSchematicResponse_Result.FAILURE;
        case 2:
        case "PERMISSION_FAILURE":
            return MsgTransferSchematicResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgTransferSchematicResponse_Result.UNRECOGNIZED;
    }
}
export function msgTransferSchematicResponse_ResultToJSON(object) {
    switch (object) {
        case MsgTransferSchematicResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgTransferSchematicResponse_Result.FAILURE:
            return "FAILURE";
        case MsgTransferSchematicResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgAttackStructureResponse_Result;
(function (MsgAttackStructureResponse_Result) {
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["POWER_FAILURE"] = 2] = "POWER_FAILURE";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["FEATURE_FAILURE"] = 3] = "FEATURE_FAILURE";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["REACH_FAILURE"] = 4] = "REACH_FAILURE";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["OFFLINE_FAILURE"] = 5] = "OFFLINE_FAILURE";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["PERMISSION_FAILURE"] = 6] = "PERMISSION_FAILURE";
    MsgAttackStructureResponse_Result[MsgAttackStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgAttackStructureResponse_Result || (MsgAttackStructureResponse_Result = {}));
export function msgAttackStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgAttackStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgAttackStructureResponse_Result.FAILURE;
        case 2:
        case "POWER_FAILURE":
            return MsgAttackStructureResponse_Result.POWER_FAILURE;
        case 3:
        case "FEATURE_FAILURE":
            return MsgAttackStructureResponse_Result.FEATURE_FAILURE;
        case 4:
        case "REACH_FAILURE":
            return MsgAttackStructureResponse_Result.REACH_FAILURE;
        case 5:
        case "OFFLINE_FAILURE":
            return MsgAttackStructureResponse_Result.OFFLINE_FAILURE;
        case 6:
        case "PERMISSION_FAILURE":
            return MsgAttackStructureResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgAttackStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgAttackStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgAttackStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgAttackStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgAttackStructureResponse_Result.POWER_FAILURE:
            return "POWER_FAILURE";
        case MsgAttackStructureResponse_Result.FEATURE_FAILURE:
            return "FEATURE_FAILURE";
        case MsgAttackStructureResponse_Result.REACH_FAILURE:
            return "REACH_FAILURE";
        case MsgAttackStructureResponse_Result.OFFLINE_FAILURE:
            return "OFFLINE_FAILURE";
        case MsgAttackStructureResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgDrainStructureResponse_Result;
(function (MsgDrainStructureResponse_Result) {
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["POWER_FAILURE"] = 2] = "POWER_FAILURE";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["FEATURE_FAILURE"] = 3] = "FEATURE_FAILURE";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["REACH_FAILURE"] = 4] = "REACH_FAILURE";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["OFFLINE_FAILURE"] = 5] = "OFFLINE_FAILURE";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["PERMISSION_FAILURE"] = 6] = "PERMISSION_FAILURE";
    MsgDrainStructureResponse_Result[MsgDrainStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgDrainStructureResponse_Result || (MsgDrainStructureResponse_Result = {}));
export function msgDrainStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgDrainStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgDrainStructureResponse_Result.FAILURE;
        case 2:
        case "POWER_FAILURE":
            return MsgDrainStructureResponse_Result.POWER_FAILURE;
        case 3:
        case "FEATURE_FAILURE":
            return MsgDrainStructureResponse_Result.FEATURE_FAILURE;
        case 4:
        case "REACH_FAILURE":
            return MsgDrainStructureResponse_Result.REACH_FAILURE;
        case 5:
        case "OFFLINE_FAILURE":
            return MsgDrainStructureResponse_Result.OFFLINE_FAILURE;
        case 6:
        case "PERMISSION_FAILURE":
            return MsgDrainStructureResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgDrainStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgDrainStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgDrainStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgDrainStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgDrainStructureResponse_Result.POWER_FAILURE:
            return "POWER_FAILURE";
        case MsgDrainStructureResponse_Result.FEATURE_FAILURE:
            return "FEATURE_FAILURE";
        case MsgDrainStructureResponse_Result.REACH_FAILURE:
            return "REACH_FAILURE";
        case MsgDrainStructureResponse_Result.OFFLINE_FAILURE:
            return "OFFLINE_FAILURE";
        case MsgDrainStructureResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgRepairStructureResponse_Result;
(function (MsgRepairStructureResponse_Result) {
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["POWER_FAILURE"] = 2] = "POWER_FAILURE";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["FEATURE_FAILURE"] = 3] = "FEATURE_FAILURE";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["REACH_FAILURE"] = 4] = "REACH_FAILURE";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["OFFLINE_FAILURE"] = 5] = "OFFLINE_FAILURE";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["PERMISSION_FAILURE"] = 6] = "PERMISSION_FAILURE";
    MsgRepairStructureResponse_Result[MsgRepairStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgRepairStructureResponse_Result || (MsgRepairStructureResponse_Result = {}));
export function msgRepairStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgRepairStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgRepairStructureResponse_Result.FAILURE;
        case 2:
        case "POWER_FAILURE":
            return MsgRepairStructureResponse_Result.POWER_FAILURE;
        case 3:
        case "FEATURE_FAILURE":
            return MsgRepairStructureResponse_Result.FEATURE_FAILURE;
        case 4:
        case "REACH_FAILURE":
            return MsgRepairStructureResponse_Result.REACH_FAILURE;
        case 5:
        case "OFFLINE_FAILURE":
            return MsgRepairStructureResponse_Result.OFFLINE_FAILURE;
        case 6:
        case "PERMISSION_FAILURE":
            return MsgRepairStructureResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgRepairStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgRepairStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgRepairStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgRepairStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgRepairStructureResponse_Result.POWER_FAILURE:
            return "POWER_FAILURE";
        case MsgRepairStructureResponse_Result.FEATURE_FAILURE:
            return "FEATURE_FAILURE";
        case MsgRepairStructureResponse_Result.REACH_FAILURE:
            return "REACH_FAILURE";
        case MsgRepairStructureResponse_Result.OFFLINE_FAILURE:
            return "OFFLINE_FAILURE";
        case MsgRepairStructureResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgConnectStructureResponse_Result;
(function (MsgConnectStructureResponse_Result) {
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["POWER_FAILURE"] = 2] = "POWER_FAILURE";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["FEATURE_FAILURE"] = 3] = "FEATURE_FAILURE";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["REACH_FAILURE"] = 4] = "REACH_FAILURE";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["OFFLINE_FAILURE"] = 5] = "OFFLINE_FAILURE";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["PERMISSION_FAILURE"] = 6] = "PERMISSION_FAILURE";
    MsgConnectStructureResponse_Result[MsgConnectStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgConnectStructureResponse_Result || (MsgConnectStructureResponse_Result = {}));
export function msgConnectStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgConnectStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgConnectStructureResponse_Result.FAILURE;
        case 2:
        case "POWER_FAILURE":
            return MsgConnectStructureResponse_Result.POWER_FAILURE;
        case 3:
        case "FEATURE_FAILURE":
            return MsgConnectStructureResponse_Result.FEATURE_FAILURE;
        case 4:
        case "REACH_FAILURE":
            return MsgConnectStructureResponse_Result.REACH_FAILURE;
        case 5:
        case "OFFLINE_FAILURE":
            return MsgConnectStructureResponse_Result.OFFLINE_FAILURE;
        case 6:
        case "PERMISSION_FAILURE":
            return MsgConnectStructureResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgConnectStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgConnectStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgConnectStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgConnectStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgConnectStructureResponse_Result.POWER_FAILURE:
            return "POWER_FAILURE";
        case MsgConnectStructureResponse_Result.FEATURE_FAILURE:
            return "FEATURE_FAILURE";
        case MsgConnectStructureResponse_Result.REACH_FAILURE:
            return "REACH_FAILURE";
        case MsgConnectStructureResponse_Result.OFFLINE_FAILURE:
            return "OFFLINE_FAILURE";
        case MsgConnectStructureResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgChargeStructureResponse_Result;
(function (MsgChargeStructureResponse_Result) {
    MsgChargeStructureResponse_Result[MsgChargeStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgChargeStructureResponse_Result[MsgChargeStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgChargeStructureResponse_Result[MsgChargeStructureResponse_Result["POWER_FAILURE"] = 2] = "POWER_FAILURE";
    MsgChargeStructureResponse_Result[MsgChargeStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgChargeStructureResponse_Result || (MsgChargeStructureResponse_Result = {}));
export function msgChargeStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgChargeStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgChargeStructureResponse_Result.FAILURE;
        case 2:
        case "POWER_FAILURE":
            return MsgChargeStructureResponse_Result.POWER_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgChargeStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgChargeStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgChargeStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgChargeStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgChargeStructureResponse_Result.POWER_FAILURE:
            return "POWER_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgTransferStructureResponse_Result;
(function (MsgTransferStructureResponse_Result) {
    MsgTransferStructureResponse_Result[MsgTransferStructureResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgTransferStructureResponse_Result[MsgTransferStructureResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgTransferStructureResponse_Result[MsgTransferStructureResponse_Result["PERMISSION_FAILURE"] = 2] = "PERMISSION_FAILURE";
    MsgTransferStructureResponse_Result[MsgTransferStructureResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgTransferStructureResponse_Result || (MsgTransferStructureResponse_Result = {}));
export function msgTransferStructureResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgTransferStructureResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgTransferStructureResponse_Result.FAILURE;
        case 2:
        case "PERMISSION_FAILURE":
            return MsgTransferStructureResponse_Result.PERMISSION_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgTransferStructureResponse_Result.UNRECOGNIZED;
    }
}
export function msgTransferStructureResponse_ResultToJSON(object) {
    switch (object) {
        case MsgTransferStructureResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgTransferStructureResponse_Result.FAILURE:
            return "FAILURE";
        case MsgTransferStructureResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        default:
            return "UNKNOWN";
    }
}
export var MsgStructureChargeSlotResponse_Result;
(function (MsgStructureChargeSlotResponse_Result) {
    MsgStructureChargeSlotResponse_Result[MsgStructureChargeSlotResponse_Result["SUCCESS"] = 0] = "SUCCESS";
    MsgStructureChargeSlotResponse_Result[MsgStructureChargeSlotResponse_Result["FAILURE"] = 1] = "FAILURE";
    MsgStructureChargeSlotResponse_Result[MsgStructureChargeSlotResponse_Result["PERMISSION_FAILURE"] = 2] = "PERMISSION_FAILURE";
    MsgStructureChargeSlotResponse_Result[MsgStructureChargeSlotResponse_Result["FEATURE_FAILURE"] = 3] = "FEATURE_FAILURE";
    MsgStructureChargeSlotResponse_Result[MsgStructureChargeSlotResponse_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MsgStructureChargeSlotResponse_Result || (MsgStructureChargeSlotResponse_Result = {}));
export function msgStructureChargeSlotResponse_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "SUCCESS":
            return MsgStructureChargeSlotResponse_Result.SUCCESS;
        case 1:
        case "FAILURE":
            return MsgStructureChargeSlotResponse_Result.FAILURE;
        case 2:
        case "PERMISSION_FAILURE":
            return MsgStructureChargeSlotResponse_Result.PERMISSION_FAILURE;
        case 3:
        case "FEATURE_FAILURE":
            return MsgStructureChargeSlotResponse_Result.FEATURE_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MsgStructureChargeSlotResponse_Result.UNRECOGNIZED;
    }
}
export function msgStructureChargeSlotResponse_ResultToJSON(object) {
    switch (object) {
        case MsgStructureChargeSlotResponse_Result.SUCCESS:
            return "SUCCESS";
        case MsgStructureChargeSlotResponse_Result.FAILURE:
            return "FAILURE";
        case MsgStructureChargeSlotResponse_Result.PERMISSION_FAILURE:
            return "PERMISSION_FAILURE";
        case MsgStructureChargeSlotResponse_Result.FEATURE_FAILURE:
            return "FEATURE_FAILURE";
        default:
            return "UNKNOWN";
    }
}
const baseMsgCreateReactor = {
    creator: "",
    validator: "",
    moniker: "",
    description: "",
};
export const MsgCreateReactor = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.validator !== "") {
            writer.uint32(18).string(message.validator);
        }
        if (message.moniker !== "") {
            writer.uint32(26).string(message.moniker);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.power !== undefined) {
            Coin.encode(message.power, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateReactor };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.validator = reader.string();
                    break;
                case 3:
                    message.moniker = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.power = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateReactor };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = String(object.moniker);
        }
        else {
            message.moniker = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromJSON(object.power);
        }
        else {
            message.power = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.validator !== undefined && (obj.validator = message.validator);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.description !== undefined &&
            (obj.description = message.description);
        message.power !== undefined &&
            (obj.power = message.power ? Coin.toJSON(message.power) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateReactor };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        else {
            message.moniker = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromPartial(object.power);
        }
        else {
            message.power = undefined;
        }
        return message;
    },
};
const baseMsgCreateReactorResponse = { id: 0 };
export const MsgCreateReactorResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateReactorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateReactorResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateReactorResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateReactor = {
    creator: "",
    id: 0,
    validator: "",
    moniker: "",
    description: "",
};
export const MsgUpdateReactor = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        if (message.moniker !== "") {
            writer.uint32(34).string(message.moniker);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.power !== undefined) {
            Coin.encode(message.power, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateReactor };
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
                    message.validator = reader.string();
                    break;
                case 4:
                    message.moniker = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.power = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateReactor };
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
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = String(object.moniker);
        }
        else {
            message.moniker = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromJSON(object.power);
        }
        else {
            message.power = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.validator !== undefined && (obj.validator = message.validator);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.description !== undefined &&
            (obj.description = message.description);
        message.power !== undefined &&
            (obj.power = message.power ? Coin.toJSON(message.power) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateReactor };
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
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        else {
            message.moniker = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = Coin.fromPartial(object.power);
        }
        else {
            message.power = undefined;
        }
        return message;
    },
};
const baseMsgUpdateReactorResponse = {};
export const MsgUpdateReactorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateReactorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateReactorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateReactorResponse,
        };
        return message;
    },
};
const baseMsgDeleteReactor = { creator: "", id: 0 };
export const MsgDeleteReactor = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteReactor };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteReactor };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteReactor };
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
        return message;
    },
};
const baseMsgDeleteReactorResponse = {};
export const MsgDeleteReactorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteReactorResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteReactorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteReactorResponse,
        };
        return message;
    },
};
const baseMsgUpdateInstance = { creator: "", name: "", mood: "" };
export const MsgUpdateInstance = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.mood !== "") {
            writer.uint32(26).string(message.mood);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateInstance };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
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
        const message = { ...baseMsgUpdateInstance };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.mood !== undefined && (obj.mood = message.mood);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateInstance };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
const baseMsgUpdateInstanceName = { creator: "", name: "" };
export const MsgUpdateInstanceName = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateInstanceName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateInstanceName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateInstanceName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        return message;
    },
};
const baseMsgUpdateInstanceMood = { creator: "", mood: "" };
export const MsgUpdateInstanceMood = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.mood !== "") {
            writer.uint32(18).string(message.mood);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateInstanceMood };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgUpdateInstanceMood };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.mood !== undefined && (obj.mood = message.mood);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateInstanceMood };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
const baseMsgUpdateInstanceResponse = {};
export const MsgUpdateInstanceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateInstanceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateInstanceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateInstanceResponse,
        };
        return message;
    },
};
const baseMsgCreateStructure = {
    creator: "",
    name: "",
    description: "",
    hash: "",
    input: "",
    schematic: "",
    performingStructure: 0,
    destinationStructure: 0,
};
export const MsgCreateStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.input !== "") {
            writer.uint32(42).string(message.input);
        }
        if (message.schematic !== "") {
            writer.uint32(50).string(message.schematic);
        }
        if (message.performingStructure !== 0) {
            writer.uint32(56).uint64(message.performingStructure);
        }
        if (message.destinationStructure !== 0) {
            writer.uint32(64).uint64(message.destinationStructure);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.input = reader.string();
                    break;
                case 6:
                    message.schematic = reader.string();
                    break;
                case 7:
                    message.performingStructure = longToNumber(reader.uint64());
                    break;
                case 8:
                    message.destinationStructure = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = Number(object.performingStructure);
        }
        else {
            message.performingStructure = 0;
        }
        if (object.destinationStructure !== undefined &&
            object.destinationStructure !== null) {
            message.destinationStructure = Number(object.destinationStructure);
        }
        else {
            message.destinationStructure = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hash !== undefined && (obj.hash = message.hash);
        message.input !== undefined && (obj.input = message.input);
        message.schematic !== undefined && (obj.schematic = message.schematic);
        message.performingStructure !== undefined &&
            (obj.performingStructure = message.performingStructure);
        message.destinationStructure !== undefined &&
            (obj.destinationStructure = message.destinationStructure);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = object.performingStructure;
        }
        else {
            message.performingStructure = 0;
        }
        if (object.destinationStructure !== undefined &&
            object.destinationStructure !== null) {
            message.destinationStructure = object.destinationStructure;
        }
        else {
            message.destinationStructure = 0;
        }
        return message;
    },
};
const baseMsgCreateStructureResponse = { id: 0, actionResult: 0 };
export const MsgCreateStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.actionResult !== 0) {
            writer.uint32(16).int32(message.actionResult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.actionResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateStructureResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgCreateStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.actionResult !== undefined &&
            (obj.actionResult = msgCreateStructureResponse_ResultToJSON(message.actionResult));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateStructureResponse,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
};
const baseMsgUpdateStructure = {
    creator: "",
    id: 0,
    name: "",
    description: "",
};
export const MsgUpdateStructure = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateStructure };
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateStructure };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateStructure };
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
        return message;
    },
};
const baseMsgUpdateStructureResponse = {};
export const MsgUpdateStructureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateStructureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateStructureResponse,
        };
        return message;
    },
};
const baseMsgDeleteStructure = { creator: "", id: 0 };
export const MsgDeleteStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteStructure };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteStructure };
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
        return message;
    },
};
const baseMsgDeleteStructureResponse = {};
export const MsgDeleteStructureResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteStructureResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteStructureResponse,
        };
        return message;
    },
};
const baseMsgCreateSchematic = {
    creator: "",
    name: "",
    description: "",
    hash: "",
    input: "",
    owner: "",
};
export const MsgCreateSchematic = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.input !== "") {
            writer.uint32(42).string(message.input);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSchematic };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.input = reader.string();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSchematic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hash !== undefined && (obj.hash = message.hash);
        message.input !== undefined && (obj.input = message.input);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSchematic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
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
        return message;
    },
};
const baseMsgCreateSchematicResponse = {
    id: 0,
    name: "",
    description: "",
    hash: "",
    input: "",
    owner: "",
};
export const MsgCreateSchematicResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.hash !== "") {
            writer.uint32(34).string(message.hash);
        }
        if (message.input !== "") {
            writer.uint32(42).string(message.input);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateSchematicResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.input = reader.string();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateSchematicResponse,
        };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hash !== undefined && (obj.hash = message.hash);
        message.input !== undefined && (obj.input = message.input);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateSchematicResponse,
        };
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
        return message;
    },
};
const baseMsgUpdateSchematic = {
    creator: "",
    id: 0,
    name: "",
    owner: "",
};
export const MsgUpdateSchematic = {
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
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSchematic };
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
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSchematic };
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
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSchematic };
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
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
const baseMsgUpdateSchematicResponse = {};
export const MsgUpdateSchematicResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateSchematicResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateSchematicResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateSchematicResponse,
        };
        return message;
    },
};
const baseMsgDeleteSchematic = { creator: "", id: 0 };
export const MsgDeleteSchematic = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSchematic };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteSchematic };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSchematic };
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
        return message;
    },
};
const baseMsgDeleteSchematicResponse = {};
export const MsgDeleteSchematicResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteSchematicResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteSchematicResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteSchematicResponse,
        };
        return message;
    },
};
const baseMsgTransferSchematic = {
    creator: "",
    schematic: "",
    newOwner: "",
};
export const MsgTransferSchematic = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.schematic !== "") {
            writer.uint32(18).string(message.schematic);
        }
        if (message.newOwner !== "") {
            writer.uint32(26).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransferSchematic };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.schematic = reader.string();
                    break;
                case 3:
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgTransferSchematic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.schematic !== undefined && object.schematic !== null) {
            message.schematic = String(object.schematic);
        }
        else {
            message.schematic = "";
        }
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = String(object.newOwner);
        }
        else {
            message.newOwner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.schematic !== undefined && (obj.schematic = message.schematic);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgTransferSchematic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.schematic !== undefined && object.schematic !== null) {
            message.schematic = object.schematic;
        }
        else {
            message.schematic = "";
        }
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = object.newOwner;
        }
        else {
            message.newOwner = "";
        }
        return message;
    },
};
const baseMsgTransferSchematicResponse = { actionResult: 0 };
export const MsgTransferSchematicResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgTransferSchematicResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgTransferSchematicResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgTransferSchematicResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgTransferSchematicResponse_ResultToJSON(message.actionResult));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgTransferSchematicResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
};
const baseMsgAttackStructure = {
    creator: "",
    performingStructure: 0,
    targetStructure: 0,
    aimCalculationHash: "",
    aimCalculationInput: "",
};
export const MsgAttackStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.performingStructure !== 0) {
            writer.uint32(16).uint64(message.performingStructure);
        }
        if (message.targetStructure !== 0) {
            writer.uint32(24).uint64(message.targetStructure);
        }
        if (message.aimCalculationHash !== "") {
            writer.uint32(34).string(message.aimCalculationHash);
        }
        if (message.aimCalculationInput !== "") {
            writer.uint32(42).string(message.aimCalculationInput);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAttackStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.performingStructure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.targetStructure = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.aimCalculationHash = reader.string();
                    break;
                case 5:
                    message.aimCalculationInput = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAttackStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = Number(object.performingStructure);
        }
        else {
            message.performingStructure = 0;
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = Number(object.targetStructure);
        }
        else {
            message.targetStructure = 0;
        }
        if (object.aimCalculationHash !== undefined &&
            object.aimCalculationHash !== null) {
            message.aimCalculationHash = String(object.aimCalculationHash);
        }
        else {
            message.aimCalculationHash = "";
        }
        if (object.aimCalculationInput !== undefined &&
            object.aimCalculationInput !== null) {
            message.aimCalculationInput = String(object.aimCalculationInput);
        }
        else {
            message.aimCalculationInput = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.performingStructure !== undefined &&
            (obj.performingStructure = message.performingStructure);
        message.targetStructure !== undefined &&
            (obj.targetStructure = message.targetStructure);
        message.aimCalculationHash !== undefined &&
            (obj.aimCalculationHash = message.aimCalculationHash);
        message.aimCalculationInput !== undefined &&
            (obj.aimCalculationInput = message.aimCalculationInput);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAttackStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = object.performingStructure;
        }
        else {
            message.performingStructure = 0;
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = object.targetStructure;
        }
        else {
            message.targetStructure = 0;
        }
        if (object.aimCalculationHash !== undefined &&
            object.aimCalculationHash !== null) {
            message.aimCalculationHash = object.aimCalculationHash;
        }
        else {
            message.aimCalculationHash = "";
        }
        if (object.aimCalculationInput !== undefined &&
            object.aimCalculationInput !== null) {
            message.aimCalculationInput = object.aimCalculationInput;
        }
        else {
            message.aimCalculationInput = "";
        }
        return message;
    },
};
const baseMsgAttackStructureResponse = {
    actionResult: 0,
    damagePerformed: 0,
    targetDestroyed: false,
};
export const MsgAttackStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        if (message.damagePerformed !== 0) {
            writer.uint32(16).uint64(message.damagePerformed);
        }
        if (message.targetDestroyed === true) {
            writer.uint32(24).bool(message.targetDestroyed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAttackStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                case 2:
                    message.damagePerformed = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.targetDestroyed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgAttackStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgAttackStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        if (object.damagePerformed !== undefined &&
            object.damagePerformed !== null) {
            message.damagePerformed = Number(object.damagePerformed);
        }
        else {
            message.damagePerformed = 0;
        }
        if (object.targetDestroyed !== undefined &&
            object.targetDestroyed !== null) {
            message.targetDestroyed = Boolean(object.targetDestroyed);
        }
        else {
            message.targetDestroyed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgAttackStructureResponse_ResultToJSON(message.actionResult));
        message.damagePerformed !== undefined &&
            (obj.damagePerformed = message.damagePerformed);
        message.targetDestroyed !== undefined &&
            (obj.targetDestroyed = message.targetDestroyed);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgAttackStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        if (object.damagePerformed !== undefined &&
            object.damagePerformed !== null) {
            message.damagePerformed = object.damagePerformed;
        }
        else {
            message.damagePerformed = 0;
        }
        if (object.targetDestroyed !== undefined &&
            object.targetDestroyed !== null) {
            message.targetDestroyed = object.targetDestroyed;
        }
        else {
            message.targetDestroyed = false;
        }
        return message;
    },
};
const baseMsgDrainStructure = {
    creator: "",
    performingStructure: 0,
    targetStructure: 0,
};
export const MsgDrainStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.performingStructure !== 0) {
            writer.uint32(16).uint64(message.performingStructure);
        }
        if (message.targetStructure !== 0) {
            writer.uint32(24).uint64(message.targetStructure);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDrainStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.performingStructure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.targetStructure = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDrainStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = Number(object.performingStructure);
        }
        else {
            message.performingStructure = 0;
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = Number(object.targetStructure);
        }
        else {
            message.targetStructure = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.performingStructure !== undefined &&
            (obj.performingStructure = message.performingStructure);
        message.targetStructure !== undefined &&
            (obj.targetStructure = message.targetStructure);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDrainStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = object.performingStructure;
        }
        else {
            message.performingStructure = 0;
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = object.targetStructure;
        }
        else {
            message.targetStructure = 0;
        }
        return message;
    },
};
const baseMsgDrainStructureResponse = { actionResult: 0 };
export const MsgDrainStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        if (message.drainAmount !== undefined) {
            Coin.encode(message.drainAmount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDrainStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                case 2:
                    message.drainAmount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgDrainStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgDrainStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        if (object.drainAmount !== undefined && object.drainAmount !== null) {
            message.drainAmount = Coin.fromJSON(object.drainAmount);
        }
        else {
            message.drainAmount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgDrainStructureResponse_ResultToJSON(message.actionResult));
        message.drainAmount !== undefined &&
            (obj.drainAmount = message.drainAmount
                ? Coin.toJSON(message.drainAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDrainStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        if (object.drainAmount !== undefined && object.drainAmount !== null) {
            message.drainAmount = Coin.fromPartial(object.drainAmount);
        }
        else {
            message.drainAmount = undefined;
        }
        return message;
    },
};
const baseMsgRepairStructure = {
    creator: "",
    performingStructure: 0,
    targetStructure: 0,
};
export const MsgRepairStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.performingStructure !== 0) {
            writer.uint32(16).uint64(message.performingStructure);
        }
        if (message.targetStructure !== 0) {
            writer.uint32(24).uint64(message.targetStructure);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRepairStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.performingStructure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.targetStructure = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRepairStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = Number(object.performingStructure);
        }
        else {
            message.performingStructure = 0;
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = Number(object.targetStructure);
        }
        else {
            message.targetStructure = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.performingStructure !== undefined &&
            (obj.performingStructure = message.performingStructure);
        message.targetStructure !== undefined &&
            (obj.targetStructure = message.targetStructure);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRepairStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = object.performingStructure;
        }
        else {
            message.performingStructure = 0;
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = object.targetStructure;
        }
        else {
            message.targetStructure = 0;
        }
        return message;
    },
};
const baseMsgRepairStructureResponse = {
    actionResult: 0,
    repairAmount: 0,
};
export const MsgRepairStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        if (message.repairAmount !== 0) {
            writer.uint32(16).uint64(message.repairAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRepairStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                case 2:
                    message.repairAmount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgRepairStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgRepairStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        if (object.repairAmount !== undefined && object.repairAmount !== null) {
            message.repairAmount = Number(object.repairAmount);
        }
        else {
            message.repairAmount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgRepairStructureResponse_ResultToJSON(message.actionResult));
        message.repairAmount !== undefined &&
            (obj.repairAmount = message.repairAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRepairStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        if (object.repairAmount !== undefined && object.repairAmount !== null) {
            message.repairAmount = object.repairAmount;
        }
        else {
            message.repairAmount = 0;
        }
        return message;
    },
};
const baseMsgConnectStructure = {
    creator: "",
    structure: 0,
    reactor: "",
};
export const MsgConnectStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.structure !== 0) {
            writer.uint32(16).uint64(message.structure);
        }
        if (message.reactor !== "") {
            writer.uint32(26).string(message.reactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgConnectStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.structure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.reactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgConnectStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.structure !== undefined && object.structure !== null) {
            message.structure = Number(object.structure);
        }
        else {
            message.structure = 0;
        }
        if (object.reactor !== undefined && object.reactor !== null) {
            message.reactor = String(object.reactor);
        }
        else {
            message.reactor = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.structure !== undefined && (obj.structure = message.structure);
        message.reactor !== undefined && (obj.reactor = message.reactor);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgConnectStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.structure !== undefined && object.structure !== null) {
            message.structure = object.structure;
        }
        else {
            message.structure = 0;
        }
        if (object.reactor !== undefined && object.reactor !== null) {
            message.reactor = object.reactor;
        }
        else {
            message.reactor = "";
        }
        return message;
    },
};
const baseMsgConnectStructureResponse = { actionResult: 0 };
export const MsgConnectStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgConnectStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgConnectStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgConnectStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgConnectStructureResponse_ResultToJSON(message.actionResult));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgConnectStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
};
const baseMsgChargeStructure = {
    creator: "",
    targetStructure: 0,
    chargeAmount: 0,
};
export const MsgChargeStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.targetStructure !== 0) {
            writer.uint32(16).uint64(message.targetStructure);
        }
        if (message.chargeAmount !== 0) {
            writer.uint32(24).uint64(message.chargeAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgChargeStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.targetStructure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.chargeAmount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgChargeStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = Number(object.targetStructure);
        }
        else {
            message.targetStructure = 0;
        }
        if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
            message.chargeAmount = Number(object.chargeAmount);
        }
        else {
            message.chargeAmount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.targetStructure !== undefined &&
            (obj.targetStructure = message.targetStructure);
        message.chargeAmount !== undefined &&
            (obj.chargeAmount = message.chargeAmount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgChargeStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = object.targetStructure;
        }
        else {
            message.targetStructure = 0;
        }
        if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
            message.chargeAmount = object.chargeAmount;
        }
        else {
            message.chargeAmount = 0;
        }
        return message;
    },
};
const baseMsgChargeStructureResponse = {
    actionResult: 0,
    chargeAmount: 0,
};
export const MsgChargeStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        if (message.chargeAmount !== 0) {
            writer.uint32(16).uint64(message.chargeAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgChargeStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                case 2:
                    message.chargeAmount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgChargeStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgChargeStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
            message.chargeAmount = Number(object.chargeAmount);
        }
        else {
            message.chargeAmount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgChargeStructureResponse_ResultToJSON(message.actionResult));
        message.chargeAmount !== undefined &&
            (obj.chargeAmount = message.chargeAmount);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgChargeStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        if (object.chargeAmount !== undefined && object.chargeAmount !== null) {
            message.chargeAmount = object.chargeAmount;
        }
        else {
            message.chargeAmount = 0;
        }
        return message;
    },
};
const baseMsgTransferStructure = {
    creator: "",
    targetStructure: 0,
    newSupervisor: "",
};
export const MsgTransferStructure = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.targetStructure !== 0) {
            writer.uint32(16).uint64(message.targetStructure);
        }
        if (message.newSupervisor !== "") {
            writer.uint32(26).string(message.newSupervisor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransferStructure };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.targetStructure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.newSupervisor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgTransferStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = Number(object.targetStructure);
        }
        else {
            message.targetStructure = 0;
        }
        if (object.newSupervisor !== undefined && object.newSupervisor !== null) {
            message.newSupervisor = String(object.newSupervisor);
        }
        else {
            message.newSupervisor = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.targetStructure !== undefined &&
            (obj.targetStructure = message.targetStructure);
        message.newSupervisor !== undefined &&
            (obj.newSupervisor = message.newSupervisor);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgTransferStructure };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.targetStructure !== undefined &&
            object.targetStructure !== null) {
            message.targetStructure = object.targetStructure;
        }
        else {
            message.targetStructure = 0;
        }
        if (object.newSupervisor !== undefined && object.newSupervisor !== null) {
            message.newSupervisor = object.newSupervisor;
        }
        else {
            message.newSupervisor = "";
        }
        return message;
    },
};
const baseMsgTransferStructureResponse = { actionResult: 0 };
export const MsgTransferStructureResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgTransferStructureResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgTransferStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgTransferStructureResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgTransferStructureResponse_ResultToJSON(message.actionResult));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgTransferStructureResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
};
const baseMsgStructureChargeSlot = {
    creator: "",
    performingStructure: 0,
    chargeSlot: 0,
    targetAddress: "",
};
export const MsgStructureChargeSlot = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.performingStructure !== 0) {
            writer.uint32(16).uint64(message.performingStructure);
        }
        if (message.chargeSlot !== 0) {
            writer.uint32(24).uint64(message.chargeSlot);
        }
        if (message.targetAddress !== "") {
            writer.uint32(34).string(message.targetAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgStructureChargeSlot };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.performingStructure = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.chargeSlot = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.targetAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgStructureChargeSlot };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = Number(object.performingStructure);
        }
        else {
            message.performingStructure = 0;
        }
        if (object.chargeSlot !== undefined && object.chargeSlot !== null) {
            message.chargeSlot = Number(object.chargeSlot);
        }
        else {
            message.chargeSlot = 0;
        }
        if (object.targetAddress !== undefined && object.targetAddress !== null) {
            message.targetAddress = String(object.targetAddress);
        }
        else {
            message.targetAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.performingStructure !== undefined &&
            (obj.performingStructure = message.performingStructure);
        message.chargeSlot !== undefined && (obj.chargeSlot = message.chargeSlot);
        message.targetAddress !== undefined &&
            (obj.targetAddress = message.targetAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgStructureChargeSlot };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.performingStructure !== undefined &&
            object.performingStructure !== null) {
            message.performingStructure = object.performingStructure;
        }
        else {
            message.performingStructure = 0;
        }
        if (object.chargeSlot !== undefined && object.chargeSlot !== null) {
            message.chargeSlot = object.chargeSlot;
        }
        else {
            message.chargeSlot = 0;
        }
        if (object.targetAddress !== undefined && object.targetAddress !== null) {
            message.targetAddress = object.targetAddress;
        }
        else {
            message.targetAddress = "";
        }
        return message;
    },
};
const baseMsgStructureChargeSlotResponse = { actionResult: 0 };
export const MsgStructureChargeSlotResponse = {
    encode(message, writer = Writer.create()) {
        if (message.actionResult !== 0) {
            writer.uint32(8).int32(message.actionResult);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgStructureChargeSlotResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actionResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgStructureChargeSlotResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = msgStructureChargeSlotResponse_ResultFromJSON(object.actionResult);
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actionResult !== undefined &&
            (obj.actionResult = msgStructureChargeSlotResponse_ResultToJSON(message.actionResult));
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgStructureChargeSlotResponse,
        };
        if (object.actionResult !== undefined && object.actionResult !== null) {
            message.actionResult = object.actionResult;
        }
        else {
            message.actionResult = 0;
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateReactor(request) {
        const data = MsgCreateReactor.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "CreateReactor", data);
        return promise.then((data) => MsgCreateReactorResponse.decode(new Reader(data)));
    }
    UpdateReactor(request) {
        const data = MsgUpdateReactor.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "UpdateReactor", data);
        return promise.then((data) => MsgUpdateReactorResponse.decode(new Reader(data)));
    }
    DeleteReactor(request) {
        const data = MsgDeleteReactor.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "DeleteReactor", data);
        return promise.then((data) => MsgDeleteReactorResponse.decode(new Reader(data)));
    }
    UpdateInstance(request) {
        const data = MsgUpdateInstance.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "UpdateInstance", data);
        return promise.then((data) => MsgUpdateInstanceResponse.decode(new Reader(data)));
    }
    UpdateInstanceName(request) {
        const data = MsgUpdateInstanceName.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "UpdateInstanceName", data);
        return promise.then((data) => MsgUpdateInstanceResponse.decode(new Reader(data)));
    }
    UpdateInstanceMood(request) {
        const data = MsgUpdateInstanceMood.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "UpdateInstanceMood", data);
        return promise.then((data) => MsgUpdateInstanceResponse.decode(new Reader(data)));
    }
    CreateStructure(request) {
        const data = MsgCreateStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "CreateStructure", data);
        return promise.then((data) => MsgCreateStructureResponse.decode(new Reader(data)));
    }
    UpdateStructure(request) {
        const data = MsgUpdateStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "UpdateStructure", data);
        return promise.then((data) => MsgUpdateStructureResponse.decode(new Reader(data)));
    }
    DeleteStructure(request) {
        const data = MsgDeleteStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "DeleteStructure", data);
        return promise.then((data) => MsgDeleteStructureResponse.decode(new Reader(data)));
    }
    AttackStructure(request) {
        const data = MsgAttackStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "AttackStructure", data);
        return promise.then((data) => MsgAttackStructureResponse.decode(new Reader(data)));
    }
    DrainStructure(request) {
        const data = MsgDrainStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "DrainStructure", data);
        return promise.then((data) => MsgDrainStructureResponse.decode(new Reader(data)));
    }
    RepairStructure(request) {
        const data = MsgRepairStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "RepairStructure", data);
        return promise.then((data) => MsgRepairStructureResponse.decode(new Reader(data)));
    }
    ConnectStructure(request) {
        const data = MsgConnectStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "ConnectStructure", data);
        return promise.then((data) => MsgConnectStructureResponse.decode(new Reader(data)));
    }
    ChargeStructure(request) {
        const data = MsgChargeStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "ChargeStructure", data);
        return promise.then((data) => MsgChargeStructureResponse.decode(new Reader(data)));
    }
    TransferStructure(request) {
        const data = MsgTransferStructure.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "TransferStructure", data);
        return promise.then((data) => MsgTransferStructureResponse.decode(new Reader(data)));
    }
    StructureChargeSlot(request) {
        const data = MsgStructureChargeSlot.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "StructureChargeSlot", data);
        return promise.then((data) => MsgStructureChargeSlotResponse.decode(new Reader(data)));
    }
    CreateSchematic(request) {
        const data = MsgCreateSchematic.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "CreateSchematic", data);
        return promise.then((data) => MsgCreateSchematicResponse.decode(new Reader(data)));
    }
    UpdateSchematic(request) {
        const data = MsgUpdateSchematic.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "UpdateSchematic", data);
        return promise.then((data) => MsgUpdateSchematicResponse.decode(new Reader(data)));
    }
    DeleteSchematic(request) {
        const data = MsgDeleteSchematic.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "DeleteSchematic", data);
        return promise.then((data) => MsgDeleteSchematicResponse.decode(new Reader(data)));
    }
    TransferSchematic(request) {
        const data = MsgTransferSchematic.encode(request).finish();
        const promise = this.rpc.request("di.Msg", "TransferSchematic", data);
        return promise.then((data) => MsgTransferSchematicResponse.decode(new Reader(data)));
    }
}
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
