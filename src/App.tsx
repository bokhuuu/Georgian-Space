import Header from "./components/header/Header.tsx";
import MainContent from "./components/mainContent/MainContent.tsx";
import AppRouting from "./components/routing/AppRouting.tsx";
import Footer from "./components/footer/Footer.tsx";

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
