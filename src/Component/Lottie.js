import React from "react";
import Lottie from "react-lottie";
import lottiefile from "..lottiefile.json";
import lotie2 from "../lotie2.json";

function LottieComponent() {
  const lottie2 = {
    player: "#tenthLottie",
    mode: "cursor",
    actions: [
      {
        type: "click",
        forceFlag: false,
      },
    ],
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotie2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={"100vh"} width={"100vw"} />
    </div>
  );
}

export default Lottie;
