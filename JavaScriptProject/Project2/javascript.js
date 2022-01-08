let todolist = document.querySelector("#list")
let task = document.querySelector("#task")
let sil = document.querySelector("#sil");
function newElement(e){

   
   let newTodo = task.value.trim();
   if(newTodo == ""){
          
        showAlert("danger","lütfen bir todo girin")


   }      
   else{
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.className = "delete-item";
        link.innerHTML = "<i class=fa fa-remove>Delete> </i>";
        listItem.className = "list-group-item d-flex justify-content-between";
     
        listItem.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(link);
     
        todolist.appendChild(listItem)
        task.value = "";     
   }


}

function showAlert(type,message){
        const alert = document.createElement("div");
        alert.className= `alert alert-${type}`
        alert.textContent = message
        sil.appendChild(alert);

        setTimeout(function(){
                alert.remove();
        },1000)
        
}

todolist.addEventListener("click",deleteTodo);
function deleteTodo(e){
        if(e.target.className == "fa"){
                console.log(e.target.parentElement)
                e.target.parentElement.parentElement.remove();
                showAlert("success","Todo başarıyla silindi...");
        } 

}