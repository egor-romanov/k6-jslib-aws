import http from "k6/http";
import { parseHTML } from "k6/html";
import { createPresignedURL, signWithHeaders } from "./core.js";

// https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html
export function listBuckets() {
  const region = "us-east-1";
  const keyname = "test";
  const body = `{"SecretId": "${keyname}"}`;

  const obj = signWithHeaders("GET", "s3", region, "s3.ListBuckets", body, "", {
    "Content-Type": "application/x-amz-json-1.1",
  });

  const res = http.request("GET", "http://localhost:4566", body, {
    headers: obj.headers,
  });

  const buckets = parseHTML(res.body)
    .find("Buckets")
    .children()
    .map(function (_, bucket) {
      let bucketObj = {};
      bucket.children().each(function (_, elem) {
        switch (elem.nodeName()) {
          case "name":
            Object.assign(bucketObj, { name: elem.textContent() });
          case "creationDate":
            Object.assign(bucketObj, { creationDate: elem.textContent() });
        }
      });
      console.log(JSON.stringify(bucketObj));
      return bucketObj;
      // console.log(bucket.innerHTML());
    });

  console.log(buckets.eq(0).name);
  console.log(JSON.stringify(buckets));
  // console.log(buckets[0].name);
  // console.log(buckets[0].creat);

  return buckets;
}

export function createPresignedS3URL(name, options) {
  options = options || {};
  options.method = options.method || "GET";
  options.bucket = options.bucket || __ENV.AWS_S3_BUCKET;
  options.signSessionToken = true;
  options.doubleEscape = false;

  return createPresignedURL(
    options.method,
    options.bucket + ".s3.amazonaws.com",
    "/" + name,
    "s3",
    "UNSIGNED-PAYLOAD",
    options
  );
}
