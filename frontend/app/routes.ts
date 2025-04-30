import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("location", "routes/location.tsx"),
    route("registration", "routes/registration.tsx"),
    route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
