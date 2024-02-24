const app = require("./app");
const cors = require('cors');
const dotenv = require("dotenv");


app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
// Config

dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})