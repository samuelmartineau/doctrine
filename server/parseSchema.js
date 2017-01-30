function formatKey(key) {
  return key.toLowerCase().replace(/(\_\w)/g, function(m) {
    return m[1].toUpperCase();
  });
}

module.exports = function parseSchema(ancestor, root) {
  if (root.children && root.children.length) {
    return {
      [formatKey(root.tag)]: root.children
        .map((child) => parseSchema(ancestor.find(root.tag), child)),
    };
  } else if (root.keys && root.keys.length) {
    return {
      [formatKey(root.tag)]: root.keys.reduce((acc, child) => {
        return Object.assign({}, acc, parseSchema(ancestor
          .find(root.tag), child));
      }, {}),
    };
  } else {
    const result = {
      [formatKey(root.tag)]: root.formatter ?
        root.formatter(ancestor.find(root.tag)) :
        ancestor.find(root.tag).text(),
    };
    if (root.attributes) {
      root.attributes.forEach((attr) => {
        result[attr.key] = ancestor.find(root.tag)
          .attr(attr.attribute);
      });
    }
    return result;
  };
};
