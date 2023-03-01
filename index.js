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

window.addEventListener("touchstart", function(e){
    if (!document.getElementById('navbar').contains(e.target) && (!document.getElementById('menubtn').contains(e.target))){
    document.getElementById('navbar').classList.remove("w-52");
    document.getElementById('navbar').classList.add("w-0");
    document.querySelector("#menubtn").classList.remove("fa-xmark");
    document.querySelector("#menubtn").classList.add("fa-bars");
  } 
})

const sendMail = () => {
    let params = {
        fname : document.querySelector("#fname").value,
        lname : document.querySelector("#lname").value,
        email : document.querySelector("#email").value,
        phone : document.querySelector("#phone").value,
        contact_Method : document.querySelector("#contact_Method").value,
        subject : document.querySelector("#subject").value,
        city : document.querySelector("#city").value,
        province : document.querySelector("#province").value,
        postal_Code : document.querySelector("#postal_Code").value,
    }
    
    emailjs.send('service_0j957un', 'template_0qklrj3', params)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}