// src/awsConfig.js
import AWS from 'aws-sdk';

const config = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION,
};

AWS.config.update(config);

export default AWS;


//export const s3 = new AWS.S3();
