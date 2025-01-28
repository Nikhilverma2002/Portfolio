import React, { useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    console.log("Splash screen mounted");
    const timer = setTimeout(() => {
      console.log("Splash screen finished");
      onFinish();
    }, 1000); // 3 seconds

    return () => {
      console.log("Splash screen unmounted");
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img
        src={require("../images/logo.png")}
        alt="Logo"
        className="splash-logo"
      />
    </div>
  );
};

export default SplashScreen;
