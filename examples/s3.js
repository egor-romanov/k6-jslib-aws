import { listBuckets } from "../s3.js";

export default function () {
  const buckets = listBuckets();
  console.log(buckets[0]["name"]);
}
