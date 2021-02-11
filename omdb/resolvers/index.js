
const movieResolver = require('./movies');

// rootResolver est un objet qui fait référence au contenu de notre movieResolver
const rootResolver = {
  ...movieResolver
};

module.exports = rootResolver;

