<!-- Page: /project-management/member-list-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Member List 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "inviteEmailInvite1": "",
  "role": "Member",
  "filter": "",
  "allTeamRoles": "All Team Roles",
  "field2FAStatus": "2FA Status",
  "date": "Date"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Team Members",
    "value": "0"
  },
  {
    "label": "Pending Invitations",
    "value": "1"
  },
  {
    "label": "Suggested Members",
    "value": "2"
  }
]

const roleOptions = [
  "Viewer",
  "Member",
  "Admin"
]

const allTeamRolesOptions = [
  "All Team Roles",
  "Owner",
  "Admin",
  "Member",
  "Viewer"
]

const field2FAStatusOptions = [
  "2FA Status",
  "Enabled",
  "Disabled"
]

const dateOptions = [
  "Date",
  "Oldest",
  "Name A-Z",
  "Name Z-A"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "selectAll2": "Riya Sharmariya.sharma@shadcnblocks.devViewer2FA",
    "selectAll2Alt5": "Riya Sharma",
    "selectAll2Src6": "/reference/5985a55c7498fe2e.png",
    "selectAll2Text9": "Riya Sharma",
    "selectAll2Text11": "riya.sharma@shadcnblocks.dev",
    "selectAll2Text14": "Viewer",
    "role": "Viewer",
    "security": "2FA",
    "access": "Manage Access",
    "accessGroup": "0"
  },
  {
    "_id": "2",
    "selection": "",
    "selectAll2": "Ben Lewisben.lewis@shadcnblocks.devOwner2FA",
    "selectAll2Alt5": "Ben Lewis",
    "selectAll2Src6": "/reference/9310a24e0d573ddb.png",
    "selectAll2Text9": "Ben Lewis",
    "selectAll2Text11": "ben.lewis@shadcnblocks.dev",
    "selectAll2Text14": "Owner",
    "role": "Owner",
    "security": "2FA",
    "access": "",
    "accessGroup": "1"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "selection",
    "header": "",
    "enableSorting": false
  },
  {
    "accessorKey": "selectAll2",
    "header": "Select all (2)"
  },
  {
    "accessorKey": "role",
    "header": "Role"
  },
  {
    "accessorKey": "security",
    "header": "Security"
  },
  {
    "accessorKey": "access",
    "header": "Access"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.filter || '').toLowerCase()
  const keys = ["selectAll2","role","security","access"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
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
              <!-- Card 1: Invite new members by email addressInviteEmail AddressRoleMemberAdd more -->
              <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                <div class="flex space-y-1.5 flex-row items-center justify-between gap-4 p-5 sm:p-6">
                  <div class="text-sm font-medium">Invite new members by email address</div>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-9" aria-label="Invite" type="button" @click="openAction(&quot;Invite&quot;)">
                    <UIcon name="i-lucide-user-plus" class="size-4" />
                    Invite
                  </UButton>
                </div>
                <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                <div class="flex flex-col gap-5 p-5 sm:p-6">
                  <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-4">
                    <div class="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(220px,1fr)]">
                      <UFormField label="Email Address" name="inviteEmailInvite1" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                        <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5">
                          <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                            <UIcon name="i-lucide-mail" class="size-4" />
                          </div>
                          <UInput v-model="form.inviteEmailInvite1" type="text" data-slot="input-group-control" placeholder="jane@example.com" name="inviteEmailInvite1" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                        </div>
                      </UFormField>
                      <UFormField label="Role" name="role" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                        <USelect v-model="form.role" :items="roleOptions" aria-label="Member" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 shadow-none" />
                      </UFormField>
                    </div>
                  </div>
                  <div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9" aria-label="Add more" type="button" @click="openAction(&quot;Add more&quot;)">
                      <UIcon name="i-lucide-circle-plus" class="size-4" />
                      Add more
                    </UButton>
                  </div>
                </div>
              </UCard>
              <div data-orientation="horizontal" class="flex flex-col gap-3">
                <div class="overflow-x-auto border-b border-default">
                  <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted items-center inline-flex h-auto min-w-max justify-start gap-7 rounded-none bg-transparent p-0 sm:gap-8" data-orientation="horizontal" style="outline:none" />
                </div>
                <div class="grid grid-cols-3 gap-2 lg:grid-cols-[minmax(280px,1fr)_auto_auto_auto] lg:gap-3">
                  <div data-slot="input-group" role="group" class="group/input-group relative flex w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 col-span-3 h-9 lg:col-span-1 lg:h-10">
                    <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                      <UIcon name="i-lucide-search" class="size-4" />
                    </div>
                    <UInput v-model="form.filter" type="text" data-slot="input-group-control" placeholder="Filter..." name="filter" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                  </div>
                  <USelect v-model="form.allTeamRoles" :items="allTeamRolesOptions" aria-label="All Team Roles" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 relative h-9 min-w-0 shadow-none lg:h-10 lg:min-w-40 pl-8 lg:pl-9" />
                  <USelect v-model="form.field2FAStatus" :items="field2FAStatusOptions" aria-label="2FA Status" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 relative h-9 min-w-0 shadow-none lg:h-10 lg:min-w-40 pl-8 lg:pl-9" />
                  <USelect v-model="form.date" :items="dateOptions" aria-label="Date" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 relative h-9 min-w-0 shadow-none lg:h-10 lg:min-w-40 pl-8 lg:pl-9" />
                </div>
                <div data-orientation="horizontal" id="radix-_R_1lfiv5uknmlb_-content-team" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" style="animation-duration:0s">
                  <!-- Card 2: Select all (2)RoleSecurityAccessRiya Sharmariya.sharma@shadcnblocks.devViewer2FAViewer2FAM -->
                  <UCard class="overflow-hidden rounded-lg" :ui="{ body: 'contents' }">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Select all (2) / Role / Security / Access -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                          <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                        </template>
                        <template #selection-cell="{ row }">
                          <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                        </template>
                        <template #selectAll2-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Select all (2)" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #selectAll2-cell="{ row }">
                          <div class="flex min-w-0 items-center gap-3">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                              <img class="aspect-square h-full w-full" :alt="row.original.selectAll2Alt5" :src="row.original.selectAll2Src6" loading="lazy" />
                            </span>
                            <div class="min-w-0">
                              <div class="truncate text-sm font-medium">{{ row.original.selectAll2Text9 }}</div>
                              <div class="text-muted truncate text-sm">{{ row.original.selectAll2Text11 }}</div>
                              <div class="mt-1 flex flex-wrap items-center gap-2 text-xs lg:hidden">
                                <span class="text-muted">{{ row.original.selectAll2Text14 }}</span>
                                <span class="text-muted inline-flex items-center gap-1.5 text-sm">
                                  <UIcon name="i-lucide-shield-check" class="text-muted" />
                                  2FA
                                </span>
                              </div>
                            </div>
                          </div>
                        </template>
                        <template #role-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Role" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #role-cell="{ row }">
                          {{ row.original.role }}
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
                        <template #access-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Access" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #access-cell="{ row }">
                          <template v-if="row.original.accessGroup === '0'">
                            <div class="flex items-center justify-end gap-2">
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9" aria-label="Manage Access" type="button" @click="openAction(&quot;Manage Access&quot;, row.original._id, 1)">
                                {{ row.original.access }}
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Open actions for Riya Sharma" type="button" @click="openAction(&quot;Open actions for Riya Sharma&quot;, row.original._id, 1)">
                                <UIcon name="i-lucide-ellipsis" class="size-4" />
                              </UButton>
                            </div>
                          </template>
                          <template v-if="row.original.accessGroup === '1'">
                            <div class="flex items-center justify-end gap-2">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Open actions for Ben Lewis" type="button" @click="openAction(&quot;Open actions for Ben Lewis&quot;, row.original._id, 1)">
                                <UIcon name="i-lucide-ellipsis" class="size-4" />
                              </UButton>
                            </div>
                          </template>
                        </template>
                      </UTable>
                    </div>
                  </UCard>
                </div>
                <div data-orientation="horizontal" id="radix-_R_1lfiv5uknmlb_-content-pending" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" />
                <div data-orientation="horizontal" id="radix-_R_1lfiv5uknmlb_-content-suggested" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" />
              </div>
              <span class="sr-only">Team members 2, pending invitations3, suggested members 11</span>
            </div>
          </div>
        </main>
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
