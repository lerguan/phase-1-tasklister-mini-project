document.addEventListener("DOMContentLoaded", () => {
  form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createTasks(e.target['new-task-description'].value)
    form.reset()
  })
})

function createTasks (task) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  li.textContent = `${task}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}