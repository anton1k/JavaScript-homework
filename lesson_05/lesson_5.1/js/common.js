//  дз 1:
// Переделать тестовое задание (аккордеон) с применением делегирования.

let question = document.querySelectorAll('.question');
let show = document.querySelectorAll('.answer');
let block = document.querySelectorAll('.block');

for (let el of question) {
    el.addEventListener('click', function () {
        let open = this.nextElementSibling;

        open.style.display = 'block'
        setTimeout(function() {
            open.classList.toggle('open');
        }, 5);
        if (open.classList.contains('open')) {
                        setTimeout(function() {
                            open.style.display = 'none';
                        }, 300);
                    }

        for (let i of show) {
            if (i !== open) {
                i.classList.remove('open');
                setTimeout(function() {
                    i.style.display = 'none';
                }, 300);
            }
        }
});
}
