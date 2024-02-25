let form = document.querySelector("#muj-form")
let count = 1
form.addEventListener("submit", function(event) {
    event.preventDefault()
    count = count + 1

    // novy radek tabulky
    let radek = document.createElement("tr")
    radek.bgColor = "#ffffff"

    // bunky noveho radku
    let bunkaCislo = document.createElement("td")
    bunkaCislo.textContent = count
    let bunkaNazev = document.createElement("td")
    bunkaNazev.textContent = event.target.elements.deskovkaNazev.value
    let bunkaHodnoceni = document.createElement("td")
    bunkaHodnoceni.textContent = event.target.elements.deskovkaHodnoceni.value

    // napoj bunky do radku
    radek.appendChild(bunkaCislo)
    radek.appendChild(bunkaNazev)
    radek.appendChild(document.createElement("td"))
    radek.appendChild(document.createElement("td"))
    radek.appendChild(bunkaHodnoceni)

    // napoj radek do tabulky   
    document.querySelector("#tabulka").appendChild(radek)

})