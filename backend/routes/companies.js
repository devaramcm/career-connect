import express from "express";

const router = express.Router();

// DUMMY DATA
const companies = [
  { id: 1, name: "Google", role: "Software Engineer" },
  { id: 2, name: "Amazon", role: "Cloud Engineer" },
  { id: 3, name: "Microsoft", role: "AI Developer" },
];

// GET ALL COMPANIES
router.get("/", (req, res) => {
  res.json(companies);
});

export default router;