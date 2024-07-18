// src/component/Calendar.js
import React from 'react';

const Calendar = ({ setSelectedDate, completedDates, goBack, selectedMonth }) => {
  const days = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัส', 'วันศุกร์', 'วันเสาร์'];

  const [monthName, year] = selectedMonth.split(' ');
  const monthNames = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  const monthIndex = monthNames.indexOf(monthName);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();

  const dates = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    dates.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] bg-gray-200 p-4">
      <div className="bg-purple-100 rounded-lg shadow p-4 w-full max-w-[60%] ">
        <button onClick={goBack} className="bg-purple-600 text-white py-2 px-4 rounded-full mb-4">
          ย้อนกลับ
        </button>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div key={index} className="text-center font-medium">{day}</div>
          ))}
          {dates.map((date, index) => (
            <button
              key={index}
              className={`py-2 rounded-full ${date && completedDates.includes(date) ? 'bg-purple-900 text-white' : 'bg-white text-black'}`}
              onClick={() => date && setSelectedDate(date)}
              disabled={!date}
            >
              {date}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
