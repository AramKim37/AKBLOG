import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);

  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row max-w-3xl mx-auto gap-5 p-3 md:items-center">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-300 via-indigo-500 to-blue-500  text-transparent bg-clip-text">
              Aram`s Blog
            </span>
          </h1>
          <h3 className="font-light text-gray-500">
            This is my Blog. You can sign up with your email and password or
            with Google email
          </h3>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label value="Your name" />
              <TextInput
                placeholder="Username"
                type="text"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label value="Your email" />
              <TextInput
                placeholder="Email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label value="Your password" />
              <TextInput
                placeholder="Password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button type="submit" gradientDuoTone="purpleToBlue">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <h3>Have an account?</h3>
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
