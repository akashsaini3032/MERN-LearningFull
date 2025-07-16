// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import { FcGoogle } from 'react-icons/fc';
// import axios from 'axios';

// const GoogleLoginButton = ({ onSuccess }) => {
//     const handleSuccess = async (response) => {
//         try {
//             const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google-login`, {
//                 token: response.credential,
//             });

//             // Call parent handler to handle token (optional)
//             if (onSuccess) {
//                 onSuccess(res.data);
//             }

//             // Local Storage ya Redux me token store karo (as per your flow)
//             localStorage.setItem('foodAppToken', res.data.token);
//             window.location.href = '/'; // Home pe redirect
//         } catch (err) {
//             console.error(err);
//             alert('Google login failed');
//         }
//     };

//     const handleError = () => {
//         alert('Google Login Error');
//     };

//     return (
//         <div>
//             <GoogleLogin
//                 onSuccess={handleSuccess}
//                 onError={handleError}
//                 useOneTap
//                 render={renderProps => (
//                     <button
//                         onClick={renderProps.onClick}
//                         style={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             backgroundColor: '#fff',
//                             border: '1px solid #ddd',
//                             padding: '10px 20px',
//                             borderRadius: '8px',
//                             cursor: 'pointer',
//                             fontSize: '16px'
//                         }}
//                     >
//                         <FcGoogle size={24} style={{ marginRight: '10px' }} />
//                         Login with Google
//                     </button>
//                 )}
//             />
//         </div>
//     );
// };

// export default GoogleLoginButton;




// import React from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import { FcGoogle } from 'react-icons/fc';
// import axios from 'axios';

// const GoogleLoginButton = ({ onSuccess }) => {

//     const login = useGoogleLogin({
//         onSuccess: async (response) => {
//             try {
//                 const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google-login`, {
//                     token: response.access_token,
//                 });

//                 // Optional callback
//                 if (onSuccess) {
//                     onSuccess(res.data);
//                 }

//                 // JWT token store karo
//                 localStorage.setItem('foodAppToken', res.data.token);

//                 // Redirect to home
//                 window.location.href = '/';
//             } catch (err) {
//                 console.error(err);
//                 alert('Google login failed');
//             }
//         },
//         onError: () => {
//             alert('Google Login Error');
//         },
//         flow: 'implicit', // Use this if you're working with client-side only
//     });

//     return (
//         <button
//             onClick={login}
//             style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 backgroundColor: '#fff',
//                 border: '1px solid #ddd',
//                 padding: '10px 20px',
//                 borderRadius: '8px',
//                 cursor: 'pointer',
//                 fontSize: '16px'
//             }}
//         >
//             <FcGoogle size={24} style={{ marginRight: '10px' }} />
//             Login with Google
//         </button>
//     );
// };

// export default GoogleLoginButton;


import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = ({ onSuccess }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
            <GoogleLogin
                onSuccess={async (credentialResponse) => {
                    try {
                        const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/google-login`, {
                            token: credentialResponse.credential, // ✅ id_token hota hai
                        });

                        // Optional callback
                        if (onSuccess) {
                            onSuccess(res.data);
                        }

                        localStorage.setItem('foodAppToken', res.data.token);

                        // Redirect
                        window.location.href = '/';
                    } catch (err) {
                        console.error(err);
                        alert('Google login failed');
                    }
                }}
                onError={() => {
                    alert('Google Login Failed');
                }}
            />
        </div>
    );
};

export default GoogleLoginButton;

