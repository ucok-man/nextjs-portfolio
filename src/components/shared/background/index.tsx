export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="relative size-full bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
        </div>
      </div>
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
    </>
  );
}
