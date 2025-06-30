import { Box, Flex } from "@radix-ui/themes";
import "./NavBar.css";

export const Footer: React.FC = () => {
  return (
    <>
      <Box className="nav-item">Raine Company LLC &copy;</Box>
      <Flex width="50%" align="center" justify="end">
        <Box className="nav-item">About</Box>
        <Box className="nav-item">Contact</Box>
      </Flex>
    </>
  );
};
