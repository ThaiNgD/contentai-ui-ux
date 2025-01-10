export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full h-full flex items-center p-5`}>
      <div className="flex flex-col w-full">
        <div>{children}</div>
      </div>
    </div>
  );
}
