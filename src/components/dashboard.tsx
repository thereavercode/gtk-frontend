import {
  useTransactionStream,
  type Transaction,
} from "../hooks/useTransactionStream";

const Dashboard: React.FC = () => {
  const transactions: Transaction[] = useTransactionStream(true); // true = useSocket

  return (
    <div>
      <h1>Real-Time Transactions</h1>
      <ul>
        {transactions.map(
          ({ transactionId, phone, amount, timestamp, status }) => (
            <li key={transactionId}>
              {phone} paid KES {amount} at{" "}
              {new Date(timestamp).toLocaleTimeString()} ({status})
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
// This code defines a React functional component named `Dashboard` that displays a list of real-time transactions.
// It uses a custom hook `useTransactionStream` to fetch transactions, which are expected to be of type `Transaction`.
// The component renders a heading and a list of transactions, where each transaction displays the phone number, amount paid, timestamp, and status.
// The `useTransactionStream` hook is called with `true` to indicate that it should use a WebSocket connection for real-time updates.
// The transactions are mapped to list items, and the timestamp is formatted to a local time string.
// The component is exported as the default export, allowing it to be imported and used in other parts of the application.
// This setup is typical for a dashboard in a payment processing application, where users can monitor transactions in real-time.
// The use of TypeScript ensures type safety for the transactions, enhancing the development experience with better autocompletion and error checking.
// The component is likely part of a larger application that includes routing and other features, as indicated by the context of the original code snippet.
// The `Dashboard` component is designed to be simple and effective, providing users with immediate feedback on transactions as they occur.
// The use of a list to display transactions allows for easy readability and quick access to transaction details.
// Overall, this code snippet is a foundational part of a React application that handles real-time transaction monitoring, leveraging hooks for state management and WebSocket connections for live updates.
// The component can be further enhanced with additional features such as filtering, sorting, or pagination of transactions, depending on the application's requirements.
