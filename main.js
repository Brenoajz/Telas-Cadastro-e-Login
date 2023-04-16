function cadastro() {
        document.querySelector("#box").innerHTML = `
<div id="main">
    <h1 class="text">Cadastre-se</h1>
    <input type="text" placeholder="Nome" id="Nome">
    <br><br>
    <input type="password" placeholder="Senha" maxlength="10" id="Senha">
    <br><br>
    <button type="submit" onclick="cad()">Cadastre-se</button>
    <br><br>
    <p class="sec-text">Já tem uma conta? Faça o <a onclick="login()">login!</a></p>
</div>
    `;
}
function login() {
        document.querySelector("#box").innerHTML = `
    <div id="main">
        <h1 class="text">Login</h1>
        <input type="text" placeholder="Nome" id="Nome">
        <br><br>
        <input type="password" placeholder="Senha" maxlength="10" id="Senha">
        <br><br>
        <button type="submit" onclick="log()">Login</button>
        <br><br>
        <p class="sec-text">Faça o login. Ou crie uma <a onclick="cadastro()">conta!</a></p>
    </div>
    `;
}

let usuarios = [];

function cad() {

  const nome = document.getElementById("Nome").value;
  const senha = document.getElementById("Senha").value;

  if (nome.trim() === "") {
    alert("Por favor, insira um nome válido");
    return;
  }

  if (senha.trim() === "" || senha.length < 6) {
    alert("Por favor, insira uma senha válida (pelo menos 6 caracteres)");
    return;
  }

  usuarios.push({ nome: nome, senha: senha });

  document.getElementById("Nome").value = "";
  document.getElementById("Senha").value = "";

  alert("Usuário cadastrado com sucesso!");
}

function log() {
  const nome = document.getElementById("Nome").value;
  const senha = document.getElementById("Senha").value;

  const usuarioIndex = usuarios.findIndex(
    (usuario) => usuario.nome === nome && usuario.senha === senha
  );

  if (usuarioIndex !== -1) {
    alert("Bem vindo!");
  } else {
    alert("Dados incorretos, se não tem uma conta, crie.");
  }
}
