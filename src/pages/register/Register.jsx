import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser}= useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo');
        const email = form.get('email')
        const password = form.get('password');
        console.log(name,photo,email,password)

        // create user

        createUser(email,password).then(result=>{
            console.log(result)
        }).catch(error=>{
            console.log(error)
        })
      };
    
    return (
        <div> 
            <Navbar></Navbar>
      <div className="rounded-md border-2">
        <h3 className="text-4xl my-10 text-center">Register</h3>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="mt-4 text-center mb-4">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600 font-bold">
            Login
          </Link>
        </p>
      </div>
        </div>
    );
};

export default Register;