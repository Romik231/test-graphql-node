import {Field, InputType} from "type-graphql";

@InputType()
export class BookInput {
    @Field()
    name: string;

    @Field()
    authorId: number;
}