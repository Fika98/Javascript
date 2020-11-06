let raceNumber = Math.floor(Math.random() * 1000);

let early = false

let age = 18

if (early && age > 18){
  raceNumber += 1000
}

if(early && age > 18){
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`)
} 
else if (!early && age > 18 ){
  console.log(`You will race at 11:00 am and your race number is${raceNumber}.`)
} 
else if  (age < 18 ) {
  console.log(` you will race at 12:30pm and your race number is ${raceNumber}`)
}
else{
    console.log('Please approach the registration desk, thanks!.')
}