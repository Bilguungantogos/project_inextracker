import "@/styles/globals.css";
import UserProvider from "@/context/UserProvider";
import { StepProvider } from "@/context/StepContext";
import TransactionProvider from "@/context/TransactionContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <StepProvider>
        <TransactionProvider>
          <Component {...pageProps} />
        </TransactionProvider>
      </StepProvider>
    </UserProvider>
  );
}
