import React from "react";
import { View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const CalendarIcon = ({ color }) => (
  <View>
    <Svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M17.8328 3.75589H5.46667C3.19013 3.75589 1.34464 5.60139 1.34464 7.87792V18.183C1.34464 20.4595 3.19013 22.305 5.46667 22.305H17.8328C20.1093 22.305 21.9548 20.4595 21.9548 18.183V7.87792C21.9548 5.60139 20.1093 3.75589 17.8328 3.75589Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.34464 9.93895H21.9548M7.52769 1.69489V5.81692V1.69489ZM15.7718 1.69489V5.81692V1.69489Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  </View>
);

export default CalendarIcon;
