function showCustomDialog_NotEnough(text) {
        // 获取对话框元素和按钮元素
        const dialog = document.getElementById('customDialog_NotEnough');
        const confirmButton = document.getElementById('confirmButton_NotEnough');
        const p_element = document.getElementById('p_NotEnough');
        dialog.style.display = 'flex';
        p_element.textContent = text;

        // 确认按钮点击时触发的逻辑
        confirmButton.onclick = function () {
            dialog.style.display = 'none'; // 隐藏对话框
        };
    }
    function showCustomDialog_unlock(callback) {
        // 获取对话框元素和按钮元素
        const dialog = document.getElementById('customDialog_unlock');
        const confirmButton = document.getElementById('confirmButton_unlock');
        const cancelButton = document.getElementById('cancelButton_unlock');
        dialog.style.display = 'flex';

        // 确认按钮点击时触发的逻辑
        confirmButton.onclick = function () {
            dialog.style.display = 'none'; // 隐藏对话框
            callback(true); // 调用回调函数并传递 true（表示确认）
        };

        // 取消按钮点击时触发的逻辑
        cancelButton.onclick = function () {
            dialog.style.display = 'none'; // 隐藏对话框
            callback(false); // 调用回调函数并传递 false（表示取消）
        };
    }

    function showCustomDialog_setting() {
        // 获取对话框元素和按钮元素
        const dialog = document.getElementById('customDialog_setting');
        const confirmButton = document.getElementById('confirmButton_setting');
        const cancelButton = document.getElementById('cancelButton_setting');
        dialog.style.display = 'flex';

        // 确认按钮点击时触发的逻辑
        confirmButton.onclick = function () {
            dialog.style.display = 'none'; // 隐藏对话框
            rarity_alert = document.getElementById('select_rarity').value;
        };

        // 取消按钮点击时触发的逻辑
        cancelButton.onclick = function () {
            dialog.style.display = 'none'; // 隐藏对话框
            document.getElementById('select_rarity').value = rarity_alert;
        };
    }

    function init_diag_setting() {
        // 锁定词条颜色
        let selectDiv = document.getElementById('select_rarity_alert');
        let select = document.createElement('select');
        select.id = 'select_rarity';
        select.className = 'selector_rectangle';
        attributeRankContent.forEach(item => {
            let option = document.createElement('option');
            option.value = item.index;
            option.textContent = item.icon;
            select.appendChild(option);
        });
        selectDiv.appendChild(select);
        select.value = 2;
    }

    function showCustomDialog_info() {
        // 获取对话框元素和按钮元素
        const dialog = document.getElementById('customDialog_info');
        const confirmButton = document.getElementById('confirmButton_info');
        const div_element = document.getElementById('div_info');
        dialog.style.display = 'flex';
        div_element.innerHTML = '';

        // 创建并格式化信息
        let data = aggregate_Attributes();
        let data_power = {};
        for (let key in data) {
            data_power[key] = parseFloat(data[key]) * (entriesContent.find(item1 => item1.index == key)).power;
        }

        if (data_power && Object.keys(data_power).length > 0) {
            // 将 data 转换为数组并按值排序（由大到小）
            const sortedData = Object.entries(data_power).sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]));

            // 遍历排序后的数组并添加元素
            sortedData.forEach((item, index) => {
                let key = item[0];
                let attributeName = entriesContent.find(item1 => item1.index == key)?.name || item;
                let info_item = document.createElement('div');
                info_item.className = 'info-item';
                info_item.textContent = `${index + 1}. ${attributeName}: ${data[key]}`;
                div_element.appendChild(info_item);
            });
        } else {
            let info_item = document.createElement('div');
            info_item.className = 'info-item';
            info_item.style = "text-align: center;"
            info_item.textContent = `暂无`;
            div_element.appendChild(info_item);
        }

        //确认按钮点击时触发的逻辑
        confirmButton.onclick = function () {
            dialog.style.display = 'none'; // 隐藏对话框
        };
    }
