import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigation = useNavigate();
    return (
        <button onClick= {() => {
            localStorage.setItem("token", "dummy-token");
            navigation("/");
        }}>login</button>
    )
}