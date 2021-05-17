/**
 * A GLOBAL SERVICE TO INITIALIZE GLOBAL CONSTANTS
 * Can be used directly in code using global.<var name>
 */

 import { Dimensions, Platform } from "react-native";


 const deviceWidth = Dimensions.get("window").width;
 const deviceHeight = Dimensions.get("window").height;
 
 global.deviceWidth=deviceWidth;
 global.deviceHeight=deviceHeight;
 global.aspectRatio = deviceHeight / deviceWidth;
 global.isIOS = Platform.OS == "ios";
 