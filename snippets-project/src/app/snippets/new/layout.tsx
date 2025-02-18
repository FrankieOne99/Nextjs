import "../../globals.css";

export default function SnippetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container mx-auto px-12">{children}</div>
    </>
  );
}
