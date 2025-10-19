"use client";


import { authClient } from "@/lib/auth-client"; 
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {
   const [email,Setemail]=useState("");
  const [name,Setname]=useState("");
  const [password,Setpassword]=useState("");

 const { data: session, 
    } = authClient.useSession() 

const onsubmit=()=>{
authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name,
},{
  onError:()=>{
    window.alert("something went wrong");
  },
  onSuccess:()=>{
    window.alert("Success");
  }
});
}
const onlogin=()=>{
authClient.signIn.email({
        email, // user email address
        password
},{
  onError:()=>{
    window.alert("something went wrong");
  },
  onSuccess:()=>{
    window.alert("Success");
  }
});
}

if(session){
  return (<div className="flex flex-col p-4  gap-y-4">
    <p>Logged in as {session.user.name}</p>
    <Button onClick={()=>authClient.signOut()} >Sign out</Button>
  </div>
  );
}


 
  return <div className="flex flex-col gap-y-10">
  <div className="p-4 flex flex-col gap-y-4">
    
    <input placeholder="name" value={name} onChange={(e)=>Setname(e.target.value)}/>
    <input placeholder="email" value={email} onChange={(e)=>Setemail(e.target.value)} />
    <input placeholder="password" type="password" value={password} onChange={(e)=>Setpassword(e.target.value)} />
    <Button onClick={onsubmit}>Create User</Button>
    </div>
    <div className="p-4 flex flex-col gap-y-4">
    <input placeholder="email" value={email} onChange={(e)=>Setemail(e.target.value)} />
    <input placeholder="password" type="password" value={password} onChange={(e)=>Setpassword(e.target.value)} />
    <Button onClick={onlogin}>Login</Button>
    </div>

  </div>
}