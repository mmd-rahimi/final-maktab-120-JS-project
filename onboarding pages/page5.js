import { El } from "../EL/createElement";

export function ob5(){
    
    const bg = El({element:"img",src:"./images/p5-bg.jfif", className:"flex justify-start items-start w-[40rem] h-[30rem]", children:[]})

    const para = El({element:"p", className:"text-4xl", children:["Let’s fulfill your fashion needs with shoearight now!"]});

    const border1 = El({element:"div", className:"border-b-4 border-solid", children:["dddd"]});
    const border2 = El({element:"div", className:"border-b-4 border-solid", children:["dddd"]});
    const border3 = El({element:"div", className:"border-b-4 border-solid  border-black", children:["dddd"]});
    const borders = El({
        element:"div",
        className:"flex gap-1 text-white",
        children:[border1, border2, border3]
    })

    const btn = El({element:"button", className:"w-[40rem] h-10 bg-[#212529] text-white rounded-[2rem]", children:["Get Started"]});
    

    return El({
        element:"div",
        className:"flex flex-col gap-16 justify-center items-center",
        children:[bg, para, borders, btn]
    })
}