import Home from '../src/Components/Home/Home';
import Login from '../src/Components/Login/Login';
import Register from '../src/Components/Register/Register'

export default [
    { path: '/', exact: true, component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
];