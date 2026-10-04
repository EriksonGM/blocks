<!-- Page: /payment-processor/dashboard-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 4 · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "amount": "Live queue",
    "amountGroup": "0",
    "account": "",
    "accountGroup": "0",
    "moreDetails": "",
    "moreDetailsGroup": "0",
    "amountName3": "",
    "amountText8": "",
    "amountClass9": "",
    "amountText10": "",
    "amountText12": "",
    "accountText3": "",
    "accountText5": "",
    "moreDetailsText8": "",
    "moreDetailsText10": "",
    "moreDetailsText14": ""
  },
  {
    "_id": "2",
    "amount": "$9,842.16 USDCaptured$286.42 fee",
    "amountGroup": "1",
    "account": "Vanta ManufacturingStripe · Visa ending 4928",
    "accountGroup": "1",
    "moreDetails": "View detail, reference evt_q8N4L2,Vanta ManufacturingRefevt_q8N4L2",
    "moreDetailsGroup": "1",
    "amountName3": "i-lucide-circle-arrow-up",
    "amountText8": "$9,842.16 USD",
    "amountClass9": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-none border-success/20 bg-success/10 text-success dark:text-success",
    "amountText10": "Captured",
    "amountText12": "$286.42 fee",
    "accountText3": "Vanta Manufacturing",
    "accountText5": "Stripe · Visa ending 4928",
    "moreDetailsText8": "evt_q8N4L2",
    "moreDetailsText10": "Vanta Manufacturing",
    "moreDetailsText14": "evt_q8N4L2"
  },
  {
    "_id": "3",
    "amount": "$18,406.72 USDPayout",
    "amountGroup": "2",
    "account": "Kite HarborAdyen · ACH settlement",
    "accountGroup": "1",
    "moreDetails": "View detail, reference po_7MpxH91,Kite HarborRefpo_7MpxH91",
    "moreDetailsGroup": "1",
    "amountName3": "i-lucide-circle-arrow-down",
    "amountText8": "$18,406.72 USD",
    "amountClass9": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-none border-secondary/20 bg-secondary/10 text-secondary dark:text-secondary",
    "amountText10": "Payout",
    "amountText12": "",
    "accountText3": "Kite Harbor",
    "accountText5": "Adyen · ACH settlement",
    "moreDetailsText8": "po_7MpxH91",
    "moreDetailsText10": "Kite Harbor",
    "moreDetailsText14": "po_7MpxH91"
  },
  {
    "_id": "4",
    "amount": "-$716.88 USDRefunded$21.51 reversal",
    "amountGroup": "1",
    "account": "Signal GroveBraintree · Mastercard ending 1882",
    "accountGroup": "1",
    "moreDetails": "View detail, reference rf_4Tbk30C,Signal GroveRefrf_4Tbk30C",
    "moreDetailsGroup": "1",
    "amountName3": "i-lucide-refresh-ccw",
    "amountText8": "-$716.88 USD",
    "amountClass9": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-none border-info/20 bg-info/10 text-info dark:text-info",
    "amountText10": "Refunded",
    "amountText12": "$21.51 reversal",
    "accountText3": "Signal Grove",
    "accountText5": "Braintree · Mastercard ending 1882",
    "moreDetailsText8": "rf_4Tbk30C",
    "moreDetailsText10": "Signal Grove",
    "moreDetailsText14": "rf_4Tbk30C"
  },
  {
    "_id": "5",
    "amount": "Earlier today",
    "amountGroup": "0",
    "account": "",
    "accountGroup": "0",
    "moreDetails": "",
    "moreDetailsGroup": "0",
    "amountName3": "",
    "amountText8": "",
    "amountClass9": "",
    "amountText10": "",
    "amountText12": "",
    "accountText3": "",
    "accountText5": "",
    "moreDetailsText8": "",
    "moreDetailsText10": "",
    "moreDetailsText14": ""
  },
  {
    "_id": "6",
    "amount": "$31,284.90 USDSettling$912.36 processor fees",
    "amountGroup": "1",
    "account": "Marble FinchRazorpay · UPI batch",
    "accountGroup": "1",
    "moreDetails": "View detail, reference set_2Kqv86D,Marble FinchRefset_2Kqv86D",
    "moreDetailsGroup": "1",
    "amountName3": "i-lucide-landmark",
    "amountText8": "$31,284.90 USD",
    "amountClass9": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-none border-warning/20 bg-warning/10 text-warning dark:text-warning",
    "amountText10": "Settling",
    "amountText12": "$912.36 processor fees",
    "accountText3": "Marble Finch",
    "accountText5": "Razorpay · UPI batch",
    "moreDetailsText8": "set_2Kqv86D",
    "moreDetailsText10": "Marble Finch",
    "moreDetailsText14": "set_2Kqv86D"
  },
  {
    "_id": "7",
    "amount": "$1,208.40 USDReview",
    "amountGroup": "2",
    "account": "Axiom DentalStripe Radar · elevated dispute risk",
    "accountGroup": "1",
    "moreDetails": "View detail, reference risk_9CwT52,Axiom DentalRefrisk_9CwT52",
    "moreDetailsGroup": "1",
    "amountName3": "i-lucide-shield-check",
    "amountText8": "$1,208.40 USD",
    "amountClass9": "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 shadow-none border-error/20 bg-error/10 text-error dark:text-error",
    "amountText10": "Review",
    "amountText12": "",
    "accountText3": "Axiom Dental",
    "accountText5": "Stripe Radar · elevated dispute risk",
    "moreDetailsText8": "risk_9CwT52",
    "moreDetailsText10": "Axiom Dental",
    "moreDetailsText14": "risk_9CwT52"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "amount",
    "header": "Amount"
  },
  {
    "accessorKey": "account",
    "header": "Account"
  },
  {
    "accessorKey": "moreDetails",
    "header": "More details"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["amount","account","moreDetails"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/dashboard-4">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-(--ui-bg-muted)/40 text-highlighted min-h-0 flex-1 overflow-y-auto">
          <div class="mx-auto flex w-full max-w-[1280px] min-w-0 flex-col gap-5 p-4 md:p-6">
            <header class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p class="text-muted text-sm">Payment workspace</p>
                <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Dashboard</h1>
              </div>
              <div class="flex items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default size-10 rounded-lg shadow-none" aria-label="Calendar" type="button" @click="openAction(&quot;Calendar&quot;)">
                  <UIcon name="i-lucide-calendar-days" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default size-10 rounded-lg shadow-none" aria-label="More actions" type="button" @click="openAction(&quot;More actions&quot;)">
                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                </UButton>
              </div>
            </header>
            <div class="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
              <div class="flex min-w-0 flex-col gap-4">
                <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] min-h-[118px] p-4 border-default">
                    <div class="flex h-full flex-col justify-between gap-5">
                      <UIcon name="i-lucide-badge-dollar-sign" class="size-4 text-info" />
                      <div>
                        <p class="text-muted text-xs">Gross Volume</p>
                        <p class="mt-1 text-lg font-semibold tracking-tight text-highlighted">$125,560</p>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] min-h-[118px] p-4 border-default">
                    <div class="flex h-full flex-col justify-between gap-5">
                      <UIcon name="i-lucide-landmark" class="size-4 text-secondary" />
                      <div>
                        <p class="text-muted text-xs">Net Revenue</p>
                        <p class="mt-1 text-lg font-semibold tracking-tight text-highlighted">$122,313</p>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] min-h-[118px] p-4 border-default">
                    <div class="flex h-full flex-col justify-between gap-5">
                      <UIcon name="i-lucide-circle-check" class="size-4 text-warning" />
                      <div>
                        <p class="text-muted text-xs">Successful Payments</p>
                        <p class="mt-1 text-lg font-semibold tracking-tight text-highlighted">2,345</p>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] min-h-[118px] p-4 border-default">
                    <div class="flex h-full flex-col justify-between gap-5">
                      <UIcon name="i-lucide-wallet-cards" class="size-4 text-success" />
                      <div>
                        <p class="text-muted text-xs">Pending Payouts</p>
                        <p class="mt-1 text-lg font-semibold tracking-tight text-highlighted">$42,200</p>
                      </div>
                    </div>
                  </section>
                </div>
                <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] relative overflow-hidden p-4 border-default">
                  <div class="relative grid min-w-0 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
                    <div class="flex min-w-0 items-center gap-3 pl-2">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-11 border shadow-sm border-default">
                        <img class="aspect-square h-full w-full" alt="Robert Austin" src="/reference/4bfb635c2f1dd77d.png" loading="lazy" />
                      </span>
                      <div class="min-w-0">
                        <h2 class="text-xl font-semibold tracking-tight text-highlighted">Hello, Robert</h2>
                        <p class="text-muted mt-1 text-sm">Some quick actions for you.</p>
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-2 lg:justify-self-end">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-(--ui-bg)/80 h-10 rounded-lg px-3 text-xs whitespace-nowrap shadow-none" aria-label="Payment Link" type="button" @click="openAction(&quot;Payment Link&quot;)">
                        <UIcon name="i-lucide-link-2" class="size-4" />
                        Payment Link
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-(--ui-bg)/80 h-10 rounded-lg px-3 text-xs whitespace-nowrap shadow-none" aria-label="Quick Payout" type="button" @click="openAction(&quot;Quick Payout&quot;)">
                        <UIcon name="i-lucide-rotate-ccw" class="size-4" />
                        Quick Payout
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-(--ui-bg)/80 h-10 rounded-lg px-3 text-xs whitespace-nowrap shadow-none" aria-label="New Invoice" type="button" @click="openAction(&quot;New Invoice&quot;)">
                        <UIcon name="i-lucide-receipt-text" class="size-4" />
                        New Invoice
                      </UButton>
                    </div>
                  </div>
                </section>
                <section class="border-(--ui-border)/70 bg-default overflow-hidden rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] border-default">
                  <div class="bg-default px-5 py-4">
                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Payment Regions</h2>
                  </div>
                  <div class="relative h-[360px] overflow-hidden bg-[color-mix(in_oklch,var(--ui-bg)_90%,var(--ui-bg-muted))] dark:bg-[color-mix(in_oklch,var(--ui-bg)_86%,black)]">
                    <div class="h-full w-full leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" style="background-color: color-mix(in oklch, var(--ui-bg) 90%, var(--ui-bg-muted)); cursor: default; height: 100%; outline: none; z-index: 1; position: relative;">
                      <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(0px, 0px, 0px);">
                        <div class="leaflet-pane leaflet-tile-pane" />
                        <div class="leaflet-pane leaflet-overlay-pane">
                          <svg class="leaflet-zoom-animated" width="100%" height="100%" viewBox="-79 -36 946 432" style="transform: translate3d(-79px, -36px, 0px);">
                            <g>
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M509 148L513 149L518 144L523 145L528 142L530 142L530 145L537 144L529 147L529 152L527 152L525 158L522 158L517 163L508 162L510 160L508 157L508 151z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M434 249L434 251L430 251L430 258L433 261L414 261L409 259L414 248L412 245L412 237L419 237L421 241L425 241L425 239L430 240L431 247L434 248zM411 237L411 234L411 236z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M428 135L427 138L425 136L426 130L427 134z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 28%, var(--ui-bg))" fill-opacity="1" d="M490 175L495 175L499 171L497 179L491 177L490 175z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M251 358L248 358L248 350L250 354L255 357L254 359L252 359zM248 349L241 348L241 344L239 344L238 339L241 336L240 335L243 326L241 322L241 315L242 310L244 309L243 304L245 303L244 301L246 298L244 292L245 287L249 281L248 276L251 275L253 270L257 272L257 270L260 270L264 275L270 277L268 282L272 283L276 281L277 278L278 280L270 289L268 299L271 301L272 304L270 308L267 310L261 310L261 315L255 316L255 318L258 318L258 320L255 322L254 327L252 327L250 330L252 333L254 333L247 344L249 349z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M474 134L476 134L480 139L479 140L474 135z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M268 395L264 395L262 397L268 391L270 391L270 393z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M525 337L528 339L527 341L524 341L525 338z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 43%, var(--ui-bg))" fill-opacity="1" d="M678 315L683 315L684 322L683 321L681 323L677 315zM675 253L679 258L680 264L685 267L694 279L694 292L690 297L687 307L684 307L680 310L677 309L678 308L675 310L671 309L669 308L666 302L664 302L664 299L661 301L663 295L660 298L660 300L654 293L650 292L636 295L635 298L630 297L624 300L617 298L619 296L619 292L614 280L614 278L616 280L614 276L616 270L616 272L619 268L629 265L632 262L633 258L634 260L641 253L647 255L646 254L649 250L653 250L651 248L658 250L661 249L658 255L668 261L671 256L672 247L675 252z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M420 114L418 119L405 117L411 116L413 113L416 112L420 113z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M480 140L477 136L478 135L476 134L480 134L480 132L481 134L484 132L486 136L484 142L482 138zM476 138L478 138L479 140L476 139z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M445 234L444 231L447 230L448 231L446 234z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M394 105L396 104L398 106L397 110L391 105L393 104z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M391 212L390 213L389 211L388 204L391 200L394 203L392 209z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M390 201L388 203L380 203L380 206L377 206L375 204L377 198L385 194L390 199z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M572 180L572 183L570 178L566 180L563 171L564 170L571 173L571 175L569 176L570 178L571 176z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M432 126L441 126L442 132L439 132L439 134L432 134L431 126z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M230 176L228 174L229 173L230 175zM230 170L227 170L229 169zM231 170L230 171L230 169z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M425 124L425 128L423 130L418 124L424 124z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M433 96L437 95L440 91L439 90L443 88L448 90L449 95L452 98L449 98L450 102L448 102L447 104L437 102L433 104L433 97z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M207 189L208 187L209 190L207 193L207 190z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M260 271L257 270L257 272L253 270L251 272L249 269L246 261L246 247L255 245L254 248L263 252L265 258L269 258L270 266L262 265L261 268z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 57%, var(--ui-bg))" fill-opacity="1" d="M270 289L278 281L277 278L276 279L277 275L275 275L274 272L270 271L269 258L265 258L263 252L254 248L255 245L245 248L244 244L241 245L237 240L239 236L244 234L246 228L245 225L247 223L246 222L250 222L253 224L259 221L256 219L257 217L261 217L265 214L265 219L267 222L274 220L279 221L282 217L286 222L284 225L288 226L288 228L290 226L296 228L296 230L309 232L311 235L315 236L316 239L314 245L308 252L307 262L302 273L296 273L288 279L289 282L279 297L278 293L271 289z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M616 216L618 214L617 217z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M570 167L570 169L565 168L566 166L570 166z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M445 271L442 272L436 279L433 278L429 281L426 276L426 270L428 270L428 262L436 261L444 270z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M417 210L420 210L428 206L432 202L433 207L437 209L441 214L431 217L425 215L418 220L415 216L416 212z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M258 119L261 119L260 121L257 118zM262 111L256 109L260 109L262 111zM138 113L137 114L133 112L128 109L128 107L133 108L137 111zM273 106L272 109L273 108L276 111L278 111L278 113L280 114L279 119L277 118L277 115L275 118L273 118L275 117L273 116L267 116L267 113L272 104L274 104zM118 95L121 95L120 99L122 102L118 96zM227 64L226 67L224 65L226 63zM221 62L219 64L217 63L221 61zM215 48L215 50L225 57L223 59L219 56L214 60L213 58L211 58L213 48zM233 41L231 41L232 35L235 36L235 39zM194 30L192 32L190 30L188 31L185 29L188 24L192 28zM249 117L247 117L243 123L235 123L232 126L228 127L225 131L220 133L220 122L208 114L206 115L196 113L195 110L195 112L139 112L130 106L129 101L126 100L126 97L123 93L125 89L121 86L114 74L110 78L106 73L102 72L102 27L111 31L116 27L119 28L122 25L128 25L128 22L133 28L136 24L136 29L139 28L139 26L142 26L145 29L152 32L154 31L157 34L154 37L158 38L165 36L167 40L169 37L167 35L171 32L173 32L176 36L182 38L188 37L188 34L190 33L193 35L193 40L194 36L196 36L197 30L192 25L192 18L195 13L199 17L202 24L200 27L204 28L204 34L207 29L210 41L214 32L214 26L220 27L223 30L221 36L223 38L222 41L218 45L214 44L208 56L205 56L203 61L201 61L196 70L196 77L199 78L200 85L207 85L215 91L221 92L220 95L222 102L225 105L227 104L228 100L227 95L225 93L229 92L232 87L231 81L228 78L230 74L229 64L238 63L242 67L242 69L246 69L247 77L250 80L253 78L256 72L263 85L262 87L266 91L271 93L274 98L274 102L265 108L252 108L245 115L243 118L245 118L252 111L255 111L257 112L255 114L256 120L262 121L264 118L264 120L266 121L259 124L255 128L253 127L253 125L256 123L251 123L250 117zM156 5L155 8L160 6L163 10L165 6L167 8L168 15L168 5L172 5L174 8L176 19L183 25L183 27L179 28L181 30L180 32L171 30L167 32L158 33L154 29L153 30L150 25L160 23L156 21L149 22L148 20L152 17L146 16L149 8L154 4zM176 3L174 8L171 3L174 2zM232 5L233 7L226 8L223 4L223 1L229 1zM212 5L214 9L215 4L220 1L224 8L224 12L230 8L237 14L237 17L241 16L243 20L248 22L249 24L251 30L248 32L252 36L256 37L258 42L262 42L261 46L257 51L252 45L249 45L249 48L255 54L255 62L248 57L253 64L248 64L243 61L236 53L230 55L228 53L229 50L237 49L237 45L240 40L239 36L231 31L233 30L231 26L227 24L223 27L208 23L206 20L208 18L205 18L206 5L208 2L213 0zM184 0L187 2L190 1L191 3L189 6L192 9L192 15L186 17L185 14L180 9L180 7L184 8L182 3zM199 8L196 13L194 12L193 3L196 -2L204 0L201 6zM144 17L138 20L137 17L133 14L137 1L135 -3L142 -4L150 -2L154 3L146 9L144 14zM198 -8L197 -5L191 -8L192 -12L195 -14L197 -11zM188 -23L190 -15L189 -9L185 -8L183 -9L183 -14L180 -13L180 -19L182 -19L185 -22L188 -22zM168 -18L169 -15L171 -17L173 -16L172 -9L157 -4L157 -6L161 -10L149 -10L154 -21L160 -18L163 -13L167 -12L164 -20L166 -23L168 -22zM196 -26L198 -23L202 -23L204 -20L203 -17L207 -13L212 -12L220 -15L223 -14L225 -11L224 -6L221 -4L209 -4L200 -7L199 -16L197 -19L193 -20L191 -23L191 -27zM152 -31L151 -21L142 -16L139 -18L146 -30L150 -30zM197 -30L193 -30L192 -33L196 -33L198 -31zM164 -32L161 -29L158 -32L159 -35L165 -35zM193 -36L190 -33L189 -36zM185 -36L186 -34L181 -36zM232 -36L229 -34L226 -27L226 -25L229 -25L229 -23L224 -18L219 -20L213 -19L206 -21L206 -25L210 -27L209 -34L215 -30L211 -36z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M405 116L407 119L406 120L398 120L398 118L403 115z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M248 350L248 358L251 359L249 360L243 358L236 351L243 355L247 350zM251 272L251 275L248 276L249 281L245 287L244 292L246 298L244 301L245 303L243 304L244 309L242 310L241 315L241 322L243 325L240 335L241 336L238 339L239 343L241 344L241 348L248 349L246 349L243 354L235 349L234 337L237 332L234 331L236 329L236 324L239 325L240 319L238 319L238 322L238 306L242 298L242 286L245 269L244 263L246 262L250 272z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M537 144L537 142L534 139L536 136L540 136L541 134L547 131L547 129L549 129L547 124L552 122L553 117L557 118L559 113L562 111L568 116L569 123L578 126L580 130L591 130L597 133L599 131L610 128L611 123L614 124L621 119L627 119L624 114L622 116L619 116L618 114L621 109L623 110L626 108L629 102L629 98L632 97L638 98L643 109L649 112L649 115L658 113L654 123L650 124L649 131L647 129L647 131L642 133L641 132L638 136L630 140L632 136L631 135L622 140L623 142L632 145L626 150L628 151L631 158L631 166L628 168L625 174L619 178L615 178L614 180L609 181L608 183L604 180L601 180L601 178L598 177L590 179L591 181L588 181L584 175L582 176L585 167L580 165L579 163L576 163L572 167L567 166L565 168L565 166L559 166L552 161L546 160L544 158L545 151L539 148L539 146zM608 187L606 188L605 185L608 184L608 186z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M375 204L377 206L380 206L380 214L371 216L369 212L369 205L374 204z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M417 210L415 216L418 219L418 222L412 220L405 220L406 219L403 216L406 211L410 211L415 200L417 205L414 206L417 210z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M434 247L432 247L430 244L430 240L426 239L425 241L421 241L419 238L411 237L411 235L415 235L418 233L418 230L422 226L422 220L425 215L430 217L441 214L442 216L446 216L449 221L447 222L444 231L448 242L444 242L443 244L443 249L446 252L435 247z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M412 235L408 233L410 232L409 231L411 229L415 229L415 223L412 221L418 222L418 220L422 218L422 226L418 230L417 234L413 235z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M252 223L250 221L246 222L247 223L245 225L245 234L244 230L239 230L235 225L232 225L227 222L231 217L231 213L229 210L235 203L242 200L243 201L239 204L240 210L246 213L250 212L251 221z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M219 208L213 204L218 203L220 206L219 208z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M221 177L224 177L237 183L230 184L231 183L221 179L222 178L215 180L220 177z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M452 149L456 148L452 150z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M452 149L453 150L451 150z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M420 113L413 112L411 108L415 105L419 106L424 110L420 112z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 59%, var(--ui-bg))" fill-opacity="1" d="M413 112L412 116L401 116L402 112L398 110L398 103L400 101L400 98L404 95L403 92L406 92L410 95L411 94L415 98L414 99L416 105L411 108L412 111z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M473 199L472 203L470 203L470 201L472 200z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M406 92L403 92L402 87L403 84L407 82L408 87L405 90zM412 90L410 93L408 91L408 89L411 88z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M242 185L244 184L249 187L245 187L242 189L242 186z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M395 186L392 186L390 183L369 168L369 164L379 160L379 158L384 155L382 149L392 145L403 145L401 154L403 155L406 163L405 171L410 176L397 185z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M227 222L232 225L233 224L235 227L229 231L227 235L224 234L226 230L224 230L223 227L226 223z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M460 180L436 180L437 158L444 160L447 158L450 158L450 160L454 159L456 162L454 167L451 162L458 175L457 176L460 179z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M473 199L472 200L465 195L459 196L460 190L463 188L465 193L472 199z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M368 132L367 129L370 127L382 128L392 131L390 134L387 135L385 139L386 140L382 146L376 147L371 145L371 138L373 133L369 131z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M435 82L433 77L436 75L442 75L442 82L439 83L437 81z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M471 200L470 203L472 203L473 206L482 209L476 215L464 218L458 215L454 209L452 209L459 197L465 195L471 199z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M434 47L433 37L428 30L429 29L431 32L434 31L436 33L439 26L442 24L444 26L443 34L446 38L444 42L447 48L445 52L447 55L446 58L449 61L449 63L442 71L432 74L429 70L428 62L437 51L437 49z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M745 260L745 262L743 262L744 261zM747 259L745 259L748 259zM24 259L24 258z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M263 347L265 345L270 346L269 348L267 349L266 347L264 349z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M391 105L395 109L402 112L401 116L398 118L401 127L399 129L392 129L392 131L382 128L384 121L382 117L377 115L377 113L379 112L383 113L382 109L384 111L389 108L389 106zM282 217L279 221L276 220L276 215L278 213L282 216zM405 131L405 133L403 131L405 129z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M409 220L412 220L415 223L415 228L414 230L411 229L409 231L410 232L408 233L404 227L406 223L409 223z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 62%, var(--ui-bg))" fill-opacity="1" d="M374 96L371 93L372 91L375 94zM380 79L378 83L382 82L380 89L382 89L386 98L389 100L389 104L387 106L380 106L379 108L377 107L375 109L374 108L379 104L375 102L378 101L376 99L377 97L380 98L379 93L376 93L377 90L376 89L375 91L374 86L374 82L376 79L378 79z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M476 134L470 133L469 130L466 128L476 130L480 134L477 133z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M380 206L380 204L386 203L388 212L382 216L380 215L381 208z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M370 204L370 208L369 210L367 210L364 205L359 207L356 203L359 200L367 200L369 204z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M352 198L358 198L354 198z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M358 200L356 203L352 200L355 199z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M405 220L409 220L409 223L405 223z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M427 138L428 135L435 133L439 134L439 132L440 133L439 135L434 135L435 137L432 136L432 140L434 142L432 144L433 146L430 145L427 139zM434 148L439 150L433 149z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M346 -36L346 -31L349 -25L346 -25L342 -22L346 -17L347 -11L344 -10L347 -3L343 -3L345 0L344 3L339 4L341 11L337 9L336 11L339 12L342 16L342 21L339 22L335 16L335 21L333 24L341 24L330 34L322 36L313 47L306 49L303 58L300 62L301 65L299 73L296 73L293 70L289 70L282 58L281 51L278 46L279 42L277 41L279 34L283 32L284 25L279 29L276 27L277 20L283 22L277 16L274 15L276 9L271 -6L268 -9L268 -13L263 -18L248 -17L242 -25L252 -29L243 -31L239 -36z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M207 189L207 193L209 193L205 197L203 197L201 195L202 192L204 192L202 190L205 189z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M272 221L266 221L266 216L263 213L264 209L266 208L271 213L269 217L271 219z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M206 196L209 193L217 193L219 195L215 195L211 199L207 196z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M424 124L418 123L423 130L418 128L416 124L414 124L414 122L416 122L419 119L425 123z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M242 185L242 187L240 188L236 187L240 187L240 185L238 185L240 184z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M419 118L420 114L432 114L428 120L421 121L419 118z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M629 246L625 244L629 245zM637 243L638 244L636 246L634 246L635 244zM623 241L626 243L621 243L623 242zM633 241L633 243L627 243L631 242zM605 239L609 238L619 242L616 243L598 239L599 237L604 238zM657 238L656 239L657 237zM642 232L641 233L639 231L641 231zM648 231L649 233L643 232L646 231zM670 230L670 243L666 241L663 242L663 236L655 232L654 233L652 231L655 229L649 228L651 226L656 227L656 231L658 232L662 228L667 230zM638 222L635 225L630 224L627 226L629 228L634 226L630 229L634 236L632 236L633 234L630 234L631 233L629 232L629 230L628 236L626 236L627 234L625 231L629 222L638 222zM645 223L645 225L644 224L643 226L644 227L642 223L643 221L645 222zM607 221L608 223L615 223L617 222L619 216L621 216L623 217L622 219L625 223L623 223L622 227L620 228L620 233L617 233L614 231L609 231L605 226L605 222zM599 237L592 234L592 232L590 231L584 221L578 215L582 214L588 221L591 221L595 225L594 226L596 229L599 231L599 234z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 66%, var(--ui-bg))" fill-opacity="1" d="M572 180L571 176L570 178L569 176L572 173L569 173L564 170L563 171L565 173L563 174L565 180L561 181L560 184L557 185L547 194L547 204L542 209L534 192L532 181L529 182L523 176L525 174L529 175L526 169L528 166L530 167L536 159L537 156L534 151L541 151L543 149L545 151L544 158L549 161L547 165L551 167L563 170L565 166L565 168L570 169L570 167L572 167L576 163L579 163L582 166L577 170L573 179z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M371 92L371 95L374 96L374 98L369 103L366 103L368 99L367 96L369 93z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M509 148L508 157L510 159L508 162L513 169L510 170L510 173L501 171L500 168L496 170L490 167L487 161L484 161L477 152L479 148L477 147L475 139L476 138L477 140L479 140L482 138L485 143L491 146L498 142L509 146z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M476 144L477 147L479 148L477 152L484 162L481 162L480 164L476 164L467 157L465 157L464 154L469 151L469 146L471 144L475 145z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M357 44L356 48L359 51L356 54L350 58L340 56L342 54L338 52L341 51L337 48L338 45L342 45L345 48L348 45L350 47L354 44z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M456 162L455 159L457 154L458 155L456 157L456 163z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M407 118L410 117L414 119L414 121L411 122L411 126L416 132L423 136L423 138L422 136L420 136L419 138L421 139L418 142L418 138L410 133L406 126L401 126L400 121L407 119zM417 142L416 146L411 143L416 142zM405 134L406 136L404 140L402 135L404 135z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M230 187L232 188L228 188L230 187z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M464 154L465 157L460 158L462 161L456 163L458 156L460 156z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 53%, var(--ui-bg))" fill-opacity="1" d="M657 152L656 154L655 153L652 155L655 151zM670 144L669 148L666 151L662 151L659 154L658 151L654 151L649 153L652 154L650 158L648 158L646 154L653 149L659 149L661 144L662 145L666 142L668 139L667 136L670 133L670 142zM675 126L678 125L679 128L676 129L674 132L671 130L670 133L668 133L667 130L668 128L670 128L672 122L674 125z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M562 111L557 118L553 117L552 122L547 124L549 129L547 129L547 131L545 129L535 128L529 130L524 135L520 134L519 129L517 127L511 128L504 122L499 123L499 134L495 131L492 132L492 130L489 129L487 125L489 125L489 123L491 122L493 123L493 118L485 119L483 115L481 116L479 114L482 107L484 109L484 107L488 103L491 103L498 107L500 105L506 107L509 106L510 105L507 102L510 99L510 95L525 91L529 91L529 95L534 95L534 97L541 94L540 95L547 106L548 104L551 106L554 105L558 110L561 109z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M457 214L463 218L466 218L468 216L469 217L468 227L470 228L467 230L466 234L455 227L454 225L457 221L454 216L456 215z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M547 131L541 134L540 136L536 136L534 139L526 138L533 135L531 133L528 133L531 129L534 130L535 128L546 130z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M592 200L593 196L602 196L602 200L599 202L600 203L594 204L593 202z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M644 141L646 144L646 150L640 151L640 143L644 141z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M427 132L426 130L428 128L430 130L428 132z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M480 164L481 162L483 162L483 165L481 164z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M590 181L590 179L592 179L594 182L596 182L597 184L595 186L602 193L602 196L598 196L597 189L589 189L590 185L588 185L588 182z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M458 154L458 151L460 152L459 153z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M369 210L371 216L364 213L363 211L366 208L368 209z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M410 176L405 171L405 161L409 154L417 156L418 159L424 161L428 155L437 158L436 184L418 177L414 179L413 177z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M551 210L549 213L547 211L547 205L550 208z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M444 286L445 287L442 290L440 288L443 285z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M439 90L440 91L437 95L433 96L428 88L437 88z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M397 110L398 108L398 110z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M443 88L439 90L436 87L428 88L429 83L431 82L433 85L435 85L435 82L437 81L441 83L442 86z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M382 149L383 155L379 160L369 164L369 167L363 169L356 181L352 181L357 170L367 162L366 159L373 149L381 149z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M440 114L441 113L445 115L444 116L446 119L444 119L443 122L443 118L440 114z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M486 250L488 256L486 256L481 277L477 278L474 276L473 272L475 266L474 261L476 258L483 254L482 253L484 252L485 249z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 30%, var(--ui-bg))" fill-opacity="1" d="M208 187L203 189L202 190L204 192L202 192L201 194L196 192L190 193L181 188L178 188L173 183L174 180L166 172L166 170L160 164L157 158L155 158L155 160L159 167L162 169L163 175L166 177L165 178L155 167L155 163L150 156L155 155L163 159L172 158L175 160L176 163L179 164L180 162L182 162L186 169L190 171L189 178L193 186L196 188L201 187L204 184L204 182L210 181L211 182L209 187z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M428 135L427 132L431 131L432 134L430 135z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M387 195L385 194L377 198L375 203L372 205L367 200L363 201L363 194L375 193L373 173L376 173L395 186L395 191L392 194L388 195z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M572 183L574 175L575 176L577 171L582 166L584 167L585 169L582 176L584 175L587 180L590 181L583 187L586 198L584 205L585 202L581 190L578 193L575 192L576 188L573 184z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M426 130L423 130L425 128L427 130z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M621 109L618 114L619 116L622 116L624 114L627 118L622 119L614 124L612 123L610 125L610 128L599 131L597 133L591 130L580 130L578 126L569 123L568 116L563 113L563 111L572 106L577 109L582 109L584 107L583 105L585 102L591 105L592 107L599 107L604 111L609 111L616 108L618 109z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M456 248L459 249L467 246L468 254L467 258L461 261L456 266L458 273L457 276L452 278L451 281L449 271L451 269L452 259L447 257L447 255L453 253L457 259L458 255L455 250z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M369 168L376 173L373 173L375 192L362 195L357 191L353 192L354 188L352 182L360 181L360 178L362 177L362 171L369 171z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M456 248L455 250L458 255L457 258L455 258L455 254L452 251L452 244L454 244L455 246z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M616 216L617 217L621 211L624 214L626 214L623 217L619 216L617 222L615 223L607 222L615 217zM591 213L594 215L594 219L596 222L594 223L590 219L587 212L591 213z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M410 260L423 260L429 262L436 260L435 262L428 262L428 270L426 270L426 285L422 286L417 283L415 272L410 262z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M719 268L722 271L720 271L716 267L717 266L719 268z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M393 201L390 201L387 195L392 194L395 191L395 186L410 176L413 177L414 179L416 178L416 181L418 183L417 191L414 193L413 196L415 200L412 197L411 199L395 197L393 200z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M391 212L394 203L393 200L395 197L404 199L411 199L412 197L415 201L410 211L405 212L400 217L395 212L393 212z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M218 203L210 199L218 195L219 196L217 203z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M398 106L396 104L393 104L396 99L400 97L400 101L398 103z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M444 30L444 26L442 24L439 26L436 33L434 31L431 32L429 29L426 30L426 34L422 33L422 36L420 36L413 52L414 54L413 56L411 56L411 73L408 78L407 75L403 80L400 81L397 79L396 65L407 54L416 37L425 26L432 24L435 19L443 18L449 22L446 24L449 28L445 30zM436 -33L431 -29L428 -31L428 -36L433 -35zM424 -36L421 -31L420 -24L418 -23L414 -29L416 -32L412 -36z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M549 161L552 161L555 164L563 167L563 169L561 170L551 167L547 165L548 162z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M734 315L736 315L737 317L733 322L734 323L731 324L728 331L721 330L722 327L730 320L732 315L734 314zM737 303L739 306L739 304L740 305L740 307L744 307L745 309L744 311L742 311L739 317L737 316L738 314L736 312L738 308L737 304L733 299L737 301z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M499 171L500 170L499 171zM497 178L499 175L498 173L501 176L505 177L506 180L499 188L494 191L492 190L491 186L497 184L498 180z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M508 162L519 162L522 158L525 157L527 152L529 152L529 147L531 146L537 144L539 148L543 149L541 151L534 151L537 156L533 164L530 167L528 166L526 169L529 175L525 174L523 176L520 172L510 173L510 170L513 169L509 163z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M230 208L230 210L228 209L228 207L226 207L224 209L225 210L220 208L219 209L220 206L230 207z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M246 247L248 251L246 257L247 259L244 263L233 255L227 242L222 235L223 233L225 232L224 233L227 235L229 231L235 227L234 225L239 230L244 230L245 234L239 236L237 240L241 245L244 244L245 248z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M640 208L641 211L640 212L639 210L638 214L636 213L635 209L632 211L634 207L637 208L638 205L640 207zM635 204L633 207L632 205L636 202zM624 206L622 208L626 202L627 204L625 205zM631 201L634 202L631 204L631 202zM638 200L639 203L637 202L637 205L636 200L638 200zM630 199L628 198L630 198zM630 187L632 187L632 192L630 194L636 199L629 197L629 195L627 194L629 187z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M670 243L670 230L683 237L682 239L689 246L684 246L680 241L677 240L672 244zM700 239L697 237L697 235L700 238zM692 236L688 238L684 237L688 235L689 236L691 233L692 235zM694 234L693 235L693 233L689 231L690 230L694 233z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M433 96L434 106L431 110L432 112L429 110L426 111L421 107L420 108L415 103L416 102L414 96L416 95L421 93L433 95z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M253 187L254 188L251 187z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M636 137L641 132L644 133L647 131L647 129L649 131L647 132L647 135L643 137L643 142L638 143L637 138zM649 131L649 131z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M368 132L373 132L371 141L372 142L370 145L368 145L367 141L368 133z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M276 279L276 281L272 283L268 282L270 278L260 271L262 265L269 266L270 271L274 271L274 274L276 274L277 277z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M457 158L456 159L457 156L458 158z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M488 174L489 171L489 174z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M443 127L433 127L429 124L427 120L433 114L439 114L443 118L442 121L446 123L444 124z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M484 132L482 134L477 130L466 128L460 123L463 120L462 119L465 118L463 117L464 115L466 115L467 111L462 109L461 107L457 107L454 101L451 102L449 100L449 98L451 98L448 93L448 90L445 90L442 86L441 78L443 76L442 75L445 73L442 71L449 63L449 61L446 58L447 55L445 52L447 48L444 42L446 38L443 34L444 30L451 26L454 29L459 30L469 39L469 43L463 47L454 43L456 47L456 54L460 57L461 51L466 54L466 49L471 44L473 44L474 46L476 43L474 40L475 37L473 33L479 35L479 43L494 32L496 32L494 35L496 36L504 31L507 35L509 31L507 28L508 26L517 29L524 36L525 33L521 28L520 19L524 13L525 7L527 6L532 8L532 31L534 34L529 45L532 46L537 38L537 31L534 27L536 21L533 16L537 12L536 7L538 11L537 17L540 18L539 13L542 11L546 11L550 14L548 9L548 1L561 -1L559 -4L561 -10L564 -10L568 -14L579 -18L580 -16L585 -20L589 -20L591 -28L596 -32L599 -29L597 -26L601 -25L602 -21L604 -23L609 -23L614 -19L616 -15L615 -11L606 -2L612 0L613 -1L614 4L615 2L618 1L625 2L625 5L634 6L634 1L641 2L645 6L646 10L644 13L650 20L652 14L655 17L659 15L663 17L664 15L667 16L666 10L669 7L687 11L688 15L694 20L706 20L708 22L707 27L710 28L724 27L727 32L730 31L728 27L729 24L739 26L748 31L748 52L745 54L743 53L747 63L735 66L729 72L729 74L726 71L721 74L715 74L712 80L712 82L714 83L714 88L712 88L711 91L712 93L709 94L708 98L705 99L701 105L699 91L701 83L705 81L715 69L717 63L714 63L708 71L706 66L701 67L696 74L698 77L690 78L690 75L687 75L685 77L672 77L658 93L661 93L662 96L667 95L670 101L668 113L664 120L655 130L653 130L652 128L649 130L650 124L654 123L658 113L649 115L649 112L643 109L638 98L635 97L629 98L629 102L623 110L617 108L610 111L604 111L599 107L592 107L591 105L585 102L583 105L584 107L582 109L577 109L572 106L563 111L561 109L558 110L554 105L551 106L548 104L547 106L540 95L541 94L534 97L534 95L529 95L529 91L525 91L510 95L510 99L507 102L510 105L509 106L506 107L500 105L498 107L496 105L488 103L484 107L484 109L482 107L479 114L481 116L483 115L484 117L484 121L480 125L484 132zM429 91L432 93L426 94L426 92zM675 106L677 112L674 111L673 115L675 120L673 118L672 121L671 98L673 94L674 103zM34 44L35 45L35 41L40 42L44 47L42 49L39 49L38 55L36 55L30 49L27 50L27 46L24 47L24 52L24 31L34 40zM748 20L746 20L748 16zM27 20L24 20L24 16L29 18zM675 5L667 3L672 0L675 3zM689 -9L687 -6L684 -7L680 -10L680 -13L684 -11zM678 -13L676 -7L666 -6L662 -11L663 -16L665 -18L671 -17zM502 21L494 20L490 16L492 8L496 2L494 1L498 -6L498 -9L509 -19L516 -20L519 -24L523 -25L525 -21L510 -11L504 -3L498 10L498 16zM593 -36L586 -34L587 -36z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M447 230L444 231L445 228L447 227L447 230z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M369 167L369 171L362 171L362 177L360 177L360 181L352 181L356 181L363 169L368 167z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M490 175L491 177L498 180L497 184L485 187L482 190L473 189L472 192L466 183L465 178L461 175L456 163L459 164L462 161L460 158L467 157L476 164L482 165L487 169L489 174z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M435 208L433 207L431 199L430 200L432 193L434 193L434 185L436 184L436 180L460 180L461 187L463 188L460 192L454 208L453 200L449 205L446 204L444 206L440 206L436 204L434 208z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M441 214L435 208L436 205L448 205L451 203L452 200L454 204L454 208L452 209L454 209L457 214L450 218L442 216z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M363 200L352 200L352 198L358 198L352 197L351 195L354 191L356 191L362 195L363 199z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M712 246L713 247L711 247L712 246zM710 245L707 244L709 244zM711 244L710 243zM708 242L704 240L707 241zM703 240L702 239z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M359 207L361 205L365 206L363 211L360 209z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M205 197L210 197L205 198z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M472 203L473 202L475 204L483 202L484 207L480 209L472 204z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M470 217L476 215L484 207L484 203L489 201L487 209L482 217L470 228L468 227L468 219z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M432 126L430 131L428 128L427 129L424 125L425 120L427 120L431 125z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M276 220L273 221L269 217L271 213L278 213L276 215L277 220z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M420 114L420 112L424 110L431 111L430 113L421 115z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M414 119L419 118L416 122L414 121z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M428 30L433 37L434 47L431 48L429 54L422 62L420 68L424 73L420 78L418 88L412 91L408 78L411 73L410 60L411 56L413 56L414 54L413 52L420 36L422 36L422 33L426 34L426 30z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M450 279L450 282L448 281L449 278z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M471 144L469 151L460 156L458 155L460 152L458 149L460 145L469 145z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M432 202L428 206L420 210L418 210L414 206L417 205L416 200L413 196L414 193L417 191L418 184L416 178L418 177L434 185L434 193L432 193L430 199L432 202z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M388 203L390 213L388 213L387 211L386 203z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M598 196L593 196L592 200L587 198L585 205L591 213L589 214L584 208L586 199L584 195L585 192L582 187L587 183L590 185L589 189L597 189L598 195z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M537 144L530 145L528 141L523 145L522 144L524 142L522 139L525 137L525 135L528 135L528 137L529 136L526 137L534 139L537 142z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M520 144L518 143L516 147L511 149L509 148L509 146L501 142L494 144L492 135L496 135L494 131L492 132L492 134L493 131L495 131L498 134L501 134L502 131L507 131L507 133L510 134L511 137L520 142z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M638 244L637 243L641 242L639 243z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M262 203L264 203L263 205L261 205L262 204z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M405 161L404 157L401 154L403 146L405 144L407 144L407 146L408 145L408 150L406 151L409 156L406 160z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M474 134L476 138L475 145L460 145L459 148L459 146L456 145L454 147L442 146L439 142L441 136L444 136L445 134L453 132L457 132L463 135L472 133zM439 132L441 131L444 134L442 134L439 137L438 135L440 133z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M631 174L629 180L628 176L630 172L631 173z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M445 234L448 232L447 227L454 227L462 231L465 234L464 237L467 246L460 249L457 248L449 242L445 236z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M446 228L448 218L454 216L457 221L454 227L446 228z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M433 104L437 102L447 104L451 101L454 101L455 105L467 110L466 114L460 119L456 120L456 122L460 122L454 125L454 123L451 123L454 121L453 120L448 119L446 123L443 122L444 119L446 120L444 114L441 113L438 115L432 115L430 113L434 106z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M269 298L270 289L278 293L278 299L270 299z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 74%, var(--ui-bg))" fill-opacity="1" d="M139 112L195 112L195 110L198 113L206 115L208 114L220 122L220 133L225 131L228 127L232 127L235 124L244 122L247 116L249 117L251 123L245 127L244 133L237 135L237 138L235 140L234 138L235 140L233 144L234 142L232 139L233 142L231 142L233 143L234 148L222 158L222 162L225 169L224 173L222 172L218 162L215 163L212 161L206 161L205 164L203 164L202 162L197 162L190 168L191 171L188 171L182 162L180 162L179 164L173 158L163 159L155 156L150 156L148 152L144 151L136 136L137 122L135 114L139 117L140 114zM102 27L102 72L106 73L110 78L114 74L121 86L125 89L125 91L123 93L116 81L109 79L103 74L96 73L90 70L87 74L81 77L82 70L84 69L83 68L76 76L78 78L76 81L65 90L55 94L69 83L70 78L64 79L64 77L60 79L59 73L57 74L53 71L52 67L55 60L60 58L61 59L63 57L61 54L63 52L59 54L54 54L51 53L48 48L55 44L57 44L57 46L61 46L51 34L52 31L58 29L60 23L68 20L71 17L74 18L76 21L80 20L89 24L97 24L102 27zM73 186L73 184L75 185L74 186zM72 183L72 182zM71 181L70 181zM69 181L68 180zM66 180L66 179zM78 84L76 86L75 85L75 83L78 81L80 83zM53 74L50 74L49 72L53 72zM41 57L47 59L45 61L41 59z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M522 144L520 144L520 142L511 137L511 134L508 134L507 131L504 130L501 132L501 134L499 134L499 123L504 122L511 128L517 127L519 129L520 134L524 135L529 131L528 133L531 133L533 135L530 137L528 137L528 135L525 135L525 137L522 138L524 142z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M264 215L261 217L256 217L256 219L259 221L253 224L250 220L251 213L241 211L239 205L243 201L241 202L242 207L242 203L245 202L245 200L246 202L251 204L253 203L256 205L262 203L260 204L264 206L264 208L266 208L264 209L265 211L263 213z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M592 179L598 177L601 178L600 179L603 181L599 184L599 186L605 194L606 201L598 208L596 204L600 203L599 202L602 200L602 194L599 189L595 186L597 184L593 180z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M724 259L722 257zM722 255L722 257L721 255z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M491 186L493 191L489 194L475 200L473 199L473 189L481 190L485 187z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-primary) 33%, var(--ui-bg))" fill-opacity="1" d="M426 276L428 281L431 280L432 278L438 278L438 276L442 272L449 271L450 278L448 279L448 281L451 281L452 283L443 295L438 298L433 297L426 300L423 298L423 292L419 285L426 285zM444 286L443 285L440 288L442 290L445 287z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M433 261L430 258L430 251L434 251L434 247L446 252L446 250L443 247L444 242L449 242L453 245L452 253L447 255L447 257L445 257L440 262L434 260z" />
                              <path class="leaflet-interactive" stroke="color-mix(in oklch, var(--ui-border) 72%, var(--ui-text-muted))" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" fill="color-mix(in oklch, var(--ui-bg-muted) 68%, var(--ui-bg))" fill-opacity="1" d="M445 271L442 269L442 267L439 265L437 261L439 262L445 257L449 257L452 259L452 267L449 271L446 271z" />
                            </g>
                          </svg>
                        </div>
                        <div class="leaflet-pane leaflet-shadow-pane" />
                        <div class="leaflet-pane leaflet-marker-pane" />
                        <div class="leaflet-pane leaflet-tooltip-pane" />
                        <div class="leaflet-pane leaflet-popup-pane" />
                        <div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(370.084px, 316.66px, 0px) scale(1.41421);" />
                      </div>
                      <div class="leaflet-control-container">
                        <div class="leaflet-top leaflet-left" />
                        <div class="leaflet-top leaflet-right" />
                        <div class="leaflet-bottom leaflet-left" />
                        <div class="leaflet-bottom leaflet-right" />
                      </div>
                    </div>
                    <!-- Card 1: Top Countries -->
                    <UCard class="bg-(--ui-bg)/95 border-(--ui-border)/80 absolute right-3 bottom-3 z-10 w-56 overflow-hidden rounded-md shadow-[0_18px_45px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] backdrop-blur-sm dark:shadow-[0_18px_45px_color-mix(in_oklab,_var(--ui-text-highlighted)_35%,_transparent)]" :ui="{ body: 'contents' }">
                      <div class="bg-(--ui-bg-muted)/60 border-(--ui-border)/80 border-b px-4 py-3 border-default">
                        <span class="text-sm font-semibold">Top Countries</span>
                      </div>
                      <div>
                        <div class="border-(--ui-border)/70 hover:bg-(--ui-bg-elevated)/60 flex items-center gap-3 border-b px-4 py-2.5 transition-colors last:border-b-0 border-default">
                          <span class="grid h-[18px] w-7 shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] border-default">
                            <span class="bg-info" />
                            <span class="bg-default" />
                            <span class="bg-error" />
                          </span>
                          <span class="min-w-0 flex-1 truncate text-sm">US</span>
                          <span class="shrink-0 text-sm font-medium tabular-nums">1,184</span>
                          <span class="text-muted shrink-0 text-xs tabular-nums">18%</span>
                        </div>
                        <div class="border-(--ui-border)/70 hover:bg-(--ui-bg-elevated)/60 flex items-center gap-3 border-b px-4 py-2.5 transition-colors last:border-b-0 border-default">
                          <span class="grid h-[18px] w-7 shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] border-default">
                            <span class="bg-warning" />
                            <span class="bg-default" />
                            <span class="bg-success" />
                          </span>
                          <span class="min-w-0 flex-1 truncate text-sm">IN</span>
                          <span class="shrink-0 text-sm font-medium tabular-nums">936</span>
                          <span class="text-muted shrink-0 text-xs tabular-nums">14%</span>
                        </div>
                        <div class="border-(--ui-border)/70 hover:bg-(--ui-bg-elevated)/60 flex items-center gap-3 border-b px-4 py-2.5 transition-colors last:border-b-0 border-default">
                          <span class="grid h-[18px] w-7 shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] border-default">
                            <span class="bg-info" />
                            <span class="bg-default" />
                            <span class="bg-error" />
                          </span>
                          <span class="min-w-0 flex-1 truncate text-sm">GB</span>
                          <span class="shrink-0 text-sm font-medium tabular-nums">812</span>
                          <span class="text-muted shrink-0 text-xs tabular-nums">12%</span>
                        </div>
                        <div class="border-(--ui-border)/70 hover:bg-(--ui-bg-elevated)/60 flex items-center gap-3 border-b px-4 py-2.5 transition-colors last:border-b-0 border-default">
                          <span class="grid h-[18px] w-7 shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] border-default">
                            <span class="bg-inverted" />
                            <span class="bg-error" />
                            <span class="bg-warning" />
                          </span>
                          <span class="min-w-0 flex-1 truncate text-sm">DE</span>
                          <span class="shrink-0 text-sm font-medium tabular-nums">748</span>
                          <span class="text-muted shrink-0 text-xs tabular-nums">11%</span>
                        </div>
                        <div class="border-(--ui-border)/70 hover:bg-(--ui-bg-elevated)/60 flex items-center gap-3 border-b px-4 py-2.5 transition-colors last:border-b-0 border-default">
                          <span class="grid h-[18px] w-7 shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] border-default">
                            <span class="bg-success" />
                            <span class="bg-warning" />
                            <span class="bg-info" />
                          </span>
                          <span class="min-w-0 flex-1 truncate text-sm">BR</span>
                          <span class="shrink-0 text-sm font-medium tabular-nums">682</span>
                          <span class="text-muted shrink-0 text-xs tabular-nums">10%</span>
                        </div>
                      </div>
                    </UCard>
                  </div>
                </section>
                <section class="border-(--ui-border)/70 bg-default overflow-hidden rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] border-default">
                  <div class="border-(--ui-border)/70 border-b px-5 py-4 border-default">
                    <h2 class="text-base font-semibold tracking-tight text-highlighted">Recent activity</h2>
                  </div>
                  <div class="px-5 pb-2">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Amount / Account / More details -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #amount-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Amount" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #amount-cell="{ row }">
                          <template v-if="row.original.amountGroup === '0'">
                            <time>{{ row.original.amount }}</time>
                          </template>
                          <template v-if="row.original.amountGroup === '1'">
                            <div class="flex gap-4">
                              <UIcon :name="row.original.amountName3" class="text-muted mt-0.5 hidden size-5 flex-none sm:block" />
                              <div class="min-w-0 flex-auto">
                                <div class="flex flex-wrap items-center gap-2">
                                  <div class="text-highlighted text-sm font-medium">{{ row.original.amountText8 }}</div>
                                  <div :class="row.original.amountClass9">{{ row.original.amountText10 }}</div>
                                </div>
                                <div class="text-muted mt-1 text-xs">{{ row.original.amountText12 }}</div>
                              </div>
                            </div>
                          </template>
                          <template v-if="row.original.amountGroup === '2'">
                            <div class="flex gap-4">
                              <UIcon :name="row.original.amountName3" class="text-muted mt-0.5 hidden size-5 flex-none sm:block" />
                              <div class="min-w-0 flex-auto">
                                <div class="flex flex-wrap items-center gap-2">
                                  <div class="text-highlighted text-sm font-medium">{{ row.original.amountText8 }}</div>
                                  <div :class="row.original.amountClass9">{{ row.original.amountText10 }}</div>
                                </div>
                              </div>
                            </div>
                          </template>
                        </template>
                        <template #account-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Account" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #account-cell="{ row }">
                          <template v-if="row.original.accountGroup === '0'">

                          </template>
                          <template v-if="row.original.accountGroup === '1'">
                            <div class="text-highlighted text-sm font-medium">{{ row.original.accountText3 }}</div>
                            <div class="text-muted mt-1 text-xs">{{ row.original.accountText5 }}</div>
                          </template>
                        </template>
                        <template #moreDetails-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="More details" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #moreDetails-cell="{ row }">
                          <template v-if="row.original.moreDetailsGroup === '0'">

                          </template>
                          <template v-if="row.original.moreDetailsGroup === '1'">
                            <div class="flex justify-end">
                              <NuxtLink class="text-primary text-sm font-semibold hover:underline" to="#">
                                View detail
                                <span class="sr-only">, reference {{ row.original.moreDetailsText8 }},{{ row.original.moreDetailsText10 }}</span>
                              </NuxtLink>
                            </div>
                            <div class="text-muted mt-1 text-xs">
                              Ref
                              <span class="text-highlighted font-mono">{{ row.original.moreDetailsText14 }}</span>
                            </div>
                          </template>
                        </template>
                      </UTable>
                    </div>
                  </div>
                </section>
              </div>
              <aside class="flex min-w-0 flex-col gap-4">
                <!-- Card 2: $14,237.86 -->
                <UCard class="relative h-[190px] overflow-hidden rounded-xl p-5 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_5%,_transparent)]" :ui="{ body: 'contents' }">
                  <div class="absolute top-0 right-0 h-full w-32 overflow-hidden opacity-60">
                    <div class="absolute top-[-30px] right-[-46px] h-44 w-[5.5rem] rotate-[31deg] rounded-xl border border-default" />
                    <div class="absolute top-28 right-[-62px] h-44 w-[5.5rem] rotate-[31deg] rounded-xl border border-default" />
                  </div>
                  <div class="relative flex items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                        <img class="aspect-square h-full w-full" alt="Robert Austin" src="/reference/4bfb635c2f1dd77d.png" loading="lazy" />
                      </span>
                      <UIcon name="i-lucide-wifi" class="text-muted size-4 rotate-90" />
                    </div>
                    <span class="flex -space-x-1.5">
                      <span class="size-6 rounded-full bg-error" />
                      <span class="size-6 rounded-full bg-warning" />
                    </span>
                  </div>
                  <div class="relative mt-11 flex items-end justify-between gap-4">
                    <div>
                      <p class="text-muted text-sm">Robert Austin</p>
                      <p class="mt-2 text-[1.8rem] leading-none font-semibold tracking-tight text-highlighted">$14,237.86</p>
                    </div>
                    <UBadge color="neutral" variant="subtle" class="bg-default inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-medium border-default">
                      <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                      Active
                    </UBadge>
                  </div>
                </UCard>
                <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] p-5 border-default">
                  <div class="flex items-center justify-between gap-3">
                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Payment Mix</h2>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted h-8 rounded-lg px-2 text-xs" aria-label="View all" type="button" @click="openAction(&quot;View all&quot;)">
                      View all
                    </UButton>
                  </div>
                  <div class="relative mt-7">
                    <div class="bg-(--ui-text-highlighted) text-(--ui-bg) pointer-events-none absolute -top-7 z-10 flex h-5 -translate-x-1/2 items-center gap-1.5 px-2 text-[0.65rem] font-medium whitespace-nowrap shadow-[0_8px_20px_color-mix(in_oklab,_var(--ui-info)_14.000000000000002%,_transparent)] transition-opacity duration-150 translate-y-1 opacity-0" style="left:0">
                      <span>Cards</span>
                      <span class="opacity-65">58%</span>
                    </div>
                    <div class="bg-(--ui-bg-muted)/70 flex h-[46px] overflow-hidden">
                      <UButton color="neutral" variant="outline" class="focus-visible:outline-accented min-w-1 cursor-default transition-[filter] duration-150 hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 basis-[58%] border-l-2 border-success bg-success/10 dark:border-success/70 dark:bg-success/15" aria-label="Cards: 58% share, $72.8K volume, +4.1 change" type="button" @click="openAction(&quot;Cards: 58% share, $72.8K volume, +4.1 change&quot;)" />
                      <UButton color="neutral" variant="outline" class="focus-visible:outline-accented min-w-1 cursor-default transition-[filter] duration-150 hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 basis-[19%] border-l-2 border-info bg-info/10 dark:border-info/70 dark:bg-info/15" aria-label="Wallets: 19% share, $23.9K volume, +6.4 change" type="button" @click="openAction(&quot;Wallets: 19% share, $23.9K volume, +6.4 change&quot;)" />
                      <UButton color="neutral" variant="outline" class="focus-visible:outline-accented min-w-1 cursor-default transition-[filter] duration-150 hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 basis-[13%] border-l-2 border-secondary bg-secondary/10 dark:border-secondary/70 dark:bg-secondary/15" aria-label="Bank: 13% share, $16.3K volume, -1.5 change" type="button" @click="openAction(&quot;Bank: 13% share, $16.3K volume, -1.5 change&quot;)" />
                      <UButton color="neutral" variant="outline" class="focus-visible:outline-accented min-w-1 cursor-default transition-[filter] duration-150 hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 basis-[7%] border-l-2 border-warning bg-warning/10 dark:border-warning/70 dark:bg-warning/14" aria-label="Refunds: 7% share, $8.8K volume, +2.8 change" type="button" @click="openAction(&quot;Refunds: 7% share, $8.8K volume, +2.8 change&quot;)" />
                      <UButton color="neutral" variant="outline" class="focus-visible:outline-accented min-w-1 cursor-default transition-[filter] duration-150 hover:brightness-95 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 basis-[3%] border-l-2 border-error bg-error/10 dark:border-error/70 dark:bg-error/15" aria-label="Disputes: 3% share, $3.7K volume, -2.5 change" type="button" @click="openAction(&quot;Disputes: 3% share, $3.7K volume, -2.5 change&quot;)" />
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="text-muted grid grid-cols-[minmax(0,1fr)_4.5rem_3.5rem_4.25rem] gap-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase">
                      <span>Method</span>
                      <span class="text-right">Volume</span>
                      <span class="text-right">Share</span>
                      <span class="text-right">Change</span>
                    </div>
                    <div class="mt-3 flex flex-col gap-3">
                      <div class="grid grid-cols-[minmax(0,1fr)_4.5rem_3.5rem_4.25rem] items-center gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-success bg-success/10 dark:border-success/80 dark:bg-success/20" />
                          <span class="truncate font-medium">Cards</span>
                        </div>
                        <span class="text-right font-medium">$72.8K</span>
                        <span class="text-muted text-right">58%</span>
                        <span class="flex items-center justify-end gap-1 font-medium text-success dark:text-success">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                          +4.1
                        </span>
                      </div>
                      <div class="grid grid-cols-[minmax(0,1fr)_4.5rem_3.5rem_4.25rem] items-center gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-info bg-info/10 dark:border-info/80 dark:bg-info/20" />
                          <span class="truncate font-medium">Wallets</span>
                        </div>
                        <span class="text-right font-medium">$23.9K</span>
                        <span class="text-muted text-right">19%</span>
                        <span class="flex items-center justify-end gap-1 font-medium text-success dark:text-success">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                          +6.4
                        </span>
                      </div>
                      <div class="grid grid-cols-[minmax(0,1fr)_4.5rem_3.5rem_4.25rem] items-center gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-secondary bg-secondary/10 dark:border-secondary/80 dark:bg-secondary/20" />
                          <span class="truncate font-medium">Bank</span>
                        </div>
                        <span class="text-right font-medium">$16.3K</span>
                        <span class="text-muted text-right">13%</span>
                        <span class="flex items-center justify-end gap-1 font-medium text-error dark:text-error">
                          <UIcon name="i-lucide-arrow-down-right" class="size-3.5" />
                          -1.5
                        </span>
                      </div>
                      <div class="grid grid-cols-[minmax(0,1fr)_4.5rem_3.5rem_4.25rem] items-center gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-warning bg-warning/10 dark:border-warning/80 dark:bg-warning/20" />
                          <span class="truncate font-medium">Refunds</span>
                        </div>
                        <span class="text-right font-medium">$8.8K</span>
                        <span class="text-muted text-right">7%</span>
                        <span class="flex items-center justify-end gap-1 font-medium text-success dark:text-success">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                          +2.8
                        </span>
                      </div>
                      <div class="grid grid-cols-[minmax(0,1fr)_4.5rem_3.5rem_4.25rem] items-center gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-error bg-error/10 dark:border-error/80 dark:bg-error/20" />
                          <span class="truncate font-medium">Disputes</span>
                        </div>
                        <span class="text-right font-medium">$3.7K</span>
                        <span class="text-muted text-right">3%</span>
                        <span class="flex items-center justify-end gap-1 font-medium text-error dark:text-error">
                          <UIcon name="i-lucide-arrow-down-right" class="size-3.5" />
                          -2.5
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="border-(--ui-border)/70 bg-default rounded-xl border shadow-[0_18px_50px_color-mix(in_oklab,_var(--ui-info)_6%,_transparent)] overflow-hidden p-5 border-default">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex min-w-0 items-center gap-2">
                      <span class="bg-default flex size-8 shrink-0 items-center justify-center rounded-lg border border-default">
                        <UIcon name="i-lucide-megaphone" class="size-4" />
                      </span>
                      <div class="min-w-0">
                        <h2 class="truncate text-lg font-semibold tracking-tight text-highlighted">What's New?</h2>
                      </div>
                    </div>
                    <div class="my-auto flex shrink-0 gap-1.5">
                      <UButton color="primary" variant="solid" class="h-1.5 rounded-full transition-all duration-200 bg-(--ui-text-highlighted) w-5" aria-label="Show update 1: Reserve Rules Preview" type="button" @click="openAction(&quot;Show update 1: Reserve Rules Preview&quot;)" />
                      <UButton color="neutral" variant="soft" class="bg-(--ui-text-muted)/25 h-1.5 rounded-full transition-all duration-200 hover:bg-(--ui-text-muted)/45 w-1.5" aria-label="Show update 2: Faster Payout Windows" type="button" @click="openAction(&quot;Show update 2: Faster Payout Windows&quot;)" />
                      <UButton color="neutral" variant="soft" class="bg-(--ui-text-muted)/25 h-1.5 rounded-full transition-all duration-200 hover:bg-(--ui-text-muted)/45 w-1.5" aria-label="Show update 3: Local Wallet Routing" type="button" @click="openAction(&quot;Show update 3: Local Wallet Routing&quot;)" />
                    </div>
                  </div>
                  <div class="mt-4 overflow-hidden">
                    <div class="flex transition-transform duration-300 ease-out" style="transform:translateX(-0%)">
                      <article class="bg-(--ui-bg)/70 min-w-full rounded-lg border p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] border-default">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 gap-1.5 shadow-none border-info/20 bg-info/10 text-info dark:text-info">
                          <UIcon name="i-lucide-newspaper" class="size-3.5" />
                          Risk Engine
                        </div>
                        <h3 class="mt-5 text-base font-semibold tracking-tight text-highlighted">Reserve Rules Preview</h3>
                        <p class="text-muted mt-2 min-h-[5.25rem] text-sm leading-6">Model reserve holds before they go live with processor, country, and dispute-rate conditions in one review flow.</p>
                        <div class="mt-5 flex items-center justify-between gap-3">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-8 rounded-lg px-3 text-xs shadow-none" aria-label="Review rules" type="button" @click="openAction(&quot;Review rules&quot;)">
                            Review rules
                          </UButton>
                          <span class="text-muted text-xs tabular-nums">01 /03</span>
                        </div>
                      </article>
                      <article class="bg-(--ui-bg)/70 min-w-full rounded-lg border p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] border-default">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 gap-1.5 shadow-none border-success/20 bg-success/10 text-success dark:text-success">
                          <UIcon name="i-lucide-newspaper" class="size-3.5" />
                          Settlement
                        </div>
                        <h3 class="mt-5 text-base font-semibold tracking-tight text-highlighted">Faster Payout Windows</h3>
                        <p class="text-muted mt-2 min-h-[5.25rem] text-sm leading-6">Eligible merchants can now move card settlements into an earlier payout batch when risk checks clear before noon.</p>
                        <div class="mt-5 flex items-center justify-between gap-3">
                          <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-8 rounded-lg px-3 text-xs shadow-none" aria-label="View batches" type="button" @click="openAction(&quot;View batches&quot;)">
                            View batches
                          </UButton>
                          <span class="text-muted text-xs tabular-nums">01 /03</span>
                        </div>
                      </article>
                      <article class="bg-(--ui-bg)/70 min-w-full rounded-lg border p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] border-default">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 gap-1.5 shadow-none border-secondary/20 bg-secondary/10 text-secondary dark:text-secondary">
                          <UIcon name="i-lucide-newspaper" class="size-3.5" />
                          Checkout
                        </div>
                        <h3 class="mt-5 text-base font-semibold tracking-tight text-highlighted">Local Wallet Routing</h3>
                        <p class="text-muted mt-2 min-h-[5.25rem] text-sm leading-6">Checkout now recommends regional wallets for returning customers based on approval rate and fee performance.</p>
                        <div class="mt-5 flex items-center justify-between gap-3">
                          <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline h-8 rounded-lg px-3 text-xs shadow-none" aria-label="Tune routing" type="button" @click="openAction(&quot;Tune routing&quot;)">
                            Tune routing
                          </UButton>
                          <span class="text-muted text-xs tabular-nums">01 /03</span>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              </aside>
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
