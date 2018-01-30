function theBeatlesPlay(musicians, instruments) {
  const arr=[]
  for (let i = 0, l = musicians.length; i < l; i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
function johnLennonFacts(facts) {
   const expfacts = []
   let i = 0
   while(i < expfacts.length) {
     expfacts.push(`${facts[i]}!!!`)
     i++
   }
   return expfacts
}