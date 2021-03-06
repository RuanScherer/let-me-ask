import firebase from 'firebase';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

export type AuthContextType = {
	user: UserType | undefined;
	signInWithGoogle: () => Promise<void>;
	signInWithFacebook: () => Promise<void>;
	signOut: () => Promise<void>;
}

type UserType = {
	id: string;
	name: string;
	avatar: string;
}

type AuthContextProviderProps = {
	children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
	const [user, setUser] = useState<UserType>();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => fillUserData(user));

		return () => unsubscribe();
	}, []);

	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		await signIn(provider);
	}

	async function signInWithFacebook() {
		const provider = new firebase.auth.FacebookAuthProvider();
		await signIn(provider);
	}

	async function signIn(provider: firebase.auth.AuthProvider) {
		const { user } = await auth.signInWithPopup(provider);
		fillUserData(user);
	}

	async function signOut() {
		await auth.signOut();

		setUser(undefined);
	}

	function fillUserData(user: firebase.User | null) {
		if (!user) return;

		const { displayName, photoURL, uid } = user;

		if (!displayName || !photoURL) {
			throw new Error('Missing information from Google Account');
		}

		setUser({
			id: uid,
			name: displayName,
			avatar: photoURL
		});
	}

	return (
		<AuthContext.Provider value={{ user, signInWithGoogle, signInWithFacebook, signOut }}>
			{children}
		</AuthContext.Provider>
	);
}
