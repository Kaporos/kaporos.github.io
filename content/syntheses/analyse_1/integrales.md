+++
title = "APE 8: Intégrales"
+++
## Définition de l'intégrale d'une fonction continue sur un intervalle fermé

Prenons $f$, une fonction définie sur un intervalle **fermé** $[a,b]$ si on considère
une subdivision de l'intervalle $[a,b]$
$$a = a_0 < a_1 < a_2 < ... < a_{n-1} < a_n < b$$

et si on choisit un point $t_i$ dans chaque sous intervalle $[a_{i-1}, a_i]$,alors l'intégrale approximée de f sur $[a,b]$ (ou **somme de Riemann** de $f$ sur $[a,b]$) correspondante est donnée par

$$I = \sum_{i=0}^{n} f(t_i)(a_i - a_{i-1})$$

(ce qui correspond a la somme de petites zones d'aires sous la fonction)

[Desmos montrant la somme de Riemann](https://www.desmos.com/calculator/sqhatjs67m?lang=fr)

Si $f$ est continue sur $[a,b]$, et que la subdivision de cet intervalle vérifie la propriété suivante: La longueur de la plus grande sous division tends vers zero lorsque le nombre de sous divisions tends vers l'infini, alors n'importe quelle somme de Riemann de ces intervalles sur la fonction $f$ converge vers une valeur qui est la valeur de l'intégrale. 

Pour reformuler de manière plus simple, si f est continue et que les intervalles sont infinitésimaux, alors la somme convergera vers l'intégrale de la fonction telle qu'on la connait, notée
$$\int_{a}^{b} f(t) dt$$

NOTE: Une fonction continue par morceaux sur un intervalle $[a,b]$ est aussi intégrable au sens de Riemann

## Propriétés des intégrales

Je vais passer quelques propriétés évidentes que l'on a déja vues et revues en secondaires.

Si $\forall t \in [a,b]: m \leq f(t) \leq M$ alors

$$m(b-a) \leq \int_{a}^{b}f(t)dt \leq M(b-a)$$

Quelques conventions existent aussi:

Si $a>b$, alors 
$$\int_{a}^{b} f(t) dt = -\int_{b}^{a}f(t) dt$$

Ainsi qu'un théorème, le théorème de la **moyenne**:

Si $f$ est une fonction continue sur un intervalle fermé $[a,b]$ alors il existe un point c dans $[a,b]$ tel que

$$\int_{a}^{b}f(t) dt = f(c)(b-a)$$

## Théorème fondamental


Si $f$ est une fonction continue sur un intervalle fermé $[a,b]$, alors la fonction $(x \rightarrow \int_{a}^{x} f(t) dt)$ est dérivable sur $]a,b[$ et pour tout $x$ dans $]a,b[$

$$\frac{d}{dx}(\int_{a}^{x}f(t)dt) = f(x)$$

Autrement dit, la dérivée de l'intégrale d'une fonction $f$ vaut $f$

De plus, si $F$ est une fonction continue et continument dérivable sur $[a,b]$, alors 
$$\int_{a}^{b}F'(t)dt = F(b) - F(a)$$

## Applications de l'intégrale

*Volume de solides de révolution*: Soit $f$ une fonction continue et positive sur $[a,b]$. Le volume du solide de révolution obtenu en appliquant une rotation autour de l'axe $x$ de la région planaire entre le graphe de $f$ sur $[a,b]$ et l'axe des $x$ est donné par 
$$V(f, [a,b]) := \pi \int_{a}^{b}(f(x))^2dx$$

*Longueur de courbes*: Soit $f$ une fonction définie et continument dérivable sur $[a,b]$. La longueur de la courbe représentant le graphe de $f$ sur $[a,b]$ est donné par

$$L(f, [a,b]) := \int_{a}^{b} \sqrt{1 + (f'(t))^2} dt $$

## Méthodes d'intégration
Petit rappel de deux méthodes d'intégration

*Intégration par parties*: Si $f$ et $g$ sont deux fonctions continues et continument déribables sur $[a,b]$, alors

$$\int_{a}^{b} f'(t)g(t) = f(b)g(b) - f(a)g(a) - \int_{a}^{b} f(t)g'(t) dt$$

(Il y a deux fois $f.g$ car on calcule une intégrale, si on voulait simplement la primitive il n'y aurait que $f(t)g(t)$)

*Changement de variable dans une intégrale*: Si $g$ est une fonction continument dérivable sur un intervalle $[a,b]$ et si $f$ est une fonction continue sur un intervalle contenant l'image de $g$ alors

$$\int_{a}^{b}f(g(t))g'(t)dt = \int_{g(a)}^{g(b)}f(u)du$$

## Intégrales impropres
Une **intégrale impropre** est soit l'intégrale d'une fonction continue sur un intervalle de la forme $[a, + \infty[, ]-\infty, b]$ soit l'intégrale d'une fonction continue sur un interval $[a, b[, ]a, b]$ qui n'est pas bornée sur cet intervalle. Dans ce cas, l'intégrale n'est a prioris pas définie

Définition: Soit $f$ une fonction continue sur un intervalle de la forme $[a, +\infty[$. Si la limite suivante existe

$$\lim_{c \to + \infty} \int_{a}^{c} f(t) dt$$

Cette limite est notée $\int_{a}^{+\infty} f(t)dt$ et est appelée **intégrale impropre** de $f$ sur $[a, +\infty[$. On dit que l'intégrale est convergente si la limite existe, sinon elle est dite divergente.

Cette définition se transpose a tous les autrrs cas d'intégrale impropre. Par exemple, si $f$ est continue sur l'intervalle $[a, b[$ (mais pas forcément bornée) et si la limite suivante existe

$$\lim_{c \to + b^{-}} \int_{a}^{c} f(t) dt$$
Cette limite est notée $\int_{a}^{b} f(t)dt$ et est appelée **intégrale impropre** de $f$ sur $[a, b[$. On dit que l'intégrale est convergente si la limite existe, sinon elle est dite divergente.

## Critères de convergece
*Critère de comparaison*: Soient $f$ et $g$ deux fonctions continues sur $[a, +\infty[$ telles que 
$$|f(x)| \leq g(x)$$
pour tout x dans $[a, +\infty[$. Si l'intégrale impropre $\int_{a}^{+\infty} g(x)dx$ est convergente alors l'intégrale impropre $\int_{a}^{+\infty} f(x)dx$ est également convergente.

*Test intégral pour la convergence de séries*: Soit $f$ une fonction continue, décroissante et positive sur $[1, +\infty[$

1. Soit $\sum_{n=1}^{\infty}a_n$ une série dont le terme général satisfait
$a_n \leq f(n)$
pour tout $n$. Si l'intégrale impropre $\int_{1}^{+\infty}f(x)dx$ est convergente, alors la série $\sum_{n=1}^{\infty}a_n$ converge également.</br></br>
2. Soit $\sum_{n=1}^{\infty}a_n$ une série dont le terme général satisfait
$a_n \geq f(n)$
pour tout $n$. Si série $\sum_{n=1}^{\infty}a_n$ converge, alors l'intégrale impropre $\int_{1}^{+\infty} f(x)dx$ est également convergente

Autrement dit, si le plus grand converge, le plus petit aussi !

Et si $a_n := f(n)$ alors leur convergence est identique, convergentes ou bien divergentes toutes les deux.
