const layout = {
  title: {
    text: "Live Data Plot",
    font: {
      color: "#aa0900",
      family: "Arial",
      size: 28,
    },
  },
  width: 1200,
  height: 600,
  paper_bgcolor: "#aaaad8",
  plot_bgcolor: "#aaff8f",
  font: {
    size: 10,
  },
  xaxis: {
    type: "time",
    showgrid: false,
  },
  yaxis: {
    type: "linear",
    range: [0, 50],
  },
};

export default layout;
