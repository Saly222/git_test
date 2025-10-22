import React from "react";
import { supabase } from "./supabaseClient";

export default function Logout() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return <button onClick={handleLogout}>Log Out</button>;
}
