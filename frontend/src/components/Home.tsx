import { useState } from "react";
import { MainContainer } from "../containers/MainContainer";
import Sidebar from "./Sidebar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MainContainer>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsSidebarOpen(true);
        }}
        className={`w-fit z-40 p-2 text-slate-500/80 hover:scale-110 fixed top-2 left-2 border-2 border-slate-500/80 rounded-full bg-slate-300 ${
          isSidebarOpen ? "hidden" : "visible"
        } shadow-md shadow-slate-500 transition`}
      >
        <KeyboardArrowRightIcon />
      </button>
      <section className="w-full h-screen flex-center flex-col gap-10 px-10">
        <h1 className="text-5xl w-fit p-2">
          Welcome to{" "}
          <span className="bg-gradient-to-tr from-blue-600 via-violet-500 to-blue-600 bg-clip-text text-transparent">
            DEMO-Frontend for Destian
          </span>
        </h1>
        <p className="text-slate-500 text-xl">
          This is a demo project for Destian. It is a frontend project that
          showcases a simple{" "}
          <span className=" underline text-amber-600">sidebar,{""}</span>{" "}
          <span className="underline text-green-600">login</span> and{" "}
          <span className="underline text-red-600">logout</span> pages.
          <br />
          The project is built using Vite-React, TailwindCSS, and MUI.
        </p>
      </section>
    </MainContainer>
  );
};
