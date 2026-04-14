// 基本数据
    let enchantmentsData = [];  // 附魔总数据
    let schemeArray = [1, 2, 3, 4, 5];  // 方案列表
    let weaponArray = ['A', 'B', 'C', 'D', 'E', 'F'];   // 武器列表
    let entryArray = [1, 2, 3, 4, 5];   // 词条列表

    let attributeRankContent = [
        { index: 1, rarity: 2, base: 85, range: 15, color: '#f5222d', icon: '🟥' },//红色
        { index: 2, rarity: 6, base: 50, range: 35, color: '#fa8c16', icon: '🟧' },//橙色
        { index: 3, rarity: 12, base: 20, range: 30, color: '#9254de', icon: '🟪' },//紫色
        { index: 4, rarity: 55, base: 10, range: 10, color: '#1890ff', icon: '🟦' },//蓝色
        { index: 5, rarity: 100, base: 5, range: 5, color: '#52c41a', icon: '🟩' },//绿色
        { index: 6, rarity: 325, base: 0, range: 5, color: '#262626', icon: '⬜' },//黑色
    ];
    let weaponContent = [
        { index: "A", name: "雷霆魔刃", attributeIndex: 5, addValue: 0.05, },
        { index: "B", name: "圣灵法典", attributeIndex: 14, addValue: 0.05, },
        { index: "C", name: "生命沙漏", attributeIndex: 1, addValue: 0.5, },
        { index: "D", name: "炽焰神铠", attributeIndex: 6, addValue: 0.1, },
        { index: "E", name: "精灵法衣", attributeIndex: 8, addValue: 0.1, },
        { index: "F", name: "生命之心", attributeIndex: 1, addValue: 0.5, },
    ];
    let entriesContent = [
        { index: 1, name: "生命上限", rarity: 8, power: 0.5, max: 8000, type: "decimal", },
        { index: 2, name: "生命恢复", rarity: 8, power: 8.5, max: 400, type: "decimal", },
        { index: 3, name: "魔法上限", rarity: 8, power: 1.2, max: 2500, type: "decimal", },
        { index: 4, name: "魔法恢复", rarity: 8, power: 12.5, max: 200, type: "decimal", },
        { index: 5, name: "攻击", rarity: 8, power: 6, max: 750, type: "decimal", },
        { index: 6, name: "物防", rarity: 8, power: 12, max: 250, type: "decimal", },
        { index: 7, name: "法强", rarity: 8, power: 8, max: 500, type: "decimal", },
        { index: 8, name: "法防", rarity: 8, power: 10, max: 300, type: "decimal", },
        { index: 9, name: "物穿", rarity: 8, power: 20, max: 200, type: "decimal", },
        { index: 10, name: "法穿", rarity: 8, power: 40, max: 100, type: "decimal", },
        { index: 11, name: "复活减少【秒】", rarity: 1, power: 3000, max: 1.5, type: "decimal", },
        { index: 12, name: "生命上限", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 13, name: "攻击", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 14, name: "法强", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 15, name: "物防", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 16, name: "法防", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 17, name: "物穿", rarity: 1, power: 1800, max: 3, type: "percent", },
        { index: 18, name: "法穿", rarity: 1, power: 1800, max: 3, type: "percent", },
        { index: 19, name: "暴击", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 20, name: "暴击伤害", rarity: 1, power: 800, max: 5, type: "percent", },
        { index: 21, name: "攻速", rarity: 1, power: 1200, max: 5, type: "percent", },
        { index: 22, name: "移速", rarity: 1, power: 600, max: 5, type: "percent", },
        { index: 23, name: "物理吸血", rarity: 1, power: 600, max: 5, type: "percent", },
        { index: 24, name: "法术吸血", rarity: 1, power: 1000, max: 3, type: "percent", },
        { index: 25, name: "暴击抵抗", rarity: 1, power: 400, max: 5, type: "percent", },
        { index: 26, name: "暴伤抵抗", rarity: 1, power: 400, max: 5, type: "percent", },
        { index: 27, name: "治疗加成", rarity: 1, power: 400, max: 5, type: "percent", },
    ];

    function init_enchantments() {
        // 遍历每个附魔方案
        schemeArray.forEach(schemeIndex => {
            let scheme = {
                enchantmentIndex: schemeIndex,
                totalPower: 0,
                weapon: {}
            };
            // 遍历每个武器
            weaponArray.forEach(weaponType => {
                let weapon = {};
                // 为每个武器的每个附魔槽赋予初始值
                weapon["content"] = {};
                entryArray.forEach(entryIndex => {
                    weapon.content[entryIndex] = {
                        attributeName: "？？？？？",  // 词条名称
                        attributeIndex: -1,           // 词条索引
                        entryValue: -1,               // 属性属性初始值
                        entryPower: 0,               // 附魔战力初始值
                        entryPercent: 0,             // 属性百分比
                        entryColor: '#262626',       // 词条默认颜色
                        lock: 0                      // 初始词条不锁定
                    };
                });
                weapon["extra"] = {};
                weapon.extra["index"] = `${weaponContent.find(item1 => item1.index == weaponType).attributeIndex}`;
                weapon.extra["value"] = 0;
                weapon.extra["power"] = 0;
                scheme.weapon[weaponType] = weapon;
            });
            enchantmentsData.push(scheme);
        });
    }

    // 基本元素
    const money_element = document.getElementById('money');
    const whiteStone_element = document.getElementById('whiteStone');
    const whiteStoneCost_element = document.getElementById('whiteStoneCost');
    const colorGem_element = document.getElementById('colorGem');
    const colorGemCost_element = document.getElementById('colorGemCost');
    const totalPower_element = document.getElementById('totalPower');
    const attribute_list_element = document.getElementById('attribute-list');
    const weapon_list_element = document.getElementById('weapon_list');
    const refreshButton_element = document.getElementById('refreshButton');
    const enchantment_info_element = document.getElementById('enchantment-info');
    const weaponValue_element = document.getElementById('weaponValue');

    // 首屏加载弹窗配置
    // enabled: false 可完全关闭加载动画
    // minDurationMs: 动画最短显示时长（毫秒）
    const loadDiagConfig = {
        enabled: true,
        minDurationMs: 1000
    };
    const loadDiagStartTime = Date.now();
    let loadDiagHidden = false;

    if (loadDiagConfig.enabled) {
        show_loadDiag();
    } else {
        hide_loadDiag();
        loadDiagHidden = true;
    }

    function hide_loadDiag_withMinDuration() {
        if (loadDiagHidden) return;
        if (!loadDiagConfig.enabled) {
            hide_loadDiag();
            loadDiagHidden = true;
            return;
        }

        const elapsed = Date.now() - loadDiagStartTime;
        const delay = Math.max(0, loadDiagConfig.minDurationMs - elapsed);
        setTimeout(() => {
            if (!loadDiagHidden) {
                hide_loadDiag();
                loadDiagHidden = true;
            }
        }, delay);
    }

    // 页面加载完成后执行
    document.addEventListener('DOMContentLoaded', () => {
        init_enchantments();
        init_eo();
        init_weapon_list();
        update_weaponValue();
        init_attributeList();
        init_diag_setting();
        eo_updateUI(enchantmentScheme_Current);
        disContextMenu();
        update_resource();
        updateShop_whiteStone();
    })

    // 所有资源加载完成后，按最短时长规则关闭加载动画并调整布局
    window.addEventListener('load', function () {
        adjustScale();
        hide_loadDiag_withMinDuration();
    });

    // 重新调整缩放比例
    window.addEventListener('resize', function () {
        adjustScale();
    });

    // 禁用右键菜单
    function disContextMenu() {
        const weaponItems = document.querySelectorAll('.weapon-item');
        weaponItems.forEach(item => {
            item.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                switchWeapon(event);
            });
        });
    }

    // 显示加载弹窗
    function show_loadDiag() {
        document.getElementById('loadBackground').classList.remove('hidden');
        document.getElementById('loadBackground').style.display = 'block';
        document.getElementById('loadDiag').style.display = 'block';
        document.getElementById('loadDiag_info').style.display = 'block';
    }
    // 隐藏加载弹窗
    function hide_loadDiag() {
        document.getElementById('loadBackground').classList.add('hidden');
        document.getElementById('loadBackground').style.display = 'none';
        document.getElementById('loadDiag').style.display = 'none';
        document.getElementById('loadDiag_info').style.display = 'none';
    }

    let weapon_list_element_scale = 1;
    let weapon_list_element_margin = 10;
    function adjustScale() {

        let Target_bottom_element = document.getElementById("totalBattlePower");
        let Target_right_element = document.getElementById("leftBar");
        let Actual_top_element = document.getElementById('weapon-item-A');
        let Actual_left_element = document.getElementById('weapon-item-F');

        let Target_bottom = Target_bottom_element.getBoundingClientRect().bottom.toFixed(0);
        let Target_right = Target_right_element.getBoundingClientRect().right.toFixed(0);
        let Actual_top = Actual_top_element.getBoundingClientRect().top.toFixed(0);
        let Actual_left = Actual_left_element.getBoundingClientRect().left.toFixed(0);

        function refreshValue() {
            Target_bottom = Target_bottom_element.getBoundingClientRect().bottom;
            Target_right = Target_right_element.getBoundingClientRect().right;
            Actual_top = Actual_top_element.getBoundingClientRect().top;
            Actual_left = Actual_left_element.getBoundingClientRect().left;
        }

        function scaleAdjustment() {
            while (Target_bottom > Actual_top - weapon_list_element_margin || Target_right > Actual_left - weapon_list_element_margin) {
                weapon_list_element_scale -= 0.01;
                weapon_list_element.style.transform = `scale(${weapon_list_element_scale})`;
                refreshValue();
            }

            while (Target_bottom < Actual_top - weapon_list_element_margin && Target_right < Actual_left - weapon_list_element_margin) {
                weapon_list_element_scale += 0.01;
                weapon_list_element.style.transform = `scale(${weapon_list_element_scale})`;
                refreshValue();
            }
        }
        scaleAdjustment();
    }

    // 切换附魔方案
    let enchantmentScheme_Current = 1;
    function switchEnchant(schemeNumber) {
        // 选择当前附魔方案
        enchantmentScheme_Current = schemeNumber;
        // 默认选择第一件武器
        currentWeapon = weaponArray[0];
        // 取消上回的选中效果
        clear_weaponUI_scale();
        clear_weaponUI_aura();
        // 更新总战力
        update_totalPower(animation = false);
        // 更新附魔属性列表
        update_weaponValue();
        update_attributeList();
        disable_refreshButton();
        update_consumeResources();
        // 更新附魔状态
        update_allStatus();
    }

    // 切换当前选择的武器
    let currentWeapon = 'A';
    function switchWeapon(event) {
        let parentElement = event.currentTarget;
        currentWeapon = parentElement.id.split('-')[2];
        // 更新词条列表
        update_attributeList();
        update_weaponValue();
        disable_refreshButton();
        update_consumeResources();
        // 选择当前武器的UI
        if (event.button == 2) {
            // 移动放大效果
            let weaponItem = document.getElementById('weapon-item-' + currentWeapon);
            if (weaponItem.classList.contains('active')) {
                weaponItem.classList.remove('active');
            } else {
                clear_weaponUI_scale();
                weaponItem.classList.add('active');
            }
        }
        // 光环效果
        let divItem = document.getElementById(`img${currentWeapon}_div`);
        if (divItem.classList.contains('Img_active')) {
            divItem.classList.remove('Img_active');
        } else {
            clear_weaponUI_aura();
            divItem.classList.add('Img_active');
        }
    }
    // 刷新当前武器的附加值
    function update_weaponValue() {
        let shouldSetNeverFlag = Object.values(enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content).every(item1 => item1.attributeIndex == -1);
        if (shouldSetNeverFlag) {
            // 武器未刷新过
            weaponValue_element.textContent = '【武器特性：？？？】';
        } else {
            let weapon_item = weaponContent.find(item1 => item1.index == currentWeapon);
            let content_name = entriesContent.find(item1 => item1.index == weapon_item.attributeIndex).name;
            let currentWeapon_value = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].extra.value;
            let content = `【武器特性：+ ${currentWeapon_value} ${content_name}】`;
            // enchantment_info_element.textContent = weapon.name;
            weaponValue_element.textContent = content;
        }
    }
    function clear_weaponUI_scale() {
        let items = document.querySelectorAll('.weapon-item');
        items.forEach(item => {
            item.classList.remove('active');
        });
    }
    function clear_weaponUI_aura() {
        let items = document.querySelectorAll('.img_div');
        items.forEach(item => {
            item.classList.remove('Img_active');
        });
    }

    function init_weapon_list() {
        weapon_list_element.innerHTML = '';
        weaponArray.forEach(weapon => {
            // 创建 weapon-item div
            const weaponItem = document.createElement('div');
            weaponItem.id = `weapon-item-${weapon}`;
            weaponItem.classList.add('weapon-item');
            weaponItem.setAttribute('onclick', 'switchWeapon(event)');

            // 创建 img_div 包裹 div
            const imgDiv = document.createElement('div');
            imgDiv.id = `img${weapon}_div`;
            imgDiv.classList.add('img_div');

            // 创建 img 标签
            const img = document.createElement('img');
            img.id = `weapon${weapon}_PNG`;
            img.src = weapon_PNG[img.id];
            img.classList.add('weaponPNG');
            img.alt = `武器${weapon}`;

            // 将 img 添加到 img_div 中
            imgDiv.appendChild(img);

            // 创建 stats div
            const statsDiv = document.createElement('div');
            statsDiv.id = `weapon${weapon}-status`;
            statsDiv.classList.add('stats');

            // 创建 span 标签
            const span = document.createElement('span');
            span.id = `weapon${weapon}-power`;

            // 将 span 添加到 stats div 中
            statsDiv.appendChild(span);

            // 将 imgDiv 和 statsDiv 添加到 weaponItem 中
            weaponItem.appendChild(imgDiv);
            weaponItem.appendChild(statsDiv);

            // 将 weaponItem 添加到 weaponList 中
            weapon_list_element.appendChild(weaponItem);
        });
    }

    // 初始化附魔方案按钮
    const buttons_enchantmentScheme = document.querySelectorAll('.left-bar .eo-button');

    function eo_updateUI(currentId) {
        // 遍历所有按钮并设置它们的变换效果
        buttons_enchantmentScheme.forEach((btn, index) => {
            const targetId = parseInt(btn.id.split('_')[1]);
            const distance = Math.abs(targetId - currentId);  // 计算当前按钮与其他按钮的距离
            let scale = 1;  // 默认缩放比例
            let opacity = 1;    // 默认透明度
            let backgroundColor = '';  // 默认背景颜色
            let fontSize = 'medium';  // 默认字体大小

            switch (distance) {
                case 0:
                    scale = 1.16;
                    backgroundColor = "#0050b3";
                    fontSize = 'larger';
                    break;
                case 1:
                    scale = 1.08;
                    backgroundColor = "#096dd9";
                    fontSize = 'large';
                    break;
                case 2:
                    scale = 1.04;
                    backgroundColor = "#1890ff";
                    fontSize = 'medium';
                    break;
                case 3:
                    scale = 1.00;
                    backgroundColor = "#40a9ff";
                    fontSize = 'medium';
                    break;
                case 4:
                    scale = 0.98;
                    backgroundColor = "#69c0ff";
                    opacity = 1.00;
                    fontSize = 'medium';
                    break;
                default:
                    break;
            }

            // 设置按钮的缩放、透明度和背景颜色
            btn.style.fontSize = fontSize;
            btn.style.transform = `scale(${scale})`;
            btn.style.opacity = opacity;
            btn.style.backgroundColor = backgroundColor;
        });
    }
    // 判断当前设备是否为移动设备
    function isMobileDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        return /iphone|ipod|android|windows phone|blackberry|bb10|iemobile|mobile/i.test(userAgent);
    }

    function init_eo() {
        let buttonTxt = ""
        if (!isMobileDevice()) {
            buttonTxt = "方案 ";
            document.getElementById('enchantment-options').textContent = "附魔方案";
        }
        buttons_enchantmentScheme.forEach(button => {
            button.textContent = `${buttonTxt}${button.id.split('_')[1]} `;
            button.addEventListener('mouseover', function () {
                let currentId = parseInt(button.id.split('_')[1]);
                eo_updateUI(currentId);
            });
            button.addEventListener('mouseout', function () {
                eo_updateUI(enchantmentScheme_Current);
            });
        });
    }

    function init_attributeList() {
        attribute_list_element.innerHTML = '';
        let weaponCurrentAttribute = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content;
        entryArray.forEach(entry_index => {
            // 初始化附魔词条颜色
            weaponArray.forEach(weapon => {
                let spanWeapon = document.getElementById(`weapon${weapon}-power`);

                // 检查 spanWeapon 是否存在
                if (spanWeapon) {
                    let weaponEntryColorStatus = document.createElement('span');
                    weaponEntryColorStatus.id = `weapon${weapon}-power-${entry_index}`;
                    weaponEntryColorStatus.className = 'entry-color-status';
                    weaponEntryColorStatus.innerText = "⬜";
                    spanWeapon.appendChild(weaponEntryColorStatus);
                }
            });

            // 初始化附魔词条
            let entryDiv = document.createElement('div');

            // 获取属性数据
            let entry = weaponCurrentAttribute[entry_index];
            let attributeName = entry.attributeName || "？？？？？"; // 如果没有属性名，则默认显示 "？？？"
            let attributeValue = entry.entryValue || -1; // 如果没有属性值，则默认值为 -1
            let attributeColor = entry.entryColor || '#262626'; // 如果没有设置颜色，则默认设置为 'black'
            let lockedStatus = entry.lock == 1 ? true : false; // 判断属性是否锁定

            // 设置 entryDiv 的内容
            entryDiv.id = `entry_${entry_index}`;
            entryDiv.className = 'attribute';
            entryDiv.innerHTML = `
            <span id="lockStatus_${entry_index}" class="lock-status" style="background-color:${lockedStatus ? 'red' : 'green'}" onclick="toggleLock(this)">${lockedStatus ? '🔒' : '🔓'}</span>
            <span id="noneSpan">&nbsp;&nbsp;&nbsp;</span>
            <span id="attribute_${entry_index}" style="color:${attributeColor}" class="attributes">？？？？？</span>
        `;
            attribute_list_element.appendChild(entryDiv);
        });
    }

    // 更新页面内容
    function update_attributeList() {
        let weaponCurrentAttribute = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content;
        entryArray.forEach(entry_index => {
            let statusSpan = document.getElementById(`lockStatus_${entry_index}`);
            let attributeSpan = document.getElementById(`attribute_${entry_index}`);
            // 获取属性数据
            let entry = weaponCurrentAttribute[entry_index];
            let attributeName = entry.attributeName || "？？？？？"; // 如果没有属性名，则默认显示 "？？？"
            let attributeValue = entry.entryValue || -1; // 如果没有属性值，则默认值为 -1
            let attributePercent = entry.entryPercent || 0; // 如果没有属性值，则默认值为 0
            let attributeColor = entry.entryColor || '#262626'; // 如果没有设置颜色，则默认设置为 'black'
            let lockedStatus = entry.lock == 1 ? true : false; // 判断属性是否锁定

            // 设置 entry 的内容
            statusSpan.textContent = lockedStatus ? '🔒' : '🔓';
            statusSpan.style.backgroundColor = lockedStatus ? 'red' : 'green';
            attributeSpan.style = `color:${attributeColor}`;
            if (attributeValue == -1) {
                attributeSpan.textContent = "？？？？？";
            } else {
                attributeSpan.textContent = `${attributeName}: ${attributeValue}【${attributePercent}%】`;
            }
        });
    }

    // 附魔战力
    let totalPower_last = 0;
    function update_totalPower(animation = true) {
        // 更新数值
        let totalPower_current = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).totalPower;
        totalPower_element.textContent = totalPower_current;
        if (animation) {
            // 创建浮动的数字
            let diff = (totalPower_current - totalPower_last).toFixed(2);
            let isIncrease = diff > 0;
            let isDecrease = diff < 0;
            let diffText = document.createElement('span');
            diffText.textContent = `${isIncrease ? '+' : ''}${diff}`;
            diffText.classList.add('change-text');

            // 根据增减变化，设置不同的样式
            let positionOff = totalPower_element.offsetHeight;
            if (isIncrease) {
                diffText.classList.add('add');
                diffText.style.top = `${totalPower_element.offsetTop - positionOff}px`;
            } else if (isDecrease) {
                diffText.classList.add('subtract');
                diffText.style.top = `${totalPower_element.offsetTop + positionOff}px`;
            }
            diffText.style.left = `${(2 * totalPower_element.offsetLeft + totalPower_element.offsetWidth - totalPower_element.offsetWidth) / 2}px`;

            // 将浮动的数字添加到页面
            totalPower_element.appendChild(diffText);

            // 删除动画结束后的数字
            setTimeout(() => {
                diffText.remove();
            }, 1000);
        }
    }
    // 更新状态
    function update_status(selectedWeapon = currentWeapon, animation = true) {
        let weaponStatus = document.getElementById(`weapon${selectedWeapon}-status`);
        // 添加动画效果
        if (animation) {
            weaponStatus.classList.add('expand');
            weaponStatus.classList.add('blink');
            weaponStatus.classList.add('dark');
        }
        let weaponCurrentAttribute = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[selectedWeapon].content;
        entryArray.forEach(entry_index => {
            let weaponEntryColorStatus = document.getElementById(`weapon${selectedWeapon}-power-${entry_index}`);
            // 获取属性数据
            let entry = weaponCurrentAttribute[entry_index];
            let attributeColor = entry.entryColor || '#262626'; // 如果没有设置颜色，则默认设置为 'black'
            let attributeStatueIcon = attributeRankContent.find(item1 => item1.color == attributeColor).icon;
            // 设置 entry 的内容
            weaponEntryColorStatus.innerHTML = attributeStatueIcon;
        });
        // 在动画结束后恢复正常状态
        setTimeout(function () {
            weaponStatus.classList.remove('expand');
        }, 100);
        setTimeout(function () {
            weaponStatus.classList.remove('blink');
            weaponStatus.classList.remove('dark');
        }, 300);
    }
    // 更新所有状态信息
    function update_allStatus() {
        let weapons = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon;
        for (let weaponKey in weapons) {
            update_status(selectedWeapon = weaponKey, animation = false);
        }
    }

    // 更新UI
    function updateUI() {
        update_whiteStone();
        update_colorGem();
        update_weaponValue();
        update_attributeList();
        update_status();
        update_totalPower();
    }
    // 刷新附魔属性
    function refreshEnchant_unchecked() {
        // 判断是否有足够的资源
        update_consumeResources();
        if (whiteStone >= whiteStoneCost && colorGem >= colorGemCost) {
            checkRarity();
        } else {
            if (whiteStone < whiteStoneCost && colorGem < colorGemCost)
                showCustomDialog_NotEnough("资源不足，无法继续锁定和刷新附魔！");
            else if (whiteStone < whiteStoneCost)
                showCustomDialog_NotEnough("白石不足，无法继续刷新附魔！");
            else if (colorGem < colorGemCost)
                showCustomDialog_NotEnough("彩玉不足，无法继续锁定附魔！");
        }
    }
    const refreshCost_element = document.getElementById('refreshCost');
    // 禁用附魔按钮
    function disable_refreshButton() {
        let lockCount = get_lockCounter();
        let lockTotal = entryArray.length;
        if (lockCount == lockTotal) {
            refreshButton_element.disabled = true;
            refreshCost_element.classList.add('disabled');
        }
        else {
            refreshButton_element.disabled = false;
            refreshCost_element.classList.remove('disabled');
        }
    }

    // 更新资源
    function update_resource() {
        update_money();
        update_whiteStone();
        update_colorGem();
    }
    // money
    let money = 0;
    function update_money() {
        money_element.textContent = money;
    }
    // 白石
    let whiteStone = 3000;
    function update_whiteStone() {
        whiteStone_element.textContent = whiteStone;
    }
    // 彩玉
    let colorGem = 30;
    function update_colorGem() {
        colorGem_element.textContent = colorGem;
    }
    // 增加资源数量
    function increaseResource(Type, amount) {
        if (Type == 'money') {
            money += amount;
            update_money();
        } else if (Type == 'whiteStone') {
            whiteStone += amount;
            update_whiteStone();
        } else if (Type == 'colorGem') {
            colorGem += amount;
            update_colorGem();
        }
    }
    // 消耗资源
    let whiteStoneCost = 100;
    let colorGemCost = 0;
    function update_consumeResources() {
        whiteStoneCost = get_whiteStoneCost();
        colorGemCost = get_colorGemCost();
        whiteStoneCost_element.textContent = whiteStoneCost;
        colorGemCost_element.textContent = colorGemCost;
    }
    function get_whiteStoneCost() {
        return 100;
    }
    function get_lockCounter() {
        let current_EntryArray = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content;
        return Object.values(current_EntryArray).reduce((sum, entry) => sum + entry.lock, 0);
    }
    function get_colorGemCost() {
        return get_lockCounter() * 1;
    }

    let rarity_alert = 2;
    // 检查是否含有珍贵属性并继续执行
    function checkRarity() {
        let weaponCurrentAttribute = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content;
        let rarityCount = 0;
        entryArray.forEach(entry_index => {
            if (weaponCurrentAttribute[entry_index].lock == 0) {
                let rarityRank = attributeRankContent.find(item1 => item1.color == weaponCurrentAttribute[entry_index].entryColor).index;
                if (rarityRank <= rarity_alert) {
                    rarityCount++;
                }
            }
        }
        );
        // 检查是否有珍贵属性未锁定
        if (rarityCount >= 1) {
            showCustomDialog_unlock(function (userConfirmed) {
                if (userConfirmed) { refreshEnchant_cheked(); }
            });
        }
        else {
            refreshEnchant_cheked();
        }
    }
    function refreshEnchant_cheked() {
        increaseResource('whiteStone', -whiteStoneCost);
        increaseResource('colorGem', -colorGemCost);
        updateWeapon();
        generate_Enchantments();
        updateUI();
        let divItem = document.getElementById(`img${currentWeapon}_div`);
        if (!divItem.classList.contains('Img_active')) {
            divItem.classList.add('Img_active');
        }
    }
    // 概率升级武器
    let update_probability = 0.4;
    let update_enable = true;
    function updateWeapon() {
        if (!update_enable) {
            return;
        }
        // 找到当前武器
        let currentWeapon_info = weaponContent.find(item1 => item1.index == currentWeapon);
        let power = entriesContent.find(item1 => item1.index == currentWeapon_info.attributeIndex).power;
        let currentWeapon_extra = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].extra;
        // 如果随机数小于升级概率，则进行升级
        let randomChance = Math.random();
        if (randomChance < update_probability) {
            currentWeapon_extra.value += currentWeapon_info.addValue;
            currentWeapon_extra.value = parseFloat((currentWeapon_extra.value).toFixed(2));
            currentWeapon_extra.power = currentWeapon_extra.value * power;
        }
    }
    // 随机生成多条附魔词条
    function generate_Enchantments() {
        let weaponCurrentAttribute = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content;
        entryArray.forEach(entry_index => {
            if (weaponCurrentAttribute[entry_index].lock == 0) {
                filter_array(entry_index);
                let randomEntry = generate_RandomEntry();
                let entryCurrent = weaponCurrentAttribute[entry_index];
                entryCurrent.attributeName = randomEntry.attributeName;
                entryCurrent.attributeIndex = randomEntry.attributeIndex;
                entryCurrent.entryValue = randomEntry.entryValue;
                entryCurrent.entryPercent = randomEntry.entryPercent;
                entryCurrent.entryColor = randomEntry.entryColor;
                entryCurrent.entryPower = randomEntry.entryPower;
            }
        });
        totalPower_last = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).totalPower;
        enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).totalPower = calSchemePower();
    }

    // 随机生成一条附魔词条
    function generate_RandomEntry(entry_index = null, attribute_index = null) {
        // 随机生成词条属性
        if (entry_index == null) {
            entry_index = getRandom_Index(entriesContent, entry_exclude);
        }
        // 随机生成词条评级
        if (attribute_index == null) {
            attribute_index = getRandom_Index(attributeRankContent);
        }
        // 词条内容
        let entry_content = entriesContent.find(item => item.index == entry_index);
        let attribute_content = attributeRankContent.find(item => item.index == attribute_index);
        // 词条数值
        let base_Value = attribute_content.base / 100;
        let range_Value = Math.random() * attribute_content.range / 100;
        let attribute_Value = entry_content.max * (base_Value + range_Value);
        let attribute_Percent = attribute_Value / entry_content.max * 100;
        let attribute_Power = entry_content.power * attribute_Value;
        let attribute_Type = entry_content.type;
        return {
            attributeName: entry_content.name,
            attributeIndex: entry_index,
            entryValue: (attribute_Type == "decimal" ? attribute_Value.toFixed(2) : attribute_Type == "percent" ? attribute_Value.toFixed(2) + "%" : attribute_Value.toFixed(2)),
            entryPercent: attribute_Percent.toFixed(2),
            entryPower: attribute_Power.toFixed(2),
            entryColor: attribute_content.color,
        };
    }
    // 排除当前武器已有附魔词条
    let entry_exclude = [];
    function filter_array(length, weapon_selected = currentWeapon, scheme_selected = enchantmentScheme_Current) {
        entry_exclude = [];
        length = Number(length);
        for (let i = 0; i < entryArray.length; i++) {
            let index = entryArray[i];
            let schemeCurrent = enchantmentsData.find(item1 => item1.enchantmentIndex == scheme_selected);
            let weaponCurrent = schemeCurrent.weapon[weapon_selected].content;
            if (index < length) {
                let attributeIndex = weaponCurrent[index].attributeIndex;
                entry_exclude.push(attributeIndex);
            } else {
                break;
            }
        };

    }
    function getRandom_Index(list, array_exclude = []) {
        // 过滤掉被排除的条目
        let filteredList = list.filter(item => !array_exclude.includes(item.index));
        if (filteredList.length == 0) {
            return null;
        }
        // 计算累计权重
        let rarities = filteredList.map(item => item.rarity);
        let cumulativeRarity = [];
        let cumulativeSum = 0;
        for (let rarity of rarities) {
            cumulativeSum += rarity;
            cumulativeRarity.push(cumulativeSum);
        }
        let totalRarity = cumulativeRarity[cumulativeRarity.length - 1];
        let randomValue = Math.random() * totalRarity;
        // 根据累计权重选择一个条目
        for (let i = 0; i < cumulativeRarity.length; i++) {
            if (randomValue < cumulativeRarity[i]) {
                return filteredList[i].index;
            }
        }
    }

    function calSchemePower(scheme_selected = enchantmentScheme_Current) {
        let totalPower_scheme = 0;
        let scheme_content = enchantmentsData.find(item1 => item1.enchantmentIndex == scheme_selected);
        weaponArray.forEach(key => {
            let weapon = scheme_content.weapon[key];
            totalPower_scheme += calWeanonPower(weapon);
        });
        return totalPower_scheme.toFixed(2);
    }
    function calWeanonPower(weapon) {
        let totalPower_weapon = 0;
        let weapon_content = weapon.content;
        Object.values(weapon_content).forEach(item => {
            totalPower_weapon += Number(item.entryPower);
        });
        let weapon_extra = weapon.extra;
        totalPower_weapon += Number(weapon_extra.power);
        return totalPower_weapon;
    }
    // 统计词条信息
    function aggregate_Attributes() {
        let aggregatedAttributes_list = {};  // 用来存储统计结果的对象
        let data = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon;
        // 使用 Object.values() 将 data 转换为数组进行遍历
        Object.values(data).forEach(weaponKey => {
            // 武器的词条属性
            let weapon_content = weaponKey.content;
            entryArray.forEach(entry => {
                let attributeIndex = weapon_content[entry].attributeIndex;
                if (attributeIndex == -1) {
                    return;     // 排除 未刷新过的属性“？？？？？”
                }
                let entryValue = weapon_content[entry].entryValue;
                let entryType = entriesContent.find(item1 => item1.index == attributeIndex).type;

                // 如果属性名已经存在，则累加
                if (aggregatedAttributes_list[attributeIndex]) {
                    let previousValue = parseFloat(aggregatedAttributes_list[attributeIndex]);
                    let addValue = parseFloat(entryValue);
                    let currentValue = (previousValue + addValue).toFixed(2);
                    if (entryType == "decimal") {
                        ;
                    }
                    else if (entryType == "percent") {
                        currentValue += "%";
                    }
                    aggregatedAttributes_list[attributeIndex] = currentValue;
                }
                else {
                    // 否则初始化该属性
                    let currentValue = parseFloat(entryValue);
                    if (entryType == "decimal") {
                        ;
                    }
                    else if (entryType == "percent") {
                        currentValue += "%";
                    }
                    aggregatedAttributes_list[attributeIndex] = currentValue;
                }
            });
            // 武器的升级属性
            {
                let weapon_extra = weaponKey.extra;
                let weaponValue = weapon_extra.value;
                let attributeIndex = weapon_extra.index;

                // 如果属性名已经存在，则累加
                if (aggregatedAttributes_list[attributeIndex]) {
                    let previousValue = parseFloat(aggregatedAttributes_list[attributeIndex]);
                    let addValue = parseFloat(weaponValue);
                    let currentValue = (previousValue + addValue).toFixed(2);
                    aggregatedAttributes_list[attributeIndex] = currentValue;
                }
                else {
                    // 且不为0，初始化该属性
                    if (weaponValue != 0) {
                        let currentValue = parseFloat(weaponValue);
                        aggregatedAttributes_list[attributeIndex] = currentValue;
                    }
                }
            }
        });
        return aggregatedAttributes_list;
    }

    // 锁定或解锁附魔属性
    function toggleLock(iconElement) {
        let entryId = iconElement.closest('.attribute').id;
        let entry_index = parseInt(entryId.split('_')[1]);
        let lock = enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content[entry_index].lock;
        let statusElement = iconElement.parentElement.querySelector('span');
        if (lock == 1) {
            statusElement.textContent = '🔓';
            statusElement.style.backgroundColor = 'green';
            lock = 0;
        } else {
            statusElement.textContent = '🔒';
            statusElement.style.backgroundColor = 'red';
            lock = 1;
        }
        enchantmentsData.find(item1 => item1.enchantmentIndex == enchantmentScheme_Current).weapon[currentWeapon].content[entry_index].lock = lock;
        update_consumeResources();
        disable_refreshButton();
    }
