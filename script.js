// const dropdownHome = document.querySelector('#home .drop-down');
// const listHome = document.querySelector('#home .list');
// const selectedHome = document.querySelector('#home .selected');

// dropdownHome.addEventListener('click', () => {
//     listHome.classList.add('show');
//     // listHome.classList.toggle('show');
// });

// listHome.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.text');
//     selectedHome.innerHTML = text.innerHTML;
// });

const wrapperHome = document.querySelector('#home .wrapper');
const listHome = document.querySelector('#home .list');
const selectedHome = document.querySelector('#home .selected');

wrapperHome.addEventListener('click', () => {
    // listHome.classList.add(wrapper)
    listHome.classList.toggle('show');
});

// listHome.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.text');
//     selectedHome.innerHTML = text.innerHTML;
// });


const wrapperFeatures = document.querySelector('#features .wrapper');
const listFeatures = document.querySelector('#features .list');
const selectedFeatures = document.querySelector('#features .selected');

wrapperFeatures.addEventListener('click', () => {
    // listFeatures.classList.add('show');
    listFeatures.classList.toggle('show');
});

// document.getElementById('convertButton').addEventListener('click', function(){
//     const checkboxes=document.querySelectorAll('.item input[type="checkbox"]:checked');
//     const selectedLanguages=[];
//     checkboxes.forEach(function(checkbox){
//         selectedLanguages.push(checkbox.value);
//     });
//     console.log(selectedLanguages);
// })

// listFeatures.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.text');
//     selectedFeatures.innerHTML = text.innerHTML;
// });



// const dropdownCoreFeatures = document.querySelector('#core-features .drop-down');
// const listCoreFeatures = document.querySelector('#core-features .list');
// const selectedCoreFeatures = document.querySelector('#core-features .selected');

// dropdownCoreFeatures.addEventListener('click', () => {
//     listCoreFeatures.classList.toggle('show');
// });

// listCoreFeatures.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.text');
//     selectedCoreFeatures.innerHTML = text.innerHTML;
// });

// const wrapperHome = document.querySelector('#home .wrapper');
// const listHome = document.querySelector('#home .list');
// const selectedHome = document.querySelector('#home .selected');

// let selectedLanguagesHome = []; // Initialize an array to store selected languages

// wrapperHome.addEventListener('click', () => {
//     listHome.classList.toggle('show'); // Use toggle to show/hide the list
// });

// listHome.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.text');
//     const selectedLanguage = text.innerHTML;

//     if (!selectedLanguagesHome.includes(selectedLanguage)) {
//         selectedLanguagesHome.push(selectedLanguage);
//     } else {
//         // If the language is already selected, remove it
//         const index = selectedLanguagesHome.indexOf(selectedLanguage);
//         selectedLanguagesHome.splice(index, 1);
//     }

//     // Update the selected text
//     if (selectedLanguagesHome.length > 0) {
//         selectedHome.innerHTML = selectedLanguagesHome.join(', '); // Display selected languages separated by a comma
//     } else {
//         selectedHome.innerHTML = 'Select a language'; // If no language is selected, show the default text
//     }
// });

// const wrapperFeatures = document.querySelector('#features .wrapper');
// const listFeatures = document.querySelector('#features .list');
// const selectedFeatures = document.querySelector('#features .selected');

// let selectedLanguagesFeatures = []; // Initialize an array to store selected languages

// wrapperFeatures.addEventListener('click', () => {
//     listFeatures.classList.toggle('show'); // Use toggle to show/hide the list
// });

// listFeatures.addEventListener('click', (e) => {
//     const text = e.target.querySelector('.text');
//     const selectedLanguage = text.innerHTML;

//     if (!selectedLanguagesFeatures.includes(selectedLanguage)) {
//         selectedLanguagesFeatures.push(selectedLanguage);
//     } else {
//         // If the language is already selected, remove it
//         const index = selectedLanguagesFeatures.indexOf(selectedLanguage);
//         selectedLanguagesFeatures.splice(index, 1);
//     }

//     // Update the selected text
//     if (selectedLanguagesFeatures.length > 0) {
//         selectedFeatures.innerHTML = selectedLanguagesFeatures.join(', '); // Display selected languages separated by a comma
//     } else {
//         selectedFeatures.innerHTML = 'Select a language'; // If no language is selected, show the default text
//     }
// });

const fileInput = document.getElementById('myfile');
const fileLabel = document.querySelector('.custom-file-button');

// Add an event listener to the file input
fileInput.addEventListener('change', function () {
    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Update the label text with the selected file name
        fileLabel.textContent = fileInput.files[0].name;
    } else {
        // If no file is selected, revert to the default label
        fileLabel.textContent = 'Choose File';
    }
});