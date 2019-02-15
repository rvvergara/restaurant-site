import {
  generateContent
} from "./helpers"

import {
  homePageContent
} from "./contents"

// Event listener attach to home tab
export function generateHome() {
  document.getElementById("home-tab").addEventListener("click", () => generateContent(homePageContent, document.getElementById("content")));
}