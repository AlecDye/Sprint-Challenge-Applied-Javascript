// Step 2: Create Tabs
// -----------------------
// 1. Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// 2. Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// --- server request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log('Error something went wrong', error)
    });

// data sent from axios. array?
// data:
// topics: Array(5)
// 0: "javascript"
// 1: "bootstrap"
// 2: "technology"
// 3: "jquery"
// 4: "node.js"
function createTabs(data) {
    // --- create elements
    const tabItem = document.createElement('div'),
        tabCont = document.createElement('div');

    // --- appending elements
    tabCont.append(tabItem);

    // --- assigning classes
    tabItem.classList.add('tab');

    // --- defining content
    tabItem.textContent = data.topics;

    // --- returning function
    return tabItem;
}

// --- DOM target
const attachTabs = document.querySelector('.title');

// --- calling function
attachTabs.append(createTabs());
console.log(createTabs());