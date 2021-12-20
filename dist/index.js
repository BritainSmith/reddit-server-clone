"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DI = void 0;
require("reflect-metadata");
const core_1 = require("@mikro-orm/core");
const express_1 = __importDefault(require("express"));
const Post_1 = require("./entities/Post");
const controllers_1 = require("./controllers");
exports.DI = {};
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(async () => {
    exports.DI.orm = await core_1.MikroORM.init();
    exports.DI.em = exports.DI.orm.em;
    exports.DI.postRepository = exports.DI.orm.em.getRepository(Post_1.Post);
    app.use(express_1.default.json());
    app.use((req, res, next) => core_1.RequestContext.create(exports.DI.orm.em, next));
    app.get("/", (req, res) => res.json({ message: "MikroORM express TS example" }));
    app.use("/post", controllers_1.PostController);
    app.use((req, res) => res.status(404).json({ message: "No route found" }));
    app.listen(port, () => {
        console.log(`MikroORM express TS example started at http://localhost:${port}`);
    });
})();
//# sourceMappingURL=index.js.map