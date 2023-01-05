import { Navigation } from "react-native-navigation";

import Login from "./login/login";
import Home  from "./content/content";
export const Screens = async() =>{
Navigation.registerComponent("Login",()=>Login);
Navigation.registerComponent("Home",()=>Home);
}