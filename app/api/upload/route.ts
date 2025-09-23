import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

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
      let processedBuffer: Buffer;
      let newFilename: string;

      try {
        // Use sharp to process and compress the image
        processedBuffer = await sharp(buffer)
          .resize({ width: 900 }) // Optional: resize image to a max width of 800px
          .jpeg({ quality: 80 }) // Compress to JPEG with 80% quality
          .toBuffer();

        // Generate a new filename with .jpeg extension
        const originalExt = path.extname(file.name);
        const baseName = path.basename(file.name, originalExt);
        newFilename = `${Date.now()}-${baseName}.jpeg`;

      } catch (sharpError) {
        console.error(`Sharp image processing error for file ${file.name}:`, sharpError);
        // If sharp fails, fall back to original buffer and filename
        processedBuffer = buffer;
        newFilename = `${Date.now()}-${file.name}`;
      }

      const filePath = path.join(uploadDir, newFilename);

      await writeFile(filePath, processedBuffer);
      uploadedImageUrls.push(`${process.env.NEXT_PUBLIC_APP_URL}/uploads/${newFilename}`);
    }

    return NextResponse.json({ urls: uploadedImageUrls }, { status: 200 });
  } catch (error) {
    console.error('Image upload error:', error);
    return NextResponse.json({ message: 'Failed to upload images.', error: error }, { status: 500 });
  }
}

