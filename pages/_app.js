import { useEffect, useState } from "react";
import "../styles/reset.css";
import LoadingScreen from "./Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 8000);
  }, []);

  return <>{!loading ? <Component {...pageProps} /> : <LoadingScreen />}</>;
}

export default MyApp;
