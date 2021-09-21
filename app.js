//accessing the html element 
const imageURL = document.getElementById('imageURL');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const generateBtn = document.getElementById('generateBtn');

// const top_meme = document.getElementById('top-meme');
// const bottom_meme = document.getElementById('bottom-meme');
const meme_picture = document.getElementById('meme_picture');
    // imageURL.addEventListener('change', () => {
    //     let img = document.createElement('img');
    //     img.src = imageURL.value;
    //     meme_picture.appendChild(img);
    // });

    // topText.addEventListener('change', () => {
    //     top_meme.innerHTML = topText.value;

    // });

    // bottomText.addEventListener('change', () => {
    //     bottom_meme.innerHTML = bottomText.value;
    // });
generateBtn.addEventListener('click', (e) => {
    let container = document.createElement('div');
    container.addEventListener('click', () => {
        meme_picture.removeChild(container);
    });
    let img = document.createElement('img');
    let top_meme = document.createElement('div');
    top_meme.setAttribute('class','top_meme');
    let bottom_meme = document.createElement('div');
    bottom_meme.setAttribute('class','bottom_meme');
    
    img.src = imageURL.value;
    top_meme.innerHTML = topText.value;
    bottom_meme.innerHTML = bottomText.value;
    
    meme_picture.appendChild(container);
    container.appendChild(img);
    container.appendChild(top_meme);
    container.appendChild(bottom_meme);
    document.forms['memeForm'].reset();
    e.preventDefault();
});