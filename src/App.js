import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "./App.scss";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import React from "react";
import { Progress } from "@chakra-ui/react";
const Terminal = React.lazy(() => import("./pages/Terminal/Terminal"));
const Portfolio = React.lazy(() => import("./pages/Portfolio/Portfolio"));
const HotMints = React.lazy(() => import("./pages/HotMints/HotMints"));
const queryClient = new QueryClient();

const alchemyId = process.env.REACT_APP_ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [mainnet, polygon, optimism, arbitrum, goerli];

const client = createClient(
  getDefaultClient({
    appName: "Exodus",
    alchemyId,
    chains,
  })
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={client}>
        <ConnectKitProvider
          theme="midnight"
          customTheme={{
            "--ck-font-family": '"Open Sans", sans-serif',
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/collection/:id"
                element={
                  <React.Suspense
                    fallback={<Progress size="lg" isIndeterminate />}
                  >
                    <Terminal />
                  </React.Suspense>
                }
              />
              <Route
                path="/portfolio/:id"
                element={
                  <React.Suspense
                    fallback={<Progress size="lg" isIndeterminate />}
                  >
                    <Portfolio />
                  </React.Suspense>
                }
              />
              <Route
                path="/hotmints"
                element={
                  <React.Suspense
                    fallback={<Progress size="lg" isIndeterminate />}
                  >
                    <HotMints />
                  </React.Suspense>
                }
              />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </BrowserRouter>
        </ConnectKitProvider>
      </WagmiConfig>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
