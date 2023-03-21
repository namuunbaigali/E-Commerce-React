import express, { json } from "express";
import cors from "cors";

const PORT = 8080
const app = express();
app.use(json());
app.use(cors());

app.get("/api/", (req,res)=>{
    res.json("Hello world!")
});

app.listen(PORT, ()=>{
    console.log("http:localhost:" + PORT);
})