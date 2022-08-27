import { getSession, signOut } from "next-auth/react";

function HomePage({ session }) {
  return (
    <div className="flex flex-col w-3/4 items-center text-slate-200">
      {session ? (
        <div>
          <h1 className="font-semibold text-5xl p-10 text-slate-200 text-center">
            ¡Welcome{" "}
            <span className="text-fuchsia-400 font-bold">
              {session.user.name}
            </span>
            !
          </h1>

          <img className="mx-auto h-40 rounded-full" src={session.user.image} alt="" />
          <p className="text-center py-4 text-lg text-gray-400">{session.user.email}</p>
        </div>
      ) : (
        <p>Skeleton</p>
      )}

      <button onClick={() => signOut()}
    className='w-40 max-w-xs bg-fuchsia-400  text-black text-center p-1 rounded hover:bg-fuchsia-300 font-bold'
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
