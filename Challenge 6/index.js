const rainJanbyWeek = [5,10,0,111]
const totalRainFallJan = rainJanbyWeek.reduce((total,currentElement)=>{
 return total + currentElement
})
console.log(totalRainFallJan);
