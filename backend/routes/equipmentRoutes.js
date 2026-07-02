const express = require("express");

const router = express.Router();

const equipmentController = require("../controllers/equipmentController");

router.get("/", equipmentController.getAllEquipment);

router.get("/search", equipmentController.searchEquipment);

router.get("/filter", equipmentController.filterEquipment);

router.get("/:id", equipmentController.getEquipmentById);

router.post("/", equipmentController.addEquipment);

router.put("/:id", equipmentController.updateEquipment);

router.delete("/:id", equipmentController.deleteEquipment);

module.exports = router;