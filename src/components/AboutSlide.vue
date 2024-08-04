<template>
    <div>
        <AnimatedSlide >
            <template #header>
                <div class="flex justify-content-between">
                    <h1 class="text-left p-3">Zachary Hills, BIT, MSc</h1>
                    <div class="p-3 flex align-items-center">
                      <i class="pi pi-github p-3"></i>
                      <i class="pi pi-linkedin p-3"></i>
                    </div>
                </div>
                <Divider />
                <h3 class="text-left">Experience:</h3>
                <p class="text-left w-8 pl-3">
                  I am a Senior Full Stack Engineer and Data Scientist with
                  extensive experience working on DARPA and IARPA contracts. My
                  expertise spans a diverse range of applications, from leveraging
                  AI for Forensic Linguistics to enhancing spectral imagery with
                  advanced AI techniques. Additionally, I have a strong background
                  in designing and implementing horizontal scaling architecture to
                  ensure robust and efficient system performance.
                </p>
            </template>
        </AnimatedSlide>
    </div>
</template>

<script lang="ts" setup>
import AnimatedSlide from '@/components/AnimatedSlide.vue';
import Divider from 'primevue/divider';
</script>