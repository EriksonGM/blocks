<!-- Page: /original/users | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Users · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "filterTasks": "",
  "field10": "10"
})

const field10Options = [
  "10",
  "20",
  "30",
  "40",
  "50"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "selection": "",
    "name": "Irma Feil",
    "nameGroup": "0",
    "nameHref3": "/original/users/a9c12799-70f7-493a-afa9-7bb50298e456",
    "email": "irma.blick30@gmail.com",
    "phoneNumber": "+14332008269",
    "registeredDate": "27 Apr, 2026",
    "lastLoginDate": "06 Jun, 2026",
    "status": "invited",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-info/40 text-info dark:text-info border-info/20",
    "role": "cashier",
    "roleGroup": "0",
    "roleClass11": "tabler-icon tabler-icon-cash text-muted",
    "roleD12": "M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3",
    "roleD13": "M7 10a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8",
    "roleD14": "M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_chl5fiv5uiv5uknmlb_"
  },
  {
    "_id": "2",
    "selection": "",
    "name": "Hubert Medhurst",
    "nameGroup": "0",
    "nameHref3": "/original/users/b03fd31a-eea0-4238-ac1b-4b5e01d4617e",
    "email": "hubert_donnelly84@yahoo.com",
    "phoneNumber": "+18737009141",
    "registeredDate": "18 Apr, 2026",
    "lastLoginDate": "30 Jul, 2026",
    "status": "suspended",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-(--ui-error)/10 dark:bg-(--ui-error)/50 text-error dark:text-primary border-(--ui-error)/10 border-default",
    "role": "superadmin",
    "roleGroup": "1",
    "roleClass11": "tabler-icon tabler-icon-shield text-muted",
    "roleD12": "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",
    "roleD13": "",
    "roleD14": "",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cil5fiv5uiv5uknmlb_"
  },
  {
    "_id": "3",
    "selection": "",
    "name": "Adam Satterfield-BergnaumAdam Satterfield-Bergnaum",
    "nameGroup": "1",
    "nameHref3": "/original/users/d9cb64d8-317d-4afc-8ffc-6a58b373c143",
    "email": "adam55@hotmail.com",
    "phoneNumber": "+15887725885",
    "registeredDate": "25 Nov, 2025",
    "lastLoginDate": "29 Aug, 2026",
    "status": "inactive",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize bg-(--ui-bg-accented)/40 border-accented",
    "role": "admin",
    "roleGroup": "0",
    "roleClass11": "tabler-icon tabler-icon-user-shield text-muted",
    "roleD12": "M6 21v-2a4 4 0 0 1 4 -4h2",
    "roleD13": "M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5",
    "roleD14": "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cjl5fiv5uiv5uknmlb_"
  },
  {
    "_id": "4",
    "selection": "",
    "name": "Kayleigh Hayes",
    "nameGroup": "0",
    "nameHref3": "/original/users/e5224b43-6d15-48b1-9776-85fd756dd2de",
    "email": "kayleigh.bradtke4@gmail.com",
    "phoneNumber": "+19633196816",
    "registeredDate": "04 Jan, 2026",
    "lastLoginDate": "15 Aug, 2026",
    "status": "inactive",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize bg-(--ui-bg-accented)/40 border-accented",
    "role": "manager",
    "roleGroup": "2",
    "roleClass11": "tabler-icon tabler-icon-users-group text-muted",
    "roleD12": "M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "roleD13": "M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1",
    "roleD14": "M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_ckl5fiv5uiv5uknmlb_"
  },
  {
    "_id": "5",
    "selection": "",
    "name": "Alden Fritsch",
    "nameGroup": "0",
    "nameHref3": "/original/users/8d2d69b2-c7d8-4893-9220-7d7dad9b9014",
    "email": "alden97@hotmail.com",
    "phoneNumber": "+18412444330",
    "registeredDate": "29 Aug, 2026",
    "lastLoginDate": "26 Sep, 2026",
    "status": "invited",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-info/40 text-info dark:text-info border-info/20",
    "role": "superadmin",
    "roleGroup": "1",
    "roleClass11": "tabler-icon tabler-icon-shield text-muted",
    "roleD12": "M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3",
    "roleD13": "",
    "roleD14": "",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cll5fiv5uiv5uknmlb_"
  },
  {
    "_id": "6",
    "selection": "",
    "name": "Jill Kub",
    "nameGroup": "0",
    "nameHref3": "/original/users/e0e6847e-994f-400d-ba7b-ef191580a9e7",
    "email": "jill.fritsch71@gmail.com",
    "phoneNumber": "+13482812691",
    "registeredDate": "20 Oct, 2025",
    "lastLoginDate": "11 Dec, 2025",
    "status": "suspended",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-(--ui-error)/10 dark:bg-(--ui-error)/50 text-error dark:text-primary border-(--ui-error)/10 border-default",
    "role": "cashier",
    "roleGroup": "0",
    "roleClass11": "tabler-icon tabler-icon-cash text-muted",
    "roleD12": "M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3",
    "roleD13": "M7 10a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8",
    "roleD14": "M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cml5fiv5uiv5uknmlb_"
  },
  {
    "_id": "7",
    "selection": "",
    "name": "Faith Orn",
    "nameGroup": "0",
    "nameHref3": "/original/users/1fbb23c4-1b2f-4df9-abcb-266cd8a59ff9",
    "email": "faith_kemmer26@gmail.com",
    "phoneNumber": "+19148610097",
    "registeredDate": "02 Apr, 2026",
    "lastLoginDate": "16 Jul, 2026",
    "status": "invited",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-info/40 text-info dark:text-info border-info/20",
    "role": "manager",
    "roleGroup": "2",
    "roleClass11": "tabler-icon tabler-icon-users-group text-muted",
    "roleD12": "M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "roleD13": "M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1",
    "roleD14": "M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cnl5fiv5uiv5uknmlb_"
  },
  {
    "_id": "8",
    "selection": "",
    "name": "Mariam Reinger",
    "nameGroup": "0",
    "nameHref3": "/original/users/e92e326f-b095-4904-9595-aaa010f222b2",
    "email": "mariam5@yahoo.com",
    "phoneNumber": "+17355971652",
    "registeredDate": "02 Nov, 2025",
    "lastLoginDate": "31 Aug, 2026",
    "status": "invited",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-info/40 text-info dark:text-info border-info/20",
    "role": "manager",
    "roleGroup": "2",
    "roleClass11": "tabler-icon tabler-icon-users-group text-muted",
    "roleD12": "M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "roleD13": "M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1",
    "roleD14": "M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_col5fiv5uiv5uknmlb_"
  },
  {
    "_id": "9",
    "selection": "",
    "name": "Roselyn Bins",
    "nameGroup": "0",
    "nameHref3": "/original/users/146f8554-dd48-4f42-ba10-899f78429841",
    "email": "roselyn.bogan18@gmail.com",
    "phoneNumber": "+18982989886",
    "registeredDate": "07 Nov, 2025",
    "lastLoginDate": "17 Jul, 2026",
    "status": "invited",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 capitalize bg-info/40 text-info dark:text-info border-info/20",
    "role": "cashier",
    "roleGroup": "0",
    "roleClass11": "tabler-icon tabler-icon-cash text-muted",
    "roleD12": "M7 15h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v3",
    "roleD13": "M7 10a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -8",
    "roleD14": "M12 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cpl5fiv5uiv5uknmlb_"
  },
  {
    "_id": "10",
    "selection": "",
    "name": "Charlene Hoppe",
    "nameGroup": "0",
    "nameHref3": "/original/users/9a830248-7be5-4859-a3ae-2adce480327e",
    "email": "charlene_ruecker95@yahoo.com",
    "phoneNumber": "+16457677929",
    "registeredDate": "28 May, 2026",
    "lastLoginDate": "05 Jul, 2026",
    "status": "inactive",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize bg-(--ui-bg-accented)/40 border-accented",
    "role": "manager",
    "roleGroup": "2",
    "roleClass11": "tabler-icon tabler-icon-users-group text-muted",
    "roleD12": "M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "roleD13": "M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1",
    "roleD14": "M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",
    "actions": "Open menu",
    "actionsId4": "radix-_R_cql5fiv5uiv5uknmlb_"
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
    "accessorKey": "name",
    "header": "Name"
  },
  {
    "accessorKey": "email",
    "header": "Email"
  },
  {
    "accessorKey": "phoneNumber",
    "header": "Phone Number"
  },
  {
    "accessorKey": "registeredDate",
    "header": "Registered Date"
  },
  {
    "accessorKey": "lastLoginDate",
    "header": "Last Login Date"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "role",
    "header": "Role"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.filterTasks || '').toLowerCase()
  const keys = ["name","email","phoneNumber","registeredDate","lastLoginDate","status","role","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/users">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Users</span>
              </div>
              <div class="relative xl:mx-auto xl:w-full xl:max-w-md">
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default py-2 bg-(--ui-bg-muted)/70 text-muted hover:bg-(--ui-bg-muted)/90 hover:text-highlighted h-10 w-full justify-start rounded-full border-none px-3 font-normal shadow-none" aria-label="Search pages or run commands⌘K" type="button" @click="openAction(&quot;Search pages or run commands⌘K&quot;)">
                  <UIcon name="i-lucide-search" class="size-4 shrink-0" />
                  <span class="min-w-0 flex-1 truncate text-left">Search pages or run commands</span>
                  <UKbd class="bg-default pointer-events-none hidden h-6 shrink-0 items-center gap-1 rounded-full border px-2 font-mono text-[10px] font-medium opacity-100 select-none sm:inline-flex border-default">⌘K</UKbd>
                </UButton>
              </div>
            </div>
          </header>
          <div class="min-h-0 flex-1 overflow-auto has-[&gt;[data-layout=fixed]]:flex has-[&gt;[data-layout=fixed]]:overflow-hidden">
            <main id="main-content" class="flex h-full flex-1 flex-col p-4 sm:p-6">
              <div class="mb-4 flex flex-col gap-2">
                <nav aria-label="breadcrumb">
                  <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                    <li class="inline-flex items-center gap-1.5">
                      <NuxtLink class="hover:text-highlighted transition-colors" to="/">
                        Home
                      </NuxtLink>
                    </li>
                    <li class="inline-flex items-center gap-1.5">
                      <span role="link" class="text-highlighted font-normal">Users</span>
                    </li>
                  </ol>
                </nav>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <h2 class="flex-none text-xl font-bold tracking-tight text-highlighted">User List</h2>
                  <div class="flex justify-end gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 space-x-1" aria-label="Invite User" type="button" @click="openAction(&quot;Invite User&quot;)">
                      <span>Invite User</span>
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail-plus">
                        <path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </UButton>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 space-x-1" aria-label="Add User" type="button" @click="openAction(&quot;Add User&quot;)">
                      <span>Add User</span>
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user-plus">
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                      </svg>
                    </UButton>
                  </div>
                </div>
                <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <!-- Card 1: Total UsersMore Info12,000+5% than last month -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pt-4 pb-2">
                      <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-users-group">
                          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                        </svg>
                        Total Users
                      </div>
                      <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                        <span class="sr-only">More Info</span>
                      </UButton>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="text-2xl font-bold">12,000</div>
                      <p class="text-muted text-xs">+5% than last month</p>
                    </div>
                  </UCard>
                  <!-- Card 2: New UsersMore Info+350+10% vs last month -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pt-4 pb-2">
                      <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-users-plus">
                          <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          <path d="M16 19h6" />
                          <path d="M19 16v6" />
                        </svg>
                        New Users
                      </div>
                      <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                        <span class="sr-only">More Info</span>
                      </UButton>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="text-2xl font-bold">+350</div>
                      <p class="text-muted text-xs">+10% vs last month</p>
                    </div>
                  </UCard>
                  <!-- Card 3: Pending VerificationsMore Info422% of users -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pt-4 pb-2">
                      <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user-scan">
                          <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
                          <path d="M3 7v-2a2 2 0 0 1 2 -2h2" />
                          <path d="M3 17v2a2 2 0 0 0 2 2h2" />
                          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                          <path d="M17 21h2a2 2 0 0 0 2 -2v-2" />
                        </svg>
                        Pending Verifications
                      </div>
                      <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                        <span class="sr-only">More Info</span>
                      </UButton>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="text-2xl font-bold">42</div>
                      <p class="text-muted text-xs">2% of users</p>
                    </div>
                  </UCard>
                  <!-- Card 4: Active UsersMore Info780065% of all users -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pt-4 pb-2">
                      <div class="tracking-tight flex items-center gap-2 text-sm font-medium">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user-check">
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                          <path d="M15 19l2 2l4 -4" />
                        </svg>
                        Active Users
                      </div>
                      <UButton color="neutral" variant="ghost" aria-label="More Info" type="button" @click="openAction(&quot;More Info&quot;)">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-info-circle text-muted scale-90 stroke-[1.25]">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                          <path d="M12 9h.01" />
                          <path d="M11 12h1v4h1" />
                        </svg>
                        <span class="sr-only">More Info</span>
                      </UButton>
                    </div>
                    <div class="p-6 pt-0 pb-4">
                      <div class="text-2xl font-bold">7800</div>
                      <p class="text-muted text-xs">65% of all users</p>
                    </div>
                  </UCard>
                </div>
              </div>
              <div class="flex-1">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
                      <UInput v-model="form.filterTasks" type="text" placeholder="Filter tasks..." name="filterTasks" class="flex rounded-md text-base md:text-sm h-8 w-[150px] lg:w-[250px]" :ui="{ base: 'h-full' }" />
                      <div class="flex gap-x-2">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 border-dashed" aria-label="Status" type="button" @click="openAction(&quot;Status&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" />
                          </svg>
                          Status
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8 border-dashed" aria-label="Role" type="button" @click="openAction(&quot;Role&quot;)">
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" />
                          </svg>
                          Role
                        </UButton>
                      </div>
                    </div>
                    <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs ml-auto hidden h-8 lg:flex" aria-label="View" type="button" @click="openAction(&quot;View&quot;)">
                      <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="mr-2 h-4 w-4">
                        <path d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z" fill="currentColor" />
                      </svg>
                      View
                    </UButton>
                  </div>
                  <div class="rounded-md border border-default">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Name / Email / Phone Number / Registered Date / Last Login Date / Status / Role -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #selection-header="{ table }">
                          <UCheckbox :model-value="table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected()" aria-label="Select all rows" @update:model-value="table.toggleAllPageRowsSelected(Boolean($event))" />
                        </template>
                        <template #selection-cell="{ row }">
                          <UCheckbox :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
                        </template>
                        <template #name-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Name" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #name-cell="{ row }">
                          <template v-if="row.original.nameGroup === '0'">
                            <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 underline" :to="row.original.nameHref3">
                              <div class="truncate max-w-36">{{ row.original.name }}</div>
                            </NuxtLink>
                          </template>
                          <template v-if="row.original.nameGroup === '1'">
                            <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 underline" to="/original/users/d9cb64d8-317d-4afc-8ffc-6a58b373c143">
                              <div class="hidden sm:block">
                                <div class="truncate max-w-36">Adam Satterfield-Bergnaum</div>
                              </div>
                              <div class="sm:hidden">
                                <div class="truncate max-w-36" type="button">Adam Satterfield-Bergnaum</div>
                              </div>
                            </NuxtLink>
                          </template>
                        </template>
                        <template #email-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Email" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #email-cell="{ row }">
                          <div class="w-fit text-nowrap">{{ row.original.email }}</div>
                        </template>
                        <template #phoneNumber-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Phone Number" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #phoneNumber-cell="{ row }">
                          <div>{{ row.original.phoneNumber }}</div>
                        </template>
                        <template #registeredDate-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Registered Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #registeredDate-cell="{ row }">
                          <div class="w-fit text-nowrap">{{ row.original.registeredDate }}</div>
                        </template>
                        <template #lastLoginDate-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Last Login Date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #lastLoginDate-cell="{ row }">
                          <div class="w-fit text-nowrap">{{ row.original.lastLoginDate }}</div>
                        </template>
                        <template #status-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #status-cell="{ row }">
                          <div class="flex space-x-2">
                            <div :class="row.original.statusClass3">{{ row.original.status }}</div>
                          </div>
                        </template>
                        <template #role-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Role" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #role-cell="{ row }">
                          <template v-if="row.original.roleGroup === '0'">
                            <div class="flex items-center gap-x-2">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="row.original.roleClass11">
                                <path :d="row.original.roleD12" />
                                <path :d="row.original.roleD13" />
                                <path :d="row.original.roleD14" />
                              </svg>
                              <span class="text-sm capitalize">{{ row.original.role }}</span>
                            </div>
                          </template>
                          <template v-if="row.original.roleGroup === '1'">
                            <div class="flex items-center gap-x-2">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-shield text-muted">
                                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                              </svg>
                              <span class="text-sm capitalize">{{ row.original.role }}</span>
                            </div>
                          </template>
                          <template v-if="row.original.roleGroup === '2'">
                            <div class="flex items-center gap-x-2">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-users-group text-muted">
                                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                              </svg>
                              <span class="text-sm capitalize">{{ row.original.role }}</span>
                            </div>
                          </template>
                        </template>
                        <template #actions-cell="{ row }">
                          <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default data-[state=open]:bg-muted flex h-8 w-8 p-0" aria-label="Open menu" type="button" @click="openAction(&quot;Open menu&quot;, row.original._id, 1)">
                            <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                              <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" />
                            </svg>
                            <span class="sr-only">{{ row.original.actions }}</span>
                          </UButton>
                        </template>
                      </UTable>
                    </div>
                  </div>
                  <div class="flex items-center justify-between overflow-auto px-2">
                    <div class="text-muted hidden flex-1 text-sm sm:block">0 of30 row(s) selected.</div>
                    <div class="flex items-center sm:space-x-6 lg:space-x-8">
                      <div class="flex items-center space-x-2">
                        <p class="hidden text-sm font-medium sm:block">Rows per page</p>
                        <USelect v-model="form.field10" :items="field10Options" aria-label="10" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[70px]" />
                      </div>
                      <div class="flex w-[100px] items-center justify-center text-sm font-medium">Page 1 of3</div>
                      <div class="flex items-center space-x-2">
                        <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default hidden h-8 w-8 p-0 lg:flex" aria-label="Go to first page" type="button" disabled @click="openAction(&quot;Go to first page&quot;)">
                          <span class="sr-only">Go to first page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z" fill="currentColor" />
                          </svg>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 w-8 p-0" aria-label="Go to previous page" type="button" disabled @click="openAction(&quot;Go to previous page&quot;)">
                          <span class="sr-only">Go to previous page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" />
                          </svg>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 w-8 p-0" aria-label="Go to next page" type="button" @click="openAction(&quot;Go to next page&quot;)">
                          <span class="sr-only">Go to next page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" />
                          </svg>
                        </UButton>
                        <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default hidden h-8 w-8 p-0 lg:flex" aria-label="Go to last page" type="button" @click="openAction(&quot;Go to last page&quot;)">
                          <span class="sr-only">Go to last page</span>
                          <svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" class="h-4 w-4">
                            <path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" />
                          </svg>
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
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
