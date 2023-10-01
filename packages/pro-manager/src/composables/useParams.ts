import { computed } from 'vue';
import { RouteParams, useRoute } from 'vue-router/auto';


function useParams<P extends any>() {
  const route = useRoute()
  return computed(() => route.params as P)
}

export { useParams, type RouteParams };
