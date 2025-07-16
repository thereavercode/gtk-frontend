import { createContext } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:8080"); // update as needed
export const SocketContext = createContext(socket);
export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
