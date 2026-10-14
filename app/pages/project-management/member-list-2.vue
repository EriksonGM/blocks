<!-- Page: /project-management/member-list-2 | Local member directory with search, sorting and invitation previews. -->
<script setup lang="ts">
useHead({ title: 'Member List 2 · Blocks Admin' })

// @copy:member-base:start
import { computed, ref } from 'vue'
import type { FormError } from '@nuxt/ui'
// @copy:member-base:end

// @copy:member-data:start
// Fictional demo members. Nothing here is fetched from a service.
type Member2Status = 'Available' | 'Away' | 'Offline'
const member2Members = ref<{ id: number, name: string, role: string, tier: 'Member' | 'Admin' | 'Guest', status: Member2Status, email: string, phone: string }[]>([
  { id: 1, name: 'Ava Reed', role: 'Experience owner', tier: 'Member', status: 'Available', email: 'ava.reed@example.com', phone: '+1 202 555 0101' },
  { id: 2, name: 'Ben Lewis', role: 'Field strategist', tier: 'Admin', status: 'Available', email: 'ben.lewis@example.com', phone: '+1 202 555 0102' },
  { id: 3, name: 'Chloe Park', role: 'Program lead', tier: 'Member', status: 'Available', email: 'chloe.park@example.com', phone: '+1 202 555 0103' },
  { id: 4, name: 'Dina Moss', role: 'Customer operations', tier: 'Guest', status: 'Offline', email: 'dina.moss@example.com', phone: '+1 202 555 0104' },
  { id: 5, name: 'Ethan Cole', role: 'Support partner', tier: 'Member', status: 'Available', email: 'ethan.cole@example.com', phone: '+1 202 555 0105' },
  { id: 6, name: 'Harper Singh', role: 'Planning lead', tier: 'Member', status: 'Offline', email: 'harper.singh@example.com', phone: '+1 202 555 0106' },
  { id: 7, name: 'Jules Hart', role: 'Release coordinator', tier: 'Member', status: 'Available', email: 'jules.hart@example.com', phone: '+1 202 555 0107' },
  { id: 8, name: 'Kabir Sethi', role: 'Planning lead', tier: 'Member', status: 'Available', email: 'kabir.sethi@example.com', phone: '+1 202 555 0108' },
  { id: 9, name: 'Leo Park', role: 'Field strategist', tier: 'Member', status: 'Available', email: 'leo.park@example.com', phone: '+1 202 555 0109' },
  { id: 10, name: 'Maya Rao', role: 'Delivery manager', tier: 'Member', status: 'Away', email: 'maya.rao@example.com', phone: '+1 202 555 0110' },
  { id: 11, name: 'Nina Brooks', role: 'Program lead', tier: 'Guest', status: 'Away', email: 'nina.brooks@example.com', phone: '+1 202 555 0111' },
  { id: 12, name: 'Owen Lee', role: 'Support partner', tier: 'Member', status: 'Offline', email: 'owen.lee@example.com', phone: '+1 202 555 0112' },
  { id: 13, name: 'Riya Sharma', role: 'Customer operations', tier: 'Admin', status: 'Available', email: 'riya.sharma@example.com', phone: '+1 202 555 0113' },
  { id: 14, name: 'Sofia Ahmed', role: 'Experience owner', tier: 'Admin', status: 'Away', email: 'sofia.ahmed@example.com', phone: '+1 202 555 0114' },
  { id: 15, name: 'Tia West', role: 'Delivery manager', tier: 'Member', status: 'Offline', email: 'tia.west@example.com', phone: '+1 202 555 0115' },
  { id: 16, name: 'Victor Hale', role: 'Release coordinator', tier: 'Admin', status: 'Away', email: 'victor.hale@example.com', phone: '+1 202 555 0116' },
])
const member2StatusMeta: Record<Member2Status, { dot: string, icon: string, text: string }> = {
  Available: { dot: 'bg-success', icon: 'i-lucide-circle-check', text: 'text-success' },
  Away: { dot: 'bg-warning', icon: 'i-lucide-clock-3', text: 'text-warning' },
  Offline: { dot: 'bg-(--ui-text-muted)', icon: 'i-lucide-circle-dot-dashed', text: 'text-muted' },
}
const member2Initials = (name: string) => name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase()
const member2TierColor = (tier: string) => tier === 'Admin' ? 'primary' : 'neutral'
// @copy:member-data:end

// @copy:member-filters:start
type Member2Sort = 'name-asc' | 'name-desc' | 'role' | 'status'
const member2SortLabels: Record<Member2Sort, string> = { 'name-asc': 'Name A–Z', 'name-desc': 'Name Z–A', role: 'Role', status: 'Status' }
const member2Search = ref('')
const member2Sort = ref<Member2Sort>('name-asc')
const member2AvailableOnly = ref(false)
const member2Density = ref<'comfortable' | 'compact'>('comfortable')
const member2Matches = computed(() => {
  const query = member2Search.value.trim().toLowerCase()
  const matched = member2Members.value.filter(member => (!query || `${member.name} ${member.role} ${member.email} ${member.tier}`.toLowerCase().includes(query)) && (!member2AvailableOnly.value || member.status === 'Available'))
  return [...matched].sort((a, b) => {
    if (member2Sort.value === 'name-desc') return b.name.localeCompare(a.name)
    if (member2Sort.value === 'role') return a.role.localeCompare(b.role) || a.name.localeCompare(b.name)
    if (member2Sort.value === 'status') return a.status.localeCompare(b.status) || a.name.localeCompare(b.name)
    return a.name.localeCompare(b.name)
  })
})
const member2Counts = computed(() => ({
  available: member2Members.value.filter(member => member.status === 'Available').length,
  admins: member2Members.value.filter(member => member.tier === 'Admin').length,
}))
function cycleMember2Sort() {
  const order: Member2Sort[] = ['name-asc', 'name-desc', 'role', 'status']
  member2Sort.value = order[(order.indexOf(member2Sort.value) + 1) % order.length]!
}
function toggleMember2AvailableOnly() { member2AvailableOnly.value = !member2AvailableOnly.value }
function cycleMember2Density() { member2Density.value = member2Density.value === 'comfortable' ? 'compact' : 'comfortable' }
// @copy:member-filters:end

// @copy:member-invite:start
const member2InviteOpen = ref(false)
const member2InviteDraft = ref({ name: '', email: '', tier: 'Member' as 'Member' | 'Admin' | 'Guest' })
const member2InviteError = ref('')
const member2InviteNotice = ref('')
let member2NextId = 17
function openMember2Invite() {
  member2InviteDraft.value = { name: '', email: '', tier: 'Member' }
  member2InviteError.value = ''
  member2InviteOpen.value = true
}
function validateMember2Invite(state: { name: string, email: string }): FormError[] {
  const errors: FormError[] = []
  if (!state.name.trim()) errors.push({ name: 'name', message: 'Enter a member name.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) errors.push({ name: 'email', message: 'Enter a valid example email address.' })
  return errors
}
function saveMember2Invite() {
  if (validateMember2Invite(member2InviteDraft.value).length) return
  member2Members.value.push({ id: member2NextId++, name: member2InviteDraft.value.name.trim(), role: 'Invited preview', tier: member2InviteDraft.value.tier, status: 'Offline', email: member2InviteDraft.value.email.trim(), phone: 'Not provided' })
  member2InviteNotice.value = `${member2InviteDraft.value.name.trim()} added to this local list only. No invitation email was sent.`
  member2InviteOpen.value = false
}
// @copy:member-invite:end

// @copy:member-contact:start
const member2ContactId = ref(0)
const member2ContactOpen = ref(false)
const member2Contact = computed(() => member2Members.value.find(member => member.id === member2ContactId.value))
function openMember2Contact(id: number) {
  member2ContactId.value = id
  member2ContactOpen.value = true
}
// @copy:member-contact:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/member-list-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <section data-copy-block="member2-toolbar" tabindex="0" aria-label="Member directory toolbar and search" class="border-default border-b dark:bg-[var(--ui-bg-inverted)]/95">
            <div class="flex flex-col gap-2 px-4 py-3 sm:px-6 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium dark:text-highlighted">
                  <span class="truncate">Members</span>
                  <span class="bg-muted text-muted shrink-0 rounded-md px-1.5 py-0.5 text-xs dark:bg-default dark:text-default">{{ member2Members.length }}</span>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs size-9 shrink-0 gap-1.5 p-0 sm:w-auto sm:px-3 lg:hidden" aria-label="Invite member" type="button" @click="openMember2Invite">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  <span class="hidden sm:inline">Invite Member</span>
                </UButton>
              </div>
              <div class="grid min-w-0 grid-cols-3 items-center gap-2 lg:flex lg:flex-wrap lg:justify-end">
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs h-9 w-full justify-center gap-1.5 px-2 lg:h-8 lg:w-auto lg:px-3 border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Change member sort order" type="button" @click="cycleMember2Sort">
                  <UIcon name="i-lucide-arrow-up-down" class="size-3.5" />
                  Sort: {{ member2SortLabels[member2Sort] }}
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs h-9 w-full justify-center gap-1.5 px-2 lg:h-8 lg:w-auto lg:px-3 border-default bg-default text-highlighted hover:bg-elevated hover:text-default" :class="member2AvailableOnly ? 'border-accented' : ''" :aria-pressed="member2AvailableOnly ? 'true' : 'false'" aria-label="Show available members only" type="button" @click="toggleMember2AvailableOnly">
                  <UIcon name="i-lucide-shield" class="size-3.5" />
                  Available only
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs h-9 w-full justify-center gap-1.5 px-2 lg:h-8 lg:w-auto lg:px-3 border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Change card density" type="button" @click="cycleMember2Density">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Display: {{ member2Density === 'comfortable' ? 'Roomy' : 'Compact' }}
                </UButton>
                <UButton color="primary" variant="solid" class="items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs hidden h-8 gap-1.5 lg:inline-flex" aria-label="Invite member" type="button" @click="openMember2Invite">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Invite Member
                </UButton>
              </div>
            </div>
            <div class="flex flex-col gap-3 px-4 py-4 sm:px-6">
              <div>
                <h1 class="text-xl font-semibold tracking-tight text-highlighted">Member List 2</h1>
                <p class="text-muted mt-1 text-sm">Contact-card grid with team ownership and quick member actions.</p>
              </div>
              <div class="relative w-full sm:max-w-sm">
                <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 dark:text-dimmed" />
                <UInput v-model="member2Search" type="search" placeholder="Search members..." aria-label="Search members" class="flex w-full rounded-md text-base md:text-sm h-9 pl-9 dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/70 dark:text-highlighted dark:placeholder:text-dimmed" :ui="{ base: 'h-full' }" />
              </div>
              <p class="text-muted text-xs">{{ member2Matches.length }} of {{ member2Members.length }} members match · {{ member2Counts.available }} available · {{ member2Counts.admins }} admins.</p>
              <p v-if="member2InviteNotice" role="status" class="text-xs text-success">{{ member2InviteNotice }}</p>
            </div>
          </section>
          <div class="flex-1 overflow-y-auto px-4 py-5 sm:px-6 dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
            <section data-copy-block="member2-grid" tabindex="0" aria-label="Member contact cards" class="min-w-0">
              <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" :class="member2Density === 'compact' ? 'gap-3' : 'gap-4'">
                <li v-for="member in member2Matches" :key="member.id">
                  <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                    <div class="flex flex-col space-y-1.5 items-center gap-3 text-center" :class="member2Density === 'compact' ? 'p-3' : 'p-4'">
                      <div class="relative">
                        <span class="border-default bg-muted flex size-14 shrink-0 items-center justify-center rounded-full border text-sm font-semibold" aria-hidden="true">{{ member2Initials(member.name) }}</span>
                        <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" :class="member2StatusMeta[member.status].dot" />
                      </div>
                      <div class="min-w-0">
                        <h3 class="truncate text-sm font-semibold text-highlighted">{{ member.name }}</h3>
                        <p class="text-muted mt-1 truncate text-xs">{{ member.role }}</p>
                      </div>
                      <div class="flex flex-wrap items-center justify-center gap-2">
                        <UBadge :label="member.tier" :color="member2TierColor(member.tier)" variant="subtle" class="rounded-full" />
                        <span class="text-muted inline-flex items-center gap-1 text-xs">
                          <UIcon name="i-lucide-circle-check" class="size-3.5" :class="member2StatusMeta[member.status].text" />
                          {{ member.status }}
                        </span>
                      </div>
                    </div>
                    <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                      <button class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" type="button" :aria-label="`Show contact details for ${member.name}`" @click="openMember2Contact(member.id)">
                        <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                        Email
                      </button>
                      <button class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" type="button" :aria-label="`Show phone number for ${member.name}`" @click="openMember2Contact(member.id)">
                        <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                        Call
                      </button>
                    </div>
                  </UCard>
                </li>
              </ul>
              <p v-if="!member2Matches.length" class="text-muted py-10 text-center text-sm">No members match the current search and filters.</p>
            </section>
          </div>
        </main>
      </div>
    </div>
    <!-- Page-local contact preview -->
    <UModal v-model:open="member2ContactOpen" :title="member2Contact ? `Contact ${member2Contact.name}` : 'Contact'" description="Example contact details. This demo does not send email or start calls.">
      <template #body>
        <div v-if="member2Contact" class="space-y-3 text-sm">
          <p class="text-muted">{{ member2Contact.role }} · {{ member2Contact.tier }}</p>
          <p>{{ member2Contact.email }}</p>
          <p class="text-muted">{{ member2Contact.phone }}</p>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full justify-end">
          <UButton label="Close" aria-label="Close member contact details" color="neutral" variant="outline" @click="member2ContactOpen = false" />
        </div>
      </template>
    </UModal>
    <UModal data-copy-fragment="member2-invite-dialog" v-model:open="member2InviteOpen" title="Invite member (local preview)" description="Adds a fictional member to this page only. No invitation email is sent.">
      <template #body>
        <UForm :state="member2InviteDraft" :validate="validateMember2Invite" class="space-y-4" @submit="saveMember2Invite">
          <UFormField label="Member name" name="name" required>
            <UInput v-model="member2InviteDraft.name" aria-label="Invite member name" class="w-full" />
          </UFormField>
          <UFormField label="Email address" name="email" required>
            <UInput v-model="member2InviteDraft.email" type="email" aria-label="Invite member email" class="w-full" />
          </UFormField>
          <UFormField label="Role">
            <USelect v-model="member2InviteDraft.tier" :items="['Member', 'Admin', 'Guest']" aria-label="Invite member role" class="w-full" />
          </UFormField>
          <div class="flex justify-end gap-2">
            <UButton label="Cancel" aria-label="Cancel member invitation" color="neutral" variant="outline" @click="member2InviteOpen = false" />
            <UButton label="Add locally" aria-label="Add member locally" type="submit" />
          </div>
        </UForm>
      </template>
    </UModal>
    <BlockCopyTools page="/project-management/member-list-2" />
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
