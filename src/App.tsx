import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import CollectCustomerDetail from "./pages/CollectCustomerDetail";
import Checkout from "./pages/Checkout";
import CollectBankInfo from "./pages/CollectBankInfo";
import Confirm from "./pages/Confirm";
import Success from "./pages/Success";
import BillingRequestProvider from "./components/BillingRequestProvider";

function App() {
  return (
    <BrowserRouter>
      <BillingRequestProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Checkout />} />
            <Route
              path="/collect-customer-details"
              element={<CollectCustomerDetail />}
            />
            <Route path="/collect-bank-account" element={<CollectBankInfo />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Container>
      </BillingRequestProvider>
    </BrowserRouter>
  );
}

export default App;
