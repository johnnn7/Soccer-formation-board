const players = document.querySelectorAll('.player');

players.forEach(player => {
    player.addEventListener('mousedown', (e) => {
        const playerElement = e.target;
        
        let shiftX = e.clientX - playerElement.getBoundingClientRect().left;
        let shiftY = e.clientY - playerElement.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            playerElement.style.left = pageX - shiftX + 'px';
            playerElement.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        playerElement.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        });

        playerElement.addEventListener('dragstart', () => false);  // Prevent default dragging
    });
});

