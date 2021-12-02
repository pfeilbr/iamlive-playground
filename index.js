const AWS = require("aws-sdk");
const s3 = new AWS.S3();

(async () => {
    const resp = await s3.listBuckets().promise();
    console.log(resp)
})()