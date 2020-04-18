import React, { useState, useCallback } from 'react';
import "../Form.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = useCallback(async e => {
        e.preventDefault();

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        console.log(process.env.REACT_APP_API)

        if (password !== confirmPassword) {
            console.log("error")
        }

        const res = await fetch("http://127.0.0.1:5000" + '/register', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                username,
                password
            })
        });

        const jwt = await res.text();

        if (res.ok) {
            localStorage.setItem('jwt', jwt);
            window.location.replace('/');
        } else {
            console.log("Error")
        }
    }, [username, password, confirmPassword]);


    return (
        <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <div class="center">
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <form>
                            <input type="text" class="fadeIn second" name="login" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                            <input type="text" class="fadeIn third" name="login" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <input type="text" class="fadeIn third" name="login" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                            <input type="submit" class="fadeIn fourth" value="Sign Up" onClick={handleSubmit} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;