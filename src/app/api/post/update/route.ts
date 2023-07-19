import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/db';

export async function PATCH(req: Request) {
  const { id, title, content } = await req.json();
  try {
    const session = await getAuthSession();
    if (!session) {
      return new Response('Yetkisiz erişim', {
        status: 401,
      });
    }
    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
    return new Response('Gönderi başarıyla güncellendi', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Gönderi güncellenirken bir hata oluştu', {
      status: 500,
    });
  }
}
