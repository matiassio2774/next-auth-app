import { getSession, signIn } from "next-auth/react";
import { AiOutlineGithub } from 'react-icons/ai'

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-2/6 h-72">
      <h1 className="p-10 text-5xl font-semibold text-slate-200">Welcome</h1>
      <button 
      className="flex justify-center w-40 max-w-xs gap-2 p-1 text-center text-black rounded bg-fuchsia-400 hover:bg-fuchsia-300"
      onClick={() => signIn("github")}>
        <span className="flex items-center justify-around w-20 font-semibold">
        <AiOutlineGithub className="w-7 h-7" />
          LOGIN
          </span>
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {},
  };
}

export default LoginPage;
