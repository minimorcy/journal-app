import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() =>
{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // Obtener token de acceso
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const { displayName, email, photoURL, uid } = result.user
        
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}