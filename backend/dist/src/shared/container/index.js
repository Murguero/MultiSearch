"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var EquipmentsRepository_1 = __importDefault(require("@modules/equipments/infra/typeorm/repositories/EquipmentsRepository"));
tsyringe_1.container.registerSingleton('EquipmentsRepository', EquipmentsRepository_1.default);
