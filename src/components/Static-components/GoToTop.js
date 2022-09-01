// function to always go to the top when navigating to another page

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GoToTop() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return null;
}

export default GoToTop;
