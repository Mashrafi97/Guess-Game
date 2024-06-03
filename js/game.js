let playerone = document.querySelector(".playerone")
let playeronemen = document.querySelector(".playeronemen")
let playeroneinput = document.querySelector(".playeroneinput")
let playeronebtn = document.querySelector(".playeronebtn")
let playeroneerror = document.querySelector(".playeroneerror")

let playertwo = document.querySelector(".playertwo")
let playertwomen = document.querySelector(".playertwomen")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobtn = document.querySelector(".playertwobtn")
let playertwoerror = document.querySelector(".playertwoerror")
let success = document.querySelector(".success")
let chance = document.querySelector(".chance")

let playeronevalue;
let chancevalue = 3

playeronebtn.addEventListener("click",()=>{
    if(playeroneinput.value){
        if(playeroneinput.value - 11){
            if(playeroneinput.value > 0 && playeroneinput.value <= 10){
                playeronevalue = playeroneinput.value
                playerone.style.display = "none"
                playertwo.style.display = "block"
            }else{
                playeroneerror.innerHTML = "Please Enter Number Beetween 1 to 10"
            }
        }else{
            playeroneerror.innerHTML = "Please Enter Number"
        }
    }else{
        playeroneerror.innerHTML = "Please Enter Some Value"
    }
})

playertwobtn.addEventListener("click",()=>{
    if(playertwoinput.value){
        if(playertwoinput.value - 11){
            if(playertwoinput.value > 0 && playertwoinput.value <= 10){
                if(playertwoinput.value == playeronevalue){
                    success.innerHTML = "Win"
                }else{
                    if(chancevalue != 1){
                        chancevalue --
                        chance.innerHTML = chancevalue
                    }else{
                        success.innerHTML = "Lost"
                        chance.innerHTML = ""
                    }
                }
            }else{
                playeroneerror.innerHTML = "Please Enter Number Beetween 1 to 10"
            }
        }else{
            playertwoerror.innerHTML = "Please Enter Number"
        }
    }else{
        playertwoerror.innerHTML = "Please Enter Some Value"
    }
})