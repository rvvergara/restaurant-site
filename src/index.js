import {
  restaurantPage,
} from "./helpers";

import {
  homePageContent,
} from "./home";

restaurantPage.generateInitialContent(document.getElementById("content"), ["Home", "About", "Contact"],homePageContent);