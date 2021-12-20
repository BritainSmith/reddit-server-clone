/** @format */

import { Request, Response } from "express";
import Router from "express-promise-router";
import { QueryOrder } from "@mikro-orm/core";

import { DI } from "../index";

const router = Router();

// get all posts
router.get("/", async (req: Request, res: Response) => {
	const posts = await DI.postRepository.findAll(
		["posts"],
		{ name: QueryOrder.DESC },
		20
	);
	res.json(posts);
});

//get post by id
router.get("/:id", async (req: Request, res: Response) => {
	try {
		const post = await DI.postRepository.findOne(req.params.id, ["posts"]);

		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}

		res.json(post);
	} catch (e) {
		return res.status(400).json({ message: e.message });
	}
});

export const PostController = router;
