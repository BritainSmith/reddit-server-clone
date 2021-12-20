/** @format */

import { Entity, Property } from "@mikro-orm/core";

import { BaseEntity } from "./BaseEntity";

@Entity()
export class Post extends BaseEntity {
	@Property()
	title: string;

	@Property()
	metaObject?: object;

	@Property()
	metaArray?: any[];

	@Property()
	metaArrayOfString?: string[];

	constructor(title: string) {
		super();
		this.title = title;
	}
}
