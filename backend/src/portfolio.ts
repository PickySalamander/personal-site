#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import {PortfolioStack} from "./portfolio-stack";

const app = new cdk.App();
new PortfolioStack(app, 'PortfolioStack', {
  stackName: "jf-portfolio-stack",
  description: "My Portfolio Website Stack!",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
