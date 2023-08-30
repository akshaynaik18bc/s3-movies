// src/awsConfig.js
import AWS from 'aws-sdk';

const config = {
  accessKeyId: 'AKIA47PZUK35CYINUYFF',
  secretAccessKey: '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',
  region: 'us-east-1',
};

AWS.config.update(config);

export const s3 = new AWS.S3();
