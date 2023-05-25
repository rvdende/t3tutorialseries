import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import PageComponent from "~/components/pagecomponent";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const fancyapi = api.somefancy.morelayers.useMutation();

  const [userinput, userinput_set] = useState("");
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <pre>{JSON.stringify(fancyapi.data, null, 2)}</pre>

        <div className="m-10 rounded-xl bg-indigo-500 p-10 text-white">
          <input
            value={userinput}
            className="border p-2 text-black"
            onChange={(e) => {
              userinput_set(e.target.value);
            }}
          />
          <button
            className="m-10 bg-green-500 p-2"
            onClick={() => {
              fancyapi.mutate({ userinput });
            }}
          >
            SEND
          </button>
          <div className="flex flex-col gap-4 bg-sky-100 p-5 text-black">
            <Link href="/blog/first" className="hover:underline">
              First Blog post
            </Link>
            <Link href="/blog/second" className="hover:underline">
              Second Blog post
            </Link>
          </div>

          <PageComponent />
          <PageComponent />
          <PageComponent />
        </div>
      </main>
    </>
  );
};

export default Home;
