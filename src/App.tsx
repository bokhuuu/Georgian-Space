import Header from "./components/Header/Header.tsx";
import MainContent from "./components/MainContent/MainContent.tsx";
import AppRouting from "./components/AppRouting/AppRouting.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <MainContent>
        <AppRouting />
      </MainContent>
      <Footer />
    </div>
  );
};

export default App;
