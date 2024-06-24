import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundGradient from "~/components/gradient-prallax";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Auth System</title>
        <meta name="description" content="Authorization by Shubhanshu " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`relative h-full min-h-screen w-full overflow-hidden bg-[#090209] text-white `}
      >
        <div className="flex h-full min-h-screen w-full items-center justify-center overflow-hidden px-[6%]">
          {children}
          <ToastContainer position="top-center" theme="dark" />
        </div>
        <BackgroundGradient />
      </main>
    </>
  );
};

export default Layout;
