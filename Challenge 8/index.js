import { studentsArr } from './data.js'

function calculateClassAverage(studentsArr) {
  const cal = studentsArr.reduce((total,current)=> total + current.grade,0)
  return cal/studentsArr.length
}

console.log(calculateClassAverage(studentsArr))