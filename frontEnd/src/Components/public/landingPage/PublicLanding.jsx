
const PublicLanding = () => {
    return (
        <div>
            {/* NAVBAR GOES HERE */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>About</a></li>
                            <li><a>Learn</a></li>
                            <li>
                                <a>Terms of Service</a>
                                <ul className="p-2">
                                    <li><a>Licence</a></li>
                                    <li><a>ACT</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Clicker</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About</a></li>
                        <li><a>Learn</a></li>
                        <li>
                            <details>
                                <summary>Terms of Service</summary>
                                <ul className="p-2">
                                    <li><a>Licence</a></li>
                                    <li><a>ACT</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn" href='/signin'>Sign In</a>
                    <a className="btn" href='/signup'>Sign Up</a>
                </div>
            </div>

            {/* BODY GOES HERE */}

            <div className="min-h-screen w-full flex flex-col items-center ">

                {/* HERO SECTION */}
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Welcome to Clicker</h1>
                            <p className="py-6">
                                Quickly connect your links and grow your online presence effortlessly.
                            </p>
                            <a href="/signup" className="bg-white text-orange-600 py-2 px-6 rounded-full text-lg font-bold hover:bg-gray-100">Get Started</a>
                        </div>
                    </div>
                </div>

                {/* TESTIMONIAL */}
                <section className="testimonials bg-gray-100 py-20 px-5 sm:px-10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-600 mb-4">“Clicker has transformed the way I manage my online presence. It's incredibly easy to use!”</p>
                                <p className="font-semibold">Jane Doe</p>
                            </div>
                            <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-600 mb-4">“A fantastic tool for organizing links. Highly recommended for anyone looking to streamline their online profile.”</p>
                                <p className="font-semibold">John Smith</p>
                            </div>
                            <div className="testimonial bg-white p-6 rounded-lg shadow-lg">
                                <p className="text-gray-600 mb-4">“The analytics feature is a game-changer. I love seeing the performance of my links in real-time.”</p>
                                <p className="font-semibold">Emily Johnson</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING SECTION */}
                <section className="pricing py-20 px-5 sm:px-10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="pricing-card bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4">Freemium</h3>
                                <p className="text-lg font-semibold mb-2">$0/month</p>
                                <p className="text-gray-600 mb-4">Essential features for individuals and small businesses.</p>
                                <a href="/pricing/basic" className="bg-orange-600 text-white py-2 px-4 rounded-full text-md font-light hover:bg-orange-700">Choose Plan</a>
                            </div>
                            <div className="pricing-card bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                                <p className="text-lg font-semibold mb-2">$25/month</p>
                                <p className="text-gray-600 mb-4">Advanced features for growing businesses and power users.</p>
                                <a href="/pricing/pro" className="bg-orange-600 text-white py-2 px-4 rounded-full text-md font-light hover:bg-orange-700">Choose Plan</a>
                            </div>
                            <div className="pricing-card bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                                <p className="text-lg font-semibold mb-2">Contact Us</p>
                                <p className="text-gray-600 mb-4">Custom solutions for large organizations and enterprises.</p>
                                <a href="/pricing/enterprise" className="bg-orange-600 text-white py-2 px-4 rounded-full text-md font-light hover:bg-orange-700">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER GOES HERE */}
                <footer className="footer bg-orange-500 text-white  items-center p-4">
                    <aside className="grid-flow-col items-center">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="fill-current">
                            <path
                                d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                        </svg>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Clicker</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </nav>
                </footer>
            </div>
        </div >
    )
}

export default PublicLanding