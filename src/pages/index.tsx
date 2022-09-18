import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const secretMessage = trpc.useQuery(["auth.getSecretMessage"]);

  return (
    <>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Create <span className="text-purple-300">T3</span> App
      </h1>
      <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
        {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
      </div>
      <div>
        {secretMessage.data ? <p>{secretMessage.data}</p> : <p>Loading secret message ..</p>}
      </div>
    </>
  );
};

export default Home;