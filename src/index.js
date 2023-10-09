import app from "./app.js";
import "dotenv/config";
import { ConnectDB } from "./db.js";

const PORT = process.env.PORT;

ConnectDB();

app.listen(PORT, (req, res) => {
  console.log("Escucha en el puerto " + PORT);
});
