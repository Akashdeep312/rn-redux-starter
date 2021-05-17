import { AppRegistry } from "react-native";

/**
 * Initialize global variables
 */
import "@services/global";
import App from "@root/app";

/**
 * Change App Name in app.json
 */
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
