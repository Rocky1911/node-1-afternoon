const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const messages_controller = require(__dirname +
  "/controllers/messages_controller");

app.use(bodyParser.json());
app.use(express.static(__dirname + "../public/build"));

app.get("/api/message", messages_controller.read);
app.post("/api/message", messages_controller.create);
app.put("/api/message/:id", messages_controller.update);
app.delete("/api/message/:id", messages_controller.delete);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
