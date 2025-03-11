import * as cdk from 'aws-cdk-lib';
import {RemovalPolicy, Stack} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {Certificate} from "aws-cdk-lib/aws-certificatemanager";
import {Distribution, ViewerProtocolPolicy} from "aws-cdk-lib/aws-cloudfront";
import {S3BucketOrigin} from "aws-cdk-lib/aws-cloudfront-origins";
import {Bucket, HttpMethods} from "aws-cdk-lib/aws-s3";
import {ARecord, HostedZone, RecordTarget} from "aws-cdk-lib/aws-route53";
import {CloudFrontTarget} from "aws-cdk-lib/aws-route53-targets";

export class PortfolioStack extends Stack {
  constructor(scope:Construct, id:string, props?:cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "WebBucket", {
      bucketName: "jf-portfolio-web",
      removalPolicy: RemovalPolicy.RETAIN,
      cors: [
        {
          allowedHeaders: ["*"],
          allowedMethods: [HttpMethods.GET, HttpMethods.PUT],
          allowedOrigins: ["*"],
          maxAge: 3000
        }
      ]
    });

    //load ssl certificate
    const certificate = Certificate.fromCertificateArn(this, "Acm",
      "arn:aws:acm:us-east-1:468451602170:certificate/94412246-d30f-4a94-866f-6cd351f5e512");

    const domainName = "joe-flaherty.me";

    const cloudfront = new Distribution(this, "Cdn", {
      comment: "jf-portfolio-web",
      defaultBehavior: {
        //create the access policy that allows CloudFront to access the S3 bucket
        origin: S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        compress: true
      },
      errorResponses: [
        //for SPA sites to make a redirect when the file isn't found
        {httpStatus: 403, responseHttpStatus: 200, responsePagePath: "/index.html"},
        {httpStatus: 404, responseHttpStatus: 200, responsePagePath: "/index.html"},
      ],
      certificate,
      domainNames: [domainName]
    });

    const zone = HostedZone.fromLookup(this, "HostedZone", {domainName});

    new ARecord(this, "CdnARecord", {
      zone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfront))
    });
  }
}
