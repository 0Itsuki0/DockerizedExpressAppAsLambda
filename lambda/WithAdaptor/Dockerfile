
FROM node:24-alpine


# set up Lambda Web Adapter: https://github.com/awslabs/aws-lambda-web-adapter?tab=readme-ov-file
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.9.1 /lambda-adapter /opt/extensions/lambda-adapter
# Has to be the same port as that exposing
# default to "8080"
# Please also avoid port 9001 and 3000.
# Lambda Runtime API is on port 9001. CloudWatch Lambda Insight extension uses port 3000.
ENV PORT="8080"
# readiness check path
ENV READINESS_CHECK_PORT="8080"
ENV READINESS_CHECK_PATH="/health-check"

# Lambda: Read-only file system
# by default npm writes logs under /home/.npm
ENV NPM_CONFIG_CACHE=/tmp/.npm


##########################
# Regular Epxress Set up #
##########################
WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .
RUN npm run build


# Expose the port your application listens on
# has to be the same as the PORT env above
EXPOSE 8080

# Pass the name of the function handler as an argument to the runtime
CMD ["node", "build/index.js"]