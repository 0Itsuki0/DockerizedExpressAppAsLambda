# Serve Dockerized Express App (Typescript) As Lambda

When we are looking for serving a dockerized ExpressJs App on Lambda, there are mainly two ways in approaching this, one with [Lambda Web Adaptor](https://github.com/awslabs/aws-lambda-web-adapter?tab=readme-ov-file#readiness-check), and another with [Serverless Express](https://github.com/vendia/serverless-express).

This repository includes sample code and dockerfile for each of the approaches above.
- [Lambda Web Adaptor](./lambda/WithAdaptor/)
- [Serverless Express](./lambda/WithServerless/)
    - [With AWS Based Image](./lambda/WithServerless/Dockerfile)
    - [With Non-AWS Based image](./lambda/WithServerless/Dockerfile_NonAwsImage)

For more details, please refer to my article [Serve Dockerized Express App (Typescript) As Lambda 2 Ways.](https://medium.com/@itsuki.enjoy/serve-dockerized-express-app-typescript-as-lambda-2-ways-62f4cc606887)
