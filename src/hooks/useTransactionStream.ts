// src/hooks/useTransactionStream.ts
import { useEffect, useState } from "react";
import { socket } from "../services/socket";

export interface Transaction {
  transactionId: string;
  amount: string;
  phone: string;
  timestamp: string;
  status: string;
}

export const useTransactionStream = (useSocket: boolean = false) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (useSocket) {
      socket.on("transaction", (data: Transaction) => {
        setTransactions((prev) => [data, ...prev]);
      });
      return () => socket.off("transaction");
    } else {
      const interval = setInterval(() => {
        const dummyTransaction: Transaction = {
          transactionId: Math.random().toString(36).substring(2, 10),
          amount: (Math.random() * 1000).toFixed(2),
          phone: "+2547" + Math.floor(Math.random() * 10000000),
          timestamp: new Date().toISOString(),
          status: "success",
        };
        setTransactions((prev) => [dummyTransaction, ...prev]);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [useSocket]);

  return transactions;
};
