var posts=["PC端教程/PC端clash/","android/AIChat/","PC端教程/v2rayn PC/","PC端教程/图床搭建安卓/","android/FakeLocation/","android/PiliPala/","android/GKD/","android/clashandroid/","android/edge/","android/quickoo/","articles/HTML编辑器/","articles/Midjourney AI/","articles/clash安卓/","articles/nodejs/","articles/免费机场/","html-opne/HTML-AItool/","谷歌/Vanced第三方安装器/","articles/永久免费域名/","articles/流量卡/","articles/节点更新/","winpc/ChatGPT-4o/","谷歌/YouTubeVanced/","谷歌/谷歌地图/","谷歌/谷歌浏览器/","winpc/ColorPicker/","winpc/PC端clash/","winpc/arc/","winpc/freedomain/","winpc/图床搭建安卓/","winpc/viggle/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };