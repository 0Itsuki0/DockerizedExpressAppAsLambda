import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { join } from 'path'
import { DockerImageCode, DockerImageFunction, FunctionUrlAuthType, Runtime } from 'aws-cdk-lib/aws-lambda'
import { Platform } from 'aws-cdk-lib/aws-ecr-assets'
// import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'

export class CdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        // Web adapter
        const webAdaptorLambda = new DockerImageFunction(this, "WebAdaptorLambda", {
            // directory containing Dockerfile
            code: DockerImageCode.fromImageAsset(join(__dirname, '..', '..', 'lambda/WithAdaptor'), {
                // required for MacOS.
                // Otherwise, we will get Error: fork/exec /opt/extensions/lambda-adapter: exec format error Extension.LaunchError when launching Lmabda
                platform: Platform.LINUX_AMD64
            }),
        })

        // for easy testing
        webAdaptorLambda.addFunctionUrl({
            authType: FunctionUrlAuthType.NONE
        })


        // Serverless
        const serverlessLambda = new DockerImageFunction(this, "ServerlessLambda", {
            // directory containing Dockerfile
            code: DockerImageCode.fromImageAsset(join(__dirname, '..', '..', 'lambda/WithServerless'), {
                // required for MacOS.
                // Otherwise, we will get Error: fork/exec /opt/extensions/lambda-adapter: exec format error Extension.LaunchError when launching Lmabda
                platform: Platform.LINUX_AMD64
            }),
        })

        serverlessLambda.addFunctionUrl({
            authType: FunctionUrlAuthType.NONE
        })

        // Little NOTE:
        // When using serverless framework, if custom docker image is not required, can also be deployed directly like following.
        // new NodejsFunction(this, "ServerlessLambda", {
        //     runtime: Runtime.NODEJS_LATEST,
        //     entry: join(__dirname, "..", '..', "lambda/WithServerless", "index.ts"),
        //     handler: "handler",
        // })
    }
}
