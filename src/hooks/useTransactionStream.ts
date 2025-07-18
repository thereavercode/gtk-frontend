// src/hooks/useTransactionStream.ts
import { useEffect, useState } from "react";
import io from "socket.io-client";

export type Transaction = {
  transactionId: string;
  phone: string;
  amount: string;
  timestamp: string;
  status: string;
  billNumber?: string;
};

export const useTransactionStream = (enableStream = false): Transaction[] => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!enableStream) return;

    const socket = io("https://gtk-backend.onrender.com");
    socket.on("transaction", (data: Transaction) => {
      setTransactions((prev) => [data, ...prev.slice(0, 9)]); // keep only last 10
    });

    return () => {
      socket.disconnect();
    };
  }, [enableStream]);

  return transactions;
};
