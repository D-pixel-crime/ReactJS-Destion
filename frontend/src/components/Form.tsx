import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useSnackbar } from "../context/SnackbarProvider";

interface formProps {
  allFields: {
    type: string;
    placeholder: string;
    id: string;
  }[];
  setFormDetails: any;
  formDetails: any;
  heading: string;
  alternateButton?: string;
  alternateLink: string;
}

const Form = ({
  allFields,
  setFormDetails,
  formDetails,
  heading,
  alternateButton,
  alternateLink,
}: formProps) => {
  const { showMessage } = useSnackbar();
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <section className="flex-center w-full h-full gap-10 flex-col">
      <h1 className="text-7xl w-fit bg-gradient-to-br from-violet-500 via-red-400 to-violet-500 bg-clip-text text-transparent p-2">
        {heading}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmit(true);
          showMessage(
            "This is a 'DEMO' project. No backend integration is present.",
            "success"
          );
          setTimeout(() => {
            setIsSubmit(false);
            window.location.href = "/";
          }, 3000);
        }}
        method="post"
        className="flex flex-col lg:w-4/12 p-8 rounded-xl gap-4 bg-slate-200/80 shadow-md shadow-slate-400 mb-5"
      >
        <div className="flex flex-col gap-4 text-base">
          {allFields.map((eachField, index) => (
            <div className="flex flex-col" key={index}>
              <label htmlFor={eachField.id}>{eachField.id}</label>
              <input
                id={eachField.id}
                type={eachField.type}
                placeholder={eachField.placeholder}
                className="border-2 border-slate-400 rounded-md px-2 py-1.5 bg-transparent text-slate-400 outline-none"
                value={formDetails[eachField.id]}
                onChange={(e) =>
                  setFormDetails((prev) => ({
                    ...prev,
                    [eachField.id]: e.target.value,
                  }))
                }
              />
            </div>
          ))}
        </div>

        <button
          disabled={isSubmit}
          type="submit"
          className={`${
            isSubmit ? "bg-transparent" : "bg-green-500"
          } border-2 mt-8 w-full border-green-500 text-white text-lg rounded-md px-2 py-1.5 hover:bg-transparent hover:text-green-500 transition`}
        >
          {isSubmit ? (
            <TailSpin
              visible={true}
              height={25}
              width={25}
              wrapperClass="flex-center text-green-500"
            />
          ) : (
            <>{heading}</>
          )}
        </button>
        <section className="border-2 border-slate-400 my-2"></section>
        <Link
          to={alternateLink}
          className={`bg-blue-500 flex-center border-2 w-full border-blue-500 text-white text-lg rounded-md px-2 py-1.5 hover:bg-transparent hover:text-blue-500 transition`}
        >
          {alternateButton}
        </Link>
      </form>
    </section>
  );
};

export default Form;
