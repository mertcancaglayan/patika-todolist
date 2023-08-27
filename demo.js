
let ulDOM = document.querySelector("#list")

function newElement() {
    let taskDOM = document.querySelector("#task");
    let newTask = taskDOM.value;

    if (newTask.trim() === "") {
        $(".toast.error").toast("show");
        return
    }

    let newLi = document.createElement('li')
    newLi.innerHTML = `
        ${newTask} 
        <button
          class="close mt-2 mr-3 pt-0"
          onclick="deleteElement(this)"
        >
            <span aria-hidden="true">&times;</span>
          </button>
        ` 

    ulDOM.appendChild(newLi)
    $(".toast.success").toast("show");

    taskDOM.value ="";
}

function deleteElement(self) {
    let li = self.parentElement;
    ulDOM.removeChild(li);
}

