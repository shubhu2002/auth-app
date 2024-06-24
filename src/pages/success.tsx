import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "~/layout";

const SuccessPage = () => {
  const { data: session } = useSession();
  console.log(session);
  const { push } = useRouter();

  const handleClick = async () => {
    await signOut({ callbackUrl: "/", redirect: false });
    void push("/");
  };
  return (
    <Layout>
      <div className="relative z-[1] flex flex-col items-center gap-3">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
          <Image
            src={session?.user?.image ?? `/assets/lock.png`}
            alt="logo"
            width={404}
            height={404}
          />
        </div>
        <div>{session?.user?.name ?? "Metal Lee"}</div>
        <div>{session?.user?.email ?? "info@example.com"}</div>
        <div>{session?.user?.username ?? "MetalLee07"}</div>
        <button onClick={handleClick} className="relative z-[1] cursor-pointer btn-style before:bg-white hover:text-black">
          <span className="btn-style-content">Sign Out</span>
        </button>
      </div>
    </Layout>
  );
};

export default SuccessPage;
