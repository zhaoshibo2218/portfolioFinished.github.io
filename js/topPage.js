

    // トップページ戻り
    const html = document.documentElement;
    const topPage = document.querySelector('.topPage');   
    let nav1 = document.querySelector('nav');
    let header1 = document.querySelector('.headerWrap');
    const headerFix = document.querySelector('.header-fix');
    // const headerFix = document.querySelector('.header-fix');
// マウスリスナーイベント
    document.addEventListener('scroll', () => {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        if(top > html.clientHeight - 100){
            topPage.style.display = 'block'
        }else{
            topPage.style.display = 'none'
        }

        //一定の距離以降ｎａｖばーはページの上に固定 
        const top1 = header1.offsetHeight + nav1.offsetHeight +200;
   
        if(top > top1){
                headerFix.style.display = 'block';
            }else{
                headerFix.style.display = 'none';
            }
    

    })
// ボタンをおしてトップに戻る
   topPage.onclick = function(){
    html.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
       }

    //    各ページｆａｄｅｉｎ
    AOS.init();

   