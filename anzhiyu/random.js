var posts=["PC端教程/PC端clash/","PC端教程/图床搭建安卓/","html-opne/HTML-AItool/","谷歌/谷歌浏览器/","谷歌/Vanced第三方安装器/","谷歌/谷歌地图/","全部文章/Midjourney AI/","全部文章/HTML编辑器/","全部文章/v2rayn PC/","全部文章/免费机场/","全部文章/clash安卓/","全部文章/永久免费域名/","全部文章/节点更新/","全部文章/流量卡/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };