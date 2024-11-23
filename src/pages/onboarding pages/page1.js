import { router } from "../../../router";
import { El } from "../../EL/createElement";

export function ob1 () {
  setTimeout(() => {
    router.navigate("/welcome");
  }, 3000
 );

  const title = El({element:"img", src:"./images/logo ob1.png", className:"w-[8rem]", children:[]});

  const loading = El({element:"img", src:"./images/loading gif ob1.gif", children:[], className: "w-[2.3rem]"});

  return El({
    element: "div",
    className: "flex flex-col items-center gap-[8rem] text-6xl mt-52 mx-auto w-[320px] h-[480px]",
    children: [title, loading]
  })
}
