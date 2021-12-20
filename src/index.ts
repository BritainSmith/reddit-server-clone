/** @format */
import "reflect-metadata";
import {
	MikroORM,
	EntityManager,
	EntityRepository,
	RequestContext,
} from "@mikro-orm/core";
import { __prod__ } from "./constants";
import express from "express";
import { Post } from "./entities/Post";
import { PostController } from "./controllers";

export const DI = {} as {
	orm: MikroORM;
	em: EntityManager;
	postRepository: EntityRepository<Post>;
};

const app = express();
const port = process.env.PORT || 3000;

(async () => {
	DI.orm = await MikroORM.init();
	DI.em = DI.orm.em;
	DI.postRepository = DI.orm.em.getRepository(Post);

	app.use(express.json());
	app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
	app.get("/", (req, res) =>
		res.json({ message: "MikroORM express TS example" })
	);
	app.use("/post", PostController);
	app.use((req, res) => res.status(404).json({ message: "No route found" }));

	app.listen(port, () => {
		console.log(
			`MikroORM express TS example started at http://localhost:${port}`
		);
	});
})();
