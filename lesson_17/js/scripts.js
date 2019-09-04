function Popup(options){
    this.modal = document.querySelector(options.modal);
    this.overlay = document.querySelector(options.overlay)
    var popup = this;

    this.open = function(content){
        popup.modal.innerHTML = content;
        popup.overlay.classList.add('open');
        popup.modal.classList.add('open');
    }

    this.close = function(){
        popup.overlay.classList.remove('open');
        popup.modal.classList.remove('open');
    }
    this.overlay.onclick = this.close;
}


window.onload = function(){

    var btn = document.querySelectorAll('.items .item');
    var p = new Popup({
        modal: '.modal',
        overlay: '.overlay'
     });
 
    for (var i = 0; btn.length;  i++) {
        btn[i].onclick  = function () {   
         p.open(btn[5].textContent);
     } ;
    }
}
