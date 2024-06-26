async function fetchChuckNorrisJoke() {
      const response = await fetch('https://api.chucknorris.io/jokes/random?category=science');
      const data = await response.json();
      return data.value;
  }

  function replaceChuckNorris(text, replacement) {
    return text.replace(/Chuck( Norris)?/gi, replacement);
  }
  
  async function printChuckNorrisJoke() {
    const joke = await fetchChuckNorrisJoke();
    if (joke) {
        const customJoke = replaceChuckNorris(joke, "Bitcoin"); 
        const jokeContainer = document.getElementById('quote');
        jokeContainer.innerText = customJoke;
    } else {
      console.log('Failed to fetch joke');
    }
  }
  
  printChuckNorrisJoke();

  const playMP4 = () => {
    const audio = new Audio("kingm.mp3");
    audio.volume = 0.3;
    audio.play();
  };
  
  function moreFacts() {
    printChuckNorrisJoke();
    playMP4();
    showOverlay();
  }

  document.getElementById('reload').addEventListener('click', moreFacts);

  async function fetchChuckNorrisHistoryJoke() {
    let joke;
    do {
      const response = await fetch('https://api.chucknorris.io/jokes/random?category=history');
      const data = await response.json();
      joke = data.value;
    } while (joke.includes('Bob'));
  
    return joke;
  }

function replaceChuckNorrisHistory(text, replacement) {
  return text.replace(/Chuck( Norris)?/gi, replacement);
}

async function printChuckNorrisHistoryJoke() {
  const joke = await fetchChuckNorrisHistoryJoke();
  if (joke) {
      const customJoke = replaceChuckNorrisHistory(joke, "Bitcoin"); 
      const jokeContainer = document.getElementById('quotea');
      jokeContainer.innerText = customJoke;
  } else {
    console.log('Failed to fetch joke');
  }
}

printChuckNorrisHistoryJoke();

function moreHistoryFacts() {
  printChuckNorrisHistoryJoke();
  playMP4();
  showOverlay();
}

document.getElementById('reloada').addEventListener('click', moreHistoryFacts);

async function fetchChuckNorrisCivicsJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=food');
    const data = await response.json();
    return data.value;
}

function replaceChuckNorrisCivics(text, replacement) {
  return text.replace(/Chuck( Norris)?/gi, replacement);
}

async function printChuckNorrisCivicsJoke() {
  const joke = await fetchChuckNorrisCivicsJoke();
  if (joke) {
      const customJoke = replaceChuckNorrisCivics(joke, "Bitcoin"); 
      const jokeContainer = document.getElementById('quoteb');
      jokeContainer.innerText = customJoke;
  } else {
    console.log('Failed to fetch joke');
  }
}

printChuckNorrisCivicsJoke();

function moreCivicsFacts() {
  printChuckNorrisCivicsJoke();
  playMP4();
  showOverlay();
}

document.getElementById('reloadb').addEventListener('click', moreCivicsFacts);

async function fetchChuckNorrisSportsJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random?category=sport');
    const data = await response.json();
    return data.value;
}

function replaceChuckNorrisSports(text, replacement) {
  return text.replace(/Chuck( Norris)?/gi, replacement);
}

async function printChuckNorrisSportsJoke() {
  const joke = await fetchChuckNorrisSportsJoke();
  if (joke) {
      const customJoke = replaceChuckNorrisSports(joke, "Bitcoin"); 
      const jokeContainer = document.getElementById('quotec');
      jokeContainer.innerText = customJoke;
  } else {
    console.log('Failed to fetch joke');
  }
}

printChuckNorrisSportsJoke();

function moreSportsFacts() {
  printChuckNorrisSportsJoke();
  playMP4();
  showOverlay();
}

document.getElementById('reloadc').addEventListener('click', moreSportsFacts);


function showOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const randomX = Math.random() * (window.innerWidth - 250);
    const randomY = Math.random() * (window.innerHeight - 250);
    overlay.style.left = randomX + 'px';
    overlay.style.top = randomY + 'px';

    document.body.appendChild(overlay);


    void overlay.offsetWidth;
    overlay.style.opacity = '1';

    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 550);
    }, 550);
}

function openBitcoinFacts() {
  window.open("https://dashboard.clarkmoody.com/", "_blank");
  playMP4();
}