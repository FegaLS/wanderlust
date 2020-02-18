const url =' https://randomuser.me/api/?results=105';

fetch(url)
    .then(res => res.json())
    .then(canvasSlider)
    .catch(error => console.log(error));


// Image Generator for image scroll slider
function canvasSlider(profile) {
    const canvasArray = document.querySelectorAll('.canvas');
    const images = profile.results.map(img => {
        return `<img src="${img.picture.large}" class="hvr-grow" />`;
    });
    const imageString = images.join('');


    for(let i = 0; i < canvasArray.length; i++) {
        canvasArray[i].innerHTML = imageString;
    }
}