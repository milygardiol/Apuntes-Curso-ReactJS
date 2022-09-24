// Rendering condicional para mostrar distintos componentes, aprovechando el funcionamiento de React.

// Render optimization
/* Sources de cambio = props, state y re-render de un padre.
Memoizing => no realizar render en un componente.
Envolver componentes en un memo => React.memo(comp, fn*)
*/

// React memo =>
// Ahorra renders
// No se usa en componentes simples
// Se usa en listas largas que suelen hacer render frecuentemente sin tener que modigicar los props.

// useMemo => memoriza el resultado.
// Memoriza containers, indicando con memo para que no haya render.
