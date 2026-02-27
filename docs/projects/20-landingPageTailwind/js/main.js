const iconMenu = document.querySelector("#icon");
const menu = document.querySelector("#menu");

const menuStates = {
    open: "bg-menu-open",
    close: "bg-menu-close"
}

iconMenu.addEventListener('click', function(){
    if(iconMenu.classList.contains(menuStates["open"])){
        iconMenu.classList.remove(menuStates["open"]);
        iconMenu.classList.add(menuStates["close"]);

        menu.classList.remove('opacity-0','pointer-events-none');
    }else{
        iconMenu.classList.add(menuStates["open"]);
        iconMenu.classList.remove(menuStates["close"]);

        menu.classList.add('opacity-0','pointer-events-none');
    }

})

window.addEventListener('resize',function(){

        iconMenu.classList.add(menuStates["open"]);
        iconMenu.classList.remove(menuStates["close"]);

        menu.classList.add('opacity-0','pointer-events-none');

})