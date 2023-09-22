import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const kalendar = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const timerEl = document.querySelector('.timer');
const btnStartEl = document.querySelector('[data-start]');
let countdownIntervalId;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Это время уже прошло, сынок!');
      btnStartEl.disabled = true;
    } else {
      btnStartEl.disabled = false;
      Notify.success('Отличный выбор!');

		 const dataEnd = selectedDates[0].getTime() - new Date().getTime());
		 daysEl.textContent = convertMs(dataEnd).days;
  hoursEl.textContent = convertMs(dataEnd).hours;
  minutesEl.textContent = convertMs(dataEnd).minutes;
  secondsEl.textContent = convertMs(dataEnd).seconds;
    }
  },
};
flatpickr(kalendar, options);

btnStartEl.addEventListener('click', startTimeer);

function startTimeer() {
  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}






// это написал ЖБТ

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const kalendar = document.querySelector('#datetime-picker');
// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');
// const timerEl = document.querySelector('.timer');
// const btnStartEl = document.querySelector('[data-start]');

// let countdownIntervalId; // Для хранения идентификатора интервала
// let selectedDates; // Добавляем переменную для хранения выбранной даты

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selected) { // Меняем название параметра для согласованности
//     selectedDates = selected; // Сохраняем выбранную дату

//     if (selected[0] < new Date()) {
//       Notify.failure('Это время уже прошло, сынок!');
//       btnStartEl.disabled = true;
//     } else {
//       btnStartEl.disabled = false;
//       Notify.success('Отличный выбор!');
//     }
//   },
// };
// flatpickr(kalendar, options);

// btnStartEl.addEventListener('click', startTimeer);

// function startTimeer() {
//   btnStartEl.disabled = true; // Блокируем кнопку "Старт"
//   const dataEnd = selectedDates[0].getTime() - new Date().getTime();

//   // Обновляем отображаемое время
//   updateTimerDisplay(dataEnd);

//   // Создаем интервал обратного отсчета
//   countdownIntervalId = setInterval(() => {
//     const newDataEnd = selectedDates[0].getTime() - new Date().getTime();
//     if (newDataEnd <= 0) {
//       // Если время истекло, останавливаем интервал
//       clearInterval(countdownIntervalId);
//       btnStartEl.disabled = false; // Разблокируем кнопку "Старт"
//       return;
//     }
//     updateTimerDisplay(newDataEnd);
//   }, 1000);
// }

// function updateTimerDisplay(ms) {
//   const { days, hours, minutes, seconds } = convertMs(ms);

//   daysEl.textContent = days;
//   hoursEl.textContent = hours;
//   minutesEl.textContent = minutes;
//   secondsEl.textContent = seconds;
// }

// function convertMs(ms) {
//   // Остаток времени в миллисекундах
//   const remainingTime = Math.max(ms, 0);

//   // Количество миллисекунд в секунде, минуте, часе и дне
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Вычисляем количество дней, часов, минут и секунд
//   const days = Math.floor(remainingTime / day);
//   const hours = Math.floor((remainingTime % day) / hour);
//   const minutes = Math.floor((remainingTime % hour) / minute);
//   const seconds = Math.floor((remainingTime % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// Конец Жбт


//* Это написал типа я 
// import flatpickr from "flatpickr";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import "flatpickr/dist/flatpickr.min.css";

// const dateInput = document.querySelector('#datetime-picker');
// const startBtn = document.querySelector('[data-start]');

// const daysEl = document.querySelector('[data-days]');
// const hoursEl = document.querySelector('[data-hours]');
// const minutesEl = document.querySelector('[data-minutes]');
// const secondsEl = document.querySelector('[data-seconds]');


// startBtn.setAttribute('disabled', true);
// let chosenDate = null;
// let timerId = null;


// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] < Date.now()) {
//         Notify.failure("Please choose a date in the future")
//         startBtn.setAttribute('disabled', true);
//         dateInput.style.borderColor = "red";
//     } else {
//         chosenDate = selectedDates[0];

//         startBtn.removeAttribute('disabled');
//         startBtn.addEventListener('click', timerOn);
//         dateInput.style.borderColor = "#569ff7";
//     }
//   },
// };


// flatpickr('#datetime-picker', options);

// function timerOn(){
//     timerId = setInterval(() => {
//         startBtn.setAttribute('disabled', true);
//         dateInput.setAttribute('disabled', true);

//         const currentTime = Date.now();
//         const deltaTime = chosenDate - currentTime;

//         if (deltaTime < 1000) {
//             clearInterval(timerId);
//             startBtn.removeAttribute('disabled');
//         }
 
//         const { days, hours, minutes, seconds } = convertMs(deltaTime);
//         updClockInterface({ days, hours, minutes, seconds });
        
//     }, 1000)
// }


// function updClockInterface({ days, hours, minutes, seconds }) {
//     daysEl.textContent = days;
//     hoursEl.textContent = hours;
//     minutesEl.textContent = minutes;
//     secondsEl.textContent = seconds;
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }


// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

//