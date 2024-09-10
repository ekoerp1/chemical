import { ChemicalServer } from "chemicaljs";
import express from "express";
import { createServer } from "vercel/node"; // Import Vercel handler

const [app, listen] = new ChemicalServer();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static("public", {
    index: "index.html",
    extensions: ["html"]
}));

// Serve Chemical files
app.serveChemical();

// Custom 404 error handling
app.use((req, res) => {
    res.status(404).send("404 Error");
});

// Vercel will handle the request here
module.exports = createServer(app);
