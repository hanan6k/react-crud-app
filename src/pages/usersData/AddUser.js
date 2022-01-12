import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../../redux/actions/actions";

const AddUser = () => {
	const history = useHistory();

	const dispatch = useDispatch();

	const [state, setState] = useState({
		name: "",
		email: "",
		contact: "",
		address: "",
	});

	const {name, email, contact, address} = state;
	const [error, setError] = useState("");
	const handleInputChange = (event) => {
		const {name, value} = event.target;
		setState({...state, [name]: value});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(state);

		if (!name || !address || !email || !contact) {
			setError("Please fill the required field ");
		} else {
			dispatch(addUser(state));
			setError("");
			history.push("/");
		}
	};

	return (
		<section className='text-gray-600 body-font relative'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-12'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
						User Form
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
						gentrify.
					</p>
				</div>
				<div className='lg:w-1/2 md:w-2/3 mx-auto'>
					{error && <h3 style={{color: "red"}}>{error}</h3>}
					<form
						className='flex flex-wrap flex-col	items-center -m-2'
						onSubmit={handleFormSubmit}
					>
						<div className='p-2 w-1/2'>
							<div className='relative'>
								<label for='name' className='leading-7 text-sm text-gray-600'>
									Name
								</label>
								<input
									className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									type='text'
									id='standard-basic'
									name='name'
									value={name}
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<div className='p-2 w-1/2'>
							<div className='relative'>
								<label for='email' className='leading-7 text-sm text-gray-600'>
									Email
								</label>
								<input
									className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									type='email'
									id='standard-basic'
									name='email'
									value={email}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div className='p-2 w-1/2'>
							<div className='relative'>
								<label for='email' className='leading-7 text-sm text-gray-600'>
									Contact
								</label>
								<input
									className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									type='number'
									id='standard-basic'
									name='contact'
									value={contact}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div className='p-2 w-1/2'>
							<div className='relative'>
								<label for='email' className='leading-7 text-sm text-gray-600'>
									Address
								</label>
								<input
									className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
									type='text'
									id='standard-basic'
									name='address'
									value={address}
									onChange={handleInputChange}
								/>
							</div>
						</div>
						<div className='flex mt-10 w-full'>
							<button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								Submit
							</button>
							<button
								className='flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
								onClick={() => history.push("/dashboard")}
							>
								Go Back
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AddUser;
