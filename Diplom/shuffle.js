function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    
    return array;
    }
    
    function shuffleObjectsInContainer(container) {
    var dragObjects = Array.from(container.querySelectorAll('.dragObject'));
    var shuffledObjects = shuffleArray(dragObjects);
    
    container.innerHTML = '';
    
    shuffledObjects.forEach(function(object) {
    container.appendChild(object);
    });
    }
    
    window.addEventListener('load', function() {
    var dragContainers = document.querySelectorAll('.dragContainer');
    
    dragContainers.forEach(function(container) {
    shuffleObjectsInContainer(container);
    });
    });