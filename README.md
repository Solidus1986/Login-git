# Github Login

On va partir du modèle pour créer une application nécessitant de se connecter avec un token github, on va gérer un middleware avec Redux et on va également utiliser react-router-dom pour gérer plusieurs routes

## Les pages

On veut 3 pages

Si on est deconnecté :
- une page affichant un formulaire de connexion

Si on est connecté :
- une page affichant un message de bienvenue avec le nom de l'utilisateur et son avatar
- une page de présentation (une image + un texte en lorem ipsum)

## Fonctionnalités

- Un formulaire pour saisir le token
- Des vues différentes selon le type d'utilisateur

## Conseils

- Commencez par créer vos composants statiques et vos styles, on peut utiliser un framework CSS comme semantic ui si on le souhaite, Emotion ou bien prévoir le minimum dans un premier temps, vous êtes libres pour cette partie
- Préparez vos props
- Créez vos routes pour afficher telle ou telle vue selon l'url
- Créer votre state géré par un store avec Redux et brancher vos composants au state avec des containers (déjà en lecture avec mapStateToProps)
- Ecoutez les interactions et émettez vos action (avec mapDispatchToProps)
- Gerez finalement la connexion à l'aide d'un middleWare

## Connexion avec un token

Github permet à chaque user de se créer un token personnel. C'est un code, unique et personnel, qui permet de se logger sans avoir à saisir email ou mot de passe.

Pour créer le votre: https://github.com/settings/tokens

Une fois que notre application aura en mémoire notre token (après l'avoir saisi dans un formulaire), il suffit de le renseigner pour chaque requête que nous feront, dans le header de la requête, et nous serons automatiquement considérés comme authentifiés.

**Exemple pour obtenir les infos de l'user connecté:**

```javascript
axios.get('https://api.github.com/user', {
  headers: {
    Authorization: `token ${store.getState().userToken}`,
  }
})
```
## Bonus: Page de recherche pour les utilisateurs connectés

On peut prévoir une page de recherche pour les utilisateurs connectés, on pourrait reprendre ce qui a été fait sur le challenge Github API mais cette fois ci avec Redux

## Bonus : facultatif

On peut imaginer ajouter plein de fonctionnalités, par exemple ajouter un bouton pour liker chaque repo
