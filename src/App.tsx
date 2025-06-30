import PaymentForm from "./components/PaymentForm";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <PaymentForm />
      <SpeedInsights />
    </div>
  );
}

export default App;
