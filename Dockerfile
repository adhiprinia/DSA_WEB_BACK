FROM node:14.17.5


# Create app directory
WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
#RUN npm run build


#FROM node:14.17.5
#WORKDIR /app

#COPY package.json .
#RUN npm install --only=dev
#COPY --from=build /app .


EXPOSE 3002
CMD npm run start:dev
