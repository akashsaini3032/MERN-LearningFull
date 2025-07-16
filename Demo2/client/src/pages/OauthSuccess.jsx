import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OauthSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // URL se token uthao
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            // JWT token ko decode karne ki zarurat nahi hai agar backend ne user data bhi bhej diya ho
            // But yahan hum token hi save kar rahe hain, assume karte hain backend sirf token de raha hai

            // Token ko localStorage me daalein
            localStorage.setItem("foodAppToken", token);

            // Optional: Agar backend ne token ke saath user data nahi diya toh profile fetch karna padega.
            // But agar backend ne redirect ke time pe user data token me hi bheja ho (custom payload), toh aap decode kar sakte hain.
            // Ya toh simple rakhein aur profile pic / username frontend me fetch kar len:
            
            // Redirect ke baad user profile fetch karne ke liye ek API call kar lo
            fetch("http://localhost:8080/user/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("username", data.name);
                localStorage.setItem("profilePic", data.profilePic || "");
                navigate("/home");
            })
            .catch(err => {
                console.error("User fetch failed", err);
                navigate("/home");
            });

        } else {
            // Agar token nahi mila toh login pe bhej do
            navigate("/login");
        }
    }, []);

    return (
        <div style={{textAlign: "center", marginTop: "100px"}}>
            <h2>Logging you in...</h2>
        </div>
    );
}

export default OauthSuccess;
