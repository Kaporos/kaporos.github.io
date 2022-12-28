+++
title = "APE 7: Taylor"
+++

# Critères sur base de la dérivée

Le rappel de l'APE inclus un rappel sur l'analyse des dérivées (déterminer la croissance, décroissance d'une fonction) sur base de sa dérivée ainsi que la concavité sur base de la dérivée seconde, mais je n'en parlerai pas ici car supposé connu également.

Je tenais quand même a rappeler qu'un **point critique** est un point $c$ de $f$ tel que $f'(c) = 0$ 

Deuxieme petit rappel:

Si $f'(c) = 0$ et que  $f''(c) < 0$ alors f possède un **maximum local** en $x=c$ 

Si $f'(c) = 0$ et que $f''(c) > 0$ alors f possède un **minimum local** en $x=c$ 

# La formule de Taylor

Si la fonction $f$ est dérivable $n$ fois en un point $a$, son **polynôme de Taylor** de degré $n$ autour du point $a$, noté $t_n(x)$ est donné par:

$$t_n(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2+\frac{f^{(3)}(a)}{3!}(x-a)^3 + ... + \frac{f^{(n)}(a)}{n!}(x-a)^n$$

et peut se résumer à ça sous forme de série

$$t_n(x) = \sum_{n=0}^{n}\frac{1}{n!}f^{(n)}(a)(x-a)^n$$

Ce polynôme est une **approximation** de la fonction f, mais sans aucune garantie sur la qualité de l'approximation.

### La marge d'erreur

Il est possible de calculer une marge d'erreur. Prenons une fonction $f(x)$ dérivable de manière continue $n+1$ fois

Nous cherchons l'erreur d'approximation de $f(x)$ avec le polynome de taylor autour de $a$. On peut prendre le polynome de Taylor à l'ordre $n$ et lui rajouter un **reste** a l'ordre $n+1$, le reste est un terme de Taylor normal, a la seule différence qu'on ne calcule pas la dérivée $n+1$ èmienne de $a$,celle de $c$, $c$ étant un nombre inconnu entre $x$ et $a$. Et un théorème nous dit que pour une certaine valeur (inconnue) de $c$, la valeur de l'approximation est exacte, donc $t_{n+1}(x) = f(x)$

Pour trouver l'erreur, il suffit donc de calculer ce reste avec la valeur de $c$ donnant le **plus grand** $|t_{n+1}(c)|$ (la valeur absolue est importante), et ce reste nous donnera l'erreur maximale de notre polynome de Taylor.

Voici a quoi ressemble un polynome de Taylor avec reste (écrit f(x) car pour le bon $c$, l'approximation est **exacte** ):


$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2+\frac{f^{(3)}(a)}{3!}(x-a)^3 + ... + \frac{f^{(n)}(a)}{n!}(x-a)^n + \frac{f^{(n+1)}(c)}{n!}(x-a)^n$$ 

Ce qui peut être reformulé

$$f(x) - t_n(x) = \frac{f^{(n+1)}(c)}{n!}(x-a)^n$$

pour un certain c entre $x$ et $a$. Trouver le reste maximal nous donnera donc la marge d'erreur maximale !

### Inégalité de Taylor

Pour une fonction $f$ dérivable $n+1$ fois, si $m$ est une borne **inférieure** et $M$ une borne **supérieure** de cette $n+1$-ème dérivée de $f$ sur un intrvalle $[a,b]$, donc
$$\forall x \in [a,b]: m \leq f^{(n+1)}(x) \leq M $$
alors on peut dire que:
$$\forall x \in [a,b]: t_n(x) + \frac{m}{(n+1)!}(x-a)^{n+1} \leq f(x) \leq t_n(x) + \frac{M}{(n+1)!}(x-a)^{n+1} $$

### Oscillations et série de Taylor
Prenons une foncton $f$ définie et $n$ fois continument dérivable sur un intervalle ouvert $I$ et deux points de cet intervalle, a et b tels que $a<b$.

L'oscillation de $f^{(n)}$ sur l'intervalle $[a,b]$ correspond à:
$$C_n := M_n - m_n$$
Où $M_n$ est le maximum et $m_n$ le minimum de $f^{(n)}$ sur $[a,b]$

Cette oscillation nous donne une autre estimation de l'erreur commise que celle que donnée par le reste. On peut écrire:
$$|f(x) - t_n(x)| \leq \frac{C_n}{n!}|x-a|^n \leq \frac{C_n}{n!}|b-a|^n$$

Cette estimation est intéréssante lorsque la $n$-ème dérivée de f oscille faiblement, cad que l'écart entre son maximum et son minimum est petit.

### Le théorème de Taylor

Le théorème de Taylor est un mélange de tout ce que l'on a évoqué plus tôt.

Prenons une fonction $f$ infiniment dérivable sur un intervalle ouvert $I$, ainsi que deux points $a$ et $b$ de $I$ tels que $a<b$. </br>
Si $\lim_{n \to \infty} \frac{C_n}{n!}(b-a)^n = 0$, alors on peut dire que le polynome de taylor de la fonction $f$ converge vers $f$.
Et donc,
$$f(x) = \lim_{n \to \infty}t_n(x)= \sum_{k=0}^{\infty}\frac{1}{k!}f^{(k)}(a)(x-a)^k$$
