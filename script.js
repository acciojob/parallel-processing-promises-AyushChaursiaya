//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages() {
    Promise.all(images.map(imageObj => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                output.appendChild(img);
                resolve(img);
            };
            img.onerror = () => reject(new Error(`Failed to load image's URL: ${imageObj.url}`));
            img.src = imageObj.url;
        });
    }))
    .catch(error => {
        console.error(error);
    });
}

btn.addEventListener("click", downloadImages);
