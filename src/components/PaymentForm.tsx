import { useState } from "react";
import api from "../api/axios"; // ✅ your custom Axios instance

export default function PaymentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    billNumber: "",
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/pay", {
        name: form.name,
        phone: form.phone,
        amount: parseFloat(form.amount),
        billNumber: form.billNumber,
      });

      setMessage("✅ " + res.data.message);
      setForm({ name: "", phone: "", amount: "", billNumber: "" });
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.error || err?.message || "Unexpected error";
      setMessage("❌ Payment failed: " + errorMsg);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md mt-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone (e.g. 0712345678)"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount (e.g. 500)"
          required
          type="number"
          className="w-full p-2 border rounded"
        />
        <input
          name="billNumber"
          value={form.billNumber}
          onChange={handleChange}
          placeholder="Bill Number (e.g. 12345678)"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Payment
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm text-center ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
