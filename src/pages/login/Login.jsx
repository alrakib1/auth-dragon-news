import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {singIn} = useContext(AuthContext);

  const location = useLocation();

  console.log(location)

const navigate = useNavigate ();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get('email')

        const password = form.get('password');

        singIn(email,password).then(result=>{
          console.log(result.user)
          // navigate after login
          navigate(location?.state ? location.state : '/')
        }).catch(error=>{
          console.log(error)
        })
        form.reset();
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="rounded-md border-2">
        <h3 className="text-4xl my-10 text-center">Please log in</h3>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
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
        <p className="mt-4 text-center mb-4">
          Do not have an account ?{" "}
          <Link to="/register" className="text-orange-600 font-bold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
