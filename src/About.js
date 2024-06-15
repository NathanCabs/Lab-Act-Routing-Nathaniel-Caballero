import './App.css';

export default function AboutUs() {
return (
<div className='content'>
<h2>About Us!</h2>
<p>
This application is a simple React app that demonstrates the use of
states, components and navigation. It was built using React, a popular JavaScript
library for building user interfaces.
</p>
<p>
The app has a login form that is validated using an array of credentials,
a simple navigation bar that allows users to switch between three different
components: Home, About Us, and Contact Us. Each component is rendered based on the
user's selection.
</p>
</div>
);
}