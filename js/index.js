let img = document.getElementById('img');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let lis = document.querySelectorAll('.banner-btn>li');
    let slideBanner = document.querySelector('.slide-banner');
    let imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    let i = 0;
    //封装切换的函数
    function banner() {
        for (let k = 0; k < lis.length; k++) {
            lis[k].className = '';
        }
        img.src = 'images/sliderImages/' + imgArr[i];
        lis[i].className = 'btn-active';
    }

    function autoBanner() {
        i++;
        if (i > imgArr.length - 1) {
            i = 0;
        }
        banner();
    }

    let timer = setInterval(autoBanner, 3000);
    slideBanner.onmouseover = function () {
        clearInterval(timer);
    }
    slideBanner.onmouseout = function () {
        timer = setInterval(autoBanner, 3000);
    }
    next.onclick = function () {
        i++;
        if (i > imgArr.length - 1) {
            i = 0;
        }
        banner();
    }
    prev.onclick = function () {
        i--;
        if (i < 0) {
            i = imgArr.length - 1;
        }
        banner();
    }
    prev.onclick = function () {
        i--;
        if (i < 0) {
            i = imgArr.length - 1;
        }
        //设置图片路径
        banner();
    }

    for (let j = 0; j < lis.length; j++) {
        lis[j].onmouseover = function () {
            i = j;
            banner();
        }
    }
    // スライドショー修了

    //各エリアの右側表示
    let elevator = document.querySelector('main .home .elevator');
    let header = document.querySelector('.headerWrap');
    let nav = document.querySelector('nav');
    let itemList = document.querySelector('.itemList');
    let video = document.querySelector('.video');
    let notice = document.querySelector('.notice');
    let items = document.querySelectorAll('.items');
    
    let eleA = document.querySelectorAll('main .home .elevator>a');
    let top2 = header.offsetHeight + nav.offsetHeight + slideBanner.offsetHeight + 40;
    let floor = [];

    for(let i=0; i<items.length; i++){
        top2 = top2 + items[i].offsetHeight;
        floor.push(top2);
    }
    
    // マウスリスナーイベント
    document.onscroll = function(){
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        // bookエリアと一番上の距離
        const top1 = header.offsetHeight + nav.offsetHeight + slideBanner.offsetHeight + 40;
        const top3 = header.offsetHeight + nav.offsetHeight + slideBanner.offsetHeight + itemList.offsetHeight + video.offsetHeight + notice.offsetHeight;
        // 左のエリアにスクロールしたっら右のメニューバが出る
        if(top >= top1 & top <= top3){
           elevator.className = 'elevator elevator-fix'; 
        }else{
            elevator.className = 'elevator';
        }

        // aのスタイルのクリア関数
        function clear(){
            for(let i=0; i<eleA.length; i++){
                eleA[i].className = '';
            }
        }
        // トップとの距離を判断して右のメニューバの文字色が変わる
        if(top >= top1 && top < floor[0]){
            clear();
            eleA[0].className = 'active';   
        }else if(top >= floor[0] && top < floor[1]){
            clear();
            eleA[1].className = 'active'; 
        }else if(top >= floor[1] && top < floor[2]){
            clear();
            eleA[2].className = 'active';
        }else{
            clear();
        }

        }

    

   