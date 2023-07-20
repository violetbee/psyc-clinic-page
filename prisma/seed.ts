import prisma from '../src/lib/db';
import { slugify } from '../src/lib/utils';

const load = async function main() {
  try {
    const data = await prisma.post.findMany();
    for (const post of data) {
      const slug = slugify(post.title);
      await prisma.post.update({
        where: { id: post.id },
        data: { slug },
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
};
load();
