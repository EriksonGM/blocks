<!-- Page: /ecommerce/product-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Product List 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProducts": "",
  "category": "Category",
  "supplier": "Supplier",
  "stockLevel": "Stock level",
  "category2": "Category",
  "supplier2": "Supplier",
  "stockLevel2": "Stock level"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All products",
    "value": "0"
  }
]

const categoryOptions = [
  "Category",
  "Skincare Set",
  "Cream",
  "Serum",
  "Soap",
  "Treatment",
  "Essence",
  "Cleanser",
  "Mask",
  "Toner",
  "Body Care"
]

const supplierOptions = [
  "Supplier",
  "Retail",
  "Premium",
  "Bundles",
  "Bundle"
]

const stockLevelOptions = [
  "Stock level",
  "High",
  "Low",
  "Out"
]

const category2Options = [
  "Category",
  "Skincare Set",
  "Cream",
  "Serum",
  "Soap",
  "Treatment",
  "Essence",
  "Cleanser",
  "Mask",
  "Toner",
  "Body Care"
]

const supplier2Options = [
  "Supplier",
  "Retail",
  "Premium",
  "Bundles",
  "Bundle"
]

const stockLevel2Options = [
  "Stock level",
  "High",
  "Low",
  "Out"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "productName": "Barrier Repair Drops",
    "productNameArialabel4": "View Barrier Repair Drops",
    "productNameHref6": "/ecommerce/product-detail/barrier-repair-drops",
    "productNameAlt7": "Barrier Repair Drops",
    "productNameSrc10": "/reference/a6971d86435f2b61.jpg",
    "productNameHref12": "/ecommerce/product-detail/barrier-repair-drops",
    "sKU": "SKU-TREAT-6612",
    "category": "Treatment",
    "supplier": "Retail - Subscription",
    "supplierText3": "Retail",
    "supplierText4": " - Subscription",
    "currentStock": "96 units ·High",
    "currentStockText4": "96",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:61%",
    "unitPrice": "$84",
    "actions": "",
    "actionsArialabel3": "Open actions for Barrier Repair Drops",
    "actionsId5": "radix-_R_3hlav5uiv5uknmlb_"
  },
  {
    "_id": "2",
    "productName": "Botanical Body Polish",
    "productNameArialabel4": "View Botanical Body Polish",
    "productNameHref6": "/ecommerce/product-detail/botanical-body-polish",
    "productNameAlt7": "Botanical Body Polish",
    "productNameSrc10": "/reference/8b166c336110df82.jpg",
    "productNameHref12": "/ecommerce/product-detail/botanical-body-polish",
    "sKU": "SKU-BODY-6118",
    "category": "Body Care",
    "supplier": "Retail - +1",
    "supplierText3": "Retail",
    "supplierText4": " - +1",
    "currentStock": "47 units ·High",
    "currentStockText4": "47",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:43%",
    "unitPrice": "$52",
    "actions": "",
    "actionsArialabel3": "Open actions for Botanical Body Polish",
    "actionsId5": "radix-_R_3ilav5uiv5uknmlb_"
  },
  {
    "_id": "3",
    "productName": "Cloud Silk Toner",
    "productNameArialabel4": "View Cloud Silk Toner",
    "productNameHref6": "/ecommerce/product-detail/cloud-silk-toner",
    "productNameAlt7": "Cloud Silk Toner",
    "productNameSrc10": "/reference/21bbd4c7f95a8b14.jpg",
    "productNameHref12": "/ecommerce/product-detail/cloud-silk-toner",
    "sKU": "SKU-TONER-7723",
    "category": "Toner",
    "supplier": "Retail - +2 · Dropship",
    "supplierText3": "Retail",
    "supplierText4": " - +2 · Dropship",
    "currentStock": "64 units ·High",
    "currentStockText4": "64",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:58%",
    "unitPrice": "$46",
    "actions": "",
    "actionsArialabel3": "Open actions for Cloud Silk Toner",
    "actionsId5": "radix-_R_3jlav5uiv5uknmlb_"
  },
  {
    "_id": "4",
    "productName": "Dew Reset Essence",
    "productNameArialabel4": "View Dew Reset Essence",
    "productNameHref6": "/ecommerce/product-detail/dew-reset-essence",
    "productNameAlt7": "Dew Reset Essence",
    "productNameSrc10": "/reference/bcf34d3e00cde014.jpg",
    "productNameHref12": "/ecommerce/product-detail/dew-reset-essence",
    "sKU": "SKU-ESSN-2084",
    "category": "Essence",
    "supplier": "Retail - Subscription",
    "supplierText3": "Retail",
    "supplierText4": " - Subscription",
    "currentStock": "55 units ·High",
    "currentStockText4": "55",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:48%",
    "unitPrice": "$74",
    "actions": "",
    "actionsArialabel3": "Open actions for Dew Reset Essence",
    "actionsId5": "radix-_R_3klav5uiv5uknmlb_"
  },
  {
    "_id": "5",
    "productName": "HydraBloom Night Cream",
    "productNameArialabel4": "View HydraBloom Night Cream",
    "productNameHref6": "/ecommerce/product-detail/hydrabloom-night-cream",
    "productNameAlt7": "HydraBloom Night Cream",
    "productNameSrc10": "/reference/21bbd4c7f95a8b14.jpg",
    "productNameHref12": "/ecommerce/product-detail/hydrabloom-night-cream",
    "sKU": "SKU-BALM-8928",
    "category": "Cream",
    "supplier": "Retail - +2 · Dropship",
    "supplierText3": "Retail",
    "supplierText4": " - +2 · Dropship",
    "currentStock": "341 units ·High",
    "currentStockText4": "341",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:92%",
    "unitPrice": "$99",
    "actions": "",
    "actionsArialabel3": "Open actions for HydraBloom Night Cream",
    "actionsId5": "radix-_R_3llav5uiv5uknmlb_"
  },
  {
    "_id": "6",
    "productName": "Micro Peel Serum",
    "productNameArialabel4": "View Micro Peel Serum",
    "productNameHref6": "/ecommerce/product-detail/micro-peel-serum",
    "productNameAlt7": "Micro Peel Serum",
    "productNameSrc10": "/reference/b8fb3d6fba0ecec6.jpg",
    "productNameHref12": "/ecommerce/product-detail/micro-peel-serum",
    "sKU": "SKU-SERUM-4412",
    "category": "Serum",
    "supplier": "Premium - Inventory",
    "supplierText3": "Premium",
    "supplierText4": " - Inventory",
    "currentStock": "29 units ·Low",
    "currentStockText4": "29",
    "currentStockClass8": "text-error",
    "currentStockText9": "Low",
    "currentStockClass11": "h-1.5 rounded-full bg-error",
    "currentStockStyle12": "width:26%",
    "unitPrice": "$88",
    "actions": "",
    "actionsArialabel3": "Open actions for Micro Peel Serum",
    "actionsId5": "radix-_R_3mlav5uiv5uknmlb_"
  },
  {
    "_id": "7",
    "productName": "Overnight Recovery Mask",
    "productNameArialabel4": "View Overnight Recovery Mask",
    "productNameHref6": "/ecommerce/product-detail/overnight-recovery-mask",
    "productNameAlt7": "Overnight Recovery Mask",
    "productNameSrc10": "/reference/d8f5b647a767e7e9.jpg",
    "productNameHref12": "/ecommerce/product-detail/overnight-recovery-mask",
    "sKU": "SKU-MASK-5501",
    "category": "Mask",
    "supplier": "Premium - Inventory",
    "supplierText3": "Premium",
    "supplierText4": " - Inventory",
    "currentStock": "21 units ·Low",
    "currentStockText4": "21",
    "currentStockClass8": "text-error",
    "currentStockText9": "Low",
    "currentStockClass11": "h-1.5 rounded-full bg-error",
    "currentStockStyle12": "width:18%",
    "unitPrice": "$112",
    "actions": "",
    "actionsArialabel3": "Open actions for Overnight Recovery Mask",
    "actionsId5": "radix-_R_3nlav5uiv5uknmlb_"
  },
  {
    "_id": "8",
    "productName": "PureEssence Soap Trio",
    "productNameArialabel4": "View PureEssence Soap Trio",
    "productNameHref6": "/ecommerce/product-detail/pureessence-soap-trio",
    "productNameAlt7": "PureEssence Soap Trio",
    "productNameSrc10": "/reference/8b166c336110df82.jpg",
    "productNameHref12": "/ecommerce/product-detail/pureessence-soap-trio",
    "sKU": "SKU-SOAP-5214",
    "category": "Soap",
    "supplier": "Bundles - +1",
    "supplierText3": "Bundles",
    "supplierText4": " - +1",
    "currentStock": "28 units ·Low",
    "currentStockText4": "28",
    "currentStockClass8": "text-error",
    "currentStockText9": "Low",
    "currentStockClass11": "h-1.5 rounded-full bg-error",
    "currentStockStyle12": "width:22%",
    "unitPrice": "$59",
    "actions": "",
    "actionsArialabel3": "Open actions for PureEssence Soap Trio",
    "actionsId5": "radix-_R_3olav5uiv5uknmlb_"
  },
  {
    "_id": "9",
    "productName": "Radiance Ritual Set",
    "productNameArialabel4": "View Radiance Ritual Set",
    "productNameHref6": "/ecommerce/product-detail/radiance-ritual-set",
    "productNameAlt7": "Radiance Ritual Set",
    "productNameSrc10": "/reference/6316e6ac87fcaa0e.jpg",
    "productNameHref12": "/ecommerce/product-detail/radiance-ritual-set",
    "sKU": "SKU-SKIN-4006",
    "category": "Skincare Set",
    "supplier": "Retail - +2 · Dropship",
    "supplierText3": "Retail",
    "supplierText4": " - +2 · Dropship",
    "currentStock": "210 units ·High",
    "currentStockText4": "210",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:76%",
    "unitPrice": "$389",
    "actions": "",
    "actionsArialabel3": "Open actions for Radiance Ritual Set",
    "actionsId5": "radix-_R_3plav5uiv5uknmlb_"
  },
  {
    "_id": "10",
    "productName": "Radiant Lock Mist",
    "productNameArialabel4": "View Radiant Lock Mist",
    "productNameHref6": "/ecommerce/product-detail/radiant-lock-mist",
    "productNameAlt7": "Radiant Lock Mist",
    "productNameSrc10": "/reference/b8fb3d6fba0ecec6.jpg",
    "productNameHref12": "/ecommerce/product-detail/radiant-lock-mist",
    "sKU": "SKU-SERUM-7811",
    "category": "Serum",
    "supplier": "Retail - Inventory",
    "supplierText3": "Retail",
    "supplierText4": " - Inventory",
    "currentStock": "67 units ·High",
    "currentStockText4": "67",
    "currentStockClass8": "text-success",
    "currentStockText9": "High",
    "currentStockClass11": "h-1.5 rounded-full bg-success",
    "currentStockStyle12": "width:54%",
    "unitPrice": "$69",
    "actions": "",
    "actionsArialabel3": "Open actions for Radiant Lock Mist",
    "actionsId5": "radix-_R_3qlav5uiv5uknmlb_"
  },
  {
    "_id": "11",
    "productName": "Timeless Renewal Cream",
    "productNameArialabel4": "View Timeless Renewal Cream",
    "productNameHref6": "/ecommerce/product-detail/timeless-renewal-cream",
    "productNameAlt7": "Timeless Renewal Cream",
    "productNameSrc10": "/reference/d8f5b647a767e7e9.jpg",
    "productNameHref12": "/ecommerce/product-detail/timeless-renewal-cream",
    "sKU": "SKU-CREAM-9902",
    "category": "Cream",
    "supplier": "Premium - Inventory",
    "supplierText3": "Premium",
    "supplierText4": " - Inventory",
    "currentStock": "12 units ·Low",
    "currentStockText4": "12",
    "currentStockClass8": "text-error",
    "currentStockText9": "Low",
    "currentStockClass11": "h-1.5 rounded-full bg-error",
    "currentStockStyle12": "width:12%",
    "unitPrice": "$199",
    "actions": "",
    "actionsArialabel3": "Open actions for Timeless Renewal Cream",
    "actionsId5": "radix-_R_3rlav5uiv5uknmlb_"
  },
  {
    "_id": "12",
    "productName": "Velvet Cleanse Balm",
    "productNameArialabel4": "View Velvet Cleanse Balm",
    "productNameHref6": "/ecommerce/product-detail/velvet-cleanse-balm",
    "productNameAlt7": "Velvet Cleanse Balm",
    "productNameSrc10": "/reference/6316e6ac87fcaa0e.jpg",
    "productNameHref12": "/ecommerce/product-detail/velvet-cleanse-balm",
    "sKU": "SKU-CLEAN-1148",
    "category": "Cleanser",
    "supplier": "Bundle - +1",
    "supplierText3": "Bundle",
    "supplierText4": " - +1",
    "currentStock": "38 units ·Low",
    "currentStockText4": "38",
    "currentStockClass8": "text-error",
    "currentStockText9": "Low",
    "currentStockClass11": "h-1.5 rounded-full bg-error",
    "currentStockStyle12": "width:30%",
    "unitPrice": "$64",
    "actions": "",
    "actionsArialabel3": "Open actions for Velvet Cleanse Balm",
    "actionsId5": "radix-_R_3slav5uiv5uknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "productName",
    "header": "Product name"
  },
  {
    "accessorKey": "sKU",
    "header": "SKU"
  },
  {
    "accessorKey": "category",
    "header": "Category"
  },
  {
    "accessorKey": "supplier",
    "header": "Supplier"
  },
  {
    "accessorKey": "currentStock",
    "header": "Current Stock"
  },
  {
    "accessorKey": "unitPrice",
    "header": "Unit Price"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchProducts || '').toLowerCase()
  const keys = ["productName","sKU","category","supplier","currentStock","unitPrice","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/product-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Products</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Product List 1</span>
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
          <div class="flex min-h-0 flex-1 flex-col overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-6 md:p-8">
                <div class="flex flex-col gap-4 pb-8 md:hidden">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Products</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Products</h1>
                    <p class="text-muted text-sm">Browse and manage your product catalog.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-11 w-full rounded-xl px-5 shadow-none" to="/ecommerce/add-product">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add Products
                  </NuxtLink>
                </div>
                <div class="hidden gap-4 pb-8 md:flex lg:flex-row lg:items-start lg:justify-between">
                  <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Products</h1>
                    <p class="text-muted text-sm">Browse, filter, and manage your product catalog.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-md px-5 shadow-none" to="/ecommerce/add-product">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add Products
                  </NuxtLink>
                </div>
                <div class="flex flex-col">
                  <div data-orientation="horizontal" class="pt-2 pb-1">
                    <div class="border-b border-default">
                      <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center justify-center rounded-lg h-auto bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                    </div>
                  </div>
                  <div class="flex flex-col gap-4 pt-3 md:hidden">
                    <div class="relative">
                      <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                      <UInput v-model="form.searchProducts" type="search" placeholder="Search products" aria-label="Search products" name="searchProducts" class="flex w-full text-base md:text-sm h-12 rounded-2xl pl-9" :ui="{ base: 'h-full' }" />
                    </div>
                    <div class="grid gap-3 min-[360px]:grid-cols-2">
                      <USelect v-model="form.category" :items="categoryOptions" aria-label="Filter products by category" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 w-full rounded-2xl" />
                      <USelect v-model="form.supplier" :items="supplierOptions" aria-label="Filter products by supplier" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 w-full rounded-2xl" />
                      <div class="min-[360px]:col-span-2">
                        <USelect v-model="form.stockLevel" :items="stockLevelOptions" aria-label="Filter products by stock level" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 w-full rounded-2xl" />
                      </div>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-11 w-full rounded-2xl" aria-label="Manage Table" type="button" @click="openAction(&quot;Manage Table&quot;)">
                      <UIcon name="i-lucide-settings-2" class="size-4" />
                      Manage Table
                    </UButton>
                  </div>
                  <div class="hidden gap-4 pt-2 md:flex md:flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div class="flex flex-wrap items-center gap-3">
                      <div class="relative">
                        <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                        <UInput v-model="form.searchProducts" type="search" placeholder="Search products" aria-label="Search products" name="searchProducts" class="flex text-base md:text-sm h-10 w-[220px] rounded-lg pl-9" :ui="{ base: 'h-full' }" />
                      </div>
                      <USelect v-model="form.category2" :items="category2Options" aria-label="Filter products by category" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[140px] rounded-lg" />
                      <USelect v-model="form.supplier2" :items="supplier2Options" aria-label="Filter products by supplier" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[140px] rounded-lg" />
                      <USelect v-model="form.stockLevel2" :items="stockLevel2Options" aria-label="Filter products by stock level" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[150px] rounded-lg" />
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-10 rounded-lg px-4" aria-label="Manage Table" type="button" @click="openAction(&quot;Manage Table&quot;)">
                      <UIcon name="i-lucide-settings-2" class="size-4" />
                      Manage Table
                    </UButton>
                  </div>
                </div>
                <div class="flex flex-col gap-4 pt-3 md:hidden">
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Barrier Repair Drops" class="absolute inset-0" to="/ecommerce/product-detail/barrier-repair-drops">
                          <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/barrier-repair-drops">
                              Barrier Repair Drops
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-TREAT-6612</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Barrier Repair Drops" type="button" @click="openAction(&quot;Open actions for Barrier Repair Drops&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Treatment</div>
                          <span class="text-muted text-xs">Retail · Subscription</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$84</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">96 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:61%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Botanical Body Polish" class="absolute inset-0" to="/ecommerce/product-detail/botanical-body-polish">
                          <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/botanical-body-polish">
                              Botanical Body Polish
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-BODY-6118</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Botanical Body Polish" type="button" @click="openAction(&quot;Open actions for Botanical Body Polish&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Body Care</div>
                          <span class="text-muted text-xs">Retail · +1</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$52</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">47 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:43%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Cloud Silk Toner" class="absolute inset-0" to="/ecommerce/product-detail/cloud-silk-toner">
                          <img alt="Cloud Silk Toner" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/cloud-silk-toner">
                              Cloud Silk Toner
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-TONER-7723</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Cloud Silk Toner" type="button" @click="openAction(&quot;Open actions for Cloud Silk Toner&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Toner</div>
                          <span class="text-muted text-xs">Retail · +2 · Dropship</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$46</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">64 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:58%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Dew Reset Essence" class="absolute inset-0" to="/ecommerce/product-detail/dew-reset-essence">
                          <img alt="Dew Reset Essence" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/bcf34d3e00cde014.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/dew-reset-essence">
                              Dew Reset Essence
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-ESSN-2084</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Dew Reset Essence" type="button" @click="openAction(&quot;Open actions for Dew Reset Essence&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Essence</div>
                          <span class="text-muted text-xs">Retail · Subscription</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$74</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">55 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:48%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View HydraBloom Night Cream" class="absolute inset-0" to="/ecommerce/product-detail/hydrabloom-night-cream">
                          <img alt="HydraBloom Night Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/21bbd4c7f95a8b14.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/hydrabloom-night-cream">
                              HydraBloom Night Cream
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-BALM-8928</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for HydraBloom Night Cream" type="button" @click="openAction(&quot;Open actions for HydraBloom Night Cream&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Cream</div>
                          <span class="text-muted text-xs">Retail · +2 · Dropship</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$99</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">341 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:92%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Micro Peel Serum" class="absolute inset-0" to="/ecommerce/product-detail/micro-peel-serum">
                          <img alt="Micro Peel Serum" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/micro-peel-serum">
                              Micro Peel Serum
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-SERUM-4412</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Micro Peel Serum" type="button" @click="openAction(&quot;Open actions for Micro Peel Serum&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Serum</div>
                          <span class="text-muted text-xs">Premium · Inventory</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$88</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">29 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-error">Low</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-error" style="width:26%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Overnight Recovery Mask" class="absolute inset-0" to="/ecommerce/product-detail/overnight-recovery-mask">
                          <img alt="Overnight Recovery Mask" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/overnight-recovery-mask">
                              Overnight Recovery Mask
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-MASK-5501</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Overnight Recovery Mask" type="button" @click="openAction(&quot;Open actions for Overnight Recovery Mask&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Mask</div>
                          <span class="text-muted text-xs">Premium · Inventory</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$112</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">21 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-error">Low</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-error" style="width:18%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View PureEssence Soap Trio" class="absolute inset-0" to="/ecommerce/product-detail/pureessence-soap-trio">
                          <img alt="PureEssence Soap Trio" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/pureessence-soap-trio">
                              PureEssence Soap Trio
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-SOAP-5214</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for PureEssence Soap Trio" type="button" @click="openAction(&quot;Open actions for PureEssence Soap Trio&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Soap</div>
                          <span class="text-muted text-xs">Bundles · +1</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$59</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">28 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-error">Low</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-error" style="width:22%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Radiance Ritual Set" class="absolute inset-0" to="/ecommerce/product-detail/radiance-ritual-set">
                          <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/radiance-ritual-set">
                              Radiance Ritual Set
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-SKIN-4006</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Radiance Ritual Set" type="button" @click="openAction(&quot;Open actions for Radiance Ritual Set&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Skincare Set</div>
                          <span class="text-muted text-xs">Retail · +2 · Dropship</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$389</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">210 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:76%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Radiant Lock Mist" class="absolute inset-0" to="/ecommerce/product-detail/radiant-lock-mist">
                          <img alt="Radiant Lock Mist" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b8fb3d6fba0ecec6.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/radiant-lock-mist">
                              Radiant Lock Mist
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-SERUM-7811</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Radiant Lock Mist" type="button" @click="openAction(&quot;Open actions for Radiant Lock Mist&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Serum</div>
                          <span class="text-muted text-xs">Retail · Inventory</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$69</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">67 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-success">High</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-success" style="width:54%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Timeless Renewal Cream" class="absolute inset-0" to="/ecommerce/product-detail/timeless-renewal-cream">
                          <img alt="Timeless Renewal Cream" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d8f5b647a767e7e9.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/timeless-renewal-cream">
                              Timeless Renewal Cream
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-CREAM-9902</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Timeless Renewal Cream" type="button" @click="openAction(&quot;Open actions for Timeless Renewal Cream&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Cream</div>
                          <span class="text-muted text-xs">Premium · Inventory</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$199</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">12 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-error">Low</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-error" style="width:12%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start gap-3">
                      <div class="bg-muted relative size-16 shrink-0 overflow-hidden rounded-xl">
                        <NuxtLink aria-label="View Velvet Cleanse Balm" class="absolute inset-0" to="/ecommerce/product-detail/velvet-cleanse-balm">
                          <img alt="Velvet Cleanse Balm" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                        </NuxtLink>
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/product-detail/velvet-cleanse-balm">
                              Velvet Cleanse Balm
                            </NuxtLink>
                            <p class="text-muted mt-1 text-sm">SKU-CLEAN-1148</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for Velvet Cleanse Balm" type="button" @click="openAction(&quot;Open actions for Velvet Cleanse Balm&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="mt-3 flex flex-wrap items-center gap-2">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Cleanser</div>
                          <span class="text-muted text-xs">Bundle · +1</span>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-3">
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Unit price</span>
                            <span class="text-sm font-medium">$64</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-muted text-xs">Stock</span>
                            <span class="text-sm font-medium">38 units</span>
                          </div>
                        </div>
                        <div class="mt-4 flex flex-col gap-1.5">
                          <span class="text-sm">
                            Status
                            <span class="text-error">Low</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div class="h-1.5 rounded-full bg-error" style="width:30%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="hidden overflow-x-auto pt-3 md:block">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Product name / SKU / Category / Supplier / Current Stock / Unit Price -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm min-w-[980px]" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #productName-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Product name" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #productName-cell="{ row }">
                        <div class="flex items-center gap-3">
                          <div class="bg-muted relative size-10 overflow-hidden rounded-md">
                            <NuxtLink :aria-label="row.original.productNameArialabel4" class="absolute inset-0" :to="row.original.productNameHref6">
                              <img :alt="row.original.productNameAlt7" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" :src="row.original.productNameSrc10" loading="lazy" />
                            </NuxtLink>
                          </div>
                          <NuxtLink class="max-w-[260px] truncate text-sm font-medium hover:underline" :to="row.original.productNameHref12">
                            {{ row.original.productName }}
                          </NuxtLink>
                        </div>
                      </template>
                      <template #sKU-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="SKU" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #sKU-cell="{ row }">
                        {{ row.original.sKU }}
                      </template>
                      <template #category-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Category" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #category-cell="{ row }">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">{{ row.original.category }}</div>
                      </template>
                      <template #supplier-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Supplier" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #supplier-cell="{ row }">
                        <span class="text-sm font-medium">{{ row.original.supplierText3 }}{{ row.original.supplierText4 }}</span>
                      </template>
                      <template #currentStock-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Current Stock" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #currentStock-cell="{ row }">
                        <div class="flex min-w-[140px] flex-col gap-1.5">
                          <span class="text-sm">
                            {{ row.original.currentStockText4 }} units ·
                            <span :class="row.original.currentStockClass8">{{ row.original.currentStockText9 }}</span>
                          </span>
                          <div class="bg-muted h-1.5 rounded-full">
                            <div :class="row.original.currentStockClass11" :style="row.original.currentStockStyle12" />
                          </div>
                        </div>
                      </template>
                      <template #unitPrice-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Unit Price" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #unitPrice-cell="{ row }">
                        {{ row.original.unitPrice }}
                      </template>
                      <template #actions-cell="{ row }">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Open actions for Barrier Repair Drops&quot;, row.original._id, 1)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </template>
                    </UTable>
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
