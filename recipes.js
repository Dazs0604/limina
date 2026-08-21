// ===== Google Analytics 4 配置 =====
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-N3J4MTFY50');

// ===== 顶部通知栏（nx-bar）关闭功能 =====
(function() {
    var b = document.getElementById('nxBar');
    if (!b)
        return;
    try {
        if (localStorage.getItem('nxBarHide') === '1') {
            b.remove();
            return;
        }
    } catch (e) {}
    document.getElementById('nxBarX').addEventListener('click', function() {
        b.remove();
        try {
            localStorage.setItem('nxBarHide', '1');
        } catch (e) {}
    });
})();

// ===== Google AdSense 广告加载 =====
(adsbygoogle = window.adsbygoogle || []).push({});