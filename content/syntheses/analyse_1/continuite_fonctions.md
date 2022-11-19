+++
title = "La continuité des fonctions"
+++

## Une fonction ?

Une **fonction** peut être définie par une formule ou, plus généralement, toute **règle déterministe** qui associe une (et une seule) valeur réelle à tout réel appartenant au domaine D.

Une fonction est **bornée** s'il y a un nombre positif $m$ tel que toute valeure de f est comprise entre $-m \leq f(x) \geq  m $

Et une fonction *bounded away from 0* signifie qu'elle ne s'approche jamais de zero.

## La continuité d'une fonction

Une fonction est continue en un point $c$ si et seulement si pour que la valeur de f(x) devienne proche de la valeur exacte f(c) il suffit de choisir une valeur de x suffisament proche de c.

Définition rigoureuse:
$$ \forall \epsilon > 0 \exists S(\epsilon) : |x-c| < S \Rightarrow |f(x) - f(c)| < \epsilon $$

### Opérations préservant la continuité

Si $f,g,h$ sont continues en c, et que $h(c) \neq 0$.

Alors $f+g$, $fg$ et $\frac{f}{h}$ sont continues en c.   

## Continuité uniforme

Une fonction $f(x)$ est considérée comme uniformément continue sur un intervalle $I$ si, pour n'importe quelle tolérance $\epsilon > 0$ il y a une précision $\delta$ telle que si $x$ et $y$ sont dans $I$ et diffèrent de moins de $\delta$ alors $f(x) et f(z)$ diffèrent de moins d'$\epsilon$ 

Et si une fonction est continue sur $[a,b]$ alors f est uniformément continue sur $[a,b]$

## Les limites

Pour définir la continuité, il n'y a pas besoin de limites, mais celles ci peuvent quand même s'avérer très pratiques !

On peut dire qu'une fonction $f$ est continue en $c$ quand:
$$\lim_{x \rightarrow c}f(x) = f(c) $$

Si non, alors $f$ est **discontinue** en $c$

La définition d'une limite est telle que:

$$\lim_{x \rightarrow c}f(x) = L $$
$$ \forall \epsilon \exists \delta : 0 < |x-c| < \delta \Rightarrow |f(x) - L| < \epsilon $$

Aux limites s'appliquent (entre autres) le théorème du **sandwich** (gendarme, étau, ...)

De plus,

Si $\lim_{x \rightarrow c}f(x) = L_1, \lim_{x \rightarrow c}g(x) = L_2, \lim_{x \rightarrow c}h(x) = L_3 \neq 0$

$(a) \lim_{x \rightarrow c}(f(x) + g(x)) = L_1 + L_2$

$(b) \lim_{x \rightarrow c}(f(x)g(x)) = L_1L_2$

$(c) \lim_{x \rightarrow c}\frac{f(x)}{h(x)} = \frac{L_1}{L_3}$


