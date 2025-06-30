import { Box, Theme } from "@radix-ui/themes";
import { AppRoutes } from "./pages/routes/routes";
import { NavBar } from "./components/navigation/NavBar";
import { TopNav } from "./components/navigation/TopNav";
import { Footer } from "./components/navigation/Footer";

function App() {
  return (
    <>
      <Theme
        appearance="dark"
        grayColor="slate"
        accentColor="blue"
        panelBackground="translucent"
        id="backdrop"
      >
        <NavBar top>
          <TopNav />
        </NavBar>
        <Box id="page-bounds" minHeight="91vh">
          <AppRoutes />
        </Box>
        <NavBar>
          <Footer />
        </NavBar>
      </Theme>
    </>
  );
}

export default App;
