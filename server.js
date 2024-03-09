import http from "http";
import app from "./app/app.js";


//Create Server
const PORT = process.env.PORT || 2030;
const server = http.createServer(app);
server.listen(PORT, console.log(`Server listening on port ${PORT}`));
