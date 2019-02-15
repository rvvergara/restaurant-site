import {
  generateInitialContent,
} from "./helpers";

import {
  homePageContent,
} from "./contents";

window.addEventListener("load", () => generateInitialContent(document.getElementById("content"), ["Home", "About", "Contact"], homePageContent));