var posts=["android/AIChat/","android/FakeLocation/","android/GKD/","android/PiliPala/","android/clashandroid/","android/TikTok/","android/edge/","PC端教程/PC端clash/","android/quickoo/","PC端教程/图床搭建安卓/","html-opne/HTML-AItool/","PC端教程/v2rayn PC/","articles/Midjourney AI/","articles/clash安卓/","articles/永久免费域名/","articles/nodejs/","articles/HTML编辑器/","articles/免费机场/","articles/流量卡/","winpc/arc/","winpc/freedomain/","articles/节点更新/","winpc/ChatGPT-4o/","winpc/PC端clash/","winpc/ColorPicker/","谷歌/Vanced第三方安装器/","winpc/viggle/","winpc/图床搭建安卓/","谷歌/谷歌地图/","谷歌/YouTubeVanced/","谷歌/谷歌浏览器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };