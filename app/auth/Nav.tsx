import Link from "next/link";
import Login from "./Login";
import Logged from "./Logged";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log("session", session);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href={"/"}>
        <h1 className="font-bold text-lg">Post 1</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {session?.user ? (
          <Logged image={session.user?.image || ""} />
        ) : (
          <Login />
        )}
      </ul>
    </nav>
  );
}
