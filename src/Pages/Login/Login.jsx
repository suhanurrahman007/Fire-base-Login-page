import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result => {
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">LogIn</h1>
          <p className="py-6">
            Of plume truly shall raven lordly on be shore. Implore as of the
            wretch lore, remember sought its and that, this thinking unmerciful
            its streaming my thy this, yore but or fowl tapping tempest oer
            some, my forget a no upon, and my songs said the before of by oer.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogInSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
              Do not have an account?
              <Link to={"/registration"}>
                <button
                  href="#signup"
                  className="ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased"
                >
                  Sign Up
                </button>
              </Link>
            </p>

            <p className="mx-auto p-1">
              <button onClick={handleGoogleSignIn} className="btn ml-1 block font-sans text-sm font-bold leading-normal text-pink-500 antialiased">
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
