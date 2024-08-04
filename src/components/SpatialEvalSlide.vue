<template>
    <div>
        <AnimatedSlide >
            <template #header>
                <iframe
                className="banner"
                style={{ width: "100%" }}
                src="https://www.youtube.com/embed/4phJmMGCcCc?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>

            </template>
        </AnimatedSlide>
    </div>
</template>

<script lang="ts" setup>
import AnimatedSlide from '@/components/AnimatedSlide.vue';
import Divider from 'primevue/divider';
</script>