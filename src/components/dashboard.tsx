import React from "react";
import {
  useTransactionStream,
  type Transaction,
} from "../hooks/useTransactionStream";

const Dashboard: React.FC = () => {
  const transactions: Transaction[] = useTransactionStream(true); // enable socket stream

  const hasData = transactions.length > 0;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">
        💸 Real-Time Transactions
      </h1>

      {!hasData ? (
        <p className="text-center text-gray-500">No transactions yet...</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map(
            ({ transactionId, phone, amount, timestamp, status }) => (
              <li
                key={transactionId}
                className="flex justify-between items-center border p-3 rounded-md shadow-sm"
              >
                <div>
                  <p className="text-sm font-medium">{phone}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-semibold">KES {amount}</p>
                  <p
                    className={`text-xs ${
                      status === "success" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status.toUpperCase()}
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
// This code defines a React functional component named `Dashboard` that displays real-time transaction data.
// It uses a custom hook `useTransactionStream` to fetch and stream transaction data.
