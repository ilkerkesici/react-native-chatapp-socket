/*
 * This page contains test for login butoon click function
 */


import {clickLoginButton} from '../src/screens/auth/login/Login.action';


it('Login click login button, username is empty then false ', () => {
    clickLoginButton('', 'test')
    .then(res => {
        expect(res).toEqual(false);
    })
    .catch(err => {
        expect(false).toEqual(true); // Unexpected error statement
    });
})

it('Login click login button, password is empty then false ', () => {
    clickLoginButton('testuser', '')
    .then(res => {
        expect(res).toEqual(false);
    })
    .catch(err => {
        expect(false).toEqual(true); // Unexpected error statement
    });
})

it('Login click login button, password and username is valid then true ', () => {
    clickLoginButton('testuser', 'testpassword')
    .then(res => {
        expect(res).toEqual(true);
    })
    .catch(err => {
        expect(false).toEqual(true); // Unexpected error statement
    });
})

