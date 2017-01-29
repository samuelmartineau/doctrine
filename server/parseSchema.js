module.exports = function parseSchema(ancestor, root) {
  if (root.children && root.children.length) {
    return {
      [root.tag]: root.children
        .map((child) => parseSchema(ancestor.find(root.tag), child)),
    };
  } else if (root.keys && root.keys.length) {
    return {
      [root.tag]: root.keys.reduce((acc, child) => {
        return Object.assign({}, acc, parseSchema(ancestor
          .find(root.tag), child));
      }, {}),
    };
  } else {
    return {
      [root.tag]: root.formatter ?
        root.formatter(ancestor.find(root.tag)) :
        ancestor.find(root.tag).text(),
    };
  };
};
