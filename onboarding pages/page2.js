import { El } from "../EL/createElement";

export function ob2 (){

    const welcome = El({element:"p", className:"text-5xl", children:["Welcome to 👋"]})
    const shoea = El({element:"p", className:"text-7xl", children:["Shoea"]})
    const para = El({element:"p", className:"text-3xl", children:["The best sneakers & shoes e-commerse app of the century for your fashion needs!"]})

    const bg = El({element:"div", className:"bg-[url(./bg images/p3-bg.jfif)]", children:[]})

    return El({
        element:"div",
        className:"flex flex-col gap-8 justify-center ml-[23rem] mt-[32rem]",
        children:[welcome, shoea, para, bg]
    })

}