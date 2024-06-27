function displayPastMemories(memories) {
    const currentDate = new Date();

    memories.forEach((memory) => {

        if(memory.date < currentDate) {
            document.querySelector('.past-mems-display').innerHTML += `
                <div class = 'past-mems-box'>
                    <img class = 'past-mems-image' src = 'images/${memory.memPhoto}'>
                    <div class = 'past-mems-text-box'>
                        <p class = 'past-mems-text'>
                            ${memory.date.toDateString()}<br>
                            ${memory.memTitle}
                        </p>
                    </div>
                </div>
            `;
        }
    });
}

displayPastMemories(memList);