import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>© by Jei</p>
      </footer>
    </>
  );
}

export default MyApp;
