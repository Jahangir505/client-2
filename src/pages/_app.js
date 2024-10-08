import "@/styles/globals.css";
import "@/assets/css/style.css";
import "@/assets/css/custom.css";
import "@/assets/css/account.css";
import AppServiceProvider from "@/services/AppServiceProvider";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setLoading(true);
      }
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  return (
    <>
      {loading && (
        <div className="preloader">
        <div className="preloader-item">
          <div className="spinner-grow text-primary"></div>
        </div>
      </div> 
      )}
      <AppServiceProvider>
        <Component {...pageProps} />
      </AppServiceProvider>
    </>
  );
}
