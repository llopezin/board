This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Folder structure

board/
├── .github
│ ├── workflows/
│  └── test.yml # Test workflow
│
├── public/ # Static files
│
├── src
│ ├── app/
│ │ ├── (auth) # Route group
│ │ │ ├── login/
│ │ │ │ ├── page.tsx
│ │ │ │ └──layout.tsx
│ │ │ └── signin/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ │  
│ ├── components/
│ │ ├── common/ 
│ │ ├── ui/ # shadcn/ui
│ │ └── icons/
│ │
│ ├── config/
│ │ ├── constants.ts 
│ │ ├── navigation.ts 
│ │ └── theme.ts 
│ │
│ ├── contexts/
│ │ ├── AuthContext.tsx
│ │ └── ThemeContext.tsx
│ │
│ ├── features/ 
│ │ ├── auth/ 
│ │ │ ├── components/ 
│ │ │ ├── hooks/ 
│ │ │ ├── services/ 
│ │ │ ├── utils/ 
│ │ │ ├── feature.types.tsx
│ │ │ └── feature.tsx 
│ │ └── … 
│ │
│ ├── hooks/ # Global custom hooks
│ │ └── useLocalStorage.ts
│ │
│ ├── services/ # Business logic services
│ ├── api/ # API clients
│ │
│ ├── providers/ # Global providers
│ │ ├── AppProviders.tsx 
│ │ ├── ThemeProvider.tsx
│ │ └── QueryProvider.tsx
│ │
│ ├── stores/ 
│ │
│ ├── styles/
│ │ └── globals.css 
│ │
│ └── utils/ # Utility functions
│
└── ...

## Related Docs

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

