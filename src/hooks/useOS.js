import { useState, useEffect } from "react";
import UAParser from "ua-parser-js";

function useOS() {
  const [os, setOs] = useState("");

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    let osName = result.os.name;
    if (osName === "Mac OS") {
      osName = "macOS";
    }
    setOs(osName);
  }, []);

  return os;
}

export default useOS;
