import "@/styles/globals.css";
import UserProvider from "@/context/UserProvider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
