// // Define the API URL and the filename you want to download
// const api_url = 'http://localhost:8080/download';

// // Define a function to download the file
// async function downloadFile() {
//   try {
//     // Fetch the file from the API
//     const response = await fetch(api_url);

//     // Check if the request was successful (status code 200)
//     if (response.status === 200) {
//       // Specify the path where you want to save the downloaded file
//       const save_path = 'downloaded_files/';

//       // Extract the filename from the URL
//       const filename = api_url.split('/').pop();

//       // Combine the save path and filename to create the full save path
//       const full_save_path = `${save_path}${filename}.mp4`;

//       // Convert the response to a Blob (binary data)
//       const blob = await response.blob();

//       // Create a link to trigger the download
//       const link = document.createElement('a');
//       link.href = window.URL.createObjectURL(blob);
//       link.download = filename;

//       // Trigger the download
//       link.click();

//       console.log(`File downloaded and saved to ${full_save_path}`);
//     } else {
//       console.error(`Error: ${response.status} - ${await response.text()}`);
//     }
//   } catch (error) {
//     console.error(`An error occurred: ${error}`);
//   }
// }

// // Call the downloadFile function to initiate the download
// downloadFile();


// // Define the API URL for the video
// const api_video_url = 'http://localhost:8080/video.mp4'; // Replace with the actual URL

// // Get a reference to the video element
// const videoElement = document.querySelector('video');

// // Set the source of the video element to the API URL
// videoElement.src = api_video_url;

// // Define a function to download the file
// async function downloadFile() {
//   try {
//     // Fetch the file from the API
//     const response = await fetch(api_url);

//     // Check if the request was successful (status code 200)
//     if (response.status === 200) {
//       // Specify the path where you want to save the downloaded file
//       const save_path = 'downloaded_files/';

//       // Extract the filename from the URL
//       const filename = api_url.split('/').pop();

//       // Combine the save path and filename to create the full save path
//       const full_save_path = `${save_path}${filename}.mp4`;

//       // Convert the response to a Blob (binary data)
//       const blob = await response.blob();

//       // Create a link to trigger the download
//       const link = document.createElement('a');
//       link.href = window.URL.createObjectURL(blob);
//       link.download = filename;

//       // Trigger the download
//       link.click();

//       console.log(`File downloaded and saved to ${full_save_path}`);
//     } else {
//       console.error(`Error: ${response.status} - ${await response.text()}`);
//     }
//   } catch (error) {
//     console.error(`An error occurred: ${error}`);
//   }
// }

// // Call the downloadFile function to initiate the download
// downloadFile();


// // Define the API URL for the video
// const api_video_url = 'http://localhost:8080/video.mp4'; // Replace with the actual URL for the video
// const api_image_url = 'Assets/video.jpeg'; // Replace with the actual URL for the image

// // Get references to the video element and image element
// const videoElement = document.querySelector('.download-video');
// const imageElement = document.querySelector('.download-video source');

// // Set the source of the video element to the API URL for the video
// videoElement.src = api_video_url;

// // Set the source of the image element to the API URL for the image
// imageElement.src = api_image_url;

// // Define a function to download the video
// function downloadVideo() {
//   // Create a new XMLHttpRequest to fetch the video as a blob
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', api_video_url, true);
//   xhr.responseType = 'blob';

//   xhr.onload = function() {
//     // Check if the request was successful (status code 200)
//     if (xhr.status === 200) {
//       // Create a Blob object from the response
//       const blob = xhr.response;

//       // Create a temporary URL for the blob
//       const blobUrl = URL.createObjectURL(blob);

//       // Create a link to trigger the download
//       const link = document.createElement('a');
//       link.href = blobUrl;
//       link.download = 'video.mp4'; // Specify the filename for the downloaded video

//       // Trigger the download
//       link.click();

//       // Clean up by revoking the temporary URL
//       URL.revokeObjectURL(blobUrl);

//       console.log('Video downloaded successfully');
//     } else {
//       console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
//     }
//   };

//   // Send the request
//   xhr.send();
// }

// // Add an event listener to the download button
// const downloadButton = document.querySelector('.upload.download button');
// downloadButton.addEventListener('click', downloadVideo);


// // Define the API URL for downloading the video
// const api_url = 'http://20.127.167.13:8080/download'; // Update with your API URL

// try {
//   // Fetch the video from the API
//   fetch(api_url)
//     .then((response) => {
//       // Check if the request was successful (status code 200)
//       if (response.status === 200) {
//         // Create a blob from the response
//         return response.blob();
//       } else {
//         console.error(`Error: ${response.status} - ${response.statusText}`);
//       }
//     })
//     .then((blob) => {
//       // Create a temporary URL for the blob
//       const blobUrl = URL.createObjectURL(blob);

//       // Get a reference to the video element with class .download-video
//       const videoElement = document.querySelector('.download-video');

//       // Set the source of the video element to the temporary URL
//       videoElement.src = blobUrl;

//       console.log('Video downloaded and displayed successfully');
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
// //     });
// // } catch (error) {
// //   console.error('An error occurred:', error);
// // }

// // Define the API URL for downloading the video
// async function downloadVideo() {
//     const api_url = 'http://20.127.167.13:8080/download'; // Update with your API URL

//     console.log("Inside");
//     // Fetch the video from the API
//     fetch(api_url)
//         .then(async (response) => {
//             console.log("IN");
//             // Check if the request was successful (status code 200)
//             if (response.status === 200) {
//                 console.log("Hello");
//                 // Create a blob from the response
//                 const blob = await response.blob();
//                 console.log(blob);
//                 // Create a temporary URL for the blob
//                 const blobUrl = URL.createObjectURL(blob);

//                 // Get a reference to the video element with class .download-video
//                 const videoElement = document.querySelector('.download-video');
//                 console.log(blobUrl);
//                 // Set the source of the video element to the temporary URL
//                 // videoElement.src = blobUrl;

//                 console.log('Video downloaded and displayed successfully');
//             } else {
//                 console.error(`Error: ${response.status} - ${response.statusText}`);
//             }
//         })
//         // .catch((error) => {
//         //     console.error('An error occurred:', error);
//         // });
// }
// const downloadButton = document.querySelector('.upload.download button');
// downloadButton.addEventListener('click', downloadVideo);

// Define the API URL for downloading the video
// const api_url = 'http://20.127.167.13:8080/download'; // Update with your API URL

// // Get a reference to the video element with class .download-video
// const videoElement = document.querySelector('.download-video');

// // Function to download and display the video
// async function downloadAndDisplayVideo() {
//   try {
//     // Fetch the video from the API
//     const response = await fetch(api_url);

//     // Check if the request was successful (status code 200)
//     if (response.status === 200) {
//       // Convert the response to a blob (binary data)
//       const blob = await response.blob();

//       // Create a temporary URL for the blob
//       const blobUrl = URL.createObjectURL(blob);

//       // Set the source of the video element to the temporary URL
//       videoElement.src = blobUrl;

//       // Start loading the video
//       videoElement.load();

//       console.log('Video downloaded and displayed successfully');
//     } else {
//       console.error(`Error: ${response.status} - ${response.statusText}`);
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// // Add an event listener to the video element to trigger the download when it's clicked
// videoElement.addEventListener('click', downloadAndDisplayVideo);

// // Initially, set the video element's source to an empty string
// videoElement.src = '';

// // Optionally, you can set other video attributes such as autoplay and controls
// videoElement.autoplay = true;
// videoElement.controls = true;
// Define the API URL for downloading the video
const api_url = 'http://20.127.167.13:8080/download'; // Replace with your API URL

// Function to download the video
function downloadVideo() {
  // Send a GET request to the API to retrieve the video
  fetch(api_url) 
    
}

// Add an event listener to a button or element to trigger the download
const downloadButton = document.getElementById('.download'); // Replace with your button's ID
downloadButton.addEventListener('click', downloadVideo);
