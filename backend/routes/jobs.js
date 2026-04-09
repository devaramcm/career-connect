import express from "express";

const router = express.Router();

// DUMMY DATA
const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google" },
  { id: 2, title: "Backend Developer", company: "Amazon" },
  { id: 3, title: "Data Scientist", company: "Microsoft" },
];

// GET ALL JOBS
router.get("/", (req, res) => {
  res.json(jobs);
});

export default router;