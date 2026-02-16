import { cookies } from "next/headers"

const ADMIN_EMAIL = "admin@hstechware.com"
const ADMIN_PASSWORD = "admin123"
const AUTH_COOKIE = "hs-admin-auth"
const AUTH_TOKEN = "hs-techware-admin-session-token"

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD
}

export async function setAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE, AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  })
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(AUTH_COOKIE)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(AUTH_COOKIE)
  return token?.value === AUTH_TOKEN
}
