import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
   <main className="flex flex-col items-center justify-center h-screen">
    <SignIn/>
   </main>
  )
}

export default SignInPage