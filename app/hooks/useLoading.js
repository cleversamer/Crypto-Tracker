import { useState, useEffect } from "react";
import settings from "../config/settings";

const useLoading = (
  initialValue = true,
  duration = settings.splashViewTime
) => {
  const [loading, setLoading] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, duration);

    return clearTimeout;
  }, []);

  return loading;
};

export default useLoading;
