import express from "express";

const router = express.Router();

// DUMMY DATA
const events = [
  { id: 1, title: "Tech Career Fair", date: "March 10" },
  { id: 2, title: "Startup Hiring Drive", date: "March 15" },
  { id: 3, title: "AI Job Expo", date: "March 20" },
];

// GET ALL EVENTS
router.get("/", (req, res) => {
  res.json(events);
});

export default router;