<!-- Page: /project-management/member-list-3 | Local members directory with tabs, filters and invitation previews. -->
<script setup lang="ts">
useHead({ title: 'Member List 3 · Blocks Admin' })

// @copy:member3-base:start
import { computed, ref } from 'vue'
import type { FormError, TableColumn } from '@nuxt/ui'

const member3Initials = (name: string) => name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase()
// @copy:member3-base:end

// @copy:member3-data:start
// Fictional demo records. Nothing is fetched, and no invitation is ever delivered.
type Member3Row = { id: string, name: string, email: string, role: string, security: 'Enabled' | 'Disabled', lastActive: string, manageAccess: boolean }
const member3Members = ref<Member3Row[]>([
  { id: '1', name: 'Riya Sharma', email: 'riya.sharma@example.com', role: 'Viewer', security: 'Enabled', lastActive: '2026-05-04', manageAccess: true },
  { id: '2', name: 'Ben Lewis', email: 'ben.lewis@example.com', role: 'Owner', security: 'Enabled', lastActive: '2026-05-11', manageAccess: false },
  { id: '3', name: 'Maya Rao', email: 'maya.rao@example.com', role: 'Admin', security: 'Disabled', lastActive: '2026-05-09', manageAccess: true },
  { id: '4', name: 'Tania Brooks', email: 'tania.brooks@example.com', role: 'Member', security: 'Enabled', lastActive: '2026-05-06', manageAccess: false },
  { id: '5', name: 'Joe Tesla', email: 'joe.tesla@example.com', role: 'Member', security: 'Disabled', lastActive: '2026-05-02', manageAccess: false },
  { id: '6', name: 'Kiara Laras', email: 'kiara.laras@example.com', role: 'Admin', security: 'Enabled', lastActive: '2026-05-10', manageAccess: true },
])
const member3Pending = ref([
  { id: 'p1', email: 'cameron.williamson@example.com', role: 'Member', invited: '2026-05-08', state: 'Pending' },
  { id: 'p2', email: 'robert.fox@example.com', role: 'Viewer', invited: '2026-05-09', state: 'Pending' },
  { id: 'p3', email: 'megan.chen@example.com', role: 'Admin', invited: '2026-05-10', state: 'Pending' },
])
const member3Suggested = ref([
  { id: 's1', name: 'Olivia Bennett', email: 'olivia.bennett@example.com', role: 'Member', reason: 'Works with Maya Rao on REV-241', shared: 3 },
  { id: 's2', name: 'Michael Chen', email: 'michael.chen@example.com', role: 'Viewer', reason: 'Invited to the workspace by Ben Lewis', shared: 2 },
  { id: 's3', name: 'Sophia Martinez', email: 'sophia.martinez@example.com', role: 'Admin', reason: 'Owns the billing workspace', shared: 1 },
  { id: 's4', name: 'Daniel Kim', email: 'daniel.kim@example.com', role: 'Member', reason: 'Shares 4 open issues with this team', shared: 4 },
])
const member3RoleOptions = ['Owner', 'Admin', 'Member', 'Viewer']
const member3RoleColor = (role: string) => role === 'Owner' ? 'primary' : role === 'Admin' ? 'info' : 'neutral'
const member3Date = (value: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(value + 'T00:00:00Z'))
// @copy:member3-data:end

// @copy:member3-filters:start
const member3Tab = ref('0')
const member3Tabs = [{ label: 'Team Members', value: '0' }, { label: 'Pending Invitations', value: '1' }, { label: 'Suggested Members', value: '2' }]
const member3Search = ref('')
const member3Role = ref('All Team Roles')
const member3Security = ref('2FA Status')
const member3Order = ref('Date')
const member3Sorting = ref<{ id: string, desc: boolean }[]>([])
const member3Selection = ref<Record<string, boolean>>({})
const member3BulkRole = ref('Member')
const member3Matches = computed(() => {
  const query = member3Search.value.trim().toLowerCase()
  const matched = member3Members.value.filter(member => (!query || `${member.name} ${member.email} ${member.role}`.toLowerCase().includes(query))
    && (member3Role.value === 'All Team Roles' || member.role === member3Role.value)
    && (member3Security.value === '2FA Status' || member.security === member3Security.value))
  return [...matched].sort((a, b) => {
    if (member3Order.value === 'Oldest') return a.lastActive.localeCompare(b.lastActive)
    if (member3Order.value === 'Name A-Z') return a.name.localeCompare(b.name)
    if (member3Order.value === 'Name Z-A') return b.name.localeCompare(a.name)
    return b.lastActive.localeCompare(a.lastActive)
  })
})
const member3SelectedCount = computed(() => Object.values(member3Selection.value).filter(Boolean).length)
const member3Columns: TableColumn<Member3Row>[] = [
  { accessorKey: 'selection', header: '', enableSorting: false },
  { accessorKey: 'name', header: 'Select all' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'security', header: 'Security' },
  { accessorKey: 'access', header: 'Access', enableSorting: false },
]
function applyMember3BulkRole() {
  const ids = member3Members.value.filter(member => member3Selection.value[member.id]).map(member => member.id)
  if (!ids.length) { member3FilterNotice.value = 'Select at least one member first.'; return }
  member3Members.value.forEach(member => { if (ids.includes(member.id)) member.role = member3BulkRole.value })
  member3Selection.value = {}
  member3FilterNotice.value = `Role updated locally for ${ids.length} member${ids.length === 1 ? '' : 's'}. No server was contacted.`
}
function clearMember3Selection() { member3Selection.value = {} }
const member3FilterNotice = ref('')
// @copy:member3-filters:end

// @copy:member3-invite:start
const member3InviteRows = ref([{ email: '' }, { email: '' }])
const member3InviteRole = ref('Member')
const member3InviteError = ref('')
const member3InviteNotice = ref('Add example addresses, then create local invitation previews. No email is sent.')
function addMember3InviteRow() { if (member3InviteRows.value.length < 5) member3InviteRows.value.push({ email: '' }) }
function removeMember3InviteRow(index: number) { if (member3InviteRows.value.length > 1) member3InviteRows.value.splice(index, 1) }
function validateMember3Invite(emails: string[]): FormError[] {
  const filled = emails.map(email => email.trim()).filter(Boolean)
  const errors: FormError[] = []
  if (!filled.length) errors.push({ name: 'inviteEmailInvite1', message: 'Enter at least one email address.' })
  for (const email of filled) if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push({ name: 'inviteEmailInvite1', message: `“${email}” is not a valid example address.` })
  if (new Set(filled.map(email => email.toLowerCase())).size !== filled.length) errors.push({ name: 'inviteEmailInvite1', message: 'Remove the duplicate addresses.' })
  return errors
}
function createMember3Invitations() {
  const emails = member3InviteRows.value.map(row => row.email.trim()).filter(Boolean)
  if (validateMember3Invite(emails).length) return
  const added = emails.map(email => ({ id: `p${Date.now()}-${email}`, email, role: member3InviteRole.value, invited: '2026-05-11', state: 'Pending' }))
  member3Pending.value.unshift(...added)
  member3InviteRows.value = [{ email: '' }]
  member3InviteError.value = ''
  member3InviteNotice.value = `${added.length} invitation preview${added.length === 1 ? '' : 's'} created in this card only. No email was sent, and the tab below keeps its own snapshot.`
}
// @copy:member3-invite:end

// @copy:member3-invitations:start
const member3InvitationNotice = ref('')
function resendMember3Invitation(id: string) {
  const invitation = member3Pending.value.find(item => item.id === id)
  if (!invitation) return
  invitation.state = 'Preview resent'
  member3InvitationNotice.value = `Resend preview for ${invitation.email}. No email was sent.`
}
function revokeMember3Invitation(id: string) {
  const invitation = member3Pending.value.find(item => item.id === id)
  member3Pending.value = member3Pending.value.filter(item => item.id !== id)
  member3InvitationNotice.value = invitation ? `${invitation.email} removed from this local list.` : 'Invitation removed from this local list.'
}
// @copy:member3-invitations:end

// @copy:member3-suggested:start
const member3SuggestedNotice = ref('')
function inviteMember3Suggestion(id: string) {
  const suggestion = member3Suggested.value.find(item => item.id === id)
  if (!suggestion) return
  member3Pending.value.unshift({ id: `p${Date.now()}`, email: suggestion.email, role: suggestion.role, invited: '2026-05-11', state: 'Pending' })
  member3Suggested.value = member3Suggested.value.filter(item => item.id !== id)
  member3SuggestedNotice.value = `${suggestion.email} moved into the local pending list. No invitation was sent.`
}
// @copy:member3-suggested:end

// @copy:member3-editor:start
const member3EditorOpen = ref(false)
const member3EditorId = ref('')
const member3EditorDraft = ref({ role: 'Member', security: 'Enabled' as 'Enabled' | 'Disabled' })
const member3EditorMember = computed(() => member3Members.value.find(member => member.id === member3EditorId.value))
const member3EditorNotice = ref('')
function openMember3Editor(member: Member3Row) {
  member3EditorId.value = member.id
  member3EditorDraft.value = { role: member.role, security: member.security }
  member3EditorNotice.value = ''
  member3EditorOpen.value = true
}
function saveMember3Editor() {
  const member = member3EditorMember.value
  if (!member) return
  member.role = member3EditorDraft.value.role
  member.security = member3EditorDraft.value.security
  member3EditorNotice.value = `${member.name} saved in this local snapshot. No server was contacted.`
  member3EditorOpen.value = false
}
// @copy:member3-editor:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/member-list-3">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
            <div class="mx-auto flex w-full max-w-7xl flex-col gap-8">
              <div class="flex flex-col gap-3">
                <h1 class="text-2xl font-semibold text-highlighted">Members</h1>
                <p class="text-muted text-sm">Manage team members and invitations</p>
              </div>
              <section data-copy-block="member3-invite" tabindex="0" aria-label="Invite new members by email address">
                <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                  <div class="flex flex-row items-center justify-between gap-4 p-5 sm:p-6">
                    <div class="text-sm font-medium">Invite new members by email address</div>
                    <UButton color="primary" variant="solid" class="h-9 rounded-md px-3 text-xs" aria-label="Create invitation previews" type="button" @click="createMember3Invitations">
                      <UIcon name="i-lucide-user-plus" class="size-4" />
                      Invite
                    </UButton>
                  </div>
                  <div data-orientation="horizontal" role="none" class="bg-(--ui-border) h-[1px] w-full shrink-0" />
                  <div class="flex flex-col gap-5 p-5 sm:p-6">
                    <div class="flex w-full flex-col gap-4">
                      <div v-for="(row, index) in member3InviteRows" :key="index" class="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(220px,1fr)_auto] lg:items-end">
                        <UFormField label="Email Address" :name="`inviteEmailInvite${index + 1}`">
                          <div class="flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs dark:bg-(--ui-border)/30">
                            <span class="order-first flex h-auto cursor-text items-center justify-center gap-2 py-1.5 pl-2 text-sm font-medium text-muted select-none">
                              <UIcon name="i-lucide-mail" class="size-4" />
                            </span>
                            <UInput v-model="row.email" type="email" :aria-label="`Invitation email ${index + 1}`" placeholder="jane@example.com" class="h-full min-w-0 flex-1 rounded-none ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                          </div>
                        </UFormField>
                        <UFormField label="Role" :name="`inviteRole${index + 1}`">
                          <USelect v-model="member3InviteRole" :items="member3RoleOptions" :aria-label="`Invitation role ${index + 1}`" class="h-10 w-full shadow-none" />
                        </UFormField>
                        <UButton v-if="member3InviteRows.length > 1" color="neutral" variant="ghost" size="sm" icon="i-lucide-trash-2" :aria-label="`Remove invitation row ${index + 1}`" @click="removeMember3InviteRow(index)" />
                      </div>
                    </div>
                    <div>
                      <UButton color="neutral" variant="outline" class="h-9 rounded-md px-3 text-xs" aria-label="Add another invitation row" type="button" @click="addMember3InviteRow">
                        <UIcon name="i-lucide-circle-plus" class="size-4" />
                        Add more
                      </UButton>
                    </div>
                    <p class="text-muted text-xs" role="status">{{ member3InviteNotice }}</p>
                  </div>
                </UCard>
              </section>
              <section data-copy-block="member3-directory" tabindex="0" aria-label="Members, invitations and suggestions directory" class="flex min-w-0 flex-col gap-3">
                <div class="overflow-x-auto border-b border-default">
                  <UTabs v-model="member3Tab" :items="member3Tabs" :content="false" color="primary" variant="link" class="items-center inline-flex h-auto min-w-max justify-start gap-7 rounded-none bg-transparent p-0 text-muted sm:gap-8" />
                </div>
                <div v-if="member3Tab === '0'" class="flex flex-col gap-3">
                  <div class="grid grid-cols-3 gap-2 lg:grid-cols-[minmax(280px,1fr)_auto_auto_auto] lg:gap-3">
                    <UFormField label="Search members" name="member3Search">
                      <div class="flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs dark:bg-(--ui-border)/30 lg:h-10">
                        <span class="order-first flex h-auto cursor-text items-center justify-center gap-2 py-1.5 pl-2 text-sm font-medium text-muted select-none">
                          <UIcon name="i-lucide-search" class="size-4" />
                        </span>
                        <UInput v-model="member3Search" type="search" aria-label="Filter members" placeholder="Filter..." class="h-full min-w-0 flex-1 rounded-none ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                      </div>
                    </UFormField>
                    <UFormField label="Team role" name="member3Role">
                      <USelect v-model="member3Role" :items="['All Team Roles', ...member3RoleOptions]" aria-label="Filter by team role" class="h-9 w-full shadow-none lg:h-10 lg:min-w-40" />
                    </UFormField>
                    <UFormField label="2FA status" name="member3Security">
                      <USelect v-model="member3Security" :items="['2FA Status', 'Enabled', 'Disabled']" aria-label="Filter by 2FA status" class="h-9 w-full shadow-none lg:h-10 lg:min-w-40" />
                    </UFormField>
                    <UFormField label="Sort by" name="member3Order">
                      <USelect v-model="member3Order" :items="['Date', 'Oldest', 'Name A-Z', 'Name Z-A']" aria-label="Sort members" class="h-9 w-full shadow-none lg:h-10 lg:min-w-40" />
                    </UFormField>
                  </div>
                  <p class="text-muted text-sm" aria-live="polite" data-member3-count>{{ member3Matches.length }} of {{ member3Members.length }} members match.</p>
                  <div v-if="member3SelectedCount" class="flex flex-wrap items-center gap-2 rounded-lg border border-default bg-muted/40 p-2">
                    <span class="text-sm font-medium">{{ member3SelectedCount }} selected</span>
                    <USelect v-model="member3BulkRole" :items="member3RoleOptions" aria-label="Bulk role" class="h-8 w-32 shadow-none" />
                    <UButton color="neutral" variant="outline" size="xs" label="Apply role" :aria-label="`Apply role to ${member3SelectedCount} members`" @click="applyMember3BulkRole" />
                    <UButton color="neutral" variant="ghost" size="xs" label="Clear" aria-label="Clear member selection" @click="clearMember3Selection" />
                  </div>
                  <p v-if="member3FilterNotice" class="text-muted text-xs" role="status">{{ member3FilterNotice }}</p>
                  <UCard class="overflow-hidden rounded-lg" :ui="{ body: 'contents' }">
                    <div class="relative w-full overflow-auto">
                      <UTable v-model:sorting="member3Sorting" v-model:row-selection="member3Selection" :data="member3Matches" :columns="member3Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
                        <template #selection-header="{ table }">
                          <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                        </template>
                        <template #selection-cell="{ row }">
                          <UCheckbox :model-value="row.getIsSelected()" :aria-label="`Select ${row.original.name}`" @update:model-value="row.toggleSelected(Boolean($event))" />
                        </template>
                        <template #name-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Member" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #name-cell="{ row }">
                          <div class="flex min-w-0 items-center gap-3">
                            <span class="bg-muted text-muted flex size-9 shrink-0 items-center justify-center rounded-full text-xs" aria-hidden="true">{{ member3Initials(row.original.name) }}</span>
                            <div class="min-w-0">
                              <div class="truncate text-sm font-medium">{{ row.original.name }}</div>
                              <div class="text-muted truncate text-sm">{{ row.original.email }}</div>
                              <div class="mt-1 flex flex-wrap items-center gap-2 text-xs lg:hidden">
                                <span class="text-muted">{{ row.original.role }}</span>
                                <span class="text-muted inline-flex items-center gap-1.5">
                                  <UIcon name="i-lucide-shield-check" class="text-muted" />
                                  {{ row.original.security }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template #role-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Role" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #role-cell="{ row }">
                          <UBadge :label="row.original.role" :color="member3RoleColor(row.original.role)" variant="subtle" />
                        </template>
                        <template #security-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Security" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #security-cell="{ row }">
                          <span class="text-muted inline-flex items-center gap-1.5 text-sm">
                            <UIcon name="i-lucide-shield-check" class="text-muted" />
                            {{ row.original.security }}
                          </span>
                        </template>
                        <template #access-header>
                          <span class="sr-only">Access</span>
                        </template>
                        <template #access-cell="{ row }">
                          <div class="flex items-center justify-end gap-2">
                            <UButton v-if="row.original.manageAccess" color="neutral" variant="outline" class="h-9 rounded-md px-3 text-xs" :aria-label="`Manage access for ${row.original.name}`" @click="openMember3Editor(row.original)">
                              Manage Access
                            </UButton>
                            <UButton color="neutral" variant="soft" size="sm" icon="i-lucide-ellipsis" :aria-label="`Open actions for ${row.original.name}`" @click="openMember3Editor(row.original)" />
                          </div>
                        </template>
                      </UTable>
                    </div>
                  </UCard>
                  <p v-if="!member3Matches.length" class="text-muted text-sm">No members match these filters.</p>
                </div>
                <div v-else-if="member3Tab === '1'" class="flex flex-col gap-3">
                  <p class="text-muted text-sm" aria-live="polite">{{ member3Pending.length }} pending invitation{{ member3Pending.length === 1 ? '' : 's' }} in this local snapshot. Resending is a preview; no email is delivered.</p>
                  <UCard :ui="{ body: 'contents' }">
                    <ul role="list" class="divide-default divide-y">
                      <li v-for="invitation in member3Pending" :key="invitation.id" class="flex flex-wrap items-center justify-between gap-3 p-4" :data-member3-pending="invitation.id">
                        <div class="min-w-0">
                          <p class="truncate text-sm font-medium">{{ invitation.email }}</p>
                          <p class="text-muted mt-1 text-xs">{{ invitation.role }} · invited {{ member3Date(invitation.invited) }} · {{ invitation.state }}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <UButton color="neutral" variant="outline" size="xs" label="Resend preview" :aria-label="`Resend invitation preview to ${invitation.email}`" @click="resendMember3Invitation(invitation.id)" />
                          <UButton color="error" variant="ghost" size="xs" label="Revoke" :aria-label="`Revoke invitation to ${invitation.email}`" @click="revokeMember3Invitation(invitation.id)" />
                        </div>
                      </li>
                    </ul>
                  </UCard>
                  <p v-if="!member3Pending.length" class="text-muted text-sm">No pending invitations in this snapshot.</p>
                  <p v-if="member3InvitationNotice" class="text-muted text-xs" role="status">{{ member3InvitationNotice }}</p>
                </div>
                <div v-else class="flex flex-col gap-3">
                  <p class="text-muted text-sm" aria-live="polite">{{ member3Suggested.length }} suggested member{{ member3Suggested.length === 1 ? '' : 's' }} from the fictional workspace.</p>
                  <UCard :ui="{ body: 'contents' }">
                    <ul role="list" class="divide-default divide-y">
                      <li v-for="suggestion in member3Suggested" :key="suggestion.id" class="flex flex-wrap items-center justify-between gap-3 p-4" :data-member3-suggested="suggestion.id">
                        <div class="flex min-w-0 items-center gap-3">
                          <span class="bg-muted text-muted flex size-9 shrink-0 items-center justify-center rounded-full text-xs" aria-hidden="true">{{ member3Initials(suggestion.name) }}</span>
                          <div class="min-w-0">
                            <p class="truncate text-sm font-medium">{{ suggestion.name }}</p>
                            <p class="text-muted truncate text-sm">{{ suggestion.email }}</p>
                            <p class="text-muted mt-1 text-xs">{{ suggestion.reason }} · {{ suggestion.shared }} shared</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <UBadge :label="suggestion.role" color="neutral" variant="subtle" />
                          <UButton color="primary" variant="outline" size="xs" label="Invite" :aria-label="`Invite ${suggestion.name} locally`" @click="inviteMember3Suggestion(suggestion.id)" />
                        </div>
                      </li>
                    </ul>
                  </UCard>
                  <p v-if="!member3Suggested.length" class="text-muted text-sm">No suggestions left in this snapshot.</p>
                  <p v-if="member3SuggestedNotice" class="text-muted text-xs" role="status">{{ member3SuggestedNotice }}</p>
                </div>
              </section>
              <UModal data-copy-fragment="member3-editor-dialog" v-model:open="member3EditorOpen" :title="member3EditorMember ? `Access for ${member3EditorMember.name}` : 'Member access'" description="Edits apply to this local snapshot only.">
                <template #body>
                  <div class="space-y-4">
                    <p class="text-muted text-sm">{{ member3EditorMember?.email }}</p>
                    <UFormField label="Role">
                      <USelect v-model="member3EditorDraft.role" :items="member3RoleOptions" aria-label="Member role" class="w-full" />
                    </UFormField>
                    <UFormField label="Two-factor authentication">
                      <USelect v-model="member3EditorDraft.security" :items="['Enabled', 'Disabled']" aria-label="Member 2FA status" class="w-full" />
                    </UFormField>
                  </div>
                </template>
                <template #footer>
                  <div class="flex w-full justify-end gap-2">
                    <UButton label="Cancel" aria-label="Cancel member access edit" color="neutral" variant="outline" @click="member3EditorOpen = false" />
                    <UButton label="Save locally" aria-label="Save member access edit" @click="saveMember3Editor" />
                  </div>
                </template>
              </UModal>
            </div>
          </div>
        </main>
      </div>
    </div>
    <BlockCopyTools page="/project-management/member-list-3" />
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
