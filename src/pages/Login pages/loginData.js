import { Url } from "../../api/Url";
import { router } from "../../../router";

export const loginData = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const rememberMe = document.getElementById("rememberMe");

    const response = await fetch(`${Url}/users`);
    const users = await response.json();

    const user = users.find((user) => user.email === email)
    

    if(user && user.password === password) {
        if(rememberMe) {
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
        }   else {
            localStorage.removeItem("email", email)
            localStorage.removeItem("password", password)
        }

        // go to homePage if login


        if(router && router.navigate) {
            router.navigate("/home")
        }
        else{
            document.console.log("error")
        }
      }
    }
// const savedLogin = () => {
//     const email = localStorage.getItem("email");
//     const password = localStorage.getItem("password");
  
//     if (email && password) {
//       fetch(`${Url}/users`)
//         .then((res) => res.json())
//         .then((users) => {
//           const user = users.find(
//             (user) => user.email === email && user.password === password
//           );
//           if (user) {
//             router.navigate("/home"); // Successfully logged in
//           } else {
//             localStorage.removeItem("email");
//             localStorage.removeItem("password");
//           }
//         })
//         .catch((err) => {
//           console.error("Error checking auto-login:", err);
//         });
//     }
//   };
//   savedLogin();