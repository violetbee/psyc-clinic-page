import bcrypt from 'bcryptjs';

export const checkIsPwCorrect = (plainText: string, hashedPw: string) => {
  return bcrypt.compareSync(plainText, hashedPw);
};
