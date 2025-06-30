import { HomeIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router";

export const TopNav: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex align="center" justify="start" flexGrow="1">
        <HomeIcon
          color="blue"
          style={{
            marginLeft: "8px",
            height: "24px",
            width: "24px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
        <Box onClick={() => navigate("/")} className="nav-item">
          Raine Company LLC &copy;
        </Box>
      </Flex>
      <Flex align="center" justify="end">
        <Text className="nav-item">
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </Text>
        <Text className="nav-item">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact
          </Link>
        </Text>
      </Flex>
    </>
  );
};
