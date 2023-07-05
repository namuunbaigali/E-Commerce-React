import { useContext } from "react";
import { CurrentUserContext } from "../contexts/UserProvider";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
  return { currentUser, setCurrentUser };
};
