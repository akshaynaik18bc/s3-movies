// src/awsConfig.js
import AWS from 'aws-sdk';

const config = {
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
};

AWS.config.update(config);

export default AWS;


//export const s3 = new AWS.S3();
