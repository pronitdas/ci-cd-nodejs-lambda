
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Production deployment is done automatically by Github Actions and is driven by `build-deploy.yml` file.

###### Configuration Steps

* S3 bucket. folder structure for environment files should be like this.
  * ```${bucket_name}/${branch_name}/${branch_name}.json```
* Configure in github secrets bucket name `SECRETS_BUCKET`.
* Configure in github secrets access credentials for aws. `AWS_SECRET_ACCESS_KEY` `AWS_ACCESS_KEY_ID`.
* Voila. Thats it. When you push to master/dev/stage/test. Code will be auto deployed.
* Currently deploying to no repos.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/pronitdas"><img src="https://avatars3.githubusercontent.com/u/15370426?v=4" width="100px;" alt=""/><br /><sub><b>Pronit Das</b></sub></a><br /><a href="#infra-pronitdas" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/pronitdas/ci-cd-nodejs-lambda/commits?author=pronitdas" title="Tests">⚠️</a> <a href="https://github.com/pronitdas/ci-cd-nodejs-lambda/commits?author=pronitdas" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
