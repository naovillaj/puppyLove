windows.speechSynthesisUtterance();

const msg = new speechSynthesisUtterance();

msg.text = "Esta es una página web de adopción de perritos, en el cuál encontrarás muchos de ellos que están a la espera de una nueva vida llena de amor y amistad";

speechSynthesis.speak(msg);