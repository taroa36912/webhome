const sites = [
    { url: 'list/l-cleaner.html', content: '掃除, 掃除機, 夏, 汚れ, 清潔, 布団, ルンバ'},
    { url: 'list/l-DRR.html', content: '防災, 戦争, 地震, 土砂災害, 噴火, 津波, 南海トラフ地震, 台湾有事' },
    { url: 'list/l-fan.html', content: '扇風機, 夏, 電気代, 節約, エアコン, クーラー, 暑い, 涼しく' },
    { url: 'list/l-moive1.html', content: '映画' },
    { url: 'list/l-OVEN.html', content: '電子レンジ, オーブン, レンジ, 単機能, 冷凍, 解凍, 温め, レンチン, 料理'},
    { url: 'list/l-washing.html', content: '洗濯, 洗濯機, 夏, 汗, 清潔, 布団' },
    { url: 'list/l-whisky.html', content: 'お酒, ウイスキー, アルコール, 20歳, 酒'},
    { url: 'list/l-camp.html', content: 'キャンプ,秋,秋キャンプ,テント,ランタン'},

];


window.onload = function() {
    const resultsDiv = document.getElementById('indexjs');
    for (let i=0;i<sites.length;i++) {
        const iframe = document.createElement('iframe');
        iframe.src = sites[i].url;  
        // ここでiframeの基本的な横幅を設定
        iframe.style.width = '100%';
        iframe.style.maxWidth = '500px';
        iframe.style.height = '120px'; // 高さを120pxに設定
        resultsDiv.appendChild(iframe);
    }
}