import {
  restaurantPage,
} from "./helpers";

import {
  homePageContent,
} from "./home";

window.addEventListener("load", () => restaurantPage.generateInitialContent(document.getElementById("content"), ["Home", "About", "Contact"], homePageContent));