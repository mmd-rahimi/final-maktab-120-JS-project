import { El } from "../../EL/createElement";
import { loginData } from "./loginData"


export const login = () => {
    return El({
      element: "div",
      id: "login-page",
      className:
        "w-[320px] h-[full]",
      children: [
        El({
            element:"a",
            href:"/swiper1",
            className:"inline-flex mx-8 my-6",
            children:[
                El({element:"img",src:"./images/turn back logo.png", className:"w-4", children:[]})
            ]
        }),
        El({
            element:"div",
             className:"flex items-center justify-center",
              children:[
               El({element:"img", src:"./images/main logo.png", className:"w-6"})
              ]
            }),
        El({
            element:"p", className:"flex items-center justify-center mt-[2rem]", children:["Login to Your Account"]
        }),
        El({
          element: "form",
          id: "login-form",
          className:
            "p-4 mt-[48px] w-full flex flex-col items-center justify-center gap-[20px]",
          children: [
            El({
              element: "input",
              type: "email",
              name: "email",
              placeholder: " Email",
              id: "login-email",
              className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
            }),
            El({
              element: "input",
              type: "password",
              name: "password",
              placeholder: " Password",
              id: "login-password",
              className: "border-none h-[40px] rounded-lg bg-gray-300 w-full",
            }),
            El({
                element:"div",
                className:"flex flex-col gap-6 mt-4 justify-center",
                children:[
                    El({
                        element:"div",
                        className:"flex flex-row gap-2",
                        children:[
                            El({
                                element:"input",
                                type:"checkbox",
                                children:[],
                                className:""
                            })
                        ]
                    })
                ]
            }),
            El({
              element: "p",
              id: "error-message",
              className: "text-red-500 mt-4 text-center hidden",
              children: ["Invalid email or password"],
            }),
          ],
          onsubmit: (event) => {
            loginData(event);
          },
        }),
      ],
    });
  };
    