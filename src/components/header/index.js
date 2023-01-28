import HeaderProduct from "./headerproduct";
import HeaderHome from "./headerHomePage";
import { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";

export default function Header() {
  useEffect(() => {});
  //const [login , setIsLogin] = useState(false)

  return (
    <>
      {localStorage.getItem("@userLogin") ? <HeaderProduct  /> : <HeaderHome />}
    </>
  );
}
