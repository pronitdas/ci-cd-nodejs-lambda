
Production deployment is done automatically by Github Actions and is driven by `build-deploy.yml` file.

###### Configuration Steps

* S3 bucket. folder structure for environment files should be like this.
  * ```${bucket_name}/${branch_name}/${branch_name}.json```
* Configure in github secrets bucket name `SECRETS_BUCKET`.
* Configure in github secrets access credentials for aws. `AWS_SECRET_ACCESS_KEY` `AWS_ACCESS_KEY_ID`.
* Voila. Thats it. When you push to master/dev/stage/test. Code will be auto deployed.
