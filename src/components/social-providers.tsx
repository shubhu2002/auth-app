import { signIn } from "next-auth/react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialProviders = () => {
  return (
    <div className="mt-4 flex w-full items-center gap-5">
      <div
        className="btn-style flex flex-1 cursor-pointer justify-center border border-white/50  before:bg-white"
        onClick={() => signIn("google")}
      >
        <span className="btn-style-content">
          <FcGoogle size={24} />
        </span>
      </div>
      <div
        className="btn-style flex flex-1 cursor-pointer justify-center border border-white/50  before:bg-white hover:text-black"
        onClick={() => signIn("twitter")}
      >
        <span className="btn-style-content">
          <FaXTwitter size={24} />
        </span>
      </div>
      <div
        className="btn-style flex flex-1 cursor-pointer justify-center border border-white/50  before:bg-white"
        onClick={() => signIn("github")}
      >
        <span className="btn-style-content">
          <FaGithub size={24} />
        </span>
      </div>
    </div>
  );
};

export default SocialProviders;
