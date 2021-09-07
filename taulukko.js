var puhelimet = ["Apple", "Samsung", "Huawei", "Nokia", "OnePlus", "Honor", "Xperia","HTC"]
for (var i = 0; i < puhelimet.length; i++){
    if (puhelimet[i] == "Samsung"){
        console.log("Minun puhelimen merkki on: " + puhelimet[i])
    }
    else {
        console.log(puhelimet[i])
    }   
}

console.log("------------------------------") //erottaja

//typeof komenolla voi selvittää onko kyseessä esim. string, nuber, function...
console.log(typeof("Kalle"))
console.log(typeof("54"))
console.log(typeof(257))
console.log("Tyypi on: " + typeof(true))

console.log("------------------------------") //erottaja

//slice ja indexof
var merkkijono = "Tämä on JavaScript -harjoittelua, eikös vain?";
var positio = merkkijono.indexOf("-");
console.log(merkkijono);
console.log("Tavuviiva on positiossa: " + positio);

console.log(merkkijono.slice(positio+1,merkkijono.length)); //ottaa miinus merkin jälkisen tekstin