var dragContainers = document.querySelectorAll('.dragContainer');
var resetButton = document.getElementById('resetButton');
var dragObjects = document.querySelectorAll('.dragObject');
var initialPositions = {};

// Сохраняем исходные координаты и размеры блоков
dragObjects.forEach(function(dragObject) {
initialPositions[dragObject.id] = {
top: dragObject.offsetTop,
left: dragObject.offsetLeft,
width: dragObject.offsetWidth,
height: dragObject.offsetHeight
};
});

// Восстанавливаем исходные координаты и размеры блоков
function resetBlocks() {
dragObjects.forEach(function(dragObject) {
var initialPosition = initialPositions[dragObject.id];
dragObject.style.top = initialPosition.top + 'px';
dragObject.style.left = initialPosition.left + 'px';
dragObject.style.width = initialPosition.width + 'px';
dragObject.style.height = initialPosition.height + 'px';
});
}

// Обработчик кнопки "Начать сначала"
resetButton.addEventListener('click', function() {
resetBlocks();
});