export default function Marquee() {
  return (
    <div className="w-full flex overflow-hidden font-semibold text-base lg:text-xl py-4 border-t lg:border-t-2 border-allium-darkbrown">
      <div className="w-max flex animate-marquee">
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
      </div>
      <div className="flex animate-marquee" aria-hidden="true">
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
        <p className="w-36 lg:w-64">I 🤎 GARLIC</p>
        <p className="w-36 lg:w-64">I 💚 ONIONS</p>
      </div>
    </div>
  );
}
