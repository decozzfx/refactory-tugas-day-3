const student = [ ['David', 80], ['Vino', 77], ['Diva', 88], ['Isti', 95], ['Thomas', 68] ]

let total = 0

student.forEach((std) => total += std[1])

// for(let i=0; i < student.length; i++){
//     total += student[i][1]
// }

let avg = total/student.length

console.log('Average grade : ' + avg)

if(avg < 60) return console.log('Grade : F')
if(avg < 70) return console.log('Grade : D')
if(avg < 80) return console.log('Grade : C')
if(avg < 90) return console.log('Grade : B')
if(avg < 100) return console.log('Grade : A')
