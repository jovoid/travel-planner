import { useState } from "react";

export default function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handleLogin = () => {
    if(email === "" || password === ""){
      setMessage("Please fill all fields ❗");
      return;
    }

    if(email === "admin@gmail.com" && password === "1234"){
      setMessage("Login Successful 🎉");
    } else {
      setMessage("Invalid Credentials ❌");
    }
  };

  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"60px"}}>
      <div style={{
        width:"400px",
        padding:"25px",
        borderRadius:"10px",
        boxShadow:"0px 0px 10px gray"
      }}>
        <h2>Login</h2>

        <input 
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          style={{width:"100%", padding:"10px", marginTop:"10px"}}
        />

        <input 
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:"100%", padding:"10px", marginTop:"10px"}}
        />

        <button 
          onClick={handleLogin}
          style={{
            width:"100%",
            padding:"10px",
            background:"#0077ff",
            color:"white",
            border:"none",
            marginTop:"10px",
            borderRadius:"6px"
          }}>
          Login
        </button>

        {message && <p style={{marginTop:"10px"}}>{message}</p>}
      </div>
    </div>
  );
}
