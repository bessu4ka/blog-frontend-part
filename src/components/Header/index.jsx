import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout, selectIsAuth } from '../../redux/slices/auth';

import styles from './Header.module.scss';

export const Header = () => {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	function onClickLogout() {
		if (window.confirm('Are you sure want to logout?')) {
			dispatch(logout());
			window.localStorage.removeItem('token');
		}
	}

	return (
		<div className={styles.root}>
			<Container maxWidth='lg'>
				<div className={styles.inner}>
					<Link className={styles.logo} to='/'>
						<div>user blog</div>
					</Link>
					<div className={styles.buttons}>
						{isAuth ? (
							<Link to='/' className={styles.link}>
								<Button onClick={() => onClickLogout()} variant='contained'>
									LogOut
								</Button>
							</Link>
						) : (
							<Link to='/login' className={styles.link}>
								<Button variant='outlined'>LogIn</Button>
							</Link>
						)}
						{!isAuth ? (
							<Link to='/register' className={styles.link}>
								<Button variant='contained'>Create account</Button>
							</Link>
						) : (
							<Link to='/register' className={styles.link}>
								<Button variant='contained'>Create article</Button>
							</Link>
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};
