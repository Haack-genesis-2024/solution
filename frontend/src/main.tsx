import { ChakraProvider, HStack } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import FileList from "./components/FileList";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";
import Chat from "./components/Chat";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <HStack minH="100vh" align="stretch" justify="flex-start">
          <FileList />
          <Chat />
        </HStack>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
