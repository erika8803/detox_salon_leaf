
/*-------------------------------------------
🍔メニュー
-------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const header = document.querySelector('#header');
    const hamburgerBtnArea = document.querySelector('#hamburger-btn-area');
    const links = document.querySelectorAll('a');

    // メニュークリック時の処理
    hamburgerBtn.addEventListener('click', () => {
        if (header.classList.contains('open')) {
            header.classList.remove('open');
        } else {
            header.classList.add('open');
        }
    });

    // メニューを押下後、クリックエリアでの閉じる処理
    hamburgerBtnArea.addEventListener('click', () => {
        header.classList.remove('open');
    });

    // リンクをクリックした時にメニューを閉じる
    links.forEach(function(link) {
        link.addEventListener('click', () => {
            header.classList.toggle('open');
        });
    });
});
