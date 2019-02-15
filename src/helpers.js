import {
  homePageContent,
  aboutPageContent,
  contactPageContent
} from "./contents";

export function generateContent(content, mainDiv) {
  // For every tab content have a main content div
  let contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "tabContentDiv");
  // Each tab content should have a heading
  let heading = document.createElement("h3");
  heading.setAttribute("class", "heading");
  heading.innerText = content.heading;
  // Each tab content should have a main text
  let contentBody = document.createElement("div");
  contentBody.setAttribute("class", "content");
  contentBody.innerHTML = content.body;
  // Each tab content should have an image
  let image = document.createElement("img");
  image.setAttribute("class", "content-img");
  image.setAttribute("src", content.image);
  // Before appending remove any existing div inside main div (previous content)
  let previousContent = document.getElementById("tabContentDiv");
  if (previousContent !== null) mainDiv.removeChild(previousContent);
  // Append all elements into content's div
  contentDiv.appendChild(heading);
  contentDiv.appendChild(image);
  contentDiv.appendChild(contentBody);
  // Append content div into main div
  mainDiv.appendChild(contentDiv);
}

export function changeTabAppearance(tab) {
  let previousTab = document.getElementsByClassName("active")[0];
  if (previousTab !== undefined) {
    previousTab.setAttribute("class", "tabLi");
  }
  tab.setAttribute("class", "tabLi active");
}

export function generateInitialContent(contentDiv, tabs, homeContent) {
  contentDiv.appendChild(generateMainHeader());
  contentDiv.appendChild(generateNav(tabs));
  // Let home content appear during page load
  generateContent(homeContent, contentDiv);
  // Home tab should appear active
  changeTabAppearance(document.getElementById("home-tab"));
  // Add event listeners to all content divs and tabs
  addListenersToDivsAndTabs();
}

export function generateMainHeader() {
  let header = document.createElement("h1");
  header.setAttribute("id", "mainHeader");
  header.innerText = "Restaurant Project";
  return header;
}

export function generateNav(tabArr) {
  // create a ul element
  let ul = document.createElement("ul");
  ul.setAttribute("id", "tabNav");
  tabArr.forEach(tab => {
    generateTab(ul, tab);
  });
  return ul;
}

export function generateTab(ul, tabName) {
  // create li element
  let li = document.createElement("li");
  li.setAttribute("class", "tabLi");
  li.setAttribute("id", `${tabName.toLowerCase()}-tab`);
  li.innerText = tabName;
  // append li element into a ul
  ul.appendChild(li);
}


function addListenersToDivsAndTabs() {
  addContentListener("home-tab", homePageContent);
  addContentListener("about-tab", aboutPageContent);
  addContentListener("contact-tab", contactPageContent);
}

// Event listener attach
export function addContentListener(id, content) {
  let tab = document.getElementById(id);
  tab.addEventListener("click", () => {
    generateContent(content, document.getElementById("content"));
    changeTabAppearance(tab);
  });
}