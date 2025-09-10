function App() {
  return (
    <>
      <div className="container">
        <h1>LISTA DE TAREAS DE VALENTIN</h1>
        <div className="input-section">
          <input type="text" placeholder="Nueva tarea..." />
          <button className="add-button">Agregar</button>
        </div>
        <ul className="task-list">
          <li>
            <input type="checkbox" />
            <span>Tarea N</span>
            <button className="delete-button">🗑️</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>Tarea N-1</span>
            <button className="delete-button">🗑️</button>
          </li>
          <li>
            <input type="checkbox" checked readOnly />
            <span className="completed">Tarea completada N-2</span>
            <button className="delete-button">🗑️</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>Tarea K</span>
            <button className="delete-button">🗑️</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>Tarea 2</span>
            <button className="delete-button">🗑️</button>
          </li>
          <li>
            <input type="checkbox" checked readOnly />
            <span className="completed">Tarea Completada 1</span>
            <button className="delete-button">🗑️</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
