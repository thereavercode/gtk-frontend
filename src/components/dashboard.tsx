import React from "react";
import {
  useTransactionStream,
  type Transaction,
} from "../hooks/useTransactionStream";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const Dashboard: React.FC = () => {
  const transactions: Transaction[] = useTransactionStream(true);

  const hasData = transactions.length > 0;

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(data, `transactions_${new Date().toISOString()}.xlsx`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow rounded">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">💸 Real-Time Transactions</h1>
        {hasData && (
          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
          >
            Export to Excel
          </button>
        )}
      </div>

      {!hasData ? (
        <p className="text-center text-gray-500">No transactions yet...</p>
      ) : (
        <ul className="space-y-3 max-h-[600px] overflow-y-auto">
          {transactions.map(
            ({
              transactionId,
              phone,
              amount,
              timestamp,
              status,
              billNumber,
            }) => (
              <li
                key={transactionId}
                className="flex justify-between items-center border p-3 rounded-md shadow-sm hover:bg-gray-50 transition"
              >
                <div>
                  <p className="text-sm font-medium">{phone}</p>
                  <p className="text-xs text-gray-400">
                    Bill: {billNumber || "N/A"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(timestamp).toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-semibold">KES {amount}</p>
                  <p
                    className={`text-xs flex items-center gap-1 ${
                      status === "success" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current inline-block" />
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
