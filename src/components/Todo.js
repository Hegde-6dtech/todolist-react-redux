import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, removeTodo } from "../actions";
import "./todo.css";

function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h1>Add Todos</h1>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
          <button
            className="btn-add"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          >
            Add
          </button>
        </div>
        <div className="showItems">
          {list.map((ele) => {
            return (
              <div className="eachItems" key={ele.id}>
                <h3>{ele.data}</h3>
                <div className="todo-btn">
                  <button
                    className="btn-del"
                    onClick={() => dispatch(delTodo(ele.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="checkList">
          <button
            className="btn effect04"
            data-sm-link-text="remove all"
            onClick={() => dispatch(removeTodo())}
          >
            <span>Check List</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
