import {
  homePageContent
} from "./contents";

export function generateHomeContent(homePageContent, contentDiv) {
  let heading = document.createElement("h3");
  heading.setAttribute("class", "heading");
  heading.innerText = homePageContent.heading;

  let text = document.createElement("p");
  text.setAttribute("class", "content");
  text.innerText = homePageContent.text;

  let image = document.createElement("img");
  image.setAttribute("class", "content-img");
  image.setAttribute("src", homePageContent.image);
  contentDiv.appendChild(heading);
  contentDiv.appendChild(image);
  contentDiv.appendChild(text);
}