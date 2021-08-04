import { Footer } from "./components/Layout/Footer/Footer";
import { MainContent } from "./components/Layout/MainContent/MainContent";
import { Sidebar } from "./components/Layout/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar>
        <Footer />
      </Sidebar>
      <MainContent />
    </>
  );
}

export default App;
