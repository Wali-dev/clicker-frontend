import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUserName = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleNextClick = () => {
        console.log('Username:', username);
        // Call your function here, e.g., modifyFunction(username);
        navigate('/signup/2');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
            <form className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <div className="mb-5">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Choose a username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        aria-invalid="false"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleNextClick}
                    disabled={!username}
                    className={`text-white ${username ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-400 cursor-not-allowed'} focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
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

export default SignUserName;
