// 第一段：nx-bar 关闭逻辑
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

// 第二段：Service Worker 注册（PWA）
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
}

// 第三段：Cloudflare 挑战平台脚本（动态注入）
(function() {
    function c() {
        var b = a.contentDocument || (a.contentWindow && a.contentWindow.document);
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'a2b343fc6dcb1cce',t:'MTc4Njc0NTE3NA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }
    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState)
            c();
        else if (window.addEventListener)
            document.addEventListener('DOMContentLoaded', c);
        else {
            var e = document.onreadystatechange || function() {};
            document.onreadystatechange = function(b) {
                e(b);
                'loading' !== document.readyState && (document.onreadystatechange = e, c())
            }
        }
    }
})();

// 第四段：Google AdSense 广告加载（保留原内联调用）
(adsbygoogle = window.adsbygoogle || []).push({});