import { UserState } from './../types/login';
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const createNewUser = async({email, password}: UserState) => {
    try {
        console.log(email, password);
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        return user
    } catch (error) {
        console.log(error);
    }    
} 