const btnGenerate = document.getElementById('generate-btn');


const getCats = async ()=>{
    const URL = 'https://api.thecatapi.com/v1/images/search';
    const catsResults = await fetch(URL);
    const catsResponse = await catsResults.json();

    loopCats(catsResponse);

}

btnGenerate.addEventListener('click', getCats);

function loopCats (cat){
    console.log(cat[0].url);
    const containerCard = document.getElementById('container-card');
    const cardImg= document.createElement('div')
    const imgCat = document.createElement('img');
    imgCat.src = cat[0].url;
    imgCat.alt = 'Some Cat';
    cardImg.classList.add('content-img')
    imgCat.classList.add('img-cat');

    containerCard.appendChild(imgCat);
    containerCard.appendChild(cardImg);
    cardImg.appendChild(imgCat);

}