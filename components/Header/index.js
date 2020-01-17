// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// append to DOM via div ".header-container"
// Parent: div
// Children: span, h1, span

function createHeader() {
    // --- create elements
    const headerCont = document.createElement('div'),
        dateHead = document.createElement('span'),
        titleHead = document.createElement('h1'),
        tempHead = document.createElement('span');

    // --- appending elements
    headerCont.append(dateHead);
    headerCont.append(titleHead);
    headerCont.append(tempHead);

    // --- assigning classes
    // error: header is not defined? FIXED: classes are strings
    headerCont.classList.add('header');
    dateHead.classList.add('date');
    tempHead.classList.add('temp');

    // --- defining content
    // note: keep typo?
    dateHead.textContent = 'SMARCH 28, 2019';
    titleHead.textContent = 'Lambda Times';
    // note: hardcode temperature?
    tempHead.textContent = '98°';

    // --- return function
    return headerCont;
}

// --- addition target of DOM
const attachHeader = document.querySelector('header-container');

// --- call function
createHeader();
console.log(createHeader());