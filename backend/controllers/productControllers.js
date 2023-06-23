import product from "../model/product";
export const newProduct = async (req, res, next) => {
  const product = await product.create(req.body);
  res.status(200).json({
    product,
  });
};
