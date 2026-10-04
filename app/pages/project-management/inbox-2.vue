<!-- Page: /project-management/inbox-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Inbox 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "enabled": false,
  "typeToSearch": "",
  "writeAReply": ""
})

// Restore drafts after hydration; the first client render matches SSR.
onMounted(() => {
  const key = 'nuxt-ui-page:' + route.path
  try {
    const draft = localStorage.getItem(key)
    if (draft) Object.assign(form, JSON.parse(draft))
  } catch { /* Use the defaults when no draft exists. */ }
  watch(form, value => localStorage.setItem(key, JSON.stringify(value)), { deep: true, flush: 'sync' })
})

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "project-management-inbox-2.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/inbox-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default text-highlighted flex min-h-0 flex-1 flex-col overflow-hidden">
          <header class="bg-default flex h-14 shrink-0 items-center justify-between gap-3 border-b px-4 border-default">
            <div class="flex items-center gap-2">
              <div class="hidden items-center gap-1 lg:flex">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5 bg-muted text-highlighted hover:bg-muted" aria-label="Inbox8" type="button" @click="openAction(&quot;Inbox8&quot;)">
                  <UIcon name="i-lucide-inbox" class="size-4" />
                  <span class="text-[13px]">Inbox</span>
                  <div class="inline-flex items-center rounded-md border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 px-1.5 text-[10px] border-default">8</div>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Drafts" type="button" @click="openAction(&quot;Drafts&quot;)">
                  <UIcon name="i-lucide-file" class="size-4" />
                  <span class="text-[13px]">Drafts</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Sent" type="button" @click="openAction(&quot;Sent&quot;)">
                  <UIcon name="i-lucide-send" class="size-4" />
                  <span class="text-[13px]">Sent</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Junk" type="button" @click="openAction(&quot;Junk&quot;)">
                  <UIcon name="i-lucide-archive-x" class="size-4" />
                  <span class="text-[13px]">Junk</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Trash" type="button" @click="openAction(&quot;Trash&quot;)">
                  <UIcon name="i-lucide-trash-2" class="size-4" />
                  <span class="text-[13px]">Trash</span>
                </UButton>
              </div>
              <div class="hidden items-center gap-1 md:flex lg:hidden">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5 bg-muted text-highlighted hover:bg-muted" aria-label="Inbox8" type="button" @click="openAction(&quot;Inbox8&quot;)">
                  <UIcon name="i-lucide-inbox" class="size-4" />
                  <span class="text-[13px]">Inbox</span>
                  <div class="inline-flex items-center rounded-md border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 px-1.5 text-[10px] border-default">8</div>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Drafts" type="button" @click="openAction(&quot;Drafts&quot;)">
                  <UIcon name="i-lucide-file" class="size-4" />
                  <span class="text-[13px]">Drafts</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Sent" type="button" @click="openAction(&quot;Sent&quot;)">
                  <UIcon name="i-lucide-send" class="size-4" />
                  <span class="text-[13px]">Sent</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-[30px]" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                </UButton>
              </div>
              <div class="flex items-center gap-1 md:hidden">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-[30px] gap-1.5" aria-label="Inbox8" type="button" @click="openAction(&quot;Inbox8&quot;)">
                  <UIcon name="i-lucide-inbox" class="size-4" />
                  <span class="text-[13px]">Inbox</span>
                  <div class="inline-flex items-center rounded-md border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 px-1.5 text-[10px] border-default">8</div>
                  <UIcon name="i-lucide-chevron-down" class="size-3" />
                </UButton>
              </div>
            </div>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-1.5" aria-label="Jordan Lee" type="button" @click="openAction(&quot;Jordan Lee&quot;)">
              <UIcon name="i-lucide-badge-check" class="size-3.5" />
              Jordan Lee
              <UIcon name="i-lucide-chevron-down" class="size-3" />
            </UButton>
          </header>
          <div class="flex min-h-0 flex-1 overflow-hidden">
            <aside class="bg-default flex h-full w-full shrink-0 flex-col overflow-hidden border-r md:w-[320px] border-default">
              <div class="flex shrink-0 flex-col gap-3.5 border-b p-4 border-default">
                <div class="flex w-full items-center justify-between">
                  <div class="text-highlighted text-base font-medium">Inbox</div>
                  <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 text-sm">
                    <span>Unreads</span>
                    <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                  </label>
                </div>
                <UInput v-model="form.typeToSearch" type="text" placeholder="Type to search..." name="typeToSearch" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
              </div>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-elevated border-default" aria-label="Sarah Mitchell09:30 AMQ4 Product Roadmap ReviewHey team, I have put together the draft roadmap for Q4 and would love your input before we finalize it next week." type="button" @click="openAction(&quot;Sarah Mitchell09:30 AMQ4 Product Roadmap ReviewHey team, I have put together the draft roadmap for Q4 and would love your input before we finalize it next week.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Sarah Mitchell" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm font-semibold">Sarah Mitchell</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">09:30 AM</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm font-medium">Q4 Product Roadmap Review</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Hey team, I have put together the draft roadmap for Q4 and would love your input before we finalize it next week.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="GitHubYesterday[acme/dashboard] PR #847 mergedYour pull request has been merged into main. The CI/CD pipeline has started and deployment to staging is queued." type="button" @click="openAction(&quot;GitHubYesterday[acme/dashboard] PR #847 mergedYour pull request has been merged into main. The CI/CD pipeline has started and deployment to staging is queued.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="GitHub" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm">GitHub</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">Yesterday</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm">[acme/dashboard] PR #847 merged</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Your pull request has been merged into main. The CI/CD pipeline has started and deployment to staging is queued.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Alex ThompsonYesterdayNew brand assets ready for reviewThe updated brand guidelines and asset library are now available. I included the new color palette and usage notes." type="button" @click="openAction(&quot;Alex ThompsonYesterdayNew brand assets ready for reviewThe updated brand guidelines and asset library are now available. I included the new color palette and usage notes.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Alex Thompson" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm">Alex Thompson</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">Yesterday</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm">New brand assets ready for review</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">The updated brand guidelines and asset library are now available. I included the new color palette and usage notes.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Stripe2 days agoYour December payout has been initiatedA payout of $12,450.00 USD has been initiated to your bank account ending in 4521." type="button" @click="openAction(&quot;Stripe2 days agoYour December payout has been initiatedA payout of $12,450.00 USD has been initiated to your bank account ending in 4521.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Stripe" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm">Stripe</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">2 days ago</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm">Your December payout has been initiated</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">A payout of $12,450.00 USD has been initiated to your bank account ending in 4521.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Marcus Johnson3 days agoFollow-up: Series A discussionGreat meeting you at TechCrunch Disrupt last week. I would love to continue our conversation about your growth plans." type="button" @click="openAction(&quot;Marcus Johnson3 days agoFollow-up: Series A discussionGreat meeting you at TechCrunch Disrupt last week. I would love to continue our conversation about your growth plans.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Marcus Johnson" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm">Marcus Johnson</span>
                          </div>
                          <span class="text-muted shrink-0 text-xs">3 days ago</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm">Follow-up: Series A discussion</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Great meeting you at TechCrunch Disrupt last week. I would love to continue our conversation about your growth plans.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Linear3 days agoWeekly project digestHere is your weekly summary: 23 issues completed, 8 in progress, and 5 new issues created this week." type="button" @click="openAction(&quot;Linear3 days agoWeekly project digestHere is your weekly summary: 23 issues completed, 8 in progress, and 5 new issues created this week.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Linear" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm">Linear</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">3 days ago</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm">Weekly project digest</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Here is your weekly summary: 23 issues completed, 8 in progress, and 5 new issues created this week.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Emma Watson4 days agoContract renewal - Action requiredOur annual contract is coming up for renewal next month. I wanted to discuss the new pricing tiers." type="button" @click="openAction(&quot;Emma Watson4 days agoContract renewal - Action requiredOur annual contract is coming up for renewal next month. I wanted to discuss the new pricing tiers.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Emma Watson" src="/reference/62828bc2a489837e.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm font-semibold">Emma Watson</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">4 days ago</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm font-medium">Contract renewal - Action required</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our annual contract is coming up for renewal next month. I wanted to discuss the new pricing tiers.</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-elevated hover:text-default flex w-full gap-3 border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Vercel4 days agoBuild failed: acme-dashboardThe latest deployment for acme-dashboard failed. Error: Module not found: Cannot resolve components/ui." type="button" @click="openAction(&quot;Vercel4 days agoBuild failed: acme-dashboardThe latest deployment for acme-dashboard failed. Error: Module not found: Cannot resolve components/ui.&quot;)">
                      <span class="relative flex overflow-hidden rounded-full mt-0.5 size-9 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Vercel" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                      </span>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-2">
                          <div class="flex min-w-0 items-center gap-1">
                            <span class="truncate text-sm">Vercel</span>
                            <svg viewBox="0 0 22 22" class="text-info size-3.5 shrink-0" fill="currentColor" width="100%" height="100%">
                              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                            </svg>
                          </div>
                          <span class="text-muted shrink-0 text-xs">4 days ago</span>
                        </div>
                        <p class="mt-0.5 truncate text-sm">Build failed: acme-dashboard</p>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">The latest deployment for acme-dashboard failed. Error: Module not found: Cannot resolve components/ui.</p>
                      </div>
                    </UButton>
                  </div>
                </div>
              </div>
            </aside>
            <div class="hidden min-w-0 flex-1 md:flex">
              <div class="bg-default flex min-w-0 flex-1 flex-col overflow-hidden">
                <header class="flex h-14 shrink-0 items-center justify-between gap-3 border-b px-4 border-default">
                  <div class="flex min-w-0 items-center gap-3">
                    <UIcon name="i-lucide-mail" class="size-5 shrink-0" />
                    <div class="min-w-0">
                      <h2 class="truncate text-sm font-medium sm:text-base text-highlighted">Q4 Product Roadmap Review</h2>
                      <p class="text-muted truncate text-xs">From sarah.mitchell@acme.io</p>
                    </div>
                  </div>
                  <div class="flex shrink-0 items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-1.5" aria-label="Reply" type="button" @click="openAction(&quot;Reply&quot;)">
                      <UIcon name="i-lucide-reply" class="size-3.5" />
                      Reply
                    </UButton>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </div>
                </header>
                <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                  <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                    <div style="min-width:100%;display:table">
                      <article class="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-6 lg:px-10">
                        <div class="flex items-start gap-3">
                          <span class="relative flex overflow-hidden rounded-full size-10 shrink-0">
                            <img class="aspect-square h-full w-full" alt="Sarah Mitchell" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 flex-1">
                            <div class="flex items-center gap-1.5">
                              <span class="font-medium">Sarah Mitchell</span>
                              <svg viewBox="0 0 22 22" class="size-4 text-info" fill="currentColor" width="100%" height="100%">
                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                              </svg>
                            </div>
                            <p class="text-muted text-sm">sarah.mitchell@acme.io</p>
                            <p class="text-muted mt-0.5 text-xs">09:30 AM</p>
                          </div>
                        </div>
                        <div class="flex flex-col gap-4 text-sm leading-relaxed">
                          <p>Hey team,</p>
                          <p>I have put together the draft roadmap for Q4 and would love your input before we finalize it next week. The main decision points are the analytics refresh, workspace permissions, and whether we keep the mobile search improvements in the same release train.</p>
                          <p>Can you review the attached summary and leave comments by Thursday afternoon? I want to make sure we have enough time to reconcile dependencies before the leadership review.</p>
                          <p>Thanks, Sarah</p>
                        </div>
                        <div class="flex flex-col gap-2">
                          <p class="text-muted text-xs font-medium tracking-wide uppercase">Attachments</p>
                          <div class="flex flex-wrap gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="q4-roadmap-draft.pdf" type="button" @click="openAction(&quot;q4-roadmap-draft.pdf&quot;)">
                              <UIcon name="i-lucide-paperclip" class="size-3.5" />
                              q4-roadmap-draft.pdf
                            </UButton>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="launch-dependencies.csv" type="button" @click="exportCsv()">
                              <UIcon name="i-lucide-paperclip" class="size-3.5" />
                              launch-dependencies.csv
                            </UButton>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div class="shrink-0 border-t px-6 py-4 lg:px-10 border-default">
                  <div class="bg-(--ui-bg-muted)/30 mx-auto max-w-3xl rounded-lg border border-default">
                    <div class="text-muted border-b px-3 py-2 text-sm border-default">Reply to sarah.mitchell@acme.io</div>
                    <UTextarea v-model="form.writeAReply" :rows="4" placeholder="Write a reply..." name="writeAReply" class="flex w-full rounded-md text-base md:text-sm min-h-[90px] resize-none" :ui="{ base: 'h-full' }" />
                    <div class="flex items-center justify-between border-t px-3 py-2 border-default">
                      <span class="text-muted text-xs">Use / for snippets</span>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs gap-1.5" aria-label="Send" type="button" @click="openAction(&quot;Send&quot;)">
                        <UIcon name="i-lucide-send" class="size-3.5" />
                        Send
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page-local action dialog -->
    <UModal v-model:open="actionDialog.open" :title="actionDialog.title" description="Update the details below.">
      <template #body>
        <p v-if="actionDialog.mode === 'delete'" class="text-sm text-muted">Are you sure you want to remove this item?</p>
        <div v-else class="space-y-4">
          <UFormField label="Name"><UInput v-model="actionDialog.name" class="w-full" /></UFormField>
          <UFormField label="Description"><UTextarea v-model="actionDialog.description" class="w-full" /></UFormField>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton color="neutral" variant="outline" @click="actionDialog.open = false">Cancel</UButton>
          <UButton :color="actionDialog.mode === 'delete' ? 'error' : 'primary'" @click="confirmAction">{{ actionDialog.mode === 'delete' ? 'Remove' : 'Save changes' }}</UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<style scoped>

.page-content { min-height: 0; color: var(--ui-text); --chart-1: var(--ui-primary); --chart-2: var(--ui-text-highlighted); --chart-3: var(--ui-text-muted); --chart-4: var(--ui-text-dimmed); --chart-5: var(--ui-border-accented); --chart-6: var(--ui-border); --radius: var(--ui-radius); }
.page-content > div { min-height: 100%; }
.page-content *, .page-content ::before, .page-content ::after { border-color: var(--ui-border); }
.page-content [data-slot="scroll-area-viewport"] { overflow: auto !important; scrollbar-width: thin; }
.page-content [data-slot="scroll-area-scrollbar"] { display: none; }
.page-content pre { overflow: auto; }
.page-content img { object-fit: cover; }
</style>
