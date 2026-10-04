import {
  CreditCard,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

export const loginConfig = {
  patient: {
    title: "Welcome back",
    subtitle:
      "Sign in to access your patient account.",
    fieldLabel: "Email or Username",
    placeholder:
      "Enter your email or username",
    registerText:
      "New patient? Create an account",
    icon: UserRound,
    roleLabel: "Patient Portal",
  },

  doctor: {
    title: "Welcome back",
    subtitle:
      "Sign in to access your medical workspace.",
    fieldLabel: "Doctor ID / Email",
    placeholder:
      "Enter your Doctor ID or email",
    registerText:
      "New doctor? Register here",
    icon: Stethoscope,
    roleLabel: "Doctor Portal",
  },

  admin: {
    title: "Welcome back",
    subtitle:
      "Sign in to manage hospital operations.",
    fieldLabel: "Admin ID / Username",
    placeholder:
      "Enter your Admin ID or username",
    registerText: null,
    icon: ShieldCheck,
    roleLabel: "Administration Portal",
  },

  billing: {
    title: "Welcome back",
    subtitle:
      "Sign in to manage billing operations.",
    fieldLabel: "Billing Staff ID / Email",
    placeholder:
      "Enter your Staff ID or email",
    registerText: null,
    icon: CreditCard,
    roleLabel: "Billing Portal",
  },
};