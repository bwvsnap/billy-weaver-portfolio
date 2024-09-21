import AWS from 'aws-sdk';

// Configure the AWS SDK with R2 credentials and endpoint
const s3 = new AWS.S3({
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    s3ForcePathStyle: true,
    signatureVersion: 'v4',
    region: 'auto'
});

export async function listObjects(prefix: string): Promise<{ Key: string }[]> {
    const params = {
        Bucket: process.env.R2_BUCKET_NAME as string,
        Prefix: prefix
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        return data.Contents as { Key: string }[]; // Explicitly cast to the expected type
    } catch (err) {
        console.error('Error listing objects: ', err);
        throw err;
    }
}

export function generateFileUrls(objects: { Key: string }[]): string[] {
    return objects.map((file) => `${process.env.R2_BUCKET_URL}/${file.Key}`);
}
