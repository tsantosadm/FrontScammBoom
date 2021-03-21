export function signInResquest(email, senha){
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, senha},
  };
}

export function signInSucess(token, usuario) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {token, usuario},
  };
}

export function signUpRequest(nome, email, senha, numero_de_celular, data_de_nascimento){
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {nome, email, senha, numero_de_celular, data_de_nascimento},
  }
};

export function signFailure(){
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut(){
  return {
    type: '@auth/SIGN_OUT',
  };
}