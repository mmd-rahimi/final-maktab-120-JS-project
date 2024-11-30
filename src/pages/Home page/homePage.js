import { router } from "../../../router";
import products from "../../api/products";
import { El } from "../../EL/createElement";


export function homePage () {
    // Header of home page
    const profile = El({element:"img",src:"./images/header profile pic.png" , className:"w-[6.5rem]"})
    const logo1 = El({element:"img",src:"./images/bell.svg" , className:"w-5"})
    const logo2 = El({element:"img",src:"./images/heart.svg" , className:"w-5"})
    const flexLogos = El({element:"div",src:"" , className:"flex flex-row gap-2", children:[logo1, logo2]})
    const header = El({
        element:"div",
        className:"flex flex-row justify-between",
        children:[profile, flexLogos]
    })
    // Search bar
    const searchBar = El({element:"input", className:"flex-row bg-slate-100 border-none border-2 rounded-lg p-1  placeholder-gray-400 flex justify-center mt-4 w-[90%] mx-auto",placeholder:'Search'})
    // Brands
    // Brands row 1
    const nike = El({element:"img",src:"./images/brand logos/nike.png" ,className:"w-[3rem]", children:[]})
    const adidas = El({element:"img",src:"./images/brand logos/adidas.png" ,className:"w-[3rem]", children:[]})
    const puma = El({element:"img",src:"./images/brand logos/puma.png" ,className:"w-[3rem]", children:[]})
    const asics = El({element:"img",src:"./images/brand logos/asics.png" ,className:"w-[3rem]", children:[]})
    const brandLogosRow1 = El({element:"div", className:"w-[90%] p-2 gap-4 flex flex-row justify-center mx-auto", children:[nike, adidas, puma, asics]})
    // Brands row 2
    const reebok = El({element:"img",src:"./images/brand logos/reebok.png" ,className:"w-[3rem]", children:[]})
    const newBa = El({element:"img",src:"./images/brand logos/new ba.png" ,className:"w-[3rem]", children:[]})
    const converse = El({element:"img",src:"./images/brand logos/converse.png" ,className:"w-[3rem]", children:[]})
    const more = El({element:"img",src:"./images/brand logos/more.png" ,className:"w-[3rem]", children:[]})
    const brandLogosRow2 = El({element:"div", className:"w-[90%] p-2 gap-4 flex flex-row justify-center mx-auto", children:[reebok, newBa, converse, more]})   
    // All brands
     const brandlogos = El({element:"div", className:"", children:[brandLogosRow1, brandLogosRow2]})

    //  most popular
    const mostPop = El({element:"p", className:"font-bold", children:["Most Popular"]})
    const seeAll = El({element:"a",href:"/home" ,className:"text-sm font-medium", children:["See All"]})
    const seeAllFlex = El({element:"div", className:"flex flex-row justify-between mx-6 mt-2 items-center", children:[mostPop, seeAll]})

    return El({element:"div",
        className:"w-[320px] h-[480px] p-2 flex flex-col",
        children:[header, searchBar, brandlogos, seeAllFlex]
    })
}