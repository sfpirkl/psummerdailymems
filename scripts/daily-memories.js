// Copy of the original list to modify
let memList = [...originalMemList];

// Function to get the current date as a unique key
function getCurrentDateKey() {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`;
}

// Function to display the memory based on the current date
function displayMemoryForToday() {
    const todayKey = getCurrentDateKey();
    let selectedMemoryIndex = localStorage.getItem(todayKey);

    if (selectedMemoryIndex === null) {
        // If no memory has been selected today, pick one randomly
        selectedMemoryIndex = Math.floor(Math.random() * memList.length);
        localStorage.setItem(todayKey, selectedMemoryIndex); // Store the index
    } else {
        selectedMemoryIndex = parseInt(selectedMemoryIndex, 10); // Retrieve the index
    }

    // Get the selected memory
    const selectedMemory = memList[selectedMemoryIndex];

    // Call the function to display the image and questions
    displayImageAndQuestions([selectedMemory]);
}

// Function to display image and questions
function displayImageAndQuestions(memories) {
    // Clear previous displays
    document.querySelector('.memory-box').innerHTML = '';
    document.querySelector('.question-display').innerHTML = '';

    memories.forEach((memory) => {
        // Display the memory image
        document.querySelector('.memory-box').innerHTML += `
            <img class='memory-image' src="images/${memory.memPhoto}" alt="${memory.memTitle}">
        `;

        // Display the questions
        memory.memQuestions.forEach((question, questionIndex) => {
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
            
            memory.memAnswerOptions[mainIndex].forEach((option, optionIndex) => {
                const innerIndex = optionIndex;
                optionsContainer.innerHTML += `
                    <button class="question-button" data-question-index="${mainIndex}" data-option-index="${innerIndex}">
                        ${option}
                    </button>
                `;
            });
        });

        // Add event listeners to buttons after they are created
        document.querySelectorAll('.question-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const questionIndex = event.target.getAttribute('data-question-index');
                const optionIndex = event.target.getAttribute('data-option-index');
                const selectedOption = event.target.innerText;

                if (selectedOption === memory.memCorrectAnswers[questionIndex]) {
                    event.target.style.backgroundColor = 'green';
                } else {
                    event.target.style.backgroundColor = 'red';
                }
            });
        });
    });
}

// Initial call to display memory based on the date
displayMemoryForToday();

// function displayImageAndQuestions(memories) {
//     memories.forEach((memory) => {
//         let currentDate = new Date();
//         currentDate.setHours(0, 0, 0, 0);

//         if (currentDate.toDateString() === memory.date.toDateString()) {
//             document.querySelector('.memory-box').innerHTML += `
//                 <img class = 'memory-image' src="images/${memory.memPhoto}" alt="${memory.memTitle}">
//             `;

//             memory.memQuestions.forEach((question, questionIndex) => {
//                 const mainIndex = questionIndex;
//                 document.querySelector('.question-display').innerHTML += `
//                     <div class="single-question-display">
//                         <div class="body-section">
//                             <div class="body">
//                                 <p class="question-text">
//                                     ${question}
//                                 </p>
//                             </div>
//                         </div>
//                         <div class="question-options-section-${mainIndex} question-options-section-css"></div>
//                     </div>
//                 `;

//                 const optionsContainer = document.querySelector(`.question-options-section-${mainIndex}`);
                
//                 memory.memAnswerOptions[mainIndex].forEach((option, optionIndex) => {
//                     const innerIndex = optionIndex;
//                     optionsContainer.innerHTML += `
//                         <button class="question-button" data-question-index="${mainIndex}" data-option-index="${innerIndex}">
//                             ${option}
//                         </button>
//                     `;
//                 });
//             });

//             // Add event listeners to buttons after they are created
//             document.querySelectorAll('.question-button').forEach(button => {
//                 button.addEventListener('click', (event) => {
//                     const questionIndex = event.target.getAttribute('data-question-index');
//                     const optionIndex = event.target.getAttribute('data-option-index');
//                     const selectedOption = event.target.innerText;

//                     if (selectedOption === memory.memCorrectAnswers[questionIndex]) {
//                         event.target.style.backgroundColor = 'green';
//                     } else {
//                         event.target.style.backgroundColor = 'red';
//                     }
//                 });
//             });
//         }
//     });
// }

// displayImageAndQuestions(memList);
