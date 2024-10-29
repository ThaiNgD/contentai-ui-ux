export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` flex items-center justify-center bg-black h-screen`}>
      <div className=" rounded-lg w-[400px] h-[600px] bg-white">{children}</div>
    </div>
  );
}
