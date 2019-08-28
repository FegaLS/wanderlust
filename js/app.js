const url =' https://randomuser.me/api/?results=105';

fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(canvasSlider)
    .catch(printError);

function handleErrors (res){
    if(!res.ok){
        throw error(res.status);
    }
    console.log(res);
    return res;
}
      
function parseJSON (res){
    return res.json();
}
      
function printError (error){
    console.log(error);
}


function canvasSlider(profile) {
    const canvasArray = document.querySelectorAll('.canvas');
    const images = profile.results.map(img => {
        return `<img src="${img.picture.large}" class="hvr-kenburns" />`;
    });
    const imageString = images.join('');


    for(let i = 0; i < canvasArray.length; i++) {
        canvasArray[i].innerHTML = imageString;
    }
}