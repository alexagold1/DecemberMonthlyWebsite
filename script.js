//Generate Prefix of name
function genPrefix (firstName){
 if (firstName.length > 4){
    return 'The Great'
 }
 else {
    return 'Master'
 }
}

//Generate First name of name
function genFirstName (firstName){
  const firstLetter = firstName.charAt(0).toLowerCase()
  if (firstLetter === 'a') {
    return 'Jeff'
  } else if  (firstLetter === 'b') {
    return 'Joe'
  } else if  (firstLetter === 'c'){
    return 'Chris'
  }  else if  (firstLetter === 'd'){
    return 'Dom'
  } else {
    return 'zach'
  }
}

//generate middle name 
function genMiddleName (roadType, favoriteColor){
    if (roadType === 'road'){
        return `${favoriteColor} ridge`
    } else if (roadType === 'street'){
        return `${favoriteColor} son`
    }  else if (roadType === 'ave'){
        return `${favoriteColor} field`
    }  else {
        return `${favoriteColor} stone`
    }
}

//generate last name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter ==='a'){
        return 'Shadow'
    } else if (lastLetter === 'e'){
        return 'Storm'
    } else if (lastLetter === 'i'){
        return 'Blaze'
    } else if (lastLetter === 'o'){
        return 'Thorn'
    } else if (lastLetter === 'u'){
        return 'Frost'
    } else{
        return 'Moon'
    }
}
//generate suffix 
function genSuffix(favoriteAnimal){
    return `of the ${favoriteAnimal}`
}

//master function to assemble full name
function genFullName (){
    //Define variables from inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const roadType = document.getElementById('roadType').value
const favoriteColor = document.getElementById('favoriteColor').value.trim()
const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim()



//Generate Each part of the name using helper funcions
const prefix = genPrefix(firstName)
const newFirstName = genFirstName(firstName)
const MiddleName = genMiddleName(roadType, favoriteColor)
const newLastName = genLastName(lastName)
const newSuffix = genSuffix(favoriteAnimal)




}