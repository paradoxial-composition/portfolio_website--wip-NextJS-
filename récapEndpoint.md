Postman effectue une requête sur une URL avec une méthode (POST, GET, PUT, etc.). Cette URL pointe vers un serveur où le projet est hébergé et exécuté. Dans le projet en cours d'exécution, par exemple `celine-svc-users`, nous aurons un contrôleur pour chaque combinaison d'URL, de méthode et de version.

Un contrôleur n'est rien d'autre qu'une classe JavaScript contenant des fonctions et des propriétés. Par exemple, pour une requête `GET /v1/users/info`, `celine-svc-users` disposera d'un contrôleur écoutant les appels à `users/info` avec la méthode GET et la version 1. Ce contrôleur exécutera une logique spécifique, comme vérifier les paramètres dans le chemin de l'URL, puis appellera un service en transmettant les paramètres du chemin si nécessaire.

Un service est également une classe JavaScript qui organise et orchestre différents appels de composants pour répondre aux besoins de l'endpoint. Par exemple, pour `/v1/users/info`, il sera nécessaire de récupérer des données depuis la base de données, de les mapper ou d'exécuter certaines logiques dessus, ce qui se fait dans le service.

Comme mentionné, le service appellera un **Repository** pour extraire les données et un **Mapper** pour formater ces données avant de les renvoyer au front-end. 

- Un **Repository** est un module JavaScript où nous gérons les appels à la base de données. Dans notre cas, il s'agit d'appels Salesforce. Ce module sera appelé par le service avec des paramètres appropriés, comme l'ID utilisateur, et sa seule tâche sera de récupérer les données depuis la source et de les renvoyer au service.
  
- Un **Mapper** est un module JavaScript où nous traitons le mapping et le formatage des données. Ce module sera appelé par le service avec la réponse du repository comme paramètre. Il prendra cette réponse, la formatera pour qu'elle soit présentable et consommable par le front, puis la retournera au service.

Le service, après avoir appelé le repository, le mapper et toute autre logique supplémentaire nécessaire, retournera un objet JSON au contrôleur, qui renverra ensuite cette réponse au front sous forme de réponse finale de l'endpoint que nous voyons dans Postman.

### Paramétrages supplémentaires LVMH :

Pour LVMH, il existe des composants supplémentaires à prendre en compte, comme les **contrats API**. Ceux-ci consistent en un ensemble de validations appliquées aux paramètres du chemin d'accès et à la réponse de l'endpoint.

#### `app.config` :
Parfois, il n'est pas nécessaire de mettre en œuvre tout le cycle. Par exemple, nous pouvons simplement remplacer un repository. Dans ce cas, nous créons ce repository et l'ajoutons à la configuration dans `app.config`. La logique ISC gérera alors le remplacement de leur repository par le nôtre.

Même si nous implémentons tout le cycle, il faudra mentionner notre contrôleur, notre service, notre repository et notre mapper dans `app.config` pour remplacer la logique d'ISC.