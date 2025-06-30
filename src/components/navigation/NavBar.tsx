import { Box, Flex } from "@radix-ui/themes";
import "./NavBar.css";

interface NavBarProps {
  children: React.ReactElement | React.ReactElement[];
  top?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ children, top = false }) => {
  return (
    <>
      <Box
        height="48px"
        style={{
          ...(top
            ? { top: 0, position: "sticky", boxShadow: "0 4px 2px -2px black" }
            : { boxShadow: "0 -4px 2px -2px black" }),
          backgroundColor: "color(display-p3 0.067 0.067 0.074)",
          zIndex: 9999,
          width: "100%",
        }}
      >
        <Flex id="page-bounds" justify="between" align="center" height="100%">
          {children}
        </Flex>
      </Box>
    </>
  );
};
