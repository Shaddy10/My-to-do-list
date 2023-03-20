const toDoItems=document.getElementsByClassName("todoitems")[0];
const input=document.getElementById("input");
const trashIcon=document.getElementById("trash");

input.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        addItem();
    }
})
function addItem(){
    var divParent=document.createElement("div");
    var divChild=document.createElement("div");
    var checkIcon=document.createElement("i");
    var trashIcon=document.createElement("i");
    //left side of task
    divParent.className="item";
    //right side of task(Icons)
    divParent.innerHTML='<div>'+input.value+'</div>';
    //check Icon
    checkIcon.className="fas fa-check-square";
    checkIcon.style.color="lightgray";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color="limegreen";
    })
    //adding check icon to divChild(Right)
    divChild.appendChild(checkIcon);

    //Trash Icon
    trashIcon.className="fas fa-trash";
    trashIcon.style.color="darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();
    }
    )
    //adding trash icon to divChild(Right)
    divChild.appendChild(trashIcon);

    //adding divChild to divParent
    divParent.appendChild(divChild);
    //adding divParent to the container 
    toDoItems.appendChild(divParent);
    input.value='';
}