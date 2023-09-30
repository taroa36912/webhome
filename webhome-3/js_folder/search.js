const sites = [
    { url: '../pacture/cleaner.html', content: '掃除機, 洗濯機'},
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    { url: 'site2.html', content: 'サイト2の内容' },
    // ... 他のサイトのデータ
];

window.onload = function() {
    // URLのクエリパラメータから検索キーワードを取得
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get('q');

    const resultsDiv = document.getElementById('results');

    for (let site of sites) {
        if (site.content.includes(keyword)) {
            const iframe = document.createElement('iframe');
            iframe.src = site.url;
            // ここでiframeの基本的な横幅を設定
            iframe.style.width = '90%';
            iframe.style.maxWidth = '500px';
            resultsDiv.appendChild(iframe);
        }
    }
}