let user = [
    {
        firstName: 'John',
        lastName: 'Reilly'
    },
    (user)=> {
        console.log('i set the user:', user)
    }
]

let [ newUser, setUser ] = user 
console.log(newUser)
console.log('-----')
console.log(setUser)

setUser({firstName: 'Cool', lastName: 'stuff'})