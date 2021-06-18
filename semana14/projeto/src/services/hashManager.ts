import * as bcrypt from "bcryptjs";

export const createHash = (plainText: string) => {
  const salt = bcrypt.genSaltSync(Number(process.env.BCRYPT_COST));

  return bcrypt.hashSync(plainText, salt);
};

export const compareHash = (plainText: string, cypherText: string) => {
  return bcrypt.compareSync(plainText, cypherText);
};
