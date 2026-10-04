export default defineNuxtRouteMiddleware((to) => {
  // The reference redirects direct requests for its transient user ids to the list.
  if (to.path.startsWith('/original/users/')) return navigateTo('/original/users', { replace: true, redirectCode: 302 })
})
