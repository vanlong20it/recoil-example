import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { inprogressListState, newListState } from "src/recoil/listState";

const NewList = () => {
    const newList = useRecoilValue(newListState);
    const setInprogress = useSetRecoilState(inprogressListState);

    const handleClick = (id: number) => {
        setInprogress(id);
    };
    useEffect(() => {
        console.log('newList: ', newList);
    }, [newList]);

    return (
        <div className="new-list">
            <h2>New</h2>
            <ul>
                {newList.map((item: TodoItem, index: number) => {
                    return (
                        <li key={index}>
                            {item.content}
                            <button
                                type="button"
                                onClick={() => handleClick(item.id)}
                            >
                                In-Progress
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NewList;
