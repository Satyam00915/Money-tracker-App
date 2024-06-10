const zod = require("zod");

const tncsSchema = zod.object({
  money: zod.number(),
  description: zod.string().min(5),
  date: zod.string().min(6),
});

const searchIdSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  tncsSchema,
  searchIdSchema,
};
