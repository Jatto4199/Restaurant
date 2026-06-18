const items = [
  { name: "Jollof Rice Special", price: "₦3,500" },
  { name: "Grilled Chicken", price: "₦5,000" },
  { name: "Seafood Pasta", price: "₦7,000" },
  { name: "Pancakes & Syrup", price: "₦2,500" },
  { name: "Egg Sandwich", price: "₦1,800" },
  { name: "Tea & Bread", price: "₦1,200" },
  { name: "Fried Rice & Chicken", price: "₦4,000" },
  { name: "Amala & Ewedu", price: "₦3,500" },
  { name: "Banga Soup", price: "₦4,500" },
  { name: "Chapman", price: "₦1,500" },
  { name: "Fresh Juice", price: "₦2,000" },
  { name: "Smoothie", price: "₦2,500" },
];

export default function Menu() {
  return (
    <section className="bg-blue-500 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Best Sellers</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-10 px-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-primary mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}