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
})


const form = document.querySelector("#form");

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const fname = form.fname.value.trim();
    const fnameErr = form.querySelector("#fnameErr");
    const lname = form.lname.value.trim();
    const email = form.email.value.trim();
    const emailErr = form.querySelector("#emailErr");
    const phone = form.phone.value.trim();
    const contactMethod = form.contactMethod.value.trim();
    const subject = form.subject.value.trim();
    const address = form.address.value.trim();
   
    const err = {};
    
    if (fname.length === 0){
        err.fname = "First name is missing";
        fnameErr.innerText = err.fname
    } else {
        delete err.fname;
        fnameErr.innerText = "";
    }
    if (email.length < 6){
        err.email = "Valid email is missing";
        emailErr.innerText = err.email;
    } else {
        delete err.email;
        emailErr.innerText = "";
    }
    if (!Object.keys(err).length > 0){
        let templateParams = {
            fname : fname,
            lname : lname,
            email : email,
            phone : phone,
            contactMethod : contactMethod,
            subject : subject,
            address : address,
        }

        emailjs.send('service_0j957un', 'template_0qklrj3', templateParams).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Someone will be in touch as soon as possible.");
        location.reload();
        }, function(error) {
        console.log('FAILED...', error);
        });
    } 
})