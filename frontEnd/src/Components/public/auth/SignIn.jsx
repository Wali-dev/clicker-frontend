
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleTermsChange = (e) => setTermsAccepted(e.target.checked);

    const handleSignInClick = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            setError('You must accept the terms and conditions.');
            return;
        }
        try {
            const body = {
                userName: email,
                password: password
            };
            const loginUser = async () => {
                await axios.post("http://localhost:8000/api/auth/login", body)
                    .then(response => {
                        if (response.data.status === 'Success') {
                            sessionStorage.setItem('authToken', response.data.token); //STORE THE TOKEN IN LOCAL STORAGE
                            navigate('/admin/links');
                        }
                        else {
                            alert("Check your credentials")
                        }
                    })
            }
            await loginUser();

        } catch (error) {
            console.error('Sign-in error:', error);
            setError('Invalid email or password. Please try again.');
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
            <form className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSignInClick}>
                <div className="mb-5 text-xl font-medium">Sign In</div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email or username
                    </label>
                    <input

                        id="email/userName"
                        value={email}
                        onChange={handleEmailChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"

                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="terms"
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={handleTermsChange}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-orange-600"
                            required
                        />
                    </div>
                    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        I agree with the <a href="#" className="text-orange-600 hover:underline dark:text-orange-500">terms and conditions</a>
                    </label>
                </div>
                {error && (
                    <p className="text-red-500 text-xs mt-2">{error}</p>
                )}
                <button
                    type="submit"
                    className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
