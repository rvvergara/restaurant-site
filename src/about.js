import {
  generateContent,
  changeTabAppearance
} from "./helpers"

import {
  aboutPageContent
} from "./contents"

// Event listener attach to home tab
export function addAboutListener() {
  document.getElementById("about-tab").addEventListener("click", () => generateContent(aboutPageContent, document.getElementById("content")));
}

export function aboutTabListener() {
  let tab = document.getElementById("about-tab")
  tab.addEventListener("click", () => changeTabAppearance(tab));
}