import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import Layout from "~/layout";
import InputField from "~/components/inputField";
import SocialProviders from "~/components/social-providers";
import { apiInstance } from "~/utils";

export default function Login() {
  const { push } = useRouter();
  const [checkUserNameValid, setCheckUsernameValid] = useState<boolean>(false);
  const [passwordStatus, setPasswordStatus] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });

  // handle Input with Validation
  const handleInputChange = (fieldName: string, value: string) => {
    if (fieldName == "username") {
      if (value.length < 1) {
        setCheckUsernameValid(false);
      } else {
        setCheckUsernameValid(true);
      }
    }

    if (fieldName == "password") {
      if (value.length < 8) {
        setPasswordStatus(false);
      } else {
        setPasswordStatus(true);
      }
    }
    setUserInfo((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  // handle Submit
  const handleSubmit = async () => {
    try {
      const res = await apiInstance.post("/login", userInfo);
      if (res) {
        toast.success("Login Successfully");
        void push("/success");
      }
    } catch (error) {
      toast.error("Invalid Username or Password");
    }
    setUserInfo({ username: "", password: "" });
    setPasswordStatus(false);
  };

  return (
    <Layout>
      <div className="relative z-[1] flex h-full w-full flex-col items-center justify-center gap-3 md:max-w-[30vw]">
        <div className="w-full border-b border-white/10 pb-4">
          <h1 className="pb-1 text-4xl">Login to Account</h1>
          <span className="text-sm ">Welcome to your company name</span>
        </div>
        <div className="w-full border-b border-white/10 pb-4">
          <InputField
            label="Username"
            type="text"
            placeholder="metal07"
            value={userInfo.username}
            onChange={(value: string) => handleInputChange("username", value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="password"
            value={userInfo.password}
            onChange={(value: string) => handleInputChange("password", value)}
          />

          <button
            className="btn-style mt-6 w-full before:bg-black disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!passwordStatus || !checkUserNameValid}
            onClick={() => handleSubmit()}
          >
            <span className="btn-style-content">Login</span>
          </button>
        </div>

        <div>
          <div className="text-center text-xl opacity-80">or</div>
        </div>
        <div className="w-full">
          <SocialProviders />
        </div>
      </div>
      <div className="absolute bottom-5 z-[1] flex w-full flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <span>Don&apos;t have an account , </span>
          <Link href={"/signup"} className="text-base text-[#6b61a4]">
            Sign Up
          </Link>
        </div>
        <div>
          <Link href={"/"} className="text-base text-[#6b61a4]">
            Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
