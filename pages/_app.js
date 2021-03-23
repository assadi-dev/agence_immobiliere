import '../styles/globals.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { AuthProvider } from "../auth/context";





function MyApp({ Component, pageProps }) {
  return (
    <>
   
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
