+++
title = "Charges et champ électrique"
+++

## Les fondamentaux

La quantité fondamentale en électrostatique est la notion de **charge électrique**.
Il y a deux types de charges électriques, les charges *positives* et les charges *négatives*

Elles sont liées de manière telle qu'une charge repousse son égal et attire son opposé.
(Les charges positives **repoussent** les charges positives et **attirent** les charges négatives, et vice versa pour les charges négatives)

Le **coulomb** est l'unité de la charge, une particule chargée de +2coulombs est + chargée qu'une particule chargée avec 0.5coulombs


## La loi de Coulomb
La loi de Coulomb décrit de manière précise les interactions entre deux particules chargées (lorsque je dirai charge, je sous entend particule chargée).

Prenons deux charges $q_1$ et $q_2$ séparées par une distance $r$. 
La norme de la force que les particules s'entre-appliquent est proportionnelle au produit $q_1q_2$ et inversement proportionnelle a $r^2$

Cette force est appliquée le long de la ligne joignant les deux charges, et elle est **répulsive** ou **attractive** en fonction du signe des charges.

![](http://laplace.us.es/wiki/images/9/97/Ley-coulomb-01.png) ![](http://laplace.us.es/wiki/images/3/33/Ley-coulomb-03.png)

La norme de cette force est définie comme : 
$$F = \frac{1}{4\pi \epsilon_0}\frac{|q_1q_2|}{r^2} $$ 

## Le champ électrique
Le champ électrique $\vec{E}$ est une quantité vectorielle, et correspond a la force qu'exerce une charge sur une charge fictive en tout point du plan ($q_0$).
Prenons une charge $q$ dont on souhaite connaitre le champ électrique. 
Le champ électrique est défini comme:
$$\vec{E} = \frac{\vec{F}_0}{q_0}$$
Avec $\vec{F}_0$ la force entre $q$ et $q_0$.
On peut donc finaliser en disant que 
$$\vec{E} = \frac{1}{4\pi \epsilon_0}\frac{q}{r^2} $$
Pour tout point du plan a distance $r$ de la charge $q$
La direction de $\vec{E}$ dépend de $q$, si la charge est positive alors la direction de $\vec{E}$ ira dans le le sens opposé, sinon $\vec{E}$ sera pointé en direction de q

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/f/f0/E_FieldOnePointCharge.svg)
## La superposition des champs

Le champ électrique $\vec{E}$ d'une combinaison de charge correspond a la **somme** des champs électriques individuels de chacune des charges. 

Pour estimer le champ électrique causé par une distribution de charge continue, on divise cette distributions en petits éléments, on calcule le champ causé par chaque élément afin de trouver le champ causé par la somme de tous ces éléments.
Ce procédé est généralement effectué par le biais d'une **intégrale**.

## Les lignes de champ

Les lignes de champs électrique, telles que représentées ici:

![Lignes de champ électrique](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Electric_dipole_field_lines.svg/300px-Electric_dipole_field_lines.svg.png)

Ne sont en fait que **fictives**. On les dessine pour se représenter un champ électrique, mais il n'y a strictement **rien**, pas une seule particule, une seule charge ou quoi que ce soit qui suive les lignes de champ. 

Pour chaque point d'une ligne de champ, la tangente de la ligne est dans la direction du champ $\vec{E}$ en ce même point. 

Autrement dit, elles n'apparaitront jamais dans des calculs mais bien uniquement pour se faire une représentation graphique !
