import React from 'react';
import { useState } from 'react';

const Todo = () => {

    const [todos, setTodos] = useState([
        {
            id:1,
            title: "Finish React Series",
            isComplete: false,
        },
        {
            id:2,
            title: "Finish Laravel Series",
            isComplete: false,
        },
        {
            id:3,
            title: "Finish Scss Series",
            isComplete: false,
        }
    ])

    return(
        <div className="todo_container">
            <h1 className="text_center">Todo</h1>
             <div className="hr_line_grey"></div>
            <div className="todo_list">
                <input class="input_todo" type="text" placeholder="What do you need to do?"/>

                <ul>
                    {todos.map(todo =>{
                        return(
                            <li key={todo.id}>
                                <div className="ul_left_block">
                                    <label class="checkbox"  >
                                        <input type="checkbox"/>
                                            {todo.title}
                                        </label>
                                </div>
                                <div className="ul_right_block">
                                    close
                                </div>
                        </li>
                        )
                    })}
              
       
                </ul>
             <div className="hr_line_grey"></div>
                <div className="button_group">
                    <button class="button is-small">Small</button>
                    <p>Items remaing: 4</p>
                </div>
             <div className="hr_line_grey"></div>
            </div>
            <div className="footer_button">
                <div className="wrap_btn">
                    <button class="button is-small">all</button>
                    <button class="button is-small">Small</button>
                    <button class="button is-small">Small</button>
                </div>
                <button class="button is-small">Small</button>
            </div>
        </div>
    )
}

export default Todo;