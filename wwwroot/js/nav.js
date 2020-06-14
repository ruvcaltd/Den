class NavMenu {

    

    openNav(navId, mainBodyId, fullscreen) {

        if (window.NavMenuOpen) return;
       
        if (!fullscreen) {
            document.getElementById(navId).style.width = "700px";
            document.getElementById(mainBodyId).style.marginLeft = "700px";
            document.getElementById(mainBodyId).style.backgroundColor = "rgba(0,0,0,0.4)";

            document.getElementById(mainBodyId)['onclick'] = () => this.closeNav(navId, mainBodyId);

        } else {
            document.getElementById(navId).style.width = "100%";
        }

        setTimeout(() => window.NavMenuOpen = true, 500);
    }

    closeNav(navId, mainBodyId) {
        if (!window.NavMenuOpen) return;

        console.log(navId);
        console.log(navId);

        document.getElementById(navId).style.width = "0";
        document.getElementById(mainBodyId).style.marginLeft = "0";
        document.getElementById(mainBodyId).style.backgroundColor = "white";

        window.NavMenuOpen = false;
    }
}

window.NavMenuOpen = false;
window.NavMenu = new NavMenu();
//alert(window.NavMenu);