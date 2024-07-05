import AWS from "aws-sdk";
import { s3Config } from "./config";

export const s3: AWS.S3 = new AWS.S3(s3Config);