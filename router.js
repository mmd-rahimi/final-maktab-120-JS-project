import Navigo from "navigo";
import { login1 } from "./src/pages/Login pages/Login page";
import { ob1 } from "./src/pages/onboarding pages/page1";
import { ob2 } from "./src/pages/onboarding pages/page2";
import { ob3 } from "./src/pages/onboarding pages/page3";
import { ob4 } from "./src/pages/onboarding pages/page4";
import { ob5 } from "./src/pages/onboarding pages/page5";
import { homePage } from "./src/pages/Home page/homePage";


export const router = new Navigo("/");
const changePage = (target) => {
  const root = document.getElementById("shop");
  root.innerHTML = "";
  root.append(target());
};

router
  .on("/", () => {
    changePage(ob1);
  })
  .on("/welcome", () => {
    changePage(ob2);
  })
  .on("/swiper1", () => {
    changePage(ob3);
  })
  .on("/swiper2", () => {
    changePage(ob4);
  })
  .on("/swiper3", () => {
    changePage(ob5);
  })
  .on("/login", () => {
    changePage(login1)
  })  
  .on("/home", () => {
    changePage(homePage)
  })


