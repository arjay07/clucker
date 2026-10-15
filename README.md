# Clucker

Monorepo for Clucker, combining the former
[clucker-web](https://github.com/arjay07/clucker-web) and
[clucker-server](https://github.com/arjay07/clucker-server) repos (full git history of both is preserved).

| Path      | What it is                                   |
|-----------|----------------------------------------------|
| `web/`    | Angular 14 front end                         |
| `server/` | Spring Boot 2.6 API (Java, Gradle), MySQL DB |

## Running locally

Requires Docker Desktop. From the repo root:

```sh
npm start          # or: docker compose up --build
```

This starts:

- **Web app**: http://localhost:4200 (live-reloads when files in `web/src` change)
- **API**: http://localhost:8080 (try `/health` or `/version`)
- **MySQL 8**: `localhost:3307`, database `clucker`, user/password `clucker`/`clucker`

Other commands:

```sh
npm run start:detached   # run in the background
npm run logs             # follow logs
npm stop                 # stop containers (data is kept)
npm run reset            # stop and wipe the database
```

Server changes require a rebuild: `docker compose up --build server`.

## Notes

- The server runs on JDK 17 inside Docker because Spring Boot 2.6 / Gradle 7.3 don't support newer JDKs.
- The web app originally used Font Awesome **Pro** icons, which need a paid npm token. It now uses the free
  solid set; the few Pro-only icons (`spinner-third`, `paper-plane-top`, `egg-fried`, duotone `users`) are
  aliased to free look-alikes in `web/src/app/app-icons.module.ts`.
- `web/.github/workflows/main.yml` is the old S3 deploy workflow. GitHub only runs workflows in the repo-root
  `.github/` folder, so it is inactive until it's moved there and pointed at `web/`.
