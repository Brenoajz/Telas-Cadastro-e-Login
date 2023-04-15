function cadastro() {
        document.querySelector("#box").innerHTML = `
<div id="main">
    <h1 class="text">Cadrastre-se</h1>
    <input type="text" placeholder="Nome e Sobrenome">
    <br><br>
    <input type="text" placeholder="E-mail">
    <br><br>
    <input type="password" placeholder="Senha" maxlength="10">
    <br><br>
    <button type="submit">Cadrastre-se</button>
    <br><br>
    <p class="sec-text">Já tem uma conta? Faça o <a onclick="login()">login!</a></p>
</div>
    `;
}
function login() {
        document.querySelector("#box").innerHTML = `
    <div id="main">
        <h1 class="text">Login</h1>
        <input type="text" placeholder="E-mail">
        <br><br>
        <input type="password" placeholder="Senha" maxlength="10">
        <br><br>
        <button type="submit">Login</button>
        <br><br>
        <p class="sec-text">Faça o login. Ou crie uma <a onclick="cadastro()">conta!</a></p>
    </div>
    `;
}

  

