import "@/app/styles/globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="px-3"
    >
      {children}
    </main>
  );
}
