export const CLIENT_BASE_ROUTE =
  typeof window !== "undefined" ? window.location.origin : "";

export const ENVIRONMENT = process.env.NODE_ENV;
export const isDevelopment = ENVIRONMENT === "development";
export const isProduction = ENVIRONMENT === "production";
export const VM_ENVIRONMENT = isDevelopment
  ? "development"
  : process.env.NEXT_PUBLIC_VM_ENV || "unknown-environment";

export const isServerSide = typeof window === "undefined";

export const basePath = process.env.basePath ?? "";

const TEST_URL = "https://test.lila.com.ar";

export const BASE_URL = isProduction
  ? process.env.BASE_PATH ?? "https://lila.com.ar" // DON'T CHANGE THIS LINE.
  : TEST_URL; // You can change this line during development.

export const API_BASE_URL = BASE_URL + "/api/bamba-middlend";

export const HTTP_STATUS = {
  ok: 200,
  created: 201,
  found: 302,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  conflict: 409,
  internalServerError: 500,
};
