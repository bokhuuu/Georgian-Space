import Header from "./components/Header.tsx";
import Content from "./components/Content.tsx";
import AppRouting from "./navigation/AppRouting.tsx";
import Footer from "./components/Footer.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Content>
        <AppRouting />
      </Content>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
