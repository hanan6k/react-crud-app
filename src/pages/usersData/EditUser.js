import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSingleUser, updateUser} from "../../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 100,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1),
			width: "45ch",
		},
	},
}));

const EditUser = () => {
	const {id} = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const {user} = useSelector((state) => state.data);
	const classes = useStyles();

	useEffect(() => {
		dispatch(getSingleUser(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (user) {
			setState({...user});
		}
	}, [dispatch, user]);

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
		if (!name || !address || !email || !contact) {
			setError("Please fill the required field ");
		} else {
			dispatch(updateUser(state, id));
			history.push("/");
			setError("");
		}
	};

	return (
		<div>
			<Button
				style={{width: "100px", marginTop: "20px"}}
				variant='contained'
				color='secondary'
				type='submit'
				onClick={() => history.push("/dashboard")}
			>
				Go Back
			</Button>
			<br />
			<br />
			<h1>Edit User Form</h1>
			{error && <h3 style={{color: "red"}}>{error}</h3>}
			<form
				onSubmit={handleFormSubmit}
				className={classes.root}
				noValidate
				autoComplete='off'
			>
				<TextField
					id='standard-basic'
					label='Name'
					name='name'
					variant='outlined'
					color='secondary'
					value={name || ""}
					type='text'
					onChange={handleInputChange}
				/>
				<br />
				<TextField
					id='standard-basic'
					label='Email'
					name='email'
					variant='outlined'
					color='secondary'
					value={email || ""}
					type='email'
					onChange={handleInputChange}
				/>
				<br />
				<TextField
					id='standard-basic'
					label='Contact'
					name='contact'
					variant='outlined'
					color='secondary'
					value={contact || ""}
					type='number'
					onChange={handleInputChange}
				/>
				<br />
				<TextField
					id='standard-basic'
					label='Address'
					name='address'
					variant='outlined'
					color='secondary'
					value={address || ""}
					type='text'
					onChange={handleInputChange}
				/>
				<br />
				<Button
					style={{width: "100px"}}
					variant='contained'
					color='primary'
					type='submit'
				>
					Update
				</Button>
			</form>
		</div>
	);
};

export default EditUser;
