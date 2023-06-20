var dragContainers = document.querySelectorAll('.dragContainer');
var checkButton = document.getElementById('checkButton');
var resetButton = document.getElementById('resetButton');
var dropAreas = document.querySelectorAll('.dropArea');
var ratingResult = document.getElementById('ratingResult');

function preventDrop(event) {
event.preventDefault();
}

function updateRating(result) {
ratingResult.textContent = 'Оценка: ' + result;
}

function disableDraggable() {
var dragObjects = document.querySelectorAll('.dragObject');
dragObjects.forEach(function(dragObject) {
dragObject.draggable = false;
});
}

function enableDraggable() {
var dragObjects = document.querySelectorAll('.dragObject');
dragObjects.forEach(function(dragObject) {
dragObject.draggable = true;
});
}

dragContainers.forEach(function(container) {
var dragObjects = container.querySelectorAll('.dragObject');

dragObjects.forEach(function(dragObject) {
dragObject.addEventListener('dragstart', dragStart);
dragObject.addEventListener('dragover', preventDrop);
dragObject.addEventListener('drop', preventDrop);
});
});

dropAreas.forEach(function(dropArea) {
dropArea.addEventListener('dragover', preventDrop);
dropArea.addEventListener('drop', preventDrop);
});

function dragStart(event) {
event.dataTransfer.setData('text/plain', event.target.id);
}

function checkPlacement() {
    var correctCount = 0;
    var totalCount = 0;
    
    dropAreas.forEach(function (dropArea) {
    var dropAreaId = dropArea.id;
    var expectedObject = correctPlacements[dropAreaId];
    var actualObject = dropArea.firstChild;
    
    if (actualObject && actualObject.id === expectedObject) {
    dropArea.classList.add('correct');
    dropArea.classList.remove('incorrect');
    correctCount++;
    } else {
    dropArea.classList.add('incorrect');
    dropArea.classList.remove('correct');
    }
    
    totalCount++;
    });
    
    // Расчет процента правильности
    var percentageCorrect = (correctCount / totalCount) * 100;
    
    disableDraggable();
    updateRating(percentageCorrect.toFixed(2) + "%");
    }
    
  
    
    
    
    
    

// Обработчик события для кнопки "Начать сначала"
resetButton.addEventListener('click', function() {
enableDraggable(); // Разрешаем перемещение блоков
resetPlacement(); // Сбрасываем размещение блоков
ratingResult.textContent = ''; // Сбрасываем оценку
});

// Обработчик события для кнопки "Проверить"
checkButton.addEventListener('click', function() {
checkPlacement(); // Проверяем размещение блоков
disableDraggable(); // Запрещаем перемещение блоков после проверки
});