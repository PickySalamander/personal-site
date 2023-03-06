#!/usr/bin/env sh

# This is a script that will handle automated releases after running "ng build"

bucket="jf-portfolio-web"
distID="E1E52SK17Y9LID"

cd "dist/portfolio" || exit

echo "Starting AWS deployment..."

echo "Deleting old s3 files..."

aws s3 rm "s3://${bucket}" --recursive --exclude "*/*"

echo "Uploading JavaScript..."

aws s3 sync "." "s3://${bucket}" --exclude "*" --include "*.js" --content-type "text/javascript"

echo "Uploading everything else..."

aws s3 sync "." "s3://${bucket}" --exclude "*.js"

echo "Invalidating cloudfront..."

invalidation_json='
{
  "Paths": {
    "Quantity": 1,
    "Items": ["/index.html"]
  },
  "CallerReference": "'$(date +"%Y-%m-%d_%H-%M-%S")'"
}'

echo "$invalidation_json" > invalidate_cloudfront.json

aws cloudfront create-invalidation --distribution-id $distID --invalidation-batch file://invalidate_cloudfront.json

rm invalidate_cloudfront.json

echo "All Done!"
