function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-xl hover:bg-opacity-20 transition-all transform hover:scale-105">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  );
}

export default FeatureCard;