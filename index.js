var string

function shout(string){
  return string.toUpperCase()
}

function whisper(string){
   return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
  return `HELLO`
}

function logWhisper(string){
  console.log('hello')
  return `hello`
}
function sayHiToGrandma(string){
  if (string.toLowerCase){
  console.log ("I can't hear you!")
  return "I can't hear you!"
}else if (string.toUpperCase) {
  console.log ("YES, INDEED!")
  return "YES, INDEED!"
}else {
  return "I love you, too."
}
}
