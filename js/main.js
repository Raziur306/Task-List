window.addEventListener('load',()=> {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#task-input-box")
    const list_element = document.querySelector("#tasks")


//add new task
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
       const task = input.value
       if(!task){

        alert("Please add task to submit")
        return

       }else{
        const task_element = document.createElement("div")
        task_element.classList.add("task")
        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content")
        task_element.appendChild(task_content_el)

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type ="text"
        task_input_el.value = task
        task_input_el.setAttribute("readonly","readonly")
        task_content_el.appendChild(task_input_el)
        list_element.appendChild(task_element)



        //action button
        const action_element = document.createElement("div")
        action_element.id = "action"
        //1st btn
        const action_edit_btn_el = document.createElement("button")
        action_edit_btn_el.classList.add("edit")
        action_edit_btn_el.innerHTML = "Edit"
        //2nd btn
        const action_delete_btn_el = document.createElement("button")
        action_delete_btn_el.classList.add("delete")
        action_delete_btn_el.innerHTML  = "Delete"
        action_element.appendChild(action_edit_btn_el)
        action_element.appendChild(action_delete_btn_el)
        task_element.appendChild(action_element)

        input.value = ""

        //edit btn action
        action_edit_btn_el.addEventListener('click',()=>{

            if(action_edit_btn_el.innerText.toLowerCase()=="edit")
            {
                action_edit_btn_el.innerText = "save"
                task_input_el.removeAttribute("readonly")
                task_input_el.focus()
            }else{

                action_edit_btn_el.innerText = "Edit"
                task_input_el.setAttribute("readonly", "readonly")
            }

        })

        //delete btn action
        action_delete_btn_el.addEventListener('click', ()=>{
         list_element.removeChild(task_element)

        })
       }


    })

})