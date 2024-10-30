export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={``}>{children}</div>;
}
