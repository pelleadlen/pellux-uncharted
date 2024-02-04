import ImageGrid from "./imageGrid";

function Archive() {
  return (
    <>
      <main className='mx-4   lg:mx-8 bg-'>
        <h1 className='font-display text-4xl font-normal tracking-tight pt-32  pb-24'>
          A Selection of recent projects.
        </h1>
        <ImageGrid />
      </main>
    </>
  );
}
export default Archive;
