import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IViewport {
  width: number;
}

const ViewportContext = createContext<IViewport>({
  width: window.innerWidth,
});

export const ViewportProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  return useContext<IViewport>(ViewportContext);
};
