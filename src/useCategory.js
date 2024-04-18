import { useLocation } from "react-router-dom";

export function useCategory() {
  const location = useLocation();
  return location.pathname.split("/")[1];
}
