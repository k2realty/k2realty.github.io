const togglenav = () => {
    if (document.querySelector("#navbar").classList.contains("w-0")) {
        document.querySelector("#navbar").classList.remove("w-0");
        document.querySelector("#navbar").classList.add("w-52");
    } else {
        document.querySelector("#navbar").classList.remove("w-52");
        document.querySelector("#navbar").classList.add("w-0");
    }
    let closed = document.querySelector("#navbar").classList.contains('w-0');
    if (closed) {
        document.querySelector("#menubtn").classList.remove("fa-xmark");
        document.querySelector("#menubtn").classList.add("fa-bars");
    } else {
        document.querySelector("#menubtn").classList.remove("fa-bars");
        document.querySelector("#menubtn").classList.add("fa-xmark");
    }

}

window.addEventListener("touchstart", e => {
    if (!document.getElementById('navbar').contains(e.target) && (!document.getElementById('menubtn').contains(e.target))){
    document.getElementById('navbar').classList.remove("w-52");
    document.getElementById('navbar').classList.add("w-0");
    document.querySelector("#menubtn").classList.remove("fa-xmark");
    document.querySelector("#menubtn").classList.add("fa-bars");
  } 
});