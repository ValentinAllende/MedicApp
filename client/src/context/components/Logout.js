import { useEffect } from "react";
import { useAuthContext } from "../AuthContext";


export default function Logout() {
  const {logout} = useAuthContext();
  useEffect(()=> logout());

  return null;
}

