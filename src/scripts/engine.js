const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');
let mappedKeys = [];
let keysDown = {};

const playTune = (key) => {
    let audio = new Audio(`./src/tunes/${key}.wav`);
    audio.volume = volumeSlider.value;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (e) => {
    if (keysDown[e.key]) {
        return;
    }
    keysDown[e.key] = true;

    if (mappedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

document.addEventListener('keyup', (e) => {
    keysDown[e.key] = false;
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hide');
    });
};

volumeSlider.addEventListener('input', handleVolume);
keysCheck.addEventListener('click', showHideKeys);