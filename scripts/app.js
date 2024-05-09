const inputName = document.getElementById('input-name')
const charName = document.getElementById('character-name')
const charImg = document.getElementById('character-img')
const charType = document.getElementById('character-type')
const charWeight = document.getElementById('character-weight')
const findBtn = document.getElementById('find-btn')

findBtn.addEventListener('click', async () => {
    
    try {
        const input = inputName.value
        // const api = `https://rickandmortyapi.com/api/character?name=${input}`
        const api = `https://pokeapi.co/api/v2/pokemon/${input}`
        const response = await(await fetch(api)).json()
        console.log(input)
        console.log(response)
if (!response){
    throw {message : `${input} not found`}
}

if (response?.length){
    throw {message : `${input} not found`}
}
const character = response
weightPoke = Math.abs((character.weight)/10)


charName.innerHTML = character.species.name.toUpperCase()
charImg.src = character.sprites.other.home.front_default
charType.innerHTML = `ประเภท : ${character.types[0].type.name}`.toUpperCase()
charWeight.innerHTML = `น้ำหนัก : (${weightPoke}) กิโลกรัม,  ส่วนสูง : (${character.height}) เซนติเมตร` 


    }catch (error) {
window.alert(`[Error] => ${error.message}`)
    }finally{
inputName.value = ''
    }
})


