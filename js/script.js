/*
 document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector('#login-form');
    const registerForm = document.querySelector('#register-form');
    const forgotPasswordForm = document.querySelector('#forgot-password-form');
    const loginButton = document.querySelector('#login-button');
    const registerLink = document.querySelector('#register-link');
    const loginLink = document.querySelector('#login-link');
    const forgotPasswordLink = document.querySelector('#forgot-password-link');
    const backToLoginLink = document.querySelector('#back-to-login');

    // Mostrar formulário de registro ao clicar em Registrar

    registerLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Mostrar formulário de login ao clicar em Voltar ao Login
    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Mostrar formulário de recuperação de senha ao clicar em Esqueci a senha
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
    });


    // Mostrar formulário de login ao clicar em Voltar ao Login na recuperação de senha
    backToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        forgotPasswordForm.style.display = 'none';
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });


    // Lógica de autenticação (simulação)
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        const username = document.querySelector('#Login-username').value;
        const password = document.querySelector('#Login-password').value;
        // Aqui você pode adicionar lógica para verificar credenciais, por exemplo:
        
        if (username === 'user' && password === 'password') {
            alert('Login bem-sucedido!');
            // Redirecionar para outra página ou fazer outra ação    
        } else {
            alert('Credenciais inválidas!')
        }
    });

    //Lógica de registro (Simulação)
   document.querySelector('#register-form').addEventListener('submit', function(e) {
       e.preventDefault();
       const newUsername = document.querySelector('#register-username').value;
       const newPassword = document.querySelector('#register-password').value;

       // Simulação de criação de conta
       if (newUsername === '' || newPassword === '') {
           alert('Por favor, preencha todos os campos');
       } else {
           alert('Cadastro realizado com sucesso!');
           // Redirecionar para o login após cadastro
           registerForm, style.display = 'none';
           loginForm.style.display = 'block';
       }
    });
}); 
*/

// Espera até que o conteúdo do DOM esteja completamente carregado
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o elemento que contém o formulário dinâmico
    const container2 = document.querySelector('#container2');
    
    // Função para exibir o formulário de login
    function showLoginForm() {
        container2.innerHTML = `
            <div class="container-acess" id="login-form">
                <h2>Login</h2>
                <input id="login-username" type="text" class="acess-txt" placeholder="Digite seu usuário">
                <h2>Senha</h2>
                <input id="login-password" type="password" class="acess-txt" placeholder="Digite sua senha"><br>
                <button id="login-button">Entrar</button>
                <a href="#" id="register-link">Registrar</a>
                <a href="#" id="forgot-password-link">Esqueci a senha</a>
            </div>`;
        
        // Adiciona event listener para o botão de login
        document.querySelector('#login-button').addEventListener('click', login);
        
        // Adiciona event listeners para os links de registro e recuperação de senha
        document.querySelector('#register-link').addEventListener('click', function(e) {
            e.preventDefault();
            showRegisterForm();
        });
        document.querySelector('#forgot-password-link').addEventListener('click', function(e) {
            e.preventDefault();
            showForgotPasswordForm();
        });
    }

    // Função para exibir o formulário de registro
    function showRegisterForm() {
        container2.innerHTML = `
            <div class="container-acess" id="register-form">
                <h2>Cadastro</h2>
                <input id="register-username" type="text" class="acess-txt" placeholder="Escolha um usuário">
                <h2>Senha</h2>
                <input id="register-password" type="password" class="acess-txt" placeholder="Escolha uma senha"><br>
                <button id="register-button">Cadastrar</button>
                <a href="#" id="login-link">Voltar ao Login</a>
            </div>
        `;
        
        // Adiciona event listener para o botão de cadastro
        document.querySelector('#register-button').addEventListener('click', register);
        
        // Adiciona event listener para o link "Voltar ao Login"
        document.querySelector('#login-link').addEventListener('click', function(e) {
            e.preventDefault();
            showLoginForm();
        });
    }

    // Função para exibir o formulário de recuperação de senha
    function showForgotPasswordForm() {
        container2.innerHTML = `
            <div class="container-acess" id="forgot-password-form">
                <h2>Recuperação de Senha</h2>
                <input id="forgot-password-email" type="text" class="acess-txt" placeholder="Digite seu e-mail cadastrado">
                <br>
                <button id="forgot-password-button">Recuperar</button>
                <a href="#" id="back-to-login">Voltar ao Login</a>
            </div>
        `;
        
        // Adiciona event listener para o botão de recuperação de senha
        document.querySelector('#forgot-password-button').addEventListener('click', forgotPassword);
        
        // Adiciona event listener para o link "Voltar ao Login"
        document.querySelector('#back-to-login').addEventListener('click', function(e) {
            e.preventDefault();
            showLoginForm();
        });
    }

    // Função para realizar o login
    function login(e) {
        e.preventDefault();
        const username = document.querySelector('#login-username').value;
        const password = document.querySelector('#login-password').value;
        
        // Simulação de verificação de credenciais
        if (username === 'user' && password === 'password') {
            alert('Login bem-sucedido!');
        } else {
            alert('Credenciais inválidas!');
        }
    }

    // Função para realizar o cadastro de um novo usuário
    function register(e) {
        e.preventDefault();
        const newUsername = document.querySelector('#register-username').value;
        const newPassword = document.querySelector('#register-password').value;
        
        // Simulação de validação de campos
        if (newUsername === '' || newPassword === '') {
            alert('Por favor, preencha todos os campos!');
        } else {
            alert('Cadastro realizado com sucesso!');
            showLoginForm();
        }
    }

    // Função para solicitar a recuperação de senha
    function forgotPassword(e) {
        e.preventDefault();
        const email = document.querySelector('#forgot-password-email').value;
        
        // Simulação de validação de campo
        if (email === '') {
            alert('Por favor, preencha o campo de e-mail!');
        } else {
            alert('Instruções para recuperação de senha foram enviadas para o seu e-mail.');
            showLoginForm();
        }
    }

    // Inicia o formulário de login ao carregar a página
    showLoginForm();
});


 




