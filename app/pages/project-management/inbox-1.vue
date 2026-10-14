<!-- Page: /project-management/inbox-1 | Local support inbox demo: search, selection, replies and a suggestion panel. -->
<script setup lang="ts">
useHead({ title: 'Inbox 1 · Blocks Admin' })

// @copy:inbox-base:start
import { computed, ref } from 'vue'

function inboxInitials(name: string) { return name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() }
function inboxClock(value: string) { return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }).format(new Date(value)) }
// @copy:inbox-base:end

// @copy:inbox-data:start
type InboxMessage = { id: string, author: string, email: string, initials: string, staff: boolean, time: string, body: string }
type InboxThread = {
  id: string, subject: string, contact: string, email: string, initials: string, role: string, tag: string,
  preview: string, received: string, unread: boolean, responder: string, signals: string[], followUp: string, messages: InboxMessage[]
}

const inboxThreads = ref<InboxThread[]>([
  {
    id: 'slack-auth', subject: 'Trouble connecting Slack integration', contact: 'Sarah Tran', email: 'sarah.tran@example.com',
    initials: 'ST', role: 'Ops Manager, BrightWave Marketing', tag: 'High value customer',
    preview: 'Our team is trying to connect Slack with CloudStar, but the authorization process fails with "OAuth token invalid."',
    received: '2026-08-29T08:03:00Z', unread: true, responder: 'Peter Lann',
    signals: ['Customer seems calm, but has potential to become frustrated. Likely non-technical as she hasn\u2019t read the documentation guide on the Slack integration.', 'Peter replied with the necessary details to fix her issue, but she has yet to confirm whether or not her issue has been resolved.'],
    followUp: 'Hi Sarah, just following up to see if you managed to get the integration working?\n\nIf you\u2019re still struggling, I\u2019d be happy to schedule a call to make sure we can get you up and running.\n\nRegards, Peter Lann',
    messages: [
      { id: 'slack-auth-1', author: 'Sarah Tran', email: 'sarah.tran@example.com', initials: 'ST', staff: false, time: '2026-08-29T08:03:00Z', body: 'Hi CloudStar Support,\n\nOur team is trying to connect Slack with CloudStar, but the authorization process fails with the following error message: "OAuth token invalid."\n\nWe\u2019ve tried reconnecting a couple of times and even restarted the workspace, but no luck.\n\nCould you help us get this integration working?\n\nThanks,\nSarah Tran\nOps Manager, BrightWave Marketing' },
      { id: 'slack-auth-2', author: 'Peter Lann', email: 'peter.lann@cloudstar.com', initials: 'PL', staff: true, time: '2026-08-29T12:56:00Z', body: 'Hi Sarah,\n\nThanks for reaching out - happy to help! That error usually happens when Slack doesn\u2019t grant CloudStar the right permissions during the connection step. Here are a few things to try:\n\n1. Make sure you\u2019re logged into the correct Slack workspace before starting the connection.\n2. When prompted, grant all requested permissions to CloudStar (sometimes "Deny" is clicked accidentally).\n3. Try using a private/incognito browser window to rule out cached credentials.\n\nLet me know if that helps or if you\u2019re still seeing the error!' },
    ],
  },
  {
    id: 'missing-files', subject: 'Missing files in shared workspace', contact: 'Alex Chen', email: 'alex.chen@example.com',
    initials: 'AC', role: 'Operations Analyst', tag: '',
    preview: 'Yesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no longer visible.',
    received: '2026-08-29T07:40:00Z', unread: true, responder: 'Alex Chen',
    signals: ['Files disappeared after an overnight sync, so the workspace snapshot may be stale.'],
    followUp: 'Hi Alex, checking back on the two missing files - do they appear after a hard refresh of the shared workspace?',
    messages: [
      { id: 'missing-files-1', author: 'Alex Chen', email: 'alex.chen@example.com', initials: 'AC', staff: false, time: '2026-08-29T07:40:00Z', body: 'Yesterday I uploaded a set of project files to our shared workspace. Today, two of the files are no longer visible.\n\nThey are still listed in the activity feed, so I don\u2019t think they were deleted on purpose.' },
      { id: 'missing-files-2', author: 'Alex Chen', email: 'alex.chen@example.com', initials: 'AC', staff: false, time: '2026-08-29T07:44:00Z', body: 'I can still see them in the trash view, but restoring them has no effect on the file list.' },
    ],
  },
  {
    id: 'billing-invoice', subject: 'Billing discrepancy on latest invoice', contact: 'Dana Ruiz', email: 'dana.ruiz@example.com',
    initials: 'DR', role: 'Finance Lead', tag: '',
    preview: 'Our invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review the seat count?',
    received: '2026-08-29T06:15:00Z', unread: false, responder: 'Peter Lann',
    signals: ['Seat count mismatch is a billing question, so route it to the billing queue.'],
    followUp: 'Hi Dana, the invoice shows seats reserved on August 1. Two of them were released on August 12 - I have queued a review.',
    messages: [
      { id: 'billing-invoice-1', author: 'Dana Ruiz', email: 'dana.ruiz@example.com', initials: 'DR', staff: false, time: '2026-08-29T06:15:00Z', body: 'Our invoice for this month shows 10 Pro licenses, but we only have 8 active users. Can you review the seat count?\n\nHappy to send the workspace export if that helps.' },
      { id: 'billing-invoice-2', author: 'Peter Lann', email: 'peter.lann@cloudstar.com', initials: 'PL', staff: true, time: '2026-08-29T09:05:00Z', body: 'Hi Dana,\n\nThanks for flagging this. The invoice counts seats that were reserved on August 1, including two seats released on August 12. I am asking billing to confirm the proration.' },
    ],
  },
  {
    id: 'password-reset', subject: "Can't reset my password", contact: 'Marta Silva', email: 'marta.silva@example.com',
    initials: 'MS', role: 'Coordinator', tag: '',
    preview: 'I tried to reset my CloudStar password using the "Forgot Password" link, but the reset email never arrives.',
    received: '2026-08-28T20:10:00Z', unread: false, responder: 'Alex Chen',
    signals: ['Reset emails may be blocked by the customer mail filter; ask them to allow the sender domain.'],
    followUp: 'Hi Marta, if the reset email is still missing, reply here and I will start a manual verification instead.',
    messages: [
      { id: 'password-reset-1', author: 'Marta Silva', email: 'marta.silva@example.com', initials: 'MS', staff: false, time: '2026-08-28T20:10:00Z', body: 'I tried to reset my CloudStar password using the "Forgot Password" link, but the reset email never arrives.\n\nI checked spam and the promotions folder.' },
    ],
  },
  {
    id: 'analytics-stuck', subject: 'Dashboard analytics not updating', contact: 'Tom Becker', email: 'tom.becker@example.com',
    initials: 'TB', role: 'Data Steward', tag: '',
    preview: 'The analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at the same values.',
    received: '2026-08-28T09:30:00Z', unread: false, responder: 'Alex Chen',
    signals: ['Charts frozen at a fixed timestamp usually means the data pipeline job failed.'],
    followUp: 'Hi Tom, the pipeline job for your workspace is queued again - I will confirm once the charts catch up.',
    messages: [
      { id: 'analytics-stuck-1', author: 'Tom Becker', email: 'tom.becker@example.com', initials: 'TB', staff: false, time: '2026-08-28T09:30:00Z', body: 'The analytics dashboard stopped updating yesterday around 3 PM. All charts are stuck at the same values.\n\nRefreshing the page does not help.' },
    ],
  },
  {
    id: 'hipaa-docs', subject: 'Request for HIPAA compliance details', contact: 'Priya Nair', email: 'priya.nair@example.com',
    initials: 'PN', role: 'Compliance Counsel', tag: '',
    preview: 'Before we move forward with onboarding, our legal team would like documentation on CloudStar data handling.',
    received: '2026-08-15T14:00:00Z', unread: false, responder: 'Peter Lann',
    signals: ['Legal documentation requests should be answered by the security team, not support.'],
    followUp: 'Hi Priya, the security overview and sub-processor list are attached to this thread for your legal review.',
    messages: [
      { id: 'hipaa-docs-1', author: 'Priya Nair', email: 'priya.nair@example.com', initials: 'PN', staff: false, time: '2026-08-15T14:00:00Z', body: 'Before we move forward with onboarding, our legal team would like documentation on CloudStar data handling, retention and encryption at rest.' },
    ],
  },
  {
    id: 'saml-metadata', subject: 'Need SAML metadata refreshed', contact: 'Iris Vogel', email: 'iris.vogel@example.com',
    initials: 'IV', role: 'IT Administrator', tag: '',
    preview: 'Our identity provider rotated certificates overnight and SSO logins started failing for a subset of users.',
    received: '2026-08-29T05:20:00Z', unread: true, responder: 'Alex Chen',
    signals: ['Certificate rotation breaks SSO until the new metadata is imported.'],
    followUp: 'Hi Iris, upload the new metadata file here and I will confirm the login test results.',
    messages: [
      { id: 'saml-metadata-1', author: 'Iris Vogel', email: 'iris.vogel@example.com', initials: 'IV', staff: false, time: '2026-08-29T05:20:00Z', body: 'Our identity provider rotated certificates overnight and SSO logins started failing for a subset of users.\n\nThe error mentions an untrusted signing certificate.' },
    ],
  },
  {
    id: 'webhook-401', subject: 'Webhook delivery failing for staging', contact: 'Ravi Menon', email: 'ravi.menon@example.com',
    initials: 'RM', role: 'Platform Engineer', tag: '',
    preview: 'Deliveries to our staging webhook endpoint started returning 401 after yesterday\u2019s secret rotation.',
    received: '2026-08-29T03:45:00Z', unread: true, responder: 'Peter Lann',
    signals: ['A 401 after a secret rotation means the endpoint still validates the previous secret.'],
    followUp: 'Hi Ravi, once you accept the new signing secret in staging, retry the failed deliveries from the webhook log.',
    messages: [
      { id: 'webhook-401-1', author: 'Ravi Menon', email: 'ravi.menon@example.com', initials: 'RM', staff: false, time: '2026-08-29T03:45:00Z', body: 'Deliveries to our staging webhook endpoint started returning 401 after yesterday\u2019s secret rotation.\n\nProduction still works, so the rotation only applied to staging.' },
    ],
  },
  {
    id: 'audit-export', subject: 'Can we export audit logs by date range', contact: 'Lena Fischer', email: 'lena.fischer@example.com',
    initials: 'LF', role: 'Security Analyst', tag: '',
    preview: 'Our security team needs an audit log export for the last 30 days, filtered down to admin permission changes.',
    received: '2026-08-28T23:05:00Z', unread: false, responder: 'Alex Chen',
    signals: ['Audit exports are an admin-only feature; confirm the requester has the right role.'],
    followUp: 'Hi Lena, I enabled the audit export filter for your workspace so you can download the 30-day window yourself.',
    messages: [
      { id: 'audit-export-1', author: 'Lena Fischer', email: 'lena.fischer@example.com', initials: 'LF', staff: false, time: '2026-08-28T23:05:00Z', body: 'Our security team needs an audit log export for the last 30 days, filtered down to admin permission changes.\n\nCSV or JSON both work for us.' },
    ],
  },
  {
    id: 'push-alerts', subject: 'Mobile push alerts are too noisy', contact: 'Owen Hart', email: 'owen.hart@example.com',
    initials: 'OH', role: 'On-call Engineer', tag: '',
    preview: 'Our on-call team is getting duplicate push notifications for resolved incidents and it\u2019s creating alert fatigue.',
    received: '2026-08-28T11:15:00Z', unread: false, responder: 'Peter Lann',
    signals: ['Duplicate pushes for resolved incidents point at a stale notification queue.'],
    followUp: 'Hi Owen, I have throttled the push channel for your workspace and will confirm once the queue drains.',
    messages: [
      { id: 'push-alerts-1', author: 'Owen Hart', email: 'owen.hart@example.com', initials: 'OH', staff: false, time: '2026-08-28T11:15:00Z', body: 'Our on-call team is getting duplicate push notifications for resolved incidents and it\u2019s creating alert fatigue.\n\nIt happens mostly overnight.' },
    ],
  },
  {
    id: 'archive-rule', subject: 'Unexpected archive rule triggered', contact: 'Nadia Petrov', email: 'nadia.petrov@example.com',
    initials: 'NP', role: 'Workspace Owner', tag: '',
    preview: 'A batch of recently updated records was archived overnight even though their status should have kept them active.',
    received: '2026-08-27T16:40:00Z', unread: false, responder: 'Peter Lann',
    signals: ['The archive rule probably matched on the updated date instead of the record status.'],
    followUp: 'Hi Nadia, I paused the archive rule and restored the affected records from the activity log.',
    messages: [
      { id: 'archive-rule-1', author: 'Nadia Petrov', email: 'nadia.petrov@example.com', initials: 'NP', staff: false, time: '2026-08-27T16:40:00Z', body: 'A batch of recently updated records was archived overnight even though their status should have kept them active.\n\nWe did not change any rules ourselves.' },
    ],
  },
  {
    id: 'merge-contacts', subject: 'Can we merge duplicate contacts', contact: 'Sofia Marín', email: 'sofia.marin@example.com',
    initials: 'SM', role: 'Revenue Operations', tag: '',
    preview: 'We imported the same customer list twice and now several contacts appear duplicated across the workspace.',
    received: '2026-08-27T10:05:00Z', unread: false, responder: 'Peter Lann',
    signals: ['A double import creates duplicate keys that the merge tool can resolve by email.'],
    followUp: 'Hi Sofia, the merge preview now groups the duplicates by email - confirm and I will apply it locally.',
    messages: [
      { id: 'merge-contacts-1', author: 'Sofia Marín', email: 'sofia.marin@example.com', initials: 'SM', staff: false, time: '2026-08-27T10:05:00Z', body: 'We imported the same customer list twice and now several contacts appear duplicated across the workspace.\n\nIs there a safe merge tool?' },
    ],
  },
])

const inboxSearch = ref('')
const inboxSelectedId = ref(inboxThreads.value[0]!.id)
const inboxStatusFilter = ref('All')

const inboxMatches = computed(() => {
  const query = inboxSearch.value.trim().toLowerCase()
  return inboxThreads.value
    .filter(thread => (inboxStatusFilter.value === 'All' || (inboxStatusFilter.value === 'Unread' ? thread.unread : !thread.unread)))
    .filter(thread => !query || `${thread.contact} ${thread.subject} ${thread.preview}`.toLowerCase().includes(query))
})
const inboxSelected = computed(() => inboxThreads.value.find(thread => thread.id === inboxSelectedId.value) || inboxThreads.value[0]!)
const inboxUnreadCount = computed(() => inboxThreads.value.filter(thread => thread.unread).length)
const inboxStatusItems = computed(() => ['Open', 'Pending', 'Closed'].map(status => ({
  label: `Mark as ${status}`,
  icon: status === 'Open' ? 'i-lucide-circle-dot' : status === 'Pending' ? 'i-lucide-clock' : 'i-lucide-circle-check',
  onSelect: () => selectInboxThreadStatus(status),
})))
const inboxStatusColor = computed(() => inboxSelected.value.status === 'Open' ? 'success' : inboxSelected.value.status === 'Pending' ? 'warning' : 'neutral')

function selectInboxThread(id: string) {
  inboxSelectedId.value = id
  const thread = inboxThreads.value.find(item => item.id === id)
  if (thread) thread.unread = false
}
function selectInboxThreadStatus(status: string) { inboxSelected.value.status = status }
// @copy:inbox-data:end

// @copy:inbox-reply:start
const inboxReply = ref('')
const inboxNotice = ref('')
function sendInboxReply() {
  const body = inboxReply.value.trim()
  if (!body) { inboxNotice.value = 'Write a reply before sending. Nothing was sent.'; return }
  inboxSelected.value.messages.push({
    id: `${inboxSelected.value.id}-local-${inboxSelected.value.messages.length + 1}`,
    author: 'Peter Lann', email: 'peter.lann@cloudstar.com', initials: 'PL', staff: true,
    time: new Date().toISOString(), body,
  })
  inboxReply.value = ''
  inboxNotice.value = 'Reply added to this local conversation only. No server was contacted and no email was sent.'
}
function applyInboxFollowUp() { inboxReply.value = inboxSelected.value.followUp; inboxNotice.value = 'Suggested follow-up inserted into the reply box. It has not been sent.' }
// @copy:inbox-reply:end

// @copy:inbox-schedule:start
const inboxScheduleOpen = ref(false)
const inboxScheduleWhen = ref('tomorrow')
const inboxScheduleWhens = [
  { label: 'In 1 hour', value: 'hour' }, { label: 'Tomorrow morning', value: 'tomorrow' }, { label: 'Next Monday', value: 'week' },
]
const inboxScheduleNotice = ref('')
function confirmInboxSchedule() {
  const label = inboxScheduleWhens.find(option => option.value === inboxScheduleWhen.value)?.label || inboxScheduleWhen.value
  inboxScheduleNotice.value = `Follow-up reminder set for ${label} (local countdown only). No scheduler or email service was contacted.`
  inboxScheduleOpen.value = false
}
// @copy:inbox-schedule:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/inbox-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <!-- Mobile thread list -->
          <div class="flex min-h-0 flex-1 flex-col overflow-hidden md:hidden">
            <div class="flex h-14 shrink-0 items-center justify-between border-b px-4 border-default">
              <div class="flex min-w-0 items-center gap-2">
                <UIcon name="i-lucide-message-square" class="size-5 shrink-0" />
                <span class="truncate font-semibold">Inbox</span>
              </div>
              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">{{ inboxUnreadCount }} unread</div>
            </div>
            <div class="border-b px-4 py-3 border-default">
              <div class="relative">
                <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <UInput v-model="inboxSearch" type="text" placeholder="Search threads..." name="searchThreads" class="flex w-full rounded-md text-base md:text-sm h-9 pl-9" :ui="{ base: 'h-full' }" />
              </div>
              <p class="mt-2 text-xs text-muted" aria-live="polite">{{ inboxMatches.length }} of {{ inboxThreads.length }} conversations</p>
            </div>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&>[data-slot=scroll-area-viewport]>div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <UButton v-for="thread in inboxMatches" :key="thread.id" color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" :class="thread.id === inboxSelectedId ? 'bg-muted' : ''" :aria-label="`Open conversation: ${thread.subject}`" type="button" @click="selectInboxThread(thread.id)">
                    <div class="min-w-0">
                      <div class="flex items-center justify-between gap-2">
                        <span class="truncate text-sm" :class="thread.unread ? 'font-semibold' : ''">{{ thread.subject }}</span>
                        <span class="text-muted shrink-0 text-xs">{{ thread.contact }}</span>
                      </div>
                      <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">{{ thread.preview }}</p>
                      <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                        <span class="grid size-4 shrink-0 place-items-center rounded-full bg-muted text-[8px]">{{ inboxInitials(thread.responder) }}</span>
                        <span>{{ thread.responder }} is responding...</span>
                      </div>
                    </div>
                  </UButton>
                  <p v-if="!inboxMatches.length" class="p-4 text-sm text-muted">No conversations match this search.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Desktop three-pane layout -->
          <div class="hidden min-w-0 flex-1 overflow-hidden md:flex">
            <div class="bg-default flex h-full w-1/4 max-w-[320px] min-w-[240px] shrink-0 flex-col overflow-hidden border-r border-default">
              <div class="flex h-14 shrink-0 items-center border-b px-4 border-default">
                <div class="relative w-full">
                  <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                  <UInput v-model="inboxSearch" type="text" placeholder="Search threads..." name="searchThreads" class="flex w-full rounded-md text-base md:text-sm h-9 pl-9" :ui="{ base: 'h-full' }" />
                </div>
              </div>
              <div class="flex shrink-0 items-center justify-between gap-2 border-b px-4 py-2 border-default">
                <span class="text-xs text-muted">Filter</span>
                <USelect v-model="inboxStatusFilter" :items="['All', 'Unread', 'Read']" aria-label="Filter conversations by read state" class="w-32" size="xs" />
              </div>
              <p class="shrink-0 border-b px-4 py-2 text-xs text-muted" aria-live="polite">{{ inboxMatches.length }} of {{ inboxThreads.length }} conversations · {{ inboxUnreadCount }} unread</p>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&>[data-slot=scroll-area-viewport]>div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <UButton v-for="thread in inboxMatches" :key="thread.id" color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/50 w-full border-b p-4 text-left text-sm leading-tight last:border-b-0 border-default" :class="thread.id === inboxSelectedId ? 'bg-muted' : ''" :aria-label="`Open conversation: ${thread.subject}`" type="button" @click="selectInboxThread(thread.id)">
                      <div class="min-w-0">
                        <div class="flex items-center justify-between gap-2">
                          <span class="truncate text-sm" :class="thread.unread ? 'font-semibold' : ''">{{ thread.subject }}</span>
                          <span class="text-muted shrink-0 text-xs">{{ thread.contact }}</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-relaxed">{{ thread.preview }}</p>
                        <div class="text-muted mt-2 flex items-center gap-1.5 text-xs">
                          <span class="grid size-4 shrink-0 place-items-center rounded-full bg-muted text-[8px]">{{ inboxInitials(thread.responder) }}</span>
                          <span>{{ thread.responder }} is responding...</span>
                        </div>
                      </div>
                    </UButton>
                    <p v-if="!inboxMatches.length" class="p-4 text-sm text-muted">No conversations match this search or filter.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
              <section data-copy-block="inbox-message" tabindex="0" aria-label="Selected conversation thread" class="flex min-h-0 flex-1 flex-col overflow-hidden">
                <header class="bg-default flex h-14 shrink-0 items-center justify-between border-b px-4 border-default">
                  <div class="flex min-w-0 items-center gap-3">
                    <UIcon name="i-lucide-message-square" class="size-5 shrink-0" />
                    <span class="truncate font-medium">Re: {{ inboxSelected.subject }}</span>
                    <UBadge :label="inboxSelected.status" :color="inboxStatusColor" variant="subtle" size="xs" />
                  </div>
                  <div class="flex items-center gap-2">
                    <UButton color="neutral" variant="outline" class="h-8 gap-1.5 px-3 text-xs" aria-label="Change conversation status" type="button">
                      <span class="size-2 rounded-full" :class="inboxSelected.status === 'Open' ? 'bg-success' : inboxSelected.status === 'Pending' ? 'bg-warning' : 'bg-error'" />
                      <span class="capitalize">{{ inboxSelected.status }}</span>
                      <UIcon name="i-lucide-chevron-down" class="size-3" />
                    </UButton>
                    <UDropdownMenu :items="inboxStatusItems" :content="{ align: 'end' }">
                      <UButton color="neutral" variant="soft" class="size-8" aria-label="Conversation actions" icon="i-lucide-panel-right" />
                    </UDropdownMenu>
                  </div>
                </header>
                <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                  <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                    <div style="min-width:100%;display:table">
                      <div class="px-6 py-6 lg:px-10">
                        <div class="mx-auto flex max-w-3xl flex-col gap-8">
                          <article v-for="message in inboxSelected.messages" :key="message.id" class="flex flex-col gap-3" :data-inbox-message="message.id">
                            <div class="flex items-start gap-3">
                              <span class="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-muted text-sm font-medium">{{ message.initials }}</span>
                              <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-2">
                                  <span class="font-medium">{{ message.author }}</span>
                                  <span v-if="message.staff" class="inline-flex h-5 items-center rounded-md border px-1.5 text-[10px] font-semibold border-transparent bg-elevated text-default border-default">Staff</span>
                                </div>
                                <div class="text-muted flex items-center gap-2 text-sm">
                                  <span>From</span>
                                  <span class="break-all">{{ message.email }}</span>
                                </div>
                                <time class="text-muted text-xs" :datetime="message.time">{{ inboxClock(message.time) }}</time>
                              </div>
                            </div>
                            <p class="pl-13 text-sm leading-relaxed whitespace-pre-wrap">{{ message.body }}</p>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section data-copy-block="inbox-compose" tabindex="0" aria-label="Reply composer" class="bg-default shrink-0 border-t px-6 py-4 lg:px-10 border-default">
                <div class="bg-(--ui-bg-muted)/30 mx-auto max-w-3xl rounded-lg border border-default">
                  <div class="flex items-center gap-2 border-b px-3 py-2 border-default">
                    <UIcon name="i-lucide-arrow-left" class="text-muted size-4 shrink-0 rotate-[135deg]" />
                    <span class="text-muted truncate text-sm">{{ inboxSelected.email }}</span>
                    <UButton color="neutral" variant="soft" class="ml-auto h-6 shrink-0 rounded-md px-2 text-xs" aria-label="Insert suggested follow-up" type="button" @click="applyInboxFollowUp">
                      Cc
                    </UButton>
                  </div>
                  <UTextarea v-model="inboxReply" :rows="4" placeholder="Write a reply..." name="writeAReply" class="flex w-full rounded-md text-base md:text-sm min-h-[80px] resize-none md:min-h-[100px]" :ui="{ base: 'h-full' }" />
                  <div class="flex flex-wrap items-center justify-between gap-2 border-t px-3 py-2 border-default">
                    <div class="flex items-center gap-2">
                      <UButton color="neutral" variant="soft" class="size-8 shrink-0" aria-label="Insert suggested follow-up" type="button" @click="applyInboxFollowUp">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                      <span class="text-muted hidden text-xs sm:inline">
                        Insert with
                        <UKbd class="bg-muted rounded px-1">+</UKbd>
                      </span>
                    </div>
                    <div class="flex items-center gap-2">
                      <div class="text-muted hidden items-center gap-1.5 text-xs sm:flex">
                        <span class="grid size-5 place-items-center rounded-full bg-muted text-[8px]">{{ inboxInitials(inboxSelected.responder) }}</span>
                        <span>{{ inboxSelected.responder }} is responding...</span>
                      </div>
                      <UButton color="primary" variant="solid" class="h-8 gap-1 rounded-md px-3 text-xs" aria-label="Send reply to the local conversation" type="button" @click="sendInboxReply">
                        <UIcon name="i-lucide-send" class="size-3" />
                        Send
                      </UButton>
                    </div>
                  </div>
                </div>
                <p v-if="inboxNotice" role="status" class="mx-auto mt-2 max-w-3xl text-xs text-muted">{{ inboxNotice }}</p>
              </section>
            </div>
            <aside data-copy-block="inbox-agent" tabindex="0" aria-label="Inbox agent suggestions" class="bg-default flex h-full w-1/4 max-w-[360px] min-w-[280px] shrink-0 flex-col overflow-hidden border-l border-default">
              <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 border-default">
                <UIcon name="i-lucide-sparkles" class="size-4" />
                <span class="font-semibold">Inbox Agent</span>
              </div>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&>[data-slot=scroll-area-viewport]>div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <div class="flex flex-col gap-6 p-4">
                      <section class="flex flex-col gap-3">
                        <div class="min-w-0">
                          <div class="font-medium">{{ inboxSelected.contact }}</div>
                          <div class="text-muted mt-1 text-sm leading-6">{{ inboxSelected.role }}</div>
                          <div class="text-muted mt-1 text-sm leading-6 break-all">{{ inboxSelected.email }}</div>
                          <div v-if="inboxSelected.tag" class="mt-3 inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-warning bg-warning/10 text-warning">{{ inboxSelected.tag }}</div>
                        </div>
                      </section>
                      <section class="flex flex-col gap-3">
                        <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Signals</p>
                        <div class="flex flex-col gap-3">
                          <p v-for="(signal, index) in inboxSelected.signals" :key="index" class="border-primary/15 border-l-2 pl-3 text-sm leading-6">{{ signal }}</p>
                        </div>
                      </section>
                      <section class="flex flex-col gap-3">
                        <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Suggested follow up</p>
                        <p class="text-muted text-sm leading-6">If the customer doesn&rsquo;t reply within the next 12 hours a follow up should be sent:</p>
                        <div class="bg-default rounded-xl border px-4 py-4 text-sm leading-6 whitespace-pre-wrap border-default">{{ inboxSelected.followUp }}</div>
                        <UButton color="neutral" variant="outline" class="h-9 w-full gap-2 px-4 py-2" aria-label="Insert the suggested follow-up into the reply" type="button" @click="applyInboxFollowUp">
                          <UIcon name="i-lucide-clock" class="size-4" />
                          Use this follow-up
                        </UButton>
                      </section>
                      <section class="flex flex-col gap-3">
                        <p class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Previous conversations</p>
                        <div class="overflow-hidden rounded-xl border border-default">
                          <UButton v-for="thread in inboxThreads.filter(item => item.id !== inboxSelectedId).slice(0, 3)" :key="thread.id" color="neutral" variant="outline" class="hover:bg-muted flex w-full items-start justify-between gap-2 border-b p-3 text-left last:border-b-0 border-default" :aria-label="`Open conversation: ${thread.subject}`" type="button" @click="selectInboxThread(thread.id)">
                            <span class="line-clamp-2 text-sm">{{ thread.subject }}</span>
                          </UButton>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <BlockCopyTools page="/project-management/inbox-1" />
  </div>
</template>
