import { Footer } from "./components/Layout/Footer/Footer";
import { MainContentStyled } from "./components/Layout/MainContent/MainStyle";
import { Sidebar } from "./components/Layout/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar>
        <Footer />
      </Sidebar>
      <MainContentStyled />
    </>
  );
}

export default App;
