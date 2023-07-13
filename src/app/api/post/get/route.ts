import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(get: Request) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return new Response('Gönderiler getirilirken bir hata oluştu', {
      status: 500,
    });
  }
}
