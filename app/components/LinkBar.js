import { VercelIcon, GithubIcon, g0vIcon } from "../icons";

const LinkBar = () => (
  <div className="absolute top-5 hidden w-full justify-between px-5 sm:flex">
    <a
      href="/deploy"
      target="_blank"
      className="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
    >
      <VercelIcon />
    </a>
    <a
      href="/g0v"
      target="_blank"
      className="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
    >
      <img src="https://imagedelivery.net/WO_sK8AGsHZbPc2iUuxbgA/4a8efc0f-50da-49ee-ce5a-c043df3e5f00/public" alt="g0v"/>
    </a>
    {/* <a
      href="/g0v"
      target="_blank"
      className="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
    >
      <g0vIcon />
    </a> */}
    {/* <a
      href="/github"
      target="_blank"
      className="rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
    >
      <GithubIcon />
    </a>
     */}
  </div>
);

export default LinkBar;
