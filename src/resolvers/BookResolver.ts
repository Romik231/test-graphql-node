import {Arg, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {Book} from "../models/Book";
import {Author} from "../models/Author";
import {BookInput} from "../input/BookInput";
import {AuthorInput} from "../input/AuthorInput";

@Resolver(()=> Book)
export class BookResolver {

    @Query(() => Book)
    async books(@Arg( 'name', {nullable: true}) name: string)
    {
        return Book.find();
    }

    @FieldResolver()
    async author(@Root() book: Book)
    {
        return  Author.findOne({ authorId: book.authorId });
    }

    @Mutation(() => Book)
    async addBook(@Arg('data') newBook: BookInput): Promise<Book>
    {
        const book = Book.create(newBook);
        await book.save()
        return book;
    }

    @Mutation(() => Author)
    async addAuthor(@Arg("input") data: AuthorInput) {
        const author = Author.create(data);
        await author.save();
        return author;
    }

}