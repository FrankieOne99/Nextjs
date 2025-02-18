"use client";
import React from "react";
import { useEffect, useState } from "react";
import AuthForm from "@/components/auth-form";

export default function Home({ searchParams }) {
  const [formMode, setFormMode] = useState("login");
  const params = React.use(searchParams);

  useEffect(() => {
    if (params.mode) {
      setFormMode(params.mode);
    }
  }, [params]);

  return <AuthForm mode={formMode} />;
}
