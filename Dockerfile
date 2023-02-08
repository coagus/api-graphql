FROM --platform=linux/amd64 node:18-alpine

WORKDIR /api

COPY . .

RUN yarn && yarn build && \
    rm -rf src tsconfig.json webpack.config.js yarn.lock

EXPOSE 3001

CMD ["yarn", "start"]
