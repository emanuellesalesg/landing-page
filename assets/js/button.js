window.onload = function(){
    document.querySelector(".menu_mobile").addEventListener("click", function(){
        if(document.querySelector(".menu ul").style.display == 'flex'){
            document.querySelector(".menu ul").style.display = 'none';
            document.querySelector(".main_page").style.display = 'flex';
        }else{
            document.querySelector(".menu ul").style.display = 'flex';
        }
    })
}