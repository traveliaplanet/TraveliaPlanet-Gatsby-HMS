const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      destination: allStrapiDestination {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.destination.nodes.forEach((destination) => {
    createPage({
      path: `/destinations/${destination.slug}/`,
      component: path.resolve(`src/templates/DestinationPost.js`),
      context: {
        slug: destination.slug
      }
    });
  });
};
