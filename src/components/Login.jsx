import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black/80 text-white my-36 mx-auto left-0 right-0 rounded-md">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>

        <input
          type="text"
          placeholder="Email or Phone number"
          className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
        />

        <button className="p-4 my-6 bg-red-600 hover:bg-red-700 w-full rounded-md font-semibold">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
