export function GoogleAndAppleSignInBtn() {
    return (
        <>
            <div>
                <div className="mb-4">
                    <button
                        className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded shadow-sm"
                    >
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-6 h-6 mr-2" />
                        Log in with Google
                    </button>
                </div>
                <div className="mb-6">
                    <button
                        className="w-full flex items-center justify-center bg-black text-white py-2 px-4 rounded shadow-sm"
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M16.68 1.959a2.36 2.36 0 0 0-2.182-1.432c-.879 0-1.928.596-2.52 1.272-.472.543-.956 1.34-.956 2.181 0 .85.369 1.748.837 2.364.47.627 1.15 1.046 1.82 1.046.63 0 1.273-.268 1.81-.756.527-.478.898-1.155.898-1.85 0-.471-.155-1.03-.554-1.315.472-.096.917-.15 1.34-.15 2.086 0 3.946 1.182 4.33 3.519-.17.117-.373.249-.589.392-1.568.99-2.424 2.777-2.424 4.864 0 1.692 1.246 3.562 2.806 3.562 1.003 0 1.853-.464 2.593-1.32.781-.901 1.189-2.092 1.253-3.337 0-.306-.042-.607-.073-.896-.42-.045-.918-.04-1.414-.04-.75 0-1.473.111-2.15.294-.815.214-1.646.505-2.388.968-1.167.73-2.121 1.687-2.906 2.825-1.508 2.123-1.787 5.52-1.054 8.292h8.627a2.37 2.37 0 0 0 2.359-2.372V4.334a2.365 2.365 0 0 0-2.367-2.375h-6.27a1.35 1.35 0 0 0-.945-.361z" />
                        </svg>
                        Log in with Apple
                    </button>
                </div>
            </div>

        </>
    );
}