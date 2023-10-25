import { sites } from './list.js';

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
            iframe.style.width = '100%';
            iframe.style.maxWidth = '500px';
            iframe.style.height = '120px'; // 高さを200pxに設定
            resultsDiv.appendChild(iframe);
        }
    }
}