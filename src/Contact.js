import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom';


export default function Contact () {
return (
<div className='content'>
<div className="contact-container">
<h2>Contact Us</h2>
<p>Get in touch with us using the form below:</p>
<form>
<label >Name:</label>
<input type="text"/>
<br />
<label htmlForm="email">Email:</label>
<input type="email"/>
<br />
<label htmlForm="message">Message:</label>
<textarea/>
<br />
<button type="submit">Send</button>
</form>
<p>Contact Information:</p>
<ul>
<li>Address: 94 Kamuning Rd, Diliman, Quezon City, 1103 Metro Manila</li>
<li>Phone: (02) 8441 1816</li>
<li>Email: ciit.email@ciit.edu.ph</li>
</ul>
</div>
</div>
);
};