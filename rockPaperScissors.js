const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
      return userInput
    }else{
      console.log('Error, please type: rock, paper or scissors')
    }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
      case 0: 
        return 'rock';
      case 1:
        return 'paper';
      case 2: 
        return 'scissors'
    }
  };
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return "This game is tie"
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Sorry, computer won!'
      }else{
        return 'Congratulation you won!'
      }
    }
  
    if(userChoice === 'paper'){
      if(computerChoice == 'scissors'){
        return 'Sorry, computer won!'
    }else{
        return 'Congratulation you won!'
    }
  }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Sorry, computer won!'
      }
    }else{
        return 'Congratulation you won!'
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper')
    const computerChoice = getComputerChoice()
    console.log('you threw: ' + userChoice) 
    console.log('the computer threw: ' + computerChoice) 
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()
  
  
  
  
  
  
  
  
  
  