let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null;


// *when u click
btn.onclick = function(){
    if(inp.value !=''){
        boxs[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}<p/>
        
        `
        inp.value='';

    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
   items.forEach(item => {
    item.addEventListener('dragstart',function(){
        drag = item;
        item.style.opacity = '0.5';
    })
    item.addEventListener('dragend',function(){
        drag = null;
        item.style.opacity='1';

    })

boxs.forEach(box=>{
    box.addEventListener('dragover', function(e){
        e.preventDefault()
   console.log('drag over');
        box.style.background = 'red';
        box.style.color = '#fff';

    })

    box.addEventListener('dragleave',function(){
        box.style.background = '#fff';
        box.style.color = '#000';
    })
    box.addEventListener('drop',function(){
        box.append(drag);

    })


})

    });

}
