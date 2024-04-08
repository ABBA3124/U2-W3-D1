// ESERCIZIO 1

class user {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  //confronto età
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`
    }
  }
}

//definisco i vari user
const user1 = new user("Davide", "Abbadessa", 25, "Sicilia")
const user2 = new user("Mario", "Rossi", 50, "Milano")
const user3 = new user("Valentino", "Rossi", 50, "Milano")

console.log("Prova dati users", user1, user2)

//verifichiamo che il tutto compari età tra i 2 utenti
console.log(user1.compareAge(user2))
console.log(user2.compareAge(user1))
console.log(user3.compareAge(user2))

// ESERCIZIO 2

class pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  //Verfica se due pet hanno lo stesso padrone
  static haveSameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName
  }
}

const pet1 = new pet("Charlie", "Luca", "Cane", "Labrador")
const pet2 = new pet("Whiskers", "Luca", "Gatto", "Soriano")
const pet3 = new pet("Bunny", "Davide", "Coniglio", "Nano")

// Hanno lo stesso padrone ?
console.log(pet.haveSameOwner(pet1, pet2))
console.log(pet.haveSameOwner(pet2, pet3))
console.log(pet.haveSameOwner(pet1, pet3))


// ESERCIZIO 2 - Gestione del form
document.addEventListener("DOMContentLoaded", function () {
  const pets = []

  document
    .getElementById("petForm")
    .addEventListener("submit", function (event) {
      event.preventDefault()

      const petName = document.getElementById("petName").value
      const ownerName = document.getElementById("ownerName").value
      const species = document.getElementById("species").value
      const breed = document.getElementById("breed").value

      // New istanza Pet
      const newPet = new pet(petName, ownerName, species, breed)
      pets.push(newPet) // Add istanza array pets

      // Refresh elenco visivo Pet
      updatePetList()
    })

  function updatePetList() {
    const petListDiv = document.getElementById("petList")
    petListDiv.innerHTML = ""

    pets.forEach((pet, index) => {
      const petInfo = document.createElement("div")
      petInfo.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`

      // add-on button eleimina pet
      const deleteButton = document.createElement("button")
      deleteButton.textContent = "Elimina Pet"
      deleteButton.onclick = function () {
        // rimuove pet dall'array
        pets.splice(index, 1)
        // Refresh elenco visivo Pet
        updatePetList()
      }
      petInfo.appendChild(deleteButton)
      petListDiv.appendChild(petInfo)
    })
  }
})