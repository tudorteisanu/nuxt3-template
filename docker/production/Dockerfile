FROM node:18.16.1-slim

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /src

COPY .output /src/.output

CMD [ "node", ".output/server/index.mjs" ]
