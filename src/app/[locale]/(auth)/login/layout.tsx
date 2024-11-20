export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`relative w-full h-full flex items-center p-5`}>
      <div className="flex flex-col gap-5 w-full">
        {/* <h1 className="text-center font-sans text-2xl font-bold">Đăng nhập</h1> */}
        <div>{children}</div>
      </div>
    </div>
  );
}
