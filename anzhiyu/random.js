var posts=["PC端教程/v2rayn PC/","PC端教程/PC端clash/","PC端教程/图床搭建安卓/","articles/HTML编辑器/","articles/Midjourney AI/","articles/clash安卓/","articles/v2rayn PC/","articles/免费机场/","articles/节点更新/","articles/流量卡/","html-opne/HTML-AItool/","android/AIChat/","android/FakeLocation/","android/GKD/","android/quickoo/","winpc/ColorPicker/","android/edge/","articles/永久免费域名/","winpc/PC端clash/","winpc/arc/","articles/gkd/","articles/nodejs/","winpc/freedomain/","winpc/viggle/","winpc/图床搭建安卓/","android/clashandroid/","谷歌/Vanced第三方安装器/","谷歌/YouTubeVanced/","谷歌/谷歌地图/","谷歌/谷歌浏览器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };