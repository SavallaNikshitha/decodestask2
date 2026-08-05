const form = document.getElementById("form");
const users = document.getElementById("users");

function loadUsers(){

fetch("/api/users")
.then(res=>res.json())
.then(data=>{

users.innerHTML="";

data.forEach(user=>{

users.innerHTML += `
<li>
<b>${user.name}</b><br>
${user.email}
</li>
`;

});

});

}

loadUsers();

form.addEventListener("submit",function(e){

e.preventDefault();

fetch("/api/users",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:document.getElementById("name").value,

email:document.getElementById("email").value

})

})

.then(res=>res.json())

.then(data=>{

alert(data.message);

form.reset();

loadUsers();

});

});
