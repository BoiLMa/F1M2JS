console.log("script is geladen.")

const groentevak = document.getElementById("groente");

const fruitvak = document.getElementById("fruit");

function zetInFruitLa(fruit){
    console.log("zet in fruit la");

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = "red";
    fruitvak.appendChild(nieuwElement);

}


function zetInGroenteLa(groente){
    console.log("zet in groente la");

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = groente;
    nieuwElement.className = "green";
    groentevak.appendChild(nieuwElement);
}