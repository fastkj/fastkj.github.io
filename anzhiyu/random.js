var posts=["PC端教程/PC端clash/","PC端教程/图床搭建安卓/","articles/HTML编辑器/","articles/Midjourney AI/","articles/clash安卓/","PC端教程/v2rayn PC/","articles/nodejs/","articles/免费机场/","articles/永久免费域名/","articles/流量卡/","articles/节点更新/","android/AIChat/","android/PicsArtPro/","android/FakeLocation/","android/GKD/","android/TikTok/","html-opne/HTML-AItool/","android/PiliPala/","android/Twitter/","android/clashandroid/","谷歌/YouTubeVanced/","android/quickoo/","谷歌/谷歌地图/","android/edge/","谷歌/谷歌浏览器/","谷歌/Vanced第三方安装器/","winpc/ChatGPT-4o/","winpc/ColorPicker/","winpc/PC端clash/","winpc/arc/","winpc/freedomain/","winpc/图床搭建安卓/","winpc/viggle/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };