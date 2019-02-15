import {
  generateContent
} from "./helpers"

import {
  aboutPageContent
} from "./contents"

// Event listener attach to home tab
export function generateAbout() {
  document.getElementById("about-tab").addEventListener("click", () => generateContent(aboutPageContent, document.getElementById("content")));
}