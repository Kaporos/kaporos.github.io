+++
title = "APE 5: Les fonctions, continuité, limites, suites et séries"
+++
## La continuité
La continuité d'une fonction $F: I \rightarrow R$ en un point $a$ est définie telle que:

$\forall \epsilon > 0 \exist \delta > 0 : \forall x \in I : (|x-a| < \delta \Rightarrow |f(x) - f(a)| < \epsilon)$

Autrement dit, la fonction est continue en un point a si, pour n'importe quelle précision $\epsilon$ il existe un $\delta$ tel que la distance entre $x$ et $a$ est inférieure a $\delta$ et que la distance entre $f(x)$ et $f(a)$ est inférieure a $\epsilon$

### Propriétés de la continuité
Prenons deux fonctions $f(x)$ et $g(x)$ continues, alors:

- $f(x) + g(x)$ est continu
- $f(x) - g(x)$ est continu
- $f(x).g(x)$ est continu
- $\frac{f(x)}{g(x)}$ est continu seulement si $g(x) \neq 0$


### Théorèmes continuité
Voici deux théorèmes liés a la continuité

Le théorème des **valeurs extrêmes** nous dit que si une fonction $f(x)$ est continue sur un intervalle $[a,b]$ alors  $f(x)$ possède un maximum et un minimum entre $a$ et $b$. 


Le théorème des **valeurs intermédiaires** nous dit que si une fonction $f(x)$ est continue sur un intervalle $[a,b]$ alors $f(x)$ prendra toutes les valeurs possibles entre $f(a)$ et $f(b)$. </br>
$\forall y \in [f(a), f(b)] \exist x \in [a,b] : f(x) = y$

## Les limites
La limite d'une fonction $f(x)$ en un point $c$ est définie telle que si $\lim_{x \to c} f(x) = L$ alors cela signifie que
$\forall \epsilon > 0 \exist \delta(\epsilon) > 0 : \forall X \in I : |f(x) - L| < \epsilon \Rightarrow |x-c| < \delta$

Et une fonction est définie comme continue en $c$ si et seulement si $\lim_{x \to c} f(x) = f(c)$

De plus, les limites sont conservées via les opérations traditionnelles. Prenons $f(x)$ et $g(x)$. Si $\lim_{x \to c} f(x) = L$ et que $\lim_{x \to c} g(x) = M$, alors cela signifie que:

- $\lim_{x \to c} f(x) \pm g(x) = L \pm M$
- $\lim_{x \to c} f(x).g(x) = L.M$
- $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{L}{M}$ (si $M \neq 0$)

Il existe également un théorème très pratique, le **théorème de l'éteau.** Si $f(x) \leq g(x) \leq h(x)$ pour tout x dans un intervalle ouvert autour de $c$ , et si $\lim_{x \to c} f(x) = L$ **et que** $\lim_{x \to c} h(x) = L$ alors, $\lim_{x \to c} g(x) = L$ également.

## Les suites de fonctions
Une suite de fonction $f_nn \geq 1$, on peut dire que la suite **converge ponctuellement** (simplement) vers la fonction $f$ si on a pour tout point $x \in D$ que $f_n(x) \rightarrow f(x)$</br>
Autrement dit, $\forall x \in D, \forall \epsilon > 0, \exist N: \forall n > N |f_n(x) - f(x)| < \epsilon$

On peut aussi dire qu'une suite **converge uniformément** vers la fonction $f$ si on a:
$\forall \epsilon > 0, \exist N : \forall x \in D \forall n > N |f_n(x) - f(x)| < \epsilon$

La différence entre les deux est que dans la convergence **ponctuelle** il peut y avoir un rang $N$ différent par $x$, tandis que dans la convergence **uniforme** il y a un unique rang $N$ pour tous les $x$. On peut dire qu'ils convergent a la même vitesse.

Si une suite de fonctions continues converge uniformément vers une fonction f , cette fonction f
est continue (mais si la suite converge ponctuellement on ne peut rien conclure
## Les séries entières
Une série entière $\sum^{\infty}_{n=0} c_n(x-a)^n$ doit forcément se trouver dans un de ces trois cas:

1. La série converge uniquement pour $x=a$ (et vaut 0)
2. Il existe un nombre strictement positif R appelé **rayon de convergence** tel que la série converge **absolument** pour $x$ tel que $|x - a| < R$ et **diverge** si $|x-a| > R$. <br> Le comportement en $x=a \pm R$ peut être soit convergent soit divergent.
3. La série converge absolument pour tout $x$ (on dit que le rayon de convergence R est infini).

