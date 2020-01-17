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
        // console.log(response)
        createTabs(response.data.topics);
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

// note: this just creates one tab?
// note: need to create 5 tabs from one element?
function createTabs(topics) {
    // --- create elements

    topics.forEach(data => {
        const tabItem = document.createElement('div');
        tabItem.classList.add('tab');
        tabItem.textContent = data;
        attachTabs.append(tabItem);
    });

    //     tabCont = document.createElement('div');

    // // --- appending elements
    // tabCont.append(tabItem);

    // // --- assigning classes
    // tabItem.classList.add('tab');

    // // --- defining content
    // // error: topics is undefined?
    // tabItem.textContent = data;

    // --- returning function
    return topics;
}

// --- DOM target
const attachTabs = document.querySelector('.topics');

// // --- calling function
// attachTabs.append(createTabs());
// console.log(createTabs());
