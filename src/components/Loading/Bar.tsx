import React, { memo, useEffect, useState } from "react";
import TopLoadingBar from "react-top-loading-bar";

function BarLoading({ loading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <TopLoadingBar
      progress={progress}
      color="#23395d"
      height={3}
      onLoaderFinished={() => console.log("onLoaderFinished")}
    />
  );
}

export default memo(BarLoading);
