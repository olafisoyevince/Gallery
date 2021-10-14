let dogArray = [
  {
    image: 'boerboel',
    breed: 'Boerboel',
    price: 'N300,000'
  },
  {
    image: 'chihuahua',
    breed: 'Chihuahua',
    price: 'N350,000'
  },
  {
    image: 'japanese tosa inu',
    breed: 'Japanese Tosa',
    price: 'N250,000'
  },
  {
    image: 'pug-2',
    breed: 'Pug',
    price: 'N400,000'
  },
  {
    image: 'weimaraner',
    breed: 'Weimaraner',
    price: 'N200,000'
  },
  {
    image: 'dachshund',
    breed: 'Dachshund',
    price: 'N300,000'
  },
  {
    image: 'corgi',
    breed: 'Corgi',
    price: 'N300,000'
  },
  {
    image: 'dalmatian',
    breed: 'Dalmatian',
    price: 'N230,000'
  },
  {
    image: 'doberman',
    breed: 'Doberman',
    price: 'N500,000'
  },
  {
    image: 'labrador-retriever',
    breed: 'Labrador Retriever',
    price: 'N300,000'
  },
  {
    image: 'bulldog',
    breed: 'Bulldog',
    price: 'N300,000'
  },
  {
    image: 'rhodesian-ridgeback',
    breed: 'Rhodesian Ridgeback',
    price: 'N300,000'
  },
]



let dogArraySection = document.getElementById('dog-wrapper');
let html = '';

dogArray.forEach(element => {
  html += `
        <div class="card mx-3 my-3" style="width: 18rem;">
        <div class="card-image">
          <img src="./images/${element.image}.jpg" alt="" class="img-fluid">
        </div>
        <div class="card-body">
        <h5 class="card-title">Breed: ${element.breed}</h5>
        <p class="card-text">Price: ${element.price}</p>
        </div>
      </div>
  `

  dogArraySection.innerHTML = html
});