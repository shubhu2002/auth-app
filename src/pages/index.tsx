import Layout from "~/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center">
        <div className="relative z-[1] mb-6 text-[11vw] md:mb-0 md:text-[8vw]">
          Welcome , Pals !!{" "}
        </div>
        <div className="mb-6 text-center font-mono text-[8vw] md:mb-0 md:text-[6vw]">
          You are safe & secure{" "}
        </div>
        <div className="mb-8 w-full text-center font-mono text-[4vw] text-[#dfd5fb] md:max-w-[70vw] md:text-[1.5vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, hic!
          Accusantium ipsum voluptatum corporis repellendus cum laborum
          deleniti. Unde officia error sed culpa autem ullam adipisci iure quo.
        </div>

        <Link
          className="btn-style cursor-pointer before:bg-white hover:text-black"
          href="/login"
        >
          <button className="btn-style-content">Let&apos;s Start</button>
        </Link>
      </div>
    </Layout>
  );
}
