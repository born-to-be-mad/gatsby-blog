const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  //console.log(node.internal.type);
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    //slug ia just a part f navigation
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
