// # ДЗ - 3(со звездочкой)
// Реалзиовать функцию, описанную в ДЗ 2, рекурсивно
// # ДЗ - 2
// Создать модуль, который экспортирует функцию `deleteTextNodes`
// Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
// Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.

let cont = document.querySelector('.container');

function deleteTextNodes(elems) {

    let elem = elems.childNodes;

    if (elem.length == 1) {
        elem[0].remove();
    }

    if(elem.length > 1) {

        for (let i = 0; i < elem.length; i++) {
            if(elem[i].nodeType == 3) {
                    elem[i].remove();
                }

            if(elem[i].nodeType == 1) {
                    let childrenElem = elem[i];
                    deleteTextNodes(childrenElem);
                }
    }


    }
}
deleteTextNodes(cont);
