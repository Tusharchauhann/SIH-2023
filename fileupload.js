// // Import necessary dependencies
// // import axios from 'axios';
// // import fs from 'fs';

// // Define the URL of your Flask API
// const api_url = 'http://20.127.167.13:8080/upload';

// // Path to the MP4 video file you want to upload
// const video_file_path = './my_video.mp4';

// // Create a FormData object containing the file to be uploaded
// const formData = new FormData();
// formData.append('video', fs.createReadStream(video_file_path), 'video.mp4');

// // Define the headers for the request
// const config = {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   },
// };

// // Send a POST request to the API endpoint
// axios
//     .post(api_url, formData, config)
//     .then((response) => {
//         // Check the response from the API
//         if (response.status === 200) {
//             console.log('File uploaded successfully');
//         } else if (response.status === 400) {
//             console.log('Invalid request or file format');
//         } else {
//             console.log('An error occurred:', response.data);
//         }
//     })
//     .catch((error) => {
//         console.log('An error occurred:', error.message);
//     });



// Define the URL of your Flask API
const api_url = 'http://20.127.167.13:8080/upload';

// Reference the file input element
const fileInput = document.getElementById('myfile');

// Reference the video elements
const uploadedVideo = document.getElementById('uploadedVideo');
const videoSource = document.getElementById('videoSource');

// Reference the convert button
const convertButton = document.getElementById('convertButton');

// Add an event listener to the file input
fileInput.addEventListener('change', function () {
    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Display the selected video in the video element
        const selectedFile = fileInput.files[0];
        uploadedVideo.style.display = 'block';
        videoSource.src = URL.createObjectURL(selectedFile);
        uploadedVideo.load();
    }
});

// Add an event listener to the convert button
convertButton.addEventListener('click', function () {
    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // Create a FormData object containing the selected file
        const formData = new FormData();
        formData.append('video', fileInput.files[0]);
        // Get the selected languages 
        const checkboxes = document.querySelectorAll('.item input[type="checkbox"]:checked');
        let selectedLanguages = "";
        const languageObject = { 0: "ta", 1: "hi", 2: "mr", 3: "te", 4: "kn", 5: "ml", 6: "bn", 7: "gu", 8: "ne", 9: "ur" }
        checkboxes.forEach(function (checkbox) {
            selectedLanguages += languageObject[checkbox.value];
            selectedLanguages += ",";
        });
        selectedLanguages = selectedLanguages.slice(0,selectedLanguages.length-1);
        console.log(selectedLanguages);
        let api_url2 = "http://20.127.167.13:8080/language?param_list="+selectedLanguages; 
        axios
            .get(api_url2)
            .then((response) => {
                // Check the response from the API
                if (response.status === 200) {
                    console.log('File uploaded successfully');
                } else if (response.status === 400) {
                    console.log('Invalid request or file format');
                } else {
                    console.log('An error occurred:', response.data);
                }
            })
          .catch((error) => {
            console.log('An error occurred:', error.message);
          });
        // Append the selected languages to the FormData object
        // formData.append('languages', JSON.stringify(selectedLanguages));

        // Define the headers for the request
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        // Send a POST request to the API endpoint
        axios
            .post(api_url, formData, config)
            .then((response) => {
                // Check the response from the API
                if (response.status === 200) {
                    console.log('File uploaded successfully');
                } else if (response.status === 400) {
                    console.log('Invalid request or file format');
                } else {
                    console.log('An error occurred:', response.data);
                }
            })
          .catch((error) => {
            console.log('An error occurred:', error.message);
          });
    } else {
        console.log('Please select a video file to upload.');
    }
});
