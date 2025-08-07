# Catalogo de filmes Frontend

## Pré-requisitos

- Docker e Docker Compose instalados

## Configuração

1. Clone o repositório:
```bash
git clone https://github.com/lucaslanpdsa/catalogo-de-filmes-front-end
cd catalogo-de-filmes-front-end
```
2. Crie um arquivo `.env` baseado no `.env.example`
```bash
cp .env.example .env
```
3. Configure a URL da API no `.env`:
```env
VITE_TMDB_API_KEY=c2bd86974a6def852978250c9a01fa77
FAVORITES_API_URL=http://127.0.0.1:8000/api/
```

## Executando o projeto

1. Inicie os containers:
```bash
docker-compose up -d --build
```
2. Acesse a aplicação em http://localhost:3000.

## Rotas da aplicação



## Testando performance



## Como ficou

<details>
<summary> </summary>
<img src="./doc/login.png">
</details>
<details>
<summary> </summary>
<img src="./doc/ .png">
</details>
<details>
<summary> </summary>
<img src="./doc/ .png">
</details>
<details>
<summary> </summary>
<img src="./doc/ .png">
</details>
