// Generating content for each tab
export function generateContent(content, mainDiv) {
  // For every tab content have a main content div
  let contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "tabContentDiv");
  // Each tab content should have a heading
  let heading = document.createElement("h3");
  heading.setAttribute("class", "heading");
  heading.innerText = content.heading;
  // Each tab content should have a main text
  let text = document.createElement("p");
  text.setAttribute("class", "content");
  text.innerText = content.text;
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
  contentDiv.appendChild(text);
  // Append content div into main div
  mainDiv.appendChild(contentDiv);
}

export function changeTabAppearance(tab) {
  let previousTab = document.getElementsByClassName("active")[0];
  if (previousTab !== undefined) {
    previousTab.removeAttribute("class", "active");
  }
  tab.setAttribute("class", "tabLi active");
}