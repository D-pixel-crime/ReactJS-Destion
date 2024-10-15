import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";

interface sidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: sidebarProps) => {
  return (
    <nav
      className={`fixed z-50 top-0 left-0 h-screen bg-white ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-[105%]"
      } flex flex-col justify-between items-center lg:w-1/6 md:w-1/5 w-1/3 py-3 px-2.5 border-r-2 border-r-slate-300/90 shadow-2xl shadow-slate-500/40 transition duration-700 ease-in-out`}
    >
      <div className="flex flex-col gap-16 w-full px-2">
        <h1 className="text-4xl font-semibold text-center text-slate-500">
          DEMO Sidebar
        </h1>

        <div className="flex flex-col w-full border-2 rounded-md">
          <Link
            className={`flex gap-4 px-2 py-1.5 hover:bg-slate-300 items-center text-base font-semibold transition border-b-2 border-y-slate-200 w-full`}
            to={"/login"}
          >
            <Avatar>
              <LoginTwoToneIcon />
            </Avatar>{" "}
            Login
          </Link>
          <Link
            className={`flex gap-4 px-2 py-1.5 hover:bg-slate-300 items-center text-base font-semibold transition border-b-2 border-y-slate-200 w-full`}
            to={"/signup"}
          >
            <Avatar>
              <PersonAddTwoToneIcon />
            </Avatar>{" "}
            Signup
          </Link>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setIsSidebarOpen(false);
        }}
        className="px-2 w-full tracking-[0.25rem] py-1 font-semibold rounded-md bg-red-500 text-white border-2 border-red-500 hover:text-red-600 hover:bg-transparent transition"
      >
        CLOSE
      </button>
    </nav>
  );
};

export default Sidebar;
