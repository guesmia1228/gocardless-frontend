import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import CollectCustomerDetail from "./pages/CollectCustomerDetail";
import Checkout from "./pages/Checkout";
import CollectBankInfo from "./pages/CollectBankInfo";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route
            path="/collect-customer-detail"
            element={<CollectCustomerDetail />}
          />
          <Route path="/collect-bank-account" element={<CollectBankInfo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
