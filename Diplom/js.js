var dragContainers = document.querySelectorAll('.dragContainer');
var checkButton = document.getElementById('checkButton');

dragContainers.forEach(function(container) {
var dragObjects = container.querySelectorAll('.dragObject');

dragObjects.forEach(function(dragObject) {
dragObject.addEventListener('dragstart', dragStart);
dragObject.addEventListener('dragover', allowDrop);
dragObject.addEventListener('drop', drop);
});
});

var dropAreas = document.querySelectorAll('.dropArea');
dropAreas.forEach(function(dropArea) {
dropArea.addEventListener('dragover', allowDrop);
dropArea.addEventListener('drop', drop);
});

var correctPlacements = {
dropArea1: 'dragObject1',
dropArea2: 'dragObject2',
dropArea3: 'dragObject3',
dropArea4: 'dragObject4',
dropArea5: 'dragObject5',
dropArea6: 'dragObject6'
};


function dragStart(event) {
event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var draggedObject = document.getElementById(data);
    var dropArea = event.target;
    
    
    if (dropArea.classList.contains('dropArea')) {
    // Получаем размеры зоны принятия
    var dropWidth = dropArea.offsetWidth;
    var dropHeight = dropArea.offsetHeight;
    
    // Устанавливаем размеры блока, немного меньше размеров зоны
    var blockWidth = dropWidth * 1; // например, 90% ширины зоны
    var blockHeight = dropHeight * 1; // например, 90% высоты зоны
    draggedObject.style.width = blockWidth + 'px';
    draggedObject.style.height = blockHeight + 'px';
    
    // Удаляем блок из его предыдущей зоны, если есть
    var previousDropArea = draggedObject.parentElement;
    if (previousDropArea.classList.contains('dropArea')) {
    previousDropArea.removeChild(draggedObject);
    }
    
    // Перемещаем блок в зону принятия
    dropArea.appendChild(draggedObject);
    
    // Применяем стили для центрирования блока в зоне принятия
    dropArea.style.display = 'flex';
    dropArea.style.justifyContent = 'center';
    dropArea.style.alignItems = 'center';
    } else if (dropArea.classList.contains('dragObject')) {
    var draggedObjectContainer = draggedObject.parentNode;
    var dropAreaContainer = dropArea.parentNode;
    var draggedIndex = Array.from(draggedObjectContainer.children).indexOf(draggedObject);
    var dropIndex = Array.from(dropAreaContainer.children).indexOf(dropArea);
    
    if (draggedIndex < dropIndex) {
    dropAreaContainer.insertBefore(draggedObject, dropArea.nextSibling);
    } else {
    dropAreaContainer.insertBefore(draggedObject, dropArea);
    }
    }
    }

    
    
    
    
  
    
    
    
    
    
    
    
   
    
    
    
    

function checkPlacement() {
dropAreas.forEach(function(dropArea) {
var dropAreaId = dropArea.id;
var expectedObject = correctPlacements[dropAreaId];
var actualObject = dropArea.firstChild;

if (actualObject && actualObject.id === expectedObject) {
dropArea.classList.add('correct');
dropArea.classList.remove('incorrect');
} else {
dropArea.classList.add('incorrect');
dropArea.classList.remove('correct');
}
});
}


checkButton.addEventListener('click', checkPlacement);