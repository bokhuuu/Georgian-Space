import Header from "./components/Header.tsx";
import MainContent from "./components/MainContent.tsx";
import AppRouting from "./routing/AppRouting.tsx";
import Footer from "./components/Footer.tsx";

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
