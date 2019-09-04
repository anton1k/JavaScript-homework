// 1. ДЗ 1:
// Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
// Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie. Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.
window.onload = function() {

document.cookie = '1=1'
document.cookie = '2=2'
document.cookie = '3=3'
document.cookie = '4=4'
document.cookie = '5=5'
document.cookie = '6=6'
document.cookie = '7=7'
document.cookie = '8=8'
document.cookie = '9=9'
document.cookie = '10=10'

let tabel = document.createElement('table');
let addTd = document.body.appendChild(tabel);

function app() {
    let arrCook = document.cookie.split('; ');


    for (let iterator of arrCook) {
        let td = document.createElement('td');
        let tr = document.createElement('tr');
        let btn = document.createElement('button');

        btn.classList.add('btn');

        btn.innerHTML = 'Удалить cookie';

        addTd.appendChild(tr).appendChild(td).innerHTML = iterator;

        addTd.appendChild(tr).appendChild(btn);
    
    }

}
app();

tabel.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('btn')) {

        let parent = target.parentNode;
        let ind = target.previousSibling.innerHTML.split('=')[0];

        let resolt = confirm(`Удалить cookie с именем ${ind}? `);

        console.log(getCookie(ind));
        

        if(resolt) {
            deleteCookie(ind);
            parent.remove();
            let getCoo = getCookie(ind);
            console.log(`Cookie с именем ${ind} - ${getCoo}`);
            
        }
        
        
    }
})

function deleteCookie( cookie_name ) {
    let cookie_date = new Date ( );  // Текущая дата и время
    cookie_date.setTime ( cookie_date.getTime() - 1 );
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}


function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

};

