import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Terminal from "./pages/Terminal/Terminal";
import "./App.scss";
import Portfolio from "./pages/Portfolio/Portfolio";
import HotMints from "./pages/HotMints/HotMints";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";

const queryClient = new QueryClient();

const alchemyId = process.env.REACT_APP_ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [mainnet, polygon, optimism, arbitrum, goerli];

const client = createClient(
  getDefaultClient({
    appName: "Exodus",
    alchemyId,
    chains,
  }),
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
              <Route path="/collection/:id" element={<Terminal />} />
              <Route path="/portfolio/:id" element={<Portfolio />} />
              <Route path="/hotmints" element={<HotMints />} />
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
