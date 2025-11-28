export const grimoire_classes = {
    "Core": {
        fighter: {
            name: "Fighter",
            weapons: "All weapons",
            armor: "All armor and shields",
            hd: 8,
            misc: ["Hauler. Add your Constitution modifier, if positive, to your gear slots.", "Weapon Mastery. Choose one type of weapon, such as longswords. You gain +1 to attack and damage with that weapon type. In addition, add half your level to these rolls (round down).", "Grit. Choose Strength or Dexterity. You have advantage on checks of that type to overcome an opposing force, such as kicking open a stuck door (Strength) or slipping free of rusty chains (Dexterity)."],
            talents: {
                2: {
                    type: "text",
                    description: "Gain Weapon Mastery with one additional weapon type."
                },
                6: {
                    type: "text",
                    description: "+1 to melee and ranged attacks."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Dexterity, or Constitution stat.",
                    targets: ["Strength", "Dexterity", "Constitution"]
                },
                11: {
                    type: "text",
                    description: "Choose one kind of armor. You get +1 AC from that armor."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Squire",
                "Chaotic": "Knave",
                "Neutral": "Warrior"
            },
            spells: 0,
            items: []
        },
        priest: {
            name: "Priest",
            weapons: "Club, crossbow, dagger, mace, longsword, staff, warhammer",
            armor: "All armor and shields",
            hd: 6,
            misc: ["Languages. You know Celestial, Diabolic, or Primordial.", "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells.", "Deity. Choose a god to serve who matches your alignment. You have a holy symbol for your god (it takes up no gear slots).", "Spellcasting. You can cast priest spells you know."],
            talents: {
                2: {
                    type: "text",
                    description: "Gain advantage on casting one spell you know."
                },
                6: {
                    type: "text",
                    description: "+1 to melee or ranged attacks."
                },
                9: {
                    type: "spellcasting",
                    description: "+1 to priest spellcasting checks."
                },
                11: {
                    type: "statIncrease",
                    description: "+2 to Strength or Wisdom stat.",
                    targets: ["Strength", "Wisdom"]
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Acolyte",
                "Chaotic": "Initiate",
                "Neutral": "Seeker"
            },
            spells: 2,
            items: ["Holy Symbol (free to carry)"]
        },
        thief: {
            name: "Thief",
            weapons: "Club, crossbow, dagger, shortbow, shortsword",
            armor: "Leather armor, mithral chainmail",
            hd: 4,
            misc: ["Backstab. If you hit a creature who is unaware of your attack, you deal an extra weapon die of damage. Add additional weapon dice of damage equal to half your level (round down).", "Thievery. You are adept at thieving skills and have the necessary tools of the trade secreted on your person (they take up no gear slots). You are trained in the following tasks and have advantage on any associated checks made for climbing, sneaking and hiding, applying disguises, finding and disabling traps, and delicate tasks such as picking pockets and opening locks."],
            talents: {
                2: {
                    type: "text",
                    description: "Gain advantage on initiative rolls."
                },
                5: {
                    type: "text",
                    description: "Your Backstab deals +1 dice of damage."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Dexterity, or Charisma stat.",
                    targets: ["Strength", "Dexterity", "Charisma"]
                },
                11: {
                    type: "text",
                    description: "+1 to melee and ranged attacks."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Footpad",
                "Chaotic": "Thug",
                "Neutral": "Robber"
            },
            spells: 0,
            items: ["Thief Tools (free to carry)"]
        },
        wizard: {
            name: "Wizard",
            weapons: "Dagger, staff",
            armor: "None",
            hd: 4,
            misc: ["Languages. You know two additional common languages and two rare languages.", "Learning Spells. You can permanently learn a wizard spell from a spell scroll by studying it for a day and succeeding on a DC 15 Intelligence check. Whether you succeed or fail, you expend the spell scroll. Spells you learn in this way don't count toward your known spells.", "Spellcasting. You can cast wizard spells you know. You know three tier 1 spells of your choice from the wizard spell list. Each time you gain a level, you choose new wizard spells to learn according to the Wizard Spells Known table."],
            talents: {
                2: {
                    type: "wizardItem",
                    description: "Make 1 random magic item of a type you choose."
                },
                7: {
                    type: "wizardIncrease",
                    description: "+2 to Intelligence stat or +1 to wizard spellcasting checks."
                },
                9: {
                    type: "text",
                    description: "Gain advantage on casting one spell you know."
                },
                11: {
                    type: "spellSlot",
                    description: "Learn one additional wizard spell of any tier you know.",
                    amount: 1,
                    types: ["Wizard"]
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Apprentice",
                "Chaotic": "Adept",
                "Neutral": "Shaman"
            },
            spells: 3,
            items: []
        }
    },
    "Cursed Scroll 1": {
        knightofstydris: {
            name: "Knight of St. Ydris",
            weapons: "All melee weapons, crossbow",
            armor: "All armor and shields",
            hd: 6,
            misc: ["Languages. You know Diabolic.", "Demonic Possession. 3/day, gain a +1 bonus to your damage rolls that lasts 3 rounds. In addition, add half your level to the damage bonus (round down).", "Spellcasting. You can cast witch spells you know. Each time you gain a level, you choose new witch spells to learn according to the Witch Spells Known table. You use your Charisma stat to cast witch spells. The DC is 10 + the spell's tier. If you fail a spellcasting check, you can't cast that spell again until you complete a rest. If you roll a natural 1 on a spellcasting check, you must also roll on the corresponding Diabolical Mishap table for the spell's tier."],
            talents: {
                2: {
                    type: "text",
                    description: "Your Demonic Possession bonus increases by 1 point."
                },
                6: {
                    type: "text",
                    description: "+1 to melee or ranged attacks."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Dexterity, or Constitution stat.",
                    targets: ["Strength", "Dexterity", "Constitution"]
                },
                11: {
                    type: "witchIncrease",
                    description: "+2 to Charisma stat or +1 to witch spellcasting checks.",
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Arbiter",
                "Chaotic": "Traitor",
                "Neutral": "Brother/Sister"
            },
            spells: 0,
            items: []
        },
        warlock: {
            name: "Warlock",
            weapons: "Club, crossbow, dagger, mace, longsword",
            armor: "Leather armor, chainmail, and shields",
            hd: 6,
            misc: ["Languages. You know either Celestial, Diabolic, Draconic, Primordial, or Sylvan.", "Patron. Choose a patron to serve. Your patron is the source of your supernatural gifts. Your patron can choose to grant or withhold its gifts at any time. You can gain new Patron Boons/ talents (or lose them) as a result.", "Patron Boon. At 1st level, you gain a random Patron Boon talent based on your chosen patron. Whenever you gain a new talent roll, you may choose to roll on your Patron Boon table rather than the Warlock Talents table."],
            talents: {
                2: {
                    type: "randomBoon",
                    description: "Roll a Patron Boon from any patron; an unexplained gift."
                },
                6: {
                    type: "text",
                    description: "Add +1 point to two stats (they must be different). This Boon must be handled by hand, and is not present in the Customization section."
                },
                9: {
                    type: "text",
                    description: "+1 to melee or ranged attacks."
                },
                11: {
                    type: "twoBoons",
                    description: "Roll two Patron Boons and choose one to keep."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Favored",
                "Chaotic": "Marked",
                "Neutral": "Chosen"
            },
            spells: 0,
            items: []
        },
        witch: {
            name: "Witch",
            weapons: "Dagger, staff",
            armor: "Leather armor",
            hd: 4,
            misc: ["Languages. You know Diabolic, Primordial, and Sylvan.", "Familiar. You have a small animal such as a raven, rat, or frog who serves you loyally. It can speak Common. Your familiar can be the source of spells you cast. Treat it as though it were you for determining spell ranges. If your familiar dies, you can restore it to life by permanently sacrificing 1d4 hit points.", "Spellcasting. You can cast witch spells you know. You know three tier 1 spells of your choice from the witch spell list. Each time you gain a level, you choose new witch spells to learn according to the Witch Spells Known table. You use your Charisma stat to cast witch spells. The DC is 10 + the spell's tier. If you fail a spellcasting check, you can't cast that spell again until you complete a rest. If you roll a natural 1 on a spellcasting check, you must also roll on the corresponding Diabolical Mishap table for the spell's tier."],
            talents: {
                2: {
                    type: "text",
                    description: "1/day, teleport to your familiar's location as a move."
                },
                7: {
                    type: "witchIncrease",
                    description: "+2 to Charisma stat or +1 to witch spellcasting checks."
                },
                9: {
                    type: "text",
                    description: "Gain advantage on casting one spell you know."
                },
                11: {
                    type: "spellSlot",
                    description: "Learn one additional witch spell of any tier you know.",
                    amount: 1,
                    types: ["Witch"]
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Fortune Teller",
                "Chaotic": "Whisperer",
                "Neutral": "Shaman"
            },
            spells: 3,
            items: []
        }
    },
    "Cursed Scroll 2": {
        desertrider: {
            name: "Desert Rider",
            weapons: "Club, dagger, javelin, longsword, pike, shortbow, scimitar, spear, whip",
            armor: "Leather armor, shields",
            hd: 8,
            misc: ["Charge. 3/day, you can charge into combat by moving at least near before attacking. Each time you do this, your melee attacks deal double damage that round.", "Mount. You have a common camel or horse with a reliable or lovely demeanor. It comes when you call and never spooks. You can only have one such mount at a time. While riding your mount, you both get a bonus to AC equal to half your level (round down). Your mount has additional levels equal to half your level (round down). You can freely leap on or off your mount once per round. If you lose your mount, you can use your downtime to acquire and train another. Pass a DC 15 CHA check for the new creature to become your mount. Lower the DC one step each attempt."],
            talents: {
                2: {
                    type: "text",
                    description: "You can use any rider-bearing creature as your mount."
                },
                6: {
                    type: "text",
                    description: "You gain +1 to attacks or damage."
                },
                9: {
                    type: "desertRiderIncrease",
                    description: "+2 to Strength or Dexterity stat, or +1 to melee attacks."
                },
                11: {
                    type: "text",
                    description: "Gain an additional use of your Charge talent each day."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Outrider",
                "Chaotic": "Bandit",
                "Neutral": "Rat"
            },
            spells: 0,
            items: []
        },
        pitfighter: {
            name: "Pit Fighter",
            weapons: "All weapons",
            armor: "Leather armor, shields",
            hd: 8,
            misc: ["Flourish. 3/day, regain 1d6 hit points when you hit an enemy with a melee attack.", "Implacable. You have advantage on Constitution checks to resist injury, poison, or endure extreme environments.", "Last Stand. You get up from dying with 1 hit point on a natural d20 roll of 18-20.", "Relentless. 3/day, when you are reduced to 0 HP, make a DC 18 Constitution check (the Implacable talent applies to this roll). On a success, you instead go to 1 HP."],
            talents: {
                2: {
                    type: "text",
                    description: "1/day, ignore all damage and effects from one attack."
                },
                6: {
                    type: "text",
                    description: "You gain +1 to melee weapon damage."
                },
                9: {
                    type: "pitFighterIncrease",
                    description: "+2 to Strength or Constitution stat, or +1 to melee attacks."
                },
                11: {
                    type: "text",
                    description: "Increase the HP you gain from Flourish by 1d6."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Rookie",
                "Chaotic": "Ruffian",
                "Neutral": "Underdog"
            },
            spells: 0,
            items: []
        },
        rasgodai: {
            name: "Ras-Godai",
            weapons: "Blowgun, bolas, dagger, razor chain, scimitar, shuriken, spear",
            armor: "Leather armor",
            hd: 6,
            misc: ["Languages. You know Diabolic.", "Assassin. You have advantage on checks to sneak and hide. Your attacks deal double damage against targets that are unaware of your presence.", "Smoke Step. 3/day, teleport to a location you can see within near. This does not use your action.", "Black Lotus. You earned the right to eat a petal of the fabled black lotus flower, and you survived its sorcerous effects. Roll one talent on the Black Lotus Talents table."],
            talents: {
                2: {
                    type: "text",
                    description: "You are trained in the use of poisons."
                },
                6: {
                    type: "oneBlackLotus",
                    description: "Roll an additional talent on the Black Lotus Talents table."
                },
                9: {
                    type: "desertRiderIncrease",
                    description: "+2 to Strength or Dexterity stat, or +1 to melee attacks."
                },
                11: {
                    type: "text",
                    description: "Gain an additional use of your Smoke Step talent."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Acolyte",
                "Chaotic": "Acolyte",
                "Neutral": "Acolyte"
            },
            spells: 0,
            items: []
        }
    },
    "Cursed Scroll 3": {
        seawolf: {
            name: "Sea Wolf",
            weapons: "Dagger, greataxe, handaxe, longbow, longsword, spear",
            armor: "Leather armor, chainmail, shields",
            hd: 8,
            misc: ["Seafarer. You have advantage on checks related to navigating and crewing boats.", "Old Gods. Each day, your purpose aligns with one of the Old Gods. Choose one of the below options after you complete a rest; you gain its benefits until you complete your next rest.<br><br> Odin. You regain 1d4 HP every time you kill an enemy.<br><br> Freya. Once a day, gain a luck token if you don't have one. Each time you use a luck token, add 1d6 to your roll.<br><br> Loki. You have advantage on checks to lie, sneak, and hide.", "Shield Wall. If you wield a shield, you can use your action to take a defensive stance. Your AC becomes 20 during this time."],
            talents: {
                2: {
                    type: "text",
                    description: "1/day, go berserk: immune to damage for 3 rounds."
                },
                6: {
                    type: "text",
                    description: "Your attacks deal +1 damage."
                },
                9: {
                    type: "seaWolfIncrease",
                    description: "+2 to Strength or Constitution stat, or +1 to attacks."
                },
                11: {
                    type: "text",
                    description: "Duality; choose two different Old Gods effects each day."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Freefolk",
                "Chaotic": "Rabble",
                "Neutral": "Wanderer"
            },
            spells: 0,
            items: []
        },
        seer: {
            name: "Seer",
            weapons: "Dagger, stave, spear",
            armor: "Leather armor",
            hd: 6,
            misc: ["Destined. Whenever you use a luck token, add 1d6 to the roll.", "Omen. 3/day, you can make a DC 9 WIS check. On a success, gain a luck token (you can't have more than one luck token at a time).", "Spellcasting. You can cast seer spells you know. You know one tier 1 spell of your choice from the seer spell list. Each time you gain a level, you choose a new seer spell to learn according to the Seer Spells Known table. You use your Wisdom stat to cast seer spells. The DC is 10 + the spell's tier. If you fail a spellcasting check, you can't cast that spell again until you complete a rest. If you roll a natural 1 on a spellcasting check, you can't cast that spell again until you complete Seer Penance."],
            talents: {
                2: {
                    type: "spellSlot",
                    description: "Learn an additional seer spell from any tier you can cast."
                },
                6: {
                    type: "text",
                    description: "Gain an additional use of your Omen talent each day."
                },
                9: {
                    type: "seaWolfIncrease",
                    description: "+2 to WIS or CHA stat, or +1 to spellcasting checks."
                },
                11: {
                    type: "text",
                    description: "Increase the die category of your Destined talent by one."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Guide",
                "Chaotic": "Hedge Witch",
                "Neutral": "Fortune Teller"
            },
            spells: 1,
            items: []
        }
    },
    "Cursed Scroll 4": {
        basiliskwarrior: {
            name: "Basilisk Warrior",
            weapons: "Boomerang, club, dagger, spear, spear-thrower",
            armor: "None",
            hd: 8,
            misc: ["Basilisk Blood. You have ADV on CON checks to avoid harmful maladies, poisons, or afflictions.", "Petrifying Gaze. One creature of your level or less that meets your gaze must pass a DC 15 CON check or be petrified for 1d4 rounds. It still takes damage as normal while petrified. You can use this talent a number of times per day equal to your CON modifier (minimum 1).", "Stone Skin. Add 2 + half your level (round down) to your AC if you are otherwise unarmored. You have advantage on checks to hide in natural environments."],
            talents: {
                2: {
                    type: "text",
                    description: "You find a basilisk egg; a loyal hatchling emerges in 1d4 days."
                },
                6: {
                    type: "text",
                    description: "+1 to weapon attacks and damage."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Dexterity, or Constitution stat.",
                    targets: ["Strength", "Dexterity", "Constitution"]
                },
                11: {
                    type: "text",
                    description: "+1 use per day of Petrifying Gaze."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Stone Warrior",
                "Chaotic": "Stone Warrior",
                "Neutral": "Stone Warrior"
            },
            spells: 0,
            items: []
        },
        ranger: {
            name: "Ranger",
            weapons: "Dagger, longbow, longsword, shortbow, shortsword, spear, staff",
            armor: "Leather armor, chainmail",
            hd: 8,
            misc: ["Wayfinder. You have advantage on checks associated with navigation, tracking, bushcraft, stealth, and wild animals.", "Herbalism. Make an INT check to prepare an herbal remedy you choose from the Herbal Remedy table. If you fail, you can't make that remedy again until you successfully rest. Unused remedies expire in 3 rounds."],
            talents: {
                2: {
                    type: "text",
                    description: "You deal d12 damage with one weapon type you choose."
                },
                6: {
                    type: "text",
                    description: "+1 to melee or ranged attacks and damage."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Dexterity, or Intelligence stat.",
                    targets: ["Strength", "Dexterity", "Intelligence"]
                },
                11: {
                    type: "text",
                    description: "You gain ADV on Herbalism checks for a remedy you choose."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Wanderer",
                "Chaotic": "Hood",
                "Neutral": "Stranger"
            },
            spells: 0,
            items: []
        }
    },
    "Cursed Scroll 6": {
        bard: {
            name: "Bard",
            weapons: "Crossbow, dagger, mace, shortbow, shortsword, spear, staff",
            armor: "Leather armor, chainmail, shields",
            hd: 6,
            misc: ["Languages. You know four additional common languages and one rare language.", "Bardic Arts. You're trained in oration, performing arts, lore, and diplomacy. You have advantage on related checks.", "Fascinate (Focus). Make a DC 12 CHA check. On a success, you transfix all targets in near whose LV is equal to or less than 1 + half your level (round down). If you fail, excluding focus, you can't use this again until you rest.", "Inspire. Each day, you can grant a number of luck tokens equal to your Charisma modifier (min. 1).", "Magical Dabbler. You can activate spell scrolls and wands using Charisma as your spellcasting stat. If you critically fail, roll a wizard mishap. In place of making a talent roll, you may choose to find a random priest or wizard wand (you decide which type)."],
            talents: {
                2: {
                    type: "text",
                    description: "You have ADV on downtime checks (excluding carousing)."
                },
                6: {
                    type: "text",
                    description: "+1 to melee and ranged attacks or +1 to Fascinate rolls."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to any stat.",
                    targets: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
                },
                11: {
                    type: "text",
                    description: "Add +2 to your group's carousing event rolls."
                },
                12: {
                    type: "chooseTalent",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Storyteller",
                "Chaotic": "Guttersnipe",
                "Neutral": "Seeker"
            },
            spells: 0,
            items: []
        },
        duelist: {
            name: "Duelist",
            weapons: "Dagger, all swords",
            armor: "Leather armor, mithral chainmail",
            hd: 8,
            misc: ["Parry. Once per day, an attack of your choice that would hit you misses instead.", "Tale Spinner. You may make a DC 15 CHA check. If you pass, strangers around you believe you are famous and important for the remainder of your interaction with them. The same individual cannot be fooled by this twice.", "Taunt. When an enemy misses you with an attack, you have advantage on attacks against that enemy next round."],
            talents: {
                2: {
                    type: "text",
                    description: "1/day, all attacks that would hit you this round miss instead."
                },
                6: {
                    type: "text",
                    description: "+1 to melee attacks and damage or +1 Parry per day."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Dexterity, or Charisma stat.",
                    targets: ["Strength", "Dexterity", "Charisma"]
                },
                11: {
                    type: "text",
                    description: "Deal +1d6 damage when you hit with a Taunt attack."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Fencer",
                "Chaotic": "Ruffian",
                "Neutral": "Student"
            },
            spells: 0,
            items: []
        }
    },
    "Paladin Playtest": {
        paladin: {
            name: "Paladin",
            weapons: "Bastard sword, dagger, greatsword, javelin, lance, longsword, shortsword",
            armor: "All armor and shields",
            hd: 8,
            misc: ["Chivalric Oath. You swear to act with integrity, humility, and chivalry. You must give honor and mercy to the deserving. If you break this oath, you lose your Inspiring Presence and Named Blade talents until completing a holy quest of great challenge.", "Inspiring Presence. Allies within near of you rise from dying on a roll of 18-20 and regain HP equal to your CHA bonus (min. 1). Enemies within near of you lose immunity to morale checks.", "Mount. You have a warhorse with a reliable demeanor and a +4 STR bonus. It comes when you call. You can only have one such mount at a time. Your mount has additional levels equal to half your level (round down). If you lose your mount, you can use your downtime to acquire and train another. Pass a DC 15 CHA check for the new warhorse to become your mount. Lower the DC one step each attempt.", "Named Blade. At first level, you gain a sword of your choice. It is a +0 magic weapon. It becomes a +1 weapon at 3rd level, +2 at 5th level, and +3 at 9th level. If you lose this blade, you can find a new one by completing a holy quest of great challenge."],
            talents: {
                2: {
                    type: "text",
                    description: "Your Named Blade gains a random magic weapon benefit."
                },
                6: {
                    type: "text",
                    description: "Gain +1 to attacks and damage with your Named Blade."
                },
                9: {
                    type: "statIncrease",
                    description: "+2 to Strength, Constitution, or Charisma stat.",
                    targets: ["Strength", "Constitution", "Charisma"]
                },
                11: {
                    type: "text",
                    description: "Increase your Inspiring Presence dying roll range by 1."
                },
                12: {
                    type: "twelve",
                    description: "Choose a talent or +2 points to distribute to stats."
                }
            },
            titles: {
                "Lawful": "Fencer",
                "Chaotic": "Ruffian",
                "Neutral": "Student"
            },
            spells: 0,
            items: []
        }
    }
}

export const grimoire_spells = {
    "Core": {
        
    },
    "Cursed Scroll 1": {
        1: {
            name: "Cauldron",
            class: ["Witch"],
            alignment: [],
            duration: "1 round",
            range: "Close",
            description: "You conjure a bubbling cauldron next to you. It can repair a broken mundane item, produce a croaking toad that follows your instructions for 3 rounds, or store up to 3 item slots of items and expel them the next time you cast this spell."
        },
        2: {
            name: "Charm Person",
            class: ["Witch"],
            alignment: [],
            duration: "1d8 days",
            range: "Near",
            description: "You magically befriend one humanoid of level 2 or less. It regards you as a friend unless it notices harm done to it by you or your allies. After the spell ends, it knows you enchanted it."
        },
        3: {
            name: "Eyebite",
            class: ["Witch"],
            alignment: [],
            duration: "Instant",
            range: "Near",
            description: "One creature takes 1d4 damage, and it cannot see you until the end of its next turn."
        },
        4: {
            name: "Fog",
            class: ["Witch"],
            alignment: [],
            duration: "Focus",
            range: "Close",
            description: "A thick cloud of fog blooms around you and moves with you, making you hard to see. Attacks against creatures in the cloud have disadvantage."
        },
        5: {
            name: "Oak, Ash, Thorn",
            class: ["Witch"],
            alignment: [],
            duration: "Focus",
            range: "Self",
            description: "For the duration, faeries, demons, and devils cannot attack, possess, compel, or beguile you."
        },
        6: {
            name: "Puppet",
            class: ["Witch"],
            alignment: [],
            duration: "Focus",
            range: "Close",
            description: "One humanoid of level 2 or less you touch mimics all your movements. If mimicking you would directly harm it or an ally, it can make a DC 15 Charisma check to resist."
        },
        7: {
            name: "Shadowdance",
            class: ["Witch"],
            alignment: [],
            duration: "3 rounds",
            range: "Near",
            description: "You create a visible and audible illusion up to the size of a person. It can move within a near distance but cannot affect physical objects."
        },
        8: {
            name: "Willowman",
            class: ["Witch"],
            alignment: [],
            duration: "Instant",
            range: "Near",
            description: "One creature of level 2 or less must make a morale check as it perceives the terrifying Willowman in its mind, even if normally immune to morale checks."
        },
        9: {
            name: "Witchlight",
            class: ["Witch"],
            alignment: [],
            duration: "Focus",
            range: "Near",
            description: "You summon a floating marsh light that illuminates a close radius. It can change colors, take vague shapes, and float a near distance on your turn."
        }
    },
   "Cursed Scroll 2": {

   },
   "Cursed Scroll 3": {
        1: {
            name: "Evoke Rage",
            class: ["Seer"],
            alignment: [],
            duration: "1d4 rounds",
            range: "Close",
            description: "One willing humanoid you touch enters a berserk state. The target is immune to morale checks, has ADV on STR checks and melee attacks, and deals +1d4 damage for the spell's duration. If the target does not attack another creature on its turn, the spell ends."
        },
        2: {
            name: "Chant",
            class: ["Seer"],
            alignment: [],
            duration: "Focus",
            range: "Self",
            description: "For the spell's duration, you can see all invisible and hidden things as though they were plainly visible. This spell does not allow you to see in ways you normally could not, such as in darkness or through walls."
        },
        3: {
            name: "Potion",
            class: ["Seer"],
            alignment: [],
            duration: "Instant",
            range: "Close",
            description: "As part of casting this spell, you bless a single drink of any liquid. The liquid gains healing properties for 1 day. A creature who drinks it may end the effects of one poison or immediately stop dying (remaining at 0 HP)."
        },
        4: {
            name: "Trance",
            class: ["Seer"],
            alignment: [],
            duration: "Instant",
            range: "Close",
            description: "One humanoid creature you touch (other than yourself) gains a luck token. A creature cannot have more than one luck token at once."
        }
   },
   "Cursed Scroll 4": {
        1: {
            name: "Breath",
            class: ["Wizard"],
            alignment: ["Neutral"],
            duration: "10 rounds",
            range: "Self",
            description: "You can hold your breath for the spell's duration."
        },
        2: {
            name: "Instill",
            class: ["Wizard"],
            alignment: ["Neutral"],
            duration: "5 rounds",
            range: "Self",
            description: "One weapon you wield is imbued with life force. It becomes a +1 weapon for the spell's duration. If the weapon is a staff, it deals d6 damage instead of d4."
        },
        3: {
            name: "Oxidize",
            class: ["Wizard"],
            alignment: ["Neutral"],
            duration: "Instant",
            range: "Close",
            description: "One inanimate object you touch the size of a door or less ages d100 years."
        },
        4: {
            name: "Whisperwind",
            class: ["Wizard"],
            alignment: ["Neutral"],
            duration: "Instant",
            range: "Far",
            description: "You send a brief, whispered message that reaches any creature in range."
        }
   },
   "Cursed Scroll 6": {
        1: {
            name: "Cleanse",
            class: ["Wizard"],
            alignment: ["Lawful"],
            duration: "Instant",
            range: "Close",
            description: "You expunge natural toxins from one creature you touch. End the effects of one poison currently affecting the target.."
        },
        2: {
            name: "Flare",
            class: ["Wizard"],
            alignment: ["Lawful"],
            duration: "1 round",
            range: "Near",
            description: "A flash of blinding, white light bursts from you. All enemies in range who see it are blinded for the spell's duration."
        },
        3: {
            name: "Reveal",
            class: ["Wizard"],
            alignment: ["Lawful"],
            duration: "Instant",
            range: "Near",
            description: "End all invisibility effects out to a near distance from you. You also become aware of the location of any hiding creatures within range."
        },
        4: {
            name: "Ward",
            class: ["Wizard"],
            alignment: ["Lawful"],
            duration: "10 rounds",
            range: "Self",
            description: "You ward yourself with a magical charm against ambush. For the spell's duration, you can't be surprised (you roll initiative during surprise rounds and are treated as aware of all enemies)."
        }
   },
   "Paladin Playtest": {

   }
}

export const grimoire_backgrounds = {
    "Core": [],
    "Cursed Scroll 1": ["Hermit", "Outcast", "Woodborn", "Amnesiac", "Haunted", "Fugitive", "Feytouched", "Witchborn", "Forager", "Redeemer", "Marked", "Sacrifice", "Marooned", "Fallen", "Drawn", "Ascetic", "Wolfchild", "Healer", "Chosen", "Demonborn"],
    "Cursed Scroll 2": [],
    "Cursed Scroll 3": ["Freed", "Displaced", "Criminal", "Drifter", "Crop Farmer", "Livestock Farmer", "Hunter", "Fisher", "Enforcer", "Trader", "Crafter", "Bowyer", "Seer's Apprentice", "Shipwright", "Blacksmith", "Far Traveler", "Skald", "Heroborn", "Nobleborn", "God's Blood"],
    "Cursed Scroll 4": [],
    "Cursed Scroll 6": [],
    "Paladin Playtest": []
}

export const grimoire_weapons = {
    "Core": {

    },
    "Cursed Scroll 1": {

    },
    "Cursed Scroll 2": {
        1: {
            name: "Blowgun",
            type: "R",
            range: "N",
            damage: "1",
            properties: ["Special"]
        },
        2: {
            name: "Bolas",
            type: "R",
            range: "N",
            damage: "-",
            properties: ["Special"]
        },
        3: {
            name: "Morningstar",
            type: "M",
            range: "C",
            damage: "1d6/1d8",
            properties: ["V"]
        },
        4: {
            name: "Pike",
            type: "M",
            range: "2x C",
            damage: "1d10",
            properties: ["2H", "2 slots"]
        },
        5: {
            name: "Razor chain",
            type: "M/R",
            range: "C/N",
            damage: "1d6",
            properties: ["F", "La"]
        },
        6: {
            name: "Scimitar",
            type: "M",
            range: "C",
            damage: "1d6",
            properties: ["F"]
        },
        7: {
            name: "Shuriken",
            type: "R",
            range: "N",
            damage: "1d4",
            properties: ["Special"]
        },
        8: {
            name: "Sling",
            type: "R",
            range: "F",
            damage: "1d4",
            properties: []
        },
        9: {
            name: "Whip",
            type: "M/R",
            range: "C/N",
            damage: "1d4",
            properties: ["F", "La"]
        }
    },
    "Cursed Scroll 3": {
        1: {
            name: "Handaxe",
            type: "M/R",
            range: "C/N",
            damage: "1d6",
            properties: ["F", "Th"]
        },
        2: {
            name: "Stave",
            type: "M",
            range: "C",
            damage: "1d6",
            properties: ["2H", "S"]
        }
    },
    "Cursed Scroll 4": {
        1: {
            name: "Boomerang",
            type: "R",
            range: "N",
            damage: "1d4",
            properties: ["R", "Th"]
        },
        2: {
            name: "Club, obsidian",
            type: "M",
            range: "C",
            damage: "1d6",
            properties: ["B"]
        },
        3: {
            name: "Dagger, obsidian",
            type: "M/R",
            range: "C/N",
            damage: "1d6",
            properties: ["B", "F", "Th"]
        },
        4: {
            name: "Spear, obsidian",
            type: "M/R",
            range: "C/N",
            damage: "1d8",
            properties: ["B", "Th"]
        },
        5: {
            name: "Spear-thrower",
            type: "-",
            range: "-",
            damage: "-",
            properties: ["Special"]
        }
    },
    "Cursed Scroll 6": {

    },
    "Paladin Playtest": {
        1: {
            name: "Lance",
            type: "M",
            range: "C",
            damage: "1d12",
            properties: ["C", "D", "M", "3 slots"]
        }
    }
}

export const patron_boons = {
    "Almazzat": {
        2: {
            type: "text",
            description: "1/day, gain advantage on melee attacks for 3 rounds."
        },
        7: {
            type: "text",
            description: "Learn to wield 1 melee weapon or get +1 to melee attacks."
        },
        9: {
            type: "almazzatIncrease",
            description: "+2 to Strength or Constitution stat or +1 to melee damage."
        },
        11: {
            type: "text",
            description: "Gain advantage on initiative rolls.",
        },
        12: {
            type: "twelveBoon",
            description: "Choose one option or +2 points to distribute to stats."
        }
    },
    "Kytheros": {
        2: {
            type: "text",
            description: "1/day, force the GM to reroll a single roll."
        },
        7: {
            type: "acIncrease",
            description: "Gain +1 to your AC through supernatural foresight."
        },
        9: {
            type: "statIncrease",
            description: "+2 to Strength, Dexterity, or Wisdom stat.",
            targets: ["Strength", "Dexterity", "Wisdom"]
        },
        11: {
            type: "text",
            description: "3/day, add your WIS bonus to any roll.",
        },
        12: {
            type: "twelveBoon",
            description: "Choose one option or +2 points to distribute to stats."
        }
    },
    "Shune the Vile": {
        2: {
            type: "text",
            description: "1/day, read the mind of a creature you touch for 3 rounds."
        },
        7: {
            type: "text",
            description: "Learn a wizard spell, tier = half your level. Cast it with INT."
        },
        9: {
            type: "statIncrease",
            description: "+2 to Dexterity or Intelligence stat.",
            targets: ["Dexterity", "Intelligence"]
        },
        11: {
            type: "text",
            description: "+1 XP whenever you learn a valuable or significant secret.",
        },
        12: {
            type: "twelveBoon",
            description: "Choose one option or +2 points to distribute to stats."
        }
    },
    "Mugdulblub": {
        2: {
            type: "text",
            description: "1/day, turn into a crawling puddle of slime for 3 rounds."
        },
        7: {
            type: "text",
            description: "Maximize 2 hit point die rolls (prior or future)."
        },
        9: {
            type: "statIncrease",
            description: "+2 to Dexterity or Constitution stat.",
            targets: ["Dexterity", "Constitution"]
        },
        11: {
            type: "text",
            description: "Become immune to 1: acid, cold, poison.",
        },
        12: {
            type: "twelveBoon",
            description: "Choose one option or +2 points to distribute to stats."
        }
    },
    "Titania": {
        2: {
            type: "text",
            description: "1/day, hypnotize a LV 5 or less creature for 3 rounds."
        },
        7: {
            type: "text",
            description: "Learn to wield a longbow or gain +1 to ranged attacks."
        },
        9: {
            type: "statIncrease",
            description: "+2 to Dexterity or Charisma stat.",
            targets: ["Dexterity", "Charisma"]
        },
        11: {
            type: "text",
            description: "Hostile spells that target you are always hard to cast.",
        },
        12: {
            type: "twelveBoon",
            description: "Choose one option or +2 points to distribute to stats."
        }
    },
    "The Willowman": {
        2: {
            type: "text",
            description: "1/day, teleport to a far location you see as your move."
        },
        7: {
            type: "text",
            description: "+1 to melee or ranged attacks."
        },
        9: {
            type: "statIncrease",
            description: "+2 to Strength or Dexterity stat.",
            targets: ["Strength", "Dexterity"]
        },
        11: {
            type: "text",
            description: "1/day, force a close being to check morale, even if immune.",
        },
        12: {
            type: "twelveBoon",
            description: "Choose one option or +2 points to distribute to stats."
        }
    }
}

export const black_lotus = {
    1: {
        type: "twoBlackLotus",
        description: "Gain two Black Lotus talents (reroll further 1s this instance)."
    },
    2: {
        type: "text",
        description: "1/day, paralyze a target of LV 9 or less for 1d4 rounds when you damage it with a weapon."
    },
    3: {
        type: "text",
        description: "You have advantage on Dexterity checks to avoid entrapment or injury."
    },
    4: {
        type: "text",
        description: "You gain +1 to your AC when wielding a melee weapon in each hand."
    },
    5: {
        type: "additionalHD",
        description: "You gain an additional hit points die."
    },
    6: {
        type: "text",
        description: "You deal triple damage with your Assassinate talent."
    },
    7: {
        type: "text",
        description: "When enemies who can see you make a morale check, the DC is 18 instead of 15."
    },
    8: {
        type: "text",
        description: "1/day, you can walk on water as if it were solid for 1d4 rounds."
    },
    9: {
        type: "text",
        description: "1/day, choose a living creature of LV 5 or less you can see within near; it must pass a DC 15 CON check or fall asleep."
    },
    10: {
        type: "text",
        description: "1/day, you can walk on sheer surfaces such as walls for 1d4 rounds."
    },
    11: {
        type: "text",
        description: "You deal +1 damage with melee weapons."
    },
    12: {
        type: "text",
        description: "1/day, choose a creature of LV 9 or less you can see; it must pass a DC 15 WIS check or it can't see or hear you for 1d4 rounds."
    }
}
