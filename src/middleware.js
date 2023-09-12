export { default } from "next-auth/middleware";

export const config = { matcher: ['/account', '/account/pay', '/account/sponsor-deals'] };