import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormEvent, useRef } from "react";
import { UseAuth } from "./AuthContext";

export const SignUp = () => {
  const { SignUp } = UseAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageUrlRef = useRef<HTMLInputElement>(null);

  function HandleSubmit(e: FormEvent) {
    e.preventDefault();
    if (SignUp.isLoading) return;
    const username = usernameRef.current?.value;
    const name = nameRef.current?.value;
    const imageUrl = imageUrlRef.current?.value;

    if (username == null || username === "" || name == null || name === "") {
      return;
    }

    SignUp.mutate({ id: username, name, image: imageUrl });
  }
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
      <form
        onSubmit={HandleSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 
      items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern="[^\s]+" required ref={usernameRef} />
        <label htmlFor="userName">Name</label>
        <Input id="userName" pattern="[^\s]+" required ref={nameRef} />
        <label htmlFor="userName">Image Url</label>
        <Input id="userName" pattern="[^\s]+" required ref={imageUrlRef} />
        <Button
          disabled={SignUp.isLoading}
          type="submit"
          className="col-span-full"
        >
          {SignUp.isLoading ? "Loading.." : " Sign Up"}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
