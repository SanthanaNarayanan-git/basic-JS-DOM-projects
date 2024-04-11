//const inputBox = document.getElementById("input-box");
//const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value='';
    saveData();
}
listContainer.addEventListener(click,function(e){
    if(e.target=="LI"){
        e.target.innerHTML="completed";
        e.target.backgroundColor="red";
    }else if(e.target==="span"){
        e.target.remove();
        e.target.style.backgroundColor="red";
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}