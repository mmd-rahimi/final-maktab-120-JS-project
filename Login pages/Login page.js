import { El } from "../EL/createElement";

export function login1(){
    const backBtn = El({element:"img",src:"./images/turn back logo.png", className:"w-[1.3rem]", children:[]})
    const backBtnDiv = El({
        element:"a",
        href:"/",
        className:"inline-flex mx-8 my-6",
        children:[backBtn]
    })
    const logo = El({element:"img", src:"./images/main logo.png", className:"mt-[4rem] w-[5rem]", children:[]})
    const logoDiv = El({
        element:"div",
         className:"flex items-center justify-center",
          children:[logo]})
    const header = El({element:"p", className:"flex items-center justify-center mt-[7rem] text-6xl", children:["Login to Your Account"]})
    const input1 = El({element:"input", className:"flex w-[35rem] h-[3rem] items-start bg-slate-100 border-gray-500 border-2 rounded-xl p-4  placeholder-gray-400",placeholder:'Email', children:[""]})
    const input2 = El({element:"input", className:"flex w-[35rem] h-[3rem] items-start bg-slate-100 border-gray-500 border-2 rounded-xl p-4  placeholder-gray-400",placeholder:'Password', children:[""]})
    const inputs = El({
        element:"div",
         className:"flex gap-4 flex-col items-center justify-center mt-[5rem]",
          children:[input1, input2]
    })
    const checkBox = El({element:"input",type:"checkbox", className:"", children:[]})
    const para = El({element:"lable", className:"text-l", children:["Remember me"]})
    const rememberMe = El({
        element:"div",
        className:"flex gap-1 justify-center items-center mt-[3rem]",
         children:[checkBox, para]
    })
    const btn = El({element:"button", className:"w-[35rem] h-[2.5rem] mt-[5rem] text-xl text-white bg-[#212529] flex items-center justify-center rounded-3xl", children:["Sign in"]})
    const btnDiv = El({element:"div", className:"flex justify-center items-center", children:[btn]})

    return El ({
        element:"div",
        className:"",
         children:[backBtnDiv, logoDiv, header, inputs, rememberMe, btnDiv]
    });
}