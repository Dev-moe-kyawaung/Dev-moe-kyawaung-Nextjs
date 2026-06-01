"use server";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  // Validate input
  if (!data.name || !data.email || !data.subject || !data.message) {
    throw new Error("All fields are required");
  }

  // Email validation
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email address");
  }

  // Simulate API call (replace with actual email service)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // TODO: Integrate with email service (Resend, SendGrid, etc.)
  console.log("Contact form submitted:", data);

  return { success: true, message: "Form submitted successfully" };
}
