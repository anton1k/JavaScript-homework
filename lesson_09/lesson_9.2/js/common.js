// 2. ДЗ 2:
// Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json (сервер поддерживает AJAX CORS)
// Отсортировать города по алфавиту и вывести на странице.
// Использование промисов обязательно.
// Запрещено использование любых библиотек (включая jQuery) и фреймворков.

window.onload = function() {
let link = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    function httpGet(url) {
      return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json'

        xhr.onload = function() {
            resolve(this.response);
        };

        xhr.onerror = function() {
          reject();
        };

        xhr.send();
      });
    }

httpGet(link).then((response) => {
    let arr = [];
    for ({name} of response) {
        arr.push(name);
    }
    let sortArr = arr.sort();
    for (city of sortArr) {
        let div = document.createElement('div');
        div.innerHTML = city;
        container.appendChild(div);
    }
});




};
