import prisma from '../src/lib/db';

const load = async function main() {
  try {
    console.log('removing users');
    await prisma.user.deleteMany();
    console.log('users removed');
    console.log('Seeding...');
    await prisma.user.create({
      data: {
        name: 'Fatih',
        email: 'fatih@drmehmetfatihkinik.com',
        password:
          '$2y$10$dpwfhUvcMnSgYVMOD2DZientRq073wY5wZfaMOFiJYSCrLZHk2plO',
      },
    });
    console.log('Seeding completed.');
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
  }
};
load();
