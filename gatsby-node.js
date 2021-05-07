const path = require(`path`);

async function turnBooksIntoPages(graphql, actions, reporter) {
  // 1. Get a template for this page
  const bookTemplate = path.resolve('./src/templates/Book.js');
  const { createPage } = actions;
  // 2. Query all books
  const result = await graphql(`
    {
      books: allSanityBook {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;
  // 3. Loop over each book and create a page for that book
  result.data.books.nodes.forEach((book) => {
    const path = `book/${book.slug.current}`;
    reporter.info(`Creating book post page: ${path}`);
    createPage({
      // What is the URL for this new page??
      path,
      component: bookTemplate,
      context: {
        slug: book.slug.current,
      },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await turnBooksIntoPages(graphql, actions, reporter);
};
