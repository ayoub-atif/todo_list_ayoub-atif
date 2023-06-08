//* Declaration variables :
let input = document.querySelector(".input");
let btn_list = document.querySelector(".btn_list");
let ul = document.querySelector(".container ul");
//! function 
btn_list.addEventListener("click",(param)=>{
    if (input.value != "") {
        param.preventDefault();
        // *add li:
        //? create li
        let li = document.createElement("li");
        ul.appendChild(li);
        li.setAttribute("class", "p");
        //? create p
        let p = document.createElement("p");
        p.textContent = input.value;
        li.appendChild(p);
        
        // *add icon:
        let icon = document.createElement("i");
        icon.innerHTML = '<i class="fa-solid check fa-circle" style="color: #51aa08;"></i> <i class="fa-solid update fa-pen-to-square"></i>';

        li.appendChild(icon);
        // *create span:
        let x = document.createElement("span");
        x.innerHTML = "x";
        li.appendChild(x);
    }

// *remove span:
    let close = document.querySelectorAll("span");

    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", ()=>{
            close[i].parentNode.style.display = "none";
        })
    }
    input.value = "";
    
   
});

document.addEventListener("click", param =>{
    if (param.target.className.includes("check")) {
        param.target.parentElement.parentElement.classList.toggle("green");
    }
})


document.addEventListener("click", param =>{
    if (param.target.className.includes("update")) {
        param.target.parentElement.parentElement.classList.toggle("blue");
        let entrer = prompt("entrer une valeur :");
        param.target.parentElement.previousElementSibling.textContent = entrer;
    }
})
let select = document.querySelector("select");
let selectVl = select.value;

let elements = [];
let selectelemnts = [];
if (selectVl === 'compler') {
    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];
        if (element.completed ==true) {
          selectelemnts.push(element);
        }
      }
      
} else if (selectVl === 'no compler') {
    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];

        if (element.completed == false) {
          selectelemnts.push(element);
        }
      }
} else {
    selectelemnts = elements;
}

