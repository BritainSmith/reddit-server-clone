"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const core_1 = require("@mikro-orm/core");
const index_1 = require("../index");
const router = (0, express_promise_router_1.default)();
router.get("/", async (req, res) => {
    const posts = await index_1.DI.postRepository.findAll(["posts"], { name: core_1.QueryOrder.DESC }, 20);
    res.json(posts);
});
router.get("/:id", async (req, res) => {
    try {
        const post = await index_1.DI.postRepository.findOne(req.params.id, ["posts"]);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
});
exports.PostController = router;
//# sourceMappingURL=post.controller.js.map