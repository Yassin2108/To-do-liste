let todos =JSON.parse(localStorage.getItem('todo')) || [];

renderTodo();

function renderTodo () {
  let html = '';
  todos.forEach(item => {
    html += `
    <div>
      <ul>
        <li id= "${item.id}">
          <input type="checkbox"
            onchange="toggleDone('${item.id}', this.checked)"
            ${item.done ? 'checked' : ''}
          > ${item.content}
          <button onclick = "
            deleteTodo('${item.id}');
          ">delete</button>
        </li>
      </ul>
    </div>
  `;
  });
  document.getElementById('Liste').innerHTML = html;
}

function toggleDone (itemId, isChecked) {
  const todo = todos.find(t => t.id === itemId);
  if (todo) {
    todo.done = isChecked;
    saveToStorage();
    renderTodo();
  }
}


function deleteTodo (itemId) {
  todos = todos.filter(todo => {
    return todo.id !== itemId;
  });
  renderTodo();
  saveToStorage();
  
}

function addTodo () {
  const item = {
    content: document.getElementById('taskInput').value,
    id: crypto.randomUUID(),
    done: false
  };
  todos.push(item);
  saveToStorage();
  renderTodo();
}

function saveToStorage () {
  localStorage.setItem('todo',JSON.stringify(todos));
}