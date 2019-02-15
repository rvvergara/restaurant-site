import {
  generateContent,
  changeTabAppearance
} from "./helpers"

import {
  contactPageContent
} from "./contents"

// Event listener attach to home tab
export function addContactListener() {
  document.getElementById("contact-tab").addEventListener("click", () => generateContent(contactPageContent, document.getElementById("content")));
}

export function contactTabListener() {
  let tab = document.getElementById("contact-tab")
  tab.addEventListener("click", () => changeTabAppearance(tab));
}