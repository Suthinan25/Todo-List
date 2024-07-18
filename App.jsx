// src/App.js
import React, { useState } from 'react';
import Calendar from './component/Calendar';
import TodoList from './component/TodoList';

const months = [
  'สิงหาคม 2024', 'กันยายน 2024', 'ตุลาคม 2024', 'พฤศจิกายน 2024', 'ธันวาคม 2024',
  'มกราคม 2025', 'กุมภาพันธ์ 2025', 'มีนาคม 2025', 'เมษายน 2025', 'พฤษภาคม 2025',
  'มิถุนายน 2025', 'กรกฎาคม 2025', 'สิงหาคม 2025'
];

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [completedDates, setCompletedDates] = useState({});

  const markComplete = (date, month) => {
    setCompletedDates(prev => ({
      ...prev,
      [month]: prev[month] ? [...prev[month], date] : [date]
    }));
  };

  const goBackToMonths = () => {
    setSelectedDate(null);
    setSelectedMonth(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h1 className="text-2xl mb-6">โปรแกรม TodoList</h1>
      {!selectedMonth ? (
        <div className="grid grid-cols-2 gap-4 w-full max-w-[50%]">
          {months.map((month, index) => (
            <button
              key={index}
              className="bg-pink-600 text-white py-4 rounded-lg shadow"
              onClick={() => setSelectedMonth(month)}
            >
              {month}
            </button>
          ))}
        </div>
      ) : !selectedDate ? (
        <Calendar setSelectedDate={setSelectedDate} completedDates={completedDates[selectedMonth] || []} goBack={goBackToMonths} selectedMonth={selectedMonth} />
      ) : (
        <TodoList selectedDate={selectedDate} goBack={() => setSelectedDate(null)} markComplete={markComplete} selectedMonth={selectedMonth} />
      )}
    </div>
  );
};

export default App;
