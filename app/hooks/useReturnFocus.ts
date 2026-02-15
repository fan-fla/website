import { useEffect, useRef } from "react";

export function useReturnFocus(isActive: boolean): void {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive) {
      // Store the currently focused element when becoming active
      previousActiveElement.current = document.activeElement as HTMLElement;
    } else if (previousActiveElement.current) {
      // Restore focus when becoming inactive
      previousActiveElement.current.focus();
      previousActiveElement.current = null;
    }
  }, [isActive]);
}
