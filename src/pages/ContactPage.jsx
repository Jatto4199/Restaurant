import Navbar from "../components/Navbar";
export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold">Contact Us</h2>

      <form className="mt-6 space-y-4">
        <input className="w-full p-3 border" placeholder="Name" />
        <input className="w-full p-3 border" placeholder="Email" />
        <textarea className="w-full p-3 border" placeholder="Message"></textarea>

        <button className="bg-primary text-white px-6 py-3">
          Send Message
        </button>
      </form>
    </div>
  );
}