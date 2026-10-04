const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL;

const request = async (endpoint, options = {}) => {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong."
    );
  }

  return data;
};

/* ============================= */
/* Login */
/* ============================= */

export const loginUser = async ({
  role,
  identifier,
  password,
}) => {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      role,
      identifier,
      password,
    }),
  });
};

/* ============================= */
/* Patient Registration */
/* ============================= */

export const registerPatient = async (
  patientData
) => {
  return request("/auth/register/patient", {
    method: "POST",
    body: JSON.stringify(patientData),
  });
};

/* ============================= */
/* Doctor Registration */
/* ============================= */

export const registerDoctor = async (
  doctorData
) => {
  return request("/auth/register/doctor", {
    method: "POST",
    body: JSON.stringify(doctorData),
  });
};

/* ============================= */
/* Forgot Password */
/* ============================= */

export const forgotPassword = async (
  email
) => {
  return request("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
  });
};