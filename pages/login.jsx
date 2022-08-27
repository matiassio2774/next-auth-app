import { getSession, signIn } from "next-auth/react";
import { AiOutlineGithub } from 'react-icons/ai'

function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center h-72 w-2/6">
      <h1 className="font-semibold text-5xl p-10 text-slate-200">Welcome</h1>
      <button 
      className="flex justify-center gap-2 
      w-40 max-w-xs bg-fuchsia-400  text-black text-center p-1 rounded hover:bg-fuchsia-300"
      onClick={() => signIn("github")}>
        <span className="w-20 flex justify-around items-center font-semibold">
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
        destination: "/dashboard",
        permanent: false,
      },
    };

  return {
    props: {},
  };
}

export default LoginPage;
