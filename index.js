const { ApolloServer, gql } = require("apollo-server");

const blogs = [
    {
        blogTitle: "Accident on our roads",
        blogAuthor: "Godfred Gyasi",
        blogDate: "September 4th,2020",
        blogUpdateDate: "July 10th, 2021",
        blogContent: "The effect of accidents"
    },
    {
        blogTitle: "Traffic lights",
        blogAuthor: "Godwin Dotse",
        blogDate: "October 15,2020",
        blogUpdateDate: "May 10th, 2021",
        blogContent: "Disobedience of traffic rules."
    },
];

const typedefsMet = gql`
type Blog {
blogTitle: String!
blogAuthor: String!
blogDate: String!
blogContent: String
blogUpdateDate: String
Comments: [Comment]
}

type Query{
    blogs: [Blog]
    blog(blogTitle: String!, blogDate: String!): Blog
}

type Mutation{
createBlog(blogTitle: String!, blogAuthor: String!, blogDate: String!, blogContent: String): Blog
readBlog(blogTitle: String!, blogContent: String!, blogAuthor: String!, blogDate: String): Blog
updateBlog(blogAuthor: String!, blogTitle: String!, blogContent: String!, blogDate: String!, blogUpdateDate: String!): Blog
deleteBlog(blogTitle: String!, blogContent: String!, blogDate: String!, blogAuthor: String ): Blog
}

type Comment{
blogTitle: String!,
blogContent: String!
}

type Subscription{
blogTitle: String!,
addComment(blogTitle: String!, blogAuthor: String!, blogContent: String): Comment
deleteComment(blogTitle: String!, blogContent: String!, blogAuthor: String): Comment
}
`;

const blogResolvers = {
    Query: {
        blogs: () => blogs,
        blog: (parent, args) => blogs.find(blog => blog.blogTitle == args.blogTitle)
    },

    Mutation: {
        createBlog: (parent, args) => {
            const { blogTitle, blogAuthor, blogDate, blogContent } = args;
            const blog = { blogTitle, blogAuthor, blogDate, blogContent };
            blogs.push(blog);
            return blog;
        },
        readBlog: (parent, args) => {
            const { blogTitle, blogAuthor, blogUpdateDate, blogContent } = args;
            const blog = { blogTitle, blogAuthor, blogUpdateDate, blogContent };
            blogs.push(blog);
            return blog;
        },
        updateBlog: (parent, args) => {
            const { blogTitle, blogContent, blogDate, blogUpdateDate } = args;
            const blog = { blogTitle, blogContent, blogDate, blogUpdateDate };
            blogs.push(blog);
            return blog;
        },
        deleteBlog: (parent, args) => {
            const { blogTitle, blogContent, blogDate, blogAuthor} = args;
            const blog = { blogTitle, blogContent, blogDate, blogAuthor};
            blogs.push(blog);
            return blog;
        },
    },
    Subscription: {
        deleteComment: (parent, args) => {
            const { blogTitle, blogContent, blogDate, blogAuthor } = args;
            const Comments = { blogTitle, blogContent, blogDate, blogAuthor };
            Comments.push(Comment);
            return Comment;
        },
    },
}

const server = new ApolloServer({ typeDefs: typedefsMet, resolvers: blogResolvers });

server.listen(8000).then(({ url, port }) => {
    console.log(`server ready at ${url} and ready to be used`);
}).catch(err => console.log(err));
