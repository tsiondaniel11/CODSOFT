//menu icon
function toggleNavbar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
    
    
    
    //sending email
  function sendEmail(){
    (function(){
      emailjs.init("lOpjEknKPcIQii6_0");
    })();
    var serviceID="service_f28h7xp";
    var templateID="template_higkcws";
    var params={
      sendername: document.querySelector("#name".value),
      senderemail: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector('#message').value
    };
    emailjs.send(serviceID,templateID,params)
    .then(res => {
      alert('❤️❤️❤️ Thank you,!! ❤️❤️❤️')
    })
    .catch();
  }
  
  
  