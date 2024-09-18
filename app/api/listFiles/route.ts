import { NextResponse } from 'next/server';
import { listObjects } from '../../../lib/r2';

export async function GET(request: Request) {
    const bucketName = process.env.R2_BUCKET_NAME;
    const url = new URL(request.url);
    const path = url.searchParams.get('path') || '';

    if (!bucketName) {
        return NextResponse.json(
            { error: 'R2_BUCKET_NAME is not defined in environment variables' },
            { status: 500 }
        );
    }

    try {
        const objects = await listObjects(bucketName, path);
        const files = objects.map(
            (file) =>
                `https://pub-01daa98a97fb4429b38ed6dd8055b991.r2.dev/${file.Key}`
        );

        return NextResponse.json({ files: files }, { status: 200 });
    } catch (err) {
        console.error('Error processing request: ', err);
        return NextResponse.json(
            { error: 'Failed to list objects' },
            { status: 500 }
        );
    }
}
