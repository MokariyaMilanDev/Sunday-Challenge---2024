import { Link } from "react-router-dom";
import appIcon from "../assets/hive.svg";

const SignIn = () => {
  return (
    <section className="w-full">
      <main className="border border-zinc-200 p-4 min-[500px]:w-[80%] min-[700px]:w-[60%] min-[900px]:w-[30%] m-auto">
        <div className="my-2">
          <h1 className="font-bold text-xl text-center">Welcome back!</h1>
        </div>
        <div className="flex my-4 justify-center items-center">
          <img className="h-24" src={appIcon} alt="" />
        </div>
        <section className="grid gap-4">
          <div className="">
            <input
              className=" bg-zinc-200 w-full p-2 focus:outline-none hover:outline-none"
              type="text"
              placeholder="Gmail"
            />
          </div>
          <div>
            <input
              className=" bg-zinc-200 w-full p-2 focus:outline-none hover:outline-none"
              type="text"
              placeholder="Password"
            />
            <Link to={"/"} className="text-right cursor-pointer m-2 block">
              Foregot password
            </Link>
          </div>
          <div>
            <button className="w-full font-medium text-base p-2 bg-zinc-200">
              Sign in
            </button>
            <div className="flex justify-center items-center">
              <p className="text-center px-4 py-2 mt-4 -mb-5 bg-white inline-block">
                OR
              </p>
            </div>
            <hr className="border mb-8 " />
            <h6 className="text-center">
              {"Don't have any acccout? "}
              <Link className="text-blue-900" to={"/sign-up"}>
                Sign up
              </Link>
            </h6>
          </div>
        </section>
      </main>
    </section>
  );
};

export default SignIn;
