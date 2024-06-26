<script lang="ts">
    import { PortableText } from '@portabletext/svelte'
    import type { InputValue } from '@portabletext/svelte/dist/ptTypes'
    // Components
    import Heading from './Heading.svelte'
    import Link from './Link.svelte'

    export let content: InputValue
</script>

<PortableText
    value={content}
    components={{
        block: {
            h2: Heading,
            h3: Heading,
            h4: Heading,
            // normal: Text,
        },
        marks: {
            link: Link,
        },
    }}
/>
