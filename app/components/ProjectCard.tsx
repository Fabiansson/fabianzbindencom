interface ProjectCardProps {
  image: string;
  title: string;
  text: string;
  technologies: string[];
  githubLink: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    // bg-zinc-700 bg-opacity-10 shadow-lg hover:shadow-xl
    <div className="glass rounded-lg overflow-hidden flex flex-row">
      <div className="basis-1/4 rounded-l-lg flex justify-center p-2">
        <img
          className="rounded-lg self-center"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="basis-3/4 p-4 flex flex-col justify-between">
        {/* Title and Text */}
        <div>
          <h2 className="text-gray-900 font-bold text-xl">Title</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            velit vitae tortor posuere placerat.
          </p>
        </div>

        {/* Badges */}
        <div className="mt-4 flex flex-row space-x-2">
          {props.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
