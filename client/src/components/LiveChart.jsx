import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import Plot from "react-plotly.js";

import layout from "../configs/layout.config";
import traceConfigs from "../configs/trace.config";
import configs from "../configs/settings.config";

const LiveChart = () => {
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
    <Plot
      data={[
        {
          x: xAxisData,
          y: yAxisData,
          ...traceConfigs,
        },
      ]}
      layout={layout}
      config={configs}
    />
  );
};

export default LiveChart;
