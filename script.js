const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


btn.addEventListener("click", () => {
    images.forEach(imageObj => {
        const img = document.createElement("img");
        img.onload = () => output.appendChild(img);
        img.src = imageObj.url;
    });
	// images.forEach(imageObj => {
    //     const img = new Image();
    //     img.onload = () => output.appendChild(img);
    //     img.src = imageObj.url;
    // });
});
// function downloadImages() {
//     const promises = images.map(imageObj => {
//         return new Promise((resolve, reject) => {
//             const img = new Image();
//             img.onload = () => resolve(img);
//             img.onerror = () => {
//                 console.error(`Failed to load image's URL: ${imageObj.url}`);
//                 resolve(null); // Resolve with null if image loading fails
//             };
//             img.src = imageObj.url;
//         });
//     });

//     Promise.all(promises)
//     .then(images => {
//         images.forEach(img => {
//             if (img) {
//                 output.appendChild(img);
//             }
//         });
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }

// btn.addEventListener("click", downloadImages);
