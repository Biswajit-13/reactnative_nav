import { Navigation } from "react-native-navigation";
// import Nav from "./navigation";
import {main} from "./navigation"
import { Screens } from "./src/screens";
Screens()
Navigation.events().registerAppLaunchedListener(()=>{
  main();
})