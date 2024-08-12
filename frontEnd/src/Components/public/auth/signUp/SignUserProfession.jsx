import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUserProfession = () => {
    const [mainCategory, setMainCategory] = useState('');
    const [mainSuggestions, setMainSuggestions] = useState([]);
    const [subCategory, setSubCategory] = useState('');
    const [subSuggestions, setSubSuggestions] = useState([]);
    const [showSubSuggestions, setShowSubSuggestions] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const categories = {
        'Technology': ['Software Development', 'IT Support', 'Other'],
        'Healthcare': ['Medical Professionals', 'Allied Health', 'Other'],
        'Education': ['Teaching', 'Administration', 'Other'],
        'Media Production': ['Film Production', 'Television Production', 'Other'],
        'Journalism': ['Print Journalism', 'Broadcast Journalism', 'Other'],
        'Design': ['Graphic Design', 'Web Design', 'Other'],
        'Student': ['High School Student', 'College Student', 'Graduate Student', 'Other'],
        'OnlyFans': ['Content Creator', 'Marketing Specialist', 'Community Manager', 'Other'],
        'Software Development': ['Software Engineer', 'Web Developer', 'Mobile App Developer', 'Backend Developer', 'Other'],
        'IT Support': ['IT Support Specialist', 'Systems Administrator', 'Network Administrator', 'Technical Support Analyst', 'Other'],
        'Medical Professionals': ['Doctor', 'Nurse', 'Surgeon', 'Pharmacist', 'Other'],
        'Allied Health': ['Physical Therapist', 'Occupational Therapist', 'Radiologic Technologist', 'Medical Laboratory Technician', 'Other'],
        'Teaching': ['Elementary School Teacher', 'High School Teacher', 'College Professor', 'Special Education Teacher', 'Other'],
        'Administration': ['School Principal', 'Educational Counselor', 'School Administrator', 'Curriculum Developer', 'Other'],
        'Film Production': ['Film Director', 'Producer', 'Cinematographer', 'Film Editor', 'Other'],
        'Television Production': ['TV Producer', 'Camera Operator', 'Scriptwriter', 'Broadcast Engineer', 'Other'],
        'Print Journalism': ['Newspaper Reporter', 'Magazine Journalist', 'Editor', 'Photojournalist', 'Other'],
        'Broadcast Journalism': ['News Anchor', 'TV Reporter', 'Radio Host', 'Field Producer', 'Other'],
        'Graphic Design': ['Graphic Designer', 'Art Director', 'Illustrator', 'Brand Designer', 'Other'],
        'Web Design': ['Web Designer', 'UI/UX Designer', 'Front-End Developer', 'Web Developer', 'Other'],
        'High School Student': ['High School Freshman', 'High School Sophomore', 'High School Junior', 'High School Senior', 'Other'],
        'College Student': ['Undergraduate Student', 'Graduate Student', 'International Student', 'Transfer Student', 'Other'],
        'Graduate Student': ['Master’s Student', 'Ph.D. Student', 'Postdoctoral Researcher', 'Graduate Research Assistant', 'Other'],
        'Content Creator': ['Video Content Creator', 'Photo Content Creator', 'Live Streamer', 'Podcaster', 'Other'],
        'Marketing Specialist': ['Digital Marketer', 'SEO Specialist', 'Social Media Manager', 'Content Strategist', 'Other'],
        'Community Manager': ['Community Engagement Specialist', 'Moderator', 'Customer Support Representative', 'Event Coordinator', 'Other']
    };

    const handleMainCategoryChange = (e) => {
        const value = e.target.value;
        setMainCategory(value);
        setMainSuggestions(value ? Object.keys(categories).filter(category => category.toLowerCase().includes(value.toLowerCase())) : []);
        setSubSuggestions([]); // Clear sub-category suggestions when main category changes
        setSubCategory(''); // Clear selected sub-category when main category changes
        setShowSubSuggestions(false); // Hide sub-category suggestions
    };

    const handleSubCategoryChange = (e) => {
        const value = e.target.value;
        setSubCategory(value);
        setSubSuggestions(value ? (categories[mainCategory] || []).filter(sub => sub.toLowerCase().includes(value.toLowerCase())) : []);
    };

    const handleMainCategoryClick = (category) => {
        setMainCategory(category);
        setMainSuggestions([]);
        setSubSuggestions(categories[category] || []);
        setSubCategory('');
    };

    const handleSubCategoryClick = (subCategory) => {
        setSubCategory(subCategory);
        setSubSuggestions([]);
        setShowSubSuggestions(false); // Hide sub-category suggestions after selection
    };

    const handleSubCategoryFocus = () => {
        setShowSubSuggestions(true); // Show sub-category suggestions on focus
    };

    const handleLetsGoClick = async () => {
        // Call your modify function here
        console.log('Main Category:', mainCategory);
        console.log('Sub Category:', subCategory);
        // You can replace these console logs with actual function calls

        const userName = sessionStorage.getItem('userName');
        const config = {
            params: { userName }
        };
        const data = {
            "step_completed": 3,
            "profession_main_catagory": mainCategory,
            "profession_sub_catagory": subCategory
        }
        await axios.patch('http://localhost:8000/api/user/update', data, config)

            //NULL IS ADDED CAUSE WE DONT WANT TO SEND ANYTHING IN THE BODY ONLY SENDIGN USERNAME AS QUERY PARAMS
            .then(response => {
                if (response.status === 200) {
                    navigate('/admin/links');
                }
                else {
                    alert("Can not update now, try again later")
                }
                console.log(response)
            })

        // Navigate to another page
        // navigate('/admin/links');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
            <form className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="main-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Main Category
                    </label>
                    <input
                        type="text"
                        id="main-category"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                        placeholder="Type main category"
                        value={mainCategory}
                        onChange={handleMainCategoryChange}
                        aria-required="true"
                        aria-invalid="false"
                    />
                    {mainSuggestions.length > 0 && (
                        <ul className="bg-white border border-gray-300 mt-2 rounded-lg shadow-md">
                            {mainSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="p-3 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleMainCategoryClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="sub-category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Sub Category
                    </label>
                    <input
                        type="text"
                        id="sub-category"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light"
                        placeholder="Type sub category"
                        value={subCategory}
                        onChange={handleSubCategoryChange}
                        onFocus={handleSubCategoryFocus}
                        aria-required="true"
                        aria-invalid="false"
                    />
                    {showSubSuggestions && subSuggestions.length > 0 && (
                        <ul className="bg-white border border-gray-300 mt-2 rounded-lg shadow-md">
                            {subSuggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    className="p-3 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSubCategoryClick(suggestion)}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                    <button
                        type="button"
                        onClick={handleLetsGoClick}
                        className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-6 py-3 text-center mb-4 sm:mb-0"
                    >
                        Lets Go
                    </button>
                    <a
                        href="/admin/links"
                        className="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center"
                    >
                        Skip
                    </a>
                </div>
            </form>
        </div>
    );
};

export default SignUserProfession;
