//Generate Prefix of name
function genPrefix (firstName){
 if (firstName.length > 4){
    return 'The Great Goalie:'
 } 
 else {
    return 'The Amazing Quarterback:'
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
    return 'Zach'
  }
}

//generate middle name 
function genMiddleName (roadType, favoriteColor){
    if (roadType === 'road'){
        return `${favoriteColor} "sick"`
    } else if (roadType === 'street'){
        return `${favoriteColor} "stellar"`
    }  else if (roadType === 'ave'){
        return `${favoriteColor} "cold"`
    }  else {
        return `${favoriteColor} "stone"`
    }
}

//generate last name
function genLastName (lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter ==='a'){
        return 'Cohen'
    } else if (lastLetter === 'e'){
        return 'Smith'
    } else if (lastLetter === 'i'){
        return 'Jones'
    } else if (lastLetter === 'o'){
        return 'Adler'
    } else if (lastLetter === 'u'){
        return 'Gold'
    } else{
        return 'Wilson'
    }
}
//generate suffix 
function genSuffix(favoriteAnimal){
    return `of the ${favoriteAnimal} team`
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

//functions to capitalize words

const capitalizedPrefix = tocapitalize(prefix)
const capitalizedFirstName = tocapitalize(newFirstName)
const capitalizedMiddleName = tocapitalize(MiddleName)
const capitalizedLastName = tocapitalize(newLastName)
const capitalizednewSuffix = tocapitalize(newSuffix)

const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedLastName} ${capitalizednewSuffix}`

document.getElementById('result').textContent = fullName

}

//capitalizer function
function tocapitalize(word)
{
return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}
