let summa = 0
//määritellään process.stdin input-objektiksi
var standard_input = process.stdin
//asetetaan input-merkistö
standard_input.setEncoding('UTF-8')

//aloitettaan sovellus, annettan ohjeet
console.log("JavaScript - laskin, konsoolisovellus V.1")
console.log('Sovellus suljetaan kirjoittamalla "exit"')
process.stdout.write("Anna ensimmäinen luku: ")

//seuraava rutiinia kutsutan aina, kun käyttäjä kirjoita jotain
standard_input.on('data', function(data){

    //sovellus suljetaan kun käyttäjää kirjoita exit
    if(data === 'exit\r\n'){
        console.log("Käyttäjä sulki laskimen")
        process.exit()
    }
    else{
        summa = summa + parseInt(data)
        //luvut tulostettaan 
        console.log('Annoit luvun: ' + data.trim() + ' summa on ' + summa)
        process.stdout.write("Anna uusi luku: ")
    }
})
