import { useEffect, useState } from "react";

import useWebSocket from "react-use-websocket";

import LiveChart from "./components/LiveChart";

function App() {
  const WS_URL = "ws://localhost:8000";

  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);

  const { lastJsonMessage } = useWebSocket(WS_URL);

  useEffect(() => {
    if (lastJsonMessage) {
      setXAxisData((prev) => [...prev, new Date().toLocaleTimeString()]);
      setYAxisData((prev) => [...prev, lastJsonMessage]);
    }
  }, [lastJsonMessage]);

  return (
    <div className="container">
      <LiveChart xAxisData={xAxisData} yAxisData={yAxisData} />
    </div>
  );
}

export default App;
