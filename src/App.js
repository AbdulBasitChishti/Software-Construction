import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import logo from './logo.png';
import intro from './intro.png';
import about from './about.png';
import './App.css';

export default function App() {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<img src={logo}/>
					<Typography variant="h6" className="companyName">Spiky Viper Corporates</Typography>
					<Button color='inherit' className="right">Home</Button>
					<Button color='inherit' className="right">About</Button>
					<Button color='inherit' className="right">What we do</Button>
					<Button color='inherit' className="right">Portfolio</Button>
					<Button color='inherit' className="right">Clients</Button>
					<Button color='inherit' className="right">Careers</Button>
					<Button color='inherit' className="right">Contact Us</Button>
				</Toolbar>
			</AppBar>
			<Container className='container'>
				<div className='box'>
					<Typography variant="h4" className='heading'>Welcome to <strong>Spiky Viper Corporates</strong></Typography>
					<Typography variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
					<br/>
					<Typography variant="p">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, 
						sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
				</div>
				<div>
					<img src={intro} className="introRight"/>
				</div>
				<div className='clear'></div>

				<div>
					<img src={about} className="introLeft"/>
				</div>
				<div className='box'>
					<Typography variant="h4" className='heading'>About Us</Typography>
					<Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam<br/><br/>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/><br/>dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, 
						sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
				</div>
				<div className='clear'></div>
				
				<Typography variant="h4" className='cardHeading'>What we do</Typography>
				<Typography variant="p" className='cardSub'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</Typography>
				<div className='cardSection'>
					<Card className='cards'>
						<CardContent className='content'>
							<Typography variant='h5' className='content'>Web Development</Typography><br/>
							<Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
						</CardContent>
					</Card>
					<Card className='cards'>
						<CardContent className='content'>
							<Typography variant='h5' className='content'>Web Development</Typography><br/>
							<Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
						</CardContent>
					</Card>
					<Card className='cards'>
						<CardContent className='content'>
							<Typography variant='h5' className='content'>Web Development</Typography><br/>
							<Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
						</CardContent>
					</Card><br/>
					<div className='clear'></div>
					<Card className='cards'>
						<CardContent className='content'>
							<Typography variant='h5' className='content'>Web Development</Typography><br/>
							<Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
						</CardContent>
					</Card>
					<Card className='cards'>
						<CardContent className='content'>
							<Typography variant='h5' className='content'>Web Development</Typography><br/>
							<Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
						</CardContent>
					</Card>
					<Card className='cards'>
						<CardContent className='content'>
							<Typography variant='h5' className='content'>Web Development</Typography><br/>
							<Typography variant='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
						</CardContent>
					</Card>
				</div>
				<div className='clear'></div>
			</Container>
		</div>
	);
}