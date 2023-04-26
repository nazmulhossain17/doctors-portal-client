import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
      navigate(from, {replace: true});
    }
    const {register, formState: { errors }, handleSubmit} = useForm()
    const handleLogin = data =>{
      signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        setLoginUserEmail(data.email);

      })
      .catch(error => {
        console.log(error.message)
        setLoginError(error.message)
      })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
     
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="email"
   {...register("email", {
    required: "Email Address is required"
    })} 
   className="input input-bordered w-full max-w-xs"/>
         {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

</div>
<div className="form-control w-full max-w-xs">
  <label className="label"><span className="label-text">Password</span></label>
  <input type="password" {...register("password",
   {required: "Password is required",
   minLength: {value: 8, message: "Password must be 8 characters or longer"}}
   )} className="input input-bordered w-full max-w-xs"/>
    <label className="label"><span className="label-text">Forget Password</span></label>  
    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
</div>
      <input className='btn btn-success w-full' value="login" type="submit" />
    <div>
      {loginError && <p className='text-red-600'>{loginError}</p>}
    </div>
    </form>
    <p>New to doctor Portal <Link className='text-primary' to='/signup'>Create new account</Link></p>
    <div className="divider">OR</div>
    <button className='w-full btn btn-outline btn-error'>Continue with Google</button>
    </div>
        </div>
    );
};

export default Login;