<script lang="ts">
    import type { MarkComponentProps } from '@portabletext/svelte'

    export let portableText: MarkComponentProps<{
        href?: string
        newTab?: boolean
    }>

    $: ({ value } = portableText)
    $: newTab = value.newTab || false
</script>

{#if value.href}
    <a href={value.href} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener' : undefined}>
        <slot />
    </a>
{:else}
    <slot />
{/if}
