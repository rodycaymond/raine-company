import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";
import "./pages.css";
import { Carousel } from "../components/Carousel";
import { handyWork, services } from "../constants/ constants";
import {
  RulerSquareIcon,
  PersonIcon,
  CheckCircledIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export const Home: React.FC = () => {
  return (
    <Box style={{ padding: "24px 0" }}>
      <Box
        className="banner"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/raine-company/logo_no_bg.png"
          style={{ maxWidth: "250px" }}
        />
      </Box>
      <Link href="tel:615-691-1884" style={{ color: "white" }}>
        <Heading as="h6" align="center">
          (615) 691-1884
        </Heading>
      </Link>
      <Separator color="gray" style={{ width: "90%", margin: "18px auto" }} />
      <Box className="section">
        <Heading as="h4" align="center" className="margin-bottom">
          <PersonIcon
            style={{ marginRight: "8px", height: "24px", width: "24px" }}
            color="blue"
          />
          Services
        </Heading>
        <Box
          maxWidth="550px"
          style={{
            margin: "auto",
          }}
        >
          {services.map((s) => {
            return (
              <>
                <Box>
                  <strong style={{ textDecoration: "underline" }}>
                    {s.title}
                  </strong>
                </Box>
                <Box>{s.description}</Box>
              </>
            );
          })}
        </Box>
      </Box>
      <Separator color="gray" style={{ width: "90%", margin: "18px auto" }} />
      <Box className="section">
        <Heading as="h4" align="center" className="margin-bottom">
          <RulerSquareIcon style={{ marginRight: "8px" }} color="blue" />{" "}
          Gallery
        </Heading>
        <Carousel items={handyWork} />
      </Box>
      <Separator color="gray" style={{ width: "90%", margin: "18px auto" }} />
      <Box className="section">
        <Flex justify="center" align="center" className="margin-bottom">
          <CheckCircledIcon
            style={{ marginRight: "8px", height: "24px", width: "24px" }}
            color="blue"
          />
          <Heading as="h4" align="center">
            Give Us A Call!
          </Heading>
        </Flex>

        <Flex width="100%" direction="row" justify="center">
          <Link href="tel:615-691-1884">
            <Button
              style={{
                width: "200px",
                margin: "24px auto",
              }}
              variant="outline"
              color="blue"
            >
              (615) 691-1884
            </Button>
          </Link>
        </Flex>
        <Flex
          style={{ width: "100%", margin: "24px auto", textAlign: "center" }}
          align="center"
          justify="center"
          direction={{
            initial: "column",
            xs: "row",
          }}
        >
          <EnvelopeClosedIcon
            height="24px"
            width="24px"
            style={{ marginRight: "12px" }}
          />
          <Text style={{ marginRight: "12px" }}>Or send us an email!</Text>
          <strong>
            <Link href="mailto:rainecomp23@outlook.com">
              rainecomp23@outlook.com
            </Link>
          </strong>
        </Flex>
      </Box>
    </Box>
  );
};
