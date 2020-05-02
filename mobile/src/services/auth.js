export function signIn () {
  return new Promise((resolve) => {
    resolve({
      token: 'nda873ggaby9svf8av79v9789dj8924hdqav7e97rg2397vr',
      user: {
        name: 'Luiz Henrique Pegnolatto',
        email: 'lhpegnolatto@gmail.com',
      }
    });
  });
}

// Simulação de retorno da API de autenticação