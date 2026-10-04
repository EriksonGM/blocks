<!-- Page: /project-management/inbox-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Inbox 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchThreads": "",
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
  anchor.download = "project-management-inbox-1.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/inbox-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="flex h-full min-w-0 flex-1 flex-col overflow-hidden md:hidden">
            <div class="flex h-14 shrink-0 items-center justify-between border-b px-4 border-default">
              <div class="flex min-w-0 items-center gap-2">
                <UIcon name="i-lucide-message-square" class="size-5 shrink-0" />
                <span class="truncate font-semibold">Inbox</span>
              </div>
              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">12</div>
            </div>
            <div class="border-b px-4 py-3 border-default">
              <div class="relative">
                <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <UInput v-model="form.searchThreads" type="text" placeholder="Search threads..." name="searchThreads" class="flex w-full rounded-md text-base md:text-sm h-9 pl-9" :ui="{ base: 'h-full' }" />
              </div>
            </div>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-muted border-default" aria-label="Trouble connecting Slack integration6h agoOur team is trying to connect Slack with CloudStar, but the authorization process fails with..." type="button" @click="openAction(&quot;Trouble connecting Slack integration6h agoOur team is trying to connect Slack with CloudStar, but the authorization process fails with...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm font-semibold">Trouble connecting Slack integration</span>
                        <span class="text-muted shrink-0 text-xs">6h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our team is trying to connect Slack with CloudStar, but the authorization process fails with...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Missing files in shared workspace6h agoYesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no..." type="button" @click="openAction(&quot;Missing files in shared workspace6h agoYesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm font-semibold">Missing files in shared workspace</span>
                        <span class="text-muted shrink-0 text-xs">6h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Yesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Billing discrepancy on latest invoice8h agoOur invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review..." type="button" @click="openAction(&quot;Billing discrepancy on latest invoice8h agoOur invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Billing discrepancy on latest invoice</span>
                        <span class="text-muted shrink-0 text-xs">8h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Can't reset my password12h agoI tried to reset my CloudStar password using the &quot;Forgot Password&quot; link, but the reset email never..." type="button" @click="openAction(&quot;Can't reset my password12h agoI tried to reset my CloudStar password using the \&quot;Forgot Password\&quot; link, but the reset email never...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Can't reset my password</span>
                        <span class="text-muted shrink-0 text-xs">12h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">I tried to reset my CloudStar password using the &quot;Forgot Password&quot; link, but the reset email never...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Dashboard analytics not updating1d agoThe analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t..." type="button" @click="openAction(&quot;Dashboard analytics not updating1d agoThe analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Dashboard analytics not updating</span>
                        <span class="text-muted shrink-0 text-xs">1d ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">The analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Request for HIPAA compliance details2w agoBefore we move forward with onboarding, our legal team would like documentation on CloudSt..." type="button" @click="openAction(&quot;Request for HIPAA compliance details2w agoBefore we move forward with onboarding, our legal team would like documentation on CloudSt...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Request for HIPAA compliance details</span>
                        <span class="text-muted shrink-0 text-xs">2w ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Before we move forward with onboarding, our legal team would like documentation on CloudSt...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Need SAML metadata refreshed3h agoOur identity provider rotated certificates overnight and SSO logins started failing for a subset of users..." type="button" @click="openAction(&quot;Need SAML metadata refreshed3h agoOur identity provider rotated certificates overnight and SSO logins started failing for a subset of users...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm font-semibold">Need SAML metadata refreshed</span>
                        <span class="text-muted shrink-0 text-xs">3h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our identity provider rotated certificates overnight and SSO logins started failing for a subset of users...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Webhook delivery failing for staging5h agoDeliveries to our staging webhook endpoint started returning 401 after yesterday's secret rotation..." type="button" @click="openAction(&quot;Webhook delivery failing for staging5h agoDeliveries to our staging webhook endpoint started returning 401 after yesterday's secret rotation...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm font-semibold">Webhook delivery failing for staging</span>
                        <span class="text-muted shrink-0 text-xs">5h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Deliveries to our staging webhook endpoint started returning 401 after yesterday's secret rotation...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Can we export audit logs by date range9h agoOur security team needs an audit log export for the last 30 days, filtered down to admin permission changes..." type="button" @click="exportCsv()">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Can we export audit logs by date range</span>
                        <span class="text-muted shrink-0 text-xs">9h ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our security team needs an audit log export for the last 30 days, filtered down to admin permission changes...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Mobile push alerts are too noisy1d agoOur on-call team is getting duplicate push notifications for resolved incidents and it's creating alert fatigue..." type="button" @click="openAction(&quot;Mobile push alerts are too noisy1d agoOur on-call team is getting duplicate push notifications for resolved incidents and it's creating alert fatigue...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Mobile push alerts are too noisy</span>
                        <span class="text-muted shrink-0 text-xs">1d ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our on-call team is getting duplicate push notifications for resolved incidents and it's creating alert fatigue...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Unexpected archive rule triggered2d agoA batch of recently updated records was archived overnight even though their status should have kept them active..." type="button" @click="openAction(&quot;Unexpected archive rule triggered2d agoA batch of recently updated records was archived overnight even though their status should have kept them active...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Unexpected archive rule triggered</span>
                        <span class="text-muted shrink-0 text-xs">2d ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">A batch of recently updated records was archived overnight even though their status should have kept them active...</p>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Can we merge duplicate contacts2d agoWe imported the same customer list twice and now several contacts appear duplicated across the workspace..." type="button" @click="openAction(&quot;Can we merge duplicate contacts2d agoWe imported the same customer list twice and now several contacts appear duplicated across the workspace...&quot;)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm">Can we merge duplicate contacts</span>
                        <span class="text-muted shrink-0 text-xs">2d ago</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">We imported the same customer list twice and now several contacts appear duplicated across the workspace...</p>
                    </div>
                  </UButton>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden min-w-0 flex-1 overflow-hidden md:flex">
            <div class="bg-default flex h-full w-1/4 max-w-[320px] min-w-[240px] shrink-0 flex-col overflow-hidden border-r border-default">
              <div class="flex h-14 shrink-0 items-center border-b px-4 border-default">
                <div class="relative w-full">
                  <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                  <UInput v-model="form.searchThreads" type="text" placeholder="Search threads..." name="searchThreads" class="flex w-full rounded-md text-base md:text-sm h-9 pl-9" :ui="{ base: 'h-full' }" />
                </div>
              </div>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-muted border-default" aria-label="Trouble connecting Slack integration6h agoOur team is trying to connect Slack with CloudStar, but the authorization process fails with...Peter is responding..." type="button" @click="openAction(&quot;Trouble connecting Slack integration6h agoOur team is trying to connect Slack with CloudStar, but the authorization process fails with...Peter is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm font-semibold">Trouble connecting Slack integration</span>
                          <span class="text-muted shrink-0 text-xs">6h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our team is trying to connect Slack with CloudStar, but the authorization process fails with...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span>Peter is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Missing files in shared workspace6h agoYesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no...Alex is responding..." type="button" @click="openAction(&quot;Missing files in shared workspace6h agoYesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no...Alex is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm font-semibold">Missing files in shared workspace</span>
                          <span class="text-muted shrink-0 text-xs">6h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Yesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Alex Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <span>Alex is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Billing discrepancy on latest invoice8h agoOur invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review...Peter is responding..." type="button" @click="openAction(&quot;Billing discrepancy on latest invoice8h agoOur invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review...Peter is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Billing discrepancy on latest invoice</span>
                          <span class="text-muted shrink-0 text-xs">8h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span>Peter is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Can't reset my password12h agoI tried to reset my CloudStar password using the &quot;Forgot Password&quot; link, but the reset email never...Alex is responding..." type="button" @click="openAction(&quot;Can't reset my password12h agoI tried to reset my CloudStar password using the \&quot;Forgot Password\&quot; link, but the reset email never...Alex is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Can't reset my password</span>
                          <span class="text-muted shrink-0 text-xs">12h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">I tried to reset my CloudStar password using the &quot;Forgot Password&quot; link, but the reset email never...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Alex Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <span>Alex is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Dashboard analytics not updating1d agoThe analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t..." type="button" @click="openAction(&quot;Dashboard analytics not updating1d agoThe analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Dashboard analytics not updating</span>
                          <span class="text-muted shrink-0 text-xs">1d ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">The analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at t...</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Request for HIPAA compliance details2w agoBefore we move forward with onboarding, our legal team would like documentation on CloudSt..." type="button" @click="openAction(&quot;Request for HIPAA compliance details2w agoBefore we move forward with onboarding, our legal team would like documentation on CloudSt...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Request for HIPAA compliance details</span>
                          <span class="text-muted shrink-0 text-xs">2w ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Before we move forward with onboarding, our legal team would like documentation on CloudSt...</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Need SAML metadata refreshed3h agoOur identity provider rotated certificates overnight and SSO logins started failing for a subset of users...Alex is responding..." type="button" @click="openAction(&quot;Need SAML metadata refreshed3h agoOur identity provider rotated certificates overnight and SSO logins started failing for a subset of users...Alex is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm font-semibold">Need SAML metadata refreshed</span>
                          <span class="text-muted shrink-0 text-xs">3h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our identity provider rotated certificates overnight and SSO logins started failing for a subset of users...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Alex Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <span>Alex is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 bg-(--ui-bg-muted)/30 border-default" aria-label="Webhook delivery failing for staging5h agoDeliveries to our staging webhook endpoint started returning 401 after yesterday's secret rotation...Peter is responding..." type="button" @click="openAction(&quot;Webhook delivery failing for staging5h agoDeliveries to our staging webhook endpoint started returning 401 after yesterday's secret rotation...Peter is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm font-semibold">Webhook delivery failing for staging</span>
                          <span class="text-muted shrink-0 text-xs">5h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Deliveries to our staging webhook endpoint started returning 401 after yesterday's secret rotation...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span>Peter is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Can we export audit logs by date range9h agoOur security team needs an audit log export for the last 30 days, filtered down to admin permission changes...Alex is responding..." type="button" @click="exportCsv()">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Can we export audit logs by date range</span>
                          <span class="text-muted shrink-0 text-xs">9h ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our security team needs an audit log export for the last 30 days, filtered down to admin permission changes...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Alex Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <span>Alex is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Mobile push alerts are too noisy1d agoOur on-call team is getting duplicate push notifications for resolved incidents and it's creating alert fatigue...Peter is responding..." type="button" @click="openAction(&quot;Mobile push alerts are too noisy1d agoOur on-call team is getting duplicate push notifications for resolved incidents and it's creating alert fatigue...Peter is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Mobile push alerts are too noisy</span>
                          <span class="text-muted shrink-0 text-xs">1d ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">Our on-call team is getting duplicate push notifications for resolved incidents and it's creating alert fatigue...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span>Peter is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Unexpected archive rule triggered2d agoA batch of recently updated records was archived overnight even though their status should have kept them active..." type="button" @click="openAction(&quot;Unexpected archive rule triggered2d agoA batch of recently updated records was archived overnight even though their status should have kept them active...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Unexpected archive rule triggered</span>
                          <span class="text-muted shrink-0 text-xs">2d ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">A batch of recently updated records was archived overnight even though their status should have kept them active...</p>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" aria-label="Can we merge duplicate contacts2d agoWe imported the same customer list twice and now several contacts appear duplicated across the workspace...Peter is responding..." type="button" @click="openAction(&quot;Can we merge duplicate contacts2d agoWe imported the same customer list twice and now several contacts appear duplicated across the workspace...Peter is responding...&quot;)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm">Can we merge duplicate contacts</span>
                          <span class="text-muted shrink-0 text-xs">2d ago</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">We imported the same customer list twice and now several contacts appear duplicated across the workspace...</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-4">
                            <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span>Peter is responding...</span>
                        </div>
                      </div>
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
              <header class="bg-default flex h-14 shrink-0 items-center justify-between border-b px-4 border-default">
                <div class="flex min-w-0 items-center gap-3">
                  <UIcon name="i-lucide-message-square" class="size-5 shrink-0" />
                  <span class="truncate font-medium">Re: Trouble connecting Slack integration</span>
                </div>
                <div class="flex items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-1.5" aria-label="active" type="button" @click="openAction(&quot;active&quot;)">
                    <span class="size-2 rounded-full bg-success" />
                    <span class="capitalize">active</span>
                    <UIcon name="i-lucide-chevron-down" class="size-3" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-panel-right" class="size-4 text-primary" />
                  </UButton>
                </div>
              </header>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <div class="px-6 py-6 lg:px-10">
                      <div class="mx-auto flex max-w-3xl flex-col gap-8">
                        <div class="flex flex-col gap-3">
                          <div class="flex items-start gap-3">
                            <span class="relative flex overflow-hidden rounded-full mt-0.5 size-10 shrink-0">
                              <img class="aspect-square h-full w-full" alt="Sarah Tran" src="/reference/734275e170a0e3d0.webp" loading="lazy" />
                            </span>
                            <div class="min-w-0 flex-1">
                              <div class="flex items-center gap-2">
                                <span class="font-medium">Sarah Tran</span>
                              </div>
                              <div class="text-muted flex items-center gap-2 text-sm">
                                <span>From</span>
                                <span>sarah.tran@example.com</span>
                              </div>
                              <span class="text-muted text-xs">Aug 29, 8:03 AM</span>
                            </div>
                          </div>
                          <div class="pl-13 text-sm leading-relaxed whitespace-pre-wrap">Hi CloudStar Support,

Our team is trying to connect Slack with CloudStar, but the authorization process fails with the following error message: &quot;OAuth token invalid.&quot;

We've tried reconnecting a couple of times and even restarted the workspace, but no luck.

Could you help us get this integration working?

Thanks,
Sarah Tran
Ops Manager, BrightWave Marketing</div>
                        </div>
                        <div class="flex flex-col gap-3">
                          <div class="flex items-start gap-3">
                            <span class="relative flex overflow-hidden rounded-full mt-0.5 size-10 shrink-0">
                              <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                            </span>
                            <div class="min-w-0 flex-1">
                              <div class="flex items-center gap-2">
                                <span class="font-medium">Peter Lann</span>
                                <div class="inline-flex items-center rounded-md border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 px-1.5 text-[10px] border-default">Staff</div>
                              </div>
                              <div class="text-muted flex items-center gap-2 text-sm">
                                <span>From</span>
                                <span>peter.lann@cloudstar.com</span>
                              </div>
                              <span class="text-muted text-xs">Aug 29, 12:56 PM</span>
                            </div>
                          </div>
                          <div class="pl-13 text-sm leading-relaxed whitespace-pre-wrap">Hi Sarah,

Thanks for reaching out - happy to help! That error usually happens when Slack doesn't grant CloudStar the right permissions during the connection step. Here are a few things to try:

1. Make sure you're logged into the correct Slack workspace before starting the connection.
2. When prompted, grant all requested permissions to CloudStar (sometimes &quot;Deny&quot; is clicked accidentally).
3. Try using a private/incognito browser window to rule out cached credentials.

Let me know if that helps or if you're still seeing the error!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-default shrink-0 border-t px-6 py-4 lg:px-10 border-default">
                <div class="bg-(--ui-bg-muted)/30 mx-auto max-w-3xl rounded-lg border border-default">
                  <div class="flex items-center gap-2 border-b px-3 py-2 border-default">
                    <UIcon name="i-lucide-arrow-left" class="text-muted size-4 shrink-0 rotate-[135deg]" />
                    <span class="text-muted truncate text-sm">sarah.tran@example.com</span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md ml-auto h-6 shrink-0 px-2 text-xs" aria-label="Cc" type="button" @click="openAction(&quot;Cc&quot;)">
                      Cc
                    </UButton>
                  </div>
                  <UTextarea v-model="form.writeAReply" :rows="4" placeholder="Write a reply..." name="writeAReply" class="flex w-full rounded-md text-base md:text-sm min-h-[80px] resize-none md:min-h-[100px]" :ui="{ base: 'h-full' }" />
                  <div class="flex flex-wrap items-center justify-between gap-2 border-t px-3 py-2 border-default">
                    <div class="flex items-center gap-2">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 shrink-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                      <span class="text-muted hidden text-xs sm:inline">
                        Use 
                        <UKbd class="bg-muted rounded px-1">/</UKbd>
                         for shortcuts
                      </span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="text-muted hidden items-center gap-1.5 text-xs sm:flex">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-5">
                          <img class="aspect-square h-full w-full" alt="Peter Lann" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                        </span>
                        <span>Peter is responding...</span>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-1" aria-label="Close" type="button" @click="openAction(&quot;Close&quot;)">
                        Close
                        <UIcon name="i-lucide-chevron-down" class="size-3" />
                      </UButton>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs gap-1" aria-label="Send" type="button" @click="openAction(&quot;Send&quot;)">
                        <UIcon name="i-lucide-send" class="size-3" />
                        Send
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-default flex h-full w-1/4 max-w-[360px] min-w-[280px] shrink-0 flex-col overflow-hidden border-l border-default">
              <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 border-default">
                <UIcon name="i-lucide-sparkles" class="size-4" />
                <span class="font-semibold">Inbox Agent</span>
              </div>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <div class="flex flex-col gap-6 p-4">
                      <section class="flex flex-col gap-3">
                        <div class="min-w-0">
                          <div class="font-medium">Sarah Tran</div>
                          <div class="text-muted mt-1 text-sm leading-6">Ops Manager, BrightWave Marketing</div>
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 mt-3 border-warning bg-warning/10 text-warning dark:bg-warning dark:text-warning">High value customer</div>
                        </div>
                      </section>
                      <section class="flex flex-col gap-3">
                        <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Signals</p>
                        <div class="flex flex-col gap-3">
                          <div class="border-primary/15 border-l-2 pl-3 text-sm leading-6">Customer seems calm, but has potential to become frustrated. Likely non-technical as she hasn't read the documentation guide on the Slack integration.</div>
                          <div class="border-primary/15 border-l-2 pl-3 text-sm leading-6">Peter replied with the necessary details to fix her issue, but she has yet to confirm whether or not her issue has been resolved.</div>
                        </div>
                      </section>
                      <section class="flex flex-col gap-3">
                        <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Suggested follow up</p>
                        <p class="text-muted text-sm leading-6">If the customer doesn't reply within the next 12 hours a follow up should be sent:</p>
                        <div class="bg-default rounded-xl border px-4 py-4 text-sm leading-6 whitespace-pre-wrap border-default">Hi Sarah, just following up to see if you managed to get the integration working?

If you're still struggling, I'd be happy to schedule a call to make sure we can get you up and running.

Regards, Peter Lann</div>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 w-full gap-2" aria-label="Schedule follow up" type="button" @click="openAction(&quot;Schedule follow up&quot;)">
                          <UIcon name="i-lucide-clock" class="size-4" />
                          Schedule follow up
                        </UButton>
                      </section>
                      <section class="flex flex-col gap-3">
                        <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Previous conversations</p>
                        <div class="overflow-hidden rounded-xl border border-default">
                          <UButton color="neutral" variant="outline" class="hover:bg-muted flex w-full items-start justify-between gap-2 border-b p-3 text-left last:border-b-0 border-default" aria-label="Trouble connecting Slack integration6h ago" type="button" @click="openAction(&quot;Trouble connecting Slack integration6h ago&quot;)">
                            <span class="line-clamp-2 text-sm">Trouble connecting Slack integration</span>
                            <span class="text-muted shrink-0 text-xs">6h ago</span>
                          </UButton>
                          <UButton color="neutral" variant="outline" class="hover:bg-muted flex w-full items-start justify-between gap-2 border-b p-3 text-left last:border-b-0 border-default" aria-label="API token expiry2w ago" type="button" @click="openAction(&quot;API token expiry2w ago&quot;)">
                            <span class="line-clamp-2 text-sm">API token expiry</span>
                            <span class="text-muted shrink-0 text-xs">2w ago</span>
                          </UButton>
                        </div>
                      </section>
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
