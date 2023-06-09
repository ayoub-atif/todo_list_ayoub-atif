function createTaskCard(text, columnId) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p>${text}</p>
      <div>
        <select onchange="changeColumn(this)">
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button onclick="deleteTask(this)">Supprimer</button>
        <button onclick="editTask(this)">Modifier</button>
      </div>
    `;
    const column = document.getElementById(columnId);
    column.appendChild(card);
  }

  // Fonction pour ajouter une nouvelle tâche dans la colonne Todo
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTaskCard(taskText, "todoColumn");
      taskInput.value = "";
    }
  }

  // Fonction pour supprimer une tâche
  function deleteTask(button) {
    const card = button.parentNode.parentNode;
    card.parentNode.removeChild(card);
  }

  // Fonction pour modifier une tâche
  function editTask(button) {
    const card = button.parentNode.parentNode;
    const taskText = card.querySelector("p").textContent;
    const newText = prompt("Modifier la tâche :", taskText);
    if (newText !== null) {
      card.querySelector("p").textContent = newText;
    }
  }

  // Fonction pour changer la colonne d'une tâche
  function changeColumn(select) {
    const card = select.parentNode.parentNode;
    const columnId = select.value + "Column";
    const column = document.getElementById(columnId);
    column.appendChild(card);
  }

  // Ajouter un gestionnaire d'événement au bouton d'ajout
  document.getElementById("addButton").addEventListener("click", addTask);