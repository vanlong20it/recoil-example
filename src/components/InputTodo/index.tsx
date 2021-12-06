import React, { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { newListState } from "src/recoil/listState";

const InputTodo = () => {
    const [text, setText] = useState<string>("");
    const addNewTodo = useSetRecoilState(newListState);

    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const handleAddNewTodo = () => {
        if (!text) {
            return;
        }
        addNewTodo(text);
        setText("");
    };
    return (
        <div>
            <input
                type="text"
                name="todo"
                id="todo"
                value={text}
                onChange={handleChangeTodo}
            />
            <button type="button" onClick={handleAddNewTodo}>
                Add
            </button>
        </div>
    );
};

export default InputTodo;
