import ImageGrid from "./imageGrid";

function Archive() {
  return (
    <>
      <main className='px-4   lg:px-8  '>
        <h1 className='font-display text-2xl md:text-4xl font-normal tracking-tight pt-32  pb-24'>
          A Selection of recent projects.
        </h1>

        <ImageGrid />
      </main>
    </>
  );
}
export default Archive;
