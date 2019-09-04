// 1. ДЗ 1:
// Создать модуль, который экспортирует функцию `timer`.
// Функция `timer` должна возвращать новый промис.
// Функция `timer` принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состояние `fulfilled`.
// Пример использования:
// timer(3000).then(() => console.log('я вывелась через 3 секунды'))

window.onload = function() {

function timer(taim) {
    return new Promise(function(fulfilled, rejected) {
        setTimeout(() => fulfilled(), taim);
    });
}
timer(2000).then(() => console.log('я вывелась через 2 секунды'));

};
