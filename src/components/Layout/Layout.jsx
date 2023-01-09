import theme from "../../theme";
import { useColorMode } from "@chakra-ui/color-mode";

export const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <div
      style={{
        backgroundColor:
          colorMode === "light"
            ? theme.config.colors.white
            : theme.config.colors.black,
        minHeight: "115vh",
      }}
    >
      {children}
    </div>
  );
};