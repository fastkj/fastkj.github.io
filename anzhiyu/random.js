var posts=["android/AIChat/","android/APKPure/","android/AdGuard/","android/AuroraStore/","android/FVFilePro/","android/FakeLocation/","android/GKD/","android/GoogleChrome/","android/InstaPro/","android/PicsArtPro/","android/PiliPala/","android/Reverso/","android/ShazamPro/","android/SnapTube/","android/TikTok/","android/Twitter/","android/edge/","android/quickoo/","android/clashandroid/","articles/HTML编辑器/","articles/Midjourney AI/","articles/clash安卓/","articles/nodejs/","articles/免费机场/","PC端教程/PC端clash/","articles/永久免费域名/","PC端教程/v2rayn PC/","articles/流量卡/","articles/节点更新/","PC端教程/图床搭建安卓/","html-opne/HTML-AItool/","winpc/ChatGPT-4o/","winpc/ChatGPT_4o/","winpc/ColorPicker/","winpc/PC端clash/","winpc/arc/","winpc/freedomain/","winpc/viggle/","winpc/图床搭建安卓/","谷歌/Vanced第三方安装器/","谷歌/YouTubeVanced/","谷歌/谷歌浏览器/","谷歌/谷歌地图/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };