# If switch to an aws based image is not feasible, please use Dockerfile_NonAwsImage instead
FROM public.ecr.aws/lambda/nodejs:latest

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .
RUN npm run build

# Copy function code and runtime dependencies to {LAMBDA_TASK_ROOT}, a Lambda-defined environment variable.
# Otherwise, we will get Cannot find module 'index'\nRequire stack:\n- /var/runtime/index.mjs error
COPY . ${LAMBDA_TASK_ROOT}

# Pass the name of the function handler as an argument to the runtime
CMD ["build/index.handler"]