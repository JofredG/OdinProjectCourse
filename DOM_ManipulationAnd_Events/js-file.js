// JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);



const para = document.createElement("p");
para.classList.add("paragraph");
para.textContent = "Hey I'm red!";
para.style.color="red";

container.appendChild(para);


const header3 = document.createElement("h3");
header3.classList.add("head3");
header3.textContent = "I'm a blue h3!";
header3.style.color="blue";
container.appendChild(header3);



const caja = document.createElement("div");
caja.classList.add("box");
caja.style.border = '2px solid black';
caja.style.borderColor= "black"
caja.style.backgroundColor = "pink";
container.appendChild(caja);


const header1 = document.createElement("h1");
header1.classList.add("head1");
header1.textContent = "I'm in a div"
caja.appendChild(header1);


const para2 = document.createElement("p");
para2.classList.add("paragraph2");
para2.textContent = "ME TOO!";
caja.appendChild(para2);


function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
//btn.onclick = alertFunction;

// METHOD 3
//btn.addEventListener("click", alertFunction);

// e parameter contains an object that references infromation about the event's TARGET (ELEMENT)
btn.addEventListener("click", function (e) {
  console.log(e.target);
});

// elaboration of the previous example
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});


