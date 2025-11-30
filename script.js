function resizeImageMap() {
    const img = document.getElementById('imgImage');
    const map = document.getElementById('mapKhmap');
    const originalWidth = parseInt(img.getAttribute('data-original-width'), 10);
    const currentWidth = img.clientWidth;
    const scaleFactor = currentWidth / originalWidth;
    const areas = map.getElementsByTagName('area');
    for (let area of areas) {
        const originalCoordsStr = area.getAttribute('data-coords');
        if (originalCoordsStr) {
            const originalCoords = originalCoordsStr.split(',').map(coord => parseInt(coord.trim(), 10));
            const newCoords = [];
            for (let coord of originalCoords) {
                const newCoord = Math.round(coord * scaleFactor);
                newCoords.push(newCoord);
            }
            area.setAttribute('coords', newCoords.join(','));
        }
    }
}
window.addEventListener('load', resizeImageMap);
window.addEventListener('resize', resizeImageMap);