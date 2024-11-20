export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full h-full flex items-center p-5`}>
      <div className="flex flex-col gap-5 w-full">
        <h1 className="text-center text-3xl font-bold">Đăng ký tài khoản</h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
