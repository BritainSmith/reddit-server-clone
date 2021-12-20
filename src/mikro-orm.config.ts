/** @format */

import { Options } from "@mikro-orm/core";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import dotenv from "dotenv";

dotenv.config();

const options: Options = {
	type: "mongo",
	entities: [Post],
	clientUrl: process.env.MONGO_URI,
	dbName: "lireddit",
	highlighter: new MongoHighlighter(),
	debug: __prod__,
};

export default options;
