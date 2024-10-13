interface mainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: mainContainerProps) => {
  return (
    <main className="min-h-screen w-max-screen overflow-x-hidden bg-slate-300">
      {children}
    </main>
  );
};
