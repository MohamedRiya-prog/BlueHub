import {getSession} from "next-auth/react";
import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
    const session = await auth();
  return (
    <>
      <h1>Welcome to BlueHub Where Knowledge is Shared</h1>
      <h1 className='font-space-grotesk'>Connect, Learn, and Grow Together!</h1>

        <form className='px-10 pt-[100px]' action={async () => {
            "use server"

            await signOut ({redirectTo: ROUTES.SIGN_IN});
        }}>
            <Button type="submit">Log out</Button>
        </form>
    </>
  )
}

export default Home