import {Field, ID, ObjectType} from "type-graphql";
import {BaseEntity, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@ObjectType()
export class Author extends BaseEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    authorId: number;

    @Field(() => String)
    name: string;
}