import { useState } from "react";
import { BiEdit } from "react-icons/bi";

export const EditTodo = ({ text, id, changeText }) => {
    const [edit, setEdit] = useState(text);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            changeText(edit, id); 
        }
    };

    return (
        <div>
            <input
                onChange={(e) => setEdit(e.target.value)}
                onKeyDown={handleKeyDown}
                value={edit}
                type="text"
            />
            <button className="editTodo" onClick={() => changeText(edit, id)}>
            <BiEdit height={50} width={40} color="white" />
            </button>
        </div>
    );
};