import { El } from "../EL/createElement";

export function ob1() {

  const title = El({element:"div", children:["svg", " ", "Shoea"]});
  // const logo = El({element:"div", children:["logo"]});
  const loading = El({element:"div", children:["Loading..."], className: "text-4xl"});

  return El({
    element: "div",
    className: "flex justify-between items-center flex-col gap-60 mt-96 text-6xl",
    children: [title, loading]
  })
}