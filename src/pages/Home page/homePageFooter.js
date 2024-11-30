import { router } from "../../../router";
import { url } from "../../api/Url";
import { El } from "../../EL/createElement";

export function homePageFooter () {
       const footer = El({
        element:"div",
        className:"fixed flex justify-center items-center  w-[100%] h-8 border-4 gap-6 mt-2 p-2",
        id:"footer",
        children:[
            El({
                element:"img",
                className:"",
                src:"./images/home icon.png",
            }),
            El({
                element:"img",
                className:"",
                src:"./images/cart icon.png",
            }),
            El({
                element:"img",
                className:"",
                src:"./images/orders icon.png",
            }),           
            El({
                element:"img",
                className:"",
                src:"./images/wallet icon.png",
            }),
            El({
                element:"img",
                className:"",
                src:"./images/profin icon.png",
            })
        ]
    })
    return El({children:[footer]})
}