//  дз 1:
// Переделать тестовое задание (аккордеон) с применением делегирования.

body.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('question')) {
        accardion(target);
    }
});

function accardion(el) {
        let show = document.querySelectorAll('.answer');
        let open = el.nextElementSibling;

        open.style.display = 'block'
        setTimeout(function() {
            open.classList.toggle('open');
        }, 5);
        if (open.classList.contains('open')) {
            setTimeout(function() {
                open.style.display = 'none';
                }, 450);
        }

        // for (let i of show) {
        //     if (i !== open) {
        //         i.classList.remove('open');
        //         setTimeout(function() {
        //             i.style.display = 'none';
        //         }, 450);
        //     }
        // }

}
