//1.
let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand, model, year, color] = car;

console.log(brand); 
console.log(model);
console.log(year); 
console.log(color);

//Milyen változóneveket lehet használni tömb esetén destrukturálás esetén? Olyat ami utal a kinyert adatra. 
//A változók sorrendje fontos-e?  Abban a sorrendben lesz kinyerve ahogy index szerint sorban van.
//2.

let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };
        
let { bookTitle =book.title, bookAuthor=book.author, publicationYear,language } = book;    
    console.log(bookTitle);
    console.log(bookAuthor); 
    console.log(publicationYear);
    console.log(language);
    
//Milyen változóneveket lehet használni objektum esetén destrukturálás esetén? Ugyan annak kell lennie. 
//A változók sorrendje fontos-e? Itt már nem számít a változok sorrendje.
//3.
function printStudentInfo({name,age,grade,subjects}){
    console.log(`${name} ${age} éves ${grade} osztályos tanuló és ${subjects} szakra jár`)
}
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

printStudentInfo(student);
