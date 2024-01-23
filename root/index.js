//:rootは、JavaScriptでも設定可能
setTimeout(() => {
    const root = document.querySelector(':root');
    root.style.setProperty('--black', 'red'); //--blackから、redにカラーが変わる
}, 2000);
