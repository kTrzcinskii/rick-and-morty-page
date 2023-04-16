import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ViewportProvider } from "./hooks/useViewport";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_ENDPOINT } from "./utils/constants";

const apolloClient = new ApolloClient({
  uri: API_ENDPOINT,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ViewportProvider>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </ViewportProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
