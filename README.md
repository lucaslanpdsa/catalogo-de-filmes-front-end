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
VITE_FAVORITES_API_URL=http://127.0.0.1:9000/api/
```

## Executando o projeto

1. Inicie os containers:
```bash
docker compose up -d --build
```
2. Acesse a aplicação em http://localhost:3000.

## Rotas da aplicação
 Listagem de filmes com opção de pesquisar, favoritar, remover dos favoritos e filtrar por genero -> `http://localhost:3000`
 Listagem de filmes favoritados com opçao de desfavoritar -> `http://localhost:3000/favorites`

## Principais arquivos

- `src/router/index.ts`: responsável por definir as rotas da aplicação
- `src/views/Search.vue`: responsável pela tela que exibe a listagem de filmes padrão
- `src/views/Favorite.vue`: responsável por exibir a listagem de filmes favoritos

## Como ficou

<details>
<summary>Home</summary>
<img src="./doc/home.png">
</details>
<details>
<summary>Listagem de favoritos</summary>
<img src="./doc/favoritos.png">
</details>
<details>
<summary>Pagina Not Found</summary>
<img src="./doc/page-not-found.png">
</details>
<details>
 <summary>Video mostrando o projeto, clique no link abaixo</summary>
 https://www.veed.io/view/pt-PT/e46c9ec5-d16b-4e90-900b-dfbe29eb6206?panel=share
</details>
