import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ProfileIcon = ({ color }) => (
  <View>
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.0508 1.69489C6.35934 1.69489 1.74576 6.30847 1.74576 12C1.74576 17.6915 6.35934 22.3051 12.0508 22.3051C17.7423 22.3051 22.3559 17.6915 22.3559 12C22.3559 6.30847 17.7423 1.69489 12.0508 1.69489Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.08603 18.5396C4.08603 18.5396 6.38303 15.6067 12.0508 15.6067C17.7186 15.6067 20.0167 18.5396 20.0167 18.5396H4.08603ZM12.0508 11.9999C12.8708 11.9999 13.6571 11.6742 14.2369 11.0945C14.8166 10.5147 15.1424 9.72834 15.1424 8.90842C15.1424 8.0885 14.8166 7.30216 14.2369 6.72238C13.6571 6.14261 12.8708 5.81689 12.0508 5.81689C11.2309 5.81689 10.4446 6.14261 9.86479 6.72238C9.28502 7.30216 8.9593 8.0885 8.9593 8.90842C8.9593 9.72834 9.28502 10.5147 9.86479 11.0945C10.4446 11.6742 11.2309 11.9999 12.0508 11.9999V11.9999Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  </View>
);

export default ProfileIcon;
