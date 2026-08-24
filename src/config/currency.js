// Single source of truth for currency across the whole app.
// Fixes the €/$/₹ inconsistency across product cards, cart, and search.
// Change CURRENCY_SYMBOL here once your real backend/store currency is decided
// — every component should import from here instead of hardcoding a symbol.

export const CURRENCY_SYMBOL = "$";

export const formatPrice = (amount) => `${CURRENCY_SYMBOL}${Number(amount).toFixed(2)}`;