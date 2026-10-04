<!-- Page: /ai-chat/agent-traces | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Agent traces · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "defaultViewFailedExecutionsSuccessfulExecutions": "Default viewFailed executionsSuccessful executions",
  "field14DaysToday": "14 daysToday",
  "searchTasksAgentsOrRunIDs": "",
  "searchStepsAndMessages": "",
  "transcriptSpanTree": "TranscriptSpan tree"
})

const defaultViewFailedExecutionsSuccessfulExecutionsOptions = [
  "Default view",
  "Failed executions",
  "Successful executions"
]

const field14DaysTodayOptions = [
  "14 days",
  "Today"
]

const transcriptSpanTreeOptions = [
  "Transcript",
  "Span tree"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_84f2",
    "task": "Prepare customer report",
    "request": "“Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.”",
    "requestTitle1": "Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.",
    "requestText3": "Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.",
    "outcome": "Exports above 700 customer records require review before data leaves the reporting workspace.",
    "outcomeTitle1": "Exports above 700 customer records require review before data leaves the reporting workspace.",
    "started": "Sep 18, 12:42"
  },
  {
    "_id": "2",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_91ac",
    "task": "Process customer refund",
    "request": "“Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.",
    "requestText3": "Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.",
    "outcome": "Returning $129.00 to the original payment method",
    "outcomeTitle1": "Returning $129.00 to the original payment method",
    "started": "Sep 18, 12:44"
  },
  {
    "_id": "3",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_78de",
    "task": "Apply discount to Deal #9031",
    "request": "“Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.”",
    "requestTitle1": "Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.",
    "requestText3": "Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.",
    "outcome": "Deal desk can apply discounts up to 20%. A larger discount cannot proceed under this rule. Revise the request to continue.",
    "outcomeTitle1": "Deal desk can apply discounts up to 20%. A larger discount cannot proceed under this rule. Revise the request to continue.",
    "started": "Sep 18, 12:39"
  },
  {
    "_id": "4",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_c31f",
    "task": "Reconcile Stripe payouts",
    "request": "“Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.",
    "requestText3": "Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.",
    "outcome": "payout,invoices,amount,status\npo_91ad,24,18420.00,reconciled",
    "outcomeTitle1": "payout,invoices,amount,status\npo_91ad,24,18420.00,reconciled\n",
    "started": "Sep 18, 12:35"
  },
  {
    "_id": "5",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_b7a1",
    "task": "Refresh renewal forecast",
    "request": "“Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.",
    "requestText3": "Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.",
    "outcome": "Quarterly forecast updated",
    "outcomeTitle1": "Quarterly forecast updated",
    "started": "Sep 18, 12:28"
  },
  {
    "_id": "6",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_a19c",
    "task": "Archive resolved tickets",
    "request": "“Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.",
    "requestText3": "Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.",
    "outcome": "42 tickets archived",
    "outcomeTitle1": "42 tickets archived",
    "started": "Sep 18, 12:16"
  },
  {
    "_id": "7",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--destructive)",
    "runID": "run_f42b",
    "task": "Sync purchase order records",
    "request": "“Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.",
    "requestText3": "Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.",
    "outcome": "—",
    "outcomeTitle1": "Connection timed out after 10s · safe to retry",
    "started": "Sep 18, 11:58"
  },
  {
    "_id": "8",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_02cd",
    "task": "Prepare weekly account digest",
    "request": "“Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.",
    "requestText3": "Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.",
    "outcome": "Posted to #customer-success",
    "outcomeTitle1": "Posted to #customer-success",
    "started": "Sep 18, 11:45"
  },
  {
    "_id": "9",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_d310",
    "task": "Route incoming support requests",
    "request": "“Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.",
    "requestText3": "Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.",
    "outcome": "All 16 requests assigned",
    "outcomeTitle1": "All 16 requests assigned",
    "started": "Sep 18, 10:32"
  },
  {
    "_id": "10",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_2e17",
    "task": "Review vendor onboarding",
    "request": "“Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.",
    "requestText3": "Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.",
    "outcome": "Vendor V-2048 created",
    "outcomeTitle1": "Vendor V-2048 created",
    "started": "Sep 18, 09:14"
  },
  {
    "_id": "11",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_62ca",
    "task": "Validate monthly billing export",
    "request": "“Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.",
    "requestText3": "Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.",
    "outcome": "Billing export validated",
    "outcomeTitle1": "Billing export validated",
    "started": "Sep 18, 16:20"
  },
  {
    "_id": "12",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_519f",
    "task": "Refresh customer health scores",
    "request": "“Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.",
    "requestText3": "Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.",
    "outcome": "Customer health dashboard updated",
    "outcomeTitle1": "Customer health dashboard updated",
    "started": "Sep 18, Sep 4, 14:10"
  },
  {
    "_id": "13",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_84f2_17",
    "task": "Prepare customer report",
    "request": "“Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.”",
    "requestTitle1": "Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.",
    "requestText3": "Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.",
    "outcome": "Exports above 700 customer records require review before data leaves the reporting workspace.",
    "outcomeTitle1": "Exports above 700 customer records require review before data leaves the reporting workspace.",
    "started": "Sep 17, 12:42"
  },
  {
    "_id": "14",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_91ac_17",
    "task": "Process customer refund",
    "request": "“Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.",
    "requestText3": "Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.",
    "outcome": "Returning $129.00 to the original payment method",
    "outcomeTitle1": "Returning $129.00 to the original payment method",
    "started": "Sep 17, 12:44"
  },
  {
    "_id": "15",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_78de_17",
    "task": "Apply discount to Deal #9031",
    "request": "“Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.”",
    "requestTitle1": "Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.",
    "requestText3": "Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.",
    "outcome": "Deal desk can apply discounts up to 20%. A larger discount cannot proceed under this rule. Revise the request to continue.",
    "outcomeTitle1": "Deal desk can apply discounts up to 20%. A larger discount cannot proceed under this rule. Revise the request to continue.",
    "started": "Sep 17, 12:39"
  },
  {
    "_id": "16",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_c31f_17",
    "task": "Reconcile Stripe payouts",
    "request": "“Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.",
    "requestText3": "Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.",
    "outcome": "payout,invoices,amount,status\npo_91ad,24,18420.00,reconciled",
    "outcomeTitle1": "payout,invoices,amount,status\npo_91ad,24,18420.00,reconciled\n",
    "started": "Sep 17, 12:35"
  },
  {
    "_id": "17",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_b7a1_17",
    "task": "Refresh renewal forecast",
    "request": "“Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.",
    "requestText3": "Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.",
    "outcome": "Quarterly forecast updated",
    "outcomeTitle1": "Quarterly forecast updated",
    "started": "Sep 17, 12:28"
  },
  {
    "_id": "18",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_a19c_17",
    "task": "Archive resolved tickets",
    "request": "“Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.",
    "requestText3": "Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.",
    "outcome": "42 tickets archived",
    "outcomeTitle1": "42 tickets archived",
    "started": "Sep 17, 12:16"
  },
  {
    "_id": "19",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--destructive)",
    "runID": "run_f42b_17",
    "task": "Sync purchase order records",
    "request": "“Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.",
    "requestText3": "Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.",
    "outcome": "—",
    "outcomeTitle1": "Connection timed out after 10s · safe to retry",
    "started": "Sep 17, 11:58"
  },
  {
    "_id": "20",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_02cd_17",
    "task": "Prepare weekly account digest",
    "request": "“Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.",
    "requestText3": "Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.",
    "outcome": "Posted to #customer-success",
    "outcomeTitle1": "Posted to #customer-success",
    "started": "Sep 17, 11:45"
  },
  {
    "_id": "21",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_d310_17",
    "task": "Route incoming support requests",
    "request": "“Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.",
    "requestText3": "Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.",
    "outcome": "All 16 requests assigned",
    "outcomeTitle1": "All 16 requests assigned",
    "started": "Sep 17, 10:32"
  },
  {
    "_id": "22",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_2e17_17",
    "task": "Review vendor onboarding",
    "request": "“Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.",
    "requestText3": "Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.",
    "outcome": "Vendor V-2048 created",
    "outcomeTitle1": "Vendor V-2048 created",
    "started": "Sep 17, 09:14"
  },
  {
    "_id": "23",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_62ca_17",
    "task": "Validate monthly billing export",
    "request": "“Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.",
    "requestText3": "Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.",
    "outcome": "Billing export validated",
    "outcomeTitle1": "Billing export validated",
    "started": "Sep 17, 16:20"
  },
  {
    "_id": "24",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_519f_17",
    "task": "Refresh customer health scores",
    "request": "“Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.",
    "requestText3": "Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.",
    "outcome": "Customer health dashboard updated",
    "outcomeTitle1": "Customer health dashboard updated",
    "started": "Sep 17, Sep 4, 14:10"
  },
  {
    "_id": "25",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_84f2_16",
    "task": "Prepare customer report",
    "request": "“Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.”",
    "requestTitle1": "Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.",
    "requestText3": "Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.",
    "outcome": "Exports above 700 customer records require review before data leaves the reporting workspace.",
    "outcomeTitle1": "Exports above 700 customer records require review before data leaves the reporting workspace.",
    "started": "Sep 16, 12:42"
  },
  {
    "_id": "26",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_91ac_16",
    "task": "Process customer refund",
    "request": "“Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.",
    "requestText3": "Process customer refund. Payment pi_84kc · $129.00. Follow the workspace approval and data handling rules.",
    "outcome": "Returning $129.00 to the original payment method",
    "outcomeTitle1": "Returning $129.00 to the original payment method",
    "started": "Sep 16, 12:44"
  },
  {
    "_id": "27",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--ui-text-muted)",
    "runID": "run_78de_16",
    "task": "Apply discount to Deal #9031",
    "request": "“Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.”",
    "requestTitle1": "Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.",
    "requestText3": "Apply discount to Deal #9031. Harborline Apps · annual team plan. Follow the discount policy.",
    "outcome": "Deal desk can apply discounts up to 20%. A larger discount cannot proceed under this rule. Revise the request to continue.",
    "outcomeTitle1": "Deal desk can apply discounts up to 20%. A larger discount cannot proceed under this rule. Revise the request to continue.",
    "started": "Sep 16, 12:39"
  },
  {
    "_id": "28",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_c31f_16",
    "task": "Reconcile Stripe payouts",
    "request": "“Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.",
    "requestText3": "Reconcile Stripe payouts. 24 transactions · $18,420.00. Follow the workspace approval and data handling rules.",
    "outcome": "payout,invoices,amount,status\npo_91ad,24,18420.00,reconciled",
    "outcomeTitle1": "payout,invoices,amount,status\npo_91ad,24,18420.00,reconciled\n",
    "started": "Sep 16, 12:35"
  },
  {
    "_id": "29",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_b7a1_16",
    "task": "Refresh renewal forecast",
    "request": "“Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.",
    "requestText3": "Refresh renewal forecast. 86 accounts renewing this quarter. Follow the workspace approval and data handling rules.",
    "outcome": "Quarterly forecast updated",
    "outcomeTitle1": "Quarterly forecast updated",
    "started": "Sep 16, 12:28"
  },
  {
    "_id": "30",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_a19c_16",
    "task": "Archive resolved tickets",
    "request": "“Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.",
    "requestText3": "Archive resolved tickets. 42 tickets resolved more than 30 days ago. Follow the workspace approval and data handling rules.",
    "outcome": "42 tickets archived",
    "outcomeTitle1": "42 tickets archived",
    "started": "Sep 16, 12:16"
  },
  {
    "_id": "31",
    "actions": "",
    "actionsGroup": "0",
    "actionsStyle2": "background:var(--destructive)",
    "runID": "run_f42b_16",
    "task": "Sync purchase order records",
    "request": "“Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.",
    "requestText3": "Sync purchase order records. 12 approved purchase orders. Follow the workspace approval and data handling rules.",
    "outcome": "—",
    "outcomeTitle1": "Connection timed out after 10s · safe to retry",
    "started": "Sep 16, 11:58"
  },
  {
    "_id": "32",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_02cd_16",
    "task": "Prepare weekly account digest",
    "request": "“Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.",
    "requestText3": "Prepare weekly account digest. 18 account updates. Follow the workspace approval and data handling rules.",
    "outcome": "Posted to #customer-success",
    "outcomeTitle1": "Posted to #customer-success",
    "started": "Sep 16, 11:45"
  },
  {
    "_id": "33",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_d310_16",
    "task": "Route incoming support requests",
    "request": "“Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.",
    "requestText3": "Route incoming support requests. 16 new support requests. Follow the workspace approval and data handling rules.",
    "outcome": "All 16 requests assigned",
    "outcomeTitle1": "All 16 requests assigned",
    "started": "Sep 16, 10:32"
  },
  {
    "_id": "34",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_2e17_16",
    "task": "Review vendor onboarding",
    "request": "“Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.",
    "requestText3": "Review vendor onboarding. Vela Design Co. · vendor profile. Follow the workspace approval and data handling rules.",
    "outcome": "Vendor V-2048 created",
    "outcomeTitle1": "Vendor V-2048 created",
    "started": "Sep 16, 09:14"
  },
  {
    "_id": "35",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_62ca_16",
    "task": "Validate monthly billing export",
    "request": "“Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.",
    "requestText3": "Validate monthly billing export. Monthly billing summary. Follow the workspace approval and data handling rules.",
    "outcome": "Billing export validated",
    "outcomeTitle1": "Billing export validated",
    "started": "Sep 16, 16:20"
  },
  {
    "_id": "36",
    "actions": "",
    "actionsGroup": "1",
    "actionsStyle2": "",
    "runID": "run_519f_16",
    "task": "Refresh customer health scores",
    "request": "“Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.”",
    "requestTitle1": "Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.",
    "requestText3": "Refresh customer health scores. Usage and support activity. Follow the workspace approval and data handling rules.",
    "outcome": "Customer health dashboard updated",
    "outcomeTitle1": "Customer health dashboard updated",
    "started": "Sep 16, Sep 4, 14:10"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "actions",
    "header": ""
  },
  {
    "accessorKey": "runID",
    "header": "Run ID"
  },
  {
    "accessorKey": "task",
    "header": "Task"
  },
  {
    "accessorKey": "request",
    "header": "Request"
  },
  {
    "accessorKey": "outcome",
    "header": "Outcome"
  },
  {
    "accessorKey": "started",
    "header": "Started"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchTasksAgentsOrRunIDs || '').toLowerCase()
  const keys = ["actions","runID","task","request","outcome","started"] as const
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

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["actions","runID","task","request","outcome","started"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-agent-traces.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-traces">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="explorer-module__nb0LSq__screen">
        <section class="explorer-module__nb0LSq__main" aria-label="Trace explorer">
          <div class="explorer-module__nb0LSq__header">
            <h1>Executions</h1>
            <span class="text-muted ml-auto text-xs">Customer operations</span>
          </div>
          <div class="explorer-module__nb0LSq__controls">
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__control" aria-label="Add filter" type="button" @click="openAction(&quot;Add filter&quot;)">
              <UIcon name="i-lucide-list-filter" class="size-4" />
              Add filter
            </UButton>
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__control" aria-label="Columns" type="button" @click="openAction(&quot;Columns&quot;)">
              <UIcon name="i-lucide-columns-3" class="size-4" />
              Columns
            </UButton>
            <USelect v-model="form.defaultViewFailedExecutionsSuccessfulExecutions" :items="defaultViewFailedExecutionsSuccessfulExecutionsOptions" aria-label="Saved view" class="explorer-module__nb0LSq__control" />
            <label class="explorer-module__nb0LSq__control">
              <UIcon name="i-lucide-calendar-days" class="size-4" />
              <USelect v-model="form.field14DaysToday" :items="field14DaysTodayOptions" aria-label="Time range" class="bg-transparent outline-none" />
            </label>
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__control" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
              <UIcon name="i-lucide-refresh-cw" class="size-4" />
              Refresh
            </UButton>
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__control" aria-label="Realtime" type="button" @click="openAction(&quot;Realtime&quot;)">
              <span class="relative h-3.5 w-6 rounded-full bg-(--ui-text-muted)/30">
                <span class="bg-default absolute top-0.5 size-2.5 rounded-full transition-transform left-0.5" />
              </span>
              Realtime
            </UButton>
          </div>
          <label class="explorer-module__nb0LSq__search">
            <UIcon name="i-lucide-search" class="size-4" />
            <UInput v-model="form.searchTasksAgentsOrRunIDs" type="text" aria-label="Search traces" placeholder="Search tasks, agents, or run IDs…" name="searchTasksAgentsOrRunIDs" class="w-full" :ui="{ base: 'h-full' }" />
          </label>
          <div class="explorer-module__nb0LSq__chart">
            <div class="explorer-module__nb0LSq__plot">
              <div class="explorer-module__nb0LSq__axis">
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
                <span>0</span>
              </div>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:15%" aria-label="Filter by success status. 3 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 3 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:25%" aria-label="Filter by success status. 5 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 5 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:10%" aria-label="Filter by success status. 2 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 2 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:40%" aria-label="Filter by success status. 8 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 8 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:65%" aria-label="Filter by error status. 11 successes, 2 errors" type="button" @click="openAction(&quot;Filter by error status. 11 successes, 2 errors&quot;)">
                <span style="height:84.61538461538461%;background:var(--trace-success)" />
                <span style="height:15.384615384615385%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:35%" aria-label="Filter by success status. 7 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 7 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:10%" aria-label="Filter by success status. 2 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 2 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:30%" aria-label="Filter by success status. 6 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 6 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:45%" aria-label="Filter by success status. 9 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 9 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:70%" aria-label="Filter by success status. 14 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 14 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:60%" aria-label="Filter by success status. 12 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 12 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:40%" aria-label="Filter by success status. 8 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 8 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:80%" aria-label="Filter by success status. 16 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 16 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:35%" aria-label="Filter by success status. 7 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 7 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:25%" aria-label="Filter by success status. 5 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 5 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:90%" aria-label="Filter by success status. 18 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 18 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:45%" aria-label="Filter by success status. 9 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 9 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:15%" aria-label="Filter by success status. 3 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 3 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:35%" aria-label="Filter by success status. 7 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 7 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:80%" aria-label="Filter by error status. 15 successes, 1 errors" type="button" @click="openAction(&quot;Filter by error status. 15 successes, 1 errors&quot;)">
                <span style="height:93.75%;background:var(--trace-success)" />
                <span style="height:6.25%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:80%" aria-label="Filter by success status. 16 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 16 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:45%" aria-label="Filter by success status. 9 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 9 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:15%" aria-label="Filter by success status. 3 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 3 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:25%" aria-label="Filter by success status. 5 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 5 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:40%" aria-label="Filter by success status. 8 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 8 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:65%" aria-label="Filter by success status. 13 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 13 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:70%" aria-label="Filter by error status. 12 successes, 2 errors" type="button" @click="openAction(&quot;Filter by error status. 12 successes, 2 errors&quot;)">
                <span style="height:85.71428571428571%;background:var(--trace-success)" />
                <span style="height:14.285714285714285%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:30%" aria-label="Filter by success status. 6 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 6 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:35%" aria-label="Filter by success status. 7 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 7 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:10%" aria-label="Filter by success status. 2 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 2 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:30%" aria-label="Filter by success status. 6 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 6 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:35%" aria-label="Filter by success status. 7 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 7 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:45%" aria-label="Filter by success status. 9 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 9 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:25%" aria-label="Filter by success status. 5 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 5 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:15%" aria-label="Filter by success status. 3 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 3 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:25%" aria-label="Filter by success status. 5 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 5 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:40%" aria-label="Filter by success status. 8 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 8 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:30%" aria-label="Filter by success status. 6 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 6 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:55.00000000000001%" aria-label="Filter by success status. 11 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 11 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:15%" aria-label="Filter by success status. 3 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 3 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:35%" aria-label="Filter by success status. 7 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 7 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:30%" aria-label="Filter by success status. 6 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 6 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:40%" aria-label="Filter by success status. 8 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 8 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:10%" aria-label="Filter by success status. 2 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 2 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:20%" aria-label="Filter by success status. 4 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 4 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__bar" style="height:45%" aria-label="Filter by success status. 9 successes, 0 errors" type="button" @click="openAction(&quot;Filter by success status. 9 successes, 0 errors&quot;)">
                <span style="height:100%;background:var(--trace-success)" />
                <span style="height:0%;background:var(--destructive)" />
              </UButton>
            </div>
            <div class="explorer-module__nb0LSq__dates">
              <span>Sep 06</span>
              <span>Sep 07</span>
              <span>Sep 09</span>
              <span>Sep 11</span>
              <span>Sep 13</span>
              <span>Sep 15</span>
              <span>Sep 18</span>
            </div>
            <div class="explorer-module__nb0LSq__legend">
              <span>Total:376</span>
              <span class="ml-auto">
                <i class="explorer-module__nb0LSq__dot" style="background:var(--trace-success)" />
                success
              </span>
              <span>
                <i class="explorer-module__nb0LSq__dot" style="background:var(--destructive)" />
                error
              </span>
            </div>
          </div>
          <div class="explorer-module__nb0LSq__tableWrap">
            <!-- Table 1: Run ID / Task / Request / Outcome / Started -->
            <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="explorer-module__nb0LSq__table" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #actions-cell="{ row }">
                <template v-if="row.original.actionsGroup === '0'">
                  <span class="explorer-module__nb0LSq__status" :style="row.original.actionsStyle2" />
                </template>
                <template v-if="row.original.actionsGroup === '1'">
                  <span class="explorer-module__nb0LSq__status" />
                </template>
              </template>
              <template #runID-header="{ column }">
                <UButton color="neutral" variant="ghost" size="xs" label="Run ID" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
              </template>
              <template #runID-cell="{ row }">
                <code>{{ row.original.runID }}</code>
              </template>
              <template #task-header="{ column }">
                <UButton color="neutral" variant="ghost" size="xs" label="Task" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
              </template>
              <template #task-cell="{ row }">
                <UButton color="neutral" variant="ghost" aria-label="Prepare customer report" type="button" @click="openAction(&quot;Prepare customer report&quot;, row.original._id, 1)">
                  <span class="explorer-module__nb0LSq__type">
                    <UIcon name="i-lucide-braces" class="size-4" />
                  </span>
                  <span class="truncate">{{ row.original.task }}</span>
                </UButton>
              </template>
              <template #request-header="{ column }">
                <UButton color="neutral" variant="ghost" size="xs" label="Request" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
              </template>
              <template #request-cell="{ row }">
                <code :title="row.original.requestTitle1">“{{ row.original.requestText3 }}”</code>
              </template>
              <template #outcome-header="{ column }">
                <UButton color="neutral" variant="ghost" size="xs" label="Outcome" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
              </template>
              <template #outcome-cell="{ row }">
                <code :title="row.original.outcomeTitle1">{{ row.original.outcome }}</code>
              </template>
              <template #started-header="{ column }">
                <UButton color="neutral" variant="ghost" size="xs" label="Started" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
              </template>
              <template #started-cell="{ row }">
                {{ row.original.started }}
              </template>
            </UTable>
          </div>
          <footer class="explorer-module__nb0LSq__footer">
            <span>36 traces loaded</span>
            <span>Latest first · sampled project activity</span>
          </footer>
        </section>
        <aside class="explorer-module__nb0LSq__inspector" style="width:460px" aria-label="Trace inspector">
          <USeparator orientation="horizontal" aria-label="Resize trace inspector" aria-valuemin="400" aria-valuenow="460" class="explorer-module__nb0LSq__resize" />
          <div class="explorer-module__nb0LSq__inspectorHeader">
            <span class="explorer-module__nb0LSq__inspectorEyebrow">
              <UIcon name="i-lucide-layers" class="size-4" />
               Execution details
            </span>
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__iconButton" title="Expand inspector" aria-label="Expand inspector" type="button" @click="openAction(&quot;Expand inspector&quot;)">
              <UIcon name="i-lucide-maximize-2" class="size-4" />
            </UButton>
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__iconButton" title="Download trace" aria-label="Export trace" type="button" @click="exportCsv()">
              <UIcon name="i-lucide-arrow-down-to-line" class="size-4" />
            </UButton>
            <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__iconButton" title="Close inspector" aria-label="Close inspector" type="button" @click="openAction(&quot;Close inspector&quot;)">
              <UIcon name="i-lucide-x" class="size-4" />
            </UButton>
          </div>
          <div class="explorer-module__nb0LSq__runSummary">
            <h2>Prepare customer report</h2>
            <div class="explorer-module__nb0LSq__runIdentity">
              <span>Customer reporting</span>
              <code>run_84f2</code>
            </div>
            <div class="explorer-module__nb0LSq__runMetadata">
              <span class="explorer-module__nb0LSq__runStatus">Needs review</span>
              <span>Started Sep 18, 12:42</span>
            </div>
          </div>
          <label class="explorer-module__nb0LSq__search" style="margin:0 8px 8px">
            <UIcon name="i-lucide-search" class="size-4" />
            <UInput v-model="form.searchStepsAndMessages" type="text" aria-label="Search within trace" placeholder="Search steps and messages…" name="searchStepsAndMessages" class="w-full" :ui="{ base: 'h-full' }" />
          </label>
          <section class="explorer-module__nb0LSq__waterfall" aria-label="Execution timeline">
            <div class="explorer-module__nb0LSq__timelineHeader">
              <h3>Execution timeline</h3>
              <span>4 steps · 120s elapsed</span>
            </div>
            <div class="explorer-module__nb0LSq__timelineColumns">
              <span>Step</span>
              <div class="explorer-module__nb0LSq__ruler">
                <span>0s</span>
                <span>60s</span>
                <span>120s</span>
              </div>
              <span class="explorer-module__nb0LSq__timelineResult">State</span>
            </div>
            <div class="explorer-module__nb0LSq__timelineRows">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__timelineRow" title="Interpret request · 14.4s" aria-label="Interpret request14.4s" type="button" @click="openAction(&quot;Interpret request14.4s&quot;)">
                <span class="explorer-module__nb0LSq__timelineName">Interpret request</span>
                <span class="explorer-module__nb0LSq__timelineLane">
                  <span class="explorer-module__nb0LSq__timelineBar" style="left:0%;width:11.999999999999998%" />
                </span>
                <span class="explorer-module__nb0LSq__timelineResult">14.4s</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__timelineRow" title="Read customer data · 20.4s" aria-label="Read customer data20.4s" type="button" @click="openAction(&quot;Read customer data20.4s&quot;)">
                <span class="explorer-module__nb0LSq__timelineName">Read customer data</span>
                <span class="explorer-module__nb0LSq__timelineLane">
                  <span class="explorer-module__nb0LSq__timelineBar" style="left:14.000000000000002%;width:17%" />
                </span>
                <span class="explorer-module__nb0LSq__timelineResult">20.4s</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__timelineRow" title="Calculate metrics · 20.4s" aria-label="Calculate metrics20.4s" type="button" @click="openAction(&quot;Calculate metrics20.4s&quot;)">
                <span class="explorer-module__nb0LSq__timelineName">Calculate metrics</span>
                <span class="explorer-module__nb0LSq__timelineLane">
                  <span class="explorer-module__nb0LSq__timelineBar" style="left:34%;width:17%" />
                </span>
                <span class="explorer-module__nb0LSq__timelineResult">20.4s</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__timelineRow" title="Export 3,120 records · Review" aria-label="Export 3,120 recordsReview" type="button" @click="exportCsv()">
                <span class="explorer-module__nb0LSq__timelineName">Export 3,120 records</span>
                <span class="explorer-module__nb0LSq__timelineLane">
                  <span class="explorer-module__nb0LSq__pendingTrack" />
                </span>
                <span class="explorer-module__nb0LSq__timelineResult">Review</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__timelineRow" title="Notify dashboard owner · Waiting" aria-label="Notify dashboard ownerWaiting" type="button" @click="openAction(&quot;Notify dashboard ownerWaiting&quot;)">
                <span class="explorer-module__nb0LSq__timelineName">Notify dashboard owner</span>
                <span class="explorer-module__nb0LSq__timelineLane">
                  <span class="explorer-module__nb0LSq__pendingTrack" />
                </span>
                <span class="explorer-module__nb0LSq__timelineResult">Waiting</span>
              </UButton>
            </div>
          </section>
          <div class="explorer-module__nb0LSq__transcriptToolbar">
            <USelect v-model="form.transcriptSpanTree" :items="transcriptSpanTreeOptions" aria-label="Trace presentation" class="explorer-module__nb0LSq__control" style="height:24px" />
            <span class="explorer-module__nb0LSq__pill">120.00s</span>
            <span class="explorer-module__nb0LSq__pill">1.8Ktokens</span>
            <span class="explorer-module__nb0LSq__pill">$0.01</span>
          </div>
          <div class="explorer-module__nb0LSq__transcript">
            <div class="explorer-module__nb0LSq__inputBlock">
              <h3>Input</h3>
              <p>Prepare customer report</p>
              <p class="mt-3">Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.</p>
            </div>
            <article id="span-plan" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Interpret request14.40s" type="button" @click="openAction(&quot;Interpret request14.40s&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">Interpret request</strong>
                <span class="explorer-module__nb0LSq__spanMeta">14.40s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
              <div class="explorer-module__nb0LSq__spanBody">
                <section class="explorer-module__nb0LSq__spanSection">
                  <h4>Input</h4>
                  <p>Prepare customer report. 3,120 active customer records · 1.8s. Follow the customer data export.</p>
                </section>
                <section class="explorer-module__nb0LSq__spanSection">
                  <h4>Output</h4>
                  <p>Execute read customer data → calculate metrics → export 3,120 records → notify dashboard owner. Enforce customer data export before continuing.</p>
                </section>
              </div>
            </article>
            <article id="span-agent" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Customer reporting96.00s" type="button" @click="openAction(&quot;Customer reporting96.00s&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">Customer reporting</strong>
                <span class="explorer-module__nb0LSq__spanMeta">96.00s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
            <article id="span-step-0" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Read customer data20.40s" type="button" @click="openAction(&quot;Read customer data20.40s&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">Read customer data</strong>
                <span class="explorer-module__nb0LSq__spanMeta">20.40s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
            <article id="span-check-0" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="BigQuery · result validation2.40s" type="button" @click="openAction(&quot;BigQuery · result validation2.40s&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">BigQuery · result validation</strong>
                <span class="explorer-module__nb0LSq__spanMeta">2.40s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
            <article id="span-step-1" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Calculate metrics20.40s" type="button" @click="openAction(&quot;Calculate metrics20.40s&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">Calculate metrics</strong>
                <span class="explorer-module__nb0LSq__spanMeta">20.40s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
            <article id="span-check-1" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Internal tool · result validation2.40s" type="button" @click="openAction(&quot;Internal tool · result validation2.40s&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">Internal tool · result validation</strong>
                <span class="explorer-module__nb0LSq__spanMeta">2.40s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
            <article id="span-step-2" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Export 3,120 records20.40s" type="button" @click="exportCsv()">
                <strong class="explorer-module__nb0LSq__spanHeading">Export 3,120 records</strong>
                <span class="explorer-module__nb0LSq__spanMeta">20.40s</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
            <article id="span-step-3" class="explorer-module__nb0LSq__spanCard">
              <UButton color="neutral" variant="ghost" class="explorer-module__nb0LSq__spanHeader" aria-label="Notify dashboard ownerNot started" type="button" @click="openAction(&quot;Notify dashboard ownerNot started&quot;)">
                <strong class="explorer-module__nb0LSq__spanHeading">Notify dashboard owner</strong>
                <span class="explorer-module__nb0LSq__spanMeta">Not started</span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </article>
          </div>
        </aside>
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
