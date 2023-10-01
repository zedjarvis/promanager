import { computed } from "vue";
import { RouteMeta, useRoute } from "vue-router/auto";


export function useRouteMeta<P extends RouteMeta>() {
  const route = useRoute()
  return computed(() => route.meta as P)
}
