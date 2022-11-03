var par = document.querySelector(".parent");
var btn = document.querySelector(".add");
var input = document.querySelector(".input");
var clear = document.querySelector(".clear");

btn.addEventListener("click",()=>{
    toDo();
});

document.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        toDo();
    }
});

function toDo(){
    if(input.value===""){
        return;
    }

    var abox = document.createElement("div");
    var content = document.createElement("div");
    var text = document.createElement("input");
    var del = document.createElement("button");
    var edit = document.createElement("button");
    var actions = document.createElement("div");

    text.type="text";
    text.value=input.value;
    text.setAttribute("readonly","readonly"); 
    del.innerHTML='<i class="fa fa-solid fa-trash"></i>';
    edit.innerHTML='<i class="fa fa-solid fa-pen"></i>';
    content.appendChild(text);
    actions.appendChild(del);
    actions.appendChild(edit);
    content.appendChild(actions);
    
    abox.appendChild(content);
    par.appendChild(abox);

    text.classList.add("content");
    del.classList.add("del");
    edit.classList.add("edit");
    content.classList.add("box");
    actions.classList.add("actions");

    del.addEventListener("click",()=>{
        abox.removeChild(content);
    });

    edit.addEventListener("click",()=>{
        if (edit.innerHTML == '<i class="fa fa-solid fa-pen"></i>') {
    			edit.innerHTML = '<i class="fa fa-solid fa-download"></i>';
				text.removeAttribute("readonly");
            	text.focus();
                text.style.color="rgb(80, 95, 85)";
                text.style.fontWeight="bold";
                text.style.cursor="text";
		} else {
      			edit.innerHTML='<i class="fa fa-solid fa-pen"></i>';
				text.setAttribute("readonly", "readonly");
                text.style.color="black";
                text.style.cursor="default";
                text.style.fontWeight="normal";
    			}
    });

    clear.addEventListener("click",()=>{
        abox.removeChild(content);
    });

    input.value="";
}