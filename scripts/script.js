function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");

    if(menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }

    else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

function para()
{
	var morepara = document.getElementById('morepara');
	var seemore = document.getElementById('seemore');

	if (morepara.style.display === "none" || morepara.style.display === "") 
	{
		morepara.style.display = "grid";
		seemore.innerHTML = "See Less";
	}
	else 
	{
        morepara.style.display = "none";
		seemore.innerHTML = "See More";
	}
}

function info()
{
	var dialogue = document.getElementById('dialogue');
	var readbtn = document.getElementById('readbtn');

	if (dialogue.style.display === "none" || dialogue.style.display === "") 
	{
		dialogue.style.display = "inline";
		readbtn.innerHTML = "Hide Caption";
		readbtn.style.padding = "0.5em";
	}
	else 
	{
        dialogue.style.display = "none";
		readbtn.innerHTML = "Show Audio Caption";
	}
}

function alertmsg() {
	alert("Great! You're signed up for our newsletter!");
}

function sentmsg(event) {
	event.preventDefault();
	var forms = event.target;
	if (forms.checkValidity()) {
		if (forms.id === "contactForm"){
			alert("Your message has been sent!");
		}
		else if (forms.id === "feedbackForm") {
			alert("Thanks for helping out animals in need! Your form is greatly appreciated!");
		} 
		else if (forms.id === "subscribeInfo") {
			alert("Great! You're signed up for our newsletter!");
		}
		forms.submit();
	}
}