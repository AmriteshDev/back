const app = require("./app");

const dotenv = require("dotenv");
const cors = require('cors');

app.use(cors(
    {
        origin: ["https://english-to-french-translator.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// Config

dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
    console.log(`Server is working onhttps://english-to-french-translator.vercel.app/:${process.env.PORT}`)
})