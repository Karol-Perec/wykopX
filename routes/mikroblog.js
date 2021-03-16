const router = require('express').Router();
const axios = require('../axios');
const { validateEntries } = require('../utils/EntriesUtils');

const categoryTypes = {
  active: 'active',
  newest: 'newest',
  hot6h: 'hot6h',
  hot12h: 'hot12h',
  hot24h: 'hot24h',
};

const getApiRouteByCategory = (category, pageNumber) => {
  switch (category) {
    case categoryTypes.active:
      return `/entries/active/return/comments/page/${pageNumber}`;
    case categoryTypes.newest:
      return `/entries/stream/return/comments/page/${pageNumber}`;
    case categoryTypes.hot6h:
      return `/entries/hot/return/comments/page/${pageNumber}/period/6`;
    case categoryTypes.hot12h:
      return `/entries/hot/return/comments/page/${pageNumber}/period/12`;
    case categoryTypes.hot24h:
      return `/entries/hot/return/comments/page/${pageNumber}/period/24`;
  }
};

router.route('/:category/:pageNumber').get((req, res) => {
  const pageNumber = req.params.pageNumber;
  const category = req.params.category;

  if (pageNumber < 1) {
    res.json([]);
  } else {
    axios.get(getApiRouteByCategory(category, pageNumber)).then(
      (resp) => {
        if (!resp.data.error) {
          const validatedEntries = validateEntries(resp.data.data);
          res.json(validatedEntries);
        } else {
          res.json(resp.data.error);
        }
      },
      (err) => {
        res.json(err);
      }
    );
  }
});

module.exports = router;