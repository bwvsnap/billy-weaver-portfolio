const AWS = require('aws-sdk');

// Configure the AWS SDK with R2 credentials and endpoint
const s3 = new AWS.S3({
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    s3ForcePathStyle: true, // needed for minio to work correctly
    signatureVersion: 'v4'
});

// Function to list objects in the R2 bucket
export async function listObjects(bucketName: string) {
    const params = {
        Bucket: bucketName
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        return data.Contents;
    } catch (err) {
        console.error('Error listing objects: ', err);
        throw err;
    }
}
