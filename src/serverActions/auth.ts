"use server";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  redirect("/");
}
