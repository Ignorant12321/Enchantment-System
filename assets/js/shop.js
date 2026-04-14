// 点券购买界面
    let purchase_money = [6, 30, 68, 128, 328, 648];
    let purchase_money_costMoney = [0, 0, 0, 0, 0, 0];
    function updateShop_money() {
        document.getElementById('shopTitle').innerHTML = `选择购买点券的档次`;
        let bottonContainer = document.getElementById('purchase-buttons');
        bottonContainer.innerHTML = '';
        let total = purchase_money.length;
        for (let i = 0; i < total; i++) {
            let button = document.createElement('button');
            button.onclick = function () {
                if (money >= purchase_money_costMoney[i]) {
                    increaseResource('money', -purchase_money_costMoney[i]);
                    increaseResource('money', purchase_money[i]);
                }
                else {
                    showCustomDialog_NotEnough("点券不足，无法购买！");
                }
            }
            button.innerHTML = `${purchase_money[i]} 点券 <br> (￥${purchase_money_costMoney[i]})`;
            bottonContainer.appendChild(button);
        }
    }
    // 白石购买界面
    let purchase_WhiteStone = [100, 300, 500, 1000, 3000, 5000, 10000, 30000, 50000];
    let purchase_WhiteStone_costMoney = [1, 3, 5, 10, 30, 50, 100, 300, 500];
    function updateShop_whiteStone() {
        document.getElementById('shopTitle').innerHTML = `选择购买白石的档次`;
        let bottonContainer = document.getElementById('purchase-buttons');
        bottonContainer.innerHTML = '';
        let total = purchase_WhiteStone.length;
        for (let i = 0; i < total; i++) {
            let button = document.createElement('button');
            button.onclick = function () {
                if (money >= purchase_WhiteStone_costMoney[i]) {
                    increaseResource('money', -purchase_WhiteStone_costMoney[i]);
                    increaseResource('whiteStone', purchase_WhiteStone[i]);
                } else {
                    showCustomDialog_NotEnough("点券不足，无法购买！");
                }
            }
            button.innerHTML = `${purchase_WhiteStone[i]} 白石 <br> (￥${purchase_WhiteStone_costMoney[i]})`;
            bottonContainer.appendChild(button);
        }
    }
    // 彩玉购买界面
    let purchase_ColorGem = [1, 3, 5, 10, 30, 50, 100, 300, 500];
    let purchase_ColorGem_costMoney = [1, 3, 5, 10, 30, 50, 100, 300, 500];
    function updateShop_colorGem() {
        document.getElementById('shopTitle').innerHTML = `选择购买彩玉的档次`;
        let bottonContainer = document.getElementById('purchase-buttons');
        bottonContainer.innerHTML = '';
        let total = purchase_ColorGem.length;
        for (let i = 0; i < total; i++) {
            let button = document.createElement('button');
            button.onclick = function () {
                if (money >= purchase_ColorGem_costMoney[i]) {
                    increaseResource('money', -purchase_ColorGem_costMoney[i]);
                    increaseResource('colorGem', purchase_ColorGem[i]);
                } else {
                    showCustomDialog_NotEnough("点券不足，无法购买！");
                }

            }
            button.innerHTML = `${purchase_ColorGem[i]} 彩玉 <br> (￥${purchase_ColorGem_costMoney[i]})`;
            bottonContainer.appendChild(button);
        }

    }
    // 打开购买弹窗
    function openShop() {
        document.getElementById('shopBackground').style.display = 'block';
        document.getElementById('shop').style.display = 'block';
    }

    // 关闭购买弹窗
    function closeShop() {
        document.getElementById('shopBackground').style.display = 'none';
        document.getElementById('shop').style.display = 'none';
    }
