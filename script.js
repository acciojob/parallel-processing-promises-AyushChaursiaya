//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages() {
    const promises = images.map(imageObj => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image's URL: ${imageObj.url}`));
            img.src = imageObj.url;
        });
    });

    Promise.all(promises)
    .then(images => {
        images.forEach(img => {
            output.appendChild(img);
        });
    })
    .catch(error => {
        console.error(error);
    });
}
