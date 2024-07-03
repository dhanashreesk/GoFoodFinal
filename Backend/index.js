// index.js
const app = require('./app');
const path = require("path");
const port = process.env.PORT || 5000;

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"client","build")));
  res.sendFile(path.resolve(__dirname,"client","build","index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
