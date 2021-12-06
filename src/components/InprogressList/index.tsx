import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { completedListState, inprogressListState } from "src/recoil/listState";

const InprogressList = () => {
    const inprogressList = useRecoilValue(inprogressListState);
    const setCompleted = useSetRecoilState(completedListState);

    const handleClick = (id: number) => {
        setCompleted(id);
    };
    
    return (
        <div className="inprogress-list">
            <h2>Inprogress list</h2>
            <ul>
                {inprogressList.map((item: TodoItem, index: number) => {
                    return (
                        <li key={index}>
                            {item.content}
                            <button
                                type="button"
                                onClick={() => handleClick(item.id)}
                            >
                                Completed
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default InprogressList;
