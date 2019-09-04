// # ДЗ - 1
//
// Создать модуль, который экспортирует функцию `prepend`
// prepend имеет два параметра, в которые нужно передать элементы
// Задача функции - вставить второй элемент в начало первого. Например:
// `prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.
let cont = document.querySelector('.container');
let block = document.querySelectorAll('.block');
let newBlock = document.createElement('div');
newBlock.classList.add('block');
newBlock.innerHTML = '0';
function prepend(container, newElement) {
    container.insertBefore(newElement, container.firstChild)
}
prepend(cont, newBlock);
