// STEP 3: Create Article cards.
// -----------------------
// 1. Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// 2 .You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// 3. Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// 4. Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response)
        // --- calling function
        createCards(response.data.articles);
    })
    .catch(error => {
        console.log('Something broke', error)
    });

// --- data received
// data > articles > 5 different arrays > objects > 3 key pairs
// javascript(4 array items), bootstrap(3 items), technology(3), jquery(3), node(2)
// data.articles.Array.unNamedObject.headline, authorPhoto, authorName

function createCards(data) {

    // div
    // headline * author
    // (inside author) div
    // (inside author/div) img
    // (inside author) span

    // --- creating elements
    const newCard = document.createElement('div'),
        cardTitle = document.createElement('div'),
        authorBox = document.createElement('div'),
        imgBox = document.createElement('div'),
        authorImg = document.createElement('img'),
        author = document.createElement('span');

    // --- appending elements
    newCard.append(cardTitle);
    newCard.append(authorBox);
    authorBox.append(imgBox);
    authorBox.append(author);
    imgBox.append(authorImg);


    // --- assigning classes
    newCard.classList('card');
    cardTitle.classList('headline');
    authorBox.classList('author');
    imgBox.classList('img-container');

    // --- defining content
    // note: rename authorName variable to something else?
    cardTitle.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    author.textContent = data.authorName;

    // --- return function
    return newCard;
}

// --- DOM insert target
const attachCards = document.querySelector('.cards-container');

// note: need to loop data through func like in tabs
console.log(attachCards.append(createCards(data)));
// error: not getting the data correctly
