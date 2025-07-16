import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PaymentForm from "./components/PaymentForm";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
// This code sets up a React application with React Router for navigation.
// It defines two main routes: the root path ("/") which renders the PaymentForm component
// and the "/dashboard" path which renders the Dashboard component.
// Any unmatched paths will redirect to the root path ("/") using the Navigate component.
// The BrowserRouter is used to enable routing in the application, allowing users to navigate between different views without reloading the page.
// The PaymentForm component is likely used for processing payments, while the Dashboard component is used to display user-specific information or analytics related to payments or transactions.
// This structure allows for a clean separation of concerns, making it easier to manage the application's routing and components.
// The use of React Router enhances the user experience by providing a single-page application feel, where navigation is smooth and does not require full page reloads.
// Overall, this code snippet is a foundational part of a React application that handles payment processing and user dashboards, leveraging React Router for efficient navigation.
// The components are imported from the local directory, indicating that they are likely custom components created for this application.
// The App component serves as the main entry point for the React application, encapsulating the routing logic and rendering the appropriate components based on the current URL path.
// This setup is typical for modern React applications, where routing is handled declaratively using the React Router library.
// The application can be extended in the future by adding more routes and components as needed, allowing for a scalable and maintainable codebase.
// The use of TypeScript in the file name suggests that the application is built with TypeScript, providing type safety and better development experience with features like autocompletion and error checking.
// This is a common practice in modern web development, especially for larger applications where maintainability and scalability are important considerations
