const init = () => {
  fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(json => displayCards(json))

  const form = document.querySelector('.add-toy-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const newToyCard = {}

    newToyCard.name = document.getElementById('name-box').value
    newToyCard.image = document.getElementById('image-box').value
    newToyCard.likes = 0
    newToyCard.id = -1

    displayCard(newToyCard)
    console.log(newToyCard)

  })
}

function displayCard(toy) {
  //grab box
  const toyBox = document.querySelector('#toy-collection')
  // create new card
  let newCard = document.createElement('div')
  newCard.className = 'card'
  // add stuff to card
  let toyName = document.createElement('h2')
  toyName.innerText = toy.name
  newCard.appendChild(toyName)

  let toyPic = document.createElement('img')
  toyPic.className = 'toy-avatar'
  toyPic.src = toy.image
  newCard.appendChild(toyPic)

  let toyLikes = document.createElement('p')
  toyLikes.innerText = `${toy.likes} likes`
  newCard.appendChild(toyLikes)

  let likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.id = toy.id
  likeBtn.innerText = 'Like'
  newCard.appendChild(likeBtn)

  likeBtn.addEventListener('click', () => {
    toyLikes.innerText = `${toy.likes + 1} likes`
  })

  toyBox.appendChild(newCard)
}



function displayCards(toys) {
  toys.forEach(toy => displayCard(toy))
}


document.addEventListener('DOMContentLoaded', init)









let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
