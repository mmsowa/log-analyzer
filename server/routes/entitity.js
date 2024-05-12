const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const config = require("../config");

const db = new sqlite3.Database(config.dbPath);

// Get all entities
router.get("/", (req, res) => {
  db.all(`SELECT * FROM entity`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(404).json({ error: "No encounters found" });
      return;
    }

    const encouters = rows.map((row) => row);
    res.json(encouters);
  });
});

// Get entity by encounter_id
router.get("/:encounter_id", (req, res) => {
  const entityId = req.params.encounter_id;
  if (!entityId) {
    res.status(400).json({ error: "encounter_id parameter is required" });
    return;
  }

  db.all(`SELECT * FROM entity WHERE encounter_id = ${entityId}`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(404).json({ error: "No encounters found with the specified encounter_id" });
      return;
    }

    const encouters = rows.map((row) => row);
    res.json(encouters);
  });
});

// Get encounters by ID range
router.get("/range/:min/:max", (req, res) => {
  const minId = req.params.min;
  const maxId = req.params.max;

  if (!minId || !maxId) {
    res.status(400).json({ error: "Both min and max parameters are required" });
    return;
  }

  db.all(`SELECT * FROM entitity WHERE encounter_id BETWEEN ${minId} AND ${maxId}`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (!rows || rows.length === 0) {
      res.status(404).json({ error: "No encounters found within the specified range" });
      return;
    }

    const encounters = rows.map((row) => row);
    res.json(encounters);
  });
});

module.exports = router;
