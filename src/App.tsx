import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";
import AppRouting from "./routing/AppRouting.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <Content>
        <AppRouting />
      </Content>
      <Footer />
    </div>
  );
};

export default App;
