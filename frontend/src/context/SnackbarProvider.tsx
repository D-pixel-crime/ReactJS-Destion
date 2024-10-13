import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Snackbar,
  Alert,
  AlertTitle,
  Slide,
  Fade,
  SlideProps,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

type SnackbarContextType = {
  showMessage: (
    message: string,
    status: "success" | "error" | "warning" | "info",
    TransitionComponent?: React.ComponentType<
      TransitionProps & { children: React.ReactElement<any, any> }
    >
  ) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSuccess, setIsSuccess] = useState<{
    status: "success" | "error" | "warning" | "info";
    message: string;
  }>({
    status: "info",
    message: "",
  });

  const [state, setState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const showMessage = (
    message: string,
    status: "success" | "error" | "warning" | "info",
    TransitionComponent: React.ComponentType<
      TransitionProps & { children: React.ReactElement<any, any> }
    > = Fade
  ) => {
    setIsSuccess({ status, message });
    setState({ open: true, Transition: TransitionComponent });
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleClose}
          severity={isSuccess.status}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{isSuccess.status}</AlertTitle>
          {isSuccess.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
