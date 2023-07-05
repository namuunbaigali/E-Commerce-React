import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  }, []);
  navigate("/signin");
}
