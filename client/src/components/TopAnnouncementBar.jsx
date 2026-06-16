export default function TopAnnouncementBar() {
  const announcements = [
  "Professional Audio Equipment",
  "Studio Solutions & Accessories",
  "Audio System Integration",   
  "Auditorium & Corporate Installations",
  "Pan India Delivery & Support",
];

  return (
    <div className="bg-[#232466] text-white overflow-hidden h-10 flex items-center border-b border-white/10">
      <div className="ticker-track flex items-center whitespace-nowrap">

        {[...announcements, ...announcements].map((item, index) => (
          <div
            key={index}
            className="flex items-center text-sm font-medium"
          >
            <span className="mx-8">{item}</span>
            <span className="text-white/30">•</span>
          </div>
        ))}

      </div>
    </div>
  );
}