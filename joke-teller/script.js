const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

button.addEventListener('click', getJokes)
audioElement.addEventListener('ended', toggleButton)

// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

function speak(joke) {
    VoiceRSS.speech({
        key: 'ee97533f2ee1467cb48a2053c11caed1',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}


// Get Jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup){
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        
        speak(joke);
        
        toggleButton();
    } catch (error) {
        // aCatch Errors Here
        console.log('whoops,', error)
    }
}