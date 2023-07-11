const { validationResult } = require("express-validator");
const { Op } = require("sequelize");

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors.array().forEach((error) =>
    (errors[error.path] = error.msg));

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    next(err);
  }
  next();
};

const buildingOptions = ({ page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice }) => {
  let options = { where: {} };

  page = page ?? 1;
  size = size ?? 20;

  options.limit = size;
  options.offset = (page - 1) * size;


  if (minLat && maxLat) {
    options.where.lat = { [Op.and]: [{ [Op.gte]: minLat }, { [Op.lte]: maxLat }] };
  } else if (minLat) {
    options.where.lat = { [Op.gte]: minLat };
  } else if (maxLat) {
    options.where.lat = { [Op.lte]: maxLat };
  }

  if (minLng && maxLng) {
    options.where.lng = { [Op.and]: [{ [Op.gte]: minLng }, { [Op.lte]: maxLng }] };
  } else if (minLng) {
    options.where.lng = { [Op.gte]: minLng };
  } else if (maxLng) {
    options.where.lng = { [Op.lte]: maxLng };
  }

  if(minPrice && maxPrice){
    options.where.price = {[Op.and]: [{ [Op.gte]: minPrice }, { [Op.lte]: maxPrice }]}
  }else if(minPrice){
    options.where.price = { [Op.gte]: minPrice };
  }else if(maxPrice){
    options.where.price = { [Op.lte]: maxPrice };
  }

  return options;
};

const validateQuery = ({ page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice }) => {
  const errorMessage = { message: "Bad Request", errors: {}, status: 400 };

  if (minLat && (isNaN(minLat) || minLat < -90)) errorMessage.errors.minLat = "Minimum latitude is invalid";

  if (maxLat && (isNaN(maxLat) || maxLat > 90)) errorMessage.errors.maxLat = "Maximum latitude is invalid";

  if (minLng && (isNaN(minLng) || minLng < -180)) errorMessage.errors.minLng = "Minimum longitude is invalid";

  if (maxLng && (isNaN(maxLng) || maxLng > 180)) errorMessage.errors.maxLng = "Maximum longitude is invalid";

  if (minPrice && (isNaN(minPrice) || minPrice < 0))
    errorMessage.errors.minPrice = "Minimum price must be greater than or equal to 0";

  if (maxPrice && (isNaN(maxPrice) || maxPrice < 0))
    errorMessage.errors.maxPrice = "Maximum price must be greater than or equal to 0";

  if (page && (isNaN(page) || page < 1 || page > 10))
    errorMessage.errors.page = "Page must be greater than or equal to 1";

  if (size && (isNaN(size) || size < 1 || size > 20))
    errorMessage.errors.size = "Size must be greater than or equal to 1";

  if (Object.keys(errorMessage.errors).length) {
    throw errorMessage;
  }
  return buildingOptions({ page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice });
};

module.exports = {
  handleValidationErrors,
  validateQuery
};
