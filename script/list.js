let todos = [];



function renderTodo () {
  let html = '';
  todos.forEach(item => {
    html += `
    <div>
      <ul>
        <li id= "${item.id}">
          <input type="checkbox"> ${item.content}
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


function deleteTodo (itemId) {
  todos = todos.filter(todo => {
    return todo.id !== itemId;
  });
  renderTodo();

  
}

function addTodo () {
  const item = {
    content: document.getElementById('taskInput').value,
    id: crypto.randomUUID()
  };
  todos.push(item);

  renderTodo();
}