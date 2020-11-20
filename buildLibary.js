class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  get ratings(){
    return this._ratings
  }
   set isCheckedOut(empty){
  }
  toggleCheckOutStatus(){
    if(this._isCheckedOut === true){
      return this._isCheckedOut  = false
    }else if(this._isCheckedOut  === false){
      return this._isCheckedOut  = true 
    }
  }
  getAverageRating(){
    const ratingSum = this.ratings.reduce((a,c) => a + c);
      return ratingSum / this.ratings.length
  }

  addRating(value){
      this.ratings.push(value)
  }
 
}

class Book extends Media{
  constructor(author, pages, title){
    super(title)
    this._title = title;
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author
  }
   get pages(){
    return this._pages
  }
}

class Movie extends Media{
  constructor(title,director,runtime){
    super(title)
    this._director = director;
    this._runtime = runtime;
  }
  get director(){
    return this._director
  }
  get runtime(){
    return this._runtime
  }
}


const historyOfEverything = new Book('Bill Bryson', 544, 'A Short History of Nearly Everything')

const isCheckedOut = historyOfEverything.toggleCheckOutStatus()

historyOfEverything.addRating(5)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)

console.log(historyOfEverything)

console.log("Average rating " + historyOfEverything.getAverageRating())

speed = new Movie('Spped','Jan de Bont', 116)
speed.toggleCheckOutStatus()
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed)
console.log("Average rating " + speed.getAverageRating())
