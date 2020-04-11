## TKO-äly

This is the new work in progress job board for TKO-äly. It's build around the Strapi CMS and the Next.js React Framework. The content is formatted with Markdown and rendered by using react-markdown library. Apollo is used as the GraphQL client and styling is done by using tailwind CSS.

## How to develop

1. clone repository
2. set the environment variables for the docker-compose file
3. run docker-compose up

## Environment variable

| First Header      | Second Header                            |
| ----------------- | ---------------------------------------- |
| POSTGRES_PASSWORD | The password for the PostgreSQL database |
| POSTGRES_USER     | The username for the PostgreSQL database |
| STRAPI_URI        | The GraphQL endpoint for Strapi CMS      |
| STRAPI_API_TOKEN  | The API token for Strapi CMS API         |
