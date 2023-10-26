import { sites } from './list.js';

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
    console.log(randomNumbers); // ランダムな4つの数字が格納された配列

    const resultsDiv = document.getElementById('relate');

    for (let i=0;i<4;i++) {
        let num = randomNumbers[i];
        const iframe = document.createElement('iframe');
        iframe.src = sites[num].url;
        // ここでiframeの基本的な横幅を設定
        iframe.style.width = '100%';
        iframe.style.maxWidth = '500px';
        iframe.style.height = '120px'; // 高さを200pxに設定
        resultsDiv.appendChild(iframe);
    }
}