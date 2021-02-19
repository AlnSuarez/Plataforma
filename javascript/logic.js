let fecha = new Date();
let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode==13){
        addItem();
    }
})

document.getElementById("fecha").innerHTML=fecha.toDateString();

function changeImage(){
    document.getElementById("RecyclerTrash").src="./img/RecyclerTrashRed.png"
}

function setOldImage(){
    document.getElementById("RecyclerTrash").src="./img/RecyclerTrash.png"
}





function addItem(){
    var ul = document.getElementById("list");
    var texto = document.getElementById("texto");
    var li = document.createElement("li");
    li.setAttribute('id',texto.value);
    li.appendChild(document.createTextNode(texto.value));
    ul.appendChild(li);
}
