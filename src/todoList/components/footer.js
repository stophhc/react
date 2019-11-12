import React from 'react';


export default function(props){

    let {
        clearCompleted,
        showClearButton
    } = props;

    return (
        <footer className="footer">
      <span className="todo-count">
        <strong> 8 </strong>
        <span>item left</span>
      </span>
            <ul className="filters">
                <li>
                    <a
                        className="selected"
                    >All</a>

                </li>
                <li>
                    <a
                        className="selected"
                    >Active</a>

                </li>
                <li>
                    <a
                    >Completed</a>

                </li>
            </ul>
            {/* 清除完成按钮 */}
            {showClearButton && (
                <button
                    className="clear-completed"
                    onClick={clearCompleted}
                >
                    clear all completed
                </button>
            )}

        </footer>
    )
}
