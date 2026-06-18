export default function Hero() {
  return (
    <section className="flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center">
      <div className="bg-black/60 p-10 text-center text-white rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Delicious Food, Fresh Taste
        </h1>
        <p className="mt-4">Experience premium dining with Savora Restaurant</p>

        <button className="mt-6 px-6 py-3 bg-primary rounded-full">
          Explore Menu
        </button>
      </div>
    </section>
  );
}