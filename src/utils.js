  
export async function login({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'matias' && password === '123') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }

export const getAuthStorage = () =>{
    return JSON.parse(localStorage.getItem('auth'));
}
export const setAuthStorage = (state) => {
	localStorage.setItem('auth', JSON.stringify(state));
};