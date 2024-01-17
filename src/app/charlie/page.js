import Link from "next/link";

export default function Charlie() {
  return (
    <>
      <div className='flex  min-h-screen justify-center items-center flex-col mx-4 md:mx-8 '>
        <h1 className=' font-display text-9xl tracking-tighter'>Charlie</h1>
        <Link href='/'>
          <p className='mt-8 py-2 px-4 rounded-md hover:bg-slate-500 bg-slate-200'>
            Return
          </p>
        </Link>
      </div>
    </>
  );
}
