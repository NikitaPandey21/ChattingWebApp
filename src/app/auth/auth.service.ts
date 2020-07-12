import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface AuthResponseData{
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered ?: string
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient){}

    signUp(email: string,password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyApoMJV9uM-_Wr2l4BaviQ_QYXFujiOHaU',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        );
    }

    login(email: string,password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyApoMJV9uM-_Wr2l4BaviQ_QYXFujiOHaU',
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
        );
    }

    // addUser(user:string){
    //     this.newUser.next();
    // }
    // writeUserData(userId, name, email, imageUrl) {
    //     firebase.database().ref('users/' + userId).set({
    //       username: name,
    //       email: email,
    //       profile_picture : imageUrl
    //     });
    //   }
}