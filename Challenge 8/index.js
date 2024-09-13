import { studentsArr } from './data.js'

function calculateClassAverage(studentsArr) {
  const cal = studentsArr.reduce((total,current)=>{
    return total + current.grade
  },0)
  return cal
}

console.log(calculateClassAverage(studentsArr))