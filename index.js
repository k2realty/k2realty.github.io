const togglenav = () => {
    document.querySelector("#navbar").classList.toggle('shownav');
    let open = document.querySelector("#navbar").classList.contains('shownav');
    if (open) {
        document.querySelector("#menubtn").textContent = "close"
    } else {
        document.querySelector("#menubtn").textContent = "menu"
    }

}