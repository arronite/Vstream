const logger = (req, res, next) => {
  console.log(`Request Type:${req.method}
to: ${req.url}`);
  next();
};

module.exports = logger;
