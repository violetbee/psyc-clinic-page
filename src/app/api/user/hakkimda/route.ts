import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/db';

export async function PATCH(req: Request) {
  const { aboutMe } = await req.json();

  try {
    const session = await getAuthSession();
    if (!session) {
      return new Response('Yetkisiz erişim', {
        status: 401,
      });
    }
    await prisma.user.update({
      where: {
        email: 'fatih@drmehmetfatihkinik.com',
      },
      data: {
        aboutMe,
      },
    });
    return new Response('Hakkımda başarıyla güncellendi', {
      status: 200,
    });
  } catch (error) {
    return new Response('Hakkımda güncellenirken bir hata oluştu', {
      status: 500,
    });
  }
}
