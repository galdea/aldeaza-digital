import { put } from '@vercel/blob';

export const runtime = 'edge';

export async function PUT(request: Request) {
  const { url } = await put('landing-video.mp4', request.body, { access: 'public' });
 
  return Response.json({ url });
}