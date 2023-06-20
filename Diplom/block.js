function centerObjectInArea(object, area) {
    const objectWidth = object.offsetWidth;
    const objectHeight = object.offsetHeight;
    const areaWidth = area.offsetWidth;
    const areaHeight = area.offsetHeight;
    
    const leftOffset = (areaWidth - objectWidth) / 2;
    const topOffset = (areaHeight - objectHeight) / 2;
    
    object.style.left = `${leftOffset}px`;
    object.style.top = `${topOffset}px`;
    }
    
    function fitImageInArea(image, area) {
    const areaWidth = area.offsetWidth;
    const areaHeight = area.offsetHeight;
    const imageWidth = image.width;
    const imageHeight = image.height;
    
    if (imageWidth > areaWidth || imageHeight > areaHeight) {
    const widthRatio = areaWidth / imageWidth;
    const heightRatio = areaHeight / imageHeight;
    const scaleFactor = Math.min(widthRatio, heightRatio);
    
    const newWidth = Math.floor(imageWidth * scaleFactor);
    const newHeight = Math.floor(imageHeight * scaleFactor);
    
    image.style.width = `${newWidth}px`;
    image.style.height = `${newHeight}px`;
    } else {
    image.style.width = `${imageWidth}px`;
    image.style.height = `${imageHeight}px`;
    }
    }
    
    window.addEventListener('DOMContentLoaded', () => {
    const dragObjects = document.querySelectorAll('.dragObject');
    const dropAreas = document.querySelectorAll('.dropArea');
    const originalParent = new Map();
    
    dragObjects.forEach((object) => {
    object.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
    originalParent.set(event.target.id, event.target.parentNode);
    });
    });
    
    dropAreas.forEach((area) => {
    area.addEventListener('dragover', (event) => {
    event.preventDefault();
    });
    
    area.addEventListener('drop', (event) => {
    event.preventDefault();
    const draggedObjectId = event.dataTransfer.getData('text/plain');
    const draggedObject = document.getElementById(draggedObjectId);
    
    if (!area.hasChildNodes() || area.firstChild === draggedObject) {
    area.appendChild(draggedObject);
    fitImageInArea(draggedObject, area);
    centerObjectInArea(draggedObject, area);
    } else {
    const previousParent = originalParent.get(draggedObjectId);
    previousParent.appendChild(draggedObject);
    fitImageInArea(draggedObject, previousParent);
    centerObjectInArea(draggedObject, previousParent);
    }
    });
    });
    });