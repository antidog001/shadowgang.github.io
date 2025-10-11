function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // this is inclusive
}

function choice(my_array) {
    return my_array[randomInt(0, my_array.length - 1)]
}

function rollAdvantage(d) {
    const i = randomInt(1, d);
    const j = randomInt(1, d);
    return i > j ? i : j;
}

function findModifier(stat, statbonus) {
    const i = Math.floor(((stat + statbonus) - 10) / 2)
    return i < -4 ? -4 : i; // modifier returned with sign ONLY for negative
}

function getInitialHP(hd, race) {
    let hp = 0
    if (race == "Dwarf") {
        hp = rollAdvantage(hd)
        hp += 2
    } else {
        hp = randomInt(1, hd)
    }
    return hp
}

function getStats() {
    let statArray = []
    while (true) {
        while (statArray.length < 6) {
            statArray.push(randomInt(1, 6) + randomInt(1, 6) + randomInt(1, 6))
        }
        if (Math.max(...statArray) < 14) {
            statArray = []
        } else {
            break
        }
    }
    return statArray
}

function createMiscTable() {
    const misctable = document.createElement("table");
    misctable.className = "sheet-table";
    const miscthead = document.createElement("thead");
    miscthead.className = "sheet-table-header";
    miscthead.innerHTML = `
    <tr>
        <th>Title</th>
        <th>Alignment</th>
        <th>Background</th>
        <th>Deity</th>
    </tr>
    `;
    const misctbody = document.createElement("tbody");
    misctbody.className = "sheet-table-body";
    misctbody.innerHTML = `
    <tr>
        <td>${character.title}</td>
        <td>${character.alignment}</td>
        <td>${character.background}</td>
        <td>${character.deity}</td>
    </tr>
    `;
    misctable.append(miscthead, misctbody);

    return misctable // needs no refresh!
}

function createStatsTable() {
    const table = document.createElement("table");
    table.className = "sheet-table";
    const thead = document.createElement("thead");
    thead.className = "sheet-table-header";
    thead.innerHTML = `
      <tr>
        <th>STR</th>
        <th>DEX</th>
        <th>CON</th>
        <th>INT</th>
        <th>WIS</th>
        <th>CHA</th>
      </tr>
    `;
    const tbody = document.createElement("tbody");
    tbody.className = "sheet-table-body";
    tbody.innerHTML = `
      <tr>
        <td class="str"></td>
        <td class="dex"></td>
        <td class="con"></td>
        <td class="int"></td>
        <td class="wis"></td>
        <td class="cha"></td>
      </tr>
    `;
    table.append(thead, tbody);
    return table;
}

function refreshStatsTable() {
    var elements = document.getElementsByClassName("str");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.str + character.strbonus;
    }
    var elements = document.getElementsByClassName("dex");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.dex + character.dexbonus;
    }
    var elements = document.getElementsByClassName("con");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.con + character.conbonus;
    }
    var elements = document.getElementsByClassName("int");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.int + character.intbonus;
    }
    var elements = document.getElementsByClassName("wis");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.wis + character.wisbonus;
    }
    var elements = document.getElementsByClassName("cha");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.cha + character.chabonus;
    }
}

function createHPACTable() {
    let hpactable = document.createElement("table");
    hpactable.className = "sheet-table";
    let hpacthead = document.createElement("thead");
    hpacthead.className = "sheet-table-header";
    hpacthead.innerHTML = `
    <tr>
        <th>Hit Points (HP)</th>
        <th>Armor Class (AC)</th>
    </tr>
    `;
    let hpactbody = document.createElement("tbody");
    hpactbody.className = "sheet-table-body";
    hpactbody.innerHTML = `
    <tr>
        <td class="hp"></td>
        <td class="ac"></td>
    </tr>
    `;
    hpactable.append(hpacthead, hpactbody);
    return hpactable
}

function refreshHPAC() {
    let tempHp = character.initialHPRoll + findModifier(character.con, character.conbonus)
    character.hp = tempHp > 0 ? tempHp : 1
    if (character.items.includes("Leather armor")) {
        console.log("has leather armor")
        character.ac = 11 + findModifier(character.dex, character.dexbonus)
    } else {
        character.ac = 10 + findModifier(character.dex, character.dexbonus)
    }
}

function refreshHPACTable() {
    var elements = document.getElementsByClassName("hp");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.hp;
    }
    var elements = document.getElementsByClassName("ac");
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = character.ac;
    }
}

function addParagraph(parent, text, className) {
    const p = document.createElement('p');
    p.className = className;
    p.textContent = text;
    parent.appendChild(p);
}

function addBox(parent, idName) {
    const div = document.createElement('div');
    div.className = "box";
    div.id = idName;
    parent.appendChild(div);
}

function addRowToBox(parent, text) {
    document.body.style.overflow = 'hidden';
    const div = document.createElement('div');
    div.className = "row"
    div.innerHTML = text
    parent.appendChild(div)
    document.body.style.overflow = '';
}

function refreshLanguageBox() {
    const box = document.getElementById("languages")
    box.innerHTML = ''
    for (var i = 0; i < character.languages.length; i++) {
        addRowToBox(box, character.languages[i])
    }
    const addlLanguages = document.getElementsByName("addlLanguage")
    for (var i = 0; i < addlLanguages.length; i++) {
        addRowToBox(box, addlLanguages[i].value)
    }
}

function refreshTalentsBox() {
    const box = document.getElementById("talents")
    box.innerHTML = ''
    for (const key in character.talentsSkills) {
        if (character.talentsSkills[key].type != "twelve") {
            addRowToBox(box, character.talentsSkills[key].description)
        }
    }
}

function refreshGearBox() { // HOLY FUCKIN SHIT IT'S A GENIE!
    const box = document.getElementById("gear")
    box.innerHTML = ''
    addRowToBox(box, `${character.gp} GP`)
    for (var i = 0; i < character.items.length; i++) {
        addRowToBox(box, character.items[i])
    }
}

function refreshSpellsBox() {
    const box = document.getElementById("spells")
    if (box != null) {
        box.innerHTML = ''
    }
    for (const key in character.spells) {
        addRowToBox(box, character.spells[key].name)
    }
}

function createRadio(radioType) {
    const label = document.createElement("label")
    label.innerHTML = radioType
    const radio = document.createElement("input")
    radio.type = "radio"
    radio.id = radioType
    radio.name = "stat" + dialogNum
    radio.value = radioType
    label.appendChild(radio)
    return label
}

function talentRoll() {
    let talentRoll = randomInt(1, 6) + randomInt(1, 6)
    let temp = 0
    for (const key in classInfo.talents) {
        if (talentRoll >= temp && talentRoll <= key) { // talent keys are max of range
            talent = classInfo.talents[key]
            tempTalent = {
                ...talent
            } // i don't want to manually add the Talent. thing
            tempTalent.description = `Talent. ${talent.description}`
            character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
            break
        } else {
            temp = key
        }
    }
}

function giantPulsatingTalentsHandler(type, targets) {
    switch (type) {
        case "human":
            talentRoll()
            const talentsKeys = Object.keys(character.talentsSkills)
            giantPulsatingTalentsHandler(character.talentsSkills[Object.keys(character.talentsSkills).length].type, 'targets' in character.talentsSkills[talentsKeys[talentsKeys.length - 1]] ? character.talentsSkills[talentsKeys[talentsKeys.length - 1]].targets : null)
            refreshTalentsBox()
            break
        case "statIncrease":
            let message = "You get a +2 increase to your choice of "
            for (var i = 0; i < targets.length; i++) {
                if (i == targets.length - 1) {
                    message += `or ${targets[i]}.`
                } else if (targets.length > 2) {
                    message += `${targets[i]}, `
                } else {
                    message += `${targets[i]} `
                }
            }
            addParagraph(contentArea, message, "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            for (var i = 0; i < targets.length; i++) {
                div.appendChild(createRadio(targets[i]))
            }
            contentArea.appendChild(div)
            dialogNum++
            break
        case "twelve":
            var heading = document.createElement('p');
            heading.className = "heading-small";
            heading.textContent = "You get a talent of your choice, or a +2 increase to any stat.";
            contentArea.appendChild(heading);
            var div = document.createElement("div")
            div.id = "twelve" + dialogNum
            div.className = "twelve-choice"
            for (const key in classInfo.talents) {
                if (key == 12) {
                    break
                }
                p = document.createElement('p');
                p.textContent = classInfo.talents[key].description;
                p.onclick = function() {
                    tempTalent = {
                        ...classInfo.talents[key]
                    }
                    tempTalent.description = "Talent. " + tempTalent.description
                    character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                    giantPulsatingTalentsHandler(classInfo.talents[key].type, 'targets' in classInfo.talents[key] ? classInfo.talents[key].targets : null)
                    heading.remove()
                    div.remove()
                    refreshTalentsBox()
                }
                div.appendChild(p);
            }
            p = document.createElement('p');
            p.textContent = "+2 increase to any stat";
            p.onclick = function() {
                character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = {
                    type: "statIncrease",
                    description: "Talent. +2 to any stat.",
                    targets: ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
                }
                giantPulsatingTalentsHandler("statIncrease", ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"])
                heading.remove()
                div.remove()
                refreshTalentsBox()
            }
            div.appendChild(p);
            contentArea.appendChild(div)
            dialogNum++
            break
        case "spellcasting":
            character.spellcasting += 1
            break
        case "turnUndead":
            character.spells = {
                0: {
                    name: "Turn Undead",
                    class: ["Priest"],
                    duration: "Instant",
                    range: "Near",
                    description: "You rebuke undead creatures, forcing them to flee. You must present a holy symbol to cast this spell. Undead creatures within near of you must make a CHA check vs. your spellcasting check. If a creature fails by 10+ points and is equal to or less than your level, it is destroyed. Otherwise, on a fail, it flees from you for 5 rounds."
                }
            }
            refreshSpellsBox()
            break
        case "wizardLanguages":
            addParagraph(contentArea, "You know two additional common languages and two rare languages.", "heading-small")
            const languageDiv = document.createElement("div")
            languageDiv.className = "dropdowns"
            const common = ["Common", "Dwarvish", "Elvish", "Giant", "Goblin", "Merran", "Orcish", "Reptilian", "Sylvan", "Thanian"]
            const rare = ["Celestial", "Diabolic", "Draconic", "Primordial"]
            for (var i = 0; i < 2; i++) {
                var wrapper = document.createElement("select")
                wrapper.name = "addlLanguage"
                wrapper.onchange = function() {
                    refreshLanguageBox()
                }
                for (var j = 0; j < common.length; j++) {
                    if (!character.languages.includes(common[j])) {
                        var option = document.createElement("option")
                        option.value = common[j]
                        option.innerHTML = common[j]
                        wrapper.appendChild(option)
                    }
                }
                languageDiv.appendChild(wrapper)
            }
            for (var i = 0; i < 2; i++) {
                var wrapper = document.createElement("select")
                wrapper.name = "addlLanguage"
                wrapper.onchange = function() {
                    refreshLanguageBox()
                }
                for (var j = 0; j < rare.length; j++) {
                    if (!character.languages.includes(rare[j])) {
                        var option = document.createElement("option")
                        option.value = rare[j]
                        option.innerHTML = rare[j]
                        wrapper.appendChild(option)
                    }
                }
                languageDiv.appendChild(wrapper)
            }
            contentArea.appendChild(languageDiv)
            break
        case "wizardItem":
            character.items.push("1 random magic item of a type you choose")
            refreshGearBox()
            break
        case "wizardIncrease":
            addParagraph(contentArea, "You get a +2 increase to Intelligence, or a +1 bonus on spellcasting checks.", "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            div.appendChild(createRadio("Intelligence"))
            div.appendChild(createRadio("Spellcasting Checks"))
            contentArea.appendChild(div)
            dialogNum++
            refreshSpellsBox()
            break
        case "spellSlot":
            character.spellSlots++
            refreshSpellsBox()
            break
    }
}

function handleStatIncrease() {
    character.strbonus = 0
    character.dexbonus = 0
    character.conbonus = 0
    character.intbonus = 0
    character.wisbonus = 0
    character.chabonus = 0
    character.spellcasting = 0
    for (var i = 1; i <= dialogNum; i++) {
        let buttons = document.getElementsByName("stat" + i)
        for (var j = 0; j < buttons.length; j++) {
            if (buttons[j].checked) {
                switch (buttons[j].id) {
                    case "Strength":
                        character.strbonus += 2
                        break
                    case "Dexterity":
                        character.dexbonus += 2
                        break
                    case "Constitution":
                        character.conbonus += 2
                        break
                    case "Intelligence":
                        character.intbonus += 2
                        break
                    case "Wisdom":
                        character.wisbonus += 2
                        break
                    case "Charisma":
                        character.chabonus += 2
                        break
                    case "Spellcasting Checks":
                        character.spellcasting += 1
                        break
                }
            }
        }
    }

    refreshStatsTable()
    refreshHPAC()
    refreshHPACTable()
    refreshSpellsBox()
}

function generateSpellSelector() {
    const table = document.createElement("table")
    table.className = "spells-table"
    table.id = "spellsTable"
    for (const key in spells) {
        if (spells[key].class.includes(character.class)) {
            const tr = document.createElement("tr")

            const tdCheck = document.createElement("td")
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.id = "spell" + key
            checkbox.name = "spell" + key
            checkbox.value = key
            checkbox.onclick = function() {
                handleSpellSelection()
            }
            tdCheck.appendChild(checkbox)
            tr.appendChild(tdCheck)

            const tdName = document.createElement("td")
            tdName.innerHTML = spells[key].name
            tdName.className = "spell-name"
            tr.appendChild(tdName)

            const tdMisc = document.createElement("td")
            tdMisc.innerHTML = `${spells[key].duration}, ${spells[key].range}`
            tr.appendChild(tdMisc)

            const tdDesc = document.createElement("td")
            tdDesc.innerHTML = spells[key].description
            tr.appendChild(tdDesc)

            table.appendChild(tr)
        }
    }
    contentArea.appendChild(table)
}

function handleSpellSelection() {
    const spellSlotsNotifier = document.getElementById("spellSlotsNotifier")
    const spellsTable = document.getElementById("spellsTable")
    if (character.class == "Priest") {
        character.spells = {
            0: {
                name: "Turn Undead",
                class: ["Priest"],
                duration: "Instant",
                range: "Near",
                description: "You rebuke undead creatures, forcing them to flee. You must present a holy symbol to cast this spell. Undead creatures within near of you must make a CHA check vs. your spellcasting check. If a creature fails by 10+ points and is equal to or less than your level, it is destroyed. Otherwise, on a fail, it flees from you for 5 rounds."
            }
        }
    } else {
        character.spells = {}
    }
    let spellsSelected = 0
    for (var i = 0; i <= Object.keys(spells).length; i++) {
        const spellCheckbox = document.getElementById("spell" + i)
        if (spellCheckbox != null) {
            if (spellCheckbox.checked) {
                spellsSelected++
                character.spells[i] = spells[spellCheckbox.value]
            }
        }
    }
    if (spellsSelected == character.spellSlots) {
        spellsTable.classList.add("disabled")
        for (var i = 0; i <= Object.keys(spells).length; i++) {
            const spellCheckbox = document.getElementById("spell" + i)
            if (spellCheckbox != null) {
                if (!spellCheckbox.checked) {
                    spellCheckbox.disabled = true
                }
            }
        }
    } else {
        spellsTable.classList.remove("disabled")
        for (var i = 0; i <= Object.keys(spells).length; i++) {
            const spellCheckbox = document.getElementById("spell" + i)
            if (spellCheckbox != null) {
                spellCheckbox.disabled = false
            }
        }
    }

    spellSlotsNotifier.innerHTML = `${character.spellSlots - spellsSelected} Tier 1 Spell Slots Remaining`
    refreshSpellsBox()
}

function generateWeaponSelector() {
    const table = document.createElement("table")
    table.className = "weapons-table"
    table.id = "weaponsTable"
    for (const key in weapons) {
        const tr = document.createElement("tr")

        const tdCheck = document.createElement("td")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = "weapon" + key
        checkbox.name = "weapon" + key
        checkbox.value = key
        checkbox.onclick = function() {
            handleWeaponSelection(this.value)
        }
        tdCheck.appendChild(checkbox)
        tr.appendChild(tdCheck)

        const tdName = document.createElement("td")
        tdName.innerHTML = weapons[key].name
        tdName.className = "weapon-name"
        tr.appendChild(tdName)

        const tdType = document.createElement("td")
        tdType.innerHTML = weapons[key].type
        tr.appendChild(tdType)

        const tdRange = document.createElement("td")
        tdRange.innerHTML = weapons[key].range
        tr.appendChild(tdRange)

        const tdDamage = document.createElement("td")
        tdDamage.innerHTML = weapons[key].damage
        tr.appendChild(tdDamage)

        const tdProps = document.createElement("td")
        let props = ""
        let j = 0
        for (const property of weapons[key].properties) {
            props = props + property
            if (j < weapons[key].properties.length - 1) {
                props = props + ", "
            }
            j++
        }
        tdProps.innerHTML = props
        tr.appendChild(tdProps)

        table.appendChild(tr)
    }
    contentArea.appendChild(table)
}

function handleWeaponSelection(value) {
    const weaponsTable = document.getElementById("weaponsTable")
    let weaponSelected = 0
    for (var i = 0; i <= Object.keys(weapons).length; i++) {
        const weaponCheckbox = document.getElementById("weapon" + i)
        if (weaponCheckbox != null) {
            if (weaponCheckbox.checked) {
                weaponSelected++
                character.items.push(weapons[i].name)
            } else if (weaponCheckbox.value = value) {
                character.items = character.items.filter(item => item !== weapons[i].name);
            }
        }
    }
    if (weaponSelected > 0) {
        weaponsTable.classList.add("disabled")
        for (var i = 0; i <= Object.keys(weapons).length; i++) {
            const weaponCheckbox = document.getElementById("weapon" + i)
            if (weaponCheckbox != null) {
                if (!weaponCheckbox.checked) {
                    weaponCheckbox.disabled = true
                }
            }
        }
    } else {
        weaponsTable.classList.remove("disabled")
        for (var i = 0; i <= Object.keys(weapons).length; i++) {
            const weaponCheckbox = document.getElementById("weapon" + i)
            if (weaponCheckbox != null) {
                weaponCheckbox.disabled = false
            }
        }
    }

    refreshGearBox()
}

const backgrounds = ["Urchin", "Wanted", "Cult Initiate", "Thieves' Guild", "Banished", "Orphaned", "Wizard's Apprentice", "Jeweler", "Herbalist", "Barbarian", "Mercenary", "Sailor", "Acolyte", "Soldier", "Ranger", "Scout", "Minstrel", "Scholar", "Noble", "Chirurgeon"]
const raceArray = ["Dwarf", "Elf", "Goblin", "Half-Orc", "Halfling", "Human"]
const races = {
    dwarf: {
        names: ['Thordrim Stonebjirn', 'Dallin Alemonger', 'Jak Hammerhand', 'Halgrom Blackrock', 'Krag Silvervein', 'Cil Marblebreaker', 'Toradin Ironhouse', 'Gorim Pickaxe', 'Phlagon Axehand', 'Axebrom Rocksmasher', 'Frauline Bronzehand', 'Hillda Grogbeard', 'Gemma Goldflint', 'Brakkia Shatterstone', 'Tharia Silverhelm', 'Sarai Marblefist', 'Danika Stonehand', 'Wynn Orebelly', 'Langhilda Maceface', 'Tilda Stonebrew', 'Thorack Caskraider', 'Jevil Brownrocks', 'Sigrun Fellhammer', 'Crunkle Iceheart', 'Tyr Wraithbane', 'Ivan Killhammer', 'Casker Hardhand', 'Ulgrim Ironheart', 'Zalgrom Braveaxe', 'Jax Firebeard', 'Jessa Baneshield', 'Kelja Marblehand', 'Pamika Lavabrow', 'Sapphire Hammerheart', 'Doria Icebeard', 'Branika Downbrew', 'Morrigan Emberstone', 'Ember Stonehelm', 'Icelle Rockbane', 'Brianna Grogfiend', 'Axel Blackstone', 'Tharrik Bronzebeard', 'Erik Silverchain', 'Hargraves Brownmead', 'Maddox Hammerfell', 'Grimbar Meadstone', 'Aldrim Fireheart', 'Norvig Shieldbjirn', 'Valbjorn Brewjaw', 'Valgrim Blackheart', 'Freya Battleborn', 'Helga Firebrew', 'Halga Silverbane', 'Klara Goldstone', 'Maggi Stonebrow', 'Hikara Stormborn', 'Erinalda Icebane', 'Krohilda Silverheart', 'Belynn Oremonger', 'Opal Goldheart', 'Zakk Ironspike u/Wabutan', 'Merrik Bourbontoe', 'Billick Stormbrew', 'Hark Iceborn', 'Zalgrim Hardheart', 'Todric Brewheart', 'Goregrim Alebeard', 'Aldvar Beardbane', 'Fredrik Rockhard', 'Ferric Emberfell', 'Hilda Firemane', 'Kaja Lavafiend', 'Ruby Braveheart', 'Saria Bloodhelm', 'Erinia Grogfist', 'Allivia Stormbeard', 'Vera Goldhand', 'Maddi Silverbjirn', 'Madilyn Iceshield', 'Merrilyn Firebane', 'Grim Blackiron', 'Reinhardt Fellbeard', 'Grom Chainbeard', 'Karl Firestone', 'Wolfrim Shattershield', 'Ribert Goldmonger', 'Dak Rockmine', 'Olvik Thunderaxe', 'Brim Icefist', 'Korgrim Stoneshield', 'Roberta Lightborn', 'Berta Axefiend', 'Carla Hammerstrike', 'Katja Wraithheart', 'Ostara Marblebrew', 'Gertrude Killbrew', 'Ida Beermaker', 'Kirra Anvilbreaker', 'Jozelyn Strongshield', 'Gisli Onyxhammer'],
        languages: ["Common", "Dwarvish"],
        skill: {
            type: "text",
            description: "Stout. Start with +2 HP. Roll hit points per level with advantage."
        }
    },
    elf: {
        names: ['Aelar', 'Lirael', 'Thandor', 'Eryndis', 'Caelith', 'Miranel', 'Faelar', 'Sylwen', 'Elion', 'Vaenya', 'Arannis', 'Ilythra', 'Rhovan', 'Serelith', 'Kaelen', 'Melwen', 'Daenor', 'Elaria', 'Nythil', 'Amareth', 'Vorian', 'Thalindra', 'Aerendyl', 'Myrthiel', 'Calenor', 'Lysara', 'Fenril', 'Arivelle', 'Othoril', 'Selenya', 'Vaeril', 'Tyriel', 'Elowyn', 'Rinaeth', 'Thalion', 'Shaelra', 'Eryon', 'Vaelira', 'Dareth', 'Ilvanya', 'Lorion', 'Narael', 'Eiren', 'Velisse', 'Arandor', 'Maelwen', 'Corith', 'Ysindra', 'Faenor', 'Lethwyn', 'Rhoviel', 'Amaraen', 'Cyrandir', 'Taenya', 'Eldric', 'Ilthirra', 'Kareth', 'Wynriel', 'Aeris', 'Thiriel', 'Galenor', 'Myrren', 'Olyssia', 'Ferion', 'Liora', 'Tyranel', 'Saelwen', 'Ardyn', 'Nireth', 'Vaelor', 'Elira', 'Eryndor', 'Maelis', 'Ciryen', 'Thaeven', 'Arisel', 'Doranil', 'Lysanthra', 'Kaerith', 'Vaenya', 'Othiriel', 'Talenor', 'Eilindra', 'Rhunel', 'Caenya', 'Velion', 'Amrinel', 'Thalen', 'Seranya', 'Lorathil', 'Iriandel', 'Fenya', 'Caerion', 'Yllisse', 'Dariel', 'Soryn', 'Aelira', 'Rhaevin', 'Eryssa', 'Talith'],
        languages: ["Common", "Elvish", "Sylvan"],
        skill: {
            type: "text",
            description: "Farsight. You get a +1 bonus to attack rolls with ranged weapons or a +1 bonus to spellcasting checks."
        }
    },
    goblin: {
        names: ['Borkle', 'Marrow', 'Tododon', 'Sparkmack', 'Svish', 'Mogglewog', 'Bendigo', 'Jare', 'Peacho', 'Lock', 'Shock', 'Barrel', 'Snik', 'Snak', 'Gordo', 'Nipmonger', 'Riddle', 'Spip', 'Kaa', 'Bonegrundle', 'Yaxmax', 'Tamborine', 'Riggity', 'Fishspleen', 'Bladder', 'Mumblemorg', 'Piss Jar', 'Kettle', 'Gnogin', 'Eee', 'Rattrap', 'Bigsmalls', 'Pork', 'Fwip', 'Gong', 'Zaza', 'Meeg', 'Meeg Two', 'Meeg Three', 'Spud', 'Uvano', 'Pingpang', 'Bowel', 'Ham', 'Gritgrash', 'Countbean', 'Sap Sam', 'Leek Leek', 'Bwob', 'Parsnip Jr.', 'Parsnip Sr,', 'Fat Cat', 'Eyemasher', 'Quiss', 'Wawa', 'Spork', 'Turnaround', 'Barfknees', 'Knifey', 'Cowshout', 'Spank', 'Stumpy', 'Backwater', 'Crowlaw', 'Clockwind', 'Burtlan', 'Smee', 'Macintosh', 'Sexpants', 'Ol\' Crabapple', 'Muckman', 'Dirtwallow', 'Crooknose', 'Beetlepocket', 'Sticky', 'Vraaz', 'Vick', 'Brackish', 'Pondjohn', 'Waxmuncher', 'Wicklicker', 'Candleear', 'Grimm', 'Portho', 'Odo', 'Fleshgutter', 'Slugsnatcher', 'Milksalt', 'Stewslosh', 'Cast Iron', 'Dutch', 'Squirrelskinner', 'Froggrope', 'Topsyturvy', 'Lardmouth', 'Thighflayer', 'Sinew', 'Hypotenoose', 'Gallow', 'Exlax'],
        languages: ["Common", "Goblin"],
        skill: {
            type: "text",
            description: "Keen Senses. You can't be surprised."
        }
    },
    halforc: {
        names: ['Gromak', 'Shara', 'Thok', 'Vasha', 'Rengar', 'Morla', 'Durgan', 'Kaela', 'Brakk', 'Sorna', 'Grothar', 'Liska', 'Korvak', 'Vira', 'Urgash', 'Morga', 'Tharek', 'Draela', 'Zogar', 'Hagra', 'Korrin', 'Shyla', 'Bront', 'Virael', 'Drogan', 'Kala', 'Rukhan', 'Torga', 'Grishan', 'Senna', 'Thrak', 'Vorla', 'Krag', 'Nasha', 'Murk', 'Brissa', 'Drogath', 'Kessa', 'Tharok', 'Ursa', 'Gorrim', 'Lurena', 'Rognar', 'Masha', 'Boruk', 'Vela', 'Grendar', 'Shaela', 'Tark', 'Freya', 'Orlok', 'Drana', 'Bragar', 'Yasha', 'Hroth', 'Kira', 'Zorak', 'Talia', 'Moktar', 'Selra', 'Ragnor', 'Vorina', 'Thokar', 'Malra', 'Drogon', 'Tressa', 'Grolin', 'Shira', 'Krug', 'Vashael', 'Durak', 'Nara', 'Borash', 'Lira', 'Thurg', 'Malka', 'Urgan', 'Drisela', 'Krog', 'Sera', 'Varkon', 'Hella', 'Branth', 'Kess', 'Gorrash', 'Virael', 'Throgar', 'Nysa', 'Murak', 'Dravella', 'Zurr', 'Orina', 'Krath', 'Tasha', 'Rogar', 'Shyra', 'Durven', 'Lorka', 'Brak', 'Valsha'],
        languages: ["Common", "Orcish"],
        skill: {
            type: "text",
            description: "Mighty. You have a +1 bonus to attack and damage rolls with melee weapons."
        }
    },
    halfling: {
        names: ['Bilwen', 'Tillo', 'Marigold', 'Pippin', 'Nibbin', 'Dapple', 'Roscoe', 'Fenella', 'Corwin', 'Larkspur', 'Tobin', 'Bramble', 'Eglantine', 'Merric', 'Jebble', 'Lulabelle', 'Harbin', 'Tansy', 'Finnan', 'Poppy', 'Quillan', 'Tansel', 'Wrenna', 'Orin', 'Mirabel', 'Cudwig', 'Pernel', 'Dobb', 'Seraphine', 'Fendrel', 'Tibb', 'Nettle', 'Wendal', 'Minerva', 'Lyle', 'Ivy', 'Fintan', 'Clove', 'Tobble', 'Brina', 'Halric', 'Juniper', 'Kipper', 'Maela', 'Perkin', 'Dobby', 'Perenelle', 'Gilly', 'Rollo', 'Thistle', 'Pipkin', 'Maribel', 'Silas', 'Clover', 'Fenwick', 'Myrtle', 'Jorrel', 'Tilly', 'Brom', 'Camellia', 'Quince', 'Halina', 'Nobby', 'Petunia', 'Merrin', 'Tilda', 'Orwin', 'Faye', 'Tobert', 'Lark', 'Bimble', 'Serilda', 'Roderic', 'Brambley', 'Nissa', 'Crispin', 'Lottie', 'Filbert', 'Tressa', 'Wendel', 'Pimpernel', 'Gwenneth', 'Rumble', 'Camelia', 'Swithin', 'Daphna', 'Wibble', 'Junia', 'Folke', 'Petronella', 'Jebediah', 'Fina', 'Mervin', 'Ottilie', 'Bramwell', 'Elsbeth', 'Puck', 'Corliss', 'Nimble', 'Thistlewick'],
        languages: ["Common"],
        skill: {
            type: "text",
            description: "Stealthy. Once per day, you can become invisible for 3 rounds."
        }
    },
    human: {
        names: ['Adrian', 'Liora', 'Marcus', 'Selene', 'Tobias', 'Elara', 'Gavin', 'Maris', 'Nolan', 'Freya', 'Julian', 'Kaela', 'Desmond', 'Aria', 'Elias', 'Tamsin', 'Rowan', 'Lyra', 'Silas', 'Veda', 'Damian', 'Amara', 'Tristan', 'Noelle', 'Kieran', 'Saphira', 'Owen', 'Isla', 'Dominic', 'Thalia', 'Felix', 'Seraphine', 'Lucian', 'Elowen', 'Marcus', 'Livia', 'Adrian', 'Carys', 'Gabriel', 'Mirabel', 'Julian', 'Selah', 'Elias', 'Corinne', 'Nathaniel', 'Kaelin', 'Leo', 'Taryn', 'Tobias', 'Amaris', 'Silas', 'Vianne', 'Ronan', 'Elara', 'Dominic', 'Arwen', 'Kieran', 'Isolde', 'Owen', 'Mariel', 'Damian', 'Lyanna', 'Felix', 'Sylvie', 'Lucian', 'Delara', 'Nathaniel', 'Selene', 'Ronan', 'Thalassa', 'Leo', 'Isolde', 'Elias', 'Maris', 'Tristan', 'Vespera', 'Gabriel', 'Elowen', 'Adrian', 'Kaela', 'Owen', 'Cerys', 'Silas', 'Mirabel', 'Dominic', 'Liora', 'Kieran', 'Aria', 'Tobias', 'Saphira', 'Felix', 'Veda', 'Lucian', 'Thalia', 'Nathaniel', 'Seraphine', 'Rowan', 'Elara', 'Leo', 'Amara'],
        languages: ["Common"],
        skill: {
            type: "human",
            description: "Ambitious. You gain one additional talent roll at 1st level."
        }
    }
}
const classArray = ["Fighter", "Priest", "Thief", "Wizard"]
const classes = {
    fighter: {
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
        weapons: "Club, crossbow, dagger, mace, longsword, staff, warhammer",
        armor: "All armor and shields",
        hd: 6,
        misc: ["Languages. You know Celestial, Diabolic, or Primordial.", "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells.", "Deity. Choose a god to serve who matches your alignment (see Deities, pg. 28). You have a holy symbol for your god (it takes up no gear slots).", "Spellcasting. You can cast priest spells you know."],
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
};
const deities = [
    ["Saint Terragnis", "Lawful"],
    ["Gede", "Neutral"],
    ["Madeera the Covenant", "Lawful"],
    ["Ord", "Neutral"],
    ["Memnon", "Chaotic"],
    ["Ramlaat", "Chaotic"],
    ["Shune the Vile", "Chaotic"],
]

const spells = {
    1: {
        name: "Alarm",
        class: ["Wizard"],
        duration: "1 day",
        range: "Close",
        description: "You touch one object, such as a door threshold, setting a magical alarm on it. If any creature you do not designate while casting the spell touches or crosses past the object, a magical bell sounds in your head."
    },
    2: {
        name: "Burning Hands",
        class: ["Wizard"],
        duration: "Instant",
        range: "Close",
        description: "You spread your fingers with thumbs touching, unleashing a circle of flame that fills a close area around where you stand. Creatures within the area of effect take 1d6 damage. Unattended flammable objects ignite."
    },
    3: {
        name: "Charm Person",
        class: ["Wizard"],
        duration: "1d8 days",
        range: "Near",
        description: "You magically beguile one humanoid of level 2 or less within near range, who regards you as a friend for the duration. The spell ends if you or your allies do anything to hurt it that it notices. The target knows you magically enchanted it after the spell ends."
    },
    4: {
        name: "Cure Wounds",
        class: ["Priest"],
        duration: "Instant",
        range: "Close",
        description: "Your touch restores ebbing life. Roll a number of d6s equal to 1 + half your level (rounded down). One target you touch regains that many hit points."
    },
    5: {
        name: "Detect Magic",
        class: ["Wizard"],
        duration: "Focus",
        range: "Near",
        description: "You can sense the presence of magic within near range for the spell's duration. If you focus for two rounds, you discern its general properties. Full barriers block this spell."
    },
    6: {
        name: "Feather Fall",
        class: ["Wizard"],
        duration: "Instant",
        range: "Self",
        description: "You may make an attempt to cast this spell when you fall. Your rate of descent slows so that you land safely on your feet."
    },
    7: {
        name: "Floating Disk",
        class: ["Wizard"],
        duration: "10 rounds",
        range: "Near",
        description: "You create a floating, circular disk of force with a concave center. It can carry up to 20 gear slots. It hovers at waist level and automatically stays within near of you. It can't cross over drop-offs or pits taller than a human."
    },
    8: {
        name: "Hold Portal",
        class: ["Wizard"],
        duration: "10 rounds",
        range: "Near",
        description: "You magically hold a portal closed for the duration. A creature must make a successful STR check vs. your spellcasting check to open the portal. The knock spell ends this spell."
    },
    9: {
        name: "Holy Weapon",
        class: ["Priest"],
        duration: "5 rounds",
        range: "Close",
        description: "One weapon you touch is imbued with a sacred blessing. The weapon becomes magical and has +1 to attack and damage rolls for the duration."
    },
    10: {
        name: "Light",
        class: ["Priest", "Wizard"],
        duration: "1 hour real time",
        range: "Close",
        description: "One object you touch glows with bright, heatless light, illuminating out to a near distance for 1 hour of real time."
    },
    11: {
        name: "Mage Armor",
        class: ["Wizard"],
        duration: "10 rounds",
        range: "Self",
        description: "An invisible layer of magical force protects your vitals. Your armor class becomes 14 (18 on a critical spellcasting check) for the spell's duration."
    },
    12: {
        name: "Magic Missile",
        class: ["Wizard"],
        duration: "Instant",
        range: "Far",
        description: "You have advantage on your check to cast this spell. A glowing bolt of force streaks from your open hand, dealing 1d4 damage to one target."
    },
    13: {
        name: "Protection from Evil",
        class: ["Priest", "Wizard"],
        duration: "Focus",
        range: "Close",
        description: "For the spell's duration, chaotic beings have disadvantage on attack rolls and hostile spellcasting checks against the target. These beings also can't possess, compel, or beguile it. When cast on an already-possessed target, the possessing entity makes a CHA check vs. your last spellcasting check. On a failure, the entity is expelled."
    },
    14: {
        name: "Shield of Faith",
        class: ["Priest"],
        duration: "5 rounds",
        range: "Self",
        description: "A protective force wrought of your holy conviction surrounds you. You gain a +2 bonus to your armor class for the duration."
    },
    15: {
        name: "Sleep",
        class: ["Wizard"],
        duration: "Instant",
        range: "Near",
        description: "You weave a lulling spell that fills a near-sized cube extending from you. Living creatures in the area of effect fall into a deep sleep if they are LV 2 or less. Vigorous shaking or being injured wakes them."
    }
};

const weapons = {
    1: {
        name: "Bastard sword",
        type: "M",
        range: "C",
        damage: "1d8/1d10",
        properties: ["V", "2 slots"]
    },
    2: {
        name: "Club",
        type: "M",
        range: "C",
        damage: "1d4",
        properties: [""]
    },
    3: {
        name: "Crossbow",
        type: "R",
        range: "F",
        damage: "1d6",
        properties: ["2H", "L"]
    },
    4: {
        name: "Dagger",
        type: "M/R",
        range: "C/N",
        damage: "1d4",
        properties: ["F", "Th"]
    },
    5: {
        name: "Greataxe",
        type: "M",
        range: "C",
        damage: "1d8/1d10",
        properties: ["V", "2 slots"]
    },
    6: {
        name: "Greatsword",
        type: "M",
        range: "C",
        damage: "1d12",
        properties: ["2H", "2 slots"]
    },
    7: {
        name: "Javelin",
        type: "M/R",
        range: "C/F",
        damage: "1d4",
        properties: ["Th"]
    },
    8: {
        name: "Longbow",
        type: "R",
        range: "F",
        damage: "1d8",
        properties: ["2H"]
    },
    9: {
        name: "Longsword",
        type: "M",
        range: "C",
        damage: "1d8",
        properties: [""]
    },
    10: {
        name: "Mace",
        type: "M",
        range: "C",
        damage: "1d6",
        properties: [""]
    },
    11: {
        name: "Shortbow",
        type: "R",
        range: "F",
        damage: "1d4",
        properties: ["2H"]
    },
    12: {
        name: "Shortsword",
        type: "M",
        range: "C",
        damage: "1d6",
        properties: [""]
    },
    13: {
        name: "Spear",
        type: "M/R",
        range: "C/N",
        damage: "1d6",
        properties: ["Th"]
    },
    14: {
        name: "Staff",
        type: "M",
        range: "C",
        damage: "1d4",
        properties: ["2H"]
    },
    15: {
        name: "Warhammer",
        type: "M",
        range: "C",
        damage: "1d10",
        properties: ["2H"]
    }
};

const gear = ["Torch", "Dagger", "Pole", "Rations (3)", "Rope, 60'", "Oil, flask", "Crowbar", "Iron spikes (10)", "Flint and steel", "Grappling hook", "Shield", "Caltrops (one bag)"]

let character = null
let classInfo = null

let dialogNum = 1

window.addEventListener('DOMContentLoaded', function() {
    contentArea = document.getElementById("contentArea")

    genButton = document.getElementById("genButton")
    genButton.onclick = function() {
        character = {
            name: "",
            race: "",
            class: "",
            title: "",
            alignment: "",
            background: "",
            languages: [],
            deity: "",
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
            strbonus: 0,
            dexbonus: 0,
            conbonus: 0,
            intbonus: 0,
            wisbonus: 0,
            chabonus: 0,
            spellcasting: 0,
            initialHPRoll: 0,
            hp: 0,
            ac: 0,
            gp: 0,
            talentsSkills: {},
            items: [],
            spellSlots: 0,
            spells: {}
        }
        raceInfo = null
        classInfo = null
        character.race = choice(raceArray)
        switch (character.race) {
            case "Dwarf":
                raceInfo = races.dwarf
                break
            case "Elf":
                raceInfo = races.elf
                break
            case "Goblin":
                raceInfo = races.goblin
                break
            case "Halfling":
                raceInfo = races.halfling
                break
            case "Half-Orc":
                raceInfo = races.halforc
                break
            case "Human":
                raceInfo = races.human
                break
        }
        character.name = choice(raceInfo.names)
        character.languages = [...raceInfo.languages]
        character.class = choice(classArray)
        switch (character.class) {
            case "Fighter":
                classInfo = classes.fighter
                break
            case "Priest":
                classInfo = classes.priest
                break
            case "Thief":
                classInfo = classes.thief
                break
            case "Wizard":
                classInfo = classes.wizard
                break
        }
        let deityInfo = choice(deities)
        character.deity = deityInfo[0]
        character.alignment = deityInfo[1]
        character.title = classInfo.titles[character.alignment]
        character.background = choice(backgrounds)
        let statArray = getStats()
        character.str = statArray[0]
        character.dex = statArray[1]
        character.con = statArray[2]
        character.int = statArray[3]
        character.wis = statArray[4]
        character.cha = statArray[5]
        character.initialHPRoll = getInitialHP(classInfo.hd, character.race)
        let tempHp = character.initialHPRoll + findModifier(character.con, character.conbonus)
        character.hp = tempHp > 0 ? tempHp : 1
        character.ac = 10 + findModifier(character.dex, character.dexbonus)
        character.gp = 0

        character.talentsSkills[0] = raceInfo.skill

        let j = 1
        let talent = {}
        for (const misc of classInfo.misc) {
            talent = { // skills aren't formatted as talents because they're all text
                type: "text",
                description: misc
            }
            if (misc == "Languages. You know two additional common languages and two rare languages.") {
                talent = {
                    type: "wizardLanguages",
                    description: "Languages. You know two additional common languages and two rare languages."
                }
            } else if (misc == "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells.") {
                talent = {
                    type: "turnUndead",
                    description: "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells."
                }
            }
            character.talentsSkills[j] = talent
            j++
        }

        talentRoll()

        for (var i = 0; i < classInfo.items.length; i++) {
            character.items.push(classInfo.items[i])
        }

        if (character.class != "Wizard") {
            character.items.push("Leather armor")
        }

        let items = randomInt(1, 6)

        for (let i = 0; i < items; i++) {
            character.items.push(choice(gear))
        }

        character.spellSlots = classInfo.spells

        console.log(character)

        contentArea.innerHTML = ''

        addParagraph(contentArea, character.name, "heading-large");
        addParagraph(contentArea, `${character.race} ${character.class}`, "heading-small");

        contentArea.appendChild(createMiscTable())

        contentArea.appendChild(createStatsTable())
        refreshStatsTable()

        contentArea.appendChild(createHPACTable())
        refreshHPAC()
        refreshHPACTable()

        addParagraph(contentArea, "Armor Proficiencies", "heading-small");
        addParagraph(contentArea, classInfo.armor, "miscinfo");
        addParagraph(contentArea, "Weapon Proficiencies", "heading-small");
        addParagraph(contentArea, classInfo.weapons, "miscinfo");
        contentArea.appendChild(document.createElement("br"))

        addParagraph(contentArea, "Languages", "heading-small");
        addBox(contentArea, "languages")
        refreshLanguageBox()

        addParagraph(contentArea, "Talents", "heading-small");
        addBox(contentArea, "talents")
        refreshTalentsBox()

        addParagraph(contentArea, "Gear", "heading-small");
        addBox(contentArea, "gear")

        if (classInfo.spells > 0) {
            addParagraph(contentArea, "Spells", "heading-small");
            addBox(contentArea, "spells")
            refreshSpellsBox()
        }

        let customizationRequired = ["human", "statIncrease", "twelve", "wizardLanguages", "wizardIncrease"]

        for (const key in character.talentsSkills) {
            if (customizationRequired.includes(character.talentsSkills[key].type)) {
                contentArea.appendChild(document.createElement("br"))
                contentArea.appendChild(document.createElement("br"))
                contentArea.appendChild(document.createElement("hr"))
                addParagraph(contentArea, "Customization", "heading-large");
                refreshLanguageBox()

                for (const key in character.talentsSkills) {
                    if (character.talentsSkills != "text") {
                        giantPulsatingTalentsHandler(character.talentsSkills[key].type, 'targets' in character.talentsSkills[key] ? character.talentsSkills[key].targets : null)
                    }
                }

                break

            }
        }

        contentArea.appendChild(document.createElement("br"))
        contentArea.appendChild(document.createElement("br"))
        contentArea.appendChild(document.createElement("hr"))
        addParagraph(contentArea, "Gear", "heading-large");
        generateWeaponSelector()
        refreshGearBox()

        if (character.spellSlots > 0) {
            contentArea.appendChild(document.createElement("br"))
            contentArea.appendChild(document.createElement("br"))
            contentArea.appendChild(document.createElement("hr"))
            addParagraph(contentArea, "Spells", "heading-large");
            const spellSlotsNotifier = document.createElement("p")
            spellSlotsNotifier.className = "heading-small"
            spellSlotsNotifier.id = "spellSlotsNotifier"
            spellSlotsNotifier.innerHTML = `${character.spellSlots} Tier 1 Spell Slots Remaining`
            contentArea.appendChild(spellSlotsNotifier)
            generateSpellSelector()
        }


    }
});
