function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.
// 1

function createDaysOfTheMonth() {
  const calendar = document.querySelector("#days");
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    li = document.createElement("li");
    li.innerText = dezDaysList[index];
    calendar.appendChild(li);
    li.classList = "day";
    if (li.innerText == 24 || li.innerText == 25 || li.innerText == 31) {
      li.classList.add("holiday");
    };
    if (li.innerText == 4 || li.innerText == 11 || li.innerText == 18 || li.innerText == 25) {
      li.classList.add("friday");
    };
  };

};

createDaysOfTheMonth();

// 2

function createButtonHoliday(texto) {
  containerBotao = document.querySelector(".buttons-container");
  botao = document.createElement("button");
  containerBotao.appendChild(botao);
  botao.id = "btn-holiday";
  botao.innerText = texto;
};

createButtonHoliday("Feriados");

// 3

let buttonHol = document.querySelector("#btn-holiday");
buttonHol.addEventListener('click', colorButtonHol);

function colorButtonHol() {
  holliday = document.querySelectorAll(".holiday");
  for (let index = 0; index < holliday.length; index += 1) {
    if(holliday[index].style.backgroundColor == "lightgreen") {
      holliday[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holliday[index].style.backgroundColor = "lightGreen";
    };
  };
};

// 4

function createButtonFriday(texto) {
  containerBotao = document.querySelector(".buttons-container");
  botao = document.createElement("button");
  containerBotao.appendChild(botao);
  botao.id = "btn-friday";
  botao.innerText = texto;
};

createButtonFriday("Sexta-feira");

// 5

function colorButtonFri() {
  holliday = document.querySelectorAll(".friday");
  for (let index = 0; index < holliday.length; index += 1) {
    if(holliday[index].style.backgroundColor == "yellow") {
      holliday[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      holliday[index].style.backgroundColor = "yellow";
    };
  };
};

let buttonFri = document.querySelector("#btn-friday");
buttonFri.addEventListener('click', colorButtonFri);

// 6

function zoomOnDay(event) {
  event.target.style.fontSize = "30px";
}

function zoomOffDay(event) {
  event.target.style.fontSize = "20px";
}

let dias = document.querySelectorAll(".day");
console.log(dias);
for (let index = 0; index < dias.length; index += 1) {
  dias[index].addEventListener("mouseenter", zoomOnDay);
  dias[index].addEventListener("mouseleave", zoomOffDay);
}

//  7

let myTasks = document.querySelector(".my-tasks");

function addTask (tarefa) {
  let task = document.createElement("span");
  myTasks.appendChild(task);
  task.innerText = tarefa;
  addTaskColor(task);
};

addTask("cozinhar");

// 8

function addTaskColor (tarefa) {
  let color = document.createElement("div");
  myTasks.appendChild(color);
  color.style.backgroundColor = "lightblue";
};

// 9