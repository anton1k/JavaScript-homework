window.onload = function () {
    var images = document.querySelectorAll('.gallery-1 .photos img');
    var images2 = document.querySelectorAll('.gallery-2 .photos img');

    var prev1 = document.querySelector('.gallery-1 .buttons .prev');
    var prev2 = document.querySelector('.gallery-2 .buttons .prev');

    var next1 = document.querySelector('.gallery-1 .buttons .next');
    var next2 = document.querySelector('.gallery-2 .buttons .next');

    var slider = new Slider(images);
    prev1.onclick = function(){
        slider.prev();
    }
    next1.onclick = function(){
        slider.next();
    }

    var slider2 = new Slider(images2);
    prev2.onclick = function(){
        slider2.prev();
    }

    next2.onclick = function(){
        slider2.next();
    }

    setInterval(function(){
        slider2.next();
    }, 2000);
}

function Slider(images, interval) {
    this.images = images;
    var i = 0;
    this.prev = function () {
        this.images[i].classList.remove('showed');
        i--;
        if (i < 0) {
            i = this.images.length - 1;
        }
        this.images[i].classList.add('showed');
    }

    this.next = function () {
        this.images[i].classList.remove('showed');
        i++;
        if (i >= this.images.length) {
            i = 0;
        }
        this.images[i].classList.add('showed');
    }
}
