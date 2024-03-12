import { type Ref, ref } from 'vue'

export function useFoo() {
    const bar: Ref<string> = ref('fooBar')

    return {
        bar
    }
}
