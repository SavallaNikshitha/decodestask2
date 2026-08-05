// ================================
// Skill Bridge Platform
// script.js
// ================================

// Function for image upload preview
function imageUploader(inputId, imageId) {

    const input = document.getElementById(inputId);
    const image = document.getElementById(imageId);

    if (!input || !image) return;

    const button = document.querySelector(`label[for='${inputId}']`);

    input.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onload = function (e) {

                image.src = e.target.result;

                if (button) {
                    button.style.display = "none";
                }

            };

            reader.readAsDataURL(file);

        }

    });

}

// Upload Images
imageUploader("logoUpload","logoPreview");
imageUploader("heroUpload","heroPreview");
imageUploader("aboutUpload","aboutPreview");

imageUploader("course1Upload","course1Preview");
imageUploader("course2Upload","course2Preview");
imageUploader("course3Upload","course3Preview");

imageUploader("internUpload","internPreview");

imageUploader("g1Upload","g1Preview");
imageUploader("g2Upload","g2Preview");
imageUploader("g3Upload","g3Preview");

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Navbar Shadow
window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>30){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

    }
    else{

        header.style.boxShadow="none";

    }

});

// Buttons
const login=document.querySelector(".login");
const register=document.querySelector(".register");

if(login){

login.addEventListener("click",()=>{

    alert("Login Page Coming Soon!");

});

}

if(register){

register.addEventListener("click",()=>{

    alert("Registration Page Coming Soon!");

});

}

// Contact Form
const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}

// Welcome Message
window.onload=function(){

console.log("Welcome to Skill Bridge Platform");

};