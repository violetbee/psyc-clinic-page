import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/db';

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    const session = await getAuthSession();
    if (!session) {
      return new Response('Yetkisiz erişim', {
        status: 401,
      });
    }

    await prisma.post.delete({
      where: {
        id,
      },
    });

    return new Response('Gönderi başarıyla silindi', {
      status: 200,
    });
  } catch (error) {
    return new Response('Gönderi silinirken bir hata oluştu', {
      status: 500,
    });
  }
}
