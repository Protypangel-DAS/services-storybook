# UI
*UI* est composé des composants utilisés dans les autres projets vite/vuejs

Le fichier [src/vite-env.d.ts](src/vite-env.d.ts) permet de ne pas avoir a écrire à chaque fois `/index.vue` dans les imports des `@ui`.

# Scripts
|CMD|DESCRIPTION|
|-|-|
|`npm run storybook`| Lancer l'application de dev|
||

# GITLAB
```sh
# Config exchange repo externe
git config --local user.name "Administrator"
git config --local user.email "gitlab_admin_0ac485@example.com"
git remote add origin https://gitlab.local/storybook/storybook.git

#Push
git push --set-upstream origin --all
```
