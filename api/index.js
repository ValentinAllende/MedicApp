var app = require("./app");

app.set("port", process.env.PORT || 3004);

app.listen(app.get("port"), () => {
  console.log(`Servidor escuchando en puerto ${app.get("port")}`);
});
