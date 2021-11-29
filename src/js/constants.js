export const
  AMBITS = {
    LAND: 'LAND',
    SKY: 'SKY',
    SPACE: 'SPACE',
    WATER: 'WATER',
  },
  ANIMATION_EVENTS = {
    END: 'ANIMATION_END'
  },
  FEATURES = {
    ATTACK: 'ATTACK_SYSTEM',
    DEFENSIVE: 'DEFENSIVE_SYSTEM',
    ENGINEERING: 'ENGINEERING_SYSTEM',
    POWER: 'POWER_SYSTEM',
    STORAGE: 'STORAGE_SYSTEM'
  },
  CONFIG = {
    INITIAL_HASHRATE: 100000
  },
  /**
   * Hash is 39 characters excluding the prefix.
   * 0 based indexing.
   */
  DROID_HASH = {
    BODY_TYPE: 38,
    HEAD_TYPE: 37,
    ACCESSORY_1: 36,
    ACCESSORY_2: 35,
    ACCESSORY_3: 34,
    PRIMARY_COLOR: {
      START: 0,
      LENGTH: 5
    }
  },
  DROID_TYPES = {
    BLOCKY: 'BLOCKY',
    HUMANOID: 'HUMANOID',
    SCREEN: 'SCREEN',
  },
  STRUCTURE_TYPES = {
    CAR: 'CAR',
    CITY: 'CITY',
    MECH: 'MECH',
    STATION: 'STATION'
  },
  CTA_TYPES = {
    NONE: '',
    ATTACK: 'attack',
    REPAIR: 'repair',
    DRAIN: 'drain',
    BUILD: 'build'
  }
;
