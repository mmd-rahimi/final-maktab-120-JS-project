import { router } from "../../../router";
import { El } from "../../EL/createElement";

export function ob5(){

    const bg = El({element:"img",src:"./images/p5-bg.jfif", className:"flex justify-start items-start w-full h-[60%]", children:[]})

    const para = El({element:"p", className:"text-xl text-center mt-[1rem]", children:["Let’s fulfill your fashion needs with shoearight now!"]});

    const swiper = El({element:"img", src:"./images/swiper ob5.png", className:"mt-[1rem]"});

    const btn = El({element:"button", className:"w-[90%] h-10 bg-[#212529] text-white rounded-[1.5rem] mt-[1rem]", children:["Get Started"],
        onclick: () => {
            router.navigate("/login")
        }
    });
    

    return El({
        element:"div",
        className:"flex flex-col items-center w-[320px] h-[480px]",
        children:[bg, para, swiper, btn]
    })
}