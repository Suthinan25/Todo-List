// src/component/TodoList.js
import React, { useState } from 'react';

const initialTodos = [
  'เขียนเขียนโปรแกรม 2 - 3 ชั่วโมง',
  'เรียนภาษาอังกฤษ 1 - 2 ชั่วโมง',
  'ออกกำลังกาย',
  'อ่านหนังสือ'
];

const TodoList = ({ selectedDate, goBack, markComplete, selectedMonth }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [completed, setCompleted] = useState([]);
  const [newTask, setNewTask] = useState('');

  const toggleComplete = (index) => {
    setCompleted(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTodos([...todos, newTask]);
      setNewTask('');
    }
  };

  const saveTasks = () => {
    if (todos.length === completed.length) {
      markComplete(selectedDate, selectedMonth);
      goBack();
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-200 p-4">
      <div className="bg-purple-200 rounded-lg shadow p-4 w-3/5 h-full">
        <div className="flex justify-between mb-4">
          <button onClick={goBack} className="bg-purple-600 text-white py-2 px-4 rounded-full">
            ย้อนกลับ
          </button>
          <button onClick={saveTasks} className="bg-purple-600 text-white py-2 px-4 rounded-full">
            บันทึก
          </button>
        </div>
        <h2 className="text-lg font-bold mb-4 bg-purple-300 py-2 px-4 text-center rounded" style={{ fontSize: '20px' }}>
          รายการที่ต้องทำ
        </h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a New Task"
            className="flex-1 py-2 px-4 rounded-l text-black"
          />
          <button onClick={addTask} className="bg-purple-600 text-white py-2 px-4 rounded-r">
            Add
          </button>
        </div>
        <ul className="flex flex-col justify-between h-full">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-4 bg-purple-300 py-2 px-4 rounded" style={{ fontSize: '20px' }}>
              <span className="flex-1">{index + 1}. {todo}</span>
              <input
                type="checkbox"
                checked={completed.includes(index)}
                onChange={() => toggleComplete(index)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
