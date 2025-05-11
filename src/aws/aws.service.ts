import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AwsService {
//   falta implementar el cliente y las access keys

  async uploadFile(file: Express.Multer.File){
    // const key =  file.originalname
    // const url = `falta implementar el url`
    // const bucket = "falta crear el"
    // const command = new PutObjectCommand({
    //   Key: key,
    //   Body: file.buffer,
    //   Bucket: bucket,
    // })
    // await this.s3.send(command);
    // return url;
  }
}