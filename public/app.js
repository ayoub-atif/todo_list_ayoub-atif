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
    // *we need empty input so i did this:
    input.value = "";
    
   
});
// *if u click the color of the botton goona change to green:
document.addEventListener("click", param =>{
    if (param.target.className.includes("check")) {
        param.target.parentElement.parentElement.classList.toggle("green");
    }
})

//?if u click the botton goona change to blue:
document.addEventListener("click", param =>{
    if (param.target.className.includes("update")) {
        param.target.parentElement.parentElement.classList.toggle("blue");
        let entrer = prompt("entrer une valeur :");
        param.target.parentElement.previousElementSibling.textContent = entrer;
    }
})




// ******************************


