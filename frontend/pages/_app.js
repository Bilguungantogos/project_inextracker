import "@/styles/globals.css";
import UserProvider from "@/context/UserProvider";
import { StepProvider } from "@/context/StepContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StepProvider>
        <Component {...pageProps} />
      </StepProvider>
    </UserProvider>
  );
}
