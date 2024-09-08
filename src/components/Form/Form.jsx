import { useState } from "react";

export const Form = ({todo, setTodo}) => {
    const [text, setText] = useState('');
    const addTodo = () => {
        
        if(text !== '' && text.trim(''))setTodo([
            {
                id: Math.random(),
                text: text,
                complete: false,
                isEdit: false
            }, ...todo
        ])
        setText('');        
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTodo();
        }
    };

    return (
        <div className="todoCont">
            <h2>Add new Todo</h2>
            <input
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                value={text}
                type="text"
                placeholder="New Todo"
            />
            <button onClick={addTodo} className="button2">Add</button>
        </div>
    );
};

