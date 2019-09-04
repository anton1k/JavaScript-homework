window.onload = function(e){
    var submit = document.querySelector('form');
    var input = document.querySelectorAll('form input');
    var error = false;
    submit.onsubmit = function(e) {
        for (var i = 0; i < input.length; i++) {
            if (!input[i].value) {
                input[i].classList.add('invalid');
                error = true;
            } else {
                input[i].classList.remove('invalid');
            }
        }
        if (error) {
            e.preventDefault();
        }
    }
}
