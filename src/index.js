// Refactor so not so much global variables

let mainContentDiv = document.getElementById("content");
let tabNames = ["Home", "Content", "Contact"];
window.addEventListener("load", () => generateInitialContent(mainContentDiv, tabNames));
// End of what needs to be refactored

function generateInitialContent(contentDiv, tabs) {
  contentDiv.appendChild(generateMainHeader());
  contentDiv.appendChild(generateNav(tabs))
}

function generateMainHeader() {
  let header = document.createElement("h1");
  header.setAttribute("id", "mainHeader");
  header.innerText = "Restaurant Project";
  return header;
}

function generateNav(tabArr) {
  // create a ul element
  let ul = document.createElement("ul");
  ul.setAttribute("id", "tabNav");
  tabArr.forEach(tab => {
    generateTab(ul, tab);
  });
  return ul;
}

function generateTab(ul, tabName) {
  // create li element
  let li = document.createElement("li");
  li.setAttribute("class", "tabLi");
  li.innerText = tabName;
  // append li element into a ul
  ul.appendChild(li);
}