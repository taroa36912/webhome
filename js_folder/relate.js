//import { sites } from './list.js';

const sites = [
    { url: '../list/l-cleaner.html', content: '掃除, 掃除機, 夏, 汚れ, 清潔, 布団, ルンバ'},
    { url: '../list/l-DRR.html', content: '防災, 戦争, 地震, 土砂災害, 噴火, 津波, 南海トラフ地震, 台湾有事' },
    { url: '../list/l-fan.html', content: '扇風機, 夏, 電気代, 節約, エアコン, クーラー, 暑い, 涼しく' },
    { url: '../list/l-moive1.html', content: '映画' },
    { url: '../list/l-OVEN.html', content: '電子レンジ, オーブン, レンジ, 単機能, 冷凍, 解凍, 温め, レンチン, 料理'},
    { url: '../list/l-washing.html', content: '洗濯, 洗濯機, 夏, 汗, 清潔, 布団' },
    { url: '../list/l-whisky.html', content: 'お酒, ウイスキー, アルコール, 20歳, 酒'},
];

function generateRandomNumbers() {
    const a = []; // 結果を格納する配列
    const min = 0; // 最小値
    const max = 6; // 最大値

    while (a.length < 4) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // ランダムな数値を生成
        if (!a.includes(randomNum)) {
            a.push(randomNum); // 重複しない場合、配列に追加
        }
    }
    return a;
}

window.onload = function() {
    const randomNumbers = generateRandomNumbers();
    const resultsDiv = document.getElementById('relate');
    for (let i=0;i<4;i++) {
        let num = randomNumbers[i];
        const iframe = document.createElement('iframe');
        iframe.src = sites[num].url;
        // ここでiframeの基本的な横幅を設定
        iframe.style.width = '100%';
        iframe.style.maxWidth = '500px';
        iframe.style.height = '120px'; // 高さを120pxに設定
        resultsDiv.appendChild(iframe);
    }
}