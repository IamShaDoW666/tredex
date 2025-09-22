import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('images') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ message: 'No image files provided.' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    // Ensure the upload directory exists
    // You might want to use a more robust solution like `mkdir -p` or a dedicated library
    // For this example, we assume `public/uploads` exists or is created manually.

    const uploadedImageUrls: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, filename);

      await writeFile(filePath, buffer);
      uploadedImageUrls.push(`/uploads/${filename}`);
    }

    return NextResponse.json({ urls: uploadedImageUrls }, { status: 200 });
  } catch (error: any) {
    console.error('Image upload error:', error);
    return NextResponse.json({ message: 'Failed to upload images.', error: error.message }, { status: 500 });
  }
}

