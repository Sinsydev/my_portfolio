interface ProjectProps {
  title: string;
  description: string;
  tech: string;
}

export default function ProjectCard({ title, description, tech }: ProjectProps) {
  return (
    <div className="border-l-4 border-blue-600 bg-blue-50 p-5 rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-700 mt-2 leading-relaxed">{description}</p>
      <div className="mt-4 text-sm font-mono text-blue-600 bg-white p-2 rounded">{tech}</div>
    </div>
  );
}