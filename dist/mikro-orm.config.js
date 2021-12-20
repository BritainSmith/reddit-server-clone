"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_highlighter_1 = require("@mikro-orm/mongo-highlighter");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const options = {
    type: "mongo",
    entities: [Post_1.Post],
    clientUrl: process.env.MONGO_URI,
    dbName: "lireddit",
    highlighter: new mongo_highlighter_1.MongoHighlighter(),
    debug: constants_1.__prod__,
};
exports.default = options;
//# sourceMappingURL=mikro-orm.config.js.map