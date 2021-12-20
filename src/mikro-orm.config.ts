/** @format */

import { Options } from "@mikro-orm/core";
import { MongoHighlighter } from "@mikro-orm/mongo-highlighter";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const options: Options = {
	type: "mongo",
	entities: [Post],
	dbName: "lireddit",
	highlighter: new MongoHighlighter(),
	debug: __prod__,
};

export default options;
