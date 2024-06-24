<script lang="ts">
    import type { BlockComponentProps } from '@portabletext/svelte'
    export let portableText: BlockComponentProps

    $: ({ value } = portableText)
    $: ({ style } = value)

    const hClass = {
        h1: '',
        h2: 'title-medium',
        h3: 'title-small',
        h4: '',
        h5: '',
        h6: '',
    }
</script>

<svelte:element this={style} class={hClass[style]}>
    <slot />
</svelte:element>
