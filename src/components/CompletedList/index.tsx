import React from "react";
import { useRecoilValue } from "recoil";
import { completedListState } from "src/recoil/listState";

const CompletedList = () => {
    const completedList = useRecoilValue(completedListState);
    return (
        <div className="completed-list">
            <h2>Completed list</h2>
            <ul>
                {completedList.map((item: TodoItem, index: number) => {
                    return <li key={index}>{item.content}</li>;
                })}
            </ul>
        </div>
    );
};

export default CompletedList;
