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
    } else {
    const previousParent = originalParent.get(draggedObjectId);
    previousParent.appendChild(draggedObject);
    }
    });
    });
    });
    