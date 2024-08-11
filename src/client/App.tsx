import Main from "./pages/Main";
import { ContextWrapper } from "./Context";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <ContextWrapper>
      <Header />
      <Main />
      <Footer />
    </ContextWrapper>
  );
};

export default App;
