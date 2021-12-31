exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(n => {
    const slug = n.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { slug },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const collectionName = getNode(node.parent).sourceInstanceName
    createNodeField({
      name: `collection`,
      node,
      value: collectionName,
    })

    if (collectionName === "blog") {
      createNodeField({
        name: `slug`,
        node,
        value: `blog/${getNode(node.parent).name}`,
      })
    }
  }
}
