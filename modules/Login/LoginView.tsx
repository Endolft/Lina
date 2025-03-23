"use client";
import withLoginController from "./withLoginController";
import { LoginViewType } from "./types";
import logoLina from "@/public/assets/logo-lina.svg";
import iconLogin from "@/public/assets/icon-login.svg";
import { Login } from "@/components/Login";
import Img from "@/components/Img";

const LoginView: LoginViewType = () => {
  return (
    <div className="flex !h-screen w-screen bg-n0 bg-opacity-75 flex-col  b items-center justify-between shadow-e4 p-3xl animate__animated animate__fadeIn ">
      <div className="flex-1 flex flex-col gap-8 justify-center items-center">
        <Img src={logoLina} alt="logo lina" className="w-24 h-24" />
        <h4 className="font-bold">Log In</h4>
        <div className="bg-p1-25 rounded-full p-2 shadow-e1 w-fit">
          <Img src={iconLogin} alt="logi " />
        </div>
        <h6 className="text-n3 ">Welcome to Lina</h6>
      </div>
      <Login />
    </div>
  );
};

export default withLoginController(LoginView);
