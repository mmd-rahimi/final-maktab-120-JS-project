import { router } from "../../../router";
import { El } from "../../EL/createElement";

export function ob2() {
  const all = El({
    element: "img",
    id:"welcome",
    src: "./images/onboarding page 2 (1).png",
    className: "h-screen w-screen",
    onclick: () => {
        router.navigate("/swiper1")
    }
  });

  return El({
    element: "div",
    className: "w-[320px] h-[480px]",
    children: [all],
  });
}
