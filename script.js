// Открытие вкладок
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Обновляем форму в зависимости от выбранного типа задачи
  function updateTaskForm() {
    const taskType = document.getElementById('taskSelect').value;
    if (taskType === 'arithmetic') {
      document.getElementById('arithForm').style.display = 'block';
      document.getElementById('trigForm').style.display = 'none';
      document.getElementById('integralForm').style.display = 'none';
      document.getElementById('physicsForm').style.display = 'none';
    } else if (taskType === 'trig') {
      document.getElementById('arithForm').style.display = 'none';
      document.getElementById('trigForm').style.display = 'block';
      document.getElementById('integralForm').style.display = 'none';
      document.getElementById('physicsForm').style.display = 'none';
    } else if (taskType === 'integral') {
      document.getElementById('arithForm').style.display = 'none';
      document.getElementById('trigForm').style.display = 'none';
      document.getElementById('integralForm').style.display = 'block';
      document.getElementById('physicsForm').style.display = 'none';
    } else if (taskType === 'physics') {
      document.getElementById('arithForm').style.display = 'none';
      document.getElementById('trigForm').style.display = 'none';
      document.getElementById('integralForm').style.display = 'none';
      document.getElementById('physicsForm').style.display = 'block';
    }
  }
  
  // Арифметика
  function calculateArithmetic() {
    const input = document.getElementById('arithInput').value;
    try {
      const result = eval(input); // Используется eval для обработки арифметических выражений
      document.getElementById('arithResult').innerText = 'Результат: ' + result;
    } catch (e) {
      document.getElementById('arithResult').innerText = 'Ошибка в выражении';
    }
  }
  
  // Тригонометрия
  function calculateTrig() {
    const angle = parseFloat(document.getElementById('angle').value);
    if (isNaN(angle)) {
      document.getElementById('trigResult').innerText = 'Введите корректное значение угла';
      return;
    }
    const radian = angle * Math.PI / 180; // Переводим градусы в радианы
    const sin = Math.sin(radian);
    const cos = Math.cos(radian);
    const tan = Math.tan(radian);
    document.getElementById('trigResult').innerText = 
      `sin(${angle}) = ${sin.toFixed(3)}, cos(${angle}) = ${cos.toFixed(3)}, tan(${angle}) = ${tan.toFixed(3)}`;
  }
  
  // Интегралы
  function calculateIntegral() {
    const input = document.getElementById('integralInput').value;
    // Для примера, интеграл x^2 (тест)
    if (input === "x^2") {
      document.getElementById('integralResult').innerText = 'Интеграл от x^2: (x^3)/3 + C';
    } else {
      document.getElementById('integralResult').innerText = 'Функция не распознана для интеграла';
    }
  }
  
  // Физика (Пример расчета скорости по формуле v = u + at)
  function calculatePhysics() {
    const input = document.getElementById('physicsInput').value;
    const params = input.split(' ').map(Number);
    if (params.length === 3) {
      const [u, a, t] = params; // Начальная скорость, ускорение и время
      const v = u + a * t; // Формула для скорости
      document.getElementById('physicsResult').innerText = 'Скорость: ' + v.toFixed(2) + ' м/с';
    } else {
      document.getElementById('physicsResult').innerText = 'Введите 3 числа: начальная скорость, ускорение и время';
    }
  }
  