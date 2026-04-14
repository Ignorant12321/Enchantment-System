// 开发者模式
    const developer_code_input_element = document.getElementById("developer_code_input");
    const developer_code_button_element = document.getElementById("developer_code_button");
    const developer_mode_element = document.getElementById("developer_mode");
    const developer_password = "Ignorant";
    let developer_mode = false;
    function developer_code_button_click() {
        if (developer_mode) {
            refreshEntry_dev();
        } else {
            developer_code_button_element.textContent = "开启";
            developer_mode_element.style.display = "none";
        }
    }
    developer_code_input_element.addEventListener("input", function (event) {
        if (developer_code_input_element.value == developer_password) {
            developer_mode = true;
            developer_code_button_element.textContent = "定制";
            developer_mode_element.style.display = "block";
            developer_code_button_element.classList.add("glowing");
        } else {
            developer_mode = false;
            developer_code_button_element.textContent = "开启";
            developer_mode_element.style.display = "none";
            developer_code_button_element.classList.remove("glowing");
        }
    });
    // 选择框容器
    const span_scheme_element = document.getElementById("span_scheme");
    const span_weapon_element = document.getElementById("span_weapon");
    const span_entry_element = document.getElementById("span_entry");
    const span_attribute_element = document.getElementById("span_attribute");
    const span_rank_element = document.getElementById("span_rank");
    // 选择框
    const selector_scheme = document.createElement("select");
    const selector_weapon = document.createElement("select");
    const selector_entry = document.createElement("select");
    const selector_attribute = document.createElement("select");
    const selector_rank = document.createElement("select");
    // 选择框 id
    selector_scheme.id = "selector_scheme";
    selector_weapon.id = "selector_weapon";
    selector_entry.id = "selector_entry";
    selector_attribute.id = "selector_attribute";
    selector_rank.id = "selector_rank";
    // 选择框 className
    selector_scheme.className = "selector_circle";
    selector_weapon.className = "selector_circle";
    selector_entry.className = "selector_circle";
    selector_attribute.className = "selector_rectangle";
    selector_rank.className = "selector_circle";
    // 选择框额外设置
    selector_attribute.style.width = "40%";
    // 选择框的默认元素
    selector_scheme.appendChild(Object.assign(document.createElement("option"), { value: 0, textContent: "全" }));
    selector_weapon.appendChild(Object.assign(document.createElement("option"), { value: 0, textContent: "全" }));
    selector_entry.appendChild(Object.assign(document.createElement("option"), { value: 0, textContent: "全" }));
    selector_attribute.appendChild(Object.assign(document.createElement("option"), { value: 0, textContent: "随机🎲" }));
    selector_rank.appendChild(Object.assign(document.createElement("option"), { value: 0, textContent: "🎲" }));
    // 选择框的选项
    schemeArray.forEach((item) => {
        let option = document.createElement("option");
        option.value = item;
        option.text = item;
        selector_scheme.appendChild(option);
    })
    weaponArray.forEach((item) => {
        let option = document.createElement("option");
        option.value = item;
        option.text = item;
        selector_weapon.appendChild(option);
    })
    entryArray.forEach((item) => {
        let option = document.createElement("option");
        option.value = item;
        option.text = item;
        selector_entry.appendChild(option);
    })
    entriesContent.forEach((item) => {
        let option = document.createElement("option");
        option.value = item.index;
        option.text += item.type == 'percent' ? `${item.name}%` : item.name;
        selector_attribute.appendChild(option);
    })
    attributeRankContent.forEach((item) => {
        let option = document.createElement("option");
        option.value = item.index;
        option.text = item.icon;
        selector_rank.appendChild(option);
    })
    // 加入选择框
    span_scheme_element.appendChild(selector_scheme);
    span_weapon_element.appendChild(selector_weapon);
    span_entry_element.appendChild(selector_entry);
    span_attribute_element.appendChild(selector_attribute);
    span_rank_element.appendChild(selector_rank);
    // 开发者模式：刷新词条
    function refreshEntry_dev() {
        // 附魔方案
        let selector_scheme_array = [];
        if (selector_scheme.value == 0) {
            selector_scheme_array = schemeArray;
        }
        else { selector_scheme_array.push(selector_scheme.value) }
        selector_scheme_array.forEach(scheme_selected => {
            // 武器
            let selector_weapon_array = [];
            if (selector_weapon.value == 0) {
                selector_weapon_array = weaponArray;
            }
            else { selector_weapon_array.push(selector_weapon.value) }
            selector_weapon_array.forEach(weapon_selected => {
                // 词条
                let selector_entry_array = [];
                if (selector_entry.value == 0) {
                    selector_entry_array = entryArray;
                }
                else { selector_entry_array.push(selector_entry.value) }
                selector_entry_array.forEach(entry_selected => {
                    // 属性
                    let attribute_selected = 0;
                    attribute_selected = selector_attribute.value;
                    if (attribute_selected == 0) {
                        filter_array(entry_selected, weapon_selected, scheme_selected);
                        attribute_selected = getRandom_Index(entriesContent, entry_exclude);
                    }
                    // 评级
                    let rank_selected = 0;
                    rank_selected = selector_rank.value;
                    if (rank_selected == 0) {
                        rank_selected = getRandom_Index(attributeRankContent);
                    }
                    // 附魔
                    let schemeCurrent = enchantmentsData.find(item1 => item1.enchantmentIndex == scheme_selected);
                    let weaponCurrent = schemeCurrent.weapon[weapon_selected].content;
                    if (weaponCurrent[entry_selected].lock == 0) {
                        let randomEntry = generate_RandomEntry(entry_index = attribute_selected, attribute_index = rank_selected);
                        let entryCurrent = weaponCurrent[entry_selected];
                        entryCurrent.attributeName = randomEntry.attributeName;
                        entryCurrent.attributeIndex = randomEntry.attributeIndex;
                        entryCurrent.entryValue = randomEntry.entryValue;
                        entryCurrent.entryPercent = randomEntry.entryPercent;
                        entryCurrent.entryColor = randomEntry.entryColor;
                        entryCurrent.entryPower = randomEntry.entryPower;
                    }
                })
            })
            enchantmentsData.find(item1 => item1.enchantmentIndex == scheme_selected).totalPower = calSchemePower(scheme_selected);
        });
        update_allStatus();
        update_totalPower();
        update_attributeList();
    }
