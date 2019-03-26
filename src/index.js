
import {homeContentGenerator} from './home';
import {aboutContentGenerator} from './about';
import { contactContentGenerator } from './contact';

function generateMainHeader() {
      let header = document.createElement("h1");
      header.setAttribute("id", "mainHeader");
      header.innerText = "Ryto's Authentic Cuisine";
      return header;
    };

  function generateNav(tabArr) {
      // create a ul element
      let ul = document.createElement("ul");
      ul.setAttribute("id", "tabNav");
      tabArr.forEach(tab => {
        generateTab(ul, tab);
      });
      return ul;
    };
    // Function to generate top nav during page load
    function generateTab(ul, tabName) {
      // create li element
      let li = document.createElement("li");
      li.setAttribute("class", "tabLi");
      li.setAttribute("id", `${tabName.toLowerCase()}-tab`);
      li.innerText = tabName;
      // append li element into a ul
      ul.appendChild(li);
    };
function generateContent(content, mainDiv) {
      // Before appending remove any existing div inside main div (previous content)
      let previousContent = document.getElementById("tabContentDiv");
      let currentContent = content;
      if (previousContent !== null) mainDiv.removeChild(previousContent);
      // Append all elements into content's div
      appendCurrentContent(currentContent, mainDiv);
    };

    // Appending contents function
  function appendCurrentContent(currentContent, mainDiv) {
      currentContent.contentDiv.appendChild(currentContent.image);
      currentContent.contentDiv.appendChild(currentContent.contentBody);
      // Append content div into main div
      mainDiv.appendChild(currentContent.contentDiv);
    };


function generateInitialContent(contentDiv, tabs, homeContent) {
      contentDiv.appendChild(generateMainHeader());
      contentDiv.appendChild(generateNav(tabs));
      // Let home content appear during page load
      generateContent(homeContent, contentDiv);
      // Home tab should appear active
      changeTabAppearance(document.getElementById("home-tab"));
      // Add event listeners to all content divs and tabs
      addListenersToDivsAndTabs();
    };
  
  function changeTabAppearance(tab) {
      let previousTab = document.getElementsByClassName("active")[0];
      if (previousTab !== undefined) {
        previousTab.setAttribute("class", "tabLi");
      }
      tab.setAttribute("class", "tabLi active");
    };

    // function to add click event listeners to all content divs and tabs
    function addListenersToDivsAndTabs() {
      addContentListener("home-tab", homeContentGenerator());
      addContentListener("about-tab", aboutContentGenerator());
      addContentListener("contact-tab", contactContentGenerator());
    };

    function addContentListener(id, content) {
      let tab = document.getElementById(id);
      tab.addEventListener("click", () => {
        generateContent(content, document.getElementById("content"));
        changeTabAppearance(tab);
      });
    };

generateInitialContent(document.getElementById("content"), ["Home", "About", "Contact"], homeContentGenerator());
