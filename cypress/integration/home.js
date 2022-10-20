import signupPages from '../pages/signupPages'
var signup = new signupPages

describe('Cenario de teste', function () {
    
    it('Validar mapa', function () {
        signup.entrar()
        signup.clicarPraVoce()
        signup.clicarOndeUsarMeuCartaoVr()
        signup.validarMapaDoGoogle()
    })
})

