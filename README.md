Demo for a simple graph displaying live data.

The graph is created using the Plotly.js library which is built on top of d3.js and stack.gl. It can be customized based on requirements. The backend is a websocket server implemented using node.js which sends a random number between 1 and 50, which is then displayed on the graph.

## Setting up the frontend

1. Move into the client folder by running the command `cd client` from the project folder.
2. Run the command `npm install` to install all required libraries.
3. Run the command `npm run dev` to start the frontend.
4. Open the frontend on the browser at [localhost:5173](http://localhost:5173/).

## Setting up the backend

1. Move into the server folder by running the command `cd server` from the project folder.
2. Run the command `npm install` to install all required libraries.
3. Run the command `node index.js` to start the server.

Find the required documentation for Plotly.js below<br>

- [Plotly.js with React](https://plotly.com/javascript/react/).
- [Scatter Traces Documentation](https://plotly.com/javascript/reference/scatter/).
- [Layout Documentation](https://plotly.com/javascript/reference/layout/).
- [Configuration Options Documentation](https://plotly.com/javascript/configuration-options/).
