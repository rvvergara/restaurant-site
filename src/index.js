import {
  generateInitialContent,
} from "./helpers";

import {
  homePageContent,
} from "./home";

window.addEventListener("load", () => generateInitialContent(document.getElementById("content"), ["Home", "About", "Contact"], homePageContent));