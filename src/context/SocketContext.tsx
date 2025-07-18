// src/context/SocketContext.tsx
import { createContext } from "react";
import io from "socket.io-client";

export const socket = io("https://gtk-server.onrender.com", {
  transports: ["websocket"],
  secure: true,
  reconnection: true,
});
export const SocketContext = createContext(socket);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
