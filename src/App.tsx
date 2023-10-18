import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import CollectCustomerDetail from "./pages/CollectCustomerDetail";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<CollectCustomerDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
