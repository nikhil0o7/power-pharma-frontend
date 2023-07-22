import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GNUIProvider } from "@npm/grnoc-ui-provider";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <GNUIProvider>
          <App />
        </GNUIProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);