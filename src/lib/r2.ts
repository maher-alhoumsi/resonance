import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import { env } from './env';

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
});

type UploadAudioOption = {
  buffer: Buffer;
  key: string;
  contentType?: string;
};

export const uploadAudio = async ({
  key,
  buffer,
  contentType = 'audio/wav',
}: UploadAudioOption) => {
  await r2.send(
    new PutObjectCommand({
      Key: key,
      Body: buffer,
      ContentType: contentType,
      Bucket: env.R2_BUCKET_NAME,
    }),
  );
};

export const deleteAudio = async (key: string) => {
  await r2.send(
    new DeleteObjectCommand({
      Key: key,
      Bucket: env.R2_BUCKET_NAME,
    }),
  );
};

export const getSignedAudioUrl = (key: string) => {
  const command = new GetObjectCommand({
    Bucket: env.R2_BUCKET_NAME,
    Key: key,
  });

  return getSignedUrl(r2, command, { expiresIn: 3600 });
};
