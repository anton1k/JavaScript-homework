
// 2. ДЗ 2:
// К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
// Список текстовых полей:
// - имя
// - значение
// - срок годности (количество дней)

// После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами. Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых будет доступна cookie.

// После добавление cookie, значения текстовых полей формы должны быть очищены.
// Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на экран должен быть выведен alert с предупреждением "Заполните все поля формы".
// Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы
window.onload = function() {

let tabel = document.createElement('table');
let addTd = document.body.appendChild(tabel);

let btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click', function (e) {
    let input = document.querySelectorAll('input[type=text]');
    let in1 = input[0].value;
    let in2 = input[1].value;
    let in3 = input[2].value;
    
    if(in1 && in2 && in3) {
        setCookie(in1, in2, {expires : in3});
        

        let td = document.createElement('td');
        let tr = document.createElement('tr');
        let btn = document.createElement('button');
        
        btn.classList.add('btn');

        btn.innerHTML = 'Удалить cookie';
        
        addTd.appendChild(tr).appendChild(td).innerHTML = `${in1}=${getCookie(in1)}`;

        addTd.appendChild(tr).appendChild(btn);





        for (let key in input) {
            input[key].value = '';
        }
        
            
    } else {
        alert('Заполните все поля формы');  
        
    }

    e.preventDefault()
})



document.cookie = '1=1'
document.cookie = '2=2'
document.cookie = '3=3'
document.cookie = '4=4'
document.cookie = '5=5'


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

function setCookie(name, value, options) {
    options = options || {};
  
    let expires = options.expires;
    
    
  
    if (typeof expires == "number" && expires) {
      let d = new Date();
      d.setTime(d.getTime() + expires * 86400);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    value = encodeURIComponent(value);
  
    let updatedCookie = name + "=" + value;
  
    for (let propName in options) {
      updatedCookie += "; " + propName;
      let propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

};

