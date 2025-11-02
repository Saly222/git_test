import React, { useEffect, useState } from "react";
import supabase from "../utilities/supabaseClient";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(supabase.auth.getUser().data?.user ?? null);

    // Subscribe to auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
    </div>
  );
}
