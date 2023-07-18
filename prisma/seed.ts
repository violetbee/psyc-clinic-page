import prisma from '../src/lib/db';

const load = async function main() {
  try {
    await prisma.post.deleteMany();
    console.log('Seeding completed.');
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
};
load();
