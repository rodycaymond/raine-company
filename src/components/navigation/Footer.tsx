import { Box, Flex } from "@radix-ui/themes";
import "./NavBar.css";
import { useNavigate } from "react-router";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="nav-item">Raine Company LLC &copy;</Box>
      <Flex width="50%" align="center" justify="end">
        <Box className="nav-item" onClick={() => navigate("/about")}>
          About
        </Box>
        <Box className="nav-item" onClick={() => navigate("/contact")}>
          Contact
        </Box>
      </Flex>
    </>
  );
};
