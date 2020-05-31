"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var EquipmentsController_1 = __importDefault(require("../controllers/EquipmentsController"));
var appointmentsRouter = express_1.Router();
var equipmentController = new EquipmentsController_1.default();
appointmentsRouter.get('/', equipmentController.index);
exports.default = appointmentsRouter;
