import app from "./app";
import { PORT } from "./config";
import connectToDB from "./config/DBConfig";

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectToDB();
});
