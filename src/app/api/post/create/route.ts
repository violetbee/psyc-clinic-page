import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { getAuthSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session) {
      return new Response('Yetkisiz erişim', {
        status: 401,
      });
    }

    const body = await req.json();

    await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        banner: body.banner,
      },
    });

    return new Response('Gönderi başarıyla oluşturuldu', {
      status: 200,
    });
  } catch (error) {
    return new Response('Gönderi oluşturulurken bir hata oluştu', {
      status: 500,
    });
  }
}
