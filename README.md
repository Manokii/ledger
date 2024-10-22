## Ledger

Ledger is a simple web application that allows users to track their expenses and income. 

## Stack
- Web Framework: **NextJS**
- Styling: **Tailwind CSS**
- UI Library: **shadcn/ui**
- Auth: **Auth.js**
- Database: **Postgres** (might move to SQLite)
- ORM: **Drizzle**
- Package Manager: **Bun**

## Auth

Auth.js encourages the usage of OAuth Providers, the default one i use is google. You can change this to any provider you like in `./lib/providers.ts`. Read more [here](https://authjs.dev/getting-started/authentication/oauth)

## App Router 

I'm using nextjs app router just because it seems like vercel is innovating more in it.

## Why make this?

I wanted to self-host my own finance tracker. Other options requires a container, I wanted to make something that is within the free tier of Vercel. Tho feel free to host this in anywhere

## Learn More about NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy NextJS is on [Vercel Platform](https://vercel.com/new?filter=next.js).

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

## Contributing

Feel free to contribute to this project, I'm open to any suggestions and improvements. Just fork this repo and make a pull request.

## License

MIT

