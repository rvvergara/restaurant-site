import {
  generateContent,
  changeTabAppearance
} from "./helpers"

import {
  homePageContent
} from "./contents"

// Event listener attach to home tab
export function addHomeListener() {
  document.getElementById("home-tab").addEventListener("click", () => generateContent(homePageContent, document.getElementById("content")));
}

export function homeTabListener() {
  let tab = document.getElementById("home-tab")
  tab.addEventListener("click", () => changeTabAppearance(tab));
}