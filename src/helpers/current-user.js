export function currentUser() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        return user;
    } else {
        return {};
    }
}
