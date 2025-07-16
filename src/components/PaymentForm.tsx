import { useState } from "react";
import api from "../api/axios"; // ✅ custom Axios with Basic Auth

export default function PaymentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
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
      });

      setMessage("✅ " + res.data.message);
      setForm({ name: "", phone: "", amount: "" });
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
// This code defines a React functional component named `PaymentForm` that allows users to make payments.
