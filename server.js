const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const courseRoutes = require("./routes/courses");
const certificateRoutes = require('./routes/certificateRoutes');

app.get("/", (req, res) => {
  res.send("API is running 🎉");
});
app.use("/courses", courseRoutes);
app.use('/api/certificates', certificateRoutes);

// Connect MongoDB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error("MongoDB Error: ", err));
