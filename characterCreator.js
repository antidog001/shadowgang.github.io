import { grimoire_classes, grimoire_backgrounds, grimoire_spells, grimoire_weapons, patron_boons, black_lotus } from "/info.js";

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
    if (window.mobileCheck()) { // doing it this way because it needs no refresh
        misctable.className = "sheet-table";
        const miscthead1 = document.createElement("thead");
        miscthead1.className = "sheet-table-header";
        miscthead1.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Alignment</th>
        </tr>
        `;
        const misctbody1 = document.createElement("tbody");
        misctbody1.className = "sheet-table-body";
        misctbody1.innerHTML = `
        <tr>
            <td>${character.title}</td>
            <td>${character.alignment}</td>
        </tr>
        `;
        const miscthead2 = document.createElement("thead");
        miscthead2.className = "sheet-table-header";
        miscthead2.innerHTML = `
        <tr>
            <th>Background</th>
            <th>Deity</th>
        </tr>
        `;
        const misctbody2 = document.createElement("tbody");
        misctbody2.className = "sheet-table-body";
        misctbody2.innerHTML = `
        <tr>
            <td>${character.background}</td>
            <td>${character.deity}</td>
        </tr>
        `;
        misctable.append(miscthead1, misctbody1, miscthead2, misctbody2);
    } else {
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
    }

    return misctable
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
    let tempHp = character.initialHPRoll + findModifier(character.con, character.conbonus) + character.hpbonus
    character.hp = tempHp > 0 ? tempHp : 1
    if (character.items.includes("Leather armor")) {
        character.ac = 11 + findModifier(character.dex, character.dexbonus) + character.acbonus;
    } else {
        character.ac = 10 + findModifier(character.dex, character.dexbonus) + character.acbonus;
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

function rollTalent(table, prefix) {
    let talent = null
    let tempTalent = null
    // let talentRoll = 11
    let talentRoll = randomInt(1, 6) + randomInt(1, 6)
    let temp = 0
    for (const key in table) {
        if (talentRoll >= temp && talentRoll <= key) { // talent keys are max of range
            talent = table[key]
            tempTalent = {
                ...talent
            } // i don't want to manually add the Talent. thing
            tempTalent.description = `${prefix}. ${talent.description}`
            character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
            break
        } else {
            temp = key
        }
    }
}

function giantPulsatingTalentsHandler(type, targets) {
    var contentArea = document.getElementById("customization")
    var p = null
    switch (type) {
        case "human":
            if (character.class == "Warlock") {
                giantPulsatingTalentsHandler("talentBoonChoice", null);
            } else {
                rollTalent(classInfo.talents, "Talent");
            }
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
            var tempTalent = {}
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
            var common = ["Common", "Dwarvish", "Elvish", "Giant", "Goblin", "Merran", "Orcish", "Reptilian", "Sylvan", "Thanian"]
            var rare = ["Celestial", "Diabolic", "Draconic", "Primordial"]
            for (var i = 0; i < 2; i++) {
                var wrapper = document.createElement("select")
                wrapper.name = "addlLanguage"
                wrapper.onchange = function() {
                    refreshLanguageBox()
                }
                wrapper.innerHTML = "<option disabled selected value> -- select an option -- </option>"
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
                wrapper.innerHTML = "<option disabled selected value> -- select an option -- </option>"
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
        case "priestLanguage":
            addParagraph(contentArea, "You know either Celestial, Diabolic, or Primordial.", "heading-small")
            const languageDiv2 = document.createElement("div")
            languageDiv2.className = "dropdowns"
            const priestlyLanguages = ["Celestial", "Diabolic", "Primordial"]
            var wrapper = document.createElement("select")
            wrapper.name = "addlLanguage"
            wrapper.onchange = function() {
                refreshLanguageBox()
            }
            wrapper.innerHTML = "<option disabled selected value> -- select an option -- </option>"
            for (var j = 0; j < priestlyLanguages.length; j++) {
                if (!character.languages.includes(priestlyLanguages[j])) {
                    var option = document.createElement("option")
                    option.value = priestlyLanguages[j]
                    option.innerHTML = priestlyLanguages[j]
                    wrapper.appendChild(option)
                }
            }
            languageDiv2.appendChild(wrapper)
            contentArea.appendChild(languageDiv2)
            break
        case "knightLanguage":
            character.languages.push("Diabolic")
            refreshLanguageBox()
            break
        case "almazzatIncrease":
            addParagraph(contentArea, "You get a +2 increase to Strength or Constitution, or a +1 bonus to melee damage.", "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            div.appendChild(createRadio("Strength"))
            div.appendChild(createRadio("Constitution"))
            div.appendChild(createRadio("Melee Damage"))
            contentArea.appendChild(div)
            dialogNum++
            refreshSpellsBox()
            break
        case "twelveBoon":
            var heading = document.createElement('p');
            heading.className = "heading-small";
            heading.textContent = "You gain a boon of your choice, or a +2 increase to any stat.";
            contentArea.appendChild(heading);
            var div = document.createElement("div")
            div.id = "twelve" + dialogNum
            div.className = "twelve-choice"
            var tempTalent = {}
            for (const key in patron_boons[character.patron]) {
                if (key == 12) {
                    break
                }
                p = document.createElement('p');
                p.textContent = patron_boons[character.patron][key].description;
                p.onclick = function() {
                    tempTalent = {
                        ...patron_boons[character.patron][key]
                    }
                    tempTalent.description = "Boon. " + tempTalent.description
                    character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                    giantPulsatingTalentsHandler(patron_boons[character.patron][key].type, 'targets' in patron_boons[character.patron][key] ? patron_boons[character.patron][key].targets : null)
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
        case "acIncrease":
            character.acbonus += 1
            refreshHPAC()
            refreshHPACTable()
            break
        case "talentBoonChoice":
            var heading = document.createElement('p');
            heading.className = "heading-small";
            heading.textContent = `You gain a roll on ${character.patron}'s boon table or the Warlock talent table.`;
            contentArea.appendChild(heading);
            var div = document.createElement("div")
            div.id = "twelve" + dialogNum
            div.className = "twelve-choice"
            var tempTalent = {}
            var talentRoll = 0
            var temp = 0
            var talent = null
            p = document.createElement('p');
            p.textContent = "Patron Boon";
            p.onclick = function() {
                talentRoll = randomInt(1, 6) + randomInt(1, 6)
                temp = 0
                for (const key in patron_boons[character.patron]) {
                    if (talentRoll >= temp && talentRoll <= key) { // talent keys are max of range
                        talent = patron_boons[character.patron][key]
                        tempTalent = {
                            ...talent
                        }
                        tempTalent.description = `Boon. ${talent.description}`
                        character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                        break
                    } else {
                        temp = key
                    }
                }
                giantPulsatingTalentsHandler(tempTalent.type, 'targets' in tempTalent ? tempTalent.targets : null)
                heading.remove()
                div.remove()
                refreshTalentsBox()
            }
            div.appendChild(p);
            p = document.createElement('p');
            p.textContent = "Talent Roll";
            p.onclick = function() {
                talentRoll = randomInt(1, 6) + randomInt(1, 6)
                temp = 0
                for (const key in classInfo.talents) {
                    if (talentRoll >= temp && talentRoll <= key) { // talent keys are max of range
                        talent = classInfo.talents[key]
                        tempTalent = {
                            ...talent
                        }
                        tempTalent.description = `Talent. ${talent.description}`
                        character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                        break
                    } else {
                        temp = key
                    }
                }
                giantPulsatingTalentsHandler(tempTalent.type, 'targets' in tempTalent ? tempTalent[key].targets : null)
                heading.remove()
                div.remove()
                refreshTalentsBox()
            }
            div.appendChild(p);
            contentArea.appendChild(div)
            dialogNum++
            break
        case "warlockLanguage":
            addParagraph(contentArea, "You know either Celestial, Diabolic, Draconic, Primordial, or Sylvan.", "heading-small")
            const languageDiv3 = document.createElement("div")
            languageDiv3.className = "dropdowns"
            const diabolicLanguages = ["Celestial", "Diabolic", "Draconic", "Primordial", "Sylvan"]
            var wrapper = document.createElement("select")
            wrapper.name = "addlLanguage"
            wrapper.onchange = function() {
                refreshLanguageBox()
            }
            wrapper.innerHTML = "<option disabled selected value> -- select an option -- </option>"
            for (var j = 0; j < diabolicLanguages.length; j++) {
                if (!character.languages.includes(diabolicLanguages[j])) {
                    var option = document.createElement("option")
                    option.value = diabolicLanguages[j]
                    option.innerHTML = diabolicLanguages[j]
                    wrapper.appendChild(option)
                }
            }
            languageDiv3.appendChild(wrapper)
            contentArea.appendChild(languageDiv3)
            break
        case "randomBoon":
            let randomPatron = choice(["Almazzat", "Kytheros", "Shune the Vile", "Mugdulblub", "Titania", "The Willowman"])
            var talentRoll = randomInt(1, 6) + randomInt(1, 6)
                temp = 0
                for (const key in patron_boons[randomPatron]) {
                    if (talentRoll >= temp && talentRoll <= key) { // talent keys are max of range
                        talent = classInfo.talents[key]
                        tempTalent = {
                            ...talent
                        }
                        tempTalent.description = `Talent. ${talent.description}`
                        character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                        break
                    } else {
                        temp = key
                    }
                }
                giantPulsatingTalentsHandler(tempTalent.type, 'targets' in tempTalent ? tempTalent[key].targets : null)
            break
        case "twoBoons":
            var heading = document.createElement('p');
            heading.className = "heading-small";
            heading.textContent = "Choose between two boons.";
            contentArea.appendChild(heading);
            var div = document.createElement("div")
            div.id = "twelve" + dialogNum
            div.className = "twelve-choice"
            var talent = {}
            var tempTalent = {}
            for (let i = 1; i <= 2; i++) {
                var talentRoll = randomInt(1, 6) + randomInt(1, 6)
                for (const key in patron_boons[character.patron]) {
                    if (talentRoll >= temp && talentRoll <= key) { // talent keys are max of range
                        talent = patron_boons[character.patron][key]
                        tempTalent = {
                            ...talent
                        }
                        tempTalent.description = `Boon. ${talent.description}`
                        break
                    } else {
                        temp = key
                    }
                }
                p = document.createElement('p');
                p.textContent = tempTalent.description;
                p.onclick = function() {
                    character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                    giantPulsatingTalentsHandler(tempTalent.type, 'targets' in tempTalent ? tempTalent.targets : null)
                    heading.remove()
                    div.remove()
                    refreshTalentsBox()
                }
                div.appendChild(p);
            }
            contentArea.appendChild(div)
            dialogNum++
            break
        case "witchLanguage":
            character.languages.push("Diabolic")
            character.languages.push("Primordial")
            character.languages.push("Sylvan")
            refreshLanguageBox()
            break
        case "witchIncrease":
            addParagraph(contentArea, "You get a +2 increase to Charisma, or a +1 bonus on spellcasting checks.", "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            div.appendChild(createRadio("Charisma"))
            div.appendChild(createRadio("Spellcasting Checks"))
            contentArea.appendChild(div)
            dialogNum++
            refreshSpellsBox()
            break
        case "desertRiderIncrease":
            addParagraph(contentArea, "You get a +2 increase to Strength or Dexterity, or a +1 bonus to melee attacks.", "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            div.appendChild(createRadio("Strength"))
            div.appendChild(createRadio("Dexterity"))
            div.appendChild(createRadio("Melee Attacks"))
            contentArea.appendChild(div)
            dialogNum++
            refreshSpellsBox()
            break
        case "pitFighterIncrease":
            addParagraph(contentArea, "You get a +2 increase to Strength or Constitution, or a +1 bonus to melee attacks.", "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            div.appendChild(createRadio("Strength"))
            div.appendChild(createRadio("Constitution"))
            div.appendChild(createRadio("Melee Attacks"))
            contentArea.appendChild(div)
            dialogNum++
            refreshSpellsBox()
            break
        case "oneBlackLotus": // ONE black lotus, ah ah ah
            var blackLotusRoll = randomInt(1, 12)
            var tempTalent = {}
            tempTalent = black_lotus[blackLotusRoll]
            tempTalent.description = "Black Lotus Talent. " + tempTalent.description
            character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
            giantPulsatingTalentsHandler(tempTalent.type, 'targets' in tempTalent ? tempTalent.targets : null)
            refreshTalentsBox()
            break
        case "twoBlackLotus": // TWO black lotus, ah ah ah
            var blackLotusRoll = 0
            var tempTalent = {}
            for (let i = 1; i <= 2; i++) {
                blackLotusRoll = randomInt(2, 12)
                tempTalent = black_lotus[blackLotusRoll]
                tempTalent.description = "Black Lotus Talent. " + tempTalent.description
                character.talentsSkills[Object.keys(character.talentsSkills).length + 1] = tempTalent
                giantPulsatingTalentsHandler(tempTalent.type, 'targets' in tempTalent ? tempTalent.targets : null)
            }
            refreshTalentsBox()
            break
        case "additionalHD":
            character.hpbonus += randomInt(1, 6)
            refreshHPAC()
            refreshHPACTable()
            break
        case "seaWolfIncrease":
            addParagraph(contentArea, "You get a +2 increase to Strength or Constitution, or a +1 bonus to attacks.", "heading-small")
            var div = document.createElement("div")
            div.className = "stat-increase"
            div.onclick = function() {
                handleStatIncrease()
            }
            div.appendChild(createRadio("Strength"))
            div.appendChild(createRadio("Constitution"))
            div.appendChild(createRadio("Attacks"))
            contentArea.appendChild(div)
            dialogNum++
            refreshSpellsBox()
            break
        case "stoneSkin":
            character.acbonus += 2
            break
        case "bardLanguages":
            addParagraph(contentArea, "You know four additional common languages and one rare language.", "heading-small")
            const languageDiv4 = document.createElement("div")
            languageDiv4.className = "dropdowns"
            var common = ["Common", "Dwarvish", "Elvish", "Giant", "Goblin", "Merran", "Orcish", "Reptilian", "Sylvan", "Thanian"]
            var rare = ["Celestial", "Diabolic", "Draconic", "Primordial"]
            for (var i = 0; i < 4; i++) {
                var wrapper = document.createElement("select")
                wrapper.name = "addlLanguage"
                wrapper.onchange = function() {
                    refreshLanguageBox()
                }
                wrapper.innerHTML = "<option disabled selected value> -- select an option -- </option>"
                for (var j = 0; j < common.length; j++) {
                    if (!character.languages.includes(common[j])) {
                        var option = document.createElement("option")
                        option.value = common[j]
                        option.innerHTML = common[j]
                        wrapper.appendChild(option)
                    }
                }
                languageDiv4.appendChild(wrapper)
            }
            var wrapper = document.createElement("select")
            wrapper.name = "addlLanguage"
            wrapper.onchange = function() {
                refreshLanguageBox()
            }
            wrapper.innerHTML = "<option disabled selected value> -- select an option -- </option>"
            for (var j = 0; j < rare.length; j++) {
                if (!character.languages.includes(rare[j])) {
                    var option = document.createElement("option")
                    option.value = rare[j]
                    option.innerHTML = rare[j]
                    wrapper.appendChild(option)
                }
            }
            languageDiv4.appendChild(wrapper)
            contentArea.appendChild(languageDiv4)
            break
        case "chooseTalent":
            var heading = document.createElement('p');
            heading.className = "heading-small";
            heading.textContent = "You get a talent of your choice.";
            contentArea.appendChild(heading);
            var div = document.createElement("div")
            div.id = "twelve" + dialogNum
            div.className = "twelve-choice"
            var tempTalent = {}
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
            contentArea.appendChild(div)
            dialogNum++
            break
        case "namedBlade":
            character.items.push("+0 sword, choice")
            break
    }
}

function handleStatIncrease(bonus) {
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
                    case "Melee Damage":
                        break
                    case "Melee Attacks":
                        break
                    case "Attacks":
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
        if (spells[key].class.includes(character.class) && (spells[key].alignment.includes(character.alignment) || spells[key].alignment.length == 0)) {
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

            if (!window.mobileCheck()) {
                const tdMisc = document.createElement("td")
                tdMisc.innerHTML = `${spells[key].duration}, ${spells[key].range}`
                tr.appendChild(tdMisc)
            }

            const tdDesc = document.createElement("td")
            if (!window.mobileCheck()) {
                tdDesc.innerHTML = spells[key].description
            } else {
                tdDesc.innerHTML = `${spells[key].duration}, ${spells[key].range} - ${spells[key].description}`
            }
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

        if (!window.mobileCheck()) {
            const tdType = document.createElement("td")
            tdType.innerHTML = weapons[key].type
            tr.appendChild(tdType)

            const tdRange = document.createElement("td")
            tdRange.innerHTML = weapons[key].range
            tr.appendChild(tdRange)
        }

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

function handleContentInjectors() {
    classArray = [];
    classes = {};
    spells = {
        1: {
            name: "Alarm",
            class: ["Wizard"],
            alignment: [],
            duration: "1 day",
            range: "Close",
            description: "You touch one object, such as a door threshold, setting a magical alarm on it. If any creature you do not designate while casting the spell touches or crosses past the object, a magical bell sounds in your head."
        },
        2: {
            name: "Burning Hands",
            class: ["Wizard"],
            alignment: [],
            duration: "Instant",
            range: "Close",
            description: "You spread your fingers with thumbs touching, unleashing a circle of flame that fills a close area around where you stand. Creatures within the area of effect take 1d6 damage. Unattended flammable objects ignite."
        },
        3: {
            name: "Charm Person",
            class: ["Wizard"],
            alignment: [],
            duration: "1d8 days",
            range: "Near",
            description: "You magically beguile one humanoid of level 2 or less within near range, who regards you as a friend for the duration. The spell ends if you or your allies do anything to hurt it that it notices. The target knows you magically enchanted it after the spell ends."
        },
        4: {
            name: "Cure Wounds",
            class: ["Priest"],
            alignment: [],
            duration: "Instant",
            range: "Close",
            description: "Your touch restores ebbing life. Roll a number of d6s equal to 1 + half your level (rounded down). One target you touch regains that many hit points."
        },
        5: {
            name: "Detect Magic",
            class: ["Wizard"],
            alignment: [],
            duration: "Focus",
            range: "Near",
            description: "You can sense the presence of magic within near range for the spell's duration. If you focus for two rounds, you discern its general properties. Full barriers block this spell."
        },
        6: {
            name: "Feather Fall",
            class: ["Wizard"],
            alignment: [],
            duration: "Instant",
            range: "Self",
            description: "You may make an attempt to cast this spell when you fall. Your rate of descent slows so that you land safely on your feet."
        },
        7: {
            name: "Floating Disk",
            class: ["Wizard"],
            alignment: [],
            duration: "10 rounds",
            range: "Near",
            description: "You create a floating, circular disk of force with a concave center. It can carry up to 20 gear slots. It hovers at waist level and automatically stays within near of you. It can't cross over drop-offs or pits taller than a human."
        },
        8: {
            name: "Hold Portal",
            class: ["Wizard"],
            alignment: [],
            duration: "10 rounds",
            range: "Near",
            description: "You magically hold a portal closed for the duration. A creature must make a successful STR check vs. your spellcasting check to open the portal. The knock spell ends this spell."
        },
        9: {
            name: "Holy Weapon",
            class: ["Priest"],
            alignment: [],
            duration: "5 rounds",
            range: "Close",
            description: "One weapon you touch is imbued with a sacred blessing. The weapon becomes magical and has +1 to attack and damage rolls for the duration."
        },
        10: {
            name: "Light",
            class: ["Priest", "Wizard"],
            alignment: [],
            duration: "1 hour real time",
            range: "Close",
            description: "One object you touch glows with bright, heatless light, illuminating out to a near distance for 1 hour of real time."
        },
        11: {
            name: "Mage Armor",
            class: ["Wizard"],
            alignment: [],
            duration: "10 rounds",
            range: "Self",
            description: "An invisible layer of magical force protects your vitals. Your armor class becomes 14 (18 on a critical spellcasting check) for the spell's duration."
        },
        12: {
            name: "Magic Missile",
            class: ["Wizard"],
            alignment: [],
            duration: "Instant",
            range: "Far",
            description: "You have advantage on your check to cast this spell. A glowing bolt of force streaks from your open hand, dealing 1d4 damage to one target."
        },
        13: {
            name: "Protection from Evil",
            class: ["Priest", "Wizard"],
            alignment: [],
            duration: "Focus",
            range: "Close",
            description: "For the spell's duration, chaotic beings have disadvantage on attack rolls and hostile spellcasting checks against the target. These beings also can't possess, compel, or beguile it. When cast on an already-possessed target, the possessing entity makes a CHA check vs. your last spellcasting check. On a failure, the entity is expelled."
        },
        14: {
            name: "Shield of Faith",
            class: ["Priest"],
            alignment: [],
            duration: "5 rounds",
            range: "Self",
            description: "A protective force wrought of your holy conviction surrounds you. You gain a +2 bonus to your armor class for the duration."
        },
        15: {
            name: "Sleep",
            class: ["Wizard"],
            alignment: [],
            duration: "Instant",
            range: "Near",
            description: "You weave a lulling spell that fills a near-sized cube extending from you. Living creatures in the area of effect fall into a deep sleep if they are LV 2 or less. Vigorous shaking or being injured wakes them."
        }
    };
    backgrounds = ["Urchin", "Wanted", "Cult Initiate", "Thieves' Guild", "Banished", "Orphaned", "Wizard's Apprentice", "Jeweler", "Herbalist", "Barbarian", "Mercenary", "Sailor", "Acolyte", "Soldier", "Ranger", "Scout", "Minstrel", "Scholar", "Noble", "Chirurgeon"];
    weapons = {
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
    let anyInjector = false;
    for (var i = 1; i <= 7; i++) { // number of injectors is hardcoded
        const injector = document.getElementById("injector" + i)
        if (injector != null) {
            if (injector.checked) {
                anyInjector = true;
                inject(injector.value)
            }
        }
    }
    if (!anyInjector) {
        inject("Core")
    }
}

function inject(source) {
    let i = 1

    for (const class_key in grimoire_classes[source]) {
        classes[class_key] = grimoire_classes[source][class_key]
        classArray.push(grimoire_classes[source][class_key].name)
    }

    i = Object.keys(spells).length

    for (const spell_key in grimoire_spells[source]) {
        spells[i] = grimoire_spells[source][spell_key]
        i++
    }

    for (const background of grimoire_backgrounds[source]) {
        backgrounds.push(background)
    }

    i = Object.keys(weapons).length

    for (const weapon_key in grimoire_weapons[source]) {
        weapons[i] = grimoire_weapons[source][weapon_key]
        i++
    }
}

const { jsPDF } = window.jspdf;

function makePDF() {
    const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4"
    });

    const img = new Image();
    img.src = "sheet.png";

    img.onload = function () {
        // background
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();

        doc.addImage(img, "PNG", 0, 0, pageWidth, pageHeight);

        // text
        doc.setFontSize(adjustFontSize(character.name));
        doc.text(character.name, 105, 31);

        doc.setFontSize(adjustFontSize(character.race));
        doc.text(character.race, 91, 54.5);

        doc.setFontSize(adjustFontSize(character.class));
        doc.text(character.class, 91, 78);

        doc.setFontSize(adjustFontSize(18));
        doc.text("1", 97.5, 101);

        // doc.setFontSize(adjustFontSize(18));
        // doc.text("0", 125, 98);

        doc.setFontSize(adjustFontSize(18));
        doc.text("10", 146, 98);

        doc.setFontSize(adjustFontSize(character.title));
        doc.text(character.title, 91, 124);

        doc.setFontSize(adjustFontSize(character.alignment));
        doc.text(character.alignment, 91, 148);

        doc.setFontSize(adjustFontSize(character.background));
        doc.text(character.background, 91, 171.5);

        doc.setFontSize(16);
        doc.text(character.deity, 91, 195);

        doc.setFontSize(18);
        doc.text((character.str).toString(), 17, 52);

        doc.setFontSize(18);
        doc.text(((findModifier(character.str, character.strbonus) >= 0 ? "+" : "") + findModifier(character.str, character.strbonus).toString()), 34, 52);

        doc.setFontSize(18);
        doc.text((character.int).toString(), 54, 52);

        doc.setFontSize(18);
        doc.text(((findModifier(character.int, character.intbonus) >= 0 ? "+" : "") + findModifier(character.int, character.intbonus).toString()), 71, 52);

        doc.setFontSize(18);
        doc.text((character.dex).toString(), 17, 77);

        doc.setFontSize(18);
        doc.text(((findModifier(character.dex, character.dexbonus) >= 0 ? "+" : "") + findModifier(character.dex, character.dexbonus).toString()), 34, 77);

        doc.setFontSize(18);
        doc.text((character.wis).toString(), 54, 77);

        doc.setFontSize(18);
        doc.text(((findModifier(character.wis, character.wisbonus) >= 0 ? "+" : "") + findModifier(character.wis, character.wisbonus).toString()), 71, 77);

        doc.setFontSize(18);
        doc.text((character.con).toString(), 17, 102);

        doc.setFontSize(18);
        doc.text(((findModifier(character.con, character.conbonus) >= 0 ? "+" : "") + findModifier(character.con, character.conbonus).toString()), 34, 102);

        doc.setFontSize(18);
        doc.text((character.cha).toString(), 54, 102);

        doc.setFontSize(18);
        doc.text(((findModifier(character.cha, character.chabonus) >= 0 ? "+" : "") + findModifier(character.cha, character.chabonus).toString()), 71, 102);

        doc.setFontSize(32);
        doc.text((character.hp + character.hpbonus).toString(), 25, 134)

        doc.setFontSize(32);
        doc.text((character.ac + character.acbonus).toString(), 60, 134)

        let y = 32
        let x = 170

        doc.setFontSize(14)
        for (const talent_key in character.talentsSkills) {
            let desc = character.talentsSkills[talent_key].description
            let header = desc.split(".", 1)[0]
            if (header.includes("Talent") || header.includes("Boon")) {
                let currLine = ""
                let len = 0
                x = 170
                for (let i = 0; i < desc.length; i++) {
                    len++
                    currLine += desc[i]
                    if (desc[i] == " " && len > 44) {
                        doc.text(currLine, x, y)
                        y += 6
                        currLine = ""
                        x = 174
                        len = 0
                    }
                    if (i == desc.length - 1) {
                        doc.text(currLine, x, y)
                        currLine = ""
                        len = 0
                    }
                }
            } else {
                doc.text(header + ".", 170, y)
            }
            y += 8
        }

        for (const spell_key in character.spells) {
            doc.text(character.spells[spell_key].name + ".", 170, y)
            y += 8
        }

        doc.setFontSize(12)

        y = 126.25
        let y2 = 133
        let twoSlots = ["Bastard sword", "Greataxe", "Greatsword"]
        let threeSlots = ["Lance"]

        for (let i = 0; i < character.items.length; i++) {
            if (character.items[i].includes("free to carry")) {
                doc.text(character.items[i].split("(", 1)[0], 253, y2)
                y2 += 6
            } else {
                doc.text(character.items[i], 176, y)
                y += 6.75
                if (twoSlots.includes(character.items[i])) {
                    doc.text('"', 176, y)
                    y += 6.75
                } else if (threeSlots.includes(character.items[i])) {
                    for (let j = 0; j <= 1; j++) {
                        doc.text('"', 176, y)
                        y += 6.75
                    }
                }
            }
        }

        // save
        doc.save(character.name + ".pdf");
    };
}

function adjustFontSize(text) {
    let fontSize = 16;

    if (text.length > 18) {
        fontSize -= (text.length - 16);
    };

    return (fontSize < 6) ? 6 : fontSize;
}

var backgrounds = []
var raceArray = ["Dwarf", "Elf", "Goblin", "Half-Orc", "Halfling", "Human"]
var races = {
    dwarf: {
        names: ['Thordrim Stonebjirn', 'Dallin Alemonger', 'Jak Hammerhand', 'Halgrom Blackrock', 'Krag Silvervein', 'Cil Marblebreaker', 'Toradin Ironhouse', 'Gorim Pickaxe', 'Phlagon Axehand', 'Axebrom Rocksmasher', 'Frauline Bronzehand', 'Hillda Grogbeard', 'Gemma Goldflint', 'Brakkia Shatterstone', 'Tharia Silverhelm', 'Sarai Marblefist', 'Danika Stonehand', 'Wynn Orebelly', 'Langhilda Maceface', 'Tilda Stonebrew', 'Thorack Caskraider', 'Jevil Brownrocks', 'Sigrun Fellhammer', 'Crunkle Iceheart', 'Tyr Wraithbane', 'Ivan Killhammer', 'Casker Hardhand', 'Ulgrim Ironheart', 'Zalgrom Braveaxe', 'Jax Firebeard', 'Jessa Baneshield', 'Kelja Marblehand', 'Pamika Lavabrow', 'Sapphire Hammerheart', 'Doria Icebeard', 'Branika Downbrew', 'Morrigan Emberstone', 'Ember Stonehelm', 'Icelle Rockbane', 'Brianna Grogfiend', 'Axel Blackstone', 'Tharrik Bronzebeard', 'Erik Silverchain', 'Hargraves Brownmead', 'Maddox Hammerfell', 'Grimbar Meadstone', 'Aldrim Fireheart', 'Norvig Shieldbjirn', 'Valbjorn Brewjaw', 'Valgrim Blackheart', 'Freya Battleborn', 'Helga Firebrew', 'Halga Silverbane', 'Klara Goldstone', 'Maggi Stonebrow', 'Hikara Stormborn', 'Erinalda Icebane', 'Krohilda Silverheart', 'Belynn Oremonger', 'Opal Goldheart', 'Zakk Ironspike', 'Merrik Bourbontoe', 'Billick Stormbrew', 'Hark Iceborn', 'Zalgrim Hardheart', 'Todric Brewheart', 'Goregrim Alebeard', 'Aldvar Beardbane', 'Fredrik Rockhard', 'Ferric Emberfell', 'Hilda Firemane', 'Kaja Lavafiend', 'Ruby Braveheart', 'Saria Bloodhelm', 'Erinia Grogfist', 'Allivia Stormbeard', 'Vera Goldhand', 'Maddi Silverbjirn', 'Madilyn Iceshield', 'Merrilyn Firebane', 'Grim Blackiron', 'Reinhardt Fellbeard', 'Grom Chainbeard', 'Karl Firestone', 'Wolfrim Shattershield', 'Ribert Goldmonger', 'Dak Rockmine', 'Olvik Thunderaxe', 'Brim Icefist', 'Korgrim Stoneshield', 'Roberta Lightborn', 'Berta Axefiend', 'Carla Hammerstrike', 'Katja Wraithheart', 'Ostara Marblebrew', 'Gertrude Killbrew', 'Ida Beermaker', 'Kirra Anvilbreaker', 'Jozelyn Strongshield', 'Gisli Onyxhammer'],
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
var classArray = [];
var classes = {};

const deities = [
    ["Saint Terragnis", "Lawful"],
    ["Gede", "Neutral"],
    ["Madeera the Covenant", "Lawful"],
    ["Ord", "Neutral"],
    ["Memnon", "Chaotic"],
    ["Ramlaat", "Chaotic"],
    ["Shune the Vile", "Chaotic"],
]

var spells = {};

var weapons = {};

const gear = ["Torch", "Dagger", "Pole", "Rations (3)", "Rope, 60'", "Oil, flask", "Crowbar", "Iron spikes (10)", "Flint and steel", "Grappling hook", "Shield", "Caltrops (one bag)"]

let character = null
let raceInfo = null
let classInfo = null

let dialogNum = 1

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}; // courtesy of detectmobilebrowsers.com

window.addEventListener('DOMContentLoaded', function() {
    var injectorsCollapsible = document.getElementById("injectors_collapsible");

    injectorsCollapsible.addEventListener("click", function() {
        injectorsCollapsible.classList.toggle("active");
        var injectors = injectorsCollapsible.nextElementSibling;
        if (injectors.style.display === "block") {
            injectors.style.display = "none";
        } else {
            injectors.style.display = "block";
        }
    })

    var printButton = document.getElementById("print_button");

    printButton.addEventListener("click", function() {
        makePDF()
    })
    
    var contentArea = document.getElementById("contentArea")

    genButton = document.getElementById("genButton")
    genButton.onclick = function() {
        printButton.style.display = "block";
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
            hpbonus: 0,
            ac: 0,
            acbonus: 0,
            gp: 0,
            talentsSkills: {},
            items: [],
            spellSlots: 0,
            spells: {},
            patron: ""
        }
        
        handleContentInjectors()

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

        let statArray = getStats()
        character.str = statArray[0]
        character.dex = statArray[1]
        character.con = statArray[2]
        character.int = statArray[3]
        character.wis = statArray[4]
        character.cha = statArray[5]

        let tempClassArray = []

        if (character.str >= Math.max(...[character.dex, character.int, character.wis, character.cha])) {
            if (classArray.includes("Fighter")) {
                tempClassArray.push("Fighter")
            }
            if (classArray.includes("Knight of St. Ydris")) {
                tempClassArray.push("Knight of St. Ydris")
            }
            if (classArray.includes("Warlock")) {
                tempClassArray.push("Warlock")
            }
            if (classArray.includes("Desert Rider")) {
                tempClassArray.push("Desert Rider")
            }
            if (classArray.includes("Pit Fighter")) {
                tempClassArray.push("Pit Fighter")
            }
            if (classArray.includes("Sea Wolf")) {
                tempClassArray.push("Sea Wolf")
            }
            if (classArray.includes("Basilisk Warrior")) {
                tempClassArray.push("Basilisk Warrior")
            }
            if (classArray.includes("Duelist")) {
                tempClassArray.push("Duelist")
            }
            if (classArray.includes("Paladin")) {
                tempClassArray.push("Paladin")
            }
        } else if (character.dex >= Math.max(...[character.str, character.int, character.wis, character.cha])) {
            if (classArray.includes("Thief")) {
                tempClassArray.push("Thief")
            }
            if (classArray.includes("Ras-Godai")) {
                tempClassArray.push("Ras-Godai")
            }
            if (classArray.includes("Ranger")) {
                tempClassArray.push("Ranger")
            }
        } else if (character.int >= Math.max(...[character.dex, character.str, character.wis, character.cha])) {
            if (classArray.includes("Wizard")) {
                tempClassArray.push("Wizard")
            }
        } else if (character.wis >= Math.max(...[character.dex, character.int, character.str, character.cha])) {
            if (classArray.includes("Priest")) {
                tempClassArray.push("Priest")
            }
            if (classArray.includes("Seer")) {
                tempClassArray.push("Seer")
            }
        } else if (character.cha >= Math.max(...[character.dex, character.int, character.wis, character.str])) {
            if (classArray.includes("Witch")) {
                tempClassArray.push("Witch")
            }
            if (classArray.includes("Bard")) {
                tempClassArray.push("Bard")
            }
        }

        if (tempClassArray.length > 0) {
            character.class = choice(tempClassArray)
        } else {
            character.class = choice(classArray)
        }

        console.log(tempClassArray)

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
            case "Knight of St. Ydris":
                classInfo = classes.knightofstydris
                break
            case "Warlock":
                classInfo = classes.warlock
                character.patron = choice(["Almazzat", "Kytheros", "Shune the Vile", "Mugdulblub", "Titania", "The Willowman"])
                break
            case "Witch":
                classInfo = classes.witch
                break
            case "Desert Rider":
                classInfo = classes.desertrider
                break
            case "Pit Fighter":
                classInfo = classes.pitfighter
                break
            case "Ras-Godai":
                classInfo = classes.rasgodai
                break
            case "Sea Wolf":
                classInfo = classes.seawolf
                break
            case "Seer":
                classInfo = classes.seer
                break
            case "Basilisk Warrior":
                classInfo = classes.basiliskwarrior
                break
            case "Ranger":
                classInfo = classes.ranger
                break
            case "Bard":
                classInfo = classes.bard
                break
            case "Duelist":
                classInfo = classes.duelist
                break
            case "Paladin":
                classInfo = classes.paladin
        }
        // console.log(classInfo)
        let deityInfo = choice(deities)
        character.deity = deityInfo[0]
        character.alignment = deityInfo[1]
        character.title = classInfo.titles[character.alignment]
        character.background = choice(backgrounds)
        character.initialHPRoll = getInitialHP(classInfo.hd, character.race)
        let tempHp = character.initialHPRoll + findModifier(character.con, character.conbonus) + character.hpbonus
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
            switch (misc) {
                case "Languages. You know two additional common languages and two rare languages.":
                    talent = {
                        type: "wizardLanguages",
                        description: "Languages. You know two additional common languages and two rare languages."
                    }
                    break
                case "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells.":
                    talent = {
                        type: "turnUndead",
                        description: "Turn Undead. You know the turn undead spell. It doesn't count toward your number of known spells."
                    }
                    break
                case "Languages. You know Celestial, Diabolic, or Primordial.":
                    talent = {
                        type: "priestLanguage",
                        description: "Languages. You know Celestial, Diabolic, or Primordial."
                    }
                    break
                case "Languages. You know Diabolic.":
                    talent = {
                        type: "knightLanguage",
                        description: "Languages. You know Diabolic."
                    }
                    break
                case "Languages. You know either Celestial, Diabolic, Draconic, Primordial, or Sylvan.":
                    talent = {
                        type: "warlockLanguage",
                        description: "Languages. You know either Celestial, Diabolic, Draconic, Primordial, or Sylvan."
                    }
                    break
                case "Patron. Choose a patron to serve. Your patron is the source of your supernatural gifts. Your patron can choose to grant or withhold its gifts at any time. You can gain new Patron Boons/ talents (or lose them) as a result.":
                    talent = {
                        type: "talentBoonChoice",
                        description: `Patron. Your patron is ${character.patron}. Your patron is the source of your supernatural gifts. Your patron can choose to grant or withhold its gifts at any time. You can gain new Patron Boons/ talents (or lose them) as a result.`
                    }
                    break
                case "Languages. You know Diabolic, Primordial, and Sylvan.":
                    talent = {
                        type: "witchLanguage",
                        description: "Languages. You know Diabolic, Primordial, and Sylvan."
                    }
                    break
                case "Black Lotus. You earned the right to eat a petal of the fabled black lotus flower, and you survived its sorcerous effects. Roll one talent on the Black Lotus Talents table.":
                    talent = {
                        type: "oneBlackLotus",
                        description: "Black Lotus. You earned the right to eat a petal of the fabled black lotus flower, and you survived its sorcerous effects. Roll one talent on the Black Lotus Talents table."
                    }
                    break
                case "Stone Skin. Add 2 + half your level (round down) to your AC if you are otherwise unarmored. You have advantage on checks to hide in natural environments.":
                    talent = {
                        type: "stoneSkin",
                        description: "Stone Skin. Add 2 + half your level (round down) to your AC if you are otherwise unarmored. You have advantage on checks to hide in natural environments."
                    }
                    break
                case "Languages. You know four additional common languages and one rare language.":
                    talent = {
                        type: "bardLanguages",
                        description: "Languages. You know four additional common languages and one rare language."
                    }
                    break
                case "Named Blade. At first level, you gain a sword of your choice. It is a +0 magic weapon. It becomes a +1 weapon at 3rd level, +2 at 5th level, and +3 at 9th level. If you lose this blade, you can find a new one by completing a holy quest of great challenge.":
                    talent = {
                        type: "namedBlade",
                        description: "Named Blade. At first level, you gain a sword of your choice. It is a +0 magic weapon. It becomes a +1 weapon at 3rd level, +2 at 5th level, and +3 at 9th level. If you lose this blade, you can find a new one by completing a holy quest of great challenge."
                    }
                    break
            }
            character.talentsSkills[j] = talent
            j++
        }

        if (character.class == "Warlock") {
            rollTalent(patron_boons[character.patron], "Boon")
        } else {
            rollTalent(classInfo.talents, "Talent")
        }

        for (var i = 0; i < classInfo.items.length; i++) {
            character.items.push(classInfo.items[i])
        }

        let noArmor = ["Wizard", "Basilisk Warrior"]

        if (!noArmor.includes(character.class)) {
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

        let customizationRequired = ["human", "statIncrease", "twelve", "wizardLanguages", "wizardIncrease", "priestLanguage", "witchIncrease", "twelveBoon", "warlockLanguage", "talentBoonChoice", "almazzatIncrease", "twoBoons", "desertRiderIncrease", "pitFighterIncrease", "seaWolfIncrease", "bardLanguages", "chooseTalent"]

        for (const key in character.talentsSkills) {
            if (customizationRequired.includes(character.talentsSkills[key].type)) {
                contentArea.appendChild(document.createElement("br"))
                contentArea.appendChild(document.createElement("br"))
                contentArea.appendChild(document.createElement("hr"))
                addParagraph(contentArea, "Customization", "heading-large");
                var customizationDiv = document.createElement("div")
                customizationDiv.id = "customization"
                contentArea.appendChild(customizationDiv)
                refreshLanguageBox()

                break
            }
        }

        for (const key in character.talentsSkills) {
            if (character.talentsSkills[key].type != "text") {
                giantPulsatingTalentsHandler(character.talentsSkills[key].type, 'targets' in character.talentsSkills[key] ? character.talentsSkills[key].targets : null)
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
