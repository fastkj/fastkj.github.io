var posts=["PC端教程/PC端clash/","PC端教程/v2rayn PC/","PC端教程/图床搭建安卓/","android/AIChat/","android/FakeLocation/","android/GKD/","android/PiliPala/","android/clashandroid/","android/quickoo/","android/edge/","articles/HTML编辑器/","articles/clash安卓/","articles/Midjourney AI/","articles/nodejs/","articles/免费机场/","articles/流量卡/","html-opne/HTML-AItool/","articles/永久免费域名/","articles/节点更新/","winpc/ColorPicker/","winpc/ChatGPT-4o/","winpc/arc/","winpc/PC端clash/","winpc/freedomain/","winpc/viggle/","winpc/图床搭建安卓/","谷歌/谷歌地图/","谷歌/Vanced第三方安装器/","谷歌/YouTubeVanced/","谷歌/谷歌浏览器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };