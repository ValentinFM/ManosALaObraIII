import { useState } from "react";
function TodoForm({addTask}) {
    const [text, setText] = useState("");
    const handleSumbit = (e) => {
        e.preventDefault();
        addTask(text);
        setText("");//esto nos limpia el input
    };

    return (

    <form className="input-section" onSubmit={handleSumbit}>
        <input type="text" 
        placeholder="Nueva tarea..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        />
        <button type ="submit" className="add-button">
            Agregar
            </button>
    </form>
    );
}

export default TodoForm;
