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

}
