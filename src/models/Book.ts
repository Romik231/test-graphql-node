import {Field, ID, ObjectType} from "type-graphql";
import {Author} from "./Author";
import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@ObjectType()
export class Book extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    bookId: number;

    @Field()
    name: string;

    @Field()
    pageCount: number;

    @Field()
    authorId: number;

    @Field()
    author: Author;
}