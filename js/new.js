let viewDay = 30; //表示期間

let current = new Date();//現在の日付と時刻の文字列表現を返します。

let postdate = document.querySelectorAll('[data-postdate]');
for (let i = 0; i < postdate.length; i++) {
        let d = new Date(postdate[i].dataset.postdate);
            d.setDate(d.getDate() + viewDay);
                if(current < d) {
                    postdate[i].classList.add('on');
                }
    }