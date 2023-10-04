import { useContext, useEffect, useRef } from "react";
import useOnScreen from "./useOnScreen";
import { NavContext } from "../context/NavContext";

const useNav = (navLinkId) => {
  const ref = useRef(null);
  const { setActiveLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId((prev) => (prev = navLinkId));
    }
  }, [isOnScreen, setActiveLinkId, navLinkId]);
  return ref;
};

export default useNav;
