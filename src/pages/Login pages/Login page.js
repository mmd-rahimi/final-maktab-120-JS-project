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
              className: "border-none h-[40px] rounded-lg bg-gray-300 w-full p-2",
            }),
            El({
              element: "input",
              type: "password",
              name: "password",
              placeholder: " Password",
              id: "login-password",
              className: "border-none h-[40px] rounded-lg bg-gray-300 w-full p-2",
            }),
            El({
              element: "label",
              className:
                "text-[16px] w-full flex flex-col justify-center gap-[10px]",
              children: [
                "Remember Me",
                El({
                  element: "input",
                  type: "checkbox",
                  name: "rememberMe",
                  id: "remember-me-checkbox",
                  className:
                    "border-2 border-gray-600 rounded-sm w-[16px] h-[16px] bg-gray-100 mr-2",
                }),
                El({
                  element: "button",
                  type: "submit",
                  className:
                    "border-none h-[27px] rounded-full bg-black w-[18rem] text-white",
                  children: "Sign In",
                }),
              ],
            }),
            El({
              element: "p",
              id: "error-message",
              className: "text-red-500 text-center hidden",
              children: ["incorrect"],
            }),
          ],
          onsubmit: (event) => {
            loginData(event);
          },
        }),
      ],
    });
  };
    