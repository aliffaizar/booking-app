import React, { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

interface FunctionProps {
  handleFunction: () => void;
}

export default function useClickedOutside(
  ref: React.RefObject<ValidRefTarget>,
  { handleFunction = () => {} }: FunctionProps
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleFunction();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
