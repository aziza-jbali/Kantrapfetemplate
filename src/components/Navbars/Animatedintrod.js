function Animatedintrod({ name = "Aziza" }) {
  return (
    <>
      <li className="flex items-center gap-3">
        {/* رسالة الترحيب المتحركة ff*/}
        <p
          className="font-bold text-white text-xl"
          style={{
            animation: "moveText 3s ease-in-out infinite alternate",
          }}
        >
          Bienvenue, <span className="text-blue-500">{name}!</span>
        </p>

        {/* صورة المستخدم المتحركة (GIF) */}
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Avatar"
          className="w-12 h-12 rounded-full border-2 border-blue-500 transition-transform duration-300 hover:scale-110"
        />
      </li>

      {/* Animation keyframes */}
      <style>{`
        @keyframes moveText {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(5px);
          }
        }
      `}</style>
    </>
  );
}

export default Animatedintrod;
