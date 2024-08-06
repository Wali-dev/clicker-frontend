import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRepeatPasswordChange = (e) => setRepeatPassword(e.target.value);
    const handleTermsChange = (e) => setTermsAccepted(e.target.checked);

    const checkEmailExists = async (email) => {
        try {
            const response = await axios.post('/api/check-email', { email });
            return response.data.exists; // Assuming the response has an 'exists' field
        } catch (error) {
            console.error('Error checking email:', error);
            return false;
        }
    };

    const handleNextClick = async () => {
        if (password !== repeatPassword) {
            setPasswordMatch(false);
            // Reset password fields
            setPassword('');
            setRepeatPassword('');
            return;
        }
        setPasswordMatch(true);

        // Check if email exists
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            setEmailError('Email is already registered. Please use a different email.');
            return;
        }
        setEmailError('');

        // Call your function here with state values
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Terms Accepted:', termsAccepted);

        // Navigate to the next page
        navigate('/signup/3');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
            <form className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`shadow-sm bg-gray-50 border ${emailError ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500`}
                        placeholder="name@gmail.com"
                        required
                    />
                    {emailError && (
                        <p className="text-red-500 text-xs mt-2">{emailError}</p>
                    )}
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
                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Repeat password
                    </label>
                    <input
                        type="password"
                        id="repeat-password"
                        value={repeatPassword}
                        onChange={handleRepeatPasswordChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        required
                    />
                    {!passwordMatch && (
                        <p className="text-red-500 text-xs mt-2">Passwords do not match</p>
                    )}
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
                <button
                    type="button"
                    onClick={handleNextClick}
                    className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    disabled={!email || !password || !repeatPassword || !termsAccepted || !passwordMatch}
                >
                    Next
                </button>
                <p className="mt-5 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Already have an account? <a href="/signin" className="text-orange-600 hover:underline dark:text-orange-500">Sign in</a>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
