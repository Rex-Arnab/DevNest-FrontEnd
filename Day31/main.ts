type validAge = "under 18" | "adult"
interface User {
    name: String,
    age: number,
    adult: validAge
}

const rex: User = {
    name: 'DarkCookie',
    age: 23,
    adult: 'adult'
}

console.log(rex.name)