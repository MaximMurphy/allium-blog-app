export default function Marquee() {
  return (
    <div className="bg-allium-cream w-full flex overflow-hidden font-semibold text-base lg:text-xl py-4 border-y lg:border-y-2 border-allium-darkbrown">
      <div className="w-max flex animate-marquee">
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
      </div>
      <div className="flex animate-marquee" aria-hidden="true">
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
        <p className="w-36 lg:w-52">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-52">I 💚 ONIONS</p>
      </div>
    </div>
  );
}
