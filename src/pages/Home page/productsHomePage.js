import products from "../../api/products"
import { url } from "../../api/Url"
import { El } from "../../EL/createElement"
        
        export const productsHomePage = async () => {

            const data = await products()


                const products = El({
          element: "div",
          id: "products-home",
          className:
            "p-[24px] w-[414px] bg-white top-[480px] absolute flex flex-wrap justify-center gap-4 overflow-y-scroll  scrollbar-hidden",
          children: [
            El({
              element: "div",
              id: "2",
            //   onclick: () => {
            //     // productModal({ id: item.id });
            //     Router().navigate(`/product/${item.id}`);
            //   },
              className: "",
              children: [
                El({
                  element: "div",
                  className:
                    "w-[182px] h-[182px] bg-gray-100 shadow-lg rounded-2xl",
                  children: [
                    El({
                      element: "img",
                      className: "rounded-2xl w-full h-full",
                      src: "../../src/images/brand/nike.png",
                    }),
                  ],
                }),
                El({
                  element: "div",
                  className: "mt-3",
                  children: [
                    El({
                      element: "p",
                      className: "font-[700] text-[20px]",
                      children: ["nike"],
                    }),
                    El({
                      element: "p",
                      className: "font-[600] text-[16px]",
                      children: ["16000"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        //   El({
        //     element: "div",
        //     className:
        //       "w-[182px] h-[182px] bg-gray-100 shadow-lg rounded-2xl",
        //     children: [
        //       El({
        //         element: "img",
        //         className: "rounded-2xl w-full h-full",
        //         src: `${data.images}`,
        //       }),
        //     ],
        //   }),
        })
        return El({children:[products]})

          
        }