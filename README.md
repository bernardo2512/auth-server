# Introdução

Para utilizar o projeto de forma padrão, é necessario que tenha o docker e docker compose em sua maquina.

Ou se preferir pode implementar o fluxo de verificação em sua aplicação redirecionando os tokens para essa api validar.

Para subir o projeto e testa-lo, é necessário dar 2 passos sendo eles:

## 1 - Subir a aplicação

Basta utilizar o seguinte comando:

```BASH
docker compose up
````
## 2 - Adicionar um usuario manualmente

Para adicionar usuario, basta entrar no adminer, http://localhost:8087/ , acessar o seu banco e fazer um registro manualmente.

# Requisições

- Login:
    POST

    URL: http://localhost:3000/auth/login
    
    BODY: 
    ```
    {
    "user":"frodo",
    "pass": 1234
    }
    ```
- Verify:
    GET

    URL: http://localhost:3000/auth/verify

    HEADERS: Authorization : {{TOKEN_GERADO}}

- Listar Usuarios Registrados:
    GET

    URL: http://localhost:3000/auth/users

    HEADERS: Authorization : {{TOKEN_GERADO}}
    