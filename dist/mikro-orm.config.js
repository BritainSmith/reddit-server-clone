"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_highlighter_1 = require("@mikro-orm/mongo-highlighter");
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const options = {
    type: "mongo",
    entities: [Post_1.Post],
    dbName: "lireddit",
    highlighter: new mongo_highlighter_1.MongoHighlighter(),
    debug: constants_1.__prod__,
};
exports.default = options;
//# sourceMappingURL=mikro-orm.config.js.map