import app from "./app.js";
import "dotenv/config";
import { ConnectDB } from "./db.js";

const PORT = 3000;

ConnectDB();

app.listen(PORT, (req, res) => {
  console.log("Escucha en el puerto " + PORT);
});
