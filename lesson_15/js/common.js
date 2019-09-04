window.onload = function(e){

    var int1 = document.querySelector('input[name=num1]');
    var int2 = document.querySelector('input[name=num2]');
    var int = document.querySelectorAll('.block2 input[name=calc]');
    var span = document.querySelector('.res');

        int1.oninput = function() {
            for (var i = 0; i < int.length; i++) {
                int[i].removeAttribute('disabled');
            };}
        int2.oninput = function() {
            for (var i = 0; i < int.length; i++) {
                int[i].removeAttribute('disabled');
            };}
        for (var i = 0; i < int.length; i++) {
            int[i].onclick = function () {
                var op = this.getAttribute('value')
                calc(op);
                this.setAttribute('disabled', '');
            }
        }
        function calc(op) {
            var a = parseInt(int1.value);
            var b = parseInt(int2.value);
            var sum;

            if (op == '+') {
                sum = a + b;
            } else if (op == '-') {
                sum = a - b;
            } else if (op == '*') {
                sum = a * b;
            } else if (op == '/') {
                sum = a / b;
            }
            span.innerHTML = sum;
        }
}
