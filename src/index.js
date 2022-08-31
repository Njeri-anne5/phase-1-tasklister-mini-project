document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()

    buildToDo(e.target.new_todo.value)
    form.reset()//method form reset
  })
});

function buildToDo(todo){
  let p = document.createElement("p")//creates p in the DOM
  let button = document.createElemnt("button")//Creates button
  button.addEventListener("click")//
  button.textContent = "x"//text in the button
  p.textContent = `${todo}  ` //
  p.appendChild(button)
  console.log("p")
  document.querySelector("todo_container").appendChild(p)

}