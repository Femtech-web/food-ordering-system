require("dotenv").config({ path: ".env" });
const app = require("./src/app");
const connectDB = require("./src/config/db");
const { connectIO } = require("./src/config/io");

const http = require("http").createServer(app);

const {
  createRoles,
  createAdmin,
  createModerator,
  createCategories,
} = require("./src/libs/initialSetUp");

async function initialSetup(){
  await connectDB();
  await createRoles();
  await createAdmin();
  await createModerator();
  await createCategories();
  await connectIO(http);
}

initialSetup();
const port = process.env.PORT || 7000;

http.listen(port, () => {
  console.log(`server is listening from port ${port}`);
});
