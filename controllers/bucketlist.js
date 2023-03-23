const express = require("express");
const router = express.Router();
const bucketlist = require("../models/list");

// GET HTTP method to /bucketlist
router.get("/", (req, res) => {
  bucketlist
    .getAllLists()
    .then((lists) => {
      res.write(JSON.stringify({ success: true, lists: lists }, null, 2));
      res.end();
    })
    .catch((err) => {
      res.json({
        success: false,
        message: `Failed to load all lists. Error: ${err}`,
      });
    });
});

// POST HTTP method to /bucketlist
router.post("/", (req, res) => {
  let newList = new bucketlist({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  });
  bucketlist
    .addList(newList)
    .then((list) => {
      res.json({ success: true, message: "Added successfully." });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: `Failed to create a new list. Error: ${err}`,
      });
    });
});

// DELETE HTTP method to /bucketlist
// we pass in a params which is the object id
router.delete("/:id", (req, res, next) => {
  // access the parameter which is the id of the item to tb deleted
  let id = req.params.id;
  // call the model method deleteListById
  bucketlist
    .deleteListById(id)
    .then((list) => {
      if (list) {
        res.json({ success: true, message: "Deleted successfully." });
      } else {
        res.json({ success: false });
      }
    })
    .catch((err) => {
      res.json({
        success: false,
        message: `Failed to delete the list. Error: ${err}`,
      });
    });
});

// export modules so that you can use them in other parts of your application.
module.exports = router;
