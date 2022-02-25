const naam = 'Vasanth aA eE iI oO uU abcde ABCDE'
const arr = naam.split('')
const out = arr.filter( element => {
    return !(
        element=='A' || element=='a' || 
        element=='E' || element=='e' || 
        element=='I' || element=='i' || 
        element=='O' || element=='o' || 
        element=='U' || element=='u')
}).filter( element => {
    return /[a-zA-Z]/.test(element)
}).forEach( element => console.log(element))
