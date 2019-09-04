// 2. дз 2:
// Создать страницу с кнопкой. При клике на кнопку, на странице должен создаваться div произвольных размеров, в произвольном месте.
// цвет фона div'а должен быть каждый раз случайным.
// созданные div'ы можно перетаскивать мышкой (drag & drop)

window.onload = function() {

let btn = document.querySelector('.btn');
let z = 1;
let arrayAnimation = ['bounce', 'flash', 'pulse', 'rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','flipInX','flipInY','lightSpeedIn','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','jackInTheBox','rollIn','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','slideInDown','slideInLeft','slideInRight','slideInUp'];

function show() {
    t1.style.display = 'none';
    btn.style.display = 'block';
    btn.classList.add('bounceInUp');
    document.removeEventListener('click', show);
}

document.addEventListener('click', show);

function random(min, max, bool) {
    var rand = min + Math.random() * (max + 1 - min);
    bool ? rand = rand.toFixed(4) : rand = Math.floor(rand);
    return rand;
  }

btn.addEventListener('click', function () {
    let block = document.createElement('div');
    let pixWidth = random(2, 60, true);
    let pixHeight = random(2, 60, true);
    let clr1 = random(1, 255, false);
    let clr2 = random(1, 255, false);
    let clr3 = random(1, 255, false);
    let top = random(0, 50, false);
    let left = random(0, 50, false);
    let rad = random(0, 50, true);
    let animate = random(0, 43, false);
    
    block.classList.add('shadow');
    block.classList.add('animated');
    block.classList.add(`${arrayAnimation[animate]}`);
    block.style.zIndex = z++;
    block.style.position = 'absolute';
    block.style.top = top + '%';
    block.style.left = left + '%';
    block.style.borderRadius = rad + '%';
    block.style.width = pixWidth + 'vw';
    block.style.height = pixHeight + 'vh';
    block.style.background = `rgb(${clr1}, ${clr2}, ${clr3})`;

    body.insertBefore(block, body.firstChild)
});

body.addEventListener('click', function (event) {
    let target = event.target;
    if (target.classList.contains('shadow')) {
        setTimeout(function () {
            drag(target);
        }, 10)
    }
});

body.addEventListener('mousedown', function (event) {
    let target = event.target;
    if (target.classList.contains('shadow')) {
        setTimeout(function () {
            drag(target);
            dragEndDrop(target);
        }, 30)

    }
});

body.addEventListener('mouseup', function (event) {
    let target = event.target;
    if (target.classList.contains('shadow')) {
        setTimeout(function () {
            mouseup(target);
        }, 10)

    }
});

function dragEndDrop(el) {
    el.onmousedown = function(e) {

    let coords = getCoords(el);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    el.style.position = 'absolute';
    document.body.appendChild(el);
    moveAt(e);

  function moveAt(e) {
    el.style.left = e.pageX - shiftX + 'px';
    el.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
    };

}

    el.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {
      let box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

}

function mouseup(e) {
    document.onmousemove = null;
    e.onmouseup = null;
}

function drag(e) {
    e.style.zIndex = z++;
    e.classList.remove('animated');
}




};
