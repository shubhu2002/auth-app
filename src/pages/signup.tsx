import React, { useEffect, useState } from "react";
import Layout from "~/layout";
import axios from "axios";
import Link from "next/link";
import InputField from "~/components/inputField";
import SocialProviders from "~/components/social-providers";
import { useRouter } from "next/router";

export default function SignUp() {
  const { push } = useRouter();
  const [checkNameValid, setCheckNameValid] = useState<boolean>(false);
  const [checkUserNameValid, setCheckUsernameValid] = useState<boolean>(false);

  const [usernameStatus, setUsernameStatus] = useState<{
    available: boolean;
    message: string | null;
  }>({ available: false, message: null });

  const [passwordStatus, setPasswordStatus] = useState<{
    text: string | null;
    color: string | null;
    valid: boolean;
  }>({ text: null, color: null, valid: false });

  const [userInfo, setUserInfo] = useState<{
    fullname: string;
    username: string;
    password: string;
  }>({ fullname: "", username: "", password: "" });

  // handle Input with Validation
  const handleInputChange = (fieldName: string, value: string) => {
    if (fieldName == "fullname" || fieldName == "username") {
      if (value.length < 1) {
        setCheckNameValid(false);
      } else {
        setCheckNameValid(true);
      }
    }

    if (fieldName == "username") {
      if (value.length < 1) {
        setCheckUsernameValid(false);
      } else {
        setCheckUsernameValid(true);
      }
    }

    if (fieldName == "password") {
      if (value.length < 8) {
        setPasswordStatus({ text: "Too Weak", color: "red", valid: false });
      } else if (value.length >= 8 && value.length <= 12) {
        setPasswordStatus({
          text: "Nice , It's Good",
          color: "orange",
          valid: true,
        });
      } else {
        setPasswordStatus({
          text: "Cool , It's Strong",
          color: "green",
          valid: true,
        });
      }
    }
    setUserInfo((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  // handle submit
  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/auth/user/register",
        userInfo,
      );
    } catch (error) {
      console.log(error);
    }
    setUserInfo({ fullname: "", username: "", password: "" });
    setPasswordStatus({ text: null, color: null, valid: false });
    void push("/success");
  };

  useEffect(() => {
    async function checkUsername() {
      const username = userInfo.username;
      try {
        const res = await axios.post<{
          available: boolean;
          message: string | null;
        }>("http://localhost:8000/api/auth/user/checkusername", {
          username,
        });
        setUsernameStatus({
          available: res.data?.available,
          message: res.data?.message,
        });
      } catch (error) {
        console.log(error);
      }
    }

    void checkUsername();
  }, [userInfo.username]);

  return (
    <Layout>
      <div className="relative z-[1] flex h-full w-full items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 md:max-w-[30vw]">
          <div className="w-full border-b border-white/10 pb-2">
            <h1 className="pb-1 text-4xl">Sign Up Account</h1>
            <span className="text-sm ">Welcome to your company name</span>
          </div>
          <div className="w-full border-b border-white/10 pb-4">
            <InputField
              label="FullName"
              type="text"
              placeholder="Metal Lee"
              value={userInfo.fullname}
              onChange={(value: string) => handleInputChange("fullname", value)}
            />
            <InputField
              label="Username"
              type="text"
              placeholder="meta07"
              value={userInfo.username}
              onChange={(value: string) => handleInputChange("username", value)}
            />
            {userInfo.username == "" ? (
              ""
            ) : (
              <span
                className={`pl-1 text-sm ${usernameStatus.available ? "text-[green]" : "text-red-700"} `}
              >
                {usernameStatus.message}
              </span>
            )}
            <InputField
              label="Password"
              type="password"
              placeholder="password"
              value={userInfo.password}
              onChange={(value: string) => handleInputChange("password", value)}
            />
            <span
              className={`pl-1 text-sm `}
              style={{ color: `${passwordStatus.color}` }}
            >
              {passwordStatus.text}
            </span>

            <button
              className="btn-style mt-6 w-full before:bg-black disabled:cursor-not-allowed disabled:opacity-50"
              disabled={
                !checkNameValid ||
                !checkUserNameValid ||
                !passwordStatus.valid ||
                !usernameStatus.available
              }
              onClick={() => handleSubmit()}
            >
              <span className="btn-style-content">Sign Up</span>
            </button>
          </div>
          <div className="w-full">
            <SocialProviders />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 flex w-full flex-col items-center justify-between gap-6 px-3 md:flex-row md:px-6">
        <div>
          <span>Already have an account , </span>
          <Link href={"/login"} className="text-base text-[#6b61a4]">
            Login Now
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
