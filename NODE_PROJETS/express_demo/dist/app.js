"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.get("/test", (req, res) => {
    res.send("page de test");
});
app.use(router);
app.get("/", (req, res) => {
    res.send("c'est tout bon");
});
app.listen(3000, () => {
    console.log(`serveur lancé sur le port 3000`);
});
