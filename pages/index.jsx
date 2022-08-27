import { getSession, signOut } from "next-auth/react";

function HomePage({ session }) {
  return (
    <div className="flex flex-col items-center w-3/4 text-slate-200">
      {session ? (
        <div>
          <h1 className="p-10 text-5xl font-semibold text-center text-slate-200">
            ¡Welcome{" "}
            <span className="font-bold text-fuchsia-400">
              {session.user.name}
            </span>
            !
          </h1>

          <img className="h-40 mx-auto rounded-full" src={session.user.image} alt="" />
          <p className="py-4 text-lg text-center text-gray-400">{session.user.email}</p>
        </div>
      ) : (
        <p>Skeleton</p>
      )}

      <button onClick={() => signOut()}
    className='w-40 max-w-xs p-1 font-bold text-center text-black rounded bg-fuchsia-400 hover:bg-fuchsia-300'
      >LOGOUT</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
}

export default HomePage;
