+++
title = "APE 6: Dérivabilité"
+++
## Dérivées de fonctions
Une fonction $f$ est définie sur un intervalle ouvert $I$ est dite **dérivable en un point a** de $I$ si la limite suivante existe

$\lim_{h \to 0}\frac{f(a+h)-f(a)}{h}$ et peut également s'écrire $\lim_{x \to a}\frac{f(x)-f(a)}{x-a}$ en posant $x = a+h$

Théorème: Une fonction **dérivable** en un point $a$ implique que cette même fonction sois **continue** en ce point. **La réciproque est fausse, continue n'implique pas dérivable**

 La dérivabilité est également conservée via les opérations arithmétiques traditionnelles, on connait déjà les formules générales ( dérivée de f+g,...) donc je ne les rappellerai pas ici, a l'exception du produit et du quotient.
 
 $(fg)' = f'(a)g(a) + f(a)g'(a)$<br/>
 $(\frac{f}{g})' = \frac{f'(a)g(a) - f(a)g'(a)}{g(a)^2}$
 
 La règle de la chaine mérite également un petit rappel tant elle est importante
 
 $g(f(x))' = g'(f(x))f'(x)$  
 
Je ne rappellerai pas les dérivées usuelles ici, mais voici les dérivées de trigonométrie hyperbolique
 
| Fonction  | Dérivée                               |
| :-------- | :------------------------------------ |
| $sinh(x)$ | $cosh(x)$                             |
| $cosh(x)$ | $sinh(x)$                             |
| $tanh(x)$ | ${1}-tanh(x)^2 = \frac{1}{cosh(x)^2}$ |

(ça peut toujours servir)

NOTE: Cet APE incluait les prémices des EDO de premier ordre, mais je ne met pas le rappel ici, il sera dans la section EDO

## Dérivées de séries entières
Prenons une série entière $f(x) = \sum_{n=0}^{\infty}a_nx^n$. <br>Cette série converge pour tout $-R < x < R$, alors f est dérivable sur le même intervalle ouvert $]-R,R[$

Cela signifie que l'on peut dériver **terme a terme** une série entière.
