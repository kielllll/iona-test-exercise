import { useEffect } from 'react'

/**
 * Handle useEffect hooks to avoid unwanted multiple effects
 *
 * @param {Function} callback
 * @param {Array} deps
 */
export const useEffectOnce = (callback, deps) => {
  let ran = false
  useEffect(() => {
    if (ran) return
    callback()
    return () => (ran = true)
  }, deps)
}
