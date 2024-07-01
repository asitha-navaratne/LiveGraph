import Plot from "react-plotly.js";
import PropTypes from "prop-types";

import layout from "../configs/layout.config";
import traceConfigs from "../configs/trace.config";
import configs from "../configs/settings.config";

const LiveChart = (props) => {
  return (
    <Plot
      data={[
        {
          x: props.xAxisData,
          y: props.yAxisData,
          ...traceConfigs,
        },
      ]}
      layout={layout}
      config={configs}
    />
  );
};

LiveChart.propTypes = {
  xAxisData: PropTypes.array,
  yAxisData: PropTypes.array,
};

export default LiveChart;
