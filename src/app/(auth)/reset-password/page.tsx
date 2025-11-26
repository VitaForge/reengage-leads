import { redirect } from "next/navigation";

import { ResetPasswordForm } from "@/components/auth/reset-password-form";

interface ResetPasswordPageProps {
  searchParams: Promise<{ token?: string; error?: string }>;
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const params = await searchParams;
  const token = params.token || null;
  const error = params.error;

  // If there's an error, redirect to request password reset
  if (error === "INVALID_TOKEN") {
    redirect("/request-password-reset");
  }

  // If no token, redirect to request password reset
  if (!token) {
    redirect("/request-password-reset");
  }

  return <ResetPasswordForm token={token} />;
}
