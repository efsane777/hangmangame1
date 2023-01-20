const words = [
    { word: "america", hint: "The states of ?" },
    { word: "animal", hint: "There are many of them" },
    { word: "apple", hint: "Take a byte" },
    { word: "bag", hint: "It can hold stuff" },
    { word: "barack obama", hint: "President" },
    { word: "basket", hint: "Orange ball" },
    { word: "bat", hint: "It can fly, or make something fly" },
    { word: "boat", hint: "It floats" },
    { word: "box", hint: "You can put something inside" },
    { word: "camera", hint: "Takes pictures" },
    { word: "candle", hint: "It's lit" },
    { word: "car", hint: "You can drive this" },
    { word: "cat", hint: "Meow" },
    { word: "china", hint: "Made in ?" },
    { word: "christmas", hint: "Born in a manger" },
    { word: "clouds", hint: "Looks fluffy in the sky" },
    { word: "cobweb", hint: "You don't want this home in your home" },
    { word: "codepen", hint: "Code website" },
    { word: "coding", hint: "Talk to the computer" },
    { word: "computer", hint: "1 and 0" },
    { word: "cowboy", hint: "A man of milk" },
    { word: "cup", hint: "Holds your drink" },
    { word: "denmark", hint: "A country with a red and white flag" },
    { word: "disney", hint: "Theme park and movies" },
    { word: "dog", hint: "Woof" },
    { word: "fox", hint: "What does it say?" },
    { word: "donald duck", hint: "It's a talking animal" },
    { word: "door", hint: "It can open and close" },
    { word: "drawing", hint: "Creative art" },
    { word: "drums", hint: "Da tam tsss" },
    { word: "ears", hint: "Used to hear stuff" },
    { word: "easter egg", hint: "It's a secret" },
    { word: "egg", hint: "Made by chickens" },
    { word: "elon musk", hint: "A smart man" },
    { word: "england", hint: "A country in europe" },
    { word: "europe", hint: "A continent" },
    { word: "eyes", hint: "Take a look" },
    { word: "face", hint: "On your head" },
    { word: "facebook", hint: "Social media" },
    { word: "football", hint: "Not a hand sport" },
    { word: "fortnite", hint: "A video game" },
    { word: "france", hint: "Eiffel tower" },
    { word: "galaxy", hint: "Far away, and beyond" },
    { word: "game", hint: "You can play it" },
    { word: "germany", hint: "A country in europe" },
    { word: "google", hint: "You can search after it" },
    { word: "great britain", hint: "It's great, but it's not England" },
    { word: "guitar", hint: "6 strings" },
    { word: "hacker", hint: "Anonymous" },
    { word: "hangman", hint: "This game" },
    { word: "head", hint: "Over your body" },
    { word: "headphones", hint: "Music in your ears" },
    { word: "holiday", hint: "No school or work" },
    { word: "horse", hint: "You can ride it" },
    { word: "house", hint: "You live in it" },
    { word: "india", hint: "A country in Asia" },
    { word: "italy", hint: "Pizza" },
    { word: "jelly", hint: "Elastic tasty" },
    { word: "jigsaw", hint: "This is a puzzle" },
    { word: "kitchen", hint: "You can cook in it" },
    { word: "lamp", hint: "It provides light" },
    { word: "lemon", hint: "A sour fruit" },
    { word: "letter", hint: "Write it and send it away" },
    { word: "light", hint: "It makes a brighter day" },
    { word: "lightbulb", hint: "I have a bright idea" },
    { word: "mail", hint: "Could be paper or digital" },
    { word: "mario", hint: "Nintendo character" },
    { word: "melody", hint: "Music" },
    { word: "mickey mouse", hint: "Big black ears" },
    { word: "microwave", hint: "Tiny wave machine" },
    { word: "minecraft", hint: "Popular block game" },
    { word: "minigame", hint: "A short and fun game" },
    { word: "mouse", hint: "Tiny and fast" },
    { word: "mouth", hint: "It can speak" },
    { word: "movie", hint: "Theather" },
    { word: "music", hint: "Pop, jazz, rock" },
    { word: "norway", hint: "Beautiful country in the north" },
    { word: "nose", hint: "It smells" },
    { word: "orange", hint: "A fruit and color" },
    { word: "oxygen", hint: "Used to breathe" },
    { word: "painting", hint: "Creative hobby" },
    { word: "pants", hint: "Used by half your body" },
    { word: "paper", hint: "Very thin dead wood" },
    { word: "peace", hint: "I wish" },
    { word: "pen", hint: "Countained in pencil" },
    { word: "pencil", hint: "Used to write" },
    { word: "pet", hint: "It's soft and loving" },
    { word: "pewdiepie", hint: "100M+ YouTuber" },
    { word: "piano", hint: "Black and white" },
    { word: "plane", hint: "Is it a bird?" },
    { word: "poland", hint: "A country" },
    { word: "present", hint: "A wrapped gift" },
    { word: "program", hint: "You can install it" },
    { word: "programmer", hint: "Created programs" },
    { word: "quiz", hint: "Questions" },
    { word: "radio", hint: "Audio broadcast" },
    { word: "remote control", hint: "Take control remotely" },
    { word: "rocket", hint: "Shoot for the stars" },
    { word: "russia", hint: "A big country" },
    { word: "school", hint: "Education" },
    { word: "scotland", hint: "A country north for england" },
    { word: "screen", hint: "Many pixels" },
    { word: "seat", hint: "You sit on them" },
    { word: "shoes", hint: "Footwear" },
    { word: "sky", hint: "Blue and high" },
    { word: "smartphone", hint: "Very smart" },
    { word: "snake", hint: "Arcade game" },
    { word: "spaceship", hint: "Floating boat" },
    { word: "speakers", hint: "Sound waves" },
    { word: "star wars", hint: "Galaxy war" },
    { word: "suitcase", hint: "This is a brief case" },
    { word: "summer", hint: "Not winter" },
    { word: "sun", hint: "It gives a light" },
    { word: "superhero", hint: "Special powers and a cape" },
    { word: "sweater", hint: "Jumper" },
    { word: "sweden", hint: "Blue and yellow flag" },
    { word: "television", hint: "TV" },
    { word: "tools", hint: "Very handy" },
    { word: "united states of america", hint: "USA" },
    { word: "universe", hint: "The earth is inside of it" },
    { word: "usain bolt", hint: "Fast man" },
    { word: "vampire", hint: "Deadly at full moon" },
    { word: "video", hint: "Captured by a camera" },
    { word: "village", hint: "Full of houses" },
    { word: "wales", hint: "Country in Europe" },
    { word: "water bottle", hint: "Holds liquid" },
    { word: "wind", hint: "Blows" },
    { word: "windmill", hint: "Turns and grinds" },
    { word: "window", hint: "See through" },
    { word: "winter", hint: "Not summer" },
    { word: "wizard", hint: "Magical" },
    { word: "word", hint: "This" },
    { word: "xylophone", hint: "Instrument" },
    { word: "youtube", hint: "Online video platform" },
    { word: "zombie", hint: "Living dead" },
  ]
  
  const hangman = [
    { from: [70, 38], to: [72, 46] },
    { from: [70, 38], to: [68, 46] },
    { from: [70, 45], to: [72, 55] },
    { from: [70, 45], to: [68, 55] },
    { from: [70, 35], to: [70, 45] },
    { circle: [70, 30], radius: 2 },
    { from: [70, 5], to: [70, 25] },
    { from: [30, 5], to: [70, 5] },
    { from: [30, 95], to: [30, 5] },
    { from: [1, 95], to: [99, 95] },
  ]
  
  // get stats
  let stats = { streak: 0, scores: [] }
  if (typeof Storage !== "undefined" && localStorage.hangman !== undefined) {
    stats = JSON.parse(localStorage.hangman)
    setScore()
  }
  
  // play again
  document.querySelector("button").addEventListener("click", generateWord)
  document.addEventListener("keydown", (e) => {
    if (document.querySelector("input").style.display !== "none") return
    if (e.key === "Enter") generateWord()
  })
  
  // hints
  document.querySelector("#hints").addEventListener("change", (e) => {
    if (e.target.checked) showHint()
    else document.querySelector(".hint").innerHTML = ""
  })
  function showHint() {
    document.querySelector(".hint").innerHTML = game.hint
  }
  
  // reveal mode
  document.querySelector("#reveal").addEventListener("change", (e) => {
    if (e.target.checked) revealMode()
  })
  function revealMode() {
    checkLetter(game.word[0])
    checkLetter(game.word.slice(-1))
  }
  
  // initialize
  let game = {}
  generateWord()
  
  function generateWord() {
    let data = {}
  
    // get random word
    let randomIndex = Math.floor(Math.random() * words.length)
    data.word = words[randomIndex].word
    data.hint = words[randomIndex].hint
  
    setWord(data)
  }
  
  // set a word
  // {word: "", hint: ""}
  function setWord(data) {
    game = {
      word: "",
      hint: "",
      currentWord: [],
      guessesLeft: 10,
      guessed: [],
    }
  
    game.word = data.word.toLowerCase()
    game.hint = data.hint
  
    // generate word lines in html
    let html = ""
    for (let i = 0; i < game.word.length; i++) {
      let isSpace = game.word[i] === " " ? 'style="border:none;"' : ""
      if (isSpace) game.currentWord[i] = game.word[i]
      html += '<span class="hidden" ' + isSpace + "></span>"
    }
  
    // update data
    document.querySelector(".guessesLeft").querySelector("span").innerHTML = game.guessesLeft
    document.querySelector(".guessed").querySelector("span").innerHTML = ""
    document.querySelector("input").style.display = null
    document.querySelector("button").style.display = "none"
    document.querySelector(".hangman").innerHTML = ""
    document.querySelector(".word").innerHTML = html
  
    // reveal mode
    if (document.querySelector("#reveal").checked) revealMode()
  
    // hints
    if (document.querySelector("#hints").checked) showHint()
  
    // place caret on input
    document.querySelector("input").focus()
  }
  
  // listen for inputs
  document.querySelector("input").addEventListener("change", (e) => {
    checkValue(e.target.value)
    e.target.value = ""
  })
  
  function checkValue(value) {
    value = value.trim().toLowerCase()
    if (!value) return
  
    checkInput(value)
  
    if (!game.guessesLeft) gameOver()
  
    document.querySelector(".guessesLeft").querySelector("span").innerHTML = game.guessesLeft
  }
  
  function checkInput(value) {
    // invalid input
    var notAllowed = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/
    if (value.match(notAllowed)) return alert("Input invalid")
    // only 1 letter
    if (value.length === 1) return checkLetter(value)
    // not correct length (multiple letters)
    if (value.length !== game.word.length) return value.split("").forEach(checkLetter)
  
    checkWord(value)
  }
  
  function checkWord(word) {
    if (word === game.word) {
      for (let i = 0; i < game.word.length; i++) {
        document.querySelector(".word").querySelectorAll("span")[i].innerHTML = game.word[i]
      }
      finish()
      return
    }
  
    // double punishment for getting the word wrong
    drawHangman()
    drawHangman()
    fadeColor("#ff2929")
  }
  
  function checkLetter(letter) {
    let alreadyGuessed = game.guessed.includes(letter)
    if (alreadyGuessed) return
  
    game.guessed.push(letter)
  
    let inWord = false
    // add all letters in word
    for (let i = 0; i < game.word.length; i++) {
      if (game.word[i] === letter) {
        inWord = true
        document.querySelector(".word").querySelectorAll("span")[i].innerHTML = game.word[i]
        game.currentWord[i] = game.word[i]
      }
    }
  
    // correct letter
    if (inWord) {
      fadeColor("#35c435")
      if (game.currentWord.join("") === game.word) finish()
      return
    }
  
    drawHangman()
    fadeColor("#ff2929")
  
    let guessedElem = document.querySelector(".guessed").querySelector("span")
    let wrongLetters = game.guessed.filter((l) => !game.word.includes(l))
    guessedElem.innerHTML = wrongLetters.join(", ")
  }
  
  function fadeColor(color) {
    document.body.style.background = color
    setTimeout(() => (document.body.style.background = null), 200)
  }
  
  function finish() {
    // calculate score
    let wrongGuesses = game.guessed.filter((letter) => !game.word.includes(letter)).length
    let averageCorrectGuesses = (game.word.length / (wrongGuesses + game.word.length)) * 100
    let score = Math.floor(averageCorrectGuesses)
  
    alert("Congratulations! Score: " + score + "%")
    fadeColor("lime")
  
    // set score
    stats.streak++
    stats.scores.push(score)
    setScore()
  
    // play again
    document.querySelector("input").style.display = "none"
    document.querySelector("button").style.display = null
  }
  
  function gameOver() {
    for (let i = 0; i < game.word.length; i++) {
      let letterElem = document.querySelector(".word").querySelectorAll("span")[i]
      if (!letterElem.innerHTML) {
        letterElem.style.color = "red"
        letterElem.innerHTML = game.word[i]
      }
    }
  
    alert("You lost!")
    fadeColor("red")
  
    // set score
    stats.streak = 0
    stats.scores.push(0)
    setScore()
  
    // play again
    document.querySelector("input").style.display = "none"
    document.querySelector("button").style.display = null
  }
  
  function setScore() {
    // calculate average score
    let score = null
    if (stats.scores.length) {
      score = 0
      for (let i = 0; i < stats.scores.length; i++) score += stats.scores[i]
      score = Math.floor(score / stats.scores.length) + "%"
    }
  
    // update data
    document.querySelector(".streak").innerHTML = stats.streak
    document.querySelector(".score").innerHTML = score ?? "-"
    localStorage.hangman = JSON.stringify(stats)
  }
  
  function drawHangman() {
    if (!game.guessesLeft) return
    game.guessesLeft--
  
    let part = hangman[game.guessesLeft]
    if (!part) return
  
    let hangmanLines = document.querySelector(".hangman").querySelectorAll("svg")
    for (let i = 0; i < hangmanLines.length; i++) {
      hangmanLines[i].children[0].classList.remove("draw")
    }
  
    let svg = ""
    if (part.circle) {
      svg = '<svg><circle class="draw" cx="' + part.circle[0] + '%" cy="' + part.circle[1] + '%" r="' + part.radius + '%"/></svg>'
    } else {
      svg = '<svg><line class="draw" x1="' + part.from[0] + '%" y1="' + part.from[1] + '%" x2="' + part.to[0] + '%" y2="' + part.to[1] + '%"/></svg>'
    }
  
    document.querySelector(".hangman").innerHTML += svg
  }