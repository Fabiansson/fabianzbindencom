export default function Socials() {
  return (
    <div className="flex space-x-6 justify-center items-center">
      <a
        href="https://github.com/fabiansson"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github-mark.svg"
          alt="GitHub"
          className="fz-shadow-h w-10 h-10 mr-4 rounded-full"
        />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/linkedin-icon.svg"
          alt="Linkedin"
          className="fz-shadow-h w-10 h-10 mr-4 rounded-md"
        />
      </a>
    </div>
  );
}
