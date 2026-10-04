<!-- Page: /ecommerce/shipment-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Shipment List 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchShipments": "",
  "allTime": "All time",
  "advancedFilters": "Advanced Filters",
  "allTime2": "All time",
  "advancedFilters2": "Advanced Filters"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All Shipments",
    "value": "0"
  },
  {
    "label": "Pending",
    "value": "1"
  },
  {
    "label": "Arrived",
    "value": "2"
  },
  {
    "label": "Canceled",
    "value": "3"
  }
]

const allTimeOptions = [
  "All time",
  "Last 3 days",
  "Last 7 days"
]

const advancedFiltersOptions = [
  "Advanced Filters",
  "Express",
  "Standard",
  "Economy",
  "Signature"
]

const allTime2Options = [
  "All time",
  "Last 3 days",
  "Last 7 days"
]

const advancedFilters2Options = [
  "Advanced Filters",
  "Express",
  "Standard",
  "Economy",
  "Signature"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "shipmentID": "SHP-8801",
    "shipmentIDGroup": "0",
    "expectedArrival": "Mar 24, 2026",
    "status": "Pending",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "order": "ORD-52108",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default",
    "shipmentEventClass9": "size-3.5 text-highlighted",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "ParcelFlowExpress",
    "carrierClass3": "size-2 rounded-full bg-info",
    "carrierText5": "ParcelFlow",
    "carrierText7": "Express",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8801",
    "actionsId5": "radix-_R_3hlav5uiv5uknmlb_"
  },
  {
    "_id": "2",
    "shipmentID": "SHP-8800",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 24, 2026",
    "status": "Draft",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "order": "ORD-52103",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "FedExStandard",
    "carrierClass3": "size-2 rounded-full bg-secondary",
    "carrierText5": "FedEx",
    "carrierText7": "Standard",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8800",
    "actionsId5": "radix-_R_3ilav5uiv5uknmlb_"
  },
  {
    "_id": "3",
    "shipmentID": "SHP-8799",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 23, 2026",
    "status": "Arrived",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "order": "ORD-52097",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-bg)",
    "carrier": "DHLExpress",
    "carrierClass3": "size-2 rounded-full bg-warning",
    "carrierText5": "DHL",
    "carrierText7": "Express",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8799",
    "actionsId5": "radix-_R_3jlav5uiv5uknmlb_"
  },
  {
    "_id": "4",
    "shipmentID": "SHP-8798",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 23, 2026",
    "status": "Canceled",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default",
    "order": "ORD-52091",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-error",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border bg-default border-error",
    "shipmentEventClass9": "size-3.5 text-error",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "NorthlineEconomy",
    "carrierClass3": "size-2 rounded-full bg-inverted",
    "carrierText5": "Northline",
    "carrierText7": "Economy",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8798",
    "actionsId5": "radix-_R_3klav5uiv5uknmlb_"
  },
  {
    "_id": "5",
    "shipmentID": "SHP-8797",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 22, 2026",
    "status": "Pending",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "order": "ORD-52088",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default",
    "shipmentEventClass13": "size-3.5 text-highlighted",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "UPSSignature",
    "carrierClass3": "size-2 rounded-full bg-warning",
    "carrierText5": "UPS",
    "carrierText7": "Signature",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8797",
    "actionsId5": "radix-_R_3llav5uiv5uknmlb_"
  },
  {
    "_id": "6",
    "shipmentID": "SHP-8796",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 22, 2026",
    "status": "PendingDelay",
    "statusGroup": "1",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "order": "ORD-52084",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default",
    "shipmentEventClass13": "size-3.5 text-highlighted",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "TNTExpress",
    "carrierClass3": "size-2 rounded-full bg-warning",
    "carrierText5": "TNT",
    "carrierText7": "Express",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8796",
    "actionsId5": "radix-_R_3mlav5uiv5uknmlb_"
  },
  {
    "_id": "7",
    "shipmentID": "SHP-8795",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 21, 2026",
    "status": "Arrived",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "order": "ORD-52072",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-bg)",
    "carrier": "ParcelFlowStandard",
    "carrierClass3": "size-2 rounded-full bg-info",
    "carrierText5": "ParcelFlow",
    "carrierText7": "Standard",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8795",
    "actionsId5": "radix-_R_3nlav5uiv5uknmlb_"
  },
  {
    "_id": "8",
    "shipmentID": "SHP-8794",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 21, 2026",
    "status": "Draft",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default",
    "order": "ORD-52061",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "FedExEconomy",
    "carrierClass3": "size-2 rounded-full bg-secondary",
    "carrierText5": "FedEx",
    "carrierText7": "Economy",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8794",
    "actionsId5": "radix-_R_3olav5uiv5uknmlb_"
  },
  {
    "_id": "9",
    "shipmentID": "SHP-8793",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 20, 2026",
    "status": "Pending",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "order": "ORD-52044",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default",
    "shipmentEventClass9": "size-3.5 text-highlighted",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-text-muted)/40",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "AramexStandard",
    "carrierClass3": "size-2 rounded-full bg-error",
    "carrierText5": "Aramex",
    "carrierText7": "Standard",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8793",
    "actionsId5": "radix-_R_3plav5uiv5uknmlb_"
  },
  {
    "_id": "10",
    "shipmentID": "SHP-8792",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 20, 2026",
    "status": "Pending",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default",
    "order": "ORD-52039",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default",
    "shipmentEventClass13": "size-3.5 text-highlighted",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-border)/70",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-default bg-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-text-muted)/40",
    "carrier": "UPSSignature",
    "carrierClass3": "size-2 rounded-full bg-warning",
    "carrierText5": "UPS",
    "carrierText7": "Signature",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8792",
    "actionsId5": "radix-_R_3qlav5uiv5uknmlb_"
  },
  {
    "_id": "11",
    "shipmentID": "SHP-8791",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 19, 2026",
    "status": "Arrived",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "order": "ORD-52028",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-bg)",
    "carrier": "NorthlineEconomy",
    "carrierClass3": "size-2 rounded-full bg-inverted",
    "carrierText5": "Northline",
    "carrierText7": "Economy",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8791",
    "actionsId5": "radix-_R_3rlav5uiv5uknmlb_"
  },
  {
    "_id": "12",
    "shipmentID": "SHP-8790",
    "shipmentIDGroup": "1",
    "expectedArrival": "Mar 18, 2026",
    "status": "Arrived",
    "statusGroup": "0",
    "statusClass3": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default",
    "order": "ORD-52015",
    "shipmentEvent": "",
    "shipmentEventClass3": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass5": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass6": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass7": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass9": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass10": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass11": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass13": "size-3.5 text-(--ui-bg)",
    "shipmentEventClass14": "h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)",
    "shipmentEventClass15": "flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default",
    "shipmentEventClass17": "size-3.5 text-(--ui-bg)",
    "carrier": "DHLExpress",
    "carrierClass3": "size-2 rounded-full bg-warning",
    "carrierText5": "DHL",
    "carrierText7": "Express",
    "actions": "",
    "actionsArialabel3": "Open actions for SHP-8790",
    "actionsId5": "radix-_R_3slav5uiv5uknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "shipmentID",
    "header": "Shipment ID"
  },
  {
    "accessorKey": "expectedArrival",
    "header": "Expected arrival"
  },
  {
    "accessorKey": "status",
    "header": "Status"
  },
  {
    "accessorKey": "order",
    "header": "Order"
  },
  {
    "accessorKey": "shipmentEvent",
    "header": "Shipment Event"
  },
  {
    "accessorKey": "carrier",
    "header": "Carrier"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchShipments || '').toLowerCase()
  const keys = ["shipmentID","expectedArrival","status","order","shipmentEvent","carrier","actions"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/shipment-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Shipments</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Shipment List 1</span>
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
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-col">
              <div class="flex flex-col p-6 md:p-8">
                <div class="flex flex-col gap-4 pb-8 md:hidden">
                  <div class="flex items-center gap-3 text-sm">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Shipments</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Shipments</h1>
                    <p class="text-muted text-sm">Track carrier progress, arrivals, and delivery exceptions.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-11 w-full rounded-xl px-5 shadow-none" to="/ecommerce/add-shipping">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add Shipment
                  </NuxtLink>
                </div>
                <div class="hidden gap-4 pb-8 md:flex lg:flex-row lg:items-start lg:justify-between">
                  <div class="flex flex-col gap-1">
                    <h1 class="text-3xl font-medium tracking-tight text-highlighted">Shipments</h1>
                    <p class="text-muted text-sm">Track carrier progress, arrivals, and delivery exceptions.</p>
                  </div>
                  <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 py-2 h-10 rounded-md px-5 shadow-none" to="/ecommerce/add-shipping">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add Shipment
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
                      <UInput v-model="form.searchShipments" type="search" placeholder="Search shipments" aria-label="Search shipments" name="searchShipments" class="flex w-full text-base md:text-sm h-12 rounded-2xl pl-9" :ui="{ base: 'h-full' }" />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <USelect v-model="form.allTime" :items="allTimeOptions" aria-label="Filter shipments by date range" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
                      <USelect v-model="form.advancedFilters" :items="advancedFiltersOptions" aria-label="Filter shipments by service" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-2xl" />
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
                        <UInput v-model="form.searchShipments" type="search" placeholder="Search shipments" aria-label="Search shipments" name="searchShipments" class="flex text-base md:text-sm h-10 w-[220px] rounded-lg pl-9" :ui="{ base: 'h-full' }" />
                      </div>
                      <USelect v-model="form.allTime2" :items="allTime2Options" aria-label="Filter shipments by date range" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[150px] rounded-lg" />
                      <USelect v-model="form.advancedFilters2" :items="advancedFilters2Options" aria-label="Filter shipments by service" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 w-[170px] rounded-lg" />
                    </div>
                    <div class="flex items-center gap-3">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-10 rounded-lg px-4" aria-label="Manage Table" type="button" @click="openAction(&quot;Manage Table&quot;)">
                        <UIcon name="i-lucide-settings-2" class="size-4" />
                        Manage Table
                      </UButton>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-4 pt-4 md:hidden">
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="size-2 rounded-full bg-error" />
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8801
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52108</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8801" type="button" @click="openAction(&quot;Open actions for SHP-8801&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Pending</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-highlighted" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Label confirmed, awaiting carrier pickup</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 24, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">ParcelFlow</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-info" />
                        <span class="font-medium">ParcelFlow</span>
                        <span class="text-muted">Express</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8800
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52103</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8800" type="button" @click="openAction(&quot;Open actions for SHP-8800&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Draft</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Shipment draft saved before label purchase</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 24, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">FedEx</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-secondary" />
                        <span class="font-medium">FedEx</span>
                        <span class="text-muted">Standard</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8799
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52097</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8799" type="button" @click="openAction(&quot;Open actions for SHP-8799&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Arrived</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-bg)" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Delivered to the customer doorstep</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 23, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">DHL</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-warning" />
                        <span class="font-medium">DHL</span>
                        <span class="text-muted">Express</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8798
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52091</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8798" type="button" @click="openAction(&quot;Open actions for SHP-8798&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-error/10 text-error hover:bg-error/10 border-default">Canceled</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-error" />
                        <span class="flex size-6 items-center justify-center rounded-full border bg-default border-error">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-error" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Canceled after carrier handoff was voided</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 23, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">Northline</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-inverted" />
                        <span class="font-medium">Northline</span>
                        <span class="text-muted">Economy</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8797
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52088</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8797" type="button" @click="openAction(&quot;Open actions for SHP-8797&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Pending</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-highlighted" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Linehaul in progress across the west region</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 22, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">UPS</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-warning" />
                        <span class="font-medium">UPS</span>
                        <span class="text-muted">Signature</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8796
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52084</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8796" type="button" @click="openAction(&quot;Open actions for SHP-8796&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Pending</div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-warning/10 text-warning hover:bg-warning/10 border-default">Delay</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-highlighted" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Sorting hub scan complete, last-mile next</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 22, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">TNT</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-warning" />
                        <span class="font-medium">TNT</span>
                        <span class="text-muted">Express</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8795
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52072</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8795" type="button" @click="openAction(&quot;Open actions for SHP-8795&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Arrived</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-bg)" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Received by customer with proof of delivery</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 21, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">ParcelFlow</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-info" />
                        <span class="font-medium">ParcelFlow</span>
                        <span class="text-muted">Standard</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8794
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52061</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8794" type="button" @click="openAction(&quot;Open actions for SHP-8794&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-muted text-default hover:bg-muted border-default">Draft</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Awaiting packaging confirmation from warehouse</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 21, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">FedEx</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-secondary" />
                        <span class="font-medium">FedEx</span>
                        <span class="text-muted">Economy</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8793
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52044</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8793" type="button" @click="openAction(&quot;Open actions for SHP-8793&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Pending</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-highlighted" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Picked up and queued for regional transfer</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 20, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">Aramex</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-error" />
                        <span class="font-medium">Aramex</span>
                        <span class="text-muted">Standard</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8792
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52039</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8792" type="button" @click="openAction(&quot;Open actions for SHP-8792&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Pending</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-default border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-highlighted" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-border)/70" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-default bg-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-text-muted)/40" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Out for final-mile routing</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 20, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">UPS</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-warning" />
                        <span class="font-medium">UPS</span>
                        <span class="text-muted">Signature</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8791
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52028</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8791" type="button" @click="openAction(&quot;Open actions for SHP-8791&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Arrived</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-bg)" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Delivered to lobby receiving desk</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 19, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">Northline</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-inverted" />
                        <span class="font-medium">Northline</span>
                        <span class="text-muted">Economy</span>
                      </div>
                    </div>
                  </article>
                  <article class="border-(--ui-border)/70 bg-default rounded-2xl border p-4 border-default">
                    <div class="flex items-start justify-between gap-3">
                      <div class="min-w-0">
                        <div class="flex items-center gap-2">
                          <NuxtLink class="truncate text-base font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                            SHP-8790
                          </NuxtLink>
                        </div>
                        <p class="text-muted mt-1 text-sm">ORD-52015</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" aria-label="Open actions for SHP-8790" type="button" @click="openAction(&quot;Open actions for SHP-8790&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                    </div>
                    <div class="mt-4">
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Arrived</div>
                      </div>
                    </div>
                    <div class="mt-4 flex flex-col gap-3">
                      <div class="flex min-w-[140px] items-center">
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-package" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-clipboard-check" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-truck" class="size-3.5 text-(--ui-bg)" />
                        </span>
                        <span class="h-[2px] flex-1 rounded-full bg-(--ui-text-highlighted)" />
                        <span class="flex size-6 items-center justify-center rounded-full border border-(--ui-text-highlighted) bg-(--ui-text-highlighted) border-default">
                          <UIcon name="i-lucide-map-pin" class="size-3.5 text-(--ui-bg)" />
                        </span>
                      </div>
                      <p class="text-muted text-sm">Express delivery completed ahead of ETA</p>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Expected arrival</span>
                        <span class="text-sm font-medium">Mar 18, 2026</span>
                      </div>
                      <div class="flex flex-col gap-1">
                        <span class="text-muted text-xs">Carrier</span>
                        <span class="text-sm font-medium">DHL</span>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                        <span class="size-2 rounded-full bg-warning" />
                        <span class="font-medium">DHL</span>
                        <span class="text-muted">Express</span>
                      </div>
                    </div>
                  </article>
                </div>
                <div class="hidden overflow-x-auto pt-4 md:block">
                  <div class="relative w-full overflow-auto">
                    <!-- Table 1: Shipment ID / Expected arrival / Status / Order / Shipment Event / Carrier -->
                    <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #shipmentID-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Shipment ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #shipmentID-cell="{ row }">
                        <template v-if="row.original.shipmentIDGroup === '0'">
                          <div class="flex items-center gap-2">
                            <span class="size-1.5 rounded-full bg-error" />
                            <NuxtLink class="font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                              {{ row.original.shipmentID }}
                            </NuxtLink>
                          </div>
                        </template>
                        <template v-if="row.original.shipmentIDGroup === '1'">
                          <div class="flex items-center gap-2">
                            <NuxtLink class="font-medium hover:underline" to="/ecommerce/shipment-detail-1">
                              {{ row.original.shipmentID }}
                            </NuxtLink>
                          </div>
                        </template>
                      </template>
                      <template #expectedArrival-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Expected arrival" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #expectedArrival-cell="{ row }">
                        {{ row.original.expectedArrival }}
                      </template>
                      <template #status-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Status" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #status-cell="{ row }">
                        <template v-if="row.original.statusGroup === '0'">
                          <div class="flex flex-wrap items-center gap-2">
                            <div :class="row.original.statusClass3">{{ row.original.status }}</div>
                          </div>
                        </template>
                        <template v-if="row.original.statusGroup === '1'">
                          <div class="flex flex-wrap items-center gap-2">
                            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-info/10 text-info hover:bg-info/10 border-default">Pending</div>
                            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-warning/10 text-warning hover:bg-warning/10 border-default">Delay</div>
                          </div>
                        </template>
                      </template>
                      <template #order-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Order" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #order-cell="{ row }">
                        <span class="font-medium">{{ row.original.order }}</span>
                      </template>
                      <template #shipmentEvent-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Shipment Event" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #shipmentEvent-cell="{ row }">
                        <div class="flex min-w-[140px] items-center">
                          <span :class="row.original.shipmentEventClass3">
                            <UIcon name="i-lucide-package" :class="row.original.shipmentEventClass5 || 'size-4'" />
                          </span>
                          <span :class="row.original.shipmentEventClass6" />
                          <span :class="row.original.shipmentEventClass7">
                            <UIcon name="i-lucide-clipboard-check" :class="row.original.shipmentEventClass9 || 'size-4'" />
                          </span>
                          <span :class="row.original.shipmentEventClass10" />
                          <span :class="row.original.shipmentEventClass11">
                            <UIcon name="i-lucide-truck" :class="row.original.shipmentEventClass13 || 'size-4'" />
                          </span>
                          <span :class="row.original.shipmentEventClass14" />
                          <span :class="row.original.shipmentEventClass15">
                            <UIcon name="i-lucide-map-pin" :class="row.original.shipmentEventClass17 || 'size-4'" />
                          </span>
                        </div>
                      </template>
                      <template #carrier-header="{ column }">
                        <UButton color="neutral" variant="ghost" size="xs" label="Carrier" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                      </template>
                      <template #carrier-cell="{ row }">
                        <div class="border-(--ui-border)/70 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs border-default">
                          <span :class="row.original.carrierClass3" />
                          <span class="font-medium">{{ row.original.carrierText5 }}</span>
                          <span class="text-muted">{{ row.original.carrierText7 }}</span>
                        </div>
                      </template>
                      <template #actions-cell="{ row }">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-8 rounded-full" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Open actions for SHP-8801&quot;, row.original._id, 1)">
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
