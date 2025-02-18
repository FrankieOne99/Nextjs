"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

//FUNCTION FOR THE SIGNUP
export async function Signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.mail = "Please enter a valid email";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be 8 characters long at least";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }
  const hashedPassword = hashUserPassword(password);
  //Posso utilizzare un try/catch per gestire il caso in cui venga inserita un email valida ma già esistente

  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "It seems like an account for the chosen email already exist",
        },
      };
    }
    throw error;
  }
}

//FUNCTION FOR THE LOGIN

export async function Login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = getUserByEmail(email);

  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate user, please check your credentials!",
      },
    };
  }

  const isValidPassword = verifyPassword(existingUser.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "Could not authenticate user, please check your credentials!",
      },
    };
  }

  await createAuthSession(existingUser.id);
  redirect("/training");
}

//FUNCTION FOR THE AUTENTICATION
export async function Auth(mode, prevState, formData) {
  if (mode === "login") {
    return Login(prevState, formData);
  }
  return Signup(prevState, formData);
}

export async function Logout() {
  await destroySession();
  redirect("/");
}
