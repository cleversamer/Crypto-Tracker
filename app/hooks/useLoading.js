import { useState, useEffect } from "react";
import settings from "../config/settings";

const useLoading = (initialValue = true) => {
  const [loading, setLoading] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, settings.splashViewTime);

    return clearTimeout;
  }, []);

  return loading;
};

export default useLoading;
