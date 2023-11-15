import Loginmini from "../components/Loginmini";
import Signup from "../components/signup";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Steptwo from "@/components/Steptwo";

export default function Home() {
  return (
    <main className="h-screen">
      <Steptwo />
    </main>
  );
}
