var resetButton = document.getElementById('resetButton');
var ratingResult = document.getElementById('ratingResult');

resetButton.addEventListener('click', function() {
// Сбросить результат
dropAreas.forEach(function(dropArea) {
dropArea.classList.remove('correct');
dropArea.classList.remove('incorrect');
});

// Восстановить блоки в исходное состояние
dragContainers.forEach(function(container) {
var dragObjects = Array.from(container.querySelectorAll('.dragObject'));

// Удаление блоков из зон принятия
dropAreas.forEach(function(dropArea) {
while (dropArea.firstChild) {
container.appendChild(dropArea.firstChild);
}
});

// Сортировка блоков по исходному порядку
dragObjects.sort(function(a, b) {
return a.dataset.originalOrder - b.dataset.originalOrder;
});

// Восстановление исходного порядка блоков
dragObjects.forEach(function(object) {
container.appendChild(object);
});
});

// Сбросить оценку
ratingResult.innerHTML = '';
});



