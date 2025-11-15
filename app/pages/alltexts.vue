<script setup lang="ts">
const { data: posts } = await useAsyncData('all-texts', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog posts not found',
    fatal: true
  })
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: 'AllTexts',
  description: 'List of all C&G texts sorted by date'
})
</script>

<template>
  <UPage>
    <UPageHeader class="mt-10">
      <div class="text-2xl">
        AllTexts
      </div>
      <div class="text-sm text-muted mt-2">
        List of all C&G texts sorted by date
      </div>
    </UPageHeader>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div class="space-y-6">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="border-b border-default pb-6 last:border-0 last:pb-0"
        >
          <ULink
            :to="post.path"
            class="group block"
          >
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-highlighted group-hover:text-primary transition-colors">
                  {{ post.title }}
                </h3>
                <p v-if="post.description" class="text-sm text-muted mt-1">
                  {{ post.description }}
                </p>
              </div>
              <div class="flex items-center gap-4 text-xs text-muted">
                <span v-if="post.date">
                  {{ formatDate(post.date) }}
                </span>
                <span v-if="post.minRead" class="hidden sm:inline">
                  {{ post.minRead }} MIN READ
                </span>
              </div>
            </div>
          </ULink>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>

