import {
  homePageContent
} from "./home";

import {
  aboutPageContent
} from "./about";

import {
  contactPageContent
} from "./contact";

export const restaurantPage = (() => {
  return {

    generateContent(content, mainDiv) {
      // Before appending remove any existing div inside main div (previous content)
      let previousContent = document.getElementById("tabContentDiv");
      let currentContent = this.createContent(content)
      if (previousContent !== null) mainDiv.removeChild(previousContent);
      // Append all elements into content's div
      this.appendCurrentContent(currentContent, mainDiv);
    },

    changeTabAppearance(tab) {
      let previousTab = document.getElementsByClassName("active")[0];
      if (previousTab !== undefined) {
        previousTab.setAttribute("class", "tabLi");
      }
      tab.setAttribute("class", "tabLi active");
    },

    generateMainHeader() {
      let header = document.createElement("h1");
      header.setAttribute("id", "mainHeader");
      header.innerText = "Ryto's Authentic Cuisine";
      return header;
    },

    generateNav(tabArr) {
      // create a ul element
      let ul = document.createElement("ul");
      ul.setAttribute("id", "tabNav");
      tabArr.forEach(tab => {
        this.generateTab(ul, tab);
      });
      return ul;
    },

    // Function to generate top nav during page load
    generateTab(ul, tabName) {
      // create li element
      let li = document.createElement("li");
      li.setAttribute("class", "tabLi");
      li.setAttribute("id", `${tabName.toLowerCase()}-tab`);
      li.innerText = tabName;
      // append li element into a ul
      ul.appendChild(li);
    },

    // Calling the function to add listeners
    addContentListener(id, content) {
      let tab = document.getElementById(id);
      tab.addEventListener("click", () => {
        this.generateContent(content, document.getElementById("content"));
        this.changeTabAppearance(tab);
      });
    },

    // function to add click event listeners to all content divs and tabs
    addListenersToDivsAndTabs() {
      this.addContentListener("home-tab", homePageContent);
      this.addContentListener("about-tab", aboutPageContent);
      this.addContentListener("contact-tab", contactPageContent);
    },

    // Creating content for each div that appears during load or tab click
    createContent(content) {
      // For every tab content have a main content div
      let contentDiv = document.createElement("div");
      contentDiv.setAttribute("id", "tabContentDiv");

      // Each tab content should have a main text
      let contentBody = document.createElement("div");
      contentBody.setAttribute("class", "content");
      contentBody.innerHTML = content.body;
      // Each tab content should have an image
      let image = document.createElement("img");
      image.setAttribute("class", "content-img");
      image.setAttribute("src", `./images/${content.image}`);
      return {
        contentDiv,
        contentBody,
        image
      };
    },

    // Appending contents function
    appendCurrentContent(currentContent, mainDiv) {
      currentContent.contentDiv.appendChild(currentContent.image);
      currentContent.contentDiv.appendChild(currentContent.contentBody);
      // Append content div into main div
      mainDiv.appendChild(currentContent.contentDiv);
    },

    generateInitialContent(contentDiv, tabs, homeContent) {
      contentDiv.appendChild(this.generateMainHeader());
      contentDiv.appendChild(this.generateNav(tabs));
      // Let home content appear during page load
      this.generateContent(homeContent, contentDiv);
      // Home tab should appear active
      this.changeTabAppearance(document.getElementById("home-tab"));
      // Add event listeners to all content divs and tabs
      this.addListenersToDivsAndTabs();
    }
  }
})();