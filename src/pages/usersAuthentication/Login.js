import React, {useState, useEffect} from "react";
import GoogleIcon from "../../assets/Icons/GoogleIcon.svg";
import FacebookIcon from "../../assets/Icons/FacebookIcon.svg";
import InstagramIcon from "../../assets/Icons/InstagramIcon.svg";
import TwitterIcon from "../../assets/Icons/TwitterIcon.svg";
import {useSelector, useDispatch} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {loginAction} from "../../redux/actions/actionsAuth";
import Header from "../Header";

export const Login = () => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const {email, password} = state;
	const {currentUser} = useSelector((state) => state.dataAuth);
	const handleGoogleSignIn = () => {};

	const handleLoginForm = (event) => {
		event.preventDefault();
		if (!email || !password) {
			return;
		}
		dispatch(loginAction(email, password));
		setState({email: "", password: ""});
	};
	const handleInputChange = (event) => {
		const {name, value} = event.target;
		setState({...state, [name]: value});
	};
	useEffect(() => {
		if (currentUser) {
			history.push("/dashboard");
		}
	}, [currentUser, history]);
	return (
		<div>
			<Header />
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
					<div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
						<h1 className='title-font font-medium text-3xl text-gray-900'>
							Slow-carb next level shoindcgoitch ethical authentic, poko
							scenester
						</h1>
						<p className='leading-relaxed mt-4'>
							Poke slow-carb mixtape knausgaard, typewriter street art gentrify
							hammock starladder roathse. Craies vegan tousled etsy austin.
						</p>
					</div>

					<div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
						<h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
							LogIn
						</h2>
						<form onSubmit={handleLoginForm}>
							<div className='relative mb-4'>
								<label
									htmlFor='email'
									className='leading-7 text-sm text-gray-600'
								>
									Email
								</label>
								<input
									className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									type='email'
									id='email-login'
									name='email'
									value={email}
									onChange={handleInputChange}
								/>
							</div>
							<div className='relative mb-4'>
								<label
									htmlFor='full-name'
									className='leading-7 text-sm text-gray-600'
								>
									Password
								</label>
								<input
									className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									type='password'
									id='password-login'
									name='password'
									value={password}
									required
									onChange={handleInputChange}
								/>
							</div>
							<button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								SignIn
							</button>
						</form>
						<div className='flex justify-end mt-3'>
							<p className='text-xs  text-gray-500 mt-2'>
								Don't Have an Account
							</p>
							<Link to='/signup'>
								<span className=' text-xs ml-2  text-black '>Sign-Up</span>
							</Link>
						</div>
						<div className='flex align-center items-center justify-center '>
							<button
								className=' w-10 h-10 p-0 border-0 mt-4   text-gray-500 ml-4 '
								onClick={handleGoogleSignIn}
							>
								<img src={GoogleIcon} alt='' />
							</button>
							<button
								className=' w-10 h-10  p-0 border-0 mt-4    text-gray-500 ml-4 '
								// onClick={handleFbSignIn}
							>
								<img src={FacebookIcon} alt='' />
							</button>
							<button
								className=' w-10 h-10 p-0 border-0 mt-4    text-gray-500 ml-4 '
								// onClick={handleInstagramSignIn}
							>
								<img src={InstagramIcon} alt='' />
							</button>
							<button
								className=' w-10 h-10 p-0 border-0 mt-4    text-gray-500 ml-4 '
								// onClick={handleTwitterSignIn}
							>
								<img src={TwitterIcon} alt='' />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
