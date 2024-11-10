function displayPastMemories(memories) {
    const mainContent = document.querySelector('.main');
    mainContent.innerHTML = `
        <div class='title-section'>
            <div class='title'>
                <p class='title-text'>Past Memories</p>
            </div>
            <div class='title-div'></div>
        </div>

        <div class='body-section'>
            <div class='body'>
                <p class='body-text'>Revisit some of the old daily memories. Click on an image for a blast from the past!</p>
            </div>
        </div>

        <div class='past-mems-display'></div>
    `;

    const currentDate = new Date();
    let htmlContent = '';

    memories.forEach((memory) => {
        if (memory.date < currentDate) {
            htmlContent += `
                <div class='past-mems-box' data-id='${memory.id}'>
                    <img class='past-mems-image' src='images/${memory.memPhoto}'>
                    <div class='past-mems-text-box'>
                        <p class='past-mems-text'>
                            ${memory.date.toDateString()}<br>
                            ${memory.memTitle}
                        </p>
                    </div>
                </div>
            `;
        }
    });

    document.querySelector('.past-mems-display').innerHTML = htmlContent;

    // Add click event listeners to each memory box
    document.querySelectorAll('.past-mems-box').forEach(box => {
        box.addEventListener('click', () => {
            const memoryId = box.getAttribute('data-id');
            showMemoryDetail(memoryId);
        });
    });
}

function showMemoryDetail(memoryId) {
    let chosenMem = null;

    originalMemList.forEach((memory) => {
        if (memory.id === Number(memoryId)) {
            chosenMem = memory;
        }
    });

    if (chosenMem) {
        const mainContent = document.querySelector('.main');
        mainContent.innerHTML = `
            <div class='title-section'>
                <div class='title'>
                    <p class='title-text'>Past Memory</p>
                </div>
                <div class='title-div'></div>
            </div>

            <div class='body-section'>
                <div class='body'>
                    <p class='body-text'>Look at you going back in time! How lucky! Never miss a daily memory again!</p>
                    <a class = 'back-button' href = 'past-mems.html'>Click here to go back to the past memories page.</a>
                </div>
            </div>

            <div class='memory-section'>
                <div class='picture-section'>
                    <div class='border-box'>
                        <div class='memory-box'>
                            <img class='memory-image' src='images/${chosenMem.memPhoto}' alt='Memory Image'>
                        </div>
                    </div>
                </div>
            </div>

            <div class='title-section'>
                <div class='title'>
                    <p class='title-text'>Quiz Yourself!</p>
                </div>
                <div class='title-div'></div>
            </div>

            <div class='question-section'>
                <div class='question-display'></div>
            </div>
        `;

        chosenMem.memQuestions.forEach((question, questionIndex) => {
            const mainIndex = questionIndex;
            document.querySelector('.question-display').innerHTML += `
                <div class="single-question-display">
                    <div class="body-section">
                        <div class="body">
                            <p class="question-text">
                                ${question}
                            </p>
                        </div>
                    </div>
                    <div class="question-options-section-${mainIndex} question-options-section-css"></div>
                </div>
            `;

            const optionsContainer = document.querySelector(`.question-options-section-${mainIndex}`);
            
            chosenMem.memAnswerOptions[mainIndex].forEach((option, optionIndex) => {
                optionsContainer.innerHTML += `
                    <button class="question-button" data-question-index="${mainIndex}" data-option-index="${optionIndex}">
                        ${option}
                    </button>
                `;
            });
        });

        // Add event listeners to buttons after they are created
        document.querySelectorAll('.question-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const questionIndex = event.target.getAttribute('data-question-index');
                const selectedOption = event.target.innerText;

                if (selectedOption === chosenMem.memCorrectAnswers[questionIndex]) {
                    event.target.style.backgroundColor = 'green';
                } else {
                    event.target.style.backgroundColor = 'red';
                }
            });
        });
    }
}

// Initialize the past memories view
displayPastMemories(originalMemList);