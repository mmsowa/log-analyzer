import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
